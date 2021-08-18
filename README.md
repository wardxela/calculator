# JavaScript calculator

This is a simple function that accepts an expression and calculates it!
`const calculator = (expression: string) => number`

## Examples

```javascript
// Simple
calculator("2 + 3"); // 5
calculator("331 - 59"); // 272
calculator("2 * 2"); // 4
calculator("126 / 3"); // 42

// Complex
calculator("3.14 * 99.5 * 99.5"); // 31086.785
calculator("-1024 / 2 * 32 * 54.2 + 129"); // -887883.8
calculator("42 * 42 - 84 * 42 * 42 - 84"); // -146496
```

Check out more in `build/tests/test.js` or try it yourself.

## Issue

It doesn't work with brackets!
In the future I will add support for them.
