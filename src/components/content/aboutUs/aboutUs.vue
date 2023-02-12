<template>
    <div class="about-us">
        <div class="about-us__strong-title">
            <img
                src="@icons/titleFourBlock.svg"
                alt="Подумай о нас"
            >
        </div>
        <div class="about-us__info">
            <div>
                <div class="about-us__info-line">
                    Компания <span><b>"Staff Future"</b></span> занимается помощью в организации трудовых процессов на производствах,
                  складах, строительных площадкаx, в общепите, клининге, и других местах, где требуется рабочий персонал.
                    Сегодня мы готовы предложить Вам внушительный перечень работ выполняемых нашими специалистами.
                </div>
                <div class="about-us__info-line">
                  Доверившись нам, заказчик может <b>переключить всё своё внимание</b> на проработку аспектов, связанных с
                  вопросами производства: осуществлять переговоры с деловыми партнёрами, заниматься развитием предприятия,
                  привлекать новых клиентов.
                </div>
                <div class="about-us__info-line">
                  Мы избавим вас от необходимости заниматься <b>оформлением сотрудников, расчётом зарплат и всем,
                  связанным с кадрами.</b> Реальная возможность сэкономить на кадровике и снять нагрузку со своего бухгалтера!
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.about-us {
    margin-top: 20vh;
    padding-top: 10vh;
    display: flex;

    .about-us__strong-title {
        position: sticky;
        top: 0;
        left: 0;

        display: flex;
        height: 100%;
        object-fit: contain;
    }

    .about-us__info {
        flex-shrink: 0;

        .about-us__info-line,
        .about-us__info-line span {
            font-size: 24px;
            line-height: 1.4em;
            word-spacing: 1rem;

            &:not(:first-child) {
                margin-top: 5vh;
            }
        }

        .about-us__info-line span {
            color: map-get($colors, 'primary-base');
            text-shadow: 1px 1px 1px rgba(0,0,0,.1);
        }
    }
}

@media (min-width: #{map-get($sizes, 'md')}) {
    .about-us {
        .about-us__strong-title {
            width: 50%;
        }

        .about-us__info {
            width: 50%;
            padding: 0 5%;
            box-sizing: border-box;

            border-left: 1px solid grey;
        }
    }
}

@media (max-width: #{map-get($sizes, 'md')}) {
    .about-us {
        flex-direction: column;
        max-width: 100vw;

        overflow: hidden;

        .about-us__strong-title {
            max-width: 100%;

            img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
        }

        .about-us__info {
            border-top: 1px solid grey;
            padding-top: 5vh;
        }
    }
}
</style>
