verifyComponents();

function verifyComponents() {
    var headers = document.getElementsByClassName('header');
    if (headers) {
        createHeader(headers);
    }else{
        return 'error';
    }
}

function createHeader(header) {
    for (const h of header) {
        var head = document.createElement('header');
        var h1 = document.createElement('h1');
        h1.innerHTML = 'Hello World';
        head.appendChild(h1);
        h.appendChild(head);
    }

}