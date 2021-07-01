function getrequest(url, response) {
    xmlreq = new XMLHttpRequest();
    xmlreq.onreadystatechange = function() { 
        if (xmlreq.readyState == 4 && xmlreq.status == 200) {
            response(xmlreq.responseText);
        }
    }
    xmlreq.open("GET", url, true);
    xmlreq.send(null);
}

function postrequest(url, params, response) {
    var xmlreq = new XMLHttpRequest();
    xmlreq.open("POST", url, true);

    xmlreq.onreadystatechange = function () {
        if (this.readyState != 4) { return };

        if (this.status == 200) {
            response(this.responseText);
        }
    };

    xmlreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlreq.send(params);
}
