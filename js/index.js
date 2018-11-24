$(function () {

    // 屏幕的宽度改变的事件
    window.onresize = function () {
        // console.log(123);
        setFont();
    }
    setFont();

    function setFont() {
        // 要计算的fontsize的大小=  基础值 *  要适配的屏幕的宽度/   设计稿的宽度 （640）

        // 基础值 100px
        var baseVal = 100;
        // 设计稿的宽度 320
        var pageWidth = 640;
        // 要适配的屏幕的宽度= 当前的屏幕的宽度
        var screenWidth = document.querySelector("html").offsetWidth;
        // 要设置的字体的大小
        var fz = baseVal * screenWidth / pageWidth;
        // 把字体的大小设置到 htm标签中
        document.querySelector("html").style.fontSize = fz + "px";
    }

    window.onload = function () {
        var mySwiper = new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }


})