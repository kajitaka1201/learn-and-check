"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui-elements/card";
import { useState } from "react";
import { v4 as createUUID } from "uuid";
import { downloadFile } from "@/lib/download";
import { uploadFile } from "@/lib/upload";
import VocabularyBook from "@/components/ui-elements/VocabularyBook";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import DataTable from "@/components/ui-elements/dataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

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
export type TableType = {
  index: number;
  question: string;
  answer: string;
};
const columns: ColumnDef<TableType>[] = [
  {
    accessorKey: "index",
    header: () => <>No.</>,
    cell: ({ row }) => {
      const index = row.index + 1;
      return <div>{index}</div>;
    },
  },
  {
    accessorKey: "question",
    header: () => <>問題</>,
    cell: ({ row }) => {
      return <div className="text-right">{row.original.question}</div>;
    },
  },
  {
    accessorKey: "answer",
    header: () => <>答え</>,
    cell: ({ row }) => {
      return <div>{row.original.answer}</div>;
    },
  },
];

export default function Create() {
  const [fileData, setFileData] = useState<FileType>({ contents: [] });
  const [importedCSV, setImportedCSV] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [createMode, setCreateMode] = useState<"edit" | "display">("edit");
  const [isVocabularyStarted, setIsVocabularyStarted] = useState<boolean>(false);
  const columns: ColumnDef<TableType>[] = [
    { accessorKey: "index", header: "No." },
    { accessorKey: "question", header: "問題" },
    { accessorKey: "answer", header: "答え" },
  ];
  const TableData = fileData?.contents?.map((content, index) => ({
    index: index + 1,
    question: content.question,
    answer: content.answer,
  }));

  function addCard() {
    setFileData({
      ...fileData,
      contents: [
        ...(fileData?.contents || []),
        { question: "", answer: "", isCheck: false, id: createUUID() },
      ],
    });
  }
  function importFromCSV() {
    const csv = importedCSV;
    const lines = csv.split("\n");
    const newContents = lines.map(line => {
      const [answer, question] = line.split("\t");
      return {
        question,
        answer,
        hint: "",
        explanation: "",
        isCheck: false,
        id: createUUID(),
      };
    });
    setFileData({
      ...fileData,
      contents: [...(fileData?.contents || []), ...newContents],
    });
    setIsDialogOpen(false);
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
  useKeyboardShortcut(["ctrl", "a"], e => {
    e.preventDefault();
    addCard();
  });
  useKeyboardShortcut(["ctrl", "i"], e => {
    e.preventDefault();
    setIsDialogOpen(true);
  });
  useKeyboardShortcut(["ctrl", "s"], e => {
    e.preventDefault();
    download();
  });
  useKeyboardShortcut(["ctrl", "o"], e => {
    e.preventDefault();
    upload();
  });
  useKeyboardShortcut(["ctrl", "e"], e => {
    e.preventDefault();
    setCreateMode("edit");
  });
  useKeyboardShortcut(["ctrl", "d"], e => {
    e.preventDefault();
    setCreateMode("display");
  });
  useKeyboardShortcut(["ctrl", "enter"], e => {
    e.preventDefault();
    setIsVocabularyStarted(true);
  });

  return (
    <>
      <main className="mx-5 my-10">
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap items-center gap-10">
          {createMode === "edit" ? (
            <section className="grid w-full gap-5 rounded-2xl border-2 border-blue-600 px-20 py-5 text-center">
              <div>
                <h1 className="text-4xl">入力欄</h1>
                <p>以下の入力欄に入力するか、規定のファイル形式のファイルを読み込んで下さい。</p>
                <Input type="file" accept=".learn-and-check.json" className="hidden" />
                <div className="flex items-center justify-center">
                  <Button className="w-40 rounded-lg p-2" onClick={upload}>
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
                <div className="grid w-full min-w-[12.5rem] list-decimal gap-5">
                  {fileData?.contents?.map((content, index) => (
                    <Card
                      key={content.id}
                      index={index}
                      content={content}
                      setFileData={setFileData}
                    />
                  ))}
                </div>
                <div className="">
                  <Button className="mx-2 w-40 rounded-lg p-2" onClick={addCard}>
                    カードを追加
                  </Button>
                  <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
                    <DialogTrigger asChild>
                      <Button className="mx-2 w-40 rounded-lg p-2">インポート</Button>
                    </DialogTrigger>
                    <DialogContent className="flex h-4/5 w-4/5 max-w-none flex-col">
                      <DialogHeader className="flex-none">
                        <DialogTitle>CSVファイルのインポート</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-1 flex-col gap-3">
                        <Textarea
                          className="flex-1"
                          value={importedCSV}
                          onChange={e => setImportedCSV(e.target.value)}
                          placeholder={`GoogleスプレッドシートやExcelからインポートすることが出来ます。\n答え\t問題\n答え\t問題...\nの形式で入力してください。`}
                        />
                        <Button className="w-40 flex-none rounded-lg p-2" onClick={importFromCSV}>
                          インポート
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Button className="rounded-lg p-2" onClick={() => setCreateMode("display")}>
                  確定
                </Button>
              </div>
            </section>
          ) : createMode === "display" ? (
            <section className="flex w-full flex-col items-center gap-3">
              <DataTable columns={columns} data={TableData}></DataTable>
              <Button className="mx-2 w-40 rounded-lg p-2" onClick={() => setCreateMode("edit")}>
                編集
              </Button>
            </section>
          ) : (
            <section>
              <h1>エラーが発生しました。</h1>
            </section>
          )}

          <div className="flex">
            <Button className="mx-2 w-40 rounded-lg p-2" onClick={download}>
              ファイルとして保存
            </Button>
            <VocabularyBook
              fileData={fileData}
              setFileData={setFileData}
              isVocabularyStarted={isVocabularyStarted}
              setIsVocabularyStarted={setIsVocabularyStarted}
            />
          </div>
        </div>
      </main>
    </>
  );
}
