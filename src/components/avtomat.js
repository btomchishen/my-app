import React from 'react'

class Avtomatf extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="header">
                        АВТОМАТИ З СПЕЦІАЛЬНИМИ ПАКЕТАМИ
                </div>

                    <div className="info">
                        &emsp;Прибери за своїм улюбленцем! До такого закликають власників чотирилапих друзів, які відвідують з ними парк Чекмана. Для нагадування необхідності прибрати за собакою встановили знак. Знизу поставили урну, в яку потрібно викидати фекалії тварин.  Також на стовпі прикріплений ящичок із пакетами, які можна використати для какашок.
                <p className="accept">Такі спеціально обладнанні смітники встановлені в наступних місцях:</p>
                    </div>
                    <div className="content">
                        <div className="content-flex">
                            <div className="content-photo-avtomat">
                                <img src={require("../img/avtomat/avtomat.jpeg")} />
                            </div>
                            <div className="content-text">
                                <div className="content-header">
                                    Автомати з спеціальними пакетами
                                    </div>
                                <div className="content-location">
                                    Розташування: <strong>Парк ім. Михайла Чекмана</strong>
                                </div>
                                <div className="content-photo-avtomat-2"><img src={require("../img/avtomat/checkman.jpeg")} /></div>
                            </div>
                        </div>
                    </div>




                    <div className="home-footer">
                        Copyright Bohdan Tomchishen 2019
                    </div>
                </div>
            </div>
        )
    }
}

export default Avtomatf