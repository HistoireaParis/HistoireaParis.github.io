function TychoBraheDriver() {
    var canvas = document.getElementById("braheCanvas");
    var ctx = canvas.getContext("2d");
    var twoPI = Math.PI * 2;
    var heading = "Tycho Brahe's model";
    var rainbow = false;
    var headingFont = "30px PTSans";
    var labelFont = "16px PTSans";
    var interval;
    var rate = 60;

    canvas.setAttribute("style", "background-color:#000030;");

    var earth = {
        x: 230,
        y: 180,
        r: 6,
        color: "#35A4A7",
        label: "Earth"
    };

    var sunOrbit = {
        x: 230,
        y: 180,
        r: 75,
        color: "yellow",
        label: "Sun"
    };

    var epicycle = {
        x: 0,
        y: 0,
        r: 6,
        circleR: 42,
        dotColor: "yellow",
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

        //draw Earth
        ctx.beginPath();
        ctx.fillStyle = earth.color;
        ctx.arc(earth.x, earth.y, earth.r, 0, twoPI);
        ctx.fill();
        //draw Sun circle
        ctx.lineWidth = 2;
        ctx.strokeStyle = sunOrbit.color;
        ctx.beginPath();
        ctx.arc(sunOrbit.x, sunOrbit.y, sunOrbit.r, 0, twoPI);
        ctx.stroke();


        //draw Sun on Orbit
        ctx.fillStyle = sunOrbit.color;
        let epicyclePos = positionOnCircle(sunOrbit.x, sunOrbit.y, sunOrbit.r, epicycle.t);
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

        
        ctx.beginPath();
        ctx.arc(mars.x, mars.y, mars.r, 0, twoPI);
        ctx.fill();

        //draw planet labels
        ctx.font = labelFont;
        ctx.fillStyle = "white";
        ctx.fillText(earth.label, earth.x + 5, earth.y - 10);
        ctx.fillText(sunOrbit.label, epicycle.x, epicycle.y - epicycle.r - 2);
        ctx.fillText(mars.label, mars.x + 5, mars.y - 10);
    }

    function updateEpicycle() {
        let epicyclePos = positionOnCircle(sunOrbit.x, sunOrbit.y, sunOrbit.r, epicycle.t);
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

    this.rainbowMode = function () {
        rainbow = !rainbow;
    };

    animate();
}