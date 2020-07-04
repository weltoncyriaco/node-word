module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@config': './src/config',
                '@model': './src/models',
                '@controller': './src/controllers',
                '@view': './src/views'
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}