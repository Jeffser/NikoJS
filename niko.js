var mousePos;
document.onmousemove = handleMouseMove;
setInterval(getMousePosition, 100); // setInterval repeats every X ms
function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    mousePos = {
        x: event.pageX,
        y: event.pageY
    };
}
function getMousePosition() {var pos = mousePos;}
var NikoSprite = [1, 0]
var NikoPosition = [10, 10]
function start(){
    Niko = document.createElement('img')
    document.body.appendChild(Niko)
    Niko.src = 'sprites/' + NikoSprite[0] + NikoSprite[1] + '.png'
    Niko.style.position = 'fixed'
    Niko.style.left = NikoPosition[0] + 'px'
    Niko.style.bottom = NikoPosition[1] + 'px'
    Niko.style.zIndex = '100'
    Niko.onclick = function(){alert('Hello World!')}
    let id = null; 
    clearInterval(id);
    id = setInterval(frame, 150);
    function frame() {
        if (mousePos.x > NikoPosition[0] && mousePos.x > NikoPosition[0] + 5) {
            NikoPosition[0] += 10
            NikoSprite[0] = 2
            if (NikoSprite[1]<4){NikoSprite[1] += 1}
            else{NikoSprite[1] = 0}
        }
        else if (mousePos.x < NikoPosition[0] && mousePos.x < NikoPosition[0] - 5) {
            NikoPosition[0] -= 10
            NikoSprite[0] = 3
            if (NikoSprite[1]<4){NikoSprite[1] += 1}
            else{NikoSprite[1] = 0}
        }
        else{
            NikoSprite[0] = 0
            NikoSprite[1] = 0
        }
        Niko.src = 'sprites/' + NikoSprite[0] + NikoSprite[1] + '.png'
        Niko.style.left = NikoPosition[0] + 'px'
    }
}
window.onload = start()