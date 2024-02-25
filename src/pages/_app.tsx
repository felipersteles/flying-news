import Providers from "@/utils/providers";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <>
        <Head>
          <title>Flying News 📰</title>
          <meta
            name="description"
            content="The new york times news for react."
          />
        </Head>
        <Component {...pageProps} />
      </>
    </Providers>
  );
}
