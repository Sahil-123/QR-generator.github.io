let btn=document.getElementById("btn");
let img=document.getElementById("img");
let loader=document.getElementById("loader");

btn.addEventListener("click",()=>{
    loader.style.display="block";
    console.log("pressed");

    img.onload=()=>{
        loader.style.display="none";
        console.log("loaded");
    }

    let text=document.getElementById("text").value;
    let imgGet=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    img.src=imgGet;
    console.log(text);
})



