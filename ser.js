const objectToConvert = {
  name: "alice",
  age: 25
};
const json = JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json);