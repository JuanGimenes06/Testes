let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000 )
// o "2000" é em milisegundos
function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}