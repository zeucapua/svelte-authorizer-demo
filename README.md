# svelte-authorizer-demo 

A SvelteKit demo with [Authorizer](https://authorizer.dev/)'s OSS authentication solution. Uses SvelteKit's grouped routes, Railway deployment,
and cookies to access specific pages. If you'd like to create this from scratch or know how this project works,
check out my explainer on [The Thinks](https://thethinks.vercel.app/blog/svelte-authorizer).

## Clone this repo

Use the GitHub CLI to clone this repo to your local machine:

```bash
gh repo clone zeucapua/svelte-authorizer-demo
```

## Developing

Create a `.env` with two variables: `PUBLIC_AUTHORIZER_URL` and `PUBLIC_AUTHORIZER_CLIENT_ID` 
(refer to the [The Thinks](https://thethinks.vercel.app/blog/svelte-authorizer) for where to get the data).

To run this repo on your local machine:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
