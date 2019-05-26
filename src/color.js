export const runGradients = (numColors) => {
  if (numColors % 2 !== 0) {
    console.log('number of colors input must be multiples of 2');
  }

  const gradients = [];

  for (let index = 0; index < numColors; index += 2) {
    const firstRandom = Math.floor(Math.random() * 16777215).toString(16);
    const secondRandom = Math.floor(Math.random() * 16777215).toString(16);
    gradients.push(`linear-gradient(to right,#${firstRandom},#${secondRandom}`);
  }

  return gradients;
};
