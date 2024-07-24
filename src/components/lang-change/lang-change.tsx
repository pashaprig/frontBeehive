import { useTranslation } from 'react-i18next';

const LangChange = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ua')}>UA</button>
    </div>
  );
};

export default LangChange;
