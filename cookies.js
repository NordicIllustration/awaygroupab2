const cookieBox = document.querySelector(".wrapper");
const acceptBtn = cookieBox.querySelector(".accept-cookie");
const rejectBtn = cookieBox.querySelector(".reject-cookie");

acceptBtn.onclick = () => {
    document.cookie = "CookieBy=NordicIllustration; max-age=" + 60 * 60 * 24 * 30;
    cookieBox.classList.add("hide"); // Hide on accept
}

rejectBtn.onclick = () => {
    document.cookie = "CookieBy=NordicIllustration; max-age=" + 60 * 60 * 24 * 30;
    cookieBox.classList.add("hide"); // Hide on reject
}

let checkCookie = document.cookie.indexOf("CookieBy=NordicIllustration");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
