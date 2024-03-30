//import
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";

//VocabularyBook
export default function VocabularyBook() {
  //Dialogの状態
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>単語帳開始</DialogTrigger>
      <DialogContent className="max-w-none w-4/5 h-4/5 flex flex-col">
        <DialogHeader className="flex-none">
          <DialogTitle>単語帳</DialogTitle>
        </DialogHeader>
        <div className="flex-1">
          <div className="flex flex-col h-full">
            <div className="flex-1 mx-32">
              <div className="h-full flex items-center">
                <div className="h-full flex flex-col items-center justify-center mx-auto w-full">
                  <div className="w-full text-center my-2">
                    <p className="text-5xl">問題文</p>
                  </div>
                  <div className="w-full text-center flex justify-center my-2">
                    <Input
                      type="text"
                      placeholder="回答欄"
                      className="border-[#767676] border border-solid rounded-[10px] flex-1 text-2xl p-2"
                    />
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
                    <span />
                    <span />
                  </p>
                </div>
                <div>
                  <Button className="hover:bg-blue-400">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
