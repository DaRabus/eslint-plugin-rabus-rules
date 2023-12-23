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

export const rules = {
  [noDivInTypographyName]: noDivInTypography
};
