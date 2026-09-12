import React from 'react';
import './Card.css';

interface CardImageProps {
  src: string;
  alt: string;
  isFavorited?: boolean;
  onFavoriteToggle?: () => void;
}

const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  isFavorited = false,
  onFavoriteToggle,
}) => (
  <div className="card__image-wrapper">
    <img src={src} alt={alt} className="card__image" />
    <div className="card__overlay" />
    <button
      className={`card__favorite-btn ${isFavorited ? 'card__favorite-btn--active' : ''}`}
      onClick={onFavoriteToggle}
      aria-label="Toggle favorite"
      type="button"
    >
      <svg
        className="card__favorite-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  </div>
);

interface CardTitleProps {
  title: string;
  location: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title, location }) => (
  <div className="card__title-section">
    <h3 className="card__title">{title}</h3>
    <p className="card__location">{location}</p>
  </div>
);

interface CardFooterProps {
  rating: number;
  reviewCount: number;
  price: number;
  currency?: string;
  priceLabel?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
  rating,
  reviewCount,
  price,
  currency = 'EUR',
  priceLabel = 'per night',
}) => (
  <div className="card__footer">
    <div className="card__rating">
      <span className="card__rating-value">{rating}</span>
      <span className="card__review-count">({reviewCount} reviews)</span>
    </div>
    <div className="card__price">
      <span className="card__price-value">
        {price} {currency}
      </span>
      <span className="card__price-label">{priceLabel}</span>
    </div>
  </div>
);

interface CardContentProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  currency?: string;
  priceLabel?: string;
}

const CardContent: React.FC<CardContentProps> = ({
  title,
  location,
  rating,
  reviewCount,
  price,
  currency,
  priceLabel,
}) => (
  <div className="card__text">
    <CardTitle title={title} location={location} />
    <CardFooter
      rating={rating}
      reviewCount={reviewCount}
      price={price}
      currency={currency}
      priceLabel={priceLabel}
    />
  </div>
);

interface CardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  currency?: string;
  priceLabel?: string;
  isFavorited?: boolean;
  onFavoriteToggle?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  location,
  rating,
  reviewCount,
  price,
  currency = 'EUR',
  priceLabel = 'per night',
  isFavorited = false,
  onFavoriteToggle,
  className = '',
}) => (
  <div className={`card ${className}`}>
    <div className="card__container">
      <div className="card__items">
        <div className="card__layout">
          <CardImage
            src={image}
            alt={title}
            isFavorited={isFavorited}
            onFavoriteToggle={onFavoriteToggle}
          />
          <CardContent
            title={title}
            location={location}
            rating={rating}
            reviewCount={reviewCount}
            price={price}
            currency={currency}
            priceLabel={priceLabel}
          />
        </div>
      </div>
    </div>
  </div>
);

export { Card, CardImage, CardContent, CardTitle, CardFooter };
