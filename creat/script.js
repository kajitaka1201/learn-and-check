const el_input_file_02 = document.getElementById("input-file");
const bt_file_02 = document.getElementById("bt-file");
const el_output_02 = document.getElementById("output");
//ボタンへのクリックをinput[type="file"]へ送る。
function loadFile() {
  el_input_file_02.click();
}
bt_file_02.addEventListener("click", loadFile);
//ファイル情報を表示する。
function outputFileInformation(e) {
  const files = e.target.files;
  if (files.length === 0) return;
  const array_output = "name: " + files[0].name;
  el_output_02.innerHTML = array_output;
}
el_input_file_02.addEventListener("change", outputFileInformation);
//カードの追加
const add_card = document.getElementById("add_card");
const cards = document.getElementById("cards");
function addCard() {
  cards.insertAdjacentHTML(
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
      <button class="mx-2 delete_card" onclick="deleteCard()">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
          <path
            d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
        </svg>
      </button>
    </div>
  </li>`
  );
}
add_card.addEventListener("click", addCard);
//カードの削除 技術的に難しい
function deleteCard() {
  const delete_card = document.getElementsByClassName(".delete_card");
  alert("現時点では使用することができません。\n消したいカードが有りましたら、問題と答えの入力欄をどちらも空白にしておいて下さい。\n空白のカードは保存しないようにします。");
}
//ファイルとして保存
function saveAsFile() {
  const file_name = document.getElementById("file_name").value;
  const card = document.getElementsByClassName("card");
  const object_data = Object.values(card).map((element) => {
    const question = element.getElementsByClassName("question")[0];
    const answer = element.getElementsByClassName("answer")[0];
    const check = element.getElementsByClassName("check")[0];
    const question_value = question.value;
    const answer_value = answer.value;
    const check_value = check.checked;
    const object_value = {
      question: `${question_value}`,
      answer: `${answer_value}`,
      check: `${check_value}`,
    };
    return object_value;
  });
  const nonblankCard = Object.values(object_data).filter((element) => {
    const question_value = element.question;
    const answer_value = element.answer;
    const boolean = !(question_value == false || answer_value == false);
    return boolean;
  });
  const json_data = {
    name: file_name,
    contents: nonblankCard,
  };
  const file_data = JSON.stringify(json_data);
  const blob = new Blob([file_data], {type: "application/json"});
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = window.URL.createObjectURL(blob);
  link.download = `${file_name}.learn-and-check.json`;
  link.click();
  document.body.removeChild(link);
}
