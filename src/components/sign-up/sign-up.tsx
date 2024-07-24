import { useTranslation } from 'react-i18next';
import styles from './sign-up.module.scss';

const SignUp = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.signUp}`}>
      <span className={`${styles.signUp__action}`}>{t('signUp')}</span>
    </div>
  );
};

export default SignUp;
