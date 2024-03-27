//HTML情報の取得
let HTMLInformation = {
  name: "",
  contents: [],
};
function changeInformation() {
  const FILE_NAME_ELEMENT = document.getElementById("file-name") as HTMLInputElement;
  const FILE_NAME = FILE_NAME_ELEMENT ? FILE_NAME_ELEMENT.value : "";
  const CARD = document.getElementsByClassName("card");
  const OBJECT_DATA = Object.values(CARD).map((element) => {
    const QUESTION = element.getElementsByClassName("question")[0] as HTMLInputElement;
    const ANSWER = element.getElementsByClassName("answer")[0] as HTMLInputElement;
    const CHECK = element.getElementsByClassName("check")[0] as HTMLInputElement;
    const QUESTION_VALUE = QUESTION.value;
    const ANSWER_VALUE = ANSWER.value;
    const CHECK_VALUE = CHECK.checked;
    const OBJECT_VALUE = {
      question: `${QUESTION_VALUE}`,
      answer: `${ANSWER_VALUE}`,
      check: `${CHECK_VALUE}`,
    };
    return OBJECT_VALUE;
  });
  const NON_BLANK_CARD = Object.values(OBJECT_DATA).filter((element) => {
    const QUESTION_VALUE = element.question;
    const ANSWER_VALUE = element.answer;
    const BOOLEAN_VALUE = !(QUESTION_VALUE === null || ANSWER_VALUE === null);
    return BOOLEAN_VALUE;
  });
  const JSON_DATA = {
    name: `${FILE_NAME}`,
    contents: NON_BLANK_CARD,
  };
  HTMLInformation = JSON_DATA;
}

//HTML要素への代入
function assignToHTML() {
  const JSON_DATA = HTMLInformation;
  //データ初期化
  const DATA_FIELD = document.getElementById("data-field");
  DATA_FIELD.innerHTML = `
  <label class="mx-2.5 w-full flex justify-center">
    <input type="text" maxlength="100" placeholder="タイトルを入力して下さい" class="border-[#767676] border border-solid rounded-[5px] flex-1" id="file-name" />
  </label>
  <ul class="w-full list-decimal min-w-[12.5rem]" id="cards">
    <li class="card">
      <div class="flex items-center justify-center flex-wrap w-full my-5">
        <div class="flex flex-col flex-1">
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="問題を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
          </label>
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="解答を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
          </label>
        </div>
        <label class="flex-none mx-2">
          <div class="inline-flex items-center">
            <label class="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
              <input
                type="checkbox"
                class="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" />
              <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </label>
          </div>
        </label>
        <button class="mx-2 delete-card" onclick="deleteCard()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path
              d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </div>
    </li>
    <li class="card">
      <div class="flex items-center justify-center flex-wrap w-full my-5">
        <div class="flex flex-col flex-1">
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="問題を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
          </label>
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="解答を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
          </label>
        </div>
        <label class="flex-none mx-2">
          <div class="inline-flex items-center">
            <label class="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
              <input
                type="checkbox"
                class="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" />
              <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </label>
          </div>
        </label>
        <button class="mx-2 delete-card" onclick="deleteCard()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path
              d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </div>
    </li>
    <li class="card">
      <div class="flex items-center justify-center flex-wrap w-full my-5">
        <div class="flex flex-col flex-1">
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="問題を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
          </label>
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="解答を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
          </label>
        </div>
        <label class="flex-none mx-2">
          <div class="inline-flex items-center">
            <label class="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
              <input
                type="checkbox"
                class="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" />
              <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </label>
          </div>
        </label>
        <button class="mx-2 delete-card" onclick="deleteCard()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path
              d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </div>
    </li>
    <li class="card">
      <div class="flex items-center justify-center flex-wrap w-full my-5">
        <div class="flex flex-col flex-1">
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="問題を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
          </label>
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="解答を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
          </label>
        </div>
        <label class="flex-none mx-2">
          <div class="inline-flex items-center">
            <label class="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
              <input
                type="checkbox"
                class="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" />
              <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </label>
          </div>
        </label>
        <button class="mx-2 delete-card" onclick="deleteCard()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path
              d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </div>
    </li>
    <li class="card">
      <div class="flex items-center justify-center flex-wrap w-full my-5">
        <div class="flex flex-col flex-1">
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="問題を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
          </label>
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="解答を入力して下さい" value="" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
          </label>
        </div>
        <label class="flex-none mx-2">
          <div class="inline-flex items-center">
            <label class="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
              <input
                type="checkbox"
                class="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" />
              <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </label>
          </div>
        </label>
        <button class="mx-2 delete-card" onclick="deleteCard()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path
              d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </div>
    </li>
  </ul>`;
  //値代入
  const JSON_NAME = JSON_DATA.name;
  const NAME_FIELD = document.getElementById("file-name") as HTMLInputElement;
  if (NAME_FIELD !== null) {
    NAME_FIELD.value = JSON_NAME;
  }
  const JSON_CONTENTS: { question: string; answer: string; check: boolean }[] = JSON_DATA.contents?.reverse() || [];
  const FILE_LENGTH = JSON_CONTENTS.length;
  for (let i = 0; i < FILE_LENGTH; i++) {
    const QUESTION = JSON_CONTENTS[i].question;
    const ANSWER = JSON_CONTENTS[i].answer;
    const IS_CHECKED = JSON_CONTENTS[i].check;
    addCard("afterbegin", QUESTION, ANSWER, IS_CHECKED);
  }
  //HTML_INFORMATIONの変更
  changeInformation();
}

//カードの追加
const ADD_CARD = document.getElementById("add-card");
function addCard(specifyLocation: string, problem: string, answer: string, isChecked: string | boolean) {
  const CARDS = document.getElementById("cards");
  if (CARDS !== null) {
    CARDS.insertAdjacentHTML(
      specifyLocation as InsertPosition,
      `<li class="card">
      <div class="flex items-center justify-center flex-wrap w-full my-5">
        <div class="flex flex-col flex-1">
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="問題を入力して下さい" value="${problem}" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
          </label>
          <label class="flex-1 mx-2.5 my-2">
            <input type="text" placeholder="解答を入力して下さい" value="${answer}" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
          </label>
        </div>
        <label class="flex-none mx-2">
        <div class="inline-flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
            <input
              type="checkbox"
              class="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" 
              ${isChecked == "true" ? "checked" : ""} />
                <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
          </label>
        </div>
      </label>
      <button class="mx-2 delete-card" onclick="deleteCard()">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
          <path
            d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
        </svg>
      </button>
    </div>
  </li>`
    );
  }
}

//ファイル読み込み
const INPUT_FILE = document.getElementById("input-file");
const LOAD_FILE = document.getElementById("load-file");
const OUTPUT_FILE = document.getElementById("output");
//ボタンへのクリックをinput[type="file"]へ送る
function loadFile() {
  if (INPUT_FILE !== null) {
    INPUT_FILE.click();
  }
}
if (LOAD_FILE !== null) {
  LOAD_FILE.addEventListener("click", loadFile);
}
//ファイル情報を表示し、input要素に代入する
function organizingFileInformation(e: { target: { files: Blob[] } }) {
  //inputへの代入
  const READER = new FileReader();
  READER.readAsText(e.target.files[0]);
  READER.addEventListener("load", function (event) {
    if (event.target !== null) {
      HTMLInformation = JSON.parse(event.target.result as string);
      assignToHTML();
    }
  });
  //ファイル情報の表示
  const FILES = e.target.files;
  if (FILES.length === 0) return;
  const LOADED_FILE_NAME = "name: " + (FILES[0] as File).name;
  if (OUTPUT_FILE !== null) {
    OUTPUT_FILE.innerHTML = LOADED_FILE_NAME;
  }
  //HTML_INFORMATIONの変更
  changeInformation();
  assignToHTML();
}
if (INPUT_FILE !== null) {
  INPUT_FILE.addEventListener("change", organizingFileInformation as unknown as EventListener);
}
//カードの削除 技術的に難しい
function deleteCard() {
  const DELETE_CARD = document.getElementsByClassName("delete-card");
  alert("現時点では使用することができません。\n消したいカードが有りましたら、問題と答えの入力欄をどちらも空白にしておいて下さい。\n空白のカードは保存しないようにします。");
}

//ファイルとして保存
function saveAsFile() {
  const FILE_DATA = JSON.stringify(HTMLInformation);
  const BLOB = new Blob([FILE_DATA], { type: "application/json" });
  const LINK = document.createElement("a");
  document.body.appendChild(LINK);
  LINK.href = window.URL.createObjectURL(BLOB);
  LINK.download = `${HTMLInformation["name"]}.learn-and-check.json`;
  LINK.click();
  document.body.removeChild(LINK);
}

//単語帳開始
function start() {
  const FILE_NAME = (document.getElementById("file-name") as HTMLInputElement)?.value;
  new WinBox(FILE_NAME, {
    mount: document.getElementById("winbox"),
    icon: "../favicon.png",
    width: "100%",
    height: "100%",
  });
  //表示変更
  let number = 0;
  const DATA_INPUT = HTMLInformation.contents;
  const QUESTION_FIELD = document.getElementById("question-field");
  const INPUT_ANSWER = document.getElementById("input-answer");
  const ANSWER_FIELD = document.getElementById("answer-field");
  const CHECK_FIELD = document.getElementById("check-field");
  const MOLECULE = document.getElementById("molecule");
  const DENOMINATOR = document.getElementById("denominator");
  function changeDisplay() {
    if (number >= 0 && number < DATA_INPUT.length) {
      if (QUESTION_FIELD !== null) {
        QUESTION_FIELD.textContent = (DATA_INPUT[number] as { question: string })?.question || "";
      }
      if (ANSWER_FIELD !== null) {
        ANSWER_FIELD.textContent = (DATA_INPUT[number] as { answer: string })?.answer || "";
      }
      if (CHECK_FIELD !== null) {
        if ((DATA_INPUT[number] as { check: string })?.check == "true") {
          (CHECK_FIELD as HTMLInputElement).checked = true;
        } else {
          (CHECK_FIELD as HTMLInputElement).checked = false;
        }
      }
    } else if (number < 0) {
      number = 0;
      changeDisplay();
    } else {
      alert("単語帳は終了しました。右上のバツボタンから閉じて下さい。");
    }
    if (ANSWER_FIELD !== null) {
      ANSWER_FIELD.classList.remove("hidden");
    }
  }

  changeDisplay();
  //number変更
  const BACK = document.getElementById("back");
  if (BACK !== null) {
    BACK.addEventListener("click", () => {
      number--;
      changeDisplay();
    });
  }
  const NEXT = document.getElementById("next");
  NEXT?.addEventListener("click", () => {
    number++;
    changeDisplay();
  });
  changeDisplay();
  //hiddenの変更
  const CHECK_BUTTON = document.getElementById("check");
  if (CHECK_BUTTON !== null) {
    CHECK_BUTTON.addEventListener("click", () => {
      if (ANSWER_FIELD !== null) {
        ANSWER_FIELD.classList.remove("hidden");
        if (INPUT_ANSWER !== null && (INPUT_ANSWER as HTMLInputElement).value === ANSWER_FIELD.innerText) {
          alert("正解!");
        } else {
          alert("不正解");
        }
      }
    });
  }
  //checkbox変更
  if (CHECK_FIELD !== null) {
    CHECK_FIELD.addEventListener("change", () => {
      if ((CHECK_FIELD as HTMLInputElement).checked) {
        (HTMLInformation.contents[number] as { check: string }).check = "true";
        assignToHTML();
      } else {
        (HTMLInformation.contents[number] as { check: string }).check = "false";
        assignToHTML();
      }
    });
  }
}

//createページ
export default function Create() {
  return (
    <>
      <main className="h-full">
        <div className="flex flex-wrap flex-col items-center text-center m-5">
          <div className="hidden w-full border-blue-600 border-2 rounded-2xl">
            <h1>単語帳設定</h1>
            <div className="px-20 flex flex-col items-stretch">
              <div className="my-4">
                <label className="flex justify-between items-center hover:bg-gray-200">
                  チェックボックス機能を使用する
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      />
                      <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      />
                      <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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
              <h1>入力欄</h1>
              <p>以下の入力欄に入力するか、規定のファイル形式のファイルを読み込んで下さい。</p>
              <input type="file" id="input-file" accept=".learn-and-check.json" className="hidden" />
              <div className="flex justify-center items-center">
                <button id="load-file" className="p-2 rounded-lg bg-blue-300 hover:bg-blue-400 w-40">
                  ファイルを読み込む
                </button>
                <div id="output" className="[max-width:50%]"></div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-4 mx-20" onChange={changeInformation} id="data-field">
              <label className="mx-2.5 w-full flex justify-center">
                <input type="text" maxLength={100} placeholder="タイトルを入力して下さい" className="border-[#767676] border border-solid rounded-[5px] flex-1" id="file-name" />
              </label>
              <ul className="w-full list-decimal min-w-[12.5rem]" id="cards">
                <li className="card">
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <button className="mx-2 delete-card" onClick={deleteCard}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="card">
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <button className="mx-2 delete-card" onClick={deleteCard}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="card">
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <button className="mx-2 delete-card" onClick={deleteCard}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="card">
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <button className="mx-2 delete-card" onClick={deleteCard}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="card">
                  <div className="flex items-center justify-center flex-wrap w-full my-5">
                    <div className="flex flex-col flex-1">
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="問題を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
                      </label>
                      <label className="flex-1 mx-2.5 my-2">
                        <input type="text" placeholder="解答を入力して下さい" value="" className="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
                      </label>
                    </div>
                    <label className="flex-none mx-2">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                          <input
                            type="checkbox"
                            className="check before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                          />
                          <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </label>
                      </div>
                    </label>
                    <button className="mx-2 delete-card" onClick={deleteCard}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="my-2">
              <button id="add-card" className="p-2 rounded-lg bg-blue-300 hover:bg-blue-400 w-40" onClick={addCard}>
                カードを追加
              </button>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-blue-300 hover:bg-blue-400 mx-2 w-40" onClick={saveAsFile}>
            ファイルとして保存
          </button>
          <button className="p-2 rounded-lg bg-blue-300 hover:bg-blue-400 mx-2 w-40" onClick={start}>
            単語帳開始
          </button>
        </div>
        <div className="h-full hidden">
          <div className="flex flex-col h-full" id="winbox">
            <div className="flex-1 mx-32">
              <div className="h-full flex items-center">
                <div className="h-full flex flex-col items-center justify-center mx-auto w-full">
                  <div className="w-full text-center my-2">
                    <p className="text-5xl" id="question-field">
                      問題文
                    </p>
                  </div>
                  <div className="w-full text-center flex justify-center my-2">
                    <input type="text" placeholder="回答欄" id="input-answer" className="border-[#767676] border border-solid rounded-[10px] flex-1 text-2xl p-2" />
                    <button className="ml-4 p-2 rounded-lg bg-blue-300 hover:bg-blue-400 w-20" id="check">
                      確認
                    </button>
                  </div>
                  <div className="w-full text-center my-2">
                    <p className="text-5xl hidden" id="answer-field">
                      解答
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none relative">
              <div className="flex justify-center items-center">
                <div>
                  <button id="back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="w-40 text-center">
                  <p>
                    <span id="molecule"></span>/<span id="denominator"></span>
                  </p>
                </div>
                <div>
                  <button id="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute z-20 bottom-0 right-4 h-full flex">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" data-ripple-dark="true">
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      id="check-field"
                    />
                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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
