export let names = [
  'Kai',
  'Chung-Ling',
  'Edson',
  'Gaurav',
  'Jenssen',
  'John',
  'Natalie',
  'Brandon',
  'Shalini',
  'Jinjia'
];

export let used = [];

export const getRandomName = () => {

  if (names.length === 0) {
    names = used;
    used = [];
    shuffleArray(names);
  }
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names.splice(randomIndex, 1)[0];
  used.push(randomName);

  return randomName;
};

const shuffleArray = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    const random = Math.floor(Math.random() * (index + 1)); // get random index
    [array[index], array[random]] = [array[random], array[index]]; // swap the random index and array element
  }
};

export const refreshUnused = () => {
    names = names.concat(used);
    shuffleArray(names);
    used =[];
}
