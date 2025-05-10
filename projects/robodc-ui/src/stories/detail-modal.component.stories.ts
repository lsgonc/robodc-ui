import { Meta, StoryObj } from '@storybook/angular';
import { DetailModalComponent } from '../lib/detail-modal/detail-modal.component';
import { ButtonComponent } from '../lib/button/button.component';

export default {
    title: 'Components/DetailModal',
    component: DetailModalComponent,
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Controla se o modal está aberto ou fechado',
        },
        imageUrl: {
            control: 'text',
            description: 'URL da imagem exibida à esquerda do modal',
        },
        title: {
            control: 'text',
            description: 'Título do modal',
        },
        description: {
            control: 'text',
            description: 'Descrição exibida abaixo do título',
        },
        buttonLabel: {
            control: 'text',
            description: 'Texto do botão no footer do modal',
        },
        close: {
            action: 'closed',
            description: 'Evento emitido quando o modal é fechado',
        },
        onButtonClick: {
            action: 'buttonClicked',
            description: 'Evento emitido quando o botão é clicado',
        },
    },
} as Meta<DetailModalComponent>;

type Story = StoryObj<DetailModalComponent>;

export const Default: Story = {
    parameters: {
        docs: {
            story: {
                height: '400px',
            },
        },
    },
    args: {
        isOpen: true,
        imageUrl: 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
        title: 'Bem-vindo ao Modal',
        description:
            'Este é um modal com uma imagem à esquerda, título, descrição e um botão. Ele é responsivo e flexível!',
        buttonLabel: 'Botão do modal',
    },
};

export const Closed: Story = {
    parameters: {
        docs: {
            story: {
                height: '400px',
            },
        },
    },
    args: {
        isOpen: false,
        imageUrl: 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
        title: 'Modal Fechado',
        description: 'Este modal está fechado por padrão.',
        buttonLabel: 'Botão do modal',
    },
};

export const LongContent: Story = {
    parameters: {
        docs: {
            story: {
                height: '400px',
            },
        },
    },
    args: {
        isOpen: true,
        imageUrl: 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
        title: 'Modal com Conteúdo Longo',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        buttonLabel: 'Botão do modal',
    },
};

export const NoImage: Story = {
    parameters: {
        docs: {
            story: {
                height: '400px',
            },
        },
    },
    args: {
        isOpen: true,
        imageUrl: '',
        title: 'Modal sem Imagem',
        description: 'Este modal não possui uma imagem configurada.',
        buttonLabel: 'Botão do modal',
    },
};