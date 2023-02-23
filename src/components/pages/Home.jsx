import { memo } from "react";
import { AboutContent } from "../molecules/AboutContent";
import { FutureContent } from "../molecules/Future";
import { MySiteContent } from "../molecules/MySiteContent";
import { SkillContent } from "../molecules/SkillContent";
import { TopContent } from "../molecules/TopContent";

export const Home = memo(() => {
  return (
    <div className=" flex content-center items-center flex-col mt-12 mb-60">
      <div className="w-3/4 max-w-4xl">
        <TopContent />
        <AboutContent />
        <SkillContent />
        <MySiteContent />
        <FutureContent />
      </div>
    </div>
  );
});
