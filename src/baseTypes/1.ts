// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Max",
  age: 50,
};

let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => {
  return 100 + a;
};

export { user };
