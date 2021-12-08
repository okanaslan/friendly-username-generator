import { UsernameUtils } from "../src/generateRandomUserNames";

describe("username generation tests", () => {
    it("should generate a random username with no options", () => {
        const username = UsernameUtils.generateRandomUsername();
        expect(username).toEqual(expect.any(String));
    });

    it("should generate username if options object has no keys", () => {
        const username = UsernameUtils.generateRandomUsername();

        expect(username).toEqual(expect.any(String));
    });

    it("should set defaults when options are explicitly passed", () => {
        const usernameWithDefaultOptions = UsernameUtils.generateRandomUsername();
        const matchNumbersRegex = /[0-9]/g;

        expect(usernameWithDefaultOptions).toEqual(expect.any(String));
        expect(usernameWithDefaultOptions.match(matchNumbersRegex)).not.toBe(null);
        expect(usernameWithDefaultOptions.includes("-")).toBe(true);
    });
});
