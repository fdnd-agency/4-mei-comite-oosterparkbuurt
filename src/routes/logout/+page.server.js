import { redirect } from "@sveltejs/kit"

export const actions = {
    default: async ({ cookies }) => {
        cookies.delete("auth_token", { path: "/" })

        throw redirect(303, "/login")
    }
};
