import type { AppProps } from "next/app";
import React from "react";
import { Header } from "../components/Header";
import { globalStyles } from "../styles/global";
import { memberflixTheme } from "@rbeiro-ui/stitches-config";

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <div className={memberflixTheme}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
