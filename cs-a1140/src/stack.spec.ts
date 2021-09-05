import Stack from "./stack";

describe('Stack', () => {
    let stack: Stack<number>;
    beforeEach(() => {
        stack = new Stack<number>();
    });

    it('Should push items on the top of the stack', () => {
        stack.push(1);
        stack.push(2);

        expect(stack.top()).toBe(2);
    });

    it('Should retrieve the top item of the stack without removing it', () => {
        stack.push(1);
        stack.push(2);
        let topped = stack.top();
        let popped = stack.pop();

        expect(topped).toBe(2);
        expect(popped).toBe(2);
    });

    it('Should pop items from the top of the stack', () => {
        stack.push(1);
        stack.push(2);

        expect(stack.pop()).toBe(2);
    });
});