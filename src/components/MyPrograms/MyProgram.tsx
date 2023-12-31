import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyPrograms.module.css";
import { useSelector } from "react-redux";

const MyProgram = ({ complete, programName, lessonsComplete, image, programId }) => {
  const programs = useSelector((state) => state.application.user.programs)
  const program = programs.find((item) => item.program._id.toString() === programId)
  
  const progress = Math.floor((lessonsComplete.length)/(program.program.lessons.length)*100)
  
  return (
    <div className={styles.programCard}>
      <img
        className={styles.programImage}
        src={`http://localhost:4000/${image}`}
        alt="картинка программы"
      />
      <div className={styles.programText}>
        <div className={styles.programName}>{programName}</div>
        <div>
          <div>Пройдено: {progress}%</div>
        <progress className={styles.programProgress} id="file" max="100" value={progress}>{progress}</progress>
        </div>
      </div>
      <Link
        className={styles.programCardButtonLink}
        to={`/mycourse/${programId}`}
      >
        <button className={styles.programCardButton}>К урокам</button>
      </Link>
    </div>
  );
};

export default MyProgram;
