# datatest

## Primary Issue

This is an attempt to reproduce a bug seen moving from 3.27 to 3.28 of ember-data (while on 3.28 of ember-source)
where computed properties dependent upon async relationships no longer recompute once
those relationships are fulfilled.

Run the app, open it, view the console to see the logging in the computed property
on `Post` that depends upon the `comments` async relationship. It logs once.

If you uncomment `comments.isFulfilled` as a dependent key, it will recompute and
you will see the authors load.
If you change the template to use `this.model.authorsTracked` it will log twice,
once not fulfilled and once fulfilled.

## Secondary Issue

When authors do load, for the CP version only, the value of the attributes are not working in the template


## 3.27 Ember Data

Branch `ember-data-327` is the same application with Ember Data 3.27, both of the
above issues do not exist on this branch

---


This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd datatest`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
