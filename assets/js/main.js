let relogio = document.querySelector('.Relogio');
let iniciar = document.getElementById('Iniciar');
let pausar = document.getElementById('Pausar');
let zerar = document.getElementById('Zerar');
let seg = 0;
let isPause = false;
let cont = false;

function criarSegundos(segundos) {
    let date = new Date(segundos * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


function iniciarRelogio() {


    const timer = setInterval(function () {

        if (!isPause) {
            seg++;
            relogio.innerHTML = criarSegundos(seg);

        } else {
            clearInterval(timer);
        }
    }, 1000);


}


function botaoAtivo(contando, pause) {

    if (contando == true && pause == true) {
        iniciar.classList.remove('botaodesativo');
        pausar.classList.remove('botaoativo');
        zerar.classList.remove('botaodesativo');

        iniciar.classList.add('botaoativo');
        pausar.classList.add('botaodesativo');
        zerar.classList.add('botaoativo');
    } else if (contando == true && pause == false) {
        iniciar.classList.remove('botaoativo');
        pausar.classList.remove('botaodesativo');
        zerar.classList.remove('botaodesativo');

        iniciar.classList.add('botaodesativo');
        pausar.classList.add('botaoativo');
        zerar.classList.add('botaoativo');

        iniciarRelogio()
    } else if (contando === false && pause === false) {
        iniciar.classList.remove('botaodesativo');
        pausar.classList.remove('botaodesativo');
        zerar.classList.remove('botaoativo');

        iniciar.classList.add('botaoativo');
        pausar.classList.add('botaoativo');
        zerar.classList.add('botaodesativo');
    }
}

iniciar.addEventListener('click', function (event) {
    isPause = false;
    if (cont == false) {
        if (!isPause) {
            botaoAtivo(true, false);
        }
        cont = true;
    }


});
pausar.addEventListener('click', function (event) {
    isPause = true;
    botaoAtivo(true, true);
    cont = false
    if (relogio.innerHTML != '00:00:00') {
        iniciar.innerHTML = 'Voltar'
    }

});

zerar.addEventListener('click', function (event) {
    window.location.reload(true);
});
