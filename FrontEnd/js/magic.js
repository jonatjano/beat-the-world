var logToken = "";
var pageIsLogin = false;

window.onload = () => {
    addEventsOnA();
    isLoggedIn();
}

// modify structure off <a> to use AJAX to do a one-page app
// take the href to build the dataset of the balise
//
// process :
//
// <a href="play/index">play</a>
//
// to :
//
// <a   href="#"
//      data-event-type="click"
//      data-target-div="pageView"
//      data-path="play/index"
//      data-is-proccessed="true"
// >play</a>
function addEventsOnA() {
    for( let elem of document.getElementsByTagName('a') ) {

        if (elem.dataset.isProccessed) {
            continue;
        }

        let href = elem.href;
        elem.href = "#";

        if (!elem.dataset.eventType) {
            elem.dataset.eventType = "click";
        }

        if (!elem.dataset.targetDiv) {
            elem.dataset.targetDiv = "pageView";
        }

        elem.dataset.path = href.replace(/https?:\/\/[a-zA-Z]+(:[0-9]+)?\/(#\/)?/, '');

        elem.dataset.isProccessed = true;

        elem.addEventListener(elem.dataset.eventType, loadPage)
        if (elem.dataset.defaultTab !== undefined) {
            elem.dispatchEvent( new Event(elem.dataset.eventType) );
        }
    }
};

// event handler for <a>
// use XMLHttpRequest to get the targeted html file
// call loadBlankPage() on fail
function loadPage()
{
    console.log(this);
    pageIsLogin = false;
    let httpRequest = new XMLHttpRequest();
    let url = "./pages/" + this.dataset.path + ".html";

    let that = this;
    httpRequest.addEventListener("readystatechange",function(e) {

        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                document.getElementById(that.dataset.targetDiv).innerHTML = httpRequest.responseText;
                addEventsOnA();
                isLoggedIn();
            } else {
                loadBlankPage(document.getElementById(that.dataset.targetDiv));
            }
        }

    });
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

// fill elem with ./pages/blank/index.html
// called when loadPage() fail
function loadBlankPage(elem) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener("readystatechange",function(e) {

        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                elem.innerHTML = httpRequest.responseText;
            } else {
                elem.innerHTML = "<h1>Page not found</h1>"
            }
        }

    });
    httpRequest.open("GET", "./pages/blank/index.html", true);
    httpRequest.send();
}

function isLoggedIn() {
    if (logToken === "" && !pageIsLogin) {
        logToken = "a";
        pageIsLogin = true;
        let elem = document.createElement("a");
        elem.dataset.eventType = "click";
        elem.dataset.targetDiv = "body";
        elem.dataset.path = "login/index";
        elem.dataset.isProccessed = true;
        elem.addEventListener(elem.dataset.eventType, loadPage)
        elem.dispatchEvent( new Event(elem.dataset.eventType) );
    }
}

function appendScript(path) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = path;
    script.type = "module";
    document.head.append(script);
}
