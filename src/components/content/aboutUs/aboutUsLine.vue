<template>
    <div class="about-us-line" :data-aos="aos">
        <div class="about-us-title" v-html="title"></div>
        <div class="about-us-line__text" v-html="text"></div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        text: String,
        aos: String,
    }
}
</script>

<style lang="scss">
@use '@/assets/css/colors.scss' as *;
@use '@/assets/css/sizes.scss' as *;

.about-us-line {
    position: relative;

    padding: 2vh 2vw;

    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: 20%;
    border-radius: 0.5em;
    box-shadow: 0 0 12px rgba(0,0,0,.4);

    .about-us-title {
        font-size: calc(14px + 1vmin);
        font-weight: 500;
        line-height: 1.4em;

        margin-bottom: 2vh;
    }

    .about-us-line__text,
    .about-us-line__text span {
        font-size: calc(14px + 0.6vmin);
        line-height: 1.4em;
        word-spacing: 1rem;
    }

    .about-us-line__text span {
        font-weight: 600;
        text-shadow: 1px 1px 1px rgba(0,0,0,.1);
    }

    &:nth-child(1) {
        background-image: url("@imgs/about/first2.jpg");
    }

    &:nth-child(2) {
        background-image: url("@imgs/about/thirty2.jpg");
    }

    &:nth-child(3) {
        background-image: url("@imgs/about/second2.jpg");
    }
}

@media (min-width: #{map-get($sizes, 'md')}) {
    .about-us-line .about-us-line__text {
        width: 45%;
    }
}

@media (max-width: #{map-get($sizes, 'md')}) {
    .about-us-line__text {
        width: 100%;
    }
}
</style>
