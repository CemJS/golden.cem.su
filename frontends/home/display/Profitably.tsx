import { Cemjsx, Static } from "cemjs-all"
import profitably from '@json/profitably'

export default function () {
  return (
    <div class="wrapper">
      <section class="home-profitably">
        <h2 class="section-title">Почему выгодно стать пайщиком</h2>
        <div class="home-profitably-content pt-2">
          {
            profitably.map(item => {
              return (
                <div class="home-profitably-content_item">
                  <div class="home-profitably-content_item-header">
                    <div class="home-profitably-content_image">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <h3 class="home-profitably-content_title font-medium">{item.title}</h3>
                  </div>

                  <p class="home-profitably-content_desc text font-regular">{item.desc}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}