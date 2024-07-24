import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useTranslation } from 'react-i18next';
import LangChange from '../lang-change/lang-change';

function Logo(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <LangChange />
        <span>{t('welcome')}</span>
      </div>
      <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="{81}" height="{41}" />
      </Link>
    </>
  );
}

export default Logo;
