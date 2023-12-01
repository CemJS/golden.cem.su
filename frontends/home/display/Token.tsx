import { Cemjsx, Static } from "cemjs-all"

export default function () {
  return (
    <section class="home-about py-5 wrapper">
      <div>
        <h2>Информация о токене</h2>
        <p>Токены, приравненные
          к золоту, позволяют удобно хранить и управлять золотыми активами через цифровые кошельки или платформы.
        </p>
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