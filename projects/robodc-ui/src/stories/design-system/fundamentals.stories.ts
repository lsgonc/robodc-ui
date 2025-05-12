import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Design System/Fundamentals',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj;

const fundamentals = [
  {
    title: 'Tipografia e Legibilidade',
    description: 'Tamanhos de fonte maiores (18px-24px) e espaçamento amplo garantem legibilidade em distâncias maiores, ideal para telas fixas como a plataforma do robô.',
    reference: 'Baseado em práticas de design para interfaces de quiosques.',
    example: `
      <p style="font-family: 'Inter'; font-size: 1.5rem; font-weight: 400; line-height: 1.6; color: #333; margin: 0;">
        Texto legível em 24px com Inter
      </p>
      <p style="font-family: 'Roboto'; font-size: 1.25rem; font-weight: 700; line-height: 1.5; color: #333; margin: 0.5rem 0 0;">
        Título em Roboto 20px
      </p>
    `
  },
  {
    title: 'Contraste e Visibilidade',
    description: 'Contraste mínimo de 4.5:1, com opções de alto contraste e ajustes automáticos para diferentes condições de luz, garantindo visibilidade em telas fixas.',
    reference: 'Tullis, T. (2007). "Screen Design for Usability." Handbook of Human Factors in Web Design.',
    example: `
      <div style="display: flex; gap: 1rem;">
        <div style="background-color: #343434; color: #FFFFFF; padding: 0.5rem; border-radius: 4px;">
          Alto contraste: #FFFFFF em #343434
        </div>
        <div style="background-color: #E6E6E6; color: #333; padding: 0.5rem; border-radius: 4px;">
          Contraste padrão: #333 em #E6E6E6
        </div>
      </div>
    `
  },
  {
    title: 'Interação por Dedo (Touch)',
    description: 'Botões e áreas de toque com tamanho mínimo de 48x48px, com margens para precisão em telas fixas. Áreas de toque podem ser maiores que o botão visível.',
    reference: 'Google Material Design Guidelines "Accessibility - Touch Targets."',
    example: `
      <button style="font-family: 'Roboto'; font-size: 1rem; font-weight: 500; background-color: #343434; color: #FFFFFF; padding: 12px 24px; border: none; border-radius: 11px; min-width: 48px; min-height: 48px; cursor: pointer;">
        Botão 48x48px
      </button>
    `
  },
  {
    title: 'Interação por Voz',
    description: 'Comandos simples (e.g., "iniciar", "parar"), feedback auditivo/visual e suporte multilíngue para interação mãos-livres com a plataforma.',
    reference: 'Práticas de design para interfaces de voz.',
    example: `
      <p style="font-family: 'Inter'; font-size: 1rem; color: #666; margin: 0;">
        Exemplo: Dizer "Iniciar" exibe ícone de play e texto de confirmação.
      </p>
    `
  },
  {
    title: 'Reconhecimento de Emoções',
    description: 'Detecta emoções via análise facial ou voz, ajustando a interface (e.g., cores, tom de voz) para melhorar a experiência do usuário.',
    reference: 'Baseado em tecnologias de IA para interfaces adaptativas.',
    example: `
      <p style="font-family: 'Inter'; font-size: 1rem; color: #666; margin: 0;">
        Exemplo: Interface usa --success-6 (#31b768) para emoções positivas.
      </p>
    `
  },
  {
    title: 'Informar o Usuário sobre a Emoção Definida',
    description: 'Exibe a emoção detectada (e.g., "Você parece feliz") com feedback visual (ícones, texto) ou auditivo para maior engajamento.',
    reference: 'Práticas de design para feedback em IA emocional.',
    example: `
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-family: 'Inter'; font-size: 1rem; color: #333;">Você parece feliz 😊</span>
      </div>
    `
  },
  {
    title: 'Interação com Plataforma Autônoma',
    description: 'Comandos claros (e.g., “iniciar”, “parar”) com indicadores visuais ou sonoros para interação com a plataforma autônoma.',
    reference: 'Baseado em interfaces para sistemas autônomos.',
    example: `
      <div style="display: flex; gap: 1rem;">
        <button style="font-family: 'Roboto'; font-size: 1rem; font-weight: 500; background-color: #31b768; color: #FFFFFF; padding: 12px 24px; border: none; border-radius: 11px;">
          Iniciar
        </button>
        <button style="font-family: 'Roboto'; font-size: 1rem; font-weight: 500; background-color: #d02f27; color: #FFFFFF; padding: 12px 24px; border: none; border-radius: 11px;">
          Parar
        </button>
      </div>
    `
  },
  {
    title: 'Status da Plataforma',
    description: 'Feedback em tempo real sobre o estado da plataforma (e.g., ativo, pausado) via ícones, texto ou animações, garantindo visibilidade clara.',
    reference: 'Nielsen, J. (1994). "Usability Engineering." Heuristic Evaluation.',
    example: `
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="display: inline-block; width: 12px; height: 12px; background-color: #31b768; border-radius: 50%;"></span>
        <span style="font-family: 'Inter'; font-size: 1rem; color: #333;">Plataforma Ativa</span>
      </div>
    `
  },
  {
    title: 'Ajuste de Altura do Dispositivo',
    description: 'Tela ajustável entre 120-150 cm do chão, alinhada 15° abaixo do horizonte ocular para conforto visual do usuário.',
    reference: 'ISO 9241-5:1998. "Ergonomic Requirements for Office Work with Visual Display Terminals."',
    example: `
      <p style="font-family: 'Inter'; font-size: 1rem; color: #666; margin: 0;">
        Especificação: Altura ajustável de 120-150 cm.
      </p>
    `
  },
  {
    title: 'Posicionamento sem Obstrução',
    description: 'Margens livres ao redor do dispositivo para evitar interferência nos movimentos do usuário ou da plataforma.',
    reference: 'ISO 6385:2016. "Ergonomic Principles in the Design of Work Systems."',
    example: `
      <p style="font-family: 'Inter'; font-size: 1rem; color: #666; margin: 0;">
        Especificação: Espaço livre de 50 cm em todas as direções.
      </p>
    `
  }
];

export const Default: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${fundamentals
          .map(
            (fundamental) => `
              <div>
                <h2 style="margin: 0 0 0.5rem; font-family: 'Roboto'; font-size: 1.5rem; font-weight: 700; color: #333;">
                  ${fundamental.title}
                </h2>
                <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px;">
                  <p style="margin: 0 0 0.5rem; font-family: 'Inter'; font-size: 1rem; line-height: 1.6; color: #666;">
                    ${fundamental.description}
                  </p>
                  <p style="margin: 0 0 0.5rem; font-family: 'Inter'; font-size: 0.875rem; font-style: italic; color: #888;">
                    ${fundamental.reference}
                  </p>
                  ${fundamental.example ? `
                    <div style="margin-top: 1rem;">
                      ${fundamental.example}
                    </div>
                  ` : ''}
                </div>
              </div>
            `
          )
          .join('')}
      </div>
    `
  })
};