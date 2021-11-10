window.onload = function () {
    // Menu Burger
    const navButton = document.querySelector('.menu-icon');
    if (navButton) {
        const nav = document.querySelector('.header__nav');
        navButton.addEventListener("click", function (e) {
            navButton.classList.toggle('_active');
            if (!nav.classList.contains('header__nav--active')) {
                nav.classList.add('header__nav--active');
            } else {
                nav.classList.remove('header__nav--active');
            }
        });
    };
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
    // DropDown Menu
    document.querySelectorAll(".booking-dropdown").forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector(".booking-dropdown__btn");
        const dropDownList = dropDownWrapper.querySelector(".booking-dropdown__list");
        const dropDownListItems = dropDownList.querySelectorAll(".booking-dropdown__item");
        const dropDownSelected = dropDownWrapper.querySelector(".booking-dropdown__selected");
        const dropDownInput = dropDownWrapper.querySelector(".dropdown__input-hidden");

        dropDownBtn.addEventListener("click", function (e) {
            dropDownList.classList.toggle("_active");
            this.classList.add("_active");
        });

        dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener("click", function (e) {
                e.stopPropagation();
                dropDownSelected.innerHTML = this.innerText;
                dropDownBtn.focus();
                dropDownInput.value = this.dataset.value;
                dropDownList.classList.remove("_active");
            });
        });

        document.addEventListener("click", function (e) {
            if (e.target !== dropDownBtn) {
                dropDownBtn.classList.remove("_active");
                dropDownList.classList.remove("_active");
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Tab" || e.key === "Escape") {
                dropDownBtn.classList.remove("_active");
                dropDownList.classList.remove("_active");
            }
        });
    });

    // Popup Video
    if (document.querySelector(".popup")) {
        const popup = document.querySelector('.popup');
        const openPopup = document.querySelector('.popup-open');
        const closePopup = document.querySelector('.popup__close');
        const video = document.querySelector('.video');

        function openVideo() {
            popup.classList.add("active");
            video.setAttribute("src", "video/videoplayback.mp4");
            setTimeout(() => {
                video.play();
            }, 1000);
        }
        function closeVideo() {
            popup.classList.remove("active");
            video.setAttribute("src", "/");
            setTimeout(() => {
                video.pause();
                video.currentTime = 0;
            }, 400);
        }

        openPopup.addEventListener("click", e => {
            openVideo();
        });
        closePopup.addEventListener("click", e => {
            closeVideo();
        });
        document.getElementById("video-popup").addEventListener("click", function (e) {
            if (!e.target.closest(".popup__body")) {
                closeVideo();
            }
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Tab" || e.key === "Escape") {
                closeVideo();
            }
        });
    }
}