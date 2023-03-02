import { memo } from "react";
import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";

export const FutureContent = memo(() => {
  return (
    <div id="future" className="flexBox flex-col mb-14">
      <div className="mb-14">
        <Title>Future</Title>
      </div>
      <div className="text-center">
        <Text>
          就職後の目標は、チーム開発、大きな規模での開発と運営を学びたいと思っています。
        </Text>
        <Text>
          長期的な目標は、フロントエンドとバックエンドを扱えるようになり、WEBアプリを開発することです
        </Text>
      </div>
    </div>
  );
});
