const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  const li = document.createElement("li");

  if (input.value.length === 0) {
    alert("input must not be empty");
  } else {
    li.innerText = input.value;
    input.value = "";
    ul.append(li);
    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through ";
      }
    });

    li.addEventListener("dblclick", () => {
      li.remove();
    });
  }
});

// Add a "checked" symbol when clicking on a list item
ul.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a "close" button and append it to each list item
const li = document.querySelector("li");
for (let i = 0; i < li.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
    // close.classList.add("close");
  };
}
