async function displayImage(){
    document.body.style.backgroundColor = "green";
    let imgNum = Math.round(Math.random()*3)+1;
    document.body.style.backgroundImage = "url(resources/images/cats/cat" + imgNum.toString() + ".jpeg)";
}

window.addEventListener('load', async function() {
    /*let fun = confirm("Hello Scouter,\n\nThanks for scouting for our team. Would you like some cat images to make your experience more pleasant?\n");
    if(fun){*/
        displayImage();
});

