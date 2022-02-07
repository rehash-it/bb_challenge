const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@btn-padding-horizontal-base': '50px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
