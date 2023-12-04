import { Cemjsx, Func, Static } from "cemjs-all"

export default function () {
    return (
        <div>
            <button class="modal_button-close" onclick={Func.close}>X</button>
            <header class="modal_header">
                <h2 class="modal_header-title text-align-center">{Static.title}</h2>
            </header>
        </div>
    )
}