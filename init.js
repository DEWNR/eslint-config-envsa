const fs = require('fs');
const path = require('path');

const configs = [
  {
    name: '.eslintrc.js',
    content: "module.exports = {extends: '@envsa'}",
  },
  {
    name: '.prettierrc.js',
    content: "module.exports = require('@envsa/eslint-config/.prettierrc.js')",
  },
  {
    name: '.stylelintrc.js',
    content: "module.exports = {extends: '@envsa/eslint-config/.stylelintrc.js'};",
  },
];

const createConfigFiles = () => {
  configs.forEach((config) => {
    const filePath = path.join(process.env.INIT_CWD, `${config.name}`);
    if (!fs.existsSync(filePath)) {
      fs.writeFile(filePath, config.content, (err) => {
        if (err) throw err;
        console.log(`📝 Created ./${config.name}`);
      });
    }
  });
};

createConfigFiles();
