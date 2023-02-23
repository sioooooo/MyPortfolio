import { memo } from "react";
import { Text } from "../atoms/Text";
import step1 from "../../image/step1.png";
import step2 from "../../image/step2.png";
import step3 from "../../image/step3.png";

export const MySite = memo(() => {
  return (
    <div className=" flex content-center items-center flex-col mt-12 mb-32">
      <div className="w-3/4 max-w-4xl">
        <div className="text-center">
          <div className="mt-10">
            <Text>
              ここでは、私が自作で作った「NoteApp」について
              目的、使ったもの、機能、使用方法、感想＆学びに分けて
              紹介させてください。
            </Text>
            <a
              href="https://note-app-814d6.web.app/note"
              className="text-orange-600"
            >
              リンク「NoteApp」へ
            </a>
          </div>
          <div className="">
            <div className="mt-10">
              <Text>
                <span className="font-bold text-start">目的：</span>
                これまで学んできた成果として、React,TypeScriptを使ってGoogleのKeepに似たWEBアプリを作る。
              </Text>
            </div>
            <div className="mt-10">
              <Text>
                <span className="font-bold text-start">使ったもの：</span>
                React,TypeScript,ChacraUi,Firebase
              </Text>
            </div>
            <div className="mt-10">
              <Text>
                <span className="font-bold text-start">機能：</span>
                主な機能として５つ挙げます。
              </Text>

              <ul className="list-disc text-base text-start ml-32 ">
                <li>ノートを追加、削除ができる。</li>
                <li>
                  それぞれのノートがタイトルとテキスト（内容）を持ち、編集することができる。
                </li>
                <li>追加、編集のタイミングで現在の日付が記載される。</li>
                <li>スマホにも対応したレスポンシブデザイン</li>
                <li>
                  Googlでログインすることで、アカウントとノートのデータを連携できる。
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <Text>
                <span className="font-bold text-start">使用方法：</span>
                使い方を簡単に説明します。
              </Text>
              <ul className="list-decimal text-base text-start ml-32">
                <li>
                  ログインページに移動
                  <img src={step1} className="w-2/3 mb-10 border shadow " />
                </li>
                <li>
                  中央の「Googleでログイン」をクリック
                  <img src={step2} className="w-2/3 mb-10 border shadow " />
                </li>
                <li>ポップアップしたウィンドウからログイン</li>
                <li>
                  ノートページに移動（ログインに成功すると自動で移動します。）
                </li>
                <li>
                  画面の＋（プラス）ボタンから新しいノートを作成
                  <img src={step3} className="w-2/3 mb-10 border shadow " />
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <Text>
                <span className="font-bold text-start">感想＆学び：</span>
                去年の１２月ごろに自作のWebサイトを作ろうしたときに、あまり計画を建てずに作った結果、
                レスポンシブに対応させるのが大変だったり、コンポーネントの管理（名前決めや機能の設定）が
                複雑になり大きなストレスを感じる開発になってしまいました。
                その失敗をふまえて、今回はAtomicDesignを取り入れることや機能なしのデザイン部分から完成させることで、
                よりスムーズに開発を進めることができたと思います。
                また、TypeScriptの利点を実感できました。
                例えば、コンポーネントにpropsを渡した時です。あらかじめ渡すものを決めて置くことで、
                propsの受け渡しを忘れることや、後日コードを見直した時に、
                変数の意味を型を見るだけで確認できるなどの利便性を理解できました。
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
