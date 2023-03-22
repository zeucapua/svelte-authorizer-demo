// /src/routes/redirect/+page.server.ts
import { redirect } from "@sveltejs/kit";

export async function load({ cookies, url }) {
  // get cookies, if already set
  const auth_id = cookies.get("auth_id");
  const access_token = cookies.get("access_token");

  // if cookies already set, go to home page
  // we will make this "/dashboard" page in the next step
  if (auth_id && access_token) { throw redirect(308, "/dashboard"); }
  else {
    // get the URL parameters
    const auth_id = url.searchParams.get("auth_id");
    const access_token = url.searchParams.get("access_token");
    const expires_in = url.searchParams.get("expires_in");

    // if we are in the redirect page with no URL parameters, 
    // go back to /login to ensure we have data.
    if ( !(auth_id && access_token && expires_in) ) {
      throw redirect(308, "/login");
    }
    
    // other we are going to use the URL parameters that has our relevant data and 
    // set the cookies ourselves and ensure they expire
    cookies.set("auth_id", auth_id, {
      path: "/",
      maxAge: parseInt(expires_in)
    });

    cookies.set("access_token", access_token, {
      path: "/",
      maxAge: parseInt(expires_in)
    });

    // we will make this "/dashboard" page in the next step
    throw redirect(308, "/dashboard");
  }
}
