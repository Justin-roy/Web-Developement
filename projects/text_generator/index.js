const container = document.querySelector(".container");

const enterVal = document.getElementById("text_box");

const getGeneratedText = (num = 5) => {
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let text = "";
  for (let i = 0; i < num; i++) {
    const random = (Math.random() * (letter.length - 1)).toFixed(0);
    text += letter[random];
  }

  return text;
};

const clearPara = () => {
  const paragraphs = document.querySelector(".paras");
  paragraphs.remove();
};
const clearAllPara = () => {
  enterVal.value = "";
  const paragraphs = document.querySelectorAll(".paras");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].remove();
  }
};

const generatePara = () => {
 if(Number(enterVal.value) <=200){
    if (enterVal.value == "") {
        window.alert("Enter value to generate paragraph");
      } else {
        let numsofWords = Number(enterVal.value);
        let data = "";
        for (let i = 0; i < numsofWords; i++) {
          data += getGeneratedText(numsofWords);
          data += " ";
        }
        const para = document.createElement("p");
        para.innerText = data;
        para.setAttribute("class", "paras");
        container.append(para);
      }
 }else{
    window.alert("Enter lower value lesser 200");

 }
};
