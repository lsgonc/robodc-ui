import { Meta, StoryObj } from '@storybook/angular';
import { CardListComponent } from '../../lib/card-list/card-list.component';

const meta: Meta<CardListComponent> = {
  title: 'Components/CardList',
  component: CardListComponent,
  tags: ['autodocs'],
  argTypes: {
    cards: { control: 'object', description: 'Array of card data with title and imgUrl' }
  }
};

export default meta;
type Story = StoryObj<CardListComponent>;

export const Default: Story = {
  args: {
    cards: [
      { title: 'Card 1', imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__' },
      { title: 'Card 2', imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__' },
      { title: 'Card 3', imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__' },
      { title: 'Card 4', imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__' },
      { title: 'Card 5', imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__' }
    ]
  }
};

export const SingleCard: Story = {
  args: {
    cards: [
      { title: 'Single Card', imgUrl: 'https://media-hosting.imagekit.io/e2c2d5632a5a4ca2/localizacao.svg?Expires=1841597916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U16y798Y5tark0~9hrIwXTj-gbAdjcEchlcXhn4t8~PECEMqDzl7hZ-FLSS7DAjWmFvfG2OctX4QN58ghpKOm94ADfjP1apMgM8dnkUzEOzRYkfdxNlP8ajKbexJ3mR8iwqo-sm9EsKwFB5Let0vrZH4b9uK4gJ2rffOHniT5nRkC8jM13T61LorjPn0fM0PiOcPd2flqrngPopbBVTmNw~Ns7JuUvn63pErjnP7ocW0qLMfnV2hot~XfLFXzRgYbEaEzmKGWXq-vBgmF084dzA6XnhonssnwhqkZCcTWtMN2KRTWSIYrDEULNt1-3-91pJZ~2BECyKKEY08lXUunw__' }
    ]
  }
};
