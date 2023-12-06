import { Cemjsx, Static, Fn } from "cemjs-all"


const RenderBreadCrumbs = function () {
    return (
        <div class="bread-crums">
            <a class="bread-crums_item text" href="/" onclick={Fn.link}>Главная</a>
            <span class="bread-crums_item-current text">Свяжитесь с нами</span>
        </div>
    )
}

const RenderConnectionForm = function () {
    return (
        <div class="connection-form">
            <div class="field">
                <input class="field-input" type="text" placeholder={Static.form.fullName.placeholder} />
            </div>

            <div class="connection-form-row">
                <div class="field">
                    <input class="field-input" type="text" placeholder={Static.form.email.placeholder} />
                </div>
                <div class="field">
                    <input class="field-input" type="text" placeholder={Static.form.phone.placeholder} />
                </div>
            </div>

            <div class="field">
                <textarea class="field-textarea" rows="3" placeholder={Static.form.comment.placeholder}></textarea>
            </div>

            <button class="btn btn__white">Отправить</button>
        </div>
    )
}

export default function () {
    return (
        <div class="wrapper">
            <RenderBreadCrumbs />
            <section class="connection">
                <div>
                    <h1 class="section-title">Свяжитесь с нами</h1>
                    <p class="text pt-1">Мы всегда рады общению с нашими клиентами
                        и партнерами. Если у вас есть вопросы, предложения или просто хотите поделиться своим мнением, мы с нетерпением ждем вашего сообщения.</p>
                    <p class="text pt-1">Вы можете связаться с нами по телефону, электронной почте или заполнив форму обратной связи на этой странице. Мы гарантируем конфиденциальность ваших данных и обещаем ответить в кратчайшие сроки.</p>
                </div>

                <div class="connection-form_wrap">
                    <RenderConnectionForm />

                    <p class="text pt-1">Нажимая на кнопку, я соглашаюсь на <a href="/" class="text-underline">обработку персональных данных</a> и с <a href="/" class="text-underline">правилами пользования Платформой</a></p>
                </div>
            </section>
            <section class="connection-address">
                <h2 class="section-subtitle pb-1">Юридический адрес</h2>
                <p class="text">119021, г. Москва, ул. Тимура Фрунзе, дом 11, корпус 2, этаж 1, помещение 1, комната 75</p>
            </section>
        </div>
    )
}