module.exports = {
    core: {
        builder: 'webpack5',
    },
    features: {
        babelModeV7: true,
    },
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
