<!-- /src/routes/+page.svelte -->
<script lang="ts">
  import { goto } from "$app/navigation";
  import { getContext } from "svelte";
  import { Authorizer } from "@authorizerdev/authorizer-svelte";
  import type { AuthorizerState } from "@authorizerdev/authorizer-svelte/types";

  // instantiate Authorizer variables (state and context)
  let auth_state : AuthorizerState;
  let auth_context = getContext("authorizerContext");

  // ensure that state changes when context does
  auth_context.subscribe(
    (data : AuthorizerState) => { auth_state = data; }
  );

  async function authHandler(authResponse : any) {
    const msg = authResponse.message;
    if (msg === "Logged in successfully" || msg === "Signed up successfully.") {
      // get relevant data from loginResponse
      const auth_id = authResponse.user.id;
      const access_token = authResponse.access_token;
      const expires_in = authResponse.expires_in;

      // logout with state to ensure any other authentication data isn't accessed anymore
      await auth_state.logout();

      // go to the redirect page with relevant data as URL parameters
      goto(`/redirect/?auth_id=${auth_id}&access_token=${access_token}&expires_in=${expires_in}`);
    }
  }

</script>


<Authorizer 
  onLogin={(loginResponse) => authHandler(loginResponse)} 
  onSignup={(signupResponse) => authHandler(signupResponse)}
/>
