

export default function giveResultArray(text1Input, text2Input) {
  const text1Split = text1Input.split("\n");
  const text2Split = text2Input.split("\n");
  let resultArray = [];

  for (var i = 0; (text1Split.length >= text2Split.length ? (i < text1Split.length) : (i < text2Split.length) ); i++ ) {
    console.log(text1Split[i], text2Split[i]);
    if (text1Split[i] && text2Split[i] && text1Split[i].trim() === text2Split[i].trim()) {
      resultArray.push(i);
    } else {
      resultArray.push(i);
    }
  };
  return resultArray;
}

