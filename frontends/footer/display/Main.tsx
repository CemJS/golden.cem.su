import { Cemjsx, Fn } from "cemjs-all"
import home from '@svg/socials/home.svg'
import phone from '@svg/socials/phone.svg'
import send from '@svg/socials/send.svg'
import facebook from '@svg/socials/facebook.svg'

const RenderFooterInfo = function () {
    return (
        <div class="flex-column justify-content-between">
            <div class="footer-logo">
                <a href="/" class="logo">
                    Золотой Пай
                </a>
                <p class="footer-info">Платформа предостовляющая возможность обмена физического золота на цифровой токен Gim. </p>
            </div>

            <ul class="footer-list">
                <li>
                    <a
                        href="https://yandex.ru/maps/970/novorossiysk/house/naberezhnaya_admirala_serebryakova_27a/Z04YcQ9kS0ACQFpufXtwc39mYw==/?indoorLevel=1&ll=37.784255%2C44.712357&z=17.06"
                        onclick={() => Fn.link}
                        class="footer-list_item"
                    >
                        <img src={home} alt="Местоположение" />
                        г. Новороссийск ул Адмирала Серебряколва 22
                    </a>
                </li>
                <li>
                    <a
                        href="tel: +7 355 632 466"
                        onclick={() => Fn.link}
                        class="footer-list_item"
                    >
                        <img src={phone} alt="Номер телефона" />
                        +7 355 632 466
                    </a>
                </li>
                <li>
                    <a
                        href="tel: +7 355 632 466"
                        onclick={() => Fn.link}
                        class="footer-list_item"
                    >
                        <img src={phone} alt="Номер телефона" />
                        +7 355 632 466
                    </a>
                </li>
                <li>
                    <a
                        href="tel: +7 355 632 466"
                        onclick={() => Fn.link}
                        class="footer-list_item"
                    >
                        <img src={phone} alt="Номер телефона" class="mr-05" />
                        +7 355 632 466
                    </a>
                </li>
            </ul>
        </div>
    )
}

const RenderFooterLists = function () {
    return (
        <div class="footer-middle flex-column justify-content-between">
            <div class="footer-lists">
                <div>
                    <span class="text-yellow footer-list_title">Золотой Пай</span>
                    <ul class="footer-list">
                        <li>
                            <a class="footer-list_item" href="#">О нас</a>
                        </li>
                        <li>
                            <a class="footer-list_item" href="#">Маркетплэйс</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <span class="text-yellow footer-list_title">Токен GIM</span>
                    <ul class="footer-list">
                        <li>
                            <a class="footer-list_item" href="#">Блокчейн</a>
                        </li>
                        <li>
                            <a class="footer-list_item" href="#">Токеномика</a>
                        </li>
                        <li>
                            <a class="footer-list_item" href="#">White Paper</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <span class="text-yellow footer-list_title">Преимущества</span>
                    <ul class="footer-list">
                        <li>
                            <a href="#" class="footer-list_item">Часто задаваемые вопросы</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-btns">
                <button class="btn btn-outline__yellow"
                    onclick={() => {
                        Fn.initOne("modalAuthorization", {})
                    }}
                >Регистрация / Вход</button>
                <button class="btn btn-outline__yellow"

                    onclick={() => {
                        Fn.initOne("modalSoon", {
                            title: "В разработке"
                        })
                    }}>Остались Вопросы ?</button>
            </div>
        </div>
    )
}

const RenderFooterDown = function () {
    return (
        <div class="footer-down">
            <ul class="footer-list mt-1">
                <li>
                    <a class="footer-list_item"
                        onclick={() => {
                            Fn.initOne("modalSoon", {
                                title: "В разработке"
                            })
                        }}
                    >Договор оферты</a>
                </li>
                <li>
                    <a class="footer-list_item"
                        onclick={() => {
                            Fn.initOne("modalSoon", {
                                title: "В разработке"
                            })
                        }}
                    >Политика конфидициальности</a>
                </li>
            </ul>
        </div>
    )
}

export default function () {
    return (
        <div class="wrapper">
            <div class="footer-inner">
                <div class="footer-top">
                    <RenderFooterInfo />
                    <RenderFooterLists />
                </div>
                <RenderFooterDown />
            </div>
        </div>
    )
}