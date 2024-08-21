/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
module.exports = {
  description: 'envsa cspell config',
  version: '0.2',
  language: 'en',
  dictionaryDefinitions: [
    {
      name: 'envsa',
      path: './envsa-dictionary.txt',
      addWords: false,
    },
  ],
  dictionaries: [
    'typescript',
    'softwareTerms',
    'node',
    'en_AU',
    'npm',
    'misc',
    'filetypes',
    'envsa',
  ],
};
