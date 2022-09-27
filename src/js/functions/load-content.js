// function that looks for that data in localStorage when your app is first loaded.

// if data in local storage
export default function loadContent() {
  let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  for (let item of values) {
    //   let newObject = window.localStorage.getItem("object");
    console.log(JSON.parse(item));
  }
}
