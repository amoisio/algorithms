import QuickFind from '../algorithms/quickFind';

test('quickFind initializes propertly', () => {
    let qf = new QuickFind(10);
    expect(qf.data).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('quickFind.union connects disconnected components', () => {
    let qf = new QuickFind(10);
   
    expect(qf.connected(0, 1)).toBeFalsy();
    expect(qf.connected(1, 2)).toBeFalsy();
    expect(qf.connected(2, 3)).toBeFalsy();

    qf.union(0, 1);
    qf.union(2, 3);

    expect(qf.connected(0, 1)).toBeTruthy();
    expect(qf.connected(2, 3)).toBeTruthy();
    expect(qf.connected(1, 2)).toBeFalsy();

    qf.union(1, 2);

    expect(qf.connected(0, 1)).toBeTruthy();
    expect(qf.connected(2, 3)).toBeTruthy();
    expect(qf.connected(1, 2)).toBeTruthy();
});

test('quickFind.find find is items are in the same connected component', () => {
    let qf = new QuickFind(10);
   
    expect(qf.connected(0, 1)).toBeFalsy();

    qf.union(0, 1);
    
    expect(qf.connected(0, 1)).toBeTruthy();
});