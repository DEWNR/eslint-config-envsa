const fs = require('fs');
const lint = require('eslint');

const configs = [
  {
    name: 'prettier.config.js',
    content: "module.exports = require('@envsa/eslint-config/prettier.config');"
  },
  {
    name: 'eslint.config.js',
    content: "module.exports = {extends: '@envsa'}"
  },
  {
    name: 'stylelint.config.js',
    content:
      "module.exports = {extends: '@envsa/eslint-config/stylelint.config.js',ignoreFiles: ['./vendor/**/*']};"
  }
];

const createConfigFiles = () => {
  configs.forEach((config) => {
    fs.writeFile(`${config.name}`, config.content, (err) => {
      if (err) throw err;
      console.log(`📝 Created ./${config.name}`);
    });
  });
};

createConfigFiles();
