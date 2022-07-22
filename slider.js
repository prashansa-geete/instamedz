var index=0;
var i=0;
var slider=document.getElementsByclass("slider");
var line=document.getElementsByclass("line");

auto();

function show(n){
    for(i=0;i<slider.length;i++){
        slider[i].style.display="none";
    }
    for(i=0;i<line.length;i++){
        line[i].class=line[i].class.replace("active");
    }
    slider[n-1].style.display=("block");
    line[n-1].class +="active";
}

function auto(){
    index++;
    if(index > slider.lengtgh){
        index=1;
    }
    show(index);
    setTimeout(auto, 5000);
}
function plusSlide(n){
    index+=n;
    if(index>slider.length){
        index=1;
    }
    if(index<1){
        index=slider.length;
    }
    show(index);
}

function currentSlide(n){
    index=n;
    show(index);
}