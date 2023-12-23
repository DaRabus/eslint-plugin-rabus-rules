import {
  rule as noDivInTypography,
  RULE_NAME as noDivInTypographyName
} from './no-div-in-typography/no-div-in-typography';
/**
 * Import your custom workspace rules at the top of this file.
 *
 * For example:
 *
 * import { RULE_NAME as myCustomRuleName, rule as myCustomRule } from './rules/my-custom-rule';
 *
 */

module.exports = {
  /**
   * Apply the imported custom rules here.
   *
   * For example (using the example import above):
   *
   * rules: {
   *  [myCustomRuleName]: myCustomRule
   * }
   */
  rules: {
    [noDivInTypographyName]: noDivInTypography
  }
};
