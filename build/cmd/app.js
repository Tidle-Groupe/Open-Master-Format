"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var Args = process.argv.slice(2);
function verif_omf() {
    if (fs_extra_1.default.pathExistsSync('omf.json')) {
        return true;
    }
    else {
        return false;
    }
}
if (verif_omf()) {
    switch (Args[0]) {
        case 'build':
            require('../build/cmd/build.js');
            break;
        default:
            require('../build/cmd/help.js');
    }
}
else {
    switch (Args[0]) {
        case 'new':
            require('../build/cmd/new.js');
            break;
        case '':
            var arg_help = "";
            if (Args[0]) {
                var arg_help = " " + Args[0];
            }
            console.log("Le répertoire courant n'est pas un espace de travail omf, la commande \"omf" + arg_help + "\" ne peut pas être utilisée ici");
            break;
        default:
            require('../build/cmd/help.js');
            break;
    }
}
