//import
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Card from "@/components/ui-elements/card";

//createページ内容
export default function Create() {
  return (
    <>
      <main className="my-10 mx-5">
        <div className="flex flex-wrap flex-col items-center text-center gap-10 max-w-7xl mx-auto">
          <div className="w-full border-blue-600 border-2 rounded-2xl px-20 py-5">
            <h1 className="text-4xl">単語帳設定</h1>
            <div className="flex flex-col items-stretch">
              <div className="my-4">
                <label className="flex justify-between items-center hover:bg-gray-200">
                  チェックボックス機能を使用する
                  <Checkbox className="w-6 h-6" />
                </label>
              </div>
              <div className="my-4">
                <label className="flex justify-between items-center hover:bg-gray-200">
                  解答欄機能を使用する
                  <Checkbox className="w-6 h-6" />
                </label>
              </div>
            </div>
          </div>
          <div className="w-full border-blue-600 border-2 rounded-2xl grid gap-5 px-20 py-5">
            <div>
              <h1 className="text-4xl">入力欄</h1>
              <p>以下の入力欄に入力するか、規定のファイル形式のファイルを読み込んで下さい。</p>
              <Input type="file" accept=".learn-and-check.json" className="hidden" />
              <div className="flex justify-center items-center">
                <Button className="p-2 rounded-lg hover:bg-blue-400 w-40">ファイルを読み込む</Button>
                <div className="[max-width:50%]" />
              </div>
            </div>
            <div className="grid gap-5">
              <label className=" w-full flex justify-center">
                <Input type="text" maxLength={100} placeholder="タイトルを入力して下さい" className="border-[#767676] border border-solid rounded-[5px] flex-1" />
              </label>
              <div className="grid gap-3 w-full list-decimal min-w-[12.5rem]">
                <Card index={1} />
                <Card index={2} />
              </div>
              <div>
                <Button className="p-2 rounded-lg hover:bg-blue-400 w-40">カードを追加</Button>
              </div>
            </div>
          </div>
          <div className="flex">
            <Button className="p-2 rounded-lg hover:bg-blue-400 mx-2 w-40">ファイルとして保存</Button>
            <Button className="p-2 rounded-lg hover:bg-blue-400 mx-2 w-40">単語帳開始</Button>
          </div>
        </div>
        <div className="h-full hidden">
          <div className="flex flex-col h-full">
            <div className="flex-1 mx-32">
              <div className="h-full flex items-center">
                <div className="h-full flex flex-col items-center justify-center mx-auto w-full">
                  <div className="w-full text-center my-2">
                    <p className="text-5xl">問題文</p>
                  </div>
                  <div className="w-full text-center flex justify-center my-2">
                    <Input type="text" placeholder="回答欄" className="border-[#767676] border border-solid rounded-[10px] flex-1 text-2xl p-2" />
                    <Button className="ml-4 p-2 rounded-lg hover:bg-blue-400 w-20">確認</Button>
                  </div>
                  <div className="w-full text-center my-2">
                    <p className="text-5xl hidden">解答</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none relative mb-5">
              <div className="flex justify-center items-center">
                <div>
                  <Button className="hover:bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z" />
                    </svg>
                  </Button>
                </div>
                <div className="w-40 text-center">
                  <p>
                    <span />
                    <span />
                  </p>
                </div>
                <div>
                  <Button className="hover:bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="absolute z-20 bottom-0 right-5 h-full flex">
                <Checkbox className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
