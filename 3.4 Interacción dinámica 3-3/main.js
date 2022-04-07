let taReview = document.getElementById('taReview');

let radiousLT = document.getElementById('radiousLT');
let radiousRT = document.getElementById('radiousRT');
let radiousLB = document.getElementById('radiousLB');
let radiousRB = document.getElementById('radiousRB');
let inputLT = document.getElementById('inputLT');
let inputRT = document.getElementById('inputRT');
let inputLB = document.getElementById('inputLB');
let inputRB = document.getElementById('inputRB');
let allRadious = document.getElementById('allRadious');
let widthBorder = document.getElementById('widthBorder');
let border1 = document.getElementById('border1');
let btnStyle = document.getElementsByClassName('btn-style')

//Elementos de Style
let solid = document.getElementById('solid');
let dotted = document.getElementById('dotted');
let dashed = document.getElementById('dashed');
let double = document.getElementById('double');
let groove = document.getElementById('groove');
let ridge = document.getElementById('ridge');
let inset = document.getElementById('inset');
let outset = document.getElementById('outset');
let hidden = document.getElementById('hidden');
let none = document.getElementById('none');

let borderColor = document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');

radiousLT.oninput=function(){
    if(allRadious.checked){
        taReview.style.borderRadius=radiousLT.value+"px";
        radiousRT.value = radiousLT.value;
        radiousLB.value = radiousLT.value;
        radiousRB.value = radiousLT.value;
        inputLT.value=radiousLT.value;
        inputRT.value=radiousLT.value;
        inputLB.value=radiousLT.value;
        inputRB.value=radiousLT.value;
    }else{
        inputLT.value=radiousLT.value;
        taReview.style.borderTopLeftRadius=radiousLT.value+"px";
    }
};

allRadious.oninput=function(){
    if(!allRadious.checked){
        taReview.style.borderRadius ="0px 0px 0px";
        radiousRT.value = 0;
        radiousLB.value = 0;
        radiousRB.value = 0;
        inputRT.value=0;
        inputLB.value=0;
        inputRB.value=0;
    }
};

radiousRT.oninput=function(){
    inputRT.value=radiousRT.value;
    taReview.style.borderTopRightRadius=radiousRT.value+"px";
};
radiousLB.oninput=function(){
    inputLB.value=radiousLB.value;
    taReview.style.borderBottomLeftRadius=radiousLB.value+"px";
};
radiousRB.oninput=function(){
    inputRB.value=radiousRB.value;
    taReview.style.borderBottomRightRadius=radiousRB.value+"px";
};

widthBorder.oninput=function(){
    taReview.style.borderWidth=widthBorder.value+"px";
    widthBorder.title = widthBorder.value;
};
border1.onclick=function(){
    taReview.style.borderWidth="1px";
    widthBorder.value = 1;
}

solid.onclick=function(){
    desSelect();
    taReview.style.borderStyle='solid';
    solid.style.backgroundColor="#D0E4F5";
}
dotted.onclick=function(){
    desSelect();
    taReview.style.borderStyle='dotted';
    dotted.style.backgroundColor="#D0E4F5";
}
dashed.onclick=function(){
    desSelect();
    taReview.style.borderStyle='dashed';
    dashed.style.backgroundColor="#D0E4F5";
}
double.onclick=function(){
    desSelect();
    taReview.style.borderStyle='double';
    double.style.backgroundColor="#D0E4F5";
}
groove.onclick=function(){
    desSelect();
    taReview.style.borderStyle='groove';
    groove.style.backgroundColor="#D0E4F5";
}
ridge.onclick=function(){
    desSelect();
    taReview.style.borderStyle='ridge';
    ridge.style.backgroundColor="#D0E4F5";
}
inset.onclick=function(){
    desSelect();
    taReview.style.borderStyle='inset';
    inset.style.backgroundColor="#D0E4F5";
}
outset.onclick=function(){
    desSelect();
    taReview.style.borderStyle='outset';
    outset.style.backgroundColor="#D0E4F5";
}
hidden.onclick=function(){
    desSelect();
    taReview.style.borderStyle='hidden';
    hidden.style.backgroundColor="#D0E4F5";
}
none.onclick=function(){
    desSelect();
    taReview.style.borderStyle='none';
    none.style.backgroundColor="#D0E4F5";
}

borderColor.oninput=function(){
    taReview.style.borderColor = borderColor.value;
    for(let i=0;i<btnStyle.length;i++){
        btnStyle[i].style.borderColor = borderColor.value;
    }
}
alphaBorder.oninput=function(){
    var hex = borderColor.value;
    /* var rgba = "rgba("+parseInt(hex[1]+hex[2],16)+","+parseInt(hex[3]+hex[4],16)+","+parseInt(hex[5]+hex[6],16)+","+alphaBorder.value+")";
    taReview.style.borderColor = rgba; */
    taReview.style.borderColor = `rgba(${parseInt(hex[1]+hex[2],16)},${parseInt(hex[3]+hex[4],16)},${parseInt(hex[5]+hex[6],16)},${alphaBorder.value})`;
}

function desSelect(){
    for(let i=0;i<btnStyle.length;i++){
        btnStyle[i].style.backgroundColor = "#EEEEEE";
    }
}
console.log("holis");