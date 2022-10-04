import getNextId from "./get-next-id";

describe('get-next-id util', () => {
  it('should return 6 when the highest id is 5', () => {
    const data = [
      {
        id: 0
      },
      {
        id: 5
      }
    ];

    const nextId = getNextId(data);

    expect(nextId).toBe(6);
  });

  it('should return 0 when the array is empty', () => {
    const data = [];

    const nextId = getNextId(data);

    expect(nextId).toBe(0);
  });

  it('should return 7 when the array is unsorted and the highest id is 6', () => {
    const data = [
      {
        id: 5
      },
      {
        id: 0
      },
      {
        id: 6
      },
      {
        id: 3
      }
    ];

    const nextId = getNextId(data);

    expect(nextId).toBe(7);
  });
})