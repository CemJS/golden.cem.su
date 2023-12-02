import { Cemjsx, Static } from "cemjs-all"
import coin1 from '@svg/coin1.svg'
import coin2 from '@svg/coin2.svg'

export default function () {
  return (
    <section class="home-token py-5 wrapper">
      <div class="home-about-info">
        <h2 class="section-title">Информация о токене</h2>
        <p class="text">Токены, приравненные
          к золоту, позволяют удобно хранить и управлять золотыми активами через цифровые кошельки или платформы.
        </p>
        <div class="home-token-coins">
          <img src={coin1} alt="Золотой пай" />
          <img src={coin2} alt="Золотой пай" />
        </div>
        <button class="btn btn__black text-light">Connect wallet</button>
      </div>
      <div>
        <h3>Токен GIM</h3>
        <div class="row-line">
          <span>Эмиссия</span>
          <span>187 000 000</span>
        </div>

        <div class="row-line">
          <span>Капитализация</span>
          <span>$ 94 367 882</span>
        </div>

        <div class="row-line">
          <span>Блокчейн</span>
          <span>Binance Smart Chain</span>
        </div>
      </div>
    </section>
  )
}