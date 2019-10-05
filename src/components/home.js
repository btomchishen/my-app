import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Homef extends React.Component {
    render() {
        return (
            <div>
               <div className="home">
                    <div className="header">
                        ЗООСВІТ м. ХМЕЛЬНИЦЬКОГО
                    </div>
                    <div className="home-slider">
                    <Carousel>
                <div>
                    <img src={require("..//img/slider/1.jpg")} />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                <img src={require("..//img/slider/2.jpg")} />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                <img src={require("..//img/slider/3.jpg")} />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
            </Carousel>
                    </div>
                    <div className="home-vistaavki">
                        <div className="home-vistavki-header">
                            Найближча виставка
                        </div>
                        <div className="home-vistavki-text">
                        Хмельницький обласний клуб запрошує усіх на виставку собак усіх порід "Кубок Поділля - 2019" та "Кубок Хмельнничини - 2019"
                        </div>
                        <div className="home-vistavki-location">
                            Розташування: вул. Інститутська 11, стадіон ХНУ
                        </div>
                        <div className="home-vistavki-time">
                            Дата, час: 12 жовтня, 8:00
                        </div>
                        <div className="home-vistavki-phone">
                            Номер телефону: +38 (050) 158 66 25 
                        </div>
                    </div>
                    <div className="map-header">
                            Карта ЗооТочок м. Хмельницького
                        </div>
                    <div className="map">
                        
                    <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1TLV2f4Fr-NF_quHDd3B3IOWTe2Quj33F"
                     width="1360" height="520"></iframe>
                    </div>
                    

                    <div className="home-footer">
                        Copyright Bohdan Tomchishen 2019
                    </div>

                </div>
            </div>

        )
    }
}

export default Homef