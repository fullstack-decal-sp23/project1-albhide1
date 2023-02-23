const track = document.getElementById("imagetrack");

window.onmousedown = e => {
    track.datset.mouseDownAt = e.ClientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt =="0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    
    track.style.transform = 'translate(${percentage}%, -50%)';
}

