import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
//indiabiz//6ERk37Jmwm6N:[
const Blog = (props) => {
  const blogs = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-blogs">
      <SEO title="Blog" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {blogs.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="blog">
                <div className="blogs-meta">
                  <h2 className="blogs-title">
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p className="blogs-name">{edge.node.frontmatter.author}</p>      
                </div>
                <div
                  className="blogs-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            author
          }
        }
      }
    }
  }
`;

export default Blog;
