import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="w-full">
        <p>home page content</p>
        <button className="btn">Button</button>
      </div>
    </>
  );
}
