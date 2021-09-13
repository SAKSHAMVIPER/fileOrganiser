let fs = require("fs");
let path = require("path");


let types={
    media: ["mp4","mkv","mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg","odf", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"],
    pictures: ["png","jpg","jpeg"]
}

function organisefunction(srcPath){
    if(srcPath == undefined){
        srcPath = process.cwd();
    }

    let firstPath = path.join(srcPath,"organizedFiles");
   if(fs.existsSync(firstPath) == false){
       fs.mkdirSync(firstPath);
   }

   let contents = fs.readdirSync(srcPath);
   for(let i =0;i<contents.length;i++){

   let fullPath = path.join(srcPath,contents[i]);
    if(fs.lstatSync(fullPath).isFile() == true){
          let foldername = checkextensionsTellfolder(contents[i]);
        
        copyfiletodest(foldername,fullPath,srcPath);

    }

   }

}

function copyfiletodest(foldername,fullPath,srcPath){
let destfolder = path.join(srcPath,"organizedFiles",foldername);
if(fs.existsSync(destfolder) == false){
    fs.mkdirSync(destfolder);
}

let originalfilename = path.basename(fullPath);
let destfile = path.join(destfolder,originalfilename);
fs.copyFileSync(fullPath,destfile);
}

function checkextensionsTellfolder(filename){
   let extName = path.extname(filename);
   extName = extName.slice(1);
   for(let key in types){
    for(let i=0;i<types[key].length;i++)
    {if(types[key][i] == extName){
     return key;
    }
   }
}
return "others";
}

module.exports={
    organisefn : organisefunction
}


//input = node main.js organiser "C:\Users\SAKSHAM\Downloads"