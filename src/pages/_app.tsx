import Providers from "@/utils/providers";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>Flying News 📰</title>
          <meta
            name="description"
            content="The new york times news for react."
          />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
      </>
    </Providers>
  );
}
