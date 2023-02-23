import { memo } from "react";
import { LinkButton } from "../atoms/LinkButton";
import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";

export const AboutContent = memo(() => {
  return (
    <div id="about" className="flexBox flex-col mb-20">
      <div className="mb-14">
        <Title>About Me</Title>
      </div>
      <div className="mb-10 text-center">
        <Text>
          私は、２０００年生まれで、今年で２３歳になりました。私の人生を軽くまとめると、
          千葉県野田市に生まれ、小、中学生は地元の学校に通っていました。
        </Text>
        <Text>
          高校は、隣の柏市の柏南高校に行き、中高を通してバレーボール部に所属していました。
          大学は芝浦工業大学の工学部の情報工学科に合格し、研究は大変でしたが、無事に４年間で卒業することができました。
        </Text>
        <Text>
          しかし、４年のときの就活で、就活の軸が決が決まらず、「私って将来何になりたいの？」という疑問に答えが見つかりませんでした。
          そこで、祖父の落花生店で働きながら興味のあるものを１から考えました。
        </Text>
        <Text>
          去年の夏ごろからプログラミングに興味を持ち、独学で勉強し始め、今は「一流のフロントエンジニアになる！」ということを目標に、勉強中です。
        </Text>
      </div>
      <LinkButton link="/about">More</LinkButton>
    </div>
  );
});
