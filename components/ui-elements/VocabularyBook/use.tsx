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
  function handleReturn(): void {
    setIndex(index - 1);
    setIsDisplayed(false);
  }
  function handleNext(): void {
    setIndex(index + 1);
    setIsDisplayed(false);
  }
  function checkAnswer(): void {
    if (inputValue === fileData["contents"][index]["answer"]) {
      setIsDisplayed(true);
      alert("正解");
    } else {
      setIsDisplayed(true);
      alert("不正解");
    }
  }
  return (
    <article className="flex-1">
      <div className="flex flex-col h-full">
        <div className="flex-1 mx-32">
          <div className="h-full flex items-center">
            <div className="h-full flex flex-col items-center justify-center mx-auto w-full">
              <div className="w-full text-center my-2">
                <p className="text-4xl">{fileData["contents"][index]["question"]}</p>
              </div>
              <div className="w-full text-center flex justify-center my-2">
                <Input
                  type="text"
                  placeholder="回答欄"
                  className="border-[#767676] border border-solid rounded-[5px]"
                  onChange={e => setInputValue(e.target.value)}
                />
                <Button
                  className="ml-4 p-2 rounded-lg hover:bg-blue-400 w-20"
                  onClick={checkAnswer}>
                  確認
                </Button>
              </div>
              <div className="w-full text-center my-2">
                <p className="text-4xl">{isDisplayed && fileData["contents"][index]["answer"]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none relative mb-5">
          <div className="flex justify-center items-center">
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
                <span>{index + 1}</span>/<span>{fileData["contents"].length}</span>
              </p>
            </div>
            <div>
              <Button
                className="hover:bg-blue-400"
                onClick={handleNext}
                disabled={index === fileData["contents"].length - 1}>
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
          <div className="absolute z-20 bottom-0 right-5 h-full flex">
            <Checkbox className="w-10 h-10" />
          </div>
        </div>
      </div>
    </article>
  );
}
