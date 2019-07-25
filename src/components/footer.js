import React from "react";
import styled, { css } from "styled-components";
import Link from "gatsby-link";
import { Flex, Box } from "grid-styled";
import scrollToElement from "scroll-to-element";
import FlickrLightbox from "react-flickr-lightbox";

import Name from "./name";
import Button from "./button";
import SocialIcons from "./socialIcons";

const Base = styled.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
`;

const FooterText = styled.div`
  padding-top: 6px;
  color: #fff;
  text-align: center;
  a {
    color: #9880dc;
  }
`;

const SocialIconsStyled = styled(SocialIcons)`
  margin-left: -8px;
  text-align: left;
`;

const CenteredButtonBox = styled(Box)`
  margin: 2em auto;
`;

const GalleryContainer = styled.div`
  & > div > div {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <Base {...this.props}>
        <Flex flexWrap="wrap" justifyContent="space-around">
          <Box px={2} width={[1, 1 / 2, 1 / 3, 1 / 6]}>
            <Flex flexDirection="column">
              <Box>
                <Name block />
              </Box>
              <Box>
                <SocialIconsStyled
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
              </Box>
            </Flex>
          </Box>
          <Box width={[1, 1 / 2, 1 / 3, 1 / 6]}>
            <Flex justifyContent="center" flexDirection="column">
              <Box>
                <FooterText>
                  <h4>
                    Made using{" "}
                    <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
                  </h4>
                </FooterText>
              </Box>
              <CenteredButtonBox>
                <Button
                  onClick={() => {
                    scrollToElement("html");
                  }}
                  small="small"
                  dark="dark"
                  opaque="opaque"
                >
                  Top
                </Button>
              </CenteredButtonBox>
            </Flex>
          </Box>
          <Box width={[4 / 5, 1 / 2, 1 / 3, 1 / 6]} pt={2}>
            <Flex alignItems="center" justifyContent="center">
              <GalleryContainer>
                <FlickrLightbox
                    api_key="b689d64a2493dd43ef51a5b7002bf68e"
                    searchTerm="outdoors"
                    
                  limit={8}
                />
              </GalleryContainer>
            </Flex>
          </Box>
        </Flex>
      </Base>
    );
  }
}

export default Footer;
