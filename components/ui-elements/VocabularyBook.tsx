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
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

//formSchema
const formSchema = z.object({
  useAnswerColumn: z.boolean(),
  randomQuestion: z.boolean(),
  excludeCheckedQuestions: z.boolean(),
});

//VocabularyBook
export default function VocabularyBook() {
  //Dialogの状態
  const [isOpen, setIsOpen] = useState(false);
  //form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      useAnswerColumn: false,
      randomQuestion: false,
      excludeCheckedQuestions: false,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 p-2 rounded-lg hover:bg-blue-400 mx-2 w-40">
        単語帳開始
      </DialogTrigger>
      <DialogContent className="max-w-none w-4/5 h-4/5 flex flex-col">
        <DialogHeader className="flex-none">
          <DialogTitle>単語帳</DialogTitle>
        </DialogHeader>
        <article className="border-blue-600 border-2 rounded-2xl grid justify-items-center p-5">
          <h1 className="text-4xl">単語帳設定</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid gap-2">
              <FormField
                control={form.control}
                name="useAnswerColumn"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-5 h-5"
                        />
                      </FormControl>
                      <FormLabel className="w-full">解答欄機能を使用する</FormLabel>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="randomQuestion"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-5 h-5"
                        />
                      </FormControl>
                      <FormLabel className="w-full">ランダムに出題する</FormLabel>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="excludeCheckedQuestions"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-5 h-5"
                        />
                      </FormControl>
                      <FormLabel className="w-full">チェック済みの問題を除外する</FormLabel>
                    </FormItem>
                  );
                }}
              />
              <Button type="submit">スタート</Button>
            </form>
          </Form>
        </article>
        <article className="flex-1 hidden">
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
        </article>
      </DialogContent>
    </Dialog>
  );
}
