// wave sub objects
function WSubObj(num, img, object, iwidth, iheight){
    this.S = num;
    var o = document.createElement("span");
    o.style.overflow = "hidden";
    o.style.width = iwidth + "px";
    o.style.height = iheight + "px";
    o.style.top = (num-1) + "px";
    var oI = document.createElement("img");
    oI.src = img.src;
    oI.style.left = "0px";
    oI.style.top = (-iheight + num) + "px";
    oI.style.width = iwidth + "px";
    oI.style.height = iheight + "px";
    o.appendChild(oI);
    document.getElementById("wave_zone").appendChild(o);
    this.spa = o.style;
    this.ddx = 0
    this.PX  = 0
    this.x   = 0
    if (num > 0) this.prev = object[num - 1];
}

WSubObj.prototype.main = function(power){
    var x0 = (this.S == 0) ? Math.random() * power : this.prev.x;
    this.x = this.PX += (this.ddx += ( (x0 - this.PX - this.ddx) * 2 ) / 2.8) / 1.4;
    this.spa.left = Math.round(this.x) + "px";
}

// wave effect object
var weff = {
    // variables
    power : 2.2,

    // inner variables
    object : new Array(),
    simg : null,
    iwidth  : 0,
    iheight  : 0,

    // initialization function
    init : function() {
        for (var i = 0; i < this.iheight/4; i++)
            this.object[i] = new WSubObj(i, this.simg, this.object, this.iwidth, this.iheight);
    },

    // main loop function of water effect
    run : function() {
        var i = 0, o;
        while (o = weff.object[i++]) o.main(weff.power);
        setTimeout(weff.run, 40);
    }
};

// on page load
window.onload = function() {
    weff.simg = document.getElementById("source_img");
    weff.iwidth = weff.simg.width;
    weff.iheight = weff.simg.height;

    // set necessary width and height for wave zone element
    var css = document.getElementById("wave_zone").style;
    css.height = (weff.iheight/4 - 1) + "px";
    css.width  = weff.iwidth + "px";

    weff.init();
    weff.run();
}