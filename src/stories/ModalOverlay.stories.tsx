import ModalOverlay from "../components/ModalOverlay/ModalOverlay";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "ModalOverlay",
  component: ModalOverlay,
  argTypes: {
    bgColor: {
      type: "string",
      description: "Вариант цвета заднего фона",
      defaultValue: "white",
      options: ["white", "blue"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ModalOverlay>;

const Template: ComponentStory<typeof ModalOverlay> = (args) => (
  <ModalOverlay {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
export const Blue = Template.bind({});
Blue.args = { bgColor: "blue" };
