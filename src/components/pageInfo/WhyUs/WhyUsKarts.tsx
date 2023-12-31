import styles from "./WhyUsKarts.module.css"

import React from 'react';

const WhyUsKarts = () => {
    return (
        <div className={styles.why}>
            <div className={styles.container}>
                <div>
                    <h2>Гарантируем качество обучения</h2>
                    <p>Обучающие программы — это практические навыки от действующих экспертов рынка. Регулярные обновления программ сохраняют их актуальность.</p>
                </div>
                <div>
                    <h2>Строим образовательный трек</h2>
                    <p>Исходя из задач вашей компании и результатов тестирования сотрудников, мы составляем образовательную траекторию. Определяем soft и hard skills для развития.</p>
                </div>
                <div>
                    <h2>Подбираем оптимальный формат</h2>
                    <p> Подписка с безлимитным доступом к контенту • библиотека курсов под задачи бизнеса • готовые курсы или разработка кастомной программы • МВА • вебинары • подарочные сертификаты • партнерская программа (обучение без бюджета).</p>
                </div>
                <div>
                    <h2>Сопровождаем до результата и измеряем его</h2>
                    <p>На протяжении обучения сотрудник получает обратную связь от куратора и поддержку единомышленников в чате Telegram. Тьютор замеряет метрики эффективности и предоставляет вам отчеты о прогрессе.</p>
                </div>
            </div>
            <div className={styles.gif}><img src="https://static.tildacdn.com/tild6265-6661-4863-b935-363137363735/Comp_1_4.gif" alt="" /></div>
        </div>
    );
};

export default WhyUsKarts;

