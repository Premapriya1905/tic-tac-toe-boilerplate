// const block=document.querySelectorAll(".box")
// console.log(block)

// var combinations=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];

// var x_turns=[];
// var o_turns=[];
// var click=0;
// var Wongame=0;

// const result=document.getElementById("result");
// const message=document.getElementById("message");
// const button=document.getElementById("button");

// block.forEach(box=>{
//     console.log(box);
//     box.onclick=handleClick;
// });

// function handleClick(e){
//     console.log("e",e)
//     var get_id=e.target.id;

//     var texttobeinserted=document.createElement("p");
//     block[get_id-1].append(texttobeinserted);

//     if(click%2==0){
//         x_turns.push(get_id-1);
//         texttobeinserted.innerHTML="X";
//         texttobeinserted.style.color='red';
//         result(combinations,x_turns,"X");
//     }else{
//         o_turns.push(get_id-1);
//         texttobeinserted.innerHTML="O";
//         texttobeinserted.style.color='red';
//         result(combinations,o_turns,"O");
//     }
//     click++;
//     if(click==9){
//         result.style.visibility="visible";
//         message.innerHTML="It's a tie!";
//     }

// }

// function end(combinations,turns,player){
//     var answer=[];
//     var count=0;
//     for(var i=0; i<combinations.length; i++){
//         if(Array.isArray(combinations[i])){
//             end(combinations,turns,player);
//         }else{
//             if(turns.includes(combinations[i])){
//                 answer.push(true);
//                 count++;
//             }else{
//                 answer.push(false);
//             }
//         }
//     }
//     if(answer.every((answer)=>answer==true) && count>2){
//         result.style.visibility="visible";
//         message.innerHTML=`${player} won the game!`;
//     }
// }

// button.onclick=()=>{
//     window.location.reload();
// }


// const block=document.querySelectorAll(".box")
// console.log(block)

// var combinations=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];

// var x_turns=[];
// var o_turns=[];
// var click=0;
// var Wongame=0;

// const result=document.getElementById("result");
// const message=document.getElementById("message");
// const button=document.getElementById("button");

// block.forEach(box=>{
//     console.log(box);
//     box.onclick=handleClick;
// });

// function handleClick(e){
//     console.log("e",e)
//     var get_id=e.target.id;

//     var texttobeinserted=document.createElement("p");
//     block[get_id-1].append(texttobeinserted);

//     if(click%2==0){
//         x_turns.push(get_id-1);
//         texttobeinserted.innerHTML="X";
//         texttobeinserted.style.color='red';
//         result(combinations,x_turns,"X");
//     }else if (click%2!=0){
//         o_turns.push(get_id-1);
//         texttobeinserted.innerHTML="O";
//         texttobeinserted.style.color='red';
//         result(combinations,o_turns,"O");
//     }
//     click++;
//     if(click==9){
//         result.style.visibility="visible";
//         message.innerHTML="It's a tie!";
//     }

// }

// function result(combinations,turns,player){
//     var answer=[];
//     var count=0;
//     for(var i=0; i<combinations.length; i++){
//         if(Array.isArray(combinations[i])){
//             result(combinations,turns,player);
//         }else{
//             if(turns.includes(combinations[i])){
//                 answer.push(true);
//                 count++;
//             }else{
//                 answer.push(false);
//             }
//         }
//     }
//     if(answer.every((answer)=>answer==true) && count>2){
//         result.style.visibility="visible";
//         message.innerHTML=`${player} won the game!`;
//     }
// }

// button.onclick=()=>{
//     window.location.reload();
// }

const block=document.querySelectorAll(".box")
console.log(block)

var combinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var x_turns=[];
var o_turns=[];
var click=0;
var Wongame=0;

const result=document.getElementById("result");
const message=document.getElementById("message");
const button=document.getElementById("button");

block.forEach(box=>{
    console.log(box);
    box.onclick=handleClick;
});

function handleClick(e){
    console.log("e",e)
    var get_id=e.target.id;

    var texttobeinserted=document.createElement("p");
    block[get_id-1].append(texttobeinserted);

    if(click%2==0){
        x_turns.push(get_id-1);
        texttobeinserted.innerHTML="X";
        texttobeinserted.style.color='red';
        result(combinations,x_turns,"X");
    }else if(click%2!=0){
        o_turns.push(get_id-1);
        texttobeinserted.innerHTML="O";
        texttobeinserted.style.color='red';
        result(combinations,o_turns,"O");
    }
    
    if(click==8){
        result.style.visibility="visible";
        message.innerHTML="It's a tie!";
    }
    click++
}

function result(combinations,turns,player){
    var answer=[];
    var count=0;
    for(var i=0; i<combinations.length; i++){
        if(Array.isArray(combinations[i])){
            result(combinations,turns,player);
        }else{
            if(turns.includes(combinations[i])){
                answer.push(true);
                count++;
            }else{
                answer.push(false);
            }
        }
    }
    if(answer.every((answer)=>answer==true) && count>2){
        result.style.visibility="visible";
        message.innerHTML=`${player} won the game!`;
    }
}

button.onclick=()=>{
    window.location.reload();
}
console.log("working")




