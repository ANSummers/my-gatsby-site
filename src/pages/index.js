import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle="Home" pageHeading="Home page">
      <p>The first draft is just you telling yourself the story.</p>
      <StaticImage
        alt="a cat enjoying the sunshine on an orange beach towel."
        src="../images/sunshinekitty.jpg"
        loading="eager"
      />
      <StaticImage
        alt="a cat warming his paws by a steaming cup of tea."
        src="../images/hedrinkstea.jpg"
        loading="eager"
      />
      <StaticImage
        alt="a cat sitting on a patio chair."
        src="../images/patiocat.jpg"
        loading="eager"
      />
    </Layout>
  );
};

export default HomePage;
