;
(function () {
    'use strict';

    var config = {
        baseURL: './',
        defaultExtension: 'js',
        paths: {
            '/': '/'
        },
        map: {
            'vue': 'vendor/vue/vue.js',
            'vue-router': 'vendor/vue-router/vue-router.min.js',
            'jquery': 'vendor/jquery/jquery.js',
            'materialize-js': 'vendor/materialize/materialize.js',
        },
        meta: {
            'vendor/jquery/jquery.js': {
                format: 'global',
                exports: '$'
            },
            'vendor/materialize/materialize.js': {
                format: 'global',
                deps: [
                    'jquery'
                ]
            },
            'vendor/vue-router/vue-router.min.js': {
                deps: [
                    'vue'
                ]
            },
            '*.css': { loader: 'css' }
        },
        packages: {
            '/': {
                defaultExtension: 'js'
            }
        }
    };

    System.config(config);
}());