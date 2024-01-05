<h1 align="center"> eslint-plugin-dx-rules </h1>

<h3 align="center"> Simple custom rules for our own purposes </h3>


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-hooks`:

```
$ npm i @rabus/eslint-plugin-dx-rules --save-dev
```

## Usage

Add `"@rabus/dx-rules"` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@rabus/dx-rules"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@rabus/dx-rules/no-div-in-typography": "warn"
  }
}
```
