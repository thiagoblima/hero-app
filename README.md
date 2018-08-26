# Hero Lazy Loaded Stateless Component Conception

Tiny proof of concept (POC) of a 100% stateless component using Angular 6 framework and Material.

## Getting Started

As an Angular 6 application, it has got lots of deep concepts of reusability and portability through different modules.

A functional(a.k.a. stateless) component is just a plain javascript function which takes props as an argument and returns an element.

TypeScript based project which allows you through Angular-CLI create new components, routes or other stuff, such as: directives, pipes and much more. 

### Prerequisites

What things you need to install the software and how to install them

```
Nodejs, NPM, TypeScript, GitBash or Linux command line interface, VSCode or your preferred Code Editor - Latest 
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

* Installing angular-cli:

```
npm install -g @angular/cli
```

* Installing its packages:

 ```
 npm install
 ```

 or it has got a proper *script* described on *package.json* which is called, start-up:

 ```
 npm run start-up
 ``` 

 Pretty sure it is going to auto remove *node_modules* and reinstall it from the scratch, getting the app started
 on port :4200 as default.


End with an example of getting some data out of the system or using it for a little demo

## Adding a new note

```
node app.js add --title="title" --body="body"
```

## Listing all notes

```
node app list
```

or

```
npm run list-notes
``` 
## Removing note

arguments: --title=<title-id>

accepts string or `\` to handle linux spacing interface.

linux bash example:

```
node app.js remove --title=to\ buy
Note was removed
```

string based example:

```
node app.js remove --title="to buy"
Note was removed
```

## Get note byId 

arguments: --title=<title-id>

```
node app.js read --title=My\ First\ Note
Note found
--
Title: My First Note
Body: This is my first note
``` 


## Running the tests

Karma for browser errors reports and protractor *e2e* for testing purposes.

### Break down into end to end tests

More to be explored soon.

### And coding style tests

More to be explored soon.

## Deployment

more to be explored soon.

## Built With

* [TypeScript](https://www.typescriptlang.org/) - TypeScript language
* [Nodejs](https://nodejs.org/en/) - Main environment platform
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Material](https://material.angular.io/) - angular material

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Gitlab](https://gitlab.com/) for versioning. For the versions available, see the [tags on this repository](https://gitlab.com/). 

## Authors

* **Thiago Lima** - *Initial work* - [Thiago Lima](https://gitlab.com/thiagoblima/notes-app)

See also the list of [contributors](https://gitlab.com/thiagoblima/hero-app) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Stateless, Smart components auto resolving their dependencies.
* Making software better and resusability as first parameter.
* With love
