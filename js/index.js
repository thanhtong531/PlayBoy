const header = document.querySelector("#topbar");
const headerHeight = header?.clientHeight;
const navToggle = document.querySelector(".nav-toggle");
const countDown = document.querySelector(".countdown");
const daysText = document.querySelector(".days");
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");
const timeCountDown = countDown?.dataset.time;
const callToACtionbtns = document.querySelectorAll(".order__info-item");
const listProduct = document.querySelector(".list__product");
const showInfoOrder = listProduct?.querySelector(".product-show-order");
const productShow = document.querySelector(".product__pay");
const showAllProduct = listProduct?.querySelector(".product-list--buy");
const productShowHidden = listProduct?.querySelector(".product-hidden-order");
let show = true;
if (listProduct) {
  showInfoOrder.addEventListener("click", function () {
    if (show) {
      showAllProduct.classList.toggle("show");
      showInfoOrder.innerHTML = `Ẩn thông tin đơn hàng <i class="fa fa-caret-down" aria-hidden="true"></i> `;
      show = false;
    } else {
      showAllProduct.classList.remove("show");
      showInfoOrder.innerHTML = `Hiển thị thông tin đơn hàng <i class="fa fa-caret-down" aria-hidden="true"></i> `;
      show = true;
    }
  });
}

const codeSaleLabel = document.querySelectorAll(".code__sale-label");

codeSaleLabel.forEach((item) => {
  item.addEventListener("click", (event) => {
    codeSaleLabel.forEach((el) => el.classList.remove("active"));
    event.target.classList.add("active");
  });
});

callToACtionbtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToACtionbtns.forEach((el) => el.classList.remove("border"));
    e.target.classList.add("border");
  });
});

window.addEventListener("load", function () {
  window.addEventListener("scroll", function (e) {
    const heightScroll = window.pageYOffset;

    const topBar = navToggle?.parentElement.parentElement;
    if (heightScroll > headerHeight) {
      // navToggle.classList.add("active");
      navToggle.style.transform = "translateY(100%)";
    } else {
      navToggle.style.transform = "translateY(-100%)";
      // navToggle.classList.remove("active");
    }
  });

  function countdown(date) {
    const endDate = new Date(date).getTime();

    const currentDate = new Date();

    if (isNaN(endDate) && endDate - currentDate <= 0) return;
    setInterval(caculate, 1000);
    function caculate() {
      let days, hours, minutes, seconds;
      const now = new Date();

      // Đổi ra timestamp ra milisecond
      const startDate = now.getTime();
      // Time còn lại
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining <= 0) return;
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      seconds = parseInt(timeRemaining);

      daysText.textContent = days >= 10 ? days : `0${days}`;
      hoursText.textContent = hours >= 10 ? hours : `0${hours}`;
      minutesText.textContent = minutes >= 10 ? minutes : `0${minutes}`;
      secondsText.textContent = seconds >= 10 ? seconds : `0${seconds}`;
    }
  }
  if (timeCountDown) {
    countdown(timeCountDown);
  }
});
