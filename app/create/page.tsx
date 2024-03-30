"use client";
//import
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Card from "@/components/ui-elements/card";
import { useState } from "react";
import { v4 as createUUID } from "uuid";
import { downloadFile } from "@/lib/download";
import { uploadFile } from "@/lib/upload";
import VocabularyBook from "@/components/ui-elements/VocabularyBook"

//type
export type FileType = {
  name?: string;
  contents: {
    question: string;
    answer: string;
    isCheck: boolean;
    hint?: string;
    explanation?: string;
    id: string;
  }[];
};

//createページ内容
export default function Create() {
  //fileData
  const [fileData, setFileData] = useState<FileType>();
  console.log(fileData);
  
  //function
  function addCard() {
    setFileData({
      ...fileData,
      contents: [
        ...(fileData?.contents || []),
        { question: "", answer: "", isCheck: false, id: createUUID() },
      ],
    });
  }
  function download() {
    downloadFile({
      name: `${fileData?.name}.learn-and-check.json`,
      content: JSON.stringify(fileData),
    });
  }
  function upload() {
    uploadFile().then((data) => {
      setFileData(JSON.parse(data.content));
    });
  }
  function start() {
    //ここに処理を書く
  }

  return (
    <>
      <main className="my-10 mx-5">
        <div className="flex flex-wrap flex-col items-center text-center gap-10 max-w-7xl mx-auto">
          <div className="w-full border-blue-600 border-2 rounded-2xl grid gap-5 px-20 py-5">
            <div>
              <h1 className="text-4xl">入力欄</h1>
              <p>以下の入力欄に入力するか、規定のファイル形式のファイルを読み込んで下さい。</p>
              <Input type="file" accept=".learn-and-check.json" className="hidden" />
              <div className="flex justify-center items-center">
                <Button className="p-2 rounded-lg hover:bg-blue-400 w-40" onClick={upload}>
                  ファイルを読み込む
                </Button>
                <div className="[max-width:50%]" />
              </div>
            </div>
            <div className="grid gap-5">
              <label className=" w-full flex justify-center">
                <Input
                  type="text"
                  defaultValue={fileData?.name}
                  onChange={(e) => setFileData({ ...fileData, name: e.target.value } as FileType)}
                  placeholder="タイトル"
                  className="border-[#767676] border border-solid rounded-[5px] flex-1"
                />
              </label>
              <div className="grid gap-3 w-full list-decimal min-w-[12.5rem]">
                {fileData?.contents?.map((content, index) => (
                  <Card
                    key={content.id}
                    index={index}
                    content={content}
                    setFileData={setFileData}
                  />
                ))}
              </div>
              <div>
                <Button className="p-2 rounded-lg hover:bg-blue-400 w-40" onClick={addCard}>
                  カードを追加
                </Button>
              </div>
            </div>
          </div>
          <div className="flex">
            <Button className="p-2 rounded-lg hover:bg-blue-400 mx-2 w-40" onClick={download}>
              ファイルとして保存
            </Button>
            <VocabularyBook />
          </div>
        </div>
      </main>
    </>
  );
}
