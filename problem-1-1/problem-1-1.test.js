class Bag {
  #items = [];

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#items.length;
  }

  add(item) {
    this.#items.push(item);
  }

  [Symbol.iterator]() {
    let index = 0;
    const data = [...this.#items];

    return {
      next() {
        if (index < data.length) {
          const value = data[index];
          index += 1;

          return {
            done: false,
            value,
          };
        }

        return { done: true };
      },
    };
  }
}

test('백은 비어있는 상태로 생성된다', () => {
  const bag = new Bag();

  expect(bag.isEmpty()).toBe(true);
});

test('백에 값을 추가하면, 개수가 증가한다', () => {
  const bag = new Bag();

  const oldSize = bag.size();

  bag.add('D');

  const newSize = bag.size();

  expect(newSize - oldSize).toBe(1);
});

test('백의 모든 요소를 순회할 수 있다', () => {
  const bag = new Bag();

  [1, 3, 5, 7, 9].forEach((i) => {
    bag.add(i);
  });

  let sum = 0;

  for (const item of bag) {
    sum += item;
  }

  expect(sum).toBe(25);
});
