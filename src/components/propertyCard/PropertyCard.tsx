import React from 'react';
import './PropertyCard.css';

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
              <svg
                className="property-card__heart-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
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
                  {currency} {price}
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
