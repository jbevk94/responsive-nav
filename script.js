let bar = document.getElementById("bar");
let list = document.getElementById("list");
bar.addEventListener("click", function(){
    if (bar.className === "fa fa-bars"){
        // If it's bar then we will change to cross
        bar.className = "fa fa-times";
        list.style.right = 0;
    }
    else{
        bar.className = "fa fa-bars"
        list.style.right = "-200px";
    }
})