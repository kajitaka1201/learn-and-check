import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { formSchema } from ".";

export default function Settings({
  setSettings,
  start,
}: {
  setSettings: React.Dispatch<React.SetStateAction<z.infer<typeof formSchema>>>;
  start: () => void;
}) {
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
    setSettings(values);
    start();
  }
  return (
    <article className="grid justify-items-center rounded-2xl border-2 border-blue-600 p-5">
      <h1 className="text-4xl">単語帳設定</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-2">
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
                      className="h-5 w-5"
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
                      className="h-5 w-5"
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
                      className="h-5 w-5"
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
  );
}
