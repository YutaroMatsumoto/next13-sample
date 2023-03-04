// NOTE: 参考 -> https://github.com/storybookjs/storybook/blob/next/code/frameworks/nextjs/README.md#supported-features

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  addons: ['@storybook/addon-controls', '@storybook/addon-docs'],
}

export default config
