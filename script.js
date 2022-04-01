let btn = document.getElementById("btn");
let img = document.getElementById("img");
let loader = document.getElementById("loader");

btn.addEventListener("click", () => {
    loader.style.display = "block";
    console.log("pressed");
    img.src = "";
    img.onload = () => {
        loader.style.display = "none";
        console.log("loaded");
    }

    let text = document.getElementById("text").value;

    if (text == "") {
        alert("Please Enter text");
        loader.style.display = "none";

    } else {

        let imgGet = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
        img.src = imgGet;
        console.log(text);
    }
})



