import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const providers = [
  GoogleProvider({
    clientId: "441055198941-di0jk89nmo0en41778968h49u09c5kcp.apps.googleusercontent.com",
    clientSecret: "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",
  }),
  // ...add more providers here
];

const options = {
  providers,
};

const Auth = (req, res) => NextAuth(req, res, options);
export default Auth;
