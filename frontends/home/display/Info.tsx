import { Cemjsx, Static } from "cemjs-all"
import lighter from '@svg/lighter.svg'

export default function () {
  return (
    <section class="pb-5 wrapper">
      <div class="wrapper">
        <div class="home-info col-65-35">
          <div class="home-info_desc">
            <p>Стать пайщиком, где токен приравнен к стоимости физического золота, предоставляет инвесторам возможность инвестировать в золото, обеспечивая стабильность, защиту от инфляции и удобство управления активами.</p>
            <button class="btn btn__black">
              Регистрация
            </button>
          </div>
          <div class="f-xy-center">
            <img src={lighter} alt="Информация о платформе Золотой пай" />
          </div>
        </div>
      </div>
    </section>
  )
}