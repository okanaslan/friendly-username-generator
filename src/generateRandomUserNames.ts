import { adjectives } from "./adjectives";
import { animals } from "./animals";

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItemFromArray = (array: string[]) => getRandomNumber(0, array.length - 1);

export const generateRandomUsername = () => {
    // Construct username
    const randomAdjective = adjectives[getRandomItemFromArray(adjectives)];
    const randomAnimal = animals[getRandomItemFromArray(animals)];
    const randomNumber = getRandomNumber(0, 99);
    let username = `${randomAdjective}-${randomAnimal}${randomNumber}`;
    return username;
};
