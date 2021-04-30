
const fs = require('fs-extra');
// const path = require('path');
const lintFiles = require('../util/lint-files');
// const util = require('../util/util');


// 将所有lint文件拷贝到工程根目录
const install = async () => {
    const cwd = process.cwd();
    const projectPath = cwd.split('/node_modules')[0];
    for ( let file of lintFiles) {
        const sourceFilePath = `${cwd}/${file}`;
        const targetFilePath = `${projectPath}/${file}`;
        const fileExist = await fs.pathExists(sourceFilePath);
        if (fileExist) {
            try {
                await fs.copyFile(sourceFilePath, targetFilePath);
            } catch(e) {
                console.log(e);
            }
        }
    }
}

module.exports = install;