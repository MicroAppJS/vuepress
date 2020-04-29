'use strict';
process.env.MICRO_APP_TEST = 'true';

/* global expect */

describe('VuePress Bin test', () => {

    it('dev run docs', () => {

        try {
            require('../bin/micro-app-vuepress');
        } catch (error) {
            console.warn(error);
        }

    });

});
