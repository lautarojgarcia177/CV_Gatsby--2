import React from "react";
import {
  AboutSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import PortfolioSection from "../custom_sections/portfolio";

export default function IndexPage() {
  return (
    <>
      <Seo title="Lautaro Garcia Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="technologies" heading="Technologies" />
        <ProjectsSection sectionId="features" heading="Work Experience" />
        <PortfolioSection />
      </Page>
    </>
  );
}
