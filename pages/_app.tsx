import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Victor | UI/UX Designer"
        titleTemplate="Victor | UI/UX Designer"
        defaultTitle="Victor | UI/UX Designer"
        description="Hey! I'm Victor, A UI/UX Designer and a College Student!"
        openGraph={{
          url: "https://www.github.com/mzmznasipadang",
          title: "Victor | UI/UX Designer",
          description:
            "Hey! I'm Victor, A UI/UX Designer and a College Student!",
            images: [
              {
                url: "https://i.imgur.com/WTOgWyP.png", 
                width: 800,
                height: 420,
                alt: "Victor | UI/UX Designer",
              },
            ],
        }}
        twitter={{
          handle: "@mzmznasipadang",
          site: "@mzmznasipadang",
          cardType: "summary_large_image",
        }}
        
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, UI/UX Designer, Victor, victor, mzmznasipadang, Web Developer, web development, web developer, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
