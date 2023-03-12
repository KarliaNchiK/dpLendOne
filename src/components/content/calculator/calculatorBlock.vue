<template>
    <div
        class="calculator-block"
        data-aos="zoom-in"
    >
        <div class="calculator-block__input-data">
            <div>
                <div class="calculator-block__row">
                    <dp-input
                        v-model="resultData.workDays.value"
                        type="number"
                        label="Количество смен в месяц"
                        :error="errors.workDays"
                    />
                    <dp-input
                        v-model="resultData.numberPersons.value"
                        type="number"
                        label="Количество персонала"
                        class="calculator-block__number-person"
                        :error="errors.numberPersons"
                    />
                </div>
                <div class="calculator-block__row">
                    <dp-dropdown
                        v-model="resultData.typePerson.value"
                        label="Кто вам нужен"
                        :options="staffs"
                        :error="errors.typePerson"
                    />
                </div>
                <div class="calculator-block__row">
                    <dp-dropdown
                        v-model="resultData.typeWork.value"
                        label="Выберете тип смены"
                        :options="typesShifts"
                        :error="errors.typeWork"
                    />
                </div>
            </div>
            <div class="calculator-block__row calculator-block__checkboxes">
                <dp-checkbox
                    v-for="checkbox in checkBoxes"
                    :key="checkbox.modifier"
                    :text="checkbox.title"
                    :tippy-content="checkbox.tippy"
                    v-model="checkbox.active"
                />
            </div>
        </div>
        <dp-button
            class="calculator-block__result-button"
            @click="getResults"
        >
            Рассчитать стоимость
        </dp-button>
        <div
            v-if="haveResult"
            class="calculator-block__result calculator-result-block"
        >
            <div class="calculator-result-block__results">
                <calculator-result-line
                    v-for="result in results"
                    :key="result.title"
                    v-bind="result"
                />
            </div>
        </div>
        <div class="calculator-block__result-info">
            <div>
                Есть вопросы по стоимости услуг?
            </div>
            <div>
                Звоните и получите более подробную информацию
            </div>
            <div>
                8 (843) 245 68 82
            </div>
        </div>
    </div>
</template>

<script>
import {staffs, typesShifts} from "@/plugins/const";
import CalculatorResultLine from "@/components/content/calculator/calculatorResultLine";
import DpButton from "@/components/ui/dpButton";

const percentageOptions = [
    {
        numberPersons: 0,
        percent: 1.28,
    },
    {
        numberPersons: 7,
        percent: 1.35,
    },
    {
        numberPersons: 15,
        percent: 1.42,
    },
    {
        numberPersons: 25,
        percent: 1.45,
    }
];

export default {
    components: {
        DpButton,
        CalculatorResultLine
    },
    data() {
        return {
            staffs,
            typesShifts,
            haveResult: false,
            resultData: {
                workDays: {
                    value: null,
                    validation: this.checkNumberValid,
                    getValue: function() {
                        return Number(this.value);
                    },
                },
                numberPersons: {
                    value: null,
                    validation: this.checkNumberValid,
                    getValue: function() {
                        return Number(this.value);
                    },
                },
                typePerson: {
                    value: {},
                    validation: this.checkObjectValid,
                    getValue: function() {
                        return this.value.price;
                    },
                },
                typeWork: {
                    value: {},
                    validation: this.checkObjectValid,
                    getValue: function() {
                        return this.value.hours;
                    },
                },
            },
            checkBoxes: [
                {
                    title: 'с НДС',
                    modifier: 1.3,
                    active: false,
                    tippy: "Учитывать затраты на оплату НДС",
                },
                {
                    title: 'Доставка до места',
                    modifier: 1.07,
                    active: false,
                    tippy: "Учитывать затраты доставки персонала до места",
                },
                {
                    title: 'Наличие мед.книжки',
                    modifier: 1.12,
                    active: false,
                    tippy: "Учитывать наличие мед. книжек у персонала",
                },
            ],
            errors: {
                workDays: false,
                numberPersons: false,
                typePerson: false,
                typeWork: false,
            },
            results: [],
        }
    },
    computed: {
        percentPerState() {
            let percent;

            percentageOptions.every(percentData => {
                if (this.resultData.numberPersons.value > percentData.numberPersons) {
                    percent = percentData.percent;
                    return true;
                }

                return false;
            });

            return percent;
        }
    },
    methods: {
        checkNumberValid(number) {
            return Boolean(number) && Number(number) > 0;
        },
        checkObjectValid(objet) {
            return Object.keys(objet).length > 0;
        },
        validation() {
            Object.keys(this.resultData).map(key => {
                const resultData = this.resultData[key];

                this.errors[key] = !resultData.validation(resultData.value);

            });

            return Object.values(this.errors).every(error => !error);
        },
        getResults() {
            if (!this.validation()) {
                this.haveResult = false;
                return;
            }

            let ourOffer = Object.values(this.resultData).reduce(
                (acc, currentValue) => acc * currentValue.getValue(),
                1
            );

            ourOffer = Object.values(this.checkBoxes).reduce(
                (acc, currentValue) => currentValue.active ? acc * currentValue.modifier : acc,
                ourOffer
            );

            this.results = [
                {
                    title: 'При работе с нами <br/>(руб/мес)',
                    value: new Intl.NumberFormat("ru", { maximumFractionDigits: 2 }).format(ourOffer),
                },
                {
                    title: 'Расходы при собственном штате <br/>(руб/мес)',
                    value: new Intl.NumberFormat("ru", { maximumFractionDigits: 2 }).format(ourOffer * this.percentPerState),
                },
                {
                    title: '<span> % </span> Вашей выгоды работая с нами',
                    value: ((this.percentPerState - 1) * 100).toFixed(),
                    modifier: 'percent'
                },
            ];

            this.haveResult = true;
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.calculator-block {
    .calculator-block__row {
        display: flex;
    }

    .calculator-block__checkboxes {
        flex-direction: column;
        justify-content: space-around;
    }

    .calculator-block__number-person {
        margin-left: 1vw;
    }

    .calculator-block__input-data {
        margin-bottom: 2vh;

        div:first-child {
            flex-grow: 1;

            .calculator-block__row:not(:last-child) {
                margin-bottom: 2vh;
            }
        }
    }

    .calculator-block__result-button {
        padding: 1vh 2vw;
        margin-bottom: 2vh;

        border-width: 2px;
        border-color: map-get($colors, 'primary-base');
        background: white;
    }

    .calculator-block__result {
        margin-bottom: 5vh;

        .calculator-result-block__title {
            text-align: center;
            font-size: calc(16px + 1.5vw);
            line-height: 1em;
        }

        .calculator-result-block__results {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 2vh;
        }
    }

    .calculator-block__result-info {
        font-size: calc(14px + 0.4vw);
        line-height: 1.4em;

        div {
            font-size: inherit;
            line-height: inherit;

            &:last-child {
                color: map-get($colors, 'primary-base');
                font-weight: 600;
            }
        }
    }
}

@media (min-width: map-get($sizes, 'lg')) {
    .calculator-block__input-data {
        display: flex;

        .calculator-block__checkboxes {
            margin: 0 2vw;
        }
    }
}

@media (max-width: map-get($sizes, 'lg')) {
    .calculator-block__input-data {
        .calculator-block__checkboxes {
            row-gap: 1vh;
            margin-top: 2vh;
        }
    }
}
</style>
