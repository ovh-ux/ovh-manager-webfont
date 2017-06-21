# OVH font

![OVH component deprecated](githubBannerDeprecated.png)

![deprecated](https://img.shields.io/badge/status-deprecated-red.svg)

To use please import less you want to use on app.less

You can see every available icons in `dist/ovh-font.html`.

## Example

* Basic Usage

```html
    <i class="ovh-font ovh-font-caddy"></i>
```

* Available size (`0.6em`, `0.8em`, `1.2em`, `1.4em`, `1.6em`, `1.8em`, `2em`)

```html
    <i class="ovh-font ovh-font-caddy ovh-font-1x8"></i>
    <i class="ovh-font ovh-font-modem ovh-font-2x"></i>
```

## Installation

### Bower
```bash
bower install ovh-manager-webfont --save
```

### NPM
```bash
npm install ovh-manager-webfont --save
```

### Get the sources

```bash
    git clone https://github.com/ovh-ux/ovh-manager-webfont.git
    cd ovh-manager-webfont
    npm install && bower install
```

and include it

```
@import 'ovh-manager-webfont/dist/less/ovh-font.less';
@ovh-font-path: '../bower_components/ovh-font/dist/fonts';
```

You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

Have a look in [CONTRIBUTING.md](https://github.com/ovh-ux/ovh-manager-webfont/blob/master/CONTRIBUTING.md)

## Run the tests

```bash
npm test
```

## Rules to create your own SVG

There are a few rules to follow in order for the rendering machine to not break your brand new SVG icon:
* 80*80px.
* No stroke, only fill. Only use filled figure, no paths with stroke.
* No overlapping paths, they should not even touch, use pathfinding if needed.
* Keep the number of points to a minimum. They tend to increase the file complexity and inhibit a good font conversion.
* Close your paths.

## Build

* Install ttfautohint on Windows and Mac.
   * Download the binaries from http://www.freetype.org/ttfautohint/#download
   * Put them in your path.
* Put your svg icons in `src/icons` and run:

```bash
npm install # just required the first time
make build
```

# Related links

 * Contribute: https://github.com/ovh-ux/ovh-manager-webfont
 * Report bugs: https://github.com/ovh-ux/ovh-manager-webfont/issues
 * Get latest version: https://github.com/ovh-ux/ovh-manager-webfont

# License

See https://github.com/ovh-ux/ovh-manager-webfont/blob/master/LICENSE
