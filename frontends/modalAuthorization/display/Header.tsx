import { Cemjsx, Static, Func } from "cemjs-all"
import cancel from '@svg/icons/cancel.svg'

export default function () {
    return (
        <button class="modal_button-close" onclick={Func.close}>
            <img src={cancel} alt="Закрыть" />
        </button>
    )
}