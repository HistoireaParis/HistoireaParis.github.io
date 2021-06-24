function CopernicusDriver() {
    var canvas = document.getElementById("copernicusCanvas");
    var ctx = canvas.getContext("2d");
    var twoPI = Math.PI * 2;
    var heading = "Copernicus' model";
    var rainbow = false;
    var headingFont = "30px PTSans";
    var labelFont = "16px PTSans";
    var interval;
    var rate = 53;
    var ghost = false;
    var marsGhosts = [];
    var maxGhosts = 2000;

    canvas.setAttribute("style", "background-color:#000030;");

    var earth = {
        orbitX: 230,
        orbitY: 180,
        planetX:0,
        planetY:0,
        planetR:5,
        orbitR: 45,
        color: "#35A4A7",
        label: "Earth",
        t:0
    };
    
    var sun = {
        x: 230,
        y:180,
        r: 6,
        color:"yellow",
        label:"Sun"
    };

    var mars = {
        planetX:0,
        planetY:0,
        planetR:5,
        ghostR:2,
        ghostHue:0,
        planetColor:"red",
        planetT:0,
        orbitX:230,
        orbitY:180,
        orbitR:90,
        orbitColor:"red",
        epi1x:0,
        epi1y:0,
        epi1R:35,
        epi1Color:"gray",
        epi1T:0,
        epi2X:0,
        epi2Y:0,
        epi2R:15,
        epi2Color:"orange",
        epi2T:270,
        label:"Mars"
    };

    function renderFrame() {
        //clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //write header and footer
        ctx.font = headingFont;
        ctx.fillStyle = "white";
        ctx.fillText(heading, 10, 30);

        //draw sun
        ctx.fillStyle=sun.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sun.x,sun.y,sun.r,0,twoPI);
        ctx.fill();
        ctx.font = labelFont;
        ctx.fillText(sun.label,sun.x,sun.y-12);
        
        //draw Earth
        updateEarth();
        ctx.fillStyle = earth.color;
        ctx.beginPath();
        ctx.arc(earth.planetX,earth.planetY,earth.planetR,0,twoPI);
        ctx.fill();
        ctx.fillText(earth.label,earth.planetX,earth.planetY-12);
        
        //draw mars orbit & epicycle 1
        updateEpi1();
        ctx.strokeStyle = mars.orbitColor;
        ctx.beginPath();
        ctx.arc(mars.orbitX,mars.orbitY,mars.orbitR,0,twoPI);
        ctx.stroke();
        ctx.strokeStyle = mars.epi1Color;
        ctx.beginPath();
        ctx.arc(mars.epi1X,mars.epi1Y,mars.epi1R,0,twoPI);
        ctx.stroke();
        
        //draw mars epicycle 2
        updateEpi2();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(mars.epi1X,mars.epi1Y);
        ctx.lineTo(mars.epi2X,mars.epi2Y);
        ctx.stroke();
        ctx.strokeStyle = mars.epi2Color;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(mars.epi2X,mars.epi2Y,mars.epi2R,0,twoPI);
        ctx.stroke();
        
        //draw mars
        updateMars();
        ctx.beginPath();
        ctx.fillStyle = mars.planetColor;
        ctx.arc(mars.planetX,mars.planetY,mars.planetR,0,twoPI);
        ctx.fill();
        ctx.fillText(mars.label,mars.epi2X+mars.epi2R,mars.epi2Y-12);
        
        if(ghost){
            for(let i = 0; i < marsGhosts.length; i++){
                ctx.beginPath();
                ctx.fillStyle = "hsla(" + marsGhosts[i][2] + ",100%,50%,.3)";
                ctx.arc(marsGhosts[i][0],marsGhosts[i][1],mars.ghostR,0,twoPI);
                ctx.fill();
            }
            marsGhosts.push([mars.planetX,mars.planetY,mars.ghostHue]);
            mars.ghostHue += 0.1;
            if(marsGhosts.length > maxGhosts){
                marsGhosts.shift();
            }
        }
    }

    function updateEpi1(){
        let epiPos = positionOnCircle(mars.orbitX,mars.orbitY,mars.orbitR,mars.epi1T);
        mars.epi1X = epiPos.x;
        mars.epi1Y = epiPos.y;
        mars.epi1T = (mars.epi1T - 1.7) % 360;
    }
    
    function updateEarth(){
        let earthPos = positionOnCircle(earth.orbitX,earth.orbitY,earth.orbitR,earth.t);
        earth.planetX = earthPos.x;
        earth.planetY = earthPos.y;
        earth.t = (earth.t - 4) % 360;
    }
    
    function updateEpi2(){
        let epi2Pos = positionOnCircle(mars.epi1X,mars.epi1Y,mars.epi1R,mars.epi2T);
        mars.epi2X = epi2Pos.x;
        mars.epi2Y = epi2Pos.y;
    }

    function updateMars() {
        let marsPos = positionOnCircle(mars.epi2X, mars.epi2Y, mars.epi2R, mars.planetT);
        mars.planetX = marsPos.x;
        mars.planetY = marsPos.y;
        mars.planetT = (mars.planetT - 4.1) % 360;
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

    this.ghost = function () {
        ghost = !ghost;
        marsGhosts = [];
    };

    animate();
}