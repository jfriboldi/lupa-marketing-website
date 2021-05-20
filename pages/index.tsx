import React, { FC, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "../utils";
import Layout from "../components/Layout";
import Hero from "../components/Hero"
import FeatureSection from "../components/featureSection"
import {home} from '../content'
import Mockup from '../components/mockup';
import FeatureCards from '../components/featureCards';
import Subscribe from '../components/Subscribe';

const Home: FC<{ content: { hero: any; features: any[] } }> = ({ content }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <Layout>
        <Hero {...content.hero}/>
        <Mockup />
        
        <FeatureSection
            key={content.features[0].title}
            title={content.features[0].title}
            body={content.features[0].body}
            image={content.features[0].image}
            invert={true}
            link={content.features[0].link}
        />
        <FeatureCards />
        <FeatureSection
            key={content.features[1].title}
            title={content.features[1].title}
            body={content.features[1].body}
            image={content.features[1].image}
            invert={false}
            link={content.features[1].link}
        />
        <FeatureSection
            key={content.features[2].title}
            title={content.features[2].title}
            body={content.features[2].body}
            image={content.features[2].image}
            invert={true}
            link={content.features[2].link}
          />
          <Subscribe />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

Home.defaultProps = {
  content: {
    features: [{ title: 'default feature', body: 'default body', image: '/image/600x300.png', link: '/' }],
    hero: { title: 'default title', body: 'default body' },
  },
}

export function getStaticProps(ctx) {
  return {
    props: {
      content: ctx.preview ? home.draft : home.published,
    }
  }
}

export default Home