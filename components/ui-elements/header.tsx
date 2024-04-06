import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-[#e5f7ff] shadow">
      <div className="flex items-center justify-between p-5">
        <Link href="./" className="mr-5" title="ホームへ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./logo.webp" alt="ロゴ" height="50px" width="100px" />
        </Link>
        <a href="./create/" title="単語帳作成" className="flex items-center">
          <svg viewBox="0 0 256 256" width="50px" height="50px">
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z" />
          </svg>
          <p>新規作成</p>
        </a>
      </div>
    </header>
  );
}
