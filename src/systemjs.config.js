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
            'page': 'vendor/page/page.js'
        },
        meta: {
            // 'vendor/angular/angular.js': {
            //     format: 'global',
            //     exports: 'angular'
            // },

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