/*be sure to remove padding, margin, overflow; also ensure block display for div*/

makeWaves=()=>{
    const canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let animFrame = 0;
    grd = ctx.createLinearGradient(0, 0, canvas.height, canvas.width);
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ch = canvas.height;
        cw = canvas.width;
        grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grd.addColorStop(0.150, 'rgba(255, 0, 255, 0.60)');
        grd.addColorStop(0.840, 'rgba(0, 194, 171, 0.60)');
        grd.addColorStop(0.710, 'rgba(0, 255, 255, 0.80)');
        grd.addColorStop(0.380, 'rgba(255, 255, 0, 0.80)');
    };
    resizeCanvas();

    function drawLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animFrame += 1;
        //amplitude, frequency, offset, alpha
        drawWaveB(50/(cw/1800),0.8/(cw/1800),(2*animFrame+80)%628, 1*0.8)
        drawWaveB(35/(cw/1800),0.8/(cw/1800),(2*animFrame+60)%628, 0.7*0.8)
        drawWaveB(40/(cw/1800),0.8/(cw/1800),(2*animFrame+40)%628, 0.5*0.8)
        drawWaveB(55/(cw/1800),0.8/(cw/1800),(2*animFrame+20)%628, 0.3*0.8)
        drawWaveB(50/(cw/1800),0.8/(cw/1800),(2*animFrame+0)%628, 0.1*0.8)     
        drawWaveB(50/(cw/1800),0.8/(cw/1800),(3*animFrame+80)%628, 1*0.8)
        drawWaveB(35/(cw/1800),0.8/(cw/1800),(3*animFrame+60)%628, 0.7*0.8)
        drawWaveB(40/(cw/1800),0.8/(cw/1800),(3*animFrame+40)%628, 0.5*0.8)
        drawWaveB(55/(cw/1800),0.8/(cw/1800),(3*animFrame+20)%628, 0.3*0.8)
        drawWaveB(20/(cw/1800),0.8/(cw/1800),(3*animFrame+0)%628, 0.1*0.8)
        drawWaveB(60/(cw/1800),0.8/(cw/1800),(4*animFrame+80)%628, 1*0.8)
        drawWaveB(45/(cw/1800),0.8/(cw/1800),(4*animFrame+60)%628, 0.7*0.8)
        drawWaveB(50/(cw/1800),0.8/(cw/1800),(4*animFrame+40)%628, 0.5*0.8)
        drawWaveB(35/(cw/1800),0.8/(cw/1800),(4*animFrame+20)%628, 0.3*0.8)
        drawWaveB(40/(cw/1800),0.8/(cw/1800),(4*animFrame+0)%628, 0.1*0.8) 
        drawWaveB(50,1.2,(4.4*animFrame+20)%628, 0.25)
        drawWaveB(50,1.2,(4.4*animFrame+0)%628, 0.10)
        animID = requestAnimationFrame(drawLines);
    }
    drawLines();

    function drawWaveB(amp, freq, offset, alpha) {
        //ctx.strokeStyle = "rgba(255,255,255, " + alpha + ")";
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = grd;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        for(x=-785/freq; x <= cw; x+=1/freq*314){
        ctx.bezierCurveTo(
            x+offset/freq+112/freq,
            ch/2+(x+112/freq+offset/freq)/1000*(cw-(x+112/freq+offset/freq))/1000*amp*Math.sin(freq*(x)/100),
            x+offset/freq+202/freq,
            ch/2+(x+202/freq+offset/freq)/1000*(cw-(x+202/freq+offset/freq))/1000*amp*Math.sin(freq*(x+314/freq)/100),
            x+offset/freq+314/freq,
            ch/2+(x+314/freq+offset/freq)/1000*(cw-(x+314/freq+offset/freq))/1000*amp*Math.sin(freq*(x+314/freq)/100)
        );
        }
        ctx.stroke();
    }
}
makeWaves();