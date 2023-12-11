import React from "react";
import styles from "./StartScreen.module.css";
import Categories from "../Categories/Categories";
import img from "../../assets/img.png";
import KartsTraining from "../pageInfo/OrderTraining/KartsTraining";
import WhyUsKarts from "../pageInfo/WhyUs/WhyUsKarts";
const StartScreen = () => {
  return (
    <div className={styles.fullScreen}>
      <div className={styles.startScreen}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>
              Получите новые навыки <br /> для карьеры
            </h1>
            <Categories />
          </div>
          <div className={styles.divImage}>
            <ul className={styles.listPhoto}>
              <li className={styles.listPhotoItem}>
                <img
                  src={img}
                  width="140"
                  height="140"
                  loading="lazy"
                  decoding="auto"
                  alt=""
                ></img>
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
      <div className={styles.blockSecond}>
        <div className={styles.section2}>
          <div className={styles.whyMe}>
            <h2>Почему выбирают образовательную платформу&nbsp;For-Example</h2>
            <ul className={styles.whyMeList}>
              <li>
                <b className={styles.whyMeListB}>№1</b>
                <p className={styles.whyMeListP}>
                  По&nbsp;качеству обучения по&nbsp;версии Smart Ranking
                </p>
              </li>
              <li>
                <b className={styles.whyMeListB}>787</b>{" "}
                <p className={styles.whyMeListP}>
                  курсов: профессии, навыки, высшее образование и MBA
                </p>
              </li>
              <li>
                <b className={styles.whyMeListB}>24/7</b>{" "}
                <p className={styles.whyMeListP}>
                  Учитесь с&nbsp;любым графиком из&nbsp;любой точки мира
                </p>
              </li>
              <li>
                <b className={styles.whyMeListB}>93%</b>{" "}
                <p className={styles.whyMeListP}>
                  Окончивших курс отмечают, что достигли своих целей
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.laramAnimationa}>
        <div className={styles.animationWrappera}>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>{" "}
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>{" "}
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>{" "}
            <div className={styles.dota}>•</div>
          </div>
          <div className={styles.animationItema}>
            <span className={styles.span}>For-example </span>{" "}
            <div className={styles.dota}>•</div>
          </div>
        </div>
      </div>
      <KartsTraining/>
      <WhyUsKarts/>
    </div>
  );
};

export default StartScreen;
