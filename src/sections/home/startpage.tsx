import ModeToggle from "@/components/modeToggle";
import { Hero } from "./hero";
import SectionStories from "./section-stories";
import { SectionOne } from "./section-one";
import { SectionTwo } from "./section-two";
import { SectionThree } from "./section-three";
import { SectionFour } from "./section-four";
import { SectionFive } from "./section-five";

export function StartPage() {
  return (
    <>
      <ModeToggle />
      <Hero />
      <SectionStories />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* <SectionSix /> */}
      {/* <SectionSeven /> */}
      {/* <SectionVideo /> */}
      {/* <Testimonials /> */}
    </>
  );
}
