const el_input_file_02 = document.getElementById("input-file");
const bt_file_02 = document.getElementById("bt-file");
const el_output_02 = document.getElementById("output");
//ボタンへのクリックをinput[type="file"]へ送る。
bt_file_02.addEventListener("click", () => {
  el_input_file_02.click();
});
//ファイル情報を表示する。
el_input_file_02.addEventListener("change", (e) => {
  const files = e.target.files;
  if (files.length === 0) return;
  const array_output = [
    //escHtml(str)はエスケープ処理をする関数
    "name:" + files[0].name,
  ];
  el_output_02.innerHTML = array_output.join("<br>");
});
