import Champion from '../../../models/Champion.js'
{
let pattern = document.getElementById('pattern');
let champList = document.getElementById('championList');
champList.removeChild(pattern);

let httpRequest = new XMLHttpRequest();
httpRequest.addEventListener("readystatechange",function(e) {

    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        let champions = JSON.parse(httpRequest.responseText);
        for(let champBase of champions) {
            let champion = Champion.revive(champBase);

            let champFrame = pattern.cloneNode(true);

            champFrame.getElementsByClassName('champion')[0].src = champFrame.getElementsByClassName('champion')[0].src.replace(":NAME:", champion.name);
            champFrame.getElementsByClassName('frame')[0].src = champFrame.getElementsByClassName('frame')[0].src.replace(":FRAME:", "classic");

            champList.appendChild(champFrame);
        }
    }

});
httpRequest.open("GET", "./BackEnd/champions", true);
httpRequest.send();
}
