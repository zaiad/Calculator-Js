var screen = document.getElementById("input");
var queue = [];
var input = 0;


// les function

function affichage(num) {
    screen.value += num;
    // screen.value = screen.value + num;
    input += num;
    console.log( `input dans l'affichage : ${input}`);
}
function clr() {
    screen.value="";
    input = 0;
    console.log (`input effacer: ${input}`)
}
function del(){
    screen.value=screen.value.slice(0,-1);
}

function traiter (arg){
    if (input !==0) {
        screen.value += arg;
        input = parseFloat(input);
        queue.push(input);
        queue.push(arg);
        input = 0;
        console.log(`queue quand faire traiter :  ${input}`)
        console.log(`input quand faire traiter :  ${input}`)
    }
}
function Result(queue){
    if (input !== 0) {
        input = parseFloat(input);
        queue.push(input);
        console.log(`queue quand faire traiter :  ${input}`)
        console.log(`input quand faire traiter :  ${input}`)  
    }
   for (var i = 2; i < queue.length; i++) {
    console.log(`index :: ${queue[i]}`);

    switch (queue[i-1]){
        case "+" :
        queue[0]+=queue[i];
        // screen.value=queue[0];
        // console.log(`rusult :  ${queue[0]}`)
        break;

        case "-" :
        queue[0]-=queue[i];
        // screen.value=queue[0];
        // console.log(`rusult :  ${queue[0]}`)
        break;

        case "*" :
        queue[0]*=queue[i];
        // screen.value=queue[0];
        // console.log(`rusult :  ${queue[0]}`)
        break;

        case "/" :
        if (queue[i] ===0) {
            diviserzero = false;
        }
        else{
            queue[0] /= queue[0];
        }
        break;
        
        // screen.value=queue[0];
        // console.log(`rusult :  ${queue[0]}`)
        
    }
    }
    // if () {
        
    // }

    screen.value = queue[0];
    console.log (`result is : ${queue[0]}`);
}