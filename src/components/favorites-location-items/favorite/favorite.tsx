import { Link } from 'react-router-dom';
import { Offer } from '../../../types/offer';

type FavoriteProps = {
  offer: Offer;
}

function Favorite({ offer }: FavoriteProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={150} height={110} alt={`${offer.type} in ${offer.city.name}`} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`${offer.isFavorite ? 'place-card__bookmark-button--active' : 'place-card__bookmark-button'} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: Math.round(offer.rating) * 15 }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Favorite;
