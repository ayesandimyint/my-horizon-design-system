import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    image: {
      control: 'text',
      description: 'Card image URL',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    location: {
      control: 'text',
      description: 'Location description',
    },
    rating: {
      control: 'number',
      description: 'Rating value',
    },
    reviewCount: {
      control: 'number',
      description: 'Number of reviews',
    },
    price: {
      control: 'number',
      description: 'Price value',
    },
    currency: {
      control: 'text',
      description: 'Currency code',
    },
    priceLabel: {
      control: 'text',
      description: 'Price label (e.g. "per night")',
    },
    isFavorited: {
      control: 'boolean',
      description: 'Whether card is favorited',
    },
  },
};

const defaultImage =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=300&fit=crop';

const Template = (args: any) => <Card {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  image: defaultImage,
  title: 'Casa do Bairro',
  location: 'Alfama, Lisbon · 1.2 km from centre',
  rating: 4.7,
  reviewCount: 318,
  price: 121,
  currency: 'EUR',
  priceLabel: 'per night',
  isFavorited: false,
};
Default.storyName = 'Default';

export const Favorited = Template.bind({}) as any;
Favorited.args = {
  ...Default.args,
  isFavorited: true,
};
Favorited.storyName = 'Favorited';

export const HighRating = Template.bind({}) as any;
HighRating.args = {
  ...Default.args,
  rating: 4.9,
  reviewCount: 542,
};
HighRating.storyName = 'High Rating';

export const LowRating = Template.bind({}) as any;
LowRating.args = {
  ...Default.args,
  rating: 3.8,
  reviewCount: 45,
};
LowRating.storyName = 'Low Rating';

export const DifferentPrices = Template.bind({}) as any;
DifferentPrices.args = {
  ...Default.args,
  price: 245,
};
DifferentPrices.storyName = 'Different Price';

export const DifferentCurrency = Template.bind({}) as any;
DifferentCurrency.args = {
  ...Default.args,
  price: 99,
  currency: 'GBP',
};
DifferentCurrency.storyName = 'Different Currency (GBP)';

export const LongTitle = Template.bind({}) as any;
LongTitle.args = {
  ...Default.args,
  title: 'Beautiful Modern Apartment in Historic Lisbon',
};
LongTitle.storyName = 'Long Title';

export const AllVariants = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
    <Card
      image={defaultImage}
      title="Casa do Bairro"
      location="Alfama, Lisbon · 1.2 km from centre"
      rating={4.7}
      reviewCount={318}
      price={121}
      currency="EUR"
      priceLabel="per night"
      isFavorited={false}
    />
    <Card
      image={defaultImage}
      title="Casa do Bairro"
      location="Alfama, Lisbon · 1.2 km from centre"
      rating={4.7}
      reviewCount={318}
      price={121}
      currency="EUR"
      priceLabel="per night"
      isFavorited={true}
    />
    <Card
      image={defaultImage}
      title="Luxury Penthouse"
      location="Príncipe Real, Lisbon · 0.5 km from centre"
      rating={4.9}
      reviewCount={542}
      price={285}
      currency="EUR"
      priceLabel="per night"
      isFavorited={false}
    />
    <Card
      image={defaultImage}
      title="Budget Studio"
      location="Marvila, Lisbon · 3.5 km from centre"
      rating={3.8}
      reviewCount={102}
      price={65}
      currency="EUR"
      priceLabel="per night"
      isFavorited={false}
    />
  </div>
);
AllVariants.storyName = 'All Variants';
