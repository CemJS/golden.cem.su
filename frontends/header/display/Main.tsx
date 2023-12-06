import { Cemjsx, Fn, front } from "cemjs-all"
import cancel from '@svg/icons/cancel.svg'
import person from '@svg/icons/yellow/personYellow.svg'
import menu from '@json/menu'

const RenderMenu = function ({ items }) {
    return (
        <ul class="header-nav-list text-light">
            <li
                onclick={() => {
                    Fn.initOne("modalSoon", {
                        title: "В разработке"
                    })
                }}
            >
                <a class="header-nav-list_item">
                    О нас
                </a>
            </li>
            <li
                onclick={() => {
                    Fn.initOne("modalSoon", {
                        title: "В разработке"
                    })
                }}
            >
                <a class="header-nav-list_item">
                    Контакты
                </a>
            </li>
            <li
                onclick={() => {
                    Fn.initOne("modalSoon", {
                        title: "В разработке"
                    })
                }}
            >
                <a class="header-nav-list_item">
                    Маркетплэйс
                </a>
            </li>
            <li>
                <a href="/connection" class="header-nav-list_item" onclick={Fn.link}>
                    Связаться
                </a>
            </li>
            {/* {
                items.map(item => {
                    return (
                        <li
                            onclick={() => {
                                Fn.initOne("modalSoon", {
                                    title: "В разработке"
                                })
                            }}
                        >
                            <a href={item.link} class="header-nav-list_item">
                                {item.name}
                            </a>
                        </li>
                    )
                })
            } */}
        </ul>
    )
}

const RenderMobileMenu = function ({ items }) {
    return (
        <div
            ref="mobileMenu"
            class={["header-mobile-menu", front.Variable.openSidebar ? "header-mobile-menu__active" : null]}
        >
            <div class="d-flex justify-content-between align-items-center">
                <span class="font-medium header-mobile-menu_title">Меню</span>
                <button
                    class="btn-close"
                    onclick={() => {
                        front.Variable.openSidebar = false;
                        Fn.init()
                    }}
                >
                    <img src={cancel} alt="Закрыть" />
                </button>
            </div>
            <ul class="header-mobile-list">
                {
                    items.map((item) => {
                        return (
                            <li>
                                <a
                                    href={item.link}
                                    class="header-mobile-list_item"
                                    onclick={(e) => {
                                        e.preventDefault()
                                        window.scrollTo({
                                            top: document.querySelector(item.link).offsetTop - 85,
                                            behavior: "smooth"
                                        })
                                        front.Variable.openSidebar = false;
                                        Fn.init()
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <a href="/" class="logo text-black">
                Золотой Пай
            </a>
        </div>
    )
}

export default function () {
    return (
        <div class="wrapper">
            <div class="header-inner">
                <div class="header-logo">
                    <a href="/" class="logo">
                        Золотой Пай
                    </a>
                </div>
                <nav class="header-nav">
                    <RenderMenu items={menu} />
                    <div class="header-btns">
                        <button
                            class="btn btn-outline__yellow font-regular"
                            onclick={() => {
                                Fn.initOne("modalAuthorization", {})
                            }}
                        >
                            <span>Регистрация / Вход</span>
                            <img src={person} alt="Регистрация / Вход" />
                        </button>
                        <div
                            ref="burger"
                            class="header-burger"
                            onclick={() => {
                                front.Variable.openSidebar = !front.Variable.openSidebar
                                Fn.initAll()
                            }}
                        >
                            <span class="header-burger_item"></span>
                            <span class="header-burger_item"></span>
                            <span class="header-burger_item"></span>
                        </div>
                    </div>
                </nav>
                <RenderMobileMenu items={menu} />
            </div>
        </div>
    )
}