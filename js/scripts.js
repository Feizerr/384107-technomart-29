let buttonAsk = document.querySelector(".button-ask");
let popupAsk = document.querySelector(".modal-write-us");
let askClose = document.querySelector(".modal-close");
let formMessage = document.querySelector(".send-message");
let personName = document.querySelector(".person-name");
let personMail = document.querySelector(".mail-info");
let personText = document.querySelector(".text-message");


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
	}else {
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
	} else {
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

let buttonOff = document.querySelector(".slide-current");
let buttonLeft = document.querySelector(".slider-button-left");
let buttonRigtt = document.querySelector("slider-button-right");
