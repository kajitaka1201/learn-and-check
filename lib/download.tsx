export async function downloadFile({
  name,
  content,
  fileHandle,
}: {
  name: string;
  content: string;
  fileHandle?: FileSystemFileHandle;
}) {
  if (window?.showSaveFilePicker) {
    console.debug(fileHandle);
    fileHandle ??= await window.showSaveFilePicker({
      suggestedName: name,
    });

    const writable = await fileHandle?.createWritable();
    await writable?.write(content);
    await writable?.close();
    return;
  }
  const blob = new Blob([content], { type: "application/json" }); //ここを保存したいファイルのMIMEタイプに変更してください。
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
}
