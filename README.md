# zoderror-showcase

```sh
cd mylib
npm install
npx tsc

cd ../myprogram
npm install
npx tsx index.ts
```
Then it will print:
```sh
false
false
true
true
```

The issue on `zod` github: https://github.com/colinhacks/zod/issues/2241
