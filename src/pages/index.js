import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const blogs = props.data.blogs.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="We are a corporate consulting firm that collaborates to craft corporate wisdom."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>Coefficient <br /> Partners</h1>
          <p>
            We are  a corporate consulting firm that collaborates to craft corporate wisdom .<br /> 
            Our efforts are directed towards providing our clients the best counsel to ensure impeccable decisions and perfect execution translating into a sustainable success.
          </p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Services</h2>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center" style={{marginBottom: "30px"}}>
            <Link className="button button-primary mt-2" to="/services">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Blogs</h2>
          </div>
          {blogs.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                <h2 className="feature-title">{edge.node.frontmatter.title}</h2>
                <div className="feature-content">{edge.node.frontmatter.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>  */}

    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    blogs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}, frontmatter: {}}) {
      edges {
        node {
          id
          frontmatter{
            title
            author
          }
        }
      }
    }
  }
`;

export default Home;
