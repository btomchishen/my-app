import React from 'react'

class Aptekif extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    ВЕТЕРИНАРНІ ЛІКАРНІ, АПТЕКИ, АМБУЛАТОРІЇ
                </div>
                <div className="info">
                <p className="accept">Такі ветеринарні заклади знаходяться в наступних місцях:</p>
                </div>
                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/apteki/bile-iklo.png")} />
                        </div>
                        <div className="content-text-apteki">
                            <div className="content-header">
                                Ветеринарна аптека-амбулаторія "Біле Ікло"
                            </div>
                            <div className="content-location">
                                Широкий спектр ветеринарних послуг:<br />
                                -Лабораторні дослідження (крові і інше) <br />
                                -Вакцинація<br />
                                -Чіпування <br />
                                -Терапія та хірургія дрібних та с\г тварин<br />
                                -Виїзд лікаря додому<br />
                                Номера телефоу: +38-098-414-2612 +38-067-862-4046 <br />
                                Розташування: <strong>вул.Проспект Миру 80/1, Район Виставка</strong><br />
                                Графік роботи: з 10-00 до 20-00 без вихідних
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/apteki/ivet.jpg")} />
                        </div>
                        <div className="content-text-apteki-2">
                            <div className="content-header">
                                Ветеринарна аптека-клініка "Ivet"
                            </div>
                            <div className="content-location">
                                Широкий спектр ветеринарних послуг:<br />
                                -Лабораторні дослідження (крові і інше) <br />
                                -Вакцинація<br />
                                -Лабораторна діагностика, УЗД <br />
                                -Терапія та хірургія дрібних та с\г тварин<br />
                                -Стоматологічні послуги<br />
                                Розташування: <strong>вул. Толстого 5а</strong><br />
                                Графік роботи: з 9-00 до 19-00 без вихідних
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/apteki/vetastra.jpg")} />
                        </div>
                        <div className="content-text-apteki-2">
                            <div className="content-header">
                                Ветеринарна аптека-клініка "VetAstra"
                            </div>
                            <div className="content-location">
                                Широкий спектр ветеринарних послуг:<br />
                                -Вакцинація<br />
                                -Лабораторна діагностика, УЗД <br />
                                -Терапія та хірургія дрібних та с\г тварин<br />
                                Номер телефону: +38-097-703-4384<br />
                                Email: vetastra.km@gmail.com<br />
                                Розташування: <strong>вул. Подільска 61</strong><br />
                                Графік роботи: з 10-00 до 19-00 без вихідних
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/apteki/aibolit.png")} />
                        </div>
                        <div className="content-text-apteki-2">
                            <div className="content-header">
                                Ветеринарна аптека-клініка "Aibolit"
                            </div>
                            <div className="content-location">
                                Широкий спектр ветеринарних послуг:<br />
                                -Хірургія (стерилізація, остеосинтез, новоутворення)<br />
                                -Терапія *УЗД<br />
                                -Акушерська допомога<br />
                                -Оформлення документів<br />
                                Номер телефону: +38-067-976-6753<br />
                                Розташування: <strong>вул. Кам'янецька 74</strong><br />
                                Графік роботи: з 9-00 до 19-00 без вихідних
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

export default Aptekif