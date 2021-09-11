

export default function giveResultArray(text1Input, text2Input) {
  const text1Array = text1Input.split("\n");
  const text2Array = text2Input.split("\n");
  let resultArray = [];

  for (var i = 0; (text1Array.length >= text2Array.length ? (i < text1Array.length) : (i < text2Array.length) ); i++ ) {
    console.log(text1Array[i], text2Array[i]);
    if (text1Array[i] && text2Array[i] && text1Array[i].trim() === text2Array[i].trim()) {
      resultArray.push("T");
    } else {
      resultArray.push("F");
    }
  };
  return resultArray;
}