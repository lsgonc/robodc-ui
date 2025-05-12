import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '../../lib/card/card.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'The title of the card' },
    imgUrl: { control: 'text', description: 'URL of the card image' },
    click: { action: 'clicked', description: 'Emits when card is clicked' }
  }
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Sample Card',
    imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__'
  },
  play: async ({ canvasElement }) => {
    canvasElement.addEventListener('click', action('Card clicked'));
  }
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long card title that should wrap or truncate',
    imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__'
  }
};

