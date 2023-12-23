export default {
    roots: ['.'],
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    },
    testRegex: '((\\.|/)(spec))\\.ts$',
    moduleFileExtensions: ['js','ts']
}
