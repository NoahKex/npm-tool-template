# @snaphooks/npm-tool-template

## Installation
a template for creating a npm package or tool library

## Why use
Sometimes we want to create a package and publish it to npm, but before we can start writing the core code, we need to build a simple development environment, which includes code rules, code packaging, etc. If you don't want to do the work yourself, then you can enjoy this simple template.😊

**It helps you:**

---

* Use `Eslint` to standardize your code ✅
* Support writing code with `Typescript` and run with `ts-node` ✅
* Use `Rollup` to package your code and automatically move the necessary files to the `dist` directory ✅
* Enter a simple command to automatically modify your package version and publish it to npm ✅

## Usage

**Clone this template**
```bash
git clone git@github.com:NoahKex/npm-tool-template.git

cd npm-tool-template
```

**Install dependencies**
```bash
npm install
```

**Check code rules**
```bash
npm run lint
```

**Package code** (this will automatically copy `package.json` and `README.md` file to the `dist` directory)

>ordinary use
```bash
npm run build
```

>dev mode
```bash
npm run build:dev
```

**Publish to npm** (before this step,remember to register your npm account and log in)

>version self-increase
for example: 1.2.1 -> 1.2.2
```bash
npm run publish
```

>version modified by user
```bash
npm run publish -- -v x.y.z
```