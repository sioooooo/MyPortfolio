import { memo, useState } from "react";
import { Text } from "../atoms/Text";

export const About = memo(() => {
  const [isOpen, setIsOpen] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });

  const onClickOpen = (key) => {
    // const num = isOpen
    for (const [num, value] of Object.entries(isOpen)) {
      // console.log(num, value);
      if (key == num) {
        const newOpen = {
          ...isOpen,
          [key]: !value,
        };
        setIsOpen(newOpen);
      }
    }
  };

  return (
    <div className=" flex content-center items-center flex-col mt-12">
      <div className="w-3/4 max-w-4xl">
        <div className="text-center mt-10">
          <Text>
            私のこれまでの経験を一問一答形式とエピソードで紹介させてください
          </Text>
          <div className="mt-10 mb-14">
            <div className="font-bold">
              <Text>長所は？</Text>
            </div>
            <Text>知的好奇心です。</Text>
            <div className="text-base mt-3 mb-8">
              <button
                className="w-24 h-12 rounded-5 rounded-full bg-slate-300 shadow-lg
                  hover:text-gray-100 hover:shadow-none"
                onClick={() => onClickOpen("one")}
              >
                more
              </button>
            </div>
            {isOpen.one ? (
              <div className="mt-3 bg-slate-100 p-3 rounded">
                <Text>
                  去年の夏ごろから自作のサイト作りたいという興味からフロントエンドの勉強を独学で始めました。
                  最初は、学ばなくてはいけないことが多く、何から勉強をしていいかわかりませんでした。
                  しかし、フロントエンドの知識を身につけたいという思いから自分の中の目標を明確化し、
                  毎日勉強を続けました。結果的にこのようなサイトや自作のNoteAppを完成させることができました。
                  就職後も積極的に他の言語や知識を勉強したいです。
                </Text>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-14">
            <div className="font-bold">
              <Text>短所は？</Text>
            </div>
            <Text>スイッチが入るまでが遅い</Text>
            <div className="text-base mt-3 mb-8">
              <button
                className="w-24 h-12 rounded-5 rounded-full bg-slate-300 shadow-lg
                  hover:text-gray-100 hover:shadow-none"
                onClick={() => onClickOpen("two")}
              >
                more
              </button>
            </div>
            {isOpen.two ? (
              <div className="mt-3 bg-slate-100 p-3 rounded">
                <Text>
                  大学生のときに就活がうまくいかなかったことの理由の１つとしてやる気がでるまでの遅さが挙げられます。
                  大学生の前半から、早めに自分のやりたいことを探し、行動をしていればプログラミングの勉強をもっと早く始められたかもしれません。
                  今は、この経験から学び、日頃からやることリストを作り、長期的な目標と１日の目標を決めて生活しています。
                </Text>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-14">
            <div className="font-bold">
              <Text>学生時代に頑張ったことは？</Text>
            </div>
            <Text>グラフ理論の研究</Text>

            <div className="text-base mt-3 mb-8">
              <button
                className="w-24 h-12 rounded-5 rounded-full bg-slate-300 shadow-lg
                  hover:text-gray-100 hover:shadow-none"
                onClick={() => onClickOpen("three")}
              >
                more
              </button>
            </div>
            {isOpen.three ? (
              <div className="mt-3 bg-slate-100 p-3 rounded">
                <Text>
                  大学４年生のときに、グラフ理論研究室に所属し、安定結婚問題について研究しました。
                  研究内容は、既存の研究を進め、より具体的なものにすることでした。
                  しかし、私は研究室に配属になったときはグラフ理論の知識が少なく、
                  研究室自体が新しいため参考となる研究が無かったです。
                  その中で、毎回のゼミを休まず参加、発表を繰り返すことで、グラフ理論の知識を身につけ、最後には研究を成功させることができました。
                  この経験は、私の長所の知的好奇心が活きたエピソードの１つでもあります。
                  全く知識がないものでも１から着実に勉強を積み重ねることで形にできる自信がつきました。
                  プログラミングの勉強も同じ気持ちで取り組みたいです。
                </Text>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-14">
            <div className="font-bold">
              <Text>卒業後に頑張ったことは？</Text>
            </div>
            <Text>
              独学でプログラミングの勉強し、自作のNoteAppを完成させたこと
            </Text>

            <div className="text-base mt-3 mb-8">
              <button
                className="w-24 h-12 rounded-5 rounded-full bg-slate-300 shadow-lg
                  hover:text-gray-100 hover:shadow-none"
                onClick={() => onClickOpen("four")}
              >
                more
              </button>
            </div>
            {isOpen.four ? (
              <div className="mt-3 bg-slate-100 p-3 rounded">
                <Text>
                  プログラミングの勉強を始めたきっかけは、去年の夏ごろに祖父のお店でアルバイトしていたときに、
                  自作のECサイトを作りたいと思ったことです。初めは、プログラミングの勉強をし、ECサイトを作ることが目標でした。
                  しかし、大学時代からプログラミングに苦手意識があったことと作るためにどの知識が必要かわかりませんでした。
                  フロントエンドのスキルを身につけたいという思いから、アルバイトの日は隙間時間をうまく勉強し、休日は毎日３時間以上の学習時間を確保した。
                  結果的には、ECサイトを作るところまではいきませんでしたが、
                  HTML、CSS、JavaScript、Reactが扱えるようになり、自作のノートウェブアプリを完成させることができました。
                  独学であっても、インプットとアウトプットを行うことで、自分の力になる経験を得ることができました。
                </Text>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-14">
            <div className="font-bold">
              <Text>就職後にやりたいことは？</Text>
            </div>
            <Text>短期的には、チームでの開発を学びたいです。</Text>

            <div className="text-base mt-3 mb-8">
              <button
                className="w-24 h-12 rounded-5 rounded-full bg-slate-300 shadow-lg
                  hover:text-gray-100 hover:shadow-none"
                onClick={() => onClickOpen("five")}
              >
                more
              </button>
            </div>
            {isOpen.five ? (
              <div className="mt-3 bg-slate-100 p-3 rounded">
                <Text>
                  理由は、今まで独学で勉強をしていたため、チームに必要なスキルが足りていないからです。
                  GitHubなどのツールの使い方、他の人が理解しやすいキレイなコードを書くことなどの
                  チーム開発では当たり前のことをできるようになりたいです。
                </Text>
              </div>
            ) : (
              <></>
            )}
            <Text>
              長期的には、フロントエンド、バックエンドの両方を実務レベルまで扱えるようになりたいです。
            </Text>

            <div className="text-base mt-3 mb-8">
              <button
                className="w-24 h-12 rounded-5 rounded-full bg-slate-300 shadow-lg
                  hover:text-gray-100 hover:shadow-none"
                onClick={() => onClickOpen("six")}
              >
                more
              </button>
            </div>
            {isOpen.six ? (
              <div className="mt-3 bg-slate-100 p-3 rounded">
                <Text>
                  現状では、フロントエンドの知識を使って簡単なデザインや機能は表現できるようになりました。
                  ですが、まだまだ知らない事が多数あるのでそれらを学ぶことでフロントエンドを極めます。
                  バックエンドに関しては、Firebaseを使った簡単な部分を作ったことしかないため、基礎から学びたいと思っています。
                </Text>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
