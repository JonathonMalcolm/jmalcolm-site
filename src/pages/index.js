import React from "react";
import { graphql } from "gatsby";
import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import FlickrHero from "react-flickr-hero";

import { media } from "../utils/style";

import Layout from "../components/layout";
import NavBar from "../components/navbar";
import HeroText from "../components/heroText";
import SocialIcons from "../components/socialIcons";
import Portfolio from "../components/portfolio";
import Showcase from "../components/showcase";

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`;

const Testo = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  background: gray;
`;

const Title = styled.h1`
  font-family: "Raleway";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`;

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: "Lato";
  }

  p {
    margin-bottom: 64px;
    sfont-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Raleway";
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 25vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`;

const Item = styled.div`
  width: 60%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6{
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  ${media.xs`
    width: 90%;

  `}
`;

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="b689d64a2493dd43ef51a5b7002bf68e"
        searchTerm="outdoors"
        limit={6}
        fillPage
      />
      <HeroText />
      <SocialIcons
        style={{
          position: "absolute",
          margin: "0 auto",
          left: 0,
          right: 0,
          bottom: 16
        }}
        icons={[
          {
            name: "github",
            href: "https://github.com/JonathonMalcolm"
          },
          {
            name: "linkedin",
            href: "https://www.linkedin.com/in/jonathon-malcolm/"
          }
        ]}
      />
      <a id="about-me">About Me</a>
      <Section>
        <Title>About Me</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
              Currently pursueing my Masters of Applied Science from Queen's University... WIP
            </p>
          </Box>
          <Box px={2} width={180}>
            <Img
              sizes={
                props.data.allFile
                  ? props.data.allFile.edges[0].node.childImageSharp.sizes
                  : {}
              }
            />
          </Box>
        </Flex>
      </Section>
      <Title small>Portfolio</Title>
      <a id="portfolio">Portfolio</a>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <a id="experience">Experience</a>
      <Section center dark>
        <h4>Experience</h4>
        <span>Where I've worked throughout my working years.</span>
        <Item>
          <span>September 2019 - Present</span>
          <h6>Graduate Teaching Assistant - Queen's University</h6>
          <p>
            <ul>
              <li>Worked with Professor by assisting students throughout laboratory sessions covering Machine Vision topics.</li>
              <li>Assisted in evaluating students knowledge throughout laboratories.</li>
              <li>Developed new an engaging laboratory exercises.</li>
            </ul>
          </p>
        </Item>
        <Item>
          <span>September 2018 - April 2019</span>
          <h6>Undergraduate Teaching Assistant - Queen's University</h6>
          <p>
            <ul>
              <li>Worked with Professors in multiple classes in assisting students throughout laboratory sessions covering fundamentals of data structures and intro to electronics.</li>
              <li>Assisted in evaluating students knowledge throughout the laboratories.</li>
              <li>Taught multiple students through tutorials as well as individual tutoring.</li>
            </ul>
          </p>
        </Item>
        <Item>
          <span>September 2017 - August 2018</span>
          <h6>Software Development Intern - RL Solutions</h6>
          <p>
            <ul>
              <li>Collaborated with Product Management and Quality Assurance departments throughout the development cycle to ensure clean, reusable code was produced.</li>
              <li>Developed new visual dashboard editor to allow clients to customize all areas of the dashboard.</li>
              <li>Developed new visual dashboard to display client's current software version, increased client upgrades by 53%.</li>
            </ul>
          </p>
        </Item>
        <Item>
          <span>May 2017 - August 2017</span>
          <h6>Undergraduate Research Assistant - Robotics and Computer Vision Lab</h6>
          <p>
            <ul>
            <li>Examined different approaches to stereo vision disparity calculations.</li>
            <li>Assisted in developing new minimalist descriptor for 3D object recognition and point cloud registration.</li>
            </ul>
          </p>
        </Item>
        <Item>
          <span>September 2016 - April 2017</span>
          <h6>Undergraduate Teaching Assistant - Queen's University</h6>
          <p>
            <ul>
              <li>Worked with Professors in multiple classes in assisting students throughout laboratory sessions covering fundamentals of data structures and semiconductor electronics.</li>
              <li>Assisted in evaluating students knowledge throughout the laboratories.</li>
            </ul>
          </p>
        </Item>
      </Section>
      <a id="tech">Tech</a>
      <Section center>
        <h4>Tech</h4>
        <span>Technologies I enjoy working with.WIP</span>
        <Showcase
          images={
            props.data.allImageSharp ? props.data.allImageSharp.edges : []
          }
        />
      </Section>
      <a id="education">Education</a>
      <Section dark center>
        <h4>EDUCATION</h4>
        <Item>
          <span>2018 - Present</span>
          <h6>MASc Computer Engineering in Machine Learning and Computer Vision</h6>
          <p>Queen's University</p>
        </Item>
        <Item>
          <span>2014 - 2019</span>
          <h6>BASc Electrical Engineering with Professional Internship (Honors)</h6>
          <p>Queen's University</p>
        </Item>
      </Section>
       <a id="honoursAndAwards">Honors & Awards</a>
       <Section center>
         <h4>HONORS & AWARDS</h4>
        <span>A list of honors and awards I have recieved for my work.</span>
        <Item>
          <span>2019</span>
          <h6>First Class Honors</h6>
          <p>Recieved this award for achieving a 3.5 GPA or higher.</p>
        </Item>
       </Section> 
    </Content>
  );
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              childImageSharp {
                sizes(
                  maxWidth: 500
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 300, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    allFile(filter: { name: { regex: "/signature/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 200, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
