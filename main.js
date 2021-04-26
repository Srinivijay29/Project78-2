var images=["https://webstockreview.net/images/father-clipart-10.jpg", "https://cdn5.vectorstock.com/i/1000x1000/45/09/cute-cartoon-of-a-young-mother-vector-4414509.jpg","https://image.shutterstock.com/image-vector/little-boy-son-character-260nw-1101689993.jpg"]
var names=["T.G Vijayaraghavan","R.Geetha","V.Sriniranajan"]
function nextslide(){
    var i=0
    
    function nextslide(){
        document.getElementById("Family name").innerHTML=names[i];
        document.getElementById("my Family").src=images[i]
        i++;
    }
}