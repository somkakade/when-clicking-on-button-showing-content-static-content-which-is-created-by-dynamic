// const myHOneElement = document.createElement("h1");
// const mySpanElement = document.createElement("span");
// mySpanElement.innerText = "Hello Javascript Developer";
// myHOneElement.appendChild(mySpanElement);
// document.body.appendChild(myHOneElement);
// // Added class on h1 element
// myHOneElement.classList.add("h-tag");
// // adding background color to the h1 element
// myHOneElement.style.backgroundColor = "red";

// When i click on the button, i am showing something data in list

// selector
const btn = document.querySelector(".click-me");
const userList = document.querySelector(".content-list");

btn.addEventListener("click", function () {
  console.log("Testing");
  // create li in the air
  const liElement = document.createElement("li");
  const liContent = document.createTextNode(
    "Namaste Javascript Developer, We are onboarding you"
  );
  // append li content in the li
  liElement.appendChild(liContent);
  // append li content in the li list
  userList.appendChild(liElement);
  //   Adding class on li
  liElement.classList.add("list-name");
  //   Adding color on li content
  liElement.style.color = "red";
});
