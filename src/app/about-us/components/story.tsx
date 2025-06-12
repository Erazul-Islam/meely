import MeelyButton from "@/shared/meely-button";
import React from "react";
import StoryCard from "./story-card";
import Image from "next/image";

const Story = () => {
  return (
    <div className="lg:my-24 max-w-[1440px] px-4 mx-auto mt-10">
      <div className="">
        <div className="flex py-4 justify-center items-center">
          <MeelyButton text="Our Story" />
        </div>
        <p className="text-2xl text-center md:text-6xl font-medium">
          Building Meely — one milestone at a time.
        </p>
        <p className="text-[#67666B] text-center text-sm md:text-2xl font-normal py-4">
          From a simple idea to a fully designed MVP, we’ve been shaping <br />{" "}
          Meely to simplify personal and business finance for everyone.
        </p>
      </div>
      <div className="flex my-12 gap-5 md:flex-row items-center md:items-start flex-col justify-center">
        <div>
          <StoryCard
            year="2025"
            title="MVP Design Completed"
            content="After months of research, user testing, and iteration, the full product design for Meely was completed — ready to enter development and testing."
          />
          <StoryCard
          className="lg:mt-40 mt-4"
            year="2024"
            title="Problem, Research & Planning"
            content="We identified gaps in how people manage money across personal and business accounts, and began shaping the foundation of what would become Meely."
          />
        </div>
        <Image className="hidden md:block" src={"/about/Divider.svg"} height={671} alt="" width={17} />
        <div>
          <StoryCard
          className="lg:mt-40"
            year="2023"
            title="Concept to Clickable Prototype"
            content="We brought the idea to life through wireframes, user flows, and an interactive Figma prototype, laying the groundwork for our all-in-one fintech super app."
          />
          <StoryCard
          className="lg:mt-40 mt-4"
            year="2022"
            title="The Idea Was Born"
            content="Frustrated by having to use 5+ apps to manage finances, we imagined one clean, powerful platform to simplify everything — Meely was born."
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
