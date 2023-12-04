import { Cemjsx, Static, Fn } from "cemjs-all"
import lighter from '@svg/lighter.svg'

export default function () {
  return (
    <section class="wrapper">
      <div class="home-info">
        <div class="home-info_desc">
          <p class="text">Стать пайщиком, где токен приравнен к стоимости физического золота, предоставляет инвесторам возможность инвестировать в золото, обеспечивая стабильность, защиту от инфляции и удобство управления активами.</p>
          <button
            class="btn btn__black"
            onclick={() => {
              Fn.initOne("modalSoon", {
                title: "В разработке"
              })
            }}
          >
            Регистрация
          </button>
        </div>
        <div class="f-xy-center home-info_image">
          <img src={lighter} alt="Информация о платформе Золотой пай" />
        </div>
      </div>
    </section>
  )
}