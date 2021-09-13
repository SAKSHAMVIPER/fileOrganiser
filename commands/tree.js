let fs = require("fs");
let path = require("path");
function treeFunction(srcpath){
     if(srcpath == undefined){
         srcpath = process.cwd();
     }

     let content = fs.readdirSync(srcpath);
    let basename = path.basename(srcpath);;
     let completepath = "|-----"+basename;


     for(let i =0;i<content.length;i++){
             completepath = completepath + "\n\t" +"|----" + content[i];
     }
     console.log(completepath);
}

module.exports ={
    treefn : treeFunction
}