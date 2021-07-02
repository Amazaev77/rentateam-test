import React, { FC } from 'react';
import styles from './Footer.module.scss';
import Container from "../Container";
import vkIcon from '../../icons/vk.svg';
import twitterIcon from '../../icons/twitter.svg';
import facebookIcon from '../../icons/facebook.svg';
import okIcon from '../../icons/ok.svg';
import googlePlayIcon from '../../icons/google-play.svg';
import appStoreIcon from '../../icons/app-store.svg';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.squares}>
        <div /><div /><div />
      </div>
      <Container>
        <div className={styles['flex-container']}>
          <div className={styles['content-footer']}>
            <div className={styles['content-footer-link-head']}>Раздел 1</div>
            <div className={styles['content-footer-link']}>Завтраки</div>
            <div className={styles['content-footer-link']}>Пицца</div>
            <div className={styles['content-footer-link']}>Роллы</div>
            <div className={styles['content-footer-link']}>Закуски</div>
          </div>
          <div className={styles['content-footer']}>
            <div className={styles['content-footer-link-head']}>Раздел 2</div>
            <div className={styles['content-footer-link']}>Завтраки</div>
            <div className={styles['content-footer-link']}>Пицца</div>
            <div className={styles['content-footer-link']}>Роллы</div>
            <div className={styles['content-footer-link']}>Закуски</div>
          </div>
          <div className={styles['content-footer-center']}>
            <div className={styles.circle}></div>
          </div>
          <div className={styles['content-footer']}>
            <div className={styles['content-footer-link-head']}>Раздел 3</div>
            <div className={styles['content-footer-link']}>Завтраки</div>
            <div className={styles['content-footer-link']}>Пицца</div>
            <div className={styles['content-footer-link']}>Роллы</div>
            <div className={styles['content-footer-link']}>Закуски</div>
          </div>
          <div className={styles['content-footer']}>
            <div className={styles['content-footer-link-head']}>Раздел 4</div>
            <div className={styles['content-footer-link']}>Завтраки</div>
            <div className={styles['content-footer-link']}>Пицца</div>
            <div className={styles['content-footer-link']}>Роллы</div>
            <div className={styles['content-footer-link']}>Закуски</div>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <div />
          <div>
            <div className={styles.socials}>
              <a style={{ marginRight: 40 }} href="#/"><img src={vkIcon} alt="vk" /></a>
              <a style={{ marginRight: 40 }} href="#/"><img src={twitterIcon} alt="twitter" /></a>
              <a style={{ marginRight: 40 }} href="#/"><img src={facebookIcon} alt="facebook" /></a>
              <a href="#/"><img src={okIcon} alt="ok" /></a>
            </div>
            <div>
              <a style={{ marginRight: 16 }} href="#/">
                <img src={googlePlayIcon} alt="google-play" />
              </a>
              <a href="#/">
                <img src={appStoreIcon} alt="app-store" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
