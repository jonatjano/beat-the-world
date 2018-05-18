window.onload = () => {
    loadPage("shop")
    for(let tab of document.getElementsByClassName('tab')) {
        tab.onclick = () => {
            loadPage(tab.dataset.href);
        }
        if (tab.dataset.defaultTab) { loadPage(tab.dataset.href); }
    }
}

function loadPage(name)
{
    let httpRequest = new XMLHttpRequest();
    let url = "./htmlPage/" + name + "/" + name + ".html";

    httpRequest.addEventListener("readystatechange",function(e) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                document.getElementById("pageView").innerHTML = httpRequest.responseText;
            } else {
                loadPage("blank");
            }
        }
    });
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
