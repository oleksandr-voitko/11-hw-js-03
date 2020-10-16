// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

console.log("Задание 1");

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

const keys = Object.keys(user);
for (const key of keys) {
  if (key === "hobby") {
    user[key] = "skydiving";
  } else if (key === "premium") {
    user[key] = false;
  }
  console.log(key, ":", user[key]);
}
