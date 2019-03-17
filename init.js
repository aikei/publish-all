// creates an empty .publish-conf.js file
const fs = require("fs");
fs.writeFileSync(".publish-conf.js", `module.exports = ${JSON.stringify({
    folders: []
}, null, 4)}`);