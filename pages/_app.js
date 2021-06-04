import "../styles/globals.css";
import { NextIntlProvider } from "next-intl";
import FacebookPixel from "../components/FacebookPixel";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <FacebookPixel>
        <Component {...pageProps} />
      </FacebookPixel>
    </NextIntlProvider>
  );
}

export default MyApp;
