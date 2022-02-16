function time() {
    var data = new Date()
    var hora = data.getHours()
    var hello = window.document.getElementById('hello')
    if (hora>6 && hora<12) {
        hello.innerHTML = 'Bom dia!'
    } else if (hora>=12 && hora < 18){
        hello.innerHTML = 'Boa tarde!'
    } else {
        hello.innerHTML = 'Boa noite!'
    }
}