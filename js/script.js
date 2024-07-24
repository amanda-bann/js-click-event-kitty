var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log(cat);
// console.log(button);

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        // console.log("oui");
        cat.classList.remove("show");
        button.innerText = "Attend, reviens!";
        button.classList.add("disappear");
    } else {
        // console.log("non");
        cat.classList.add("show");
        button.innerText = "Sortir, chat!";
        button.classList.remove("disappear");
    }
});
