let result=document.getElementById("input");
let calculate=(number)=>{
    result.value=result.value+number;
    // result.value+=number; same thing
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(error){
        alert("Enter the valid result");
    }
}

function clear(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}