import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('modal__active');
        // this.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('modal__active');
    setTimeout(() => {
        Fn.clearData()
        // this.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.loader = () => {
    Static.tabs = false;


    Static.formRegistration = {
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Введите ваш E-mail",
            view: false,
            disable: false
        },
        pass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Введите пароль",
            view: false,
            disable: false
        },
        passConfirm: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Подтвердите пароль",
            view: false,
            disable: false
        },
        isValid: false,
    }

    Static.formInput = {
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Введите ваш E-mail",
            view: false,
            disable: false
        },
        pass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Введите пароль",
            view: false,
            disable: false
        },
        isValid: false,
    }

    return
}

front.display = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

export { front }