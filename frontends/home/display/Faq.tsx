import { Cemjsx, Static } from "cemjs-all"
import faq from '@json/faq'

export default function () {
  return (
    <section class="home-gim pb-5 wrapper">
      <h2 class="section-title text-align__center pb-3">Часто задаваемые вопросы</h2>

      <ul class="accordeon">
        {
          faq.map((item, index) => {
            return (
              <li class="accordeon_item">
                <input type="radio" name="accordeon" id={`accordeon_${index}`} checked={item.hidden} />
                <label for={`accordeon_${index}`}>{item.question}</label>
                <div class="accordeon_content">
                  <p>{item.answer}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}