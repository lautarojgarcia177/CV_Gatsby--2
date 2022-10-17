import {
  Section,
  Animation,
} from "gatsby-theme-portfolio-minimal";
import React from "react";
import Carousel from "./carousel";

export default function PortfolioSection() {
  return (
    <Animation type="fadeUp">
      <Section heading="Portfolio">
        <Carousel />
      </Section>
    </Animation>
  );
}
