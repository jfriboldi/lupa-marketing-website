import React, { useState } from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "../utils";
import Layout from "../components/Layout";
import Hero from "../components/Hero"
import FeatureSection from "../components/featureSection"
import Mockup from '../components/mockup';
import FeatureCards from '../components/featureCards';
import Subscribe from '../components/Subscribe';
import { GetStaticPropsContext } from 'next';
import {useTranslations} from 'next-intl';


const Home = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <Layout>
        <Hero />
        <FeatureSection />
        <Subscribe />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../messages/index/${locale}.json`),
    }
  };
}
export default Home