var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log(cat);
// console.log(button);

button.addEventListener("click", function(){
    cat.classList.add("show");
})