let fs = require("fs");
const { type } = require("os");
let path = require("path");

let types={
    media: ["mp4","mkv","mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg","odf", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"],
    pictures: ["png","jpg","jpeg"]
}

function organiseFunction(srcPath){


let entities=fs.readdirSync(srcPath);
let organiseFolder = path.join(srcPath,"organisedFiles");

if(!fs.existsSync(organiseFolder)){
    fs.mkdirSync(organiseFolder);
}

for(let i=0;i<entities.length;i++){
 let file = entities[i];
 if(fs.lstatSync(file).isFile()){
let type = checkType(file);
let typeFolder=path.join(organiseFolder,type);

if(!fs.existsSync(typeFolder)){
    fs.mkdirSync(typeFolder);
}
let src= path.join(srcPath.entitoies[i]);
let dest = path.join(typeFolder,entities[i]);
fs.copyFileSync(src,dest);
 }

}
}

function checkType(file){
    for(let type in types){
        for(let ext of types){
            if(path.extname(file).split(".")[1] == ext){
                return type;
            }
        }
    }
    return "others";
}

// C:\Users\SAKSHAM\Downloads

module.exports={
    organiseFn : organiseFunction
    }