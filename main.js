 // An array holding at least 5 pictures 
 // An array holding at least 5 proverbs
 var randomImage = ["https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg", "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
function randomIMG (img) {
    // Array storing images
    // randomImage[3] = "https://images.pexels.com/photos/34950/pexels-photo.jpg";
    // randomImage[4] = "https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg";

        var num = Math.floor(Math.random() * 7); // 0...6
        document.canvas.src = 'http://placehold.it/150x150/cf5&text='+ randomImg[num];
}
// function randomProverb (proverb) {
//     // Array storing proverbs
//     var randomProverb = new Array();  
//     randomProverb[0] = "Beauty is in the eye of the beholder";
//     randomProverb[1] = "Beggars can’t be choosers";
//     randomProverb[2] = "Don’t bite the hand that feeds you";
//     randomProverb[3] = "Don’t judge a book by its cover";
//     randomProverb[4] = "Don’t put all of your eggs in one basket";
//     var number = Math.floor(Math.random()*randomProverb.length);  
//     return document.getElementById("result").innerHTML = '<img src="'+randomProverb[number]+'" />'; 
// }
