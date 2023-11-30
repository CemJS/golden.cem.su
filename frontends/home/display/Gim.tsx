import { Cemjsx, Static } from "cemjs-all"
import gim from '@json/gim'

export default function () {
  return (
    <section class="home-gim pb-5 wrapper">
      <h2 class="section-title text-align__left">Золотой пай</h2>
      <div class="home-gim-content">
        {
          gim.map(item => {
            return (
              <div class="home-gim-content_item">
                <div class="home-gim-content_info">
                  <h3 class="home-gim-content_title font-medium">{item.title}</h3>
                  <p class="home-gim-content_desc">{item.desc}</p>
                </div>
                <div class="home-gim-content_image">
                  <img src={item.icon} alt={item.title} />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}