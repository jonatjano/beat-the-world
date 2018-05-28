let button = document.getElementById("submitLogin");
button.addEventListener("click", login)

// function called when the script is ready
// must be present otherwise is would call the scriptIsLoaded from others scripts
window.scriptIsLoaded = () => {}

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
        elem.dataset.path = "home/home";
        elem.dataset.isProccessed = true;
        elem.addEventListener(elem.dataset.eventType, loadPage)
        elem.dispatchEvent( new Event(elem.dataset.eventType) );
        pageIsLogin = true;
    }
}
