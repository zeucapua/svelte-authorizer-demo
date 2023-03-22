// /src/routes/login/+layout.server.ts
import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  // get cookies, if already set
  const auth_id = cookies.get("auth_id");
  const access_token = cookies.get("access_token");

  // if already set, go to another page
  if (access_token && auth_id) {
    // we will make this "/dashboard" page in the next step
    throw redirect(308, "/dashboard");
  }
}
