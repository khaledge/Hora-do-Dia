function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()     
    var hora = data.getHours();
    msg.innerHTML = "Agora são "+hora+' Horas.'
    if (hora >= 0 && hora < 13){
        // BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#4d5830'
    } else if (hora >= 13 && hora < 18){
        // BOA NOITE
        img.src = 'tarde.png'
        document.body.style.background = '#b94605'
    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#1c2721'
    }
}
