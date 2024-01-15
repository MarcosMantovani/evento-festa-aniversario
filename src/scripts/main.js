const dataDoEvento = new Date("Dec 21, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('counter-day').innerHTML = `${diasAteOEvento}d`;
    document.getElementById('counter-hour').innerHTML = ` ${horasAteOEvento}h`;
    document.getElementById('counter-minute').innerHTML = `${minutosAteOEvento}m`;
    document.getElementById('counter-second').innerHTML = `${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('counter').innerHTML = `Evento Expirado`;
        document.getElementById('counter').style.fontSize = '40px';
    }
}, 1000)