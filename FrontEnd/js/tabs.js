window.onload = () => {
    addEventsOnA();
}

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

function loadPage()
{
    let httpRequest = new XMLHttpRequest();
    let url = "./pages/" + this.dataset.path + ".html";

    let that = this;
    httpRequest.addEventListener("readystatechange",function(e) {

        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                document.getElementById(that.dataset.targetDiv).innerHTML = httpRequest.responseText;
                addEventsOnA();
            } else {
                loadBlankPage(document.getElementById(that.dataset.targetDiv));
            }
        }

    });
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

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
