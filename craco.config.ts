const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@btn-border-width': '0px',
                            '@btn-primary-bg': '#F5F5F7',
                            '@btn-border-radius-base': '8px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],

};
