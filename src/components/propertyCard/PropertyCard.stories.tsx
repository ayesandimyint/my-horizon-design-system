/**
 * Figma Component: https://www.figma.com/design/e1O2ke1lc0CpM6GhYKyr3o/%F0%9F%A7%8A-Horizon-.-Web-.-Components-.-Draft-.?node-id=83-1008&t=BOMOh1UNtcoM3EHa-1
 */

import type { Meta, StoryObj } from '@storybook/react';
import PropertyCard from './PropertyCard';

const defaultArgs = {
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
  showIcon: true,
  showReviewTag: true,
  showPrice: true,
  showMetaData: true,
  disabled: false,
};

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
    showIcon: { control: 'boolean' },
    showReviewTag: { control: 'boolean' },
    showPrice: { control: 'boolean' },
    showMetaData: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onFavoriteClick: { action: 'favorite clicked' },
  },
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== DEFAULT VARIANTS =====
export const Default: Story = {
  args: { ...defaultArgs },
};

export const Favorited: Story = {
  args: { ...defaultArgs, isFavorite: true },
};

export const HighRating: Story = {
  args: {
    ...defaultArgs,
    title: 'Luxury Penthouse',
    location: 'Príncipe Real, Lisbon · 0.8 km from centre',
    rating: 4.9,
    reviewCount: 542,
    price: 285,
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=450&h=350&fit=crop',
  },
};

export const NoImage: Story = {
  args: {
    ...defaultArgs,
    title: 'Cozy Studio',
    location: 'Baixa, Lisbon · 0.5 km from centre',
    rating: 4.5,
    reviewCount: 124,
    price: 85,
    imageUrl: undefined,
  },
};

export const Minimal: Story = {
  args: {
    ...defaultArgs,
    title: 'Property',
    location: 'Location',
    rating: 0,
    reviewCount: 0,
    price: 0,
    currency: 'USD',
  },
};

// ===== STATE VARIANTS =====
export const Disabled: Story = {
  args: { ...defaultArgs, disabled: true },
};

export const FavoritedDisabled: Story = {
  args: { ...defaultArgs, isFavorite: true, disabled: true },
};

// ===== TOGGLE VARIANTS =====
export const WithoutIcon: Story = {
  args: { ...defaultArgs, showIcon: false },
};

export const WithoutReviewTag: Story = {
  args: { ...defaultArgs, showReviewTag: false },
};

export const WithoutPrice: Story = {
  args: { ...defaultArgs, showPrice: false },
};

export const WithoutMetaData: Story = {
  args: { ...defaultArgs, showMetaData: false },
};

export const MinimalDisplay: Story = {
  args: {
    ...defaultArgs,
    showIcon: false,
    showReviewTag: false,
    showPrice: false,
  },
};

// ===== CONTENT VARIATIONS =====
export const LongTitle: Story = {
  args: {
    ...defaultArgs,
    title: 'Charming Victorian House with Ocean Views and Private Garden',
    location:
      'Pacific Heights, San Francisco, California · 2.3 km from centre',
  },
};

export const DifferentCurrency: Story = {
  args: {
    ...defaultArgs,
    title: 'Tokyo Modern Apartment',
    location: 'Shibuya, Tokyo · 1.5 km from centre',
    price: 18500,
    currency: 'JPY',
    rating: 4.8,
    reviewCount: 287,
  },
};

export const LowRating: Story = {
  args: {
    ...defaultArgs,
    title: 'Budget Hostel',
    location: 'Backpacker Area · 3.2 km from centre',
    rating: 2.5,
    reviewCount: 45,
    price: 25,
  },
};

export const NoReviews: Story = {
  args: {
    ...defaultArgs,
    title: 'New Listing',
    location: 'Downtown · 0.3 km from centre',
    rating: 0,
    reviewCount: 0,
  },
};
