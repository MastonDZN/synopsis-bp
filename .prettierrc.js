module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    useTabs: false,
    tabWidth: 4,
    overrides: [
        {
            files: '*.ts',
            options: {
                parser: 'typescript',
            },
        },
    ],
};
