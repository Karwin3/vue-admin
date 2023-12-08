/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-standard',
        '@vue/eslint-config-typescript',
        './.eslintrc-auto-import.json'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        // 首行缩进 4 个字符
        indent: ['error', 4],
        // 关闭组件命名规则
        'vue/multi-word-component-names': 'off',
        'space-before-function-paren': 'off'
    }
}
