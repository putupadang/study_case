import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "441055198941-di0jk89nmo0en41778968h49u09c5kcp.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
});
