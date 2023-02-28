<template>
    <transition name="fade">
        <div
            v-if="active"
            class="dialog-form"
            role="dialog"
        >
            <div class="dialog-form__overlay" @click="closeDialog"></div>
            <transition name="slide-x" mode="out-in">
                <form
                    v-if="!sendSuccess"
                    class="dialog-form__content"
                    @submit="onSubmit"
                >
                    <div>
                        <div class="dialog-form__title-right">
                            <p>Рады вас видеть</p>
                            <p><b>Оформите заявку</b></p>
                        </div>
                        <div class="dialog-form__inputs">
                            <dp-input
                                label="Имя"
                                v-model="form.name"
                                :error="errors.name"
                                @input="errors.name = false"
                            />
                            <dp-input
                                ref="numberPhone"
                                label="Номер"
                                v-model="form.phone"
                                :error="errors.phone"
                                @input="errors.phone = false"
                            />
                            <dp-input
                                label="Город"
                                v-model="form.city"
                                :error="errors.city"
                                @input="errors.city = false"
                            />
                        </div>
                    </div>
                    <div class="dialog-form__actions">
                        <dp-button type="submit">
                            Отправить
                        </dp-button>
                        <dp-button
                            filled
                            @click="closeDialog"
                        >
                            Отмена
                        </dp-button>
                    </div>
                </form>
                <div
                    v-else
                    class="dialog-form__content"
                >
                    <div class="dialog-form__title-center">
                        <p>
                            Будем рады работать с вами
                        </p>
                        <p>
                            <b>Ваша заявка успешно отправлена</b>
                        </p>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import DpInput from "@/components/ui/dpInput";
export default {
    components: {DpInput},
    data() {
        return {
            form: {
                name: "",
                phone: "",
                city: "",
            },
            errors: {
                name: false,
                phone: false,
                city: false,
            },
            sendSuccess: false,
        }
    },
    watch: {
        'form.phone'(newValue, oldValue) {
            const formattedNewValue = newValue.replace(/[^0-9 ]/,'');
            this.form.phone = formattedNewValue;

            if(formattedNewValue.length >= oldValue.length) {
                if (formattedNewValue.length > 15) {
                    this.form.phone = formattedNewValue.slice(0, -1);
                }

                if ([1,5,9,12].includes(formattedNewValue.length)) {
                    this.form.phone += ' ';
                }
            } else if ([2,6,10,13].includes(oldValue.length)) {
                this.form.phone = formattedNewValue.slice(0, -1);
            }

            if (this.$refs?.numberPhone) {
                this.$refs.numberPhone.$refs.input.value = this.form.phone;
            }
        }
    },
    computed: {
        active() {
            return this.$store.getters.dialogFormActive;
        },
        isDataValid() {
            return Object.entries(this.form).every(([key, value]) => {
                const valid = key !== 'phone'
                    ? Boolean(value)
                    : Boolean(value) && value.length === 15;

                this.errors[key] = !valid;
                return valid;
            });
        },
    },
    methods: {
        closeDialog() {
            window.closeDialog();
        },
        onSubmit(event) {
            event.preventDefault();

            if (this.isDataValid) {
                fetch('http://yousolutions.ru/goo.php', {
                    method: "POST",
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        "Content-Type": "application/json",
                    },
                    mode: 'no-cors',
                    body: JSON.stringify(this.form),
                })
                    .then(() => {
                        this.sendSuccess = true;
                        setTimeout(() => {
                            window.closeDialog();
                            this.sendSuccess = false;
                            this.form = {
                                name: "",
                                phone: "",
                                city: "",
                            };
                        }, 2000);
                    })
                    .catch(err => console.log(err));
            }
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.dialog-form {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9990;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .dialog-form__overlay {
        position: absolute;
        z-index: 9991;

        width: 100%;
        height: 100%;

        background: rgba(0,0,0,.4);
    }

    .dialog-form__content {
        position: relative;
        z-index: 9992;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        height: 60%;
        min-height: 300px;
        padding: 5vh 5vw;

        background: linear-gradient(
                -45deg,
                map-get($colors, 'info'),
                map-get($colors, 'light-shadow') 20%,
                map-get($colors, 'light-shadow') 80%,
                map-get($colors, 'primary-base')
        );
        border-radius: 24px;

        .dialog-form__title-right {
            text-align: end;

            p {
                font-size: calc(20px + 0.2vw);
                line-height: 1.2em;
            }

            p + p {
                font-size: calc(20px + 0.5vw);
                margin-top: 0.5vh;
            }
        }

        .dialog-form__title-center {
            text-align: center;

            p {
                font-size: calc(16px + 2vw);
                line-height: 1.2em;
            }

            p + p {
                margin-top: 5vh;
                color: #0bbd46;
            }
        }

        .dialog-form__inputs {
            float: right;
            margin-top: 5vh;

            .dp-input {
                &:not(:first-child) {
                    margin-top: 2vh;
                }
            }
        }
    }

    .dialog-form__actions {
        display: flex;
        justify-content: flex-end;
        width: 100%;

        button {
            padding: 12px 20px;
            border: 2px solid map-get($colors, 'primary-base');

            background: white;
        }

        button:nth-child(2) {
            margin-left: 16px;
        }
    }
}

@media (min-width: #{map-get($sizes, 'md')}) {
    .dialog-form__content {
        width: 50%;

        .dialog-form__inputs {
            width: 60%;
        }
    }
}

@media (max-width: #{map-get($sizes, 'md')}) {
    .dialog-form__content {
        width: 90%;

        .dialog-form__inputs {
            width: 100%;
        }
    }
}
</style>
