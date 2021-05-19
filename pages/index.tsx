import React, { FC } from "react";

import siteConfig from "../config/index.json";
import { Layout, Container, Cards } from "../components";
import {
  LandingPageTitle,
  StyledDescription,
} from "../components/styles/layout.styles";
import { getContentList } from "../lib/content";

/**
 * Index page `/index`
 */

//@ts-ignore
const Index: FC = () => {
  return (
    <Layout pathname={"/"} pageTitle="Frontend Engineer">
      <Container>
        <div className="main-container">
          <LandingPageTitle>{siteConfig.author.title}</LandingPageTitle>
          <StyledDescription
            dangerouslySetInnerHTML={{ __html: siteConfig.author.description }}
          ></StyledDescription>
          <StyledDescription>
            I am a constant learner and I learn by building things. I am
            currently redesigning my site and learning about Design Systems
            along the way. I am interested in Backend Developement and Systems
            Programming as well. Whenever I find time I try to learn bit by bit.{" "}
            <br />
            <br />I am open to new opportunities focused on Frontend Engineering
            and Design Systems. I am also open to explore more in Backend
            Development.
            <br />
            <br />
            If you like to reach out to me then feel free to DM me on{" "}
            <a href="https://twitter.com/pandaa880">Twitter</a> or send a
            connection request on{" "}
            <a href="https://www.linkedin.com/in/prashant880/">LinkedIn</a>.
            Always happy to help and talk about tech.
          </StyledDescription>
        </div>
      </Container>
    </Layout>
  );
};

export default Index;
