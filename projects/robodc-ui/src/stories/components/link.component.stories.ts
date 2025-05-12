import { Meta, StoryObj } from '@storybook/angular';
import { LinkComponent } from '../../lib/link/link.component';

export default {
  title: 'Components/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do link',
    },
    href: {
      control: 'text',
      description: 'URL do link',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Alvo do link',
    },
    disabled: {
      control: 'boolean',
      description: 'Desativa o link',
    },
  },
} as Meta<LinkComponent>;

type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  args: {
    size: 'md',
    href: 'https://example.com',
    target: '_blank',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-link [size]="size" [href]="href" [target]="target">Link padrão</robodc-link>`,
  }),
};

export const Disabled: Story = {
  args: {
    size: 'md',
    href: 'https://example.com',
    target: '_blank',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<robodc-link [size]="size" [href]="href" [target]="target" [disabled]="disabled">Link desativado</robodc-link>`,
  }),
};

export const Large: Story = {
  args: {
    size: 'lg',
    href: 'https://example.com',
    target: '_blank',
  },
  render: (args) => ({
    props: args,
    template: `<robodc-link [size]="size" [href]="href" [target]="target">Link grande</robodc-link>`,
  }),
};