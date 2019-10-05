import React from 'react'

class Shopf extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="header">
                        АВТОМАТИ З СПЕЦІАЛЬНИМИ ПАКЕТАМИ
                </div>

                    <div className="info">
                        &emsp;Спеціалізовані магазини займаються продажем кормів, іграшок, домівок, ошейників та поводків, засобів для догляду за вашими домашніми улюбленцями та багато іншого. Також іноді зоомагазини надають різноманітні послуги від підрізання кігтів до обробки від кліщів та паразитів.
                <p className="accept">Про такі спеціалізовані зоомагазини ви можете прочитати нижче:</p>
                    </div>

                    <div className="content">
                        <div className="content-flex">
                            <div className="content-photo">
                                <img src={require("../img/shop/friend.jpg")} />
                            </div>
                            <div className="content-text-friend">
                                <div className="content-header">
                                    ЗооМагазин "Вірні друзі"
                                    </div>
                                <div className="content-location-friend">
                                    <ul>До ваших послуг у зоомагазині «Вірні друзі»:
                                    <li>корм для тварин, птахів, рибок;</li>
                                        <li>сухий корм на вагу;</li>
                                        <li>іграшки та аксесуари для домашніх улюбленців;</li>
                                        <li>спеціальні будиночки для тварин;</li>
                                        <li>великий вибір повідців та ошийників;</li>
                                        <li>засоби по догляду за тваринами;</li>
                                        <li>різноманітні ласощі та «смаколики» для тварин.</li>
                                    </ul>
                                    Розташування: <strong>вул. Панаса Мирного 4/1</strong><br />
                                    Номер телефону: +38-067-593-2220
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-flex">
                            <div className="content-photo">
                                <img src={require("../img/shop/kitpes.png")} />
                            </div>
                            <div className="content-text-friend">
                                <div className="content-header">
                                    ЗооМагазин "КІТ-ПЕС"
                                    </div>
                                <div className="content-location-friend">
                                    <ul>До ваших послуг у зоомагазині «КІТ-ПЕС»:
                                    <li>корми для різних видів тварин (для кішок, котів, папужок, рептилій, черепах та ін.);</li>
                                        <li>вітаміни та ліки для тварин;</li>
                                        <li>акваріуми, тераріуми, клітки, «будиночки» для псів чи котів тощо;</li>
                                        <li>усілякі веселі іграшки та корисні аксесуари для тварин;</li>
                                        <li>великий вибір повідців та ошийників.</li>
                                    </ul>
                                    Розташування: <strong>Старокостянтинівське шосе 3</strong><br />
                                    Номер телефону: +38-067-900-0613 +38-097-119-7570
                                </div>
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

export default Shopf