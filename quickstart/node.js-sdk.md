# Node.js SDK

### Install

```
npm i @bucketco/node-sdk
```

Initialize `bucket`

```tsx
import bucket from "@bucketco/node-sdk"
```

### Create release on Bucket

See [create-your-first-release.md](../product-handbook/create-your-first-release.md "mention")



### Flag evaluation and feature tracking

#### Evaluate feature flag

```javascript
const evaluator = new bucket.flags.Evaluator('sec_prod_G4CYp0UPSs9Qt3fI74jPeX')
const flags = await evaluator.getFeatureFlags({
  context: {
    user: { id: "john_doe" },
    company: { id: "acme_inc" },
  },
});
```

#### Track feature usage

```javascript
// init the script with your publishable key
bucket.init("sec_prod_G4CYp0UPSs9Qt3fI74jPeX", {});

// set current user
bucket.user("john_doe", { name: "John Doe" });

// set current company
bucket.company("acme_inc", { name: "Acme Inc", plan: "pro" });

// track events
bucket.track("sent_message", { foo: "bar" });
```

####

### Full documentation

_Full documentation coming soon._
