import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { FileType } from "@/app/create/page";
import { set, z } from "zod";
import { formSchema } from ".";
import { useState } from "react";

export default function Use({
  fileData,
  Settings,
}: {
  fileData: FileType;
  Settings: z.infer<typeof formSchema>;
}) {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [idList, setIdList] = useState(
    Settings.randomQuestion
      ? fileData["contents"].map(c => c.id).toSorted(() => Math.random() - 0.5)
      : fileData["contents"].map(c => c.id)
  );
  function handleReturn(): void {
    setIndex(index - 1);
    setIsDisplayed(false);
  }
  function handleNext(): void {
    setIndex(index + 1);
    setIsDisplayed(false);
  }
  function checkAnswer(): void {
    if (Settings.useAnswerColumn === false) {
      setIsDisplayed(true);
    } else {
      if (inputValue === fileData["contents"].find(e => e.id === idList[index])?.answer) {
        setIsDisplayed(true);
        alert("正解");
      } else {
        setIsDisplayed(true);
        alert("不正解");
      }
    }
  }

  return (
    <article className="flex-1">
      <div className="flex h-full flex-col gap-5">
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <div className="grid w-full gap-3 bg-blue-100 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 rounded-md border border-gray-500">
                <p className="text-xs text-black text-opacity-80">問題</p>
                <p className="px-4 text-4xl">
                  {fileData["contents"].find(e => e.id === idList[index])?.question}
                </p>
              </div>
              <Button
                className="w-20 flex-none rounded-lg p-2 hover:bg-blue-400"
                onClick={checkAnswer}>
                確認
              </Button>
            </div>
            <div className="w-full">
              <div className="rounded-md border border-gray-500">
                <p className="text-xs text-black text-opacity-80">解答</p>
                <p className="px-4 text-4xl">
                  {isDisplayed
                    ? fileData["contents"].find(e => e.id === idList[index])?.answer
                    : "確認ボタンを押して下さい"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-3"></div>
        <div className="relative flex-none">
          <div className="flex items-center justify-center">
            <div>
              <Button className="hover:bg-blue-400" onClick={handleReturn} disabled={index === 0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z" />
                </svg>
              </Button>
            </div>
            <div className="w-40 text-center">
              <p>
                <span>{index + 1}</span>/<span>{idList.length}</span>
              </p>
            </div>
            <div>
              <Button
                className="hover:bg-blue-400"
                onClick={handleNext}
                disabled={index === idList.length - 1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 right-5 z-20 flex h-full">
            <Checkbox className="h-10 w-10" />
          </div>
        </div>
        {Settings.useAnswerColumn && (
          <div className="bg-blue-200 p-4">
            <Input
              type="text"
              placeholder="回答欄"
              className="rounded-[5px] border border-solid border-[#767676]"
              onChange={e => setInputValue(e.target.value)}
            />
          </div>
        )}
      </div>
    </article>
  );
}
