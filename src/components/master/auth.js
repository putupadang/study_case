import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Auth = ({ children }) => {
  const route = useRouter();
  const currentRoute = route.pathname;
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      route.push("/");
      return;
    }
  }, [currentRoute, session]);

  return <div>{children}</div>;
};

export default Auth;
