// import { handlers } from "../../../../constans/auth.js";

// export const { GET, POST } = handlers;

import NextAuth from "next-auth"
import { authoptions } from "./options"

const handler = NextAuth(authoptions)

export {handler as GET, handler as POST}