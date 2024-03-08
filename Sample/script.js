var btn= document.getElementById("button");
btn.addEventListener('click', clickFunc)

function clickFunc(){
    document.querySelector("#name").innerHTML="Hi";
}