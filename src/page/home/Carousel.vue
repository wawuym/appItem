<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/carousel/carousel1.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../../assets/carousel/carousel2.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../../assets/carousel/carousel3.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../../assets/carousel/carousel4.jpg">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
import "swiper-css";
import Swiper from "swiper-js";

export default {
    name: "Swiper",
    mounted() {
        new Swiper('.swiper-container', {
            // 图片间的间隙
            spaceBetween: 0,
            centeredSlides: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
};
</script>

<style scoped>
html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper-container {
    width: 100%;
    height: auto;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide img {
    width: 100%;
}
</style>
