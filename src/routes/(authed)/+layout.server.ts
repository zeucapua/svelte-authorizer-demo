// src/routes/(authed)/+layout.server.ts
import { redirect } from "@sveltejs/kit";

export function load({ cookies }) {
  // get cookies, if already set
  const auth_id = cookies.get("auth_id");
  const access_token = cookies.get("access_token");

  // if not found, go back to /login
  if ( !(access_token && auth_id) ){
    throw redirect(308, "/login");
  }
}
