# Disallow Magic Numbers (@typescript-eslint/no-magic-numbers)

'Magic numbers' are numbers that occur multiple times in code without an explicit meaning.
They should preferably be replaced by named constants.

## Rule Details

The `@typescript-eslint/no-magic-numbers` rule extends the `no-magic-numbers` rule from ESLint core, and adds support for handling Typescript specific code that would otherwise trigger the rule.

See the [ESLint documentation](https://eslint.org/docs/rules/no-magic-numbers) for more details on the `no-magic-numbers` rule.

## Rule Changes

```cjson
{
    // note you must disable the base rule as it can report incorrect errors
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": ["error", { "ignoreNumericLiteralTypes": true }]
}
```

In addition to the options supported by the `no-magic-numbers` rule in ESLint core, the rule adds the following options:

### ignoreNumericLiteralTypes

A boolean to specify if numbers used in Typescript numeric literal types are considered okay. `false` by default.

Examples of **incorrect** code for the `{ "ignoreNumericLiteralTypes": false }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreNumericLiteralTypes": false }]*/

type SmallPrimes = 2 | 3 | 5 | 7 | 11;
```

Examples of **correct** code for the `{ "ignoreNumericLiteralTypes": true }` option:

```ts
/*eslint @typescript-eslint/no-magic-numbers: ["error", { "ignoreNumericLiteralTypes": true }]*/

type SmallPrimes = 2 | 3 | 5 | 7 | 11;
```

<sup>Taken with ❤️ [from ESLint core](https://github.com/eslint/eslint/blob/master/docs/rules/no-magic-numbers.md)</sup>
