/**
 * Figma Component: https://www.figma.com/design/e1O2ke1lc0CpM6GhYKyr3o/%F0%9F%A7%8A-Horizon-.-Web-.-Components-.-Draft-.?node-id=83-1008&t=BOMOh1UNtcoM3EHa-1
 */

import type { Meta, StoryObj } from '@storybook/react';
import PropertyCard from './PropertyCard';

const meta = {
  title: 'Components/PropertyCard',
  component: PropertyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    location: { control: 'text' },
    rating: { control: 'number' },
    reviewCount: { control: 'number' },
    price: { control: 'number' },
    currency: { control: 'text' },
    priceUnit: { control: 'text' },
    isFavorite: { control: 'boolean' },
    onFavoriteClick: { action: 'favorite clicked' },
  },
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Casa do Bairro',
    location: 'Alfama, Lisbon · 1.2 km from centre',
    rating: 4.7,
    reviewCount: 318,
    price: 121,
    currency: 'EUR',
    priceUnit: 'per night',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=450&h=350&fit=crop',
    isFavorite: false,
  },
};

export const Favorited: Story = {
  args: {
    ...Default.args,
    isFavorite: true,
  },
};

export const HighRating: Story = {
  args: {
    title: 'Luxury Penthouse',
    location: 'Príncipe Real, Lisbon · 0.8 km from centre',
    rating: 4.9,
    reviewCount: 542,
    price: 285,
    currency: 'EUR',
    priceUnit: 'per night',
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=450&h=350&fit=crop',
    isFavorite: false,
  },
};

export const NoImage: Story = {
  args: {
    title: 'Cozy Studio',
    location: 'Baixa, Lisbon · 0.5 km from centre',
    rating: 4.5,
    reviewCount: 124,
    price: 85,
    currency: 'EUR',
    priceUnit: 'per night',
    isFavorite: false,
  },
};

export const Minimal: Story = {
  args: {
    title: 'Property',
    location: 'Location',
    rating: 0,
    reviewCount: 0,
    price: 0,
    currency: 'USD',
    priceUnit: 'per night',
    isFavorite: false,
  },
};
