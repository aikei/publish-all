#!/usr/bin/env node

const argv = require("yargs").argv;
const path = require("path");

if (argv.init) {
    require("./init");
    return;
}

let pathToConf = argv.conf || "./.publish-conf.js";
pathToConf = path.resolve(process.cwd(), pathToConf);

const publish_all = require("./publish-all");

let publish_conf;
try {
    console.log("loading config file from %s", pathToConf);
    publish_conf = require(pathToConf);
} catch(err) {
    console.log("no '.publish-conf.js' file found in current folder, or the file is invalid")
    publish_conf = {
        folders: []
    };
}

console.log("publish_conf: %j", publish_conf);

if (argv.folders) {
    publish_conf.folders = publish_conf.folders.concat(argv.folders.split(","));
}

publish_all(publish_conf);
