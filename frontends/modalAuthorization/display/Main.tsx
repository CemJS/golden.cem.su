import { Cemjsx, Static, Ref, Fn } from "cemjs-all"
import person from '@svg/icons/black/personBlack.svg'

const RenderTabs = function () {
    return (
        <div class="tabs">
            <span
                class="tabs_item"
                onclick={() => {
                    Static.tabs = true;
                    Fn.init();
                }}
            >
                Вход
            </span>
            <span
                class="tabs_item"
                onclick={() => {
                    Static.tabs = false;
                    Fn.init();
                }}
            >
                Регистрация
            </span>
            <div class={["tabs-slider", Static.tabs ? "tabs-slider__active" : null]} ref="tabsSlider"></div>
        </div>
    )
}

const RenderInput = function () {
    return (
        <div class="modal-auth_wrap">
            <div class="field">
                <input type="text" class="field-input" placeholder={Static.formInput.email.placeholder} />
            </div>

            <div class="field">
                <input type="pass" class="field-input" placeholder={Static.formInput.pass.placeholder} />
            </div>
        </div>
    )
}

const RenderRegistration = function () {
    return (
        <div class="modal-auth_wrap">
            <div class="field">
                <input type="text" class="field-input" placeholder={Static.formRegistration.email.placeholder} />
            </div>

            <div class="field">
                <input type="pass" class="field-input" placeholder={Static.formRegistration.pass.placeholder} />
            </div>

            <div class="field">
                <input type="pass" class="field-input" placeholder={Static.formRegistration.passConfirm.placeholder} />
            </div>
        </div>
    )
}

export default function () {
    return (
        <main class="modal_main modal_main-auth">
            <div class="modal-auth_image">
                <img src={person} alt="Авторизация" />
            </div>

            <RenderTabs />

            {Static.tabs ? <RenderInput /> : <RenderRegistration />}

            <button class="btn btn__black">{`${Static.tabs ? 'Вход' : 'Регистрация'}`}</button>

        </main>
    )
}