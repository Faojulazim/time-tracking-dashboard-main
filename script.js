const buttons = document.querySelectorAll("button");
const data_card = document.querySelectorAll("[data-card]");

//Run getData function if a button is clicked
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    buttons[i].classList.add("text-white");
    for (let j = 0; j < buttons.length; j++) {
      if (i !== j) {
        buttons[j].classList.remove("text-white");
      }
    }
    getData(e.target.id);
  });
}

//Give validateAndShowDisplayData function dataJson and also buttonId
const getData = async (buttonId) => {
  const data = await fetch("data.json");
  const dataJson = await data.json();
  validateAndShowDisplayData(dataJson, buttonId);
};

//change the elements texts using changeTexts function
function changeTexts(getButtonId, buttonId) {
  for (let i = 0; i < getButtonId.length; i++) {
    data_card[i].querySelector(
      "[data-current]"
    ).innerText = `${getButtonId[i].timeframes[buttonId].current}hrs`;
    data_card[i].querySelector(
      "[data-previous]"
    ).innerText = `Last Week - ${getButtonId[i].timeframes[buttonId].previous}hrs`;
    if (getButtonId[i].timeframes[buttonId].current <= 1) {
      data_card[i].querySelector(
        "[data-current]"
      ).innerText = `${getButtonId[i].timeframes[buttonId].current}hr`;
      if (getButtonId[i].timeframes[buttonId].previous <= 1) {
        data_card[i].querySelector(
          "[data-previous]"
        ).innerText = `Last Week - ${getButtonId[i].timeframes[buttonId].previous}hr`;
      }
    }
  }
}

//validate the button clicks
const validateAndShowDisplayData = (getButtonId, buttonId) => {
  if (buttonId === "daily") {
    changeTexts(getButtonId, buttonId);
  }
  if (buttonId === "weekly") {
    changeTexts(getButtonId, buttonId);
  }
  if (buttonId === "monthly") {
    changeTexts(getButtonId, buttonId);
  }
};
