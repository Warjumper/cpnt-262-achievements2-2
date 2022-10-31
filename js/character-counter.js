//Character Counter
const submitHandler = (event) => {
  event.preventDefault();
}

const textArea = document.getElementById("textBio");

const characterCounter = document.getElementById("textCounter");

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = numOfEnteredChars;
  characterCounter.textContent = counter + "/400";
};

textArea.addEventListener("input", countCharacters);


//Console Log
console.log("Thanks for playing!")

