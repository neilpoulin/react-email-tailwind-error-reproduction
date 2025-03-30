## Tailwind error reproduction for react-email v4.0.2

To reproduce the error, use Node v18 and install the project dependencies

```shell
npm i
```

Then, run the react email dev server and visit the `invite` template

```shell
npm run dev
```

You should see an error in your console that says something similar to 

```shell
> email dev --dir src/emails

    React Email 4.0.2
    Running preview at:          http://localhost:3000

✔ Ready in 0.2s

✔ Successfully rendered invite.tsx in 361ms
⨯ [Error: Could not find Tailwind config by inferring it's extension type (tried .ts, .js, .mjs and .cjs).] {
digest: '4214068468',
[cause]: [Object]
}
```

You should also see a toast message in the UI with the digest number. 