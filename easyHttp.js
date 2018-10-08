function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//get
easyHTTP.prototype.get = function (url, cb) {
    let self = this;
    this.http.open('GET', url, true);
    this.http.onload = function () {
        if (self.http.status === 200) {
            cb(null, self.http.responseText);
        }

        else {
            cb('Error');
        }
    }
    this.http.send();
}


easyHTTP.prototype.post = function (url, data, cb) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function () {
        cb(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//put

easyHTTP.prototype.put = function (url, data, cb) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function () {
        cb(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.delete = function (url, cb) {
    let self = this;
    this.http.open('DELETE', url, true);
    this.http.onload = function () {
        if (self.http.status === 200) {
            cb(null, 'post deleted');
        }

        else {
            cb('Error');
        }
    }
    this.http.send();
}
