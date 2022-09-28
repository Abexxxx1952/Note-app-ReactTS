import Button from "../components/Button/Button";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
      description: "Вариант названия",
      defaultValue: "Add Note",
      options: ["Add Note", "Edit Note"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const AddNoteButton = Template.bind({});
AddNoteButton.args = { children: "Add Note" };
export const EditNoteButton = Template.bind({});
EditNoteButton.args = { children: "Edit Note" };
