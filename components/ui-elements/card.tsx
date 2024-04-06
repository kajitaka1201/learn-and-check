import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FileType } from "@/app/create/page";

export default function Card({
  index,
  content,
  setFileData,
}: {
  index: number;
  content: FileType["contents"][number];
  setFileData: React.Dispatch<React.SetStateAction<FileType>>;
}) {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <p>{index + 1}</p>
      <div className="flex flex-1 gap-2">
        <label className="flex-1">
          <Input
            type="text"
            defaultValue={content.question}
            onChange={e => {
              setFileData(prev => {
                return {
                  ...prev,
                  contents:
                    prev?.contents.map(c => {
                      if (c.id === content.id) {
                        return { ...c, question: e.target.value };
                      }
                      return c;
                    }) || [],
                };
              });
            }}
            placeholder="問題"
            className="w-full min-w-[10rem] rounded-[5px] border border-solid border-[#767676]"
          />
        </label>
        <label className="flex-1">
          <Input
            type="text"
            defaultValue={content.answer}
            onChange={e => {
              setFileData(prev => {
                return {
                  ...prev,
                  contents:
                    prev?.contents.map(c => {
                      if (c.id === content.id) {
                        return { ...c, answer: e.target.value };
                      }
                      return c;
                    }) || [],
                };
              });
            }}
            placeholder="解答"
            className="w-full min-w-[10rem] rounded-[5px] border border-solid border-[#767676]"
          />
        </label>
      </div>
      <Checkbox
        className="h-6 w-6"
        checked={content.isCheck}
        onClick={() => {
          setFileData(prev => {
            return {
              ...prev,
              contents:
                prev?.contents.map(c => {
                  if (c.id === content.id) {
                    return { ...c, isCheck: !c.isCheck };
                  }
                  return c;
                }) || [],
            };
          });
        }}
      />
      <Button
        className=" hover:bg-blue-400"
        onClick={() =>
          setFileData(prev => {
            return {
              ...prev,
              contents: prev?.contents?.filter(c => c.id !== content.id) || [],
            };
          })
        }>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256">
          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
        </svg>
      </Button>
    </div>
  );
}
