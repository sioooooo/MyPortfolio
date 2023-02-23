import { memo } from "react";
import { LinkButton } from "../atoms/LinkButton";
import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";
import mysite from "../../image/mysite.png";

export const MySiteContent = memo(() => {
  const onClick = () => {};
  return (
    <div id="mysite" className="flexBox flex-col mb-20">
      <div className="mb-14">
        <Title>My Site</Title>
      </div>
      <div className="mb-10 text-center">
        <Text>
          私が作った自作アプリです。Googleのアカウントでログインして、ノートを追加することで
          タイトルとテキストを保存できるシンプルなNoteアプリです。
          制作は、FireBase×TypeScript×Reactで行いました。
        </Text>
      </div>
      <button onClick={onClick} className="w-2/3 mb-10 border shadow ">
        <a href="https://note-app-814d6.web.app/note">
          <img className="" src={mysite} alt="" />
        </a>
      </button>
      <LinkButton link="/mysite">More</LinkButton>
    </div>
  );
});
