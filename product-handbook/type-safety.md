---
description: Reflag offers type safety which reduces errors and frustation
---

# Type safety

Type safety in Reflag ensures that flag key typos become build errors. This guarantees that if you try to use a non-existent flag key, you'll receive a type error, preventing potential runtime errors and improving code reliability. For remote config, it also ensures that the shape of the payload defined on Reflag matches what your code expects.

Use the Reflag CLI to generate flag types from their definition in Reflag. Once flag types have been generated they are automatically picked up by TypeScript.

It's recommended that you do not check in the flag types, but instead generate them in your build process and on your local development machines.

## Set up type safety for flags

1.  Install the Reflag CLI and set up your repository

    ```
    npm install --save-dev @reflag/cli
    npx reflag init
    ```
2.  Generate the types locally

    ```
    npx reflag types generate
    ```
3.  Add the generated files to `.gitignore`

    ```
    echo "gen/flags.d.ts" >> .gitignore
    ```
4. Retrieve an [API Key](http://app.reflag.com/env-current/settings/org-api-access) for your build system
5.  Set up your build system to run the Reflag CLI to generate types:

    ```
    # make the API key available as the REFLAG_API_KEY environment variable
    npx reflag types generate
    ```

There's further guidance and examples of using [Reflag CLI in CI/CD pipelines](https://docs.reflag.com/api/cli#using-in-ci-cd-pipelines-beta).
