"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui-elements/card";
import { useState } from "react";
import { v4 as createUUID } from "uuid";
import { downloadFile } from "@/lib/download";
import { uploadFile } from "@/lib/upload";
import VocabularyBook from "@/components/ui-elements/VocabularyBook";

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

export default function Create() {
  const [fileData, setFileData] = useState<FileType>({ contents: [] });
  console.log(fileData);

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
    uploadFile().then(data => {
      setFileData(JSON.parse(data.content));
    });
  }

  return (
    <>
      <main className="mx-5 my-10">
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap items-center gap-10 text-center">
          <section className="grid w-full gap-5 rounded-2xl border-2 border-blue-600 px-20 py-5">
            <div>
              <h1 className="text-4xl">入力欄</h1>
              <p>以下の入力欄に入力するか、規定のファイル形式のファイルを読み込んで下さい。</p>
              <Input type="file" accept=".learn-and-check.json" className="hidden" />
              <div className="flex items-center justify-center">
                <Button className="w-40 rounded-lg p-2 hover:bg-blue-400" onClick={upload}>
                  ファイルを読み込む
                </Button>
                <div className="[max-width:50%]" />
              </div>
            </div>
            <div className="grid gap-5">
              <label className=" flex w-full justify-center">
                <Input
                  type="text"
                  defaultValue={fileData?.name}
                  onChange={e => setFileData({ ...fileData, name: e.target.value } as FileType)}
                  placeholder="タイトル"
                  className="flex-1 rounded-[5px] border border-solid border-[#767676]"
                />
              </label>
              <div className="grid w-full min-w-[12.5rem] list-decimal gap-3">
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
                <Button className="w-40 rounded-lg p-2 hover:bg-blue-400" onClick={addCard}>
                  カードを追加
                </Button>
              </div>
            </div>
          </section>
          <div className="flex">
            <Button className="mx-2 w-40 rounded-lg p-2 hover:bg-blue-400" onClick={download}>
              ファイルとして保存
            </Button>
            <VocabularyBook fileData={fileData} />
          </div>
        </div>
      </main>
    </>
  );
}
