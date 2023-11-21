const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveInLocalStorage(user){
  userJSON = JSON.stringify(user);
  const userData = localStorage.setItem('user', userJSON);
  console.log(userData);
}

saveInLocalStorage(user)