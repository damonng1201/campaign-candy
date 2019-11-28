const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            '@border-radius-base': '20px',
            '@input-height-base': '40px',
            '@component-background': '#d7d7d7',
            '@primary-color': '#464646',
            '@btn-height-base': '40px'
        },
    }),
);