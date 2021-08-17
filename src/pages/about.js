import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About" pageHeading="About me">
      <p>
        You don't notice your progress in life because you are always raising
        the bar.
      </p>
      <StaticImage alt="Happy tabby." src="../images/handsomeboy.jpg" />
    </Layout>
  );
};

export default AboutPage;
