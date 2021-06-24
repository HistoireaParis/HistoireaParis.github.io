function PtolemyGhostingDriver(ghosting) {
    var canvas;
    var heading;
    if(ghosting){
        canvas = document.getElementById("ptolemyGhostingCanvas");
        heading = "Ptolemy's model of the Solar System";
    }else{
        canvas = document.getElementById("ptolemysModel");
        heading = "Ptolemy's model";
    }
    var ctx = canvas.getContext("2d");
    var twoPI = Math.PI * 2;
    var footing1 = "Mars revolves on a wheel that Ptolemy";
    var footing2 = "called an \"epicycle.\"";
    var marsDots = [];
    var maxDots = 100;
    var rainbow = false;
    var headingFont = "27px PTSans";
    var labelFont = "16px PTSans";
    var interval;
    var rate = 53;

    canvas.setAttribute("style", "background-color:#000030;");

    var earth = {
        x: 230,
        y: 180,
        r: 6,
        color: "#35A4A7",
        label: "Earth"
    };

    var sun = {
        x: 230,
        y: 180,
        r: 37,
        color: "yellow",
        label: "Sun"
    };

    var marsOrbit = {
        x: 230,
        y: 180,
        r: 85,
        color: "gray"
    };

    var epicycle = {
        x: 0,
        y: 0,
        r: 6,
        circleR: 42,
        dotColor: "gray",
        circleColor: "red",
        t: 0
    };

    var mars = {
        x: 0,
        y: 0,
        r: 5,
        color: "red",
        t: 0,
        hue: 0,
        label: "Mars"
    };

    function renderFrame() {
        //clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //write header and footer
        ctx.font = headingFont;
        ctx.fillStyle = "white";
        ctx.fillText(heading, 10, 30);
        if (ghosting) {
            ctx.fillText(footing1, 5, 325);
            ctx.fillText(footing2, 5, 355);
        }

        //draw Earth
        ctx.beginPath();
        ctx.fillStyle = earth.color;
        ctx.arc(earth.x, earth.y, earth.r, 0, twoPI);
        ctx.fill();
        //draw Sun circle
        ctx.lineWidth = 2;
        ctx.strokeStyle = sun.color;
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, sun.r, 0, twoPI);
        ctx.stroke();


        //draw Mars on Orbit
        ctx.fillStyle = marsOrbit.color;
        let epicyclePos = positionOnCircle(marsOrbit.x, marsOrbit.y, marsOrbit.r, epicycle.t);
        epicycle.x = epicyclePos.x;
        epicycle.y = epicyclePos.y;
        ctx.beginPath();
        ctx.arc(epicycle.x, epicycle.y, epicycle.r, 0, twoPI);
        ctx.fill();
        updateEpicycle();

        //draw epicycle
        ctx.strokeStyle = epicycle.circleColor;
        ctx.beginPath();
        ctx.arc(epicycle.x, epicycle.y, epicycle.circleR, 0, twoPI);
        ctx.stroke();

        //draw line to Mars
        updateMars();
        ctx.beginPath();
        ctx.moveTo(epicycle.x, epicycle.y);
        ctx.lineTo(mars.x, mars.y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = epicycle.dotColor;
        ctx.stroke();

        //draw Mars        
        ctx.fillStyle = mars.color;

        if (ghosting) {
            //push a ghosted mars to the stack
            marsDots.push([mars.x, mars.y]);
            if (marsDots.length > maxDots) {
                marsDots.shift();
            }

            //draw mars ghosts
            if (rainbow) {
                ctx.fillStyle = "hsl(" + mars.hue + ",100%,50%)";
                mars.hue += 0.5;
            }
            for (let i = 0; i < marsDots.length; i++) {
                ctx.beginPath();
                ctx.arc(marsDots[i][0], marsDots[i][1], 3, 0, twoPI);
                ctx.fill();
            }
        } else {
            ctx.beginPath();
            ctx.arc(mars.x, mars.y, mars.r, 0, twoPI);
            ctx.fill();
        }


        //draw Mars circle
        ctx.strokeStyle = marsOrbit.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(marsOrbit.x, marsOrbit.y, marsOrbit.r, 0, twoPI);
        ctx.stroke();

        //draw planet labels
        ctx.font = labelFont;
        ctx.fillStyle = "white";
        ctx.fillText(earth.label, earth.x + 5, earth.y - 10);
        ctx.fillText(sun.label, sun.x, sun.y - sun.r - 2);
        ctx.fillText(mars.label, mars.x + 5, mars.y - 10);
        //ctx.strokeStyle = "white";
        //ctx.lineWidth = 1;
        //ctx.strokeText(mars.label,mars.x + 5, mars.y - 10);
    }

    function updateEpicycle() {
        let epicyclePos = positionOnCircle(marsOrbit.x, marsOrbit.y, marsOrbit.r, epicycle.t);
        epicycle.x = epicyclePos.x;
        epicycle.y = epicyclePos.y;
        epicycle.t = (epicycle.t - 4.3) % 360;
    }

    function updateMars() {
        let marsPos = positionOnCircle(epicycle.x, epicycle.y, epicycle.circleR, mars.t);
        mars.x = marsPos.x;
        mars.y = marsPos.y;
        mars.t = (mars.t - 8) % 360;
    }

    function positionOnCircle(cX, cY, cR, t) {
        let rad = degToRad(t);
        let x = cR * Math.cos(rad) + cX;
        let y = cR * Math.sin(rad) + cY;
        return {x: x, y: y};
    }

    function degToRad(d) {
        return d * (Math.PI / 180);
    }

    function animate() {
        interval = window.setInterval(function () {
            renderFrame();
        }, rate);
    }

    this.play = function () {
        animate();
    };

    this.pause = function () {
        window.clearInterval(interval);
    };

    this.reset = function () {
        window.clearInterval(interval);
        marsDots = [];
        animate();
    };

    this.rainbowMode = function () {
        rainbow = !rainbow;
    };

    this.moreMars = function () {
        if (maxDots == 100) {
            maxDots = 1000;
        } else {
            maxDots = 100;
        }
    };



    animate();
}

class MarsDot {
    static color = "red";
    static r = 6;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}