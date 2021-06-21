import Head from "next/head";
import Navigation from "./Navigation";
import Foot from "./Foot";
import styled from 'styled-components'
import { FB_PIXEL_ID } from "../utils/fpixel";

const Root = styled.div`
  min-height: 100%;
`;

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <Root>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#fff" />
        {/* Global Site Code Pixel - Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
      </Head>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Foot />
      </footer>
      <style jsx>
        {`
        main {
          position: relative;
          width: 100%;
          overflow: visible;
        }
        
        footer {
          position: relative;
        }
          @media (min-width: 769px) {
            
            
          }
        `}
      </style>
    </Root>
  );
}
