import { ThemeService } from '@acn/theme';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [ThemeService],
    }),
  ],
} as Meta<ButtonComponent>;

const actionsData = {
  btnClick: action('btnClick'),
};

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    ...args,
    btnClick: actionsData.btnClick,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  buttonText: 'Hello There',
  variantType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonText: 'Hello There from Secondary',
  variantType: 'secondary',
};
