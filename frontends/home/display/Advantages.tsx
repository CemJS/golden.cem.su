import { Cemjsx, Static, Fn } from "cemjs-all"
import advantages from '@json/advantages'


export default function () {
  return (
    <section class="home-advantages">
      <div class="wrapper">
        <h2 class="section-title font-medium">Почему выгодно приобретать GIM</h2>
      </div>

      <div class="home-advantages-slider-wrap">
        <div class="wrapper">
          <div class="home-advantages-slider">
            {
              advantages.map((item) => {
                return (
                  <div
                    class={[
                      "home-advantages-slider_item",
                      item.hidden ? "home-advantages-slider_item-mobile" : null]}>
                    <img class="home-advantages-slider_item-image" src={item.icon} alt={item.text} />
                    <p class="home-advantages-slider_item-text">{item.text}</p>
                  </div>
                )
              })
            }
            <div class="home-advantages-slider-arrow home-advantages-slider-arrow__left"

              onclick={() => {
                Fn.initOne("modalSoon", {
                  title: "В разработке"
                })
              }}
            >
              <span></span>
            </div>
            <div class="home-advantages-slider-arrow home-advantages-slider-arrow__right"
              onclick={() => {
                Fn.initOne("modalSoon", {
                  title: "В разработке"
                })
              }}
            >
              <span></span>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}