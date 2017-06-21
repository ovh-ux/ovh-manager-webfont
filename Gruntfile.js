var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

module.exports = function (grunt) {
    'use strict';
    require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

    var fontName = "ovh-font";
    var fontDashName = fontName + "-";

    grunt.initConfig({
        pkg      : grunt.file.readJSON('package.json'),
        bower    : grunt.file.readJSON('bower.json'),
        name     : grunt.file.readJSON('package.json').name || 'ovh-manager-webfont',   // module name

        // To release
        bump       : {
            options : {
                pushTo        : 'origin',
                files         : [
                    'package.json',
                    'bower.json'
                ],
                updateConfigs : ['pkg', 'bower'],
                commitFiles   : ['-a']
            }
        },

        webfont: {
            icons: {
                src     : "src/icons/**/*.svg",
                dest    : "dist/fonts",
                destCss : "dist/less",
                destHtml: "dist",
                options : {
                    engine      : "node",
                    stylesheet  : "less",
                    descent     : 0,
                    styles      : [
                        "font",
                        "icon"
                    ],
                    font        : fontName,
                    fontHeight  : 80,
                    types       : [
                        "eot",
                        "woff",
                        "woff2",
                        "ttf",
                        "svg"
                    ],
                    ie7         : true,
                    template    : "src/templates/icons.less",
                    relativeFontPath : "../fonts",
                    templateOptions: {
                        baseClass       : fontName,
                        classPrefix     : fontDashName,
                        mixinPrefix     : fontDashName
                    },
                    destCss : "dist/less",
                    destHtml: "dist",
                    htmlDemoTemplate : "src/templates/index.html"
                }
            }
        },


        less: {
            development: {
                options: {
                  paths: ["assets/css"]
                },
                files: {
                  "dist/css/ovh-font.css": "dist/less/ovh-font.less"
                }
            },
            showcase : {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "dist/css/ovh-font.css": "dist/less/ovh-font.less"
                }
            }
        }
    });


    grunt.registerTask("default", ["build"]);
    grunt.task.renameTask("watch", "delta");
    grunt.registerTask("watch", ["build", "delta"]);

    grunt.registerTask("test", function () {
        return true;
    });

    grunt.registerTask('build', 'Gulp', function () {
        grunt.task.run(['webfont', 'less']);
    });


    // Increase version number. Type = minor|major|patch
    grunt.registerTask("release", "Release", function () {
        var type = grunt.option("type");

        if (type && ~["patch", "minor", "major"].indexOf(type)) {
            grunt.task.run(["bump-only:" + type]);
        } else {
            grunt.verbose.or.write("You try to release in a weird version type [" + type + "]").error();
            grunt.fail.warn("Please try with --type=patch|minor|major");
        }
    });

};
