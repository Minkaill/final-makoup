import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

let mySwiper;

const enableSwiper = function () {
  mySwiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 1500,
    },
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: -10,
    keyboardControl: true,
    pagination: {
      el: ".swiper-pagination",
    },
    paginationClickable: true,
  });
};

enableSwiper();
