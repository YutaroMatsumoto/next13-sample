/**
 * CSF2 の書き方
 */

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Buttons'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'CSF2?',
  component: Button,
  args: {
    title: 'CSF2?',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const GreenCSF2 = Template.bind({})
