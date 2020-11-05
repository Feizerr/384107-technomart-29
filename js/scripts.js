let buttonAsk = document.querySelector(".button-ask");
let popupAsk = document.querySelector(".modal-write-us");
let askClose = document.querySelector(".modal-close");
let formMessage = document.querySelector(".send-message");
let personName = document.querySelector(".person-name");
let personMail = document.querySelector(".mail-info");
let personText = document.querySelector(".text-message");

// поп-ап с покупкой товара

let modalBuy = document.querySelector(".modal-buy");
let buyButton = document.querySelectorAll(".buy");
let closeBuy = document.querySelector(".modal-close-buy");
let buttonContinue = document.querySelector(".button-continue");

for (let buy of buyButton) {
	buy.onclick = function() {
		modalBuy.classList.add("modal-show");
	}
}

closeBuy.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalBuy.classList.remove("modal-show");
});

buttonContinue.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalBuy.classList.remove("modal-show");
});

// поп-ап с формой обратной связи

let isStorageSupport = true;
let storageName = "";
let storageMail = "";

try {
	storageName = localStorage.getItem("name");
	storageMail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

buttonAsk.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupAsk.classList.add("modal-show");
	if (storageName) {
		personName.value = storageName;
		personMail.focus();
			if (storageMail) {
				personMail.value = storageMail;
				personText.focus();
			}
	}else	{
	personName.focus();
}
});

askClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupAsk.classList.remove("modal-show"); 
	popupAsk.classList.remove("modal-error");
})

formMessage.addEventListener("submit", function(evt) {
	if (!personName.value || !personMail.value || !personText.value) {
		evt.preventDefault();
		popupAsk.classList.remove("modal-error");
		popupAsk.offsetWidth = popupAsk.offsetWidth;
		popupAsk.classList.add("modal-error");
	}else	{
		if (isStorageSupport) {
			localStorage.setItem("name", personName.value);
			localStorage.setItem("email", personMail.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popupAsk.classList.contains("modal-show")) {
			evt.preventDefault();
			popupAsk.classList.remove("modal-show");
			popupAsk.classList.remove("modal-error");
		}
	}
})

// Поп-ап с картой

const mapLink = document.querySelector(".img-popup-map");
const popupMap = document.querySelector(".modal-map");
const mapClose = document.querySelector(".modal-close-map");

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");

});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show");
});

// слайдер

let buttonsSlider = document.querySelectorAll(".slider-button");
let sliderDrells = document.querySelector(".slider-drells");
let sliderItem = document.querySelectorAll(".slider-item");
let slidersPoints = document.querySelectorAll(".slider-point");

for (let buttonSlider of buttonsSlider) {
	buttonSlider.onclick = function () {
		sliderItem[0].classList.toggle("slide-current");
		sliderItem[1].classList.toggle("slide-current");
		slidersPoints[0].classList.toggle("current");
		slidersPoints[1].classList.toggle("current");
	}
}

for (let sliderPoint of slidersPoints) {
	sliderPoint.onclick = function () {
		sliderItem[0].classList.toggle("slide-current");
		sliderItem[1].classList.toggle("slide-current");
		slidersPoints[0].classList.toggle("current");
		slidersPoints[1].classList.toggle("current");
	}
}

// слайдер с преимуществами

let featuresItem = document.querySelectorAll(".features-item");
let featuresDelivery = document.querySelector(".features-delivery");
let featuresGuarantee = document.querySelector(".features-guarantee");
let featuresCredit = document.querySelector(".features-credit");
let delivery = document.querySelector(".delivery");
let guarantee = document.querySelector(".guarantee");
let credit = document.querySelector(".credit");

featuresDelivery.addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.classList.add("features-item-active"); 
	guarantee.classList.remove("features-item-active"); 
	credit.classList.remove("features-item-active");
	featuresDelivery.classList.add("features-button-active");
	featuresGuarantee.classList.remove("features-button-active");
	featuresCredit.classList.remove("features-button-active");
});

featuresGuarantee.addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.classList.remove("features-item-active"); 
	guarantee.classList.add("features-item-active"); 
	credit.classList.remove("features-item-active");
	featuresDelivery.classList.remove("features-button-active");
	featuresGuarantee.classList.add("features-button-active");
	featuresCredit.classList.remove("features-button-active");
});

featuresCredit.addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.classList.remove("features-item-active"); 
	guarantee.classList.remove("features-item-active"); 
	credit.classList.add("features-item-active");
	featuresDelivery.classList.remove("features-button-active");
	featuresGuarantee.classList.remove("features-button-active");
	featuresCredit.classList.add("features-button-active");
});