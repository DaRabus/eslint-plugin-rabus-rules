import {ESLintUtils, TSESLint} from '@typescript-eslint/experimental-utils';

export const RULE_NAME = 'no-div-in-typography';

export const rule: TSESLint.RuleModule<'missingComponentOrVariantProp' | 'disallowDiv', any[]> = ESLintUtils.RuleCreator(() => __filename)({  meta: {
    type: 'problem',
    docs: {
      description:
        `Enforces that the Typography component must have both "component" and "variant" props, and "component" should not be "div".`,
      recommended: 'error'
    },
    schema: [],
    messages: {
      missingComponentOrVariantProp:
        `Both "component" and "variant" props are mandatory for the Typography component.`,
      disallowDiv:
        `The "component" prop should not be "div" in the Typography component.`
    }
  },
  name: RULE_NAME,
  defaultOptions: [],
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (
          node.type === 'JSXOpeningElement' &&
          node.name.type === 'JSXIdentifier' &&
          node.name.name === 'Typography'
        ) {
          const componentProp = node.attributes.find(
            (attr) =>
              attr.type === 'JSXAttribute' && attr.name.name === 'component'
          );
          const variantProp = node.attributes.find(
            (attr) =>
              attr.type === 'JSXAttribute' && attr.name.name === 'variant'
          );

          if (!componentProp || !variantProp) {
            context.report({
              node,
              messageId: 'missingComponentOrVariantProp'
            });
          } else if (
            componentProp.type === 'JSXAttribute' &&
            componentProp.value &&
            componentProp.value.type === 'JSXExpressionContainer' &&
            componentProp.value.expression.type === 'Literal' &&
            componentProp.value.expression.value === 'div'
          ) {
            context.report({
              node,
              messageId: 'disallowDiv'
            });
          }
        }
      }
    };
  }
});
