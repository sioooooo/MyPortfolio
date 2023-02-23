import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";
import topimg from "../../image/topimg.jpg";
import { memo } from "react";

export const TopContent = memo(() => {
  return (
    <div id="top" className="flexBox flex-col mb-20 mt-10">
      <div className="mb-14">
        <Title>Top</Title>
      </div>
      <div className="w-screen h-96 flexBox mb-14 ">
        <img
          className="w-4/5 h-full max-w-5xl rounded-lg shadow-lg"
          src={topimg}
          alt=""
        />
      </div>
      <div className="text-center mb-10">
        <Text>こんにちわ！簡単な自己紹介をします。</Text>
        <Text>名前：塩田将司</Text>
        <Text>趣味：ゲーム、映画鑑賞</Text>
        <Text>好きなもの：コーヒー、犬（特に大型犬が好きです。）</Text>
        <Text>大学：芝浦工業大学　工学部　情報工学科</Text>
        <Text>前職：祖父の落花生店にて接客を中心としたアルバイト</Text>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold mb-10">自己PR</div>
        <div className="text-center">
          <Text>
            強み：知的好奇心
            <br />
            <br />
            理由は、独学でプログラミングの勉強を始め、オリジナルの「NoteApp」を完成させたからです。
          </Text>
        </div>
      </div>
    </div>
  );
});
