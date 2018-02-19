var fader = document.querySelector('#bits-slider');
var outp = document.querySelector('#range-indicator');

fader.addEventListener('change', faderChange);

function faderChange(e) {
    var bitStr = '';
    var bits = fader.value;
    var ipClass = Math.ceil(bits/8);
    var classStr = '';
    switch (ipClass) {
        case 1:
            classStr = 'Class A Network';
            break;
        case 2:
            classStr = 'Class B Network';
            break;
        default:
        case 3:
            classStr = 'Class C Network';
            break;
    }
    bitStr += '1'.repeat(bits);
    bitStr += '0'.repeat(32-bits);
    var binIp = [bitStr.slice(0, 8), '.', bitStr.slice(8, 16), '.',
        bitStr.slice(16, 24), '.', bitStr.slice(24, 32)].join('');
    outp.innerHTML = binIp + " <br> " + classStr;
}