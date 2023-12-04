import { Cemjsx, Static } from "cemjs-all"
import arrowYellow from '@svg/arrowYellow.svg'
import arrowBlack from '@svg/arrowBlack.svg'

export default function () {
  return (
    <div>
      <h2 class="section-title text-align-center mb-3">Обмен токена на физическое золото</h2>
      <section class="home-exchange">
        <div class="wrapper">
          <div class="home-exchange-content">
            <div class="home-exchange-content_item home-exchange-content_item-l">
              <h3 class="home-exchange-title home-exchange-title__yellow text-light">Токен GIM</h3>
              <div class="home-exchange-info">
                <p class="text-light">Стоимость токена зависит от рыночной цены золота, что позволяет получить выгоду от его роста без необходимости хранить физические слитки. </p>
                <p class="text-light">Таким образом, это удобный и эффективный способ владения и инвестирования в золото.</p>
              </div>
            </div>
            <div class="home-exchange-content_item home-exchange-content_item-r">
              <div class="home-exchange-info">
                <p>1 GIM = 1 грамму золота.</p>
                <p>Покупать GIM токен можно частями от 0.2 грамма, при этом цена купленного золота фиксируется на момент внесения денег за покупку GIM токена.</p>
              </div>
              <h3 class="home-exchange-title home-exchange-title__black text-align-right">Золотые монеты</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}