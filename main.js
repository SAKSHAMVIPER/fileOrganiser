let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organiseObj = require("./commands/organise");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command){
    case "help":
        helpObj.helpfn();
        break;
   case "tree":
       treeObj.treeFn(path);
       break;

    case "organise": 
    organiseObj.organiseFn(path);
    break;
    default : 
    console.log("invalid input");
    break;   
}