# AI code clean-up (beta)

When the [GitHub integration](../../integrations/github.md) has been enabled, Bucket can automatically clean up your code after features turn stale. The bucket bot simply submits a pull request to your GitHub repository which removes the flag code once a feature turns stale.

{% hint style="warning" %}
This feature **keeps the codepath that grants access (isEnabled == true)** when cleaning up and archiving a feature i.e. releasing it everyone by removing the flagging code.
{% endhint %}

{% hint style="info" %}
Note: This works best when using the [React SDK](../../sdk/@bucketco/react-sdk/), but stay tuned for improved Node.js support
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-10 at 14.29.20.png" alt=""><figcaption></figcaption></figure>

## Get started with AI code clean-up

### 1. Connect with GitHub

Make sure the [GitHub integration](https://app.bucket.co/envs/current/settings/org-integrations) is connected for your organization and a repository have been chosen.

### 2. Enable automation

Enable "Auto-create AI Clean-up PRs" under organization-level [Clean-up settings](https://app.bucket.co/envs/current/settings/org-archiving-flow).

This will ensure that newly created features have the automation switched on.

<figure><img src="../../.gitbook/assets/image (23).png" alt="" width="563"><figcaption></figcaption></figure>

### 3. Test it manually

Find a stale feature that is ready for clean-up by looking for the broom icon in the features table.

<figure><img src="../../.gitbook/assets/image (27).png" alt="" width="563"><figcaption></figcaption></figure>

Find the "Clean-up guide" in the feature sidebar, click "Show details" and hit the "Create AI clean-up PR" button to start the process.

<figure><img src="../../.gitbook/assets/image (20).png" alt="" width="563"><figcaption></figcaption></figure>

Within a few minutes, you'll have a GitHub Pull Request that removes the feature flag and keeps the enabled codepath, like here:

<figure><img src="../../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

Magical! ✨

## Formatting clean-up PRs

If you're using eslint and/or prettier in GitHub Actions to ensure that code is correctly formatted, you'll need to set up a small GitHub Action workflow which runs on the AI Clean-up PRs.

The idea is that you run your own formatters with the existing configuration once the Bucket generated AI Clean-up PR has been created and then commit the results directly in the same Pull Request to make the PR checks pass.

Example: `.github/workflows/bucket-clean-up-formatting.yml`

```yaml
name: AI clean-up formatting

on:
  pull_request:
    types: [opened]

permissions:
  contents: write

jobs:
  formatting:
    if: startsWith(github.head_ref, 'bucket-flag-removal/')
    name: ✨ Check formatting
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - name: ☁️ Checkout project
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: ⚙️ Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version-file: ".nvmrc"

      - name: 📥 Install dependencies
        uses: ./.github/actions/install

      - name: ✨ Run formatting
        run: yarn format   # <--- this is where you run `eslint --fix` or `prettier -w` etc.

      - name: 💾 Commit formatted files
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "style: format code (@bucketco: push empty commit)"
```

Take note of the magic ✨ keyword included in the commit message in the final step.

Unfortunately, GitHub purposefully disables running checks on commits that are generated from inside the GitHub Actions job. In order for the checks to run again after the code has been correctly formatted and committed, the @bucketco bot will push an empty commit when it sees a commit with the text `(@bucketco: push empty commit)` .&#x20;

## Under the hood

The GitHub integration continuously checks the codebase against the feature keys in Bucket whenever a commit is pushed to the repository.

When the AI clean-up bot operates, it searches for usage of the Bucket SDK in your codebase and identifies where specific feature keys are used. LLMs are employed to intelligently refactor the code to remove the flag and eliminate codepaths that become unreachable.

For React, this usually corresponds to the `useFeature` hook, like in this contrived example:

```javascript
function StartHuddleButton() {
  const { isEnabled } = useFeature("huddle");
  if (!isEnabled) {
    return null;
  }
  return <button onClick={track}>Start huddle!</button>;
}
```

When the bot cleans up the file, it removes the hook and only retains the `isEnabled` codepath:

```javascript
function StartHuddleButton() {
  return <button onClick={track}>Start huddle!</button>;
}
```

**Limitations**:

* Only `isEnabled` is removed, whereas `track`, `config`, and `requestFeedback` are untouched.
* Works best with the React SDK while in beta.
