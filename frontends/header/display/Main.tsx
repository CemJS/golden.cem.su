import { Cemjsx } from "cemjs-all"
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
                                    <li>
                                        <a href={item.link} class="header-nav-list_item">
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button
                        class="btn btn-outline__yellow"
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    )
}