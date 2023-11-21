 // An array holding at least 5 pictures 
 // An array holding at least 5 proverbs

function randomIMG (img) {
    // Array storing images
    var randomImage = new Array();  
    randomImage[0] = "";
    randomImage[1] = "";
    randomImage[2] = "";
    randomImage[3] = "";
    randomImage[4] = "";
    var number = Math.floor(Math.random()*randomImage.length);  
    return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
}
function randomProverb (proverb) {
    // Array storing proverbs
    var randomProverb = new Array();  
    randomProverb[0] = "";
    randomProverb[1] = "";
    randomProverb[2] = "";
    randomProverb[3] = "";
    randomProverb[4] = "";
    var number = Math.floor(Math.random()*randomProverb.length);  
    return document.getElementById("result").innerHTML = '<img src="'+randomProverb[number]+'" />'; 
}
