
const getcolor = () =>{
    const randomNumber= Math.floor(Math.random() * 16777215);
    const randomcode= "#" + randomNumber.toString(16);
    document.body.style.backgroundColor= randomcode;
    colorCode.innerText=randomcode;
}


const colorCode= document.querySelector(".colorCode");
const buttonnn= document.querySelector(".Btnnn");

buttonnn.addEventListener("click", getcolor
    
);

getcolor();