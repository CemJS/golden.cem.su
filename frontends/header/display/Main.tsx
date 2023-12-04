import { Cemjsx, Fn } from "cemjs-all"
import menu from '@json/menu'

export default function () {
    return (
        <div class="wrapper">
            <div class="header-inner">
                <div class="header-logo">
                    <a href="/" class="logo">
                        Золотой Пай
                    </a>
                </div>
                <div class="header-nav">
                    <ul class="header-nav-list text-light">
                        {
                            menu.map(item => {
                                return (
                                    <li
                                        onclick={() => {
                                            Fn.initOne("modalSoon", {
                                                title: "В разработке"
                                            })
                                        }}
                                    >
                                        <a class="header-nav-list_item">
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button
                        class="btn btn-outline__yellow"
                        onclick={() => {
                            Fn.initOne("modalSoon", {
                                title: "В разработке"
                            })
                        }}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    )
}