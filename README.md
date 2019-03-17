# publish-all

A simple cli to publish npm packages in batch. It automatically increments last version number and then publishes each package to npm.

## Installation

```bash
npm i -g publish-all
```

## Usage

### without config file

```bash
publish-all --folders package1,package2,folder/package3,folder2/package4
```

### with config file

With create a new config file:

```bash
publish-all --init
```

This will create a `.publish.conf.js` file in the current folder:

```javascript
module.exports = {
    folders: []
}
```

Add paths to packages to this file, then publish them all with:

```bash
publish-all
```

In both cases folders are taken relative to the folder where you run this utility, absolute paths are currently not supported, but will be supported in future.
