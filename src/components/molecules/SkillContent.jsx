import { memo } from "react";
import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiReact } from "react-icons/si";

export const SkillContent = memo(() => {
  return (
    <div id="skill" className="flexBox flex-col mb-20">
      <div className="mb-14">
        <Title>Skill</Title>
      </div>
      <div className="mb-10 text-center">
        <Text>プログラミングは以下の３つを主に勉強していました。</Text>
        <Text>
          プログラミングで好きなことは、TypeScriptがうまく機能して、エラーなくコードを書けたときです。
        </Text>
        <Text>今、勉強中なのはGitとNext.jsの２つです。</Text>
      </div>
      <div className="flexBox w-full">
        <div className="mr-10">
          <IoLogoJavascript size={90} />
        </div>
        <div className="mr-10">
          <SiTypescript size={90} />
        </div>
        <div className="">
          <SiReact size={90} />
        </div>
      </div>
    </div>
  );
});
