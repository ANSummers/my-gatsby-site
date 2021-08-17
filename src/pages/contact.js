import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact" pageHeading="Contact page">
      <p>
        You might be the sweetest peach on a tree, but some people just don't
        like peaches.
      </p>
      <StaticImage
        alt="A very cute cat is sitting in a cardboard box."
        src="../images/catinabox.jpg"
      />
    </Layout>
  );
};

export default ContactPage;
