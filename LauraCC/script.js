let cookies = 0;
const cookieCount = document.querySelector("#CookieCount");
const cookieBtn = document.querySelector("#Button");
cookieBtn.addEventListener("click", function () {
	  cookies = cookies + 1;
	  cookieCount.textContent = cookies;
	});