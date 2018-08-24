Object.defineProperty(window, 'crypto', {
  value: {
    getRandomValues: () => {
      return 4; // chosen by fair dice roll, guaranteed to be random
    },
  },
});

Date.now = jest.fn(() => 1525946400000); // 2018-05-10 10:00:00 AM
