module.exports = {
    'root': true,
    'extends': [
        '@tangxiaomi'
    ],
    env: {
        node: true
    },
    'rules': {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/indent': [
            'error',
            4
        ]
    }
}