//カードの追加
const ADD_CARD = document.getElementById("add-card");
function addCard() {
  const CARDS = document.getElementById("cards");
  CARDS.insertAdjacentHTML(
    "beforeend",
    `<li class="card">
    <div class="flex items-center justify-center flex-wrap w-full my-5">
      <div class="flex flex-col flex-1">
        <label class="flex-1 mx-2.5 my-2">
          <input type="text" placeholder="問題を入力して下さい" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] question" />
        </label>
        <label class="flex-1 mx-2.5 my-2">
          <input type="text" placeholder="解答を入力して下さい" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem] answer" />
        </label>
      </div>
      <label class="flex-none mx-2">
        <input type="checkbox" class="scale-125 check" />
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
ADD_CARD.addEventListener("click", addCard);

//ファイル読み込み
const INPUT_FILE = document.getElementById("input-file");
const LOAD_FILE = document.getElementById("load-file");
const OUTPUT_FILE = document.getElementById("output");
//ボタンへのクリックをinput[type="file"]へ送る
function loadFile() {
  INPUT_FILE.click();
}
LOAD_FILE.addEventListener("click", loadFile);
//ファイル情報を表示し、input要素に代入する（inputへの代入はまだ）
function organizingFileInformation(e) {
  //ファイル情報の表示
  const FILES = e.target.files;
  if (FILES.length === 0) return;
  const LOADED_FILE_NAME = "name: " + FILES[0].name;
  OUTPUT_FILE.innerHTML = LOADED_FILE_NAME;
}
INPUT_FILE.addEventListener("change", organizingFileInformation);

//カードの削除 技術的に難しい
function deleteCard() {
  const DELETE_CARD = document.getElementsByClassName("delete-card");
  alert("現時点では使用することができません。\n消したいカードが有りましたら、問題と答えの入力欄をどちらも空白にしておいて下さい。\n空白のカードは保存しないようにします。");
}

//ファイルとして保存
function saveAsFile() {
  const FILE_NAME = document.getElementById("file-name").value;
  const CARD = document.getElementsByClassName("card");
  const OBJECT_DATA = Object.values(CARD).map((element) => {
    const QUESTION = element.getElementsByClassName("question")[0];
    const ANSWER = element.getElementsByClassName("answer")[0];
    const CHECK = element.getElementsByClassName("check")[0];
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
    const BOOLEAN_VALUE = !(QUESTION_VALUE == false || ANSWER_VALUE == false);
    return BOOLEAN_VALUE;
  });
  const JSON_DATA = {
    name: FILE_NAME,
    contents: NON_BLANK_CARD,
  };
  const FILE_DATA = JSON.stringify(JSON_DATA);
  const BLOB = new Blob([FILE_DATA], {type: "application/json"});
  const LINK = document.createElement("a");
  document.body.appendChild(LINK);
  LINK.href = window.URL.createObjectURL(BLOB);
  LINK.download = `${FILE_NAME}.learn-and-check.json`;
  LINK.click();
  document.body.removeChild(LINK);
}
