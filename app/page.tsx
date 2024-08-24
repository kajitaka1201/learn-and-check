export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="mx-auto grid w-full max-w-7xl justify-items-center gap-12 p-12 text-center">
          <section>
            <h1 className="text-4xl">完全無料のweb単語帳</h1>
            <p>1対1で覚える英単語や漢字などを暗記する用のweb単語帳</p>
          </section>
          <section>
            <h1 className="text-4xl">Learn and Checkとは?</h1>
            <p>
              PC向けの完全無料のweb単語帳です。
              <br />
              データはJSONファイルとして、各自で保存していただきます。
              <br />
              一般的な単語帳の覚えたつもりになってしまうという点を解答欄という機能でテスト形式で確認できるようにしました。
              <br />
              また、チェック機能というもので、覚えたのかどうかを記録できるようになっています。
              <br />
              これからもっと機能を追加していく予定です。
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
