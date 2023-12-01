import { Cemjsx, Static } from "cemjs-all"
import advantages from '@json/advantages'


export default function () {
  return (
    <section class="home-advantages pb-5">
      <h2 class="section-title text-align-center font-medium py-3">Почему выгодно приобретать GIM</h2>

      <div class="home-advantages-slider-wrap">
        <div class="wrapper">
          <div class="home-advantages-slider">
            {
              advantages.map((item) => {
                return (
                  <div class="home-advantages-slider_item">
                    <img class="home-advantages-slider_item-image" src={item.icon} alt={item.text} />
                    <p class="home-advantages-slider_item-text">{item.text}</p>
                  </div>
                )
              })
            }
            <div class="home-advantages-slider-arrow home-advantages-slider-arrow__left">
              <span></span>
            </div>
            <div class="home-advantages-slider-arrow home-advantages-slider-arrow__right">
              <span></span>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}