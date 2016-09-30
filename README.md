# Project boilerplate TypeScript and Twig edition
This is a simple introduction to our project structure, environment and best practices.
## Project structure

### `/src`
The main development section of the project. This folder contains all of the files that are used to build a functional static template.

#### `/src/{atoms,molecules,organisms,pages,templates}`
These folders contain components organized according to Atomic Design principles. To learn more about Atomic Design see: http://bradfrost.com/blog/post/atomic-web-design/

#### `/src/utilities`
This directory contains all of the project utilities that are used by components but **don't affect the website directly** e.g. Sass mixins, breakpoints and colors definitions etc.

#### `/src/fonts`
This directory contains all font files used across the pages.

#### `/src/images`
Contains all images that are used in the layouts but somehow cannot be merged into one sprite file. If you don't see any problems with using a certain image
as a sprite, put it inside `/src/sprites/png` directory instead.

#### `/src/vendors`
Contains all third party scripts, styles and libraries that are used inside our project.
**Note: JS files starting with `_` will be merged into single `vendors.js` file, others will be minified and copied directly.**


#### `/src/bundle.scss`
This files SHOULD import styles of all of the components used on the website that will be then merged into single file inside `/dist` directory.

#### `/src/bundle.ts`
This files SHOULD import scripts of all of the components and layouts used on the website for a specific device that will be then merged into single file inside `/dist` directory.

#### `/src/index.twig`
Entry point for our application. This file will usually contain sitemap to layouts.

### `/dist`
This directory contains only compiled sources and is generated automatically by gulp tasks.
**All changes made here will be overwritten by gulp tasks!**

### `/gulp`
This directory contains all of the defined Gulp task functions that are then used inside `gulpfile.babel.js` file.

## Getting started
### Requirements
- NodeJS,
- Gulp
### Running the project
1. Clone this repository,
2. In main repository directory:
    2.1. `npm install`
    2.2. 'gulp serve'

This will install all required dependencies and setup static local server so you can browse project freely.

#### Compilation
```
gulp compile
```
Compiles entire project including SASS, JavaScript, images, sprites and templates.

#### Linting
```
gulp lint
```
Checks if JS and SCSS files are coded according to our standards.

### Environments
There are 3 environments available: **development** (default), **jenkins** and **production**. To enable production environment just add `--env production` to your gulp task, e.g.
```
gulp compile --env production
```
Production environment enables sources minification, strips sourcemaps, minifies images etc.

### Authoring components
There are some principles you should have in mind when authoring and editing components:
* Write small, independent blocks that should fit nicely anywhere.
* Always document your code, something that may be obvious now probably won't be next month.
* Give meaningful description of your component: what it does, what are its requirements, how to use it.
* Lint your code, so entire project can look like it was coded by one person.
* Write many, small unit tests and some e2e test, you'll make QA life easier.
* If tests are hard to write it's probably because of bad design, consult with your team and refactor.
* Try to improve things you work with.
* Good communication is the key.

### Sprites
Project has added automatic sprites generator for PNG's and SVG's.

#### PNG
Task does two magic things:
1. Generates both normal and retina sprites based on images placed in the `src/sprites/png/` directory (__only *.png files!__),
2. Delivers SASS mixins and variables in `src/utilities/_sprites.scss`, where each image is represented by `$sprite-png-file-name-group` variable(`_` in filename is converted to `-`), e.g. `$sprite-logo`.

Notes:
* You must put both normal and retina version of images,
* Images must be named like `example.png` and `example@2x.png`,
* Retina image must be exactly 2x larger than normal version.

Sample usage:
```
.foo {
    @include retina-sprite($sprite-logo-group);
}
```
This code will generate needed CSS for proper normal and retina sprite usage as element's background.

#### SVG
This task works similar to its PNG counterpart (generates sprite map image basing on `src/sprites/svg/` directory). The difference is that we have no SASS mixins and variables. Images are available as `#svg_file_name` part of the sprite.

Sample usage:
```
<svg>
    <use xlink:href="images/sprites.svg#logo"></use>
</svg>
```