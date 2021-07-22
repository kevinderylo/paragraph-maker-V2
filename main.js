var sentance_array=[];
var line_array=[];
var display_array=[];
var display_array2=[];

function submit1(){

    for(var array=1; array<=4; array++){
        var n=document.getElementById("sentance_"+ array).value;
        sentance_array.push(n);
    }

    console.log(sentance_array);
    var len=sentance_array.length;
    console.log(len);

    for(var i=0; i<len; i++){
        display_array.push(sentance_array)
    }
    console.log(display_array);
   
    var remove=sentance_array.join(" ");
    document.getElementById("combine_sentances").innerHTML=remove;
};




function submit2(){

    for(var array=5; array<=8; array++){
        var n=document.getElementById("line_"+ array).value;
        line_array.push(n);
    }

    console.log(line_array);
    var len=line_array.length;
    console.log(len);

    for(var i=0; i<len; i++){
        display_array2.push(line_array)
    }
    console.log(display_array2);
   
    var remove2=line_array.join(" ");
    document.getElementById("combine_sentances2").innerHTML=remove2;
};




    console.log(display_array);