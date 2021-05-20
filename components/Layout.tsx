import Head from "next/head";
import Navigation from "./Navigation";
import Foot from "./Foot";
import styled from 'styled-components'
import WhatsBtn from "./WhatsBtn";

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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Foot />
      </footer>
      <WhatsBtn />
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
