import { Cemjsx, Func, Ref } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"

export default function () {
  return (
    <div>
      <div class="modal" ref="modal" init={Func.show}
        onclick={(e: any) => {
          if (e.target === Ref.modalBody) {
            Func.close()
          }
        }}>
        <div class="modal_body" ref="modalBody">
          <div class="modal_content modal_content-soon">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </div>
  )
}