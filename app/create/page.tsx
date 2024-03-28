//import
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

//createページ内容
export default function Create() {
  return (
    <>
      <main className="h-full">
        <div className="flex flex-wrap flex-col items-center text-center m-5 gap-4">
          <div className="w-full border-blue-600 border-2 rounded-2xl">
            <h1 className="text-4xl">単語帳設定</h1>
            <div className="px-20 flex flex-col items-stretch">
              <div className="my-4">
                <label className="flex justify-between items-center hover:bg-gray-200">
                  チェックボックス機能を使用する
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                      <Input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      />
                      <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </label>
                  </div>
                </label>
              </div>
              <div className="my-4">
                <label className="flex justify-between items-center hover:bg-gray-200">
                  解答欄機能を使用する
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                      <Input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      />
                      <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </label>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full border-blue-600 border-2 rounded-2xl">
            <div>
              <h1 className="text-4xl">入力欄</h1>
              <p>以下の入力欄に入力するか、規定のファイル形式のファイルを読み込んで下さい。</p>
              <Input type="file" accept=".learn-and-check.json" className="hidden" />
              <div className="flex justify-center items-center">
                <Button className="p-2 rounded-lg hover:bg-blue-400 w-40">ファイルを読み込む</Button>
                <div className="[max-width:50%]" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-4 mx-20">
              <label className="mx-2.5 w-full flex justify-center">
                <Input type="text" maxLength={100} placeholder="タイトルを入力して下さい" className="border-[#767676] border border-solid rounded-[5px] flex-1" />
              </label>
              <ul className="w-full list-decimal min-w-[12.5rem]">
                <li>
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <Input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <Button className="mx-2 delete-card">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
                      </svg>
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <Input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <Button className="mx-2 delete-card">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
                      </svg>
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <Input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <Button className="mx-2 delete-card">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
                      </svg>
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <Input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <Button className="mx-2 delete-card">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
                      </svg>
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <Input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <Input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <Button className="mx-2 delete-card">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
                      </svg>
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="my-2">
              <Button className="p-2 rounded-lg hover:bg-blue-400 w-40">カードを追加</Button>
            </div>
          </div>
          <div className="flex">
            <Button className="p-2 rounded-lg hover:bg-blue-400 mx-2 w-40">ファイルとして保存</Button>
            <Button className="p-2 rounded-lg hover:bg-blue-400 mx-2 w-40">単語帳開始</Button>
          </div>
        </div>
        <div className="h-full hidden">
          <div className="flex flex-col h-full">
            <div className="flex-1 mx-32">
              <div className="h-full flex items-center">
                <div className="h-full flex flex-col items-center justify-center mx-auto w-full">
                  <div className="w-full text-center my-2">
                    <p className="text-5xl">問題文</p>
                  </div>
                  <div className="w-full text-center flex justify-center my-2">
                    <Input type="text" placeholder="回答欄" className="border-[#767676] border border-solid rounded-[10px] flex-1 text-2xl p-2" />
                    <Button className="ml-4 p-2 rounded-lg hover:bg-blue-400 w-20">確認</Button>
                  </div>
                  <div className="w-full text-center my-2">
                    <p className="text-5xl hidden">解答</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none relative">
              <div className="flex justify-center items-center">
                <div>
                  <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
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
                  <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="absolute z-20 bottom-0 right-4 h-full flex">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                    <Input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                    />
                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
