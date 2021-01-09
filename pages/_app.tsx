import { AppProps } from "next/app";
import { Router } from "next/router";

Router.events.on("routeChangeComplete", () => {});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
