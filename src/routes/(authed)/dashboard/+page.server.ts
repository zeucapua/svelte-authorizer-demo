// /src/routes/(authed)/dashboard/+page.server.ts 
import { redirect, type Actions } from "@sveltejs/kit";

// connects to the Form component on the page
export const actions : Actions = {
  logout: async ({ cookies }) => {
    // clear cookies from client browser
    cookies.delete("auth_id");
    cookies.delete("access_token");

    // go back to home page
    throw redirect(303, "/");
  }
}
