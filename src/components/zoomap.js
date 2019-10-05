import React from 'react'

class Zoomapf extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    МІСЦЯ ВИГУЛУ
                </div>
                <div className="info">
                &emsp;Сквери і парки – це самі найкращі місця для вигулу домашніх улюбленців, бо на вулицях міста завжди багато шуму і метушні. У людних місцях собаку потрібно тримати на повідку, інакше домашній улюбленець може злякатися шуму машини, кинутися під неї або навіть втекти. Для екології міста і безпеки собак важливо вигулювати в спеціально відведених, офіційно дозволених для цього місцях. Тоді команди власника собака буде виконувати уважно та зосереджено.
                Безкоштовні місця для вигулу та дресирування собак – це поширений європейський досвід. Згідно з “Положенням про функціонування місць та зон для вигулу тварин в Києві” площа зони повинна бути не менше 30 відсотків від загальної площі міського парку або скверу, який знаходиться у районі. За цим стандартом влада столиці офіційно і виділила місця для вигулу домашніх тварин.
                <p className="accept">За інформацією районних в м. Хмельницькому державних адміністрацій вигул собак дозволено:</p>
                </div>
                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/area/denropark.jpg")} />
                        </div>
                        <div className="content-text">
                            <div className="content-header">
                                Місце вигулу у мкр. Виставка - Дендропарк
                            </div>
                            <div className="content-location">
                                Розташування: <strong>Старокостянтинівське шосе</strong>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/area/checkman.jpg")} />
                        </div>
                        <div className="content-text">
                            <div className="content-header">
                                Місце вигулу у мкр. Центр - Парк ім. Михайла Чекмана
                            </div>
                            <div className="content-location">
                                Розташування: <strong>вул. Паркова 1</strong>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="home-footer">
                        Copyright Bohdan Tomchishen 2019
                    </div>
            </div>
        )
    }
}

export default Zoomapf