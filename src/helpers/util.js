const printToDomReplace = (divId, text) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = text;
};

const printToDomAdd = (divId, text) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += text;
};

const logStuff = (stuff) => {
  console.error(stuff);
};

export default { printToDomReplace, printToDomAdd, logStuff };
