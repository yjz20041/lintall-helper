const fs = require('fs-extra');

const existPath = path => new Promise((resolve) => {
    fs.pathExists(path, ((err) => {
        if (err) {
            resolve(false);
        } else {
            resolve(true);
        }
    }));
});

module.exports = {
    existPath
}