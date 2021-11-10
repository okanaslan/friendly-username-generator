import { generateRandomUsername } from "../src/generateRandomUserNames";

describe("username generation tests", () => {
    it("should generate a random username with no options", () => {
        const username = generateRandomUsername();
        expect(username).toEqual(expect.any(String));
    });

    it("should generate username if options object has no keys", () => {
        const username = generateRandomUsername();

        expect(username).toEqual(expect.any(String));
    });

    it("should set defaults when options are explicitly passed", () => {
        const usernameWithDefaultOptions = generateRandomUsername();
        const matchNumbersRegex = /[0-9]/g;

        expect(usernameWithDefaultOptions).toEqual(expect.any(String));
        expect(usernameWithDefaultOptions.match(matchNumbersRegex)).not.toBe(null);
        expect(usernameWithDefaultOptions.includes("-")).toBe(true);
    });
});
