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
    '<li><div class="flex items-center justify-center flex-wrap w-full my-5"><div class="flex flex-col flex-1"><label class="flex-1 mx-2.5 my-2"><input type="text" placeholder="問題を入力して下さい" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem]" /></label><label class="flex-1 mx-2.5 my-2"><input type="text" placeholder="解答を入力して下さい" class="w-full border-[#767676] border border-solid rounded-[5px] min-w-[10rem]" /></label></div><label class="flex-none mx-2"><input type="checkbox" class="scale-125" /></label><button class="mx-2" id="delete_card"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg></button></div></li>'
  );
}
add_card.addEventListener("click", addCard);
//カードの削除 技術的に難しい
const delete_card = document.getElementById("delete_card");
function deleteCard() {
  alert("現時点では使用することができません。\n消したいカードが有りましたら、入力欄を空白にしておいて下さい。");
}
delete_card.addEventListener("click", deleteCard);
