export class RandomSequence {

    /**
     * Generates a sequence of distinct numbers in random order.
     * @param from The starting number from which to generate    numbers.
     * @param to The ending number to which to generate numbers.
     */
    public static generate(from: number, to: number): number[] {
        if (from >= to)
            throw new Error("'from' must be less than 'to'.");

        let count = to - from + 1;

        let order: {index:number, prop: number}[] = [];
        let seq:number[] = [];

        // Initialize order and sequence arrays
        for(let i = 0; i < count; i++) {
            order.push({ index: i, prop: Math.random() });
            seq.push(from + i);
        }
        
        // Reorder the 'order' array according to random-valued property => randomized order
        order = order.sort((a, b) => b.prop - a.prop);

        // Return sequence items in the random order
        return order.map(v => seq[v.index])
    }
}