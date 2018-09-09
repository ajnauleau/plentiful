# README guidelines

Every algorithm in each section type should have a README file named
`README.md`. The purpose of the README is to:

- Explain the purpose of the module and how to use it.
- Act as a landing page (both on GitHub and npmjs.com) for the module to help
  people find it via search.
- Encourage community contributions and participation.

Use the [README template](https://github.com/ajnauleau/plentiful/wiki/README-template)
to quickly create a new README file.

## Top-level items

**Badges** (optional): At the very top (with no subheading), include any
applicable badges, such as npm version/downloads, build status, test coverage,
and so on. Badges should resolve properly (not display a broken image).

Possible badges include:
- npm version: `[![NPM Version][npm-image]][npm-url]`
- npm downloads: `[![NPM Downloads][downloads-image]][downloads-url]`
- Build status: `[![Build Status][travis-image]][travis-url]`
- Test coverage: `[![Test Coverage][coveralls-image]][coveralls-url]`
- Tips: `[![Gratipay][gratipay-image]][gratipay-url]`

**Summary**: Following badges, provide a one- or two-sentence description of
what the module does. This should be the same as the npmjs.org blurb (which
comes from the description property of `package.json`). Since npm doesn't
handle markdown for the blurb, avoid using markdown in the summary sentence.

**TOC** (Optional): For longer READMEs, provide a table of contents that has
a relative link to each section. A tool such as
[doctoc](https://www.npmjs.com/package/doctoc) makes it very easy to generate
a TOC.

## Overview

Optionally, include a section of one or two paragraphs with more high-level
information on what the algorithm does, what problems it solves, why one would
use it and how.  Don't just repeat what's in the summary.

## Basic use

- Provide a general description of how to use the algorithm with code sample(s).
  Include any important caveats or restrictions.
- Explain the most common use cases.
- Optional: a simple "hello world" type example (where applicable). This
  example is in addition to the more comprehensive [example section](#examples)
  later.

## Examples

Every README should have at least one example; ideally more.  For code samples,
be sure to use the `js` code block, for proper display in the website, e.g.:

```js
const merge  = require('merge')
...
```

## Tests

What tests are included.

How to run them.

The convention for running tests is `npm test`. All our projects should follow
this convention.

## Contributors

Names of module "owners" (lead developers) and other developers who have
contributed.

## License

Link to the license, with a short description of what it is, e.g. "MIT" or
whatever. Ideally, avoid putting the license text directly in the README; link
to it instead.
