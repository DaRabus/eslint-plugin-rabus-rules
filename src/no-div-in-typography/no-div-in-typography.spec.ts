import { TSESLint } from '@typescript-eslint/experimental-utils';
import { rule, RULE_NAME } from './no-div-in-typography';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: { ecmaVersion: 2020, ecmaFeatures: { jsx: true } }
});

ruleTester.run(RULE_NAME, rule, {
  valid: [
    `<Typography component={'span'} variant="body1">Text</Typography>`,
    `<Typography component={'p'} variant="body2">Text</Typography>`
  ],
  invalid: [
    {
      code: `<Typography variant="body1">Text</Typography>`,
      errors: [{ messageId: 'missingComponentOrVariantProp' }]
    },
    {
      code: `<Typography component={'div'} variant="body1">Text</Typography>`,
      errors: [{ messageId: 'disallowDiv' }]
    },
    {
      code: `<Typography component={'span'}>Text</Typography>`,
      errors: [{ messageId: 'missingComponentOrVariantProp' }]
    }
  ]
});
