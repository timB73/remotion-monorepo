## Recreation of the error:

```
Error: A delayRender() "Loading root component - See https://remotion.dev/docs/troubleshooting/loading-root-component if you experience a timeout" was called but not cleared after 28000ms. See https://remotion.dev/docs/timeout for help. The delayRender was called:
    at delayRender (http://localhost:3002/bundle.js:71642:18)
    at 1160 (http://localhost:3002/bundle.js:30394:54)
    at __webpack_require__ (http://localhost:3002/bundle.js:78210:42)
    at http://localhost:3002/bundle.js:78283:37
    at http://localhost:3002/bundle.js:78285:12
    at delayRender (http://localhost:3002/bundle.js:71642:18)
    at 1160 (http://localhost:3002/bundle.js:30394:54)
    at __webpack_require__ (http://localhost:3002/bundle.js:78210:42)
    at http://localhost:3002/bundle.js:78283:37
    at http://localhost:3002/bundle.js:78285:12
    at http://localhost:3002/bundle.js:71660:24
```

## Steps

### 1. Install dependencies

```
cd client
yarn install

cd server
yarn install
```

### 2. Create bundle:

```
cd server
npx tsx create-bundle.ts
```

### 3. Attempt to get compositions

Inside server folder run the command:
`npx remotion compositions out/output-bundle`

It should download the headless chrome and then throw error
