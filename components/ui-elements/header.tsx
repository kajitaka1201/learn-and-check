import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex flex-wrap items-center p-5 bg-green-300">
        <Link href="./" className="mr-5" title="ホームへ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./logo.webp" alt="ロゴ" height="50px" width="100px" />
        </Link>
        <a href="./create/" title="単語帳作成">
          <svg viewBox="0 0 256 256" width="40px" height="40px">
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
