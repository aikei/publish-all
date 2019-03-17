const fs = require("fs");
const cp = require("child_process");
const assert = require("assert");

function publish(publish_conf) {
    assert(publish_conf.folders.length > 0, "Folders should be provided either as a cli --folders argument in csv format or inside .publish-conf.js file in cwd!");
    
    for (let folder of publish_conf.folders) {
        console.log("folder: %s", folder);
        const packageJsonString = fs.readFileSync(`${folder}/package.json`, {
            encoding: "utf8"
        });
        const packageJsonObj = JSON.parse(packageJsonString);
        const versionArray = packageJsonObj.version.split(".");
        console.log("old version: %s", packageJsonObj.version)
        versionArray[versionArray.length - 1] = Number(versionArray[versionArray.length - 1]) + 1;
        const newVersion = versionArray.join(".");
        console.log("new version: %s", newVersion);
        packageJsonObj.version = newVersion;
        fs.writeFileSync(`./${folder}/package.json`, JSON.stringify(packageJsonObj, null, 4));
        cp.execSync("npm publish", {
            cwd: folder
        });
    }
}

module.exports = publish;
