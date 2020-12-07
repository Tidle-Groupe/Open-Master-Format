"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var Args = process.argv.slice(2);
function init() {
    var omf_json = JSON.parse(fs_extra_1.default.readFileSync("./omf.json", 'utf8'));
    var build = recup_build(omf_json);
    if (valide_build(build, Args[1])) {
        var files_build = recup_files_build(omf_json, build);
    }
}
function recup_build(json) {
    var build = [];
    for (var i = 0; i < json.build.length; i++) {
        build.push(json.build[i].name);
    }
    return build;
}
function valide_build(build, arg) {
    if (build.includes(arg)) {
        return true;
    }
    else {
        console.log("Merci de renseigner un nom de build valide");
        return false;
    }
}
function recup_files_build(json, build) {
    var index_build = build.indexOf(Args[1]);
    var files = [];
    for (var i = 0; i < json.build[index_build].files.length; i++) {
        files.push(json.build[index_build].files[i]);
    }
    return files;
}
function recup_info_files(files) {
}
exports.default = init;
