function huffman(data = []) {
  const n = data.length;
  const q = data
    .slice()
    .sort((current, next) => current.frequency - next.frequency);

  for (let i = 0; i < n - 1; i++) {
    const firstElem = q.shift();
    const secondElem = q.shift();
    q.push({
      vertex: `v${i}`,
      frequency: firstElem.frequency + secondElem.frequency,
      children: [firstElem, secondElem],
    });
    q.sort((current, next) => current.frequency - next.frequency);
  }

  return { tree: q };
}

const dataQ1 = [
  {
    vertex: "a",
    frequency: 1 / 2,
  },
  {
    vertex: "b",
    frequency: 1 / 4,
  },
  {
    vertex: "c",
    frequency: 1 / 8,
  },
  {
    vertex: "d",
    frequency: 1 / 16,
  },
  {
    vertex: "e",
    frequency: 1 / 32,
  },
  {
    vertex: "f",
    frequency: 1 / 32,
  },
];

const dataQ2 = [
  {
    vertex: "a",
    frequency: 5 / 100,
  },
  {
    vertex: "b",
    frequency: 9 / 100,
  },
  {
    vertex: "c",
    frequency: 12 / 100,
  },
  {
    vertex: "d",
    frequency: 13 / 100,
  },
  {
    vertex: "e",
    frequency: 16 / 100,
  },
  {
    vertex: "f",
    frequency: 45 / 100,
  },
];

huffman(dataQ1);
huffman(dataQ2);
