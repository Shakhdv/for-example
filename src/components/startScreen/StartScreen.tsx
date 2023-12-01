import React from "react";
import styles from "./StartScreen.module.css";
const StartScreen = () => {
  return (
    <>
      <div className={styles.startScreen}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>
              Получите новые навыки <br /> для карьеры
            </h1>
            <div>
              <ul className={styles.categories}>
                <li className={styles.category}>
                  <a href="#">
                    <span>программирование</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span>Дизайн</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#">
                    <span>программирование</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span className={styles.span}>Дизайн</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#">
                    <span>Кино и сериалы</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span>Дизайн</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#">
                    <span>Игры</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span>Музыка</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#">
                    <span>Аналитик</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.divImage}>
            <ul className={styles.listPhoto}>
              <li className={styles.listPhotoItem}>
                <img
                  src="https://cdn.skillbox.pro/wbd-front/skillbox-static/main-page/start-screen/igor-sm@1x.jpg"
                  width="140"
                  height="140"
                  loading="lazy"
                  decoding="auto"
                  alt=""
                ></img>
                <span>Василий</span>
                <p>За полгода стал разработчиком</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.form}>
            <label htmlFor="" className={styles.inp}>
              <input type="text" name="" id="" />
            </label>
            <button className={styles.btn}>Найти</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.section2}>
          <div className={styles.whyMe}>
            <h2>Почему выбирают образовательную платформу&nbsp;For-Example</h2>
            <ul className={styles.whyMeList}>
              <li>
                <b className={styles.whyMeListB}>№1</b>
                <p className={styles.whyMeListP}>По&nbsp;качеству обучения по&nbsp;версии Smart Ranking</p>
              </li>
              <li>
                <b className={styles.whyMeListB}>787</b>{" "}
                <p className={styles.whyMeListP}>курсов: профессии, навыки, высшее образование и MBA</p>
              </li>
              <li>
                <b className={styles.whyMeListB}>24/7</b>{" "}
                <p className={styles.whyMeListP}>Учитесь с&nbsp;любым графиком из&nbsp;любой точки мира</p>
              </li>
              <li>
                <b className={styles.whyMeListB}>93%</b>{" "}
                <p className={styles.whyMeListP}>Окончивших курс отмечают, что достигли своих целей</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartScreen;