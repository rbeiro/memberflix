import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@rbeiro-ui/stitches-config";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>Memberflix</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="annonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
