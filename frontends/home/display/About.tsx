import { Cemjsx, Static } from "cemjs-all"
import chart from '@svg/grafik.svg'

export default function () {
  return (
    <section class="home-about pb-5 wrapper">
      <h2 class="section-title text-align__left">Золотой пай</h2>
      <div class="col-65-35 pt-2">
        <div class="home-about-info">
          <div>
            <p class="font-medium fz-1">Платформа Золотой пай предоставляет возможность обмена физического золота на цифровой токен Gim. </p>
            <p class="font-regular fz-1 pt-1">Наша платформа объединяет технологии блокчейн и золота, создавая инновационное решение для инвесторов и пользователей.</p>
            <p class="font-regular fz-1 pt-1">Платформы Золотой пай даёт возможность владения и торговли золотом в цифровой форме. Пользователи могут приобретать физическое золото и затем преобразовывать его в цифровой токен Gim, который представляет определенное количество золота. Этот токен может быть легко передан и торгуется на платформе.</p>
          </div>

          <a href="/about" class="btn btn__yellow">
            Узнать больше
          </a>
        </div>
        <div class="f-xy-center">
          <img src={chart} alt="Платформа Золотой пай" />
        </div>
      </div>
    </section>
  )
}