var a = document.getElementById('entrar')
a.addEventListener('mouseenter', Entrar)

function Entrar(){
    a.style.color = '#404EED'
    a.style.cursor = 'pointer'
    a.style.transition = '0.5s'
    a.style.boxShadow = '3px 3px 7px 1px #1f277c'
}


var b = document.getElementById('entrar')
b.addEventListener('mouseout', Sair)

function Sair(){
    b.style.background = 'white'
    b.style.boxShadow = 'none'
}

//

var c = document.querySelector('.botao')
c.addEventListener('mouseenter', Enter)

function Enter(){
    c.style.transition = '0.3s'

    c.style.color = '#404EED'
    c.style.boxShadow = '3px 3px 7px 1px #1f277c'
}

var d = document.querySelector('.botao')
d.addEventListener('mouseout', Back)

function Back(){
   d.style.transition = '0.5s'
   d.style.color = 'black'
   d.style.boxShadow = '0px 0px 0px 0px'
}

//

var e = document.getElementById('botaoa')
e.addEventListener('mouseenter', Connect)

function Connect(){
    e.style.background = '#36383d'
    e.style.transition = '0.3s'
    e.style.boxShadow = '3px 3px 7px 1px #1f277c'
}

var f = document.getElementById('botaoa')
f.addEventListener('mouseout', desconnect)

function desconnect(){
    f.style.backgroundColor = '#26282c'
    f.style.boxShadow = '0px 0px 0px 0px #1f277c'
    f.style.transition = '0.5s'
    
}

var g = document.getElementById('botao10')
g.addEventListener('mouseenter', Entrando)

function Entrando(){
   g.style.backgroundColor = '#7983F5'
   g.style.transition = '0.3s'
   g.style.boxShadow = '3px 3px 7px 1px rgb(182, 182, 182)'
}

var h = document.getElementById('botao10')
h.addEventListener('mouseout', Saindo)

function Saindo(){
    h.style = 'none'
    h.style.transition = '0.3s'
}