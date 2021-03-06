var mousePos;
document.onmousemove = handleMouseMove;
setInterval(getMousePosition, 100);
function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;
    event = event || window.event;
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
var NikoPosition = [10, 0]
function start(){
    console.log('NikoJS by Jeffser')
    Niko = document.createElement('img')
    document.body.appendChild(Niko)
    Niko.src = 'https://raw.githubusercontent.com/Jeffser/NikoJS/master/sprites/' + NikoSprite[0] + NikoSprite[1] + '.png'
    Niko.style.position = 'fixed'
    Niko.style.left = NikoPosition[0] + 'px'
    Niko.style.bottom = NikoPosition[1] + 'px'
    Niko.style.zIndex = '100'
    Niko.onclick = function(){alert('Hello World!')}
    let id = null; 
    clearInterval(id);
    id = setInterval(frame, 100);
    function frame() {
        if (mousePos){
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
        }
        Niko.src = 'https://raw.githubusercontent.com/Jeffser/NikoJS/master/sprites/' + NikoSprite[0] + NikoSprite[1] + '.png'
        Niko.style.left = NikoPosition[0] + 'px'
    }
}
window.onload = start()
