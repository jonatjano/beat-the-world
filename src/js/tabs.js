window.onload = () => {
    for(let tab of document.getElementsByClassName('tab')) {
        tab.onclick = () => {
            loadPage(tab.dataset.href);
        }
    }
}

function loadPage(name)
{
    let ajaxRequest = new XMLHttpRequest();
    let url = "./htmlPage/" + name + "/" + name + ".html";

    ajaxRequest.addEventListener("readystatechange",function(e) {
        if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
        {
            document.getElementById("pageView").innerHTML = ajaxRequest.responseText;
        }
    });
    ajaxRequest.open("GET", url, true);
    ajaxRequest.send();
}
