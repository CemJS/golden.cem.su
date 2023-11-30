import { Cemjsx, Static } from "cemjs-all"
import mobile from '@images/mobile.png'

export default function () {
  return (
    <section class="home-marketplace pb-5 wrapper">
      <h2 class="section-title text-align__left mt-3">Маркетплэйс</h2>
      <div class="col-65-35 pt-2">
        <div class="home-about-info">
          <div>
            <p class="font-medium fz-1">Создай свой портфель</p>
            <p class="font-regular fz-1 pt-1">Представляет собой раздел, где пользователи могут легко покупать
              и продавать эти токены. Он обеспечивает удобство, ликвидность
              и прозрачность операций, позволяя инвесторам получить доступ к золотым активам без необходимости хранить физические слитки. </p>
            <p class="font-regular fz-1 pt-1">Пользователи могут использовать маркетплейс для обмена своих золотых монет на токены и наоборот, основываясь на актуальной рыночной цене золота. </p>
            <p class="font-regular fz-1 pt-1">Маркетплейс также обеспечивает безопасность и надежность операций, а также соответствие регуляторным требованиям.</p>
          </div>

          <a href="/marketplace" class="btn btn__yellow">
            Маркетплэйс
          </a>
        </div>
        <div class="f-xy-center home-marketplace-image">
          <img src={mobile} alt="Маркетплейс Золотой пай" />
        </div>
      </div>
    </section>
  )
}