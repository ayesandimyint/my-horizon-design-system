import React from 'react';
import './PropertyCard.css';

const imgHeartFilled = 'https://www.figma.com/api/mcp/asset/b1fe3b59-7c5c-4c01-9504-3b63b37cba13.svg';

const HeartOutline = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

interface PropertyCardProps {
  title?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  price?: number;
  currency?: string;
  priceUnit?: string;
  imageUrl?: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  className?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  title = 'Casa do Bairro',
  location = 'Alfama, Lisbon · 1.2 km from centre',
  rating = 4.7,
  reviewCount = 318,
  price = 121,
  currency = 'EUR',
  priceUnit = 'per night',
  imageUrl,
  isFavorite = false,
  onFavoriteClick,
  className,
}) => {
  return (
    <div className={`property-card ${className || ''}`}>
      <div className="property-card__container">
        <div className="property-card__content">
          {/* Image Section */}
          <div className="property-card__image-wrapper">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="property-card__image"
              />
            )}
            <div className="property-card__overlay" />
            <button
              className="property-card__favorite-btn"
              onClick={onFavoriteClick}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? (
                <img
                  src={imgHeartFilled}
                  alt=""
                  className="property-card__heart-icon"
                />
              ) : (
                <HeartOutline />
              )}
            </button>
          </div>

          {/* Text Section */}
          <div className="property-card__text">
            {/* Title and Location */}
            <div className="property-card__header">
              <h3 className="property-card__title">{title}</h3>
              <p className="property-card__location">{location}</p>
            </div>

            {/* Rating and Price */}
            <div className="property-card__footer">
              <div className="property-card__rating">
                <span className="property-card__rating-value">{rating}</span>
                <span className="property-card__review-count">({reviewCount} reviews)</span>
              </div>
              <div className="property-card__price">
                <span className="property-card__price-amount">
                  {price} {currency}
                </span>
                <span className="property-card__price-unit">{priceUnit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
