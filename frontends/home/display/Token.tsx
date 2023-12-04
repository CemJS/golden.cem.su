import { Cemjsx, Static } from "cemjs-all"
import coin1 from '@svg/coin1.svg'
import coin2 from '@svg/coin2.svg'

export default function () {
  return (
    <div class="wrapper">
      <section class="home-token">
        <div class="home-about-info">
          <h2 class="section-title">Информация о токене</h2>
          <p class="text">Токены, приравненные
            к золоту, позволяют удобно хранить и управлять золотыми активами через цифровые кошельки или платформы.
          </p>

          <div class="home-token-wrapBtn">
            <div class="home-token-coins">
              <img src={coin1} alt="Золотой пай" />
              <img src={coin2} alt="Золотой пай" />
            </div>
            <button class="btn btn__black text-light">Connect wallet</button>
          </div>

        </div>

        <div class="home-token-gim">
          <h3 class="home-token-gim_title">Токен GIM</h3>
          <div class="home-token-gim_line">
            <span class="home-token-gim_key">Эмиссия</span>
            <span class="home-token-gim_value">187 000 000</span>
          </div>

          <div class="home-token-gim_line">
            <span class="home-token-gim_key">Капитализация</span>
            <span class="home-token-gim_value">$ 94 367 882</span>
          </div>

          <div class="home-token-gim_line">
            <span class="home-token-gim_key">Блокчейн</span>
            <span class="home-token-gim_value">Binance Smart Chain</span>
          </div>

          <div class="home-token-gim_btns">
            <div>
              <button class="btn btn-outline__black">White Paper</button>
              <button class="btn btn-outline__black">Токеномика</button>
            </div>
            <button class="btn btn-outline__black home-token-gim_btns-center">Смарт контракт</button>
          </div>
        </div>
      </section>

    </div>
  )
}