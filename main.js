let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organiseObj = require("./commands/organise");


let inputArr = process.argv.slice(2);
let input = inputArr[0];
let path = inputArr[1];
if(input == "help"){
   helpObj.hl();

}else if(input == "tree"){
       treeObj.treefn(path);
}else if(input == "organiser"){
       organiseObj.organisefn(path);
}else{
    console.log("wrong input");
}