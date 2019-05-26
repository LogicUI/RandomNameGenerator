export const appendElements = (tag, array) => {
  for (let element of array) {
    tag.appendChild(createElement("h1",element,["subtitle","is-size-3"]))
  }
};

const createElement = (type, text,className="") => {
  const newElement = document.createElement(type);
  newElement.textContent = text;
  newElement.classList.add(...className);
  return newElement;
};
