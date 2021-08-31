import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Layout pageTitle="Blog" pageHeading="Blog">
        <p>All things soft and other interests.</p>
        <ul>
          {data.allFile.nodes.map((node) => {
            return <li key={node.name}>{node.name}</li>;
          })}
        </ul>
      </Layout>
    </div>
  );
};
export const data = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
