import { addition } from "./firstFunction";

describe('Test Addition', () => {
    it('Testing addition function "toBe"', () => {
        // expect(addition(10, 10)).toEqual(20);
        let testString = 'Hello World';
        expect(testString).toBe('Hello World');
    });

    it('Testing array equality "toEqual"', () => {
        // expect(addition(10, 10)).toEqual(20);
        const arr = [1, 2, 3];
        expect(arr).toEqual([1, 2, 3]);
    });

    it('Testing array equality "Not.toEqual"', () => {
        // expect(addition(10, 10)).toEqual(20);
        const arr = [1, 2, 3];
        expect(arr).not.toEqual([1, 2, 3, 4]);
    });


    it('Testing array should contain "toContainArrayItem"', () => {
        // expect(addition(10, 10)).toEqual(20);
        const arr = [1, 2, 3];
        expect(arr).toContain(1);
    });

    it('Testing string should check a word is present or not!! "toContain"', () => {
        // expect(addition(10, 10)).toEqual(20);
        const testString = 'Im Deepak and I would like to learn unit testing';
        expect(testString).toContain('learn');
    });

    it('Testing with RegEx, Checking any matcher is there or not!! "toMatch"', () => {
        const message = 'this 4th lane of underworld';
        expect(message).toMatch(/\d+/);
        expect(message).toMatch('underworld');
    });
});
