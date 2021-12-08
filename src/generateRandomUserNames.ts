import { adjectives } from "./adjectives";
import { animals } from "./animals";

export class UsernameUtils {
    private static getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    private static getRandomItemFromArray = (array: string[]) => array[UsernameUtils.getRandomNumber(0, array.length - 1)];

    public static generateRandomUsername = (): string => {
        const randomAdjective = UsernameUtils.getRandomItemFromArray(adjectives);
        const randomAnimal = UsernameUtils.getRandomItemFromArray(animals);
        const randomNumber = UsernameUtils.getRandomNumber(0, 99);
        let username = `${randomAdjective}-${randomAnimal}${randomNumber}`;
        return username;
    };
}
