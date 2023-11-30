import { Cemjsx, Static } from "cemjs-all"
import profitably from '@json/profitably'

export default function () {
  return (
    <section class="home-profitably py-5 wrapper">
      <h2 class="section-title text-align__center">Почему выгодно стать пайщиком</h2>
      <div class="home-profitably-content pt-2">
        {
          profitably.map(item => {
            return (
              <div class="home-profitably-content_item">
                <div class="home-profitably-content_image">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3 class="home-profitably-content_title font-medium">{item.title}</h3>
                <p class="home-profitably-content_desc font-regular">{item.desc}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}