import React from 'react'

class Shelterf extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    Перетримка
                </div>
                <div className="info">
                <p className="accept">Уявімо ситуацію, що ви йдучи по вулиці знайшли маленьке кошеня, але ви розумієте, що воно не 
                зможе вижити на вулиці, тому що існує багато небезпек. Проте, у вас немає можливості взяти його додому, у такому
                ви можете зайти на дану вкладку і побачити людей, які могли би тимчасово забрати це кошеня до себе, а потім передати до притулку.</p>
                </div>
                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/shelter/shelter.jpg")} />
                        </div>
                        <div className="content-text-apteki">
                            <div className="content-header">
                                Ігор Васильович
                            </div>
                            <div className="content-location-shelter">
                                <strong>Вік: </strong>31 рік<br />
                                <strong>Адреса: </strong>Панаса Мирного 4/1<br />
                                <strong>Номер телефона: </strong>+38-068-320-9999<br />
                                <div className="content-status">
                                </div>У пошуку
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

export default Shelterf