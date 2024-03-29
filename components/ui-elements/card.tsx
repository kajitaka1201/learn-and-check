//import
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Card({index}: {index: number}) {
  return (
    <div className="flex items-center justify-center flex-wrap w-full gap-2">
      <p>{index}</p>
      <div className="flex flex-1 gap-2">
        <label className="flex-1">
          <Input type="text" placeholder="問題を入力して下さい" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem]" />
        </label>
        <label className="flex-1">
          <Input type="text" placeholder="解答を入力して下さい" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem]" />
        </label>
      </div>
      <Checkbox className="w-6 h-6" />
      <Button className=" hover:bg-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
        </svg>
      </Button>
    </div>
  );
}
