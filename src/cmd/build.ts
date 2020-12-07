import fs from "fs-extra";

//Récupération des arguments de la commande
var Args = process.argv.slice(2);

function init(){
    //Récupération du json omf
    var omf_json: any = JSON.parse(fs.readFileSync("./omf.json", 'utf8'));

    //Récupération des builds
    var build: string[] = recup_build(omf_json);

    //Si le build passer en argument est valide
    if(valide_build(build, Args[1])){
        //Récupération des informations sur les fichiers du build
        var files_build = recup_files_build(omf_json, build);

        //Build du contenu

        //Récupération des informations sur les fichiers
        
    }
}

function recup_build(json: any){
    //Récupération des build contenus dans omf.json
    var build: string[] = [];
    for(var i= 0; i < json.build.length; i++){
        build.push(json.build[i].name);
    }
    return build;
}

function valide_build(build: string[], arg: string){
    //Vérification que l'agument fournis est dans les build
    if(build.includes(arg)){
        return true;
    }else{
        console.log("Merci de renseigner un nom de build valide");
        return false;
    }
}

function recup_files_build(json: any, build: string[]){
    var index_build: number = build.indexOf(Args[1]);
    var files: string[] = [];
    for(var i= 0; i < json.build[index_build].files.length; i++){
        files.push(json.build[index_build].files[i]);
    }
    return files;
}

function recup_info_files(files: string[]){

}

export default init;