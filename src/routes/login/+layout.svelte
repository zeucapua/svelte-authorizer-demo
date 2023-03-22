<!-- /src/routes/+layout.svelte -->
<script lang="ts">
  // style the Authorizer components; can be configured to your custom theme
  // see https://docs.authorizer.dev/authorizer-svelte#updating-styles
  import "@authorizerdev/authorizer-svelte/styles/default.css";

  // Authorizer Wrapper 
  import { AuthorizerProvider } from "@authorizerdev/authorizer-svelte";
  
  // get our public environment variables using the "$env" Svelte module
  import { PUBLIC_AUTHORIZER_URL, PUBLIC_AUTHORIZER_CLIENT_ID } from "$env/static/public";

</script>


<!-- Let's put it all together! -->
<AuthorizerProvider
  config={{
    authorizerURL: PUBLIC_AUTHORIZER_URL,
    redirectURL: typeof window != "undefined" ? window.location.origin : ``,
    clientID: PUBLIC_AUTHORIZER_CLIENT_ID,
  }}
>
  <slot />
</AuthorizerProvider>

