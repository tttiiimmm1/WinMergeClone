

export default function giveResultArray(text1Input, text2Input) {
  const text1Array = () => text1Input.split("\n");
  const text2Array = () => text2Input.split("\n");
  let resultArray = [];

  for (var i = 0; /*(text1Array >= text2Array ? (i < text1Array.length) : (i < text2Array.length) )*/ i<5; i++ ) {
    if (text1Array[i] === text2Array[i]) {
      resultArray = resultArray.push("T") + "\n";
    } else {
      resultArray = resultArray.push("F") + "\n";
    }
  return console.log(resultArray);
  };
  

}