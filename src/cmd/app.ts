import fs from "fs-extra";
import build from "./build";

//Récupération des arguments
var Args = process.argv.slice(2);

//Fonction de vérification omf
function verif_omf(){
    if(fs.pathExistsSync('omf.json')){
        //On vérifie les informations de version, etc
        return true;
    }else{
        return false;
    }
}

//On regarde si le répertoire d'execution est un espace de travail omf
if(verif_omf()){
    //Si c'est le cas

    //Redirection vers le script correspondant
    switch (Args[0]) {
        //Création du build (suivis par le nom de build à effectuer)
        case 'build':
            build();
            break;
        //Affichage des commandes disponibles
        default:
            require('../build/cmd/help.js');
    }

}else{
    //Si ce n'est pas le cas
    switch (Args[0]) {
        //Création d'un nouvelle espace de travail omf
        case 'new':
            require('../build/cmd/new.js');
            break;
        //Affichage d'une erreur espace de travail omf non reconnus
        case '':
            var arg_help = "";
            if(Args[0]){
                var arg_help = " "+Args[0];
            }
            console.log("Le répertoire courant n'est pas un espace de travail omf, la commande \"omf"+arg_help+"\" ne peut pas être utilisée ici");
            break;
        //Affichage des commandes disponibles
        default:
            require('../build/cmd/help.js');
            break;
    }
}