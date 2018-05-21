let button = document.getElementById("submitLogin");
button.addEventListener("click", login)

function login() {
    // let pseudo = document.getElementById("pseudo").value;
    // let password = document.getElementById("password").value;

    if (true) {
    // if (accountIsValue) {
        console.log("connecting");
        logToken = "token";
        let elem = document.createElement("a");
        elem.dataset.eventType = "click";
        elem.dataset.targetDiv = "body";
        elem.dataset.path = "home/index";
        elem.dataset.isProccessed = true;
        elem.addEventListener(elem.dataset.eventType, loadPage)
        elem.dispatchEvent( new Event(elem.dataset.eventType) );
        pageIsLogin = true;
    }
}
