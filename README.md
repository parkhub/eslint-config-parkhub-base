#eslint-config-parkhub-base

Parkhub's very own canonical Javascript style guide. Well, some of it :D. Based off [airbnb's style guide][airbnb-base-style-guide] with some minor modifications.
This are the base rules(non-React)

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Dependencies][dependencyci-badge]][dependencyci]
[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]
[![Roadmap][roadmap-badge]][roadmap]
[![Semantic Release][semantic-release-badge]][sem-release-badge]
[![Commitizen][commitizen-friendly-badge]][comm-friendly-badge]


[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Differences
### [newline-per-chained-call][nlpcc]
**Reasoning**: a depth of 4 is too deep. Much cleaner at two
**Parkhub's configs**:
```json
"newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }]
```

These will **FAIL**(from ESlint docs):

```javascript

_.chain({}).map(foo).filter(bar).value();

// Or
_.chain({}).map(foo).filter(bar);

// Or
_
  .chain({}).map(foo)
  .filter(bar);

// Or
obj.method().method2().method3();
```

These will **PASS**(from ESlint docs):
```javascript
_
  .chain({})
  .map(foo)
  .filter(bar)
  .value();

// Or
_
  .chain({})
  .map(foo)
  .filter(bar);

// Or
_.chain({})
  .map(foo)
  .filter(bar);

// Or
obj
  .prop
  .method().prop;

// Or
obj
  .prop.method()
  .method2()
  .method3().prop;
```

###[comma-dangle][cd]
**Reasoning**: Although the benefits of comma-dangles shine in diffs. They don't in looks.
**Parkhub's configs**:
```json
"comma-dangle": ["error", "never"]
```
These will **FAIL**(from ESlint docs)
```javascript
const foo = {
    bar: "baz",
    qux: "quux",
};

const arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});
```

These will **PASS**(from ESlint docs):
```javascript
const foo = {
    bar: "baz",
    qux: "quux"
};

const arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

###[import/no-commonjs][inc]
**Reasoning**:  This is Airbnb's. We only enforce the rule.
**Parkhub's configs**:
```json
    "import/no-commonjs": "error"
```

## Additional Rules
Our chosen test runner of choice is [Jest][jest] due to its compatibility with [React][react]. Therefore, we added some additional rules that apply to tests using [eslint-plugin-jest][epj]

**Parkhub's configs**:
```json
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error"
  },
  "env": {
    "jest/globals": true
  }
```

You can read about each rule in the plugin's docs.

##Install
You must install peerDependencies.

To list them:
```bash
npm info @parkhub/eslint-config-parkhub-base peerDependencies
```

Then install them by running:
```bash
npm install -D <dependency:version>
```

Or, in your OSX/Linux:
```bash
(
  export PKG=@parkhub/eslint-config-parkhub-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install -D "$PKG@latest"
)
```

## Usage
In your ```.eslintrc``` or ```.eslintrc.js``` add:
```json
"extends": "parkhub-base"
```

## Want changes?
These rules were agreed upon once upon a time and can be changed with valid reasoning. They will be updated as newer versions of Javascript features are released. If you want to request a change, create a PR and make the change and include your reasoning.

## Tips
USE [Prettier][prettier]! It will fix your code for you. Trust me. Check out this repo to learn how to set it up.


## LICENSE

MIT

[airbnb-base-style-guide]: https://github.com/airbnb/javascript
[prettier]: https://github.com/prettier/prettier-eslint-cli
[nlpcc]: https://eslint.org/docs/rules/newline-per-chained-call
[inc]: https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
[cd]: https://eslint.org/docs/rules/comma-dangle
[epj]: https://www.npmjs.com/package/eslint-plugin-jest
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[sem-release-badge]: https://github.com/semantic-release/semantic-release
[build-badge]:  https://g.codefresh.io/api/badges/build?repoOwner=parkhub&repoName=eslint-config-parkhub-base&branch=master&pipelineName=eslint-config-parkhub-base&accountName=loganbfisher&type=cf-1
[build]:  https://g.codefresh.io/repositories/parkhub/eslint-config-parkhub-base/builds?filter=trigger:build;branch:master;service:59821c960ae1710001fef83c~eslint-config-parkhub-base
[coverage-badge]: https://img.shields.io/codecov/c/github/parkhub/eslint-config-parkhub-base.svg?style=flat-square
[coverage]: https://codecov.io/gh/parkhub/eslint-config-parkhub-base
[dependencyci-badge]: https://dependencyci.com/github/parkhub/eslint-config-parkhub-base/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/parkhub/eslint-config-parkhub-base
[version-badge]: https://img.shields.io/npm/v/eslint-config-parkhub-base.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-config-parkhub-base
[license-badge]: https://img.shields.io/npm/l/eslint-config-parkhub-base.svg?style=flat-square
[license]: https://github.com/parkhub/eslint-config-parkhub-base/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/parkhub/eslint-config-parkhub-base/blob/master/ROADMAP.md
[github-watch-badge]: https://img.shields.io/github/watchers/parkhub/eslint-config-parkhub-base.svg?style=social
[github-watch]: https://github.com/parkhub/eslint-config-parkhub-base/watchers
[github-star-badge]: https://img.shields.io/github/stars/parkhub/eslint-config-parkhub-base.svg?style=social
[github-star]: https://github.com/parkhub/eslint-config-parkhub-base/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20prettier-eslint-cli!%20https://github.com/parkhub/eslint-config-parkhub-base%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/parkhub/eslint-config-parkhub-base.svg?style=social
[semantic-release]: https://github.com/semantic-release/semantic-release
[commitizen-friendly-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[comm-friendly-badge]: http://commitizen.github.io/cz-cli/



