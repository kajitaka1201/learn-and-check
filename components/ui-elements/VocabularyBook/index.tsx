import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { z } from "zod";
import Settings from "./settings";
import Use from "./use";
import { FileType } from "@/app/create/page";

export const formSchema = z.object({
  useAnswerColumn: z.boolean(),
  randomQuestion: z.boolean(),
  excludeCheckedQuestions: z.boolean(),
});

export default function VocabularyBook({ fileData }: { fileData: FileType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 p-2 rounded-lg hover:bg-blue-400 mx-2 w-40"
        disabled={fileData["contents"].length === 0}>
        単語帳開始
      </DialogTrigger>
      <DialogContent
        className="max-w-none w-4/5 h-4/5 flex flex-col"
        onEscapeKeyDown={e => e.preventDefault()}
        onPointerDownOutside={e => e.preventDefault()}>
        {isOpen && <DialogBody fileData={fileData} />}
      </DialogContent>
    </Dialog>
  );
}
function DialogBody({ fileData }: { fileData: FileType }) {
  const [mode, setMode] = useState<"set" | "use" | "result">("set");
  const [settings, setSettings] = useState<z.infer<typeof formSchema>>({
    useAnswerColumn: false,
    randomQuestion: false,
    excludeCheckedQuestions: false,
  });
  return (
    <>
      <DialogHeader className="flex-none">
        <DialogTitle>単語帳</DialogTitle>
      </DialogHeader>
      {mode === "set" && <Settings setSettings={setSettings} start={() => setMode("use")} />}
      {mode === "use" && <Use fileData={fileData} Settings={settings} />}
    </>
  );
}
