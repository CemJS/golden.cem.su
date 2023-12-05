import { Cemjsx, Static, Fn } from "cemjs-all"

export default function () {
  return (
    <section class="home-presa">
      <div class="wrapper">
        <div class="home-presa-inner">
          <h1 class="section-title font-bold text-light">Владеть золотом<br /> теперь может каждый</h1>

          <div class="home-presa-info">
            <p>GIM - это цифровой токен, на 100 % обеспеченный золотом.
              Начиная с древних времен, люди использовали золото не только В качестве денежных средств, но и в качестве средства сбережения.</p>
            <p>Золото, благодаря своей уникальной прочности, блестящему внешнему виду и редкости, всегда было ценным и востребованным материалом. Оно давало людям уверенность В сохранении и приумножении их богатства.</p>
          </div>

          <button
            class="btn btn__yellow"
            onclick={() => {
              Fn.initOne("modalSoon", {
                title: "В разработке"
              })
            }}
          >КУПИТЬ GIM</button>
        </div>
      </div>
    </section>
  )
}