[![Plentiful Logo](assets/5x/Asset 8@5x.png)](http://plentiful.nauleau.io/)

A bountyful amount of algorithms ripe for the picking, choose your poison. runs with [node](http://nodejs.org).

[![npm version](https://badge.fury.io/js/plentiful.svg)](https://badge.fury.io/js/plentiful)
[![npm downloads](https://img.shields.io/badge/downloads-live-brightgreen.svg)](https://www.npmjs.com/package/plentiful)
[![CircleCI](https://circleci.com/gh/ajnauleau/plentiful.svg?style=shield)](https://circleci.com/gh/ajnauleau/plentiful)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ajnauleau/plentiful/issues)

```js
import { Plentiful } from "plentiful";

Plentiful.sorts.timSort();

Plentiful();
```

This repository is a collection of many if not all common and popular algorithms implemented and rewritten in JavaScript. The list in constantly expanding-- feel free to contribute!

An algorithm is an unambiguous specification of how to solve a class of problems. It is a set of rules and steps that precisely define a set or sequence of operations.

Each algorithm has its own separate README containing relevant information and explanations and links for further reading.

## Installation

This is a [Node.js](https://nodejs.org/en/) package available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install -g plentiful
```

Follow [our installing guide](http://plentiful.nauleau.io/docs/install.html)
for more information.

## Features

- List of most to all algorithms
- Everything implemented in Javascript
- Focus on high performance

## Docs & Community

- [Website and Documentation](http://plentiful.nauleau.io) - [[website repo](https://github.com/ajnauleau/plentiful/plentiful.nauleau.io)]
- [#plentiful](https://webchat.freenode.net/?channels=plentiful) on freenode IRC
- Visit the [Wiki](https://github.com/ajnauleau/plentiful/wiki)
- [Slack](https://project-plentiful.slack.com) for discussion

### Security Issues

If you discover a security vulnerability in Plentiful, please see [Security Policies and Procedures](Security.md).

## Quick Start

The quickest way to get started with Plentiful is to install the package to your project and then call and use the algorithm you are looking for your needs:

```js
import { Plentiful } from "plentiful";

Plentiful.sorts.timSort();

Plentiful();
```


Otherwise, for research or testing purposes you can install Plentiful globally and then use the implementType [`implementType`](https://github.com/ajnauleau/plentiful/implements/implementType) which will apply the best algorithm for the given task:

Install the Plentiful repo:

```bash
$ npm install -g plentiful
```

Call any algorithm you can think of:

```bash
$ plentiful timsort arrayToBeSorted
```

Utilize implementType on any data set and find the best algorithm to use:

```bash
$ plentiful implementType $data
$ timsort(data)? [Y/n]
$ ...
```

Install dependencies:

```bash
$ npm install
```

## Philosophy

Just find the right algorithm and have fun, don't waste your time porting to a C++ library when you can call any common and popular algorithm with Plentiful!

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

[MIT](LICENSE)

TODOs

- Feature Description
- Example => Porting a new algorithm to javascript source Array.prototype.sort = Plentiful.sort.sorted().
