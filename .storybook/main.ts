// NOTE: 参考 -> https://github.com/storybookjs/storybook/blob/next/code/frameworks/nextjs/README.md#supported-features

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
}

export default config
