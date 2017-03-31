var appTools = new function () {
    this.width = $(window).width();
    this.height = $(window).height()
};
appTools.bezierDebug = function (g) {
    this.scene = $("body");
    this.focusLength = 200;
    this.size = 10;
    this.opacity = .5;
    this.style = "#ff0000";
    this.pointsFlag = "appToolsPoints";
    this.controlSize = 40;
    this.controlStyle = "#0000ff";
    this.consoleData;
    this.touchData = {x: !1, y: !1};
    this.createData = function (g) {
        g = g ? g : {};
        g.type = g.type ? g.type : "bezier2";
        g.loca = g.loca ? g.loca : {};
        g.step = g.step ? g.step : 50;
        g.needControl = "boolean" == typeof g.needControl ? g.needControl : !0;
        g.flag = g.flag ? g.flag : "left";
        g.data = [];
        switch (g.type) {
            case "bezier2":
                for (var l = 0; l <= g.step; l++) {
                    var w = {
                        x: Math.pow(1 - l / g.step, 2) * g.loca.x1 + 2 * l / g.step * (1 - l / g.step) * g.loca.x2 + Math.pow(l / g.step, 2) * g.loca.x3,
                        y: Math.pow(1 - l / g.step, 2) * g.loca.y1 + 2 * l / g.step * (1 - l / g.step) * g.loca.y2 + Math.pow(l / g.step, 2) * g.loca.y3
                    };
                    w.flag = g.flag;
                    g.data.push(w)
                }
                break;
            case "bezier3":
                for (l = 0; l <= g.step; l++)w = {
                    x: g.loca.x1 * Math.pow(1 - l / g.step, 3) + 3 * g.loca.x2 * l / g.step * Math.pow(1 - l / g.step, 2) + 3 * g.loca.x3 * Math.pow(l / g.step, 2) * (1 - l / g.step) + g.loca.x4 * Math.pow(l / g.step, 3),
                    y: g.loca.y1 * Math.pow(1 - l / g.step, 3) + 3 * g.loca.y2 * l / g.step * Math.pow(1 - l / g.step, 2) + 3 * g.loca.y3 * Math.pow(l / g.step, 2) * (1 - l / g.step) + g.loca.y4 * Math.pow(l / g.step, 3)
                }, w.flag = g.flag, g.data.push(w)
        }
        return g.data
    };
    this.isInLine = function (g) {
        g = g ? g : {};
        g.loca = g.loca ? g.loca : {x: 0, y: 0, z: 0};
        g.limit = "number" == typeof g.limit ? g.limit : 10;
        g.data = g.data ? g.data : [];
        for (var l = 0; l < g.data.length; l++)
            if (Math.sqrt(Math.pow(g.loca.x - g.data[l].x, 2) + Math.pow(g.loca.y - g.data[l].y, 2) + Math.pow(g.loca.z - g.data[l].z, 2)) < g.limit)return !0;
        return !1
    }
};
var conf = new function () {
};
conf.loca = [
    {
        controls: {x1: -160, y1: -500, z1: 0, x2: -160, y2: 0, z2: 0, x3: -160, y3: appTools.height / 2, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -160, y1: -1500, z1: 0, x2: -160, y2: -1E3, z2: 0, x3: -160, y3: -500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -55, y1: -2500, z1: 0, x2: -114, y2: -2058, z2: 0, x3: -160, y3: -1500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: 10, y1: -3500, z1: 0, x2: 3, y2: -3092, z2: 0, x3: -55, y3: -2500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -40, y1: -4500, z1: 0, x2: 0, y2: -4E3, z2: 0, x3: 10, y3: -3500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -158, y1: -5500, z1: 0, x2: -82, y2: -4912, z2: 0, x3: -40, y3: -4500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -274, y1: -6500, z1: 0, x2: -243, y2: -6093, z2: 0, x3: -158, y3: -5500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -305, y1: -7500, z1: 0, x2: -326, y2: -7009, z2: 0, x3: -274, y3: -6500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -237, y1: -8500, z1: 0, x2: -301, y2: -7815, z2: 0, x3: -305, y3: -7500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -151, y1: -9500, z1: 0, x2: -134, y2: -9191, z2: 0, x3: -237, y3: -8500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -151, y1: -10500, z1: 0, x2: -154, y2: -10108, z2: 0, x3: -151, y3: -9500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -151, y1: -11500, z1: 0, x2: -151, y2: -11108, z2: 0, x3: -151, y3: -10500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: 6, y1: -12500, z1: 0, x2: -27, y2: -12121, z2: 0, x3: -151, y3: -11500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -63, y1: -13500, z1: 0, x2: 23, y2: -13163, z2: 0, x3: 6, y3: -12500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -294, y1: -14500, z1: 0, x2: -255, y2: -14180, z2: 0, x3: -63, y3: -13500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -108, y1: -15500, z1: 0, x2: -319, y2: -14947, z2: 0, x3: -294, y3: -14500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -18, y1: -16500, z1: 0, x2: 66, y2: -16051, z2: 0, x3: -108, y3: -15500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {
            x1: -287,
            y1: -17500,
            z1: 0,
            x2: -240,
            y2: -17142,
            z2: 0,
            x3: -32,
            y3: -16755,
            z3: 0,
            x4: -18,
            y4: -16500,
            z4: 0
        }, type: "bezier3", flag: "left"
    }, {
        controls: {x1: -259, y1: -18500, z1: 0, x2: -337, y2: -18155, z2: 0, x3: -287, y3: -17500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -149, y1: -19500, z1: 0, x2: -137, y2: -19155, z2: 0, x3: -259, y3: -18500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -149, y1: -20500, z1: 0, x2: -151, y2: -20155, z2: 0, x3: -149, y3: -19500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -149, y1: -21500, z1: 0, x2: -151, y2: -21155, z2: 0, x3: -149, y3: -20500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -112, y1: -22500, z1: 0, x2: -105, y2: -22155, z2: 0, x3: -149, y3: -21500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -299, y1: -23426, z1: 0, x2: -119, y2: -23223, z2: 0, x3: -112, y3: -22500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -171, y1: -24500, z1: 0, x2: -305, y2: -24125, z2: 0, x3: -299, y3: -23426, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -52, y1: -25500, z1: 0, x2: 127, y2: -25149, z2: 0, x3: -171, y3: -24500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -274, y1: -26500, z1: 0, x2: -398, y2: -25829, z2: 0, x3: -52, y3: -25500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {
            x1: -24,
            y1: -27500,
            z1: 0,
            x2: 105,
            y2: -26883,
            z2: 0,
            x3: -110,
            y3: -26948,
            z3: 0,
            x4: -274,
            y4: -26500,
            z4: 0
        }, type: "bezier3", flag: "left"
    }, {
        controls: {
            x1: -286,
            y1: -28500,
            z1: 0,
            x2: -333,
            y2: -27805,
            z2: 0,
            x3: -307,
            y3: -28032,
            z3: 0,
            x4: -24,
            y4: -27500,
            z4: 0
        }, type: "bezier3", flag: "left"
    }, {
        controls: {x1: -145, y1: -29422, z1: 0, x2: -149, y2: -28942, z2: 0, x3: -286, y3: -28500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: -145, y1: -30422, z1: 0, x2: -149, y2: -29942, z2: 0, x3: -145, y3: -29500, z3: 0},
        type: "bezier2",
        flag: "left"
    }, {
        controls: {x1: 160, y1: -500, z1: 0, x2: 160, y2: 0, z2: 0, x3: 160, y3: appTools.height / 2, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 160, y1: -1500, z1: 0, x2: 160, y2: -1E3, z2: 0, x3: 160, y3: -500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 241, y1: -2500, z1: 0, x2: 166, y2: -1872, z2: 0, x3: 160, y3: -1500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 304, y1: -3500, z1: 0, x2: 306, y2: -3048, z2: 0, x3: 241, y3: -2500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 255, y1: -4500, z1: 0, x2: 314, y2: -4004, z2: 0, x3: 304, y3: -3500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 129, y1: -5500, z1: 0, x2: 190, y2: -5126, z2: 0, x3: 255, y3: -4500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 21, y1: -6500, z1: 0, x2: 84, y2: -5861, z2: 0, x3: 129, y3: -5500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: -9, y1: -7500, z1: 0, x2: -21, y2: -6905, z2: 0, x3: 21, y3: -6500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 61, y1: -8500, z1: 0, x2: 4, y2: -8042, z2: 0, x3: -9, y3: -7500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {
            x1: 152,
            y1: -9500,
            z1: 0,
            x2: 162,
            y2: -8975,
            z2: 0,
            x3: 76,
            y3: -8848,
            z3: 0,
            x4: 61,
            y4: -8500,
            z4: 0
        }, type: "bezier3", flag: "right"
    }, {
        controls: {x1: 160, y1: -10500, z1: 0, x2: 160, y2: -1E4, z2: 0, x3: 160, y3: -9500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 160, y1: -11500, z1: 0, x2: 160, y2: -11E3, z2: 0, x3: 160, y3: -10500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 304, y1: -12500, z1: 0, x2: 253, y2: -11995, z2: 0, x3: 160, y3: -11500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 235, y1: -13500, z1: 0, x2: 339, y2: -13052, z2: 0, x3: 304, y3: -12500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 6, y1: -14500, z1: 0, x2: 88, y2: -14054, z2: 0, x3: 235, y3: -13500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 192, y1: -15500, z1: 0, x2: -26, y2: -14894, z2: 0, x3: 6, y3: -14500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 282, y1: -16500, z1: 0, x2: 370, y2: -16031, z2: 0, x3: 192, y3: -15500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {
            x1: 13,
            y1: -17500,
            z1: 0,
            x2: 39,
            y2: -17264,
            z2: 0,
            x3: 228,
            y3: -16857,
            z3: 0,
            x4: 282,
            y4: -16500,
            z4: 0
        }, type: "bezier3", flag: "right"
    }, {
        controls: {x1: 13, y1: -18500, z1: 0, x2: -32, y2: -17774, z2: 0, x3: 13, y3: -17500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 154, y1: -19500, z1: 0, x2: 147, y2: -18880, z2: 0, x3: 13, y3: -18500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 154, y1: -20500, z1: 0, x2: 154, y2: -2E4, z2: 0, x3: 154, y3: -19500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 154, y1: -21500, z1: 0, x2: 154, y2: -21E3, z2: 0, x3: 154, y3: -20500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 180, y1: -22500, z1: 0, x2: 178, y2: -22017, z2: 0, x3: 154, y3: -21500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: -9, y1: -23531, z1: 0, x2: 215, y2: -23207, z2: 0, x3: 180, y3: -22500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 128, y1: -24500, z1: 0, x2: -23, y2: -24024, z2: 0, x3: -9, y3: -23531, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 270, y1: -25500, z1: 0, x2: 418, y2: -25055, z2: 0, x3: 128, y3: -24500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {
            x1: 28,
            y1: -26500,
            z1: 0,
            x2: -80,
            y2: -25802,
            z2: 0,
            x3: 117,
            y3: -25846,
            z3: 0,
            x4: 270,
            y4: -25500,
            z4: 0
        }, type: "bezier3", flag: "right"
    }, {
        controls: {
            x1: 285,
            y1: -27500,
            z1: 0,
            x2: 382,
            y2: -26807,
            z2: 0,
            x3: 214,
            y3: -26925,
            z3: 0,
            x4: 28,
            y4: -26500,
            z4: 0
        }, type: "bezier3", flag: "right"
    }, {
        controls: {
            x1: 15,
            y1: -28500,
            z1: 0,
            x2: -111,
            y2: -27818,
            z2: 0,
            x3: 200,
            y3: -27900,
            z3: 0,
            x4: 285,
            y4: -27500,
            z4: 0
        }, type: "bezier3", flag: "right"
    }, {
        controls: {x1: 150, y1: -29500, z1: 0, x2: 161, y2: -28957, z2: 0, x3: 15, y3: -28500, z3: 0},
        type: "bezier2",
        flag: "right"
    }, {
        controls: {x1: 150, y1: -30430, z1: 0, x2: 161, y2: -29957, z2: 0, x3: 150, y3: -29500, z3: 0},
        type: "bezier2",
        flag: "right"
    }];
conf.stones = [
    {x: 80, y: -1200}, {x: 0, y: -2500}, {x: 160, y: -4500}, {x: -100, y: -7E3}, {x: -100, y: -9E3},
    {x: -80, y: -10600}, {x: 70, y: -11E3}, {x: 110, y: -11800}, {x: 80, y: -12800}, {x: -180, y: -15E3},
    {x: -200, y: -18500}, {x: -100, y: -19E3}, {x: -80, y: -20600}, {x: 80, y: -21100}, {x: -80, y: -21600},
    {x: 110, y: -22E3}, {x: 120, y: -22400}, {x: -140, y: -24400}, {x: 170, y: -24800},
    // {x: -90, y: -26200},
    {x: -150, y: -26600},
    {x: 240, y: -27400},
    {x: -50, y: -28500},
    {x: -100, y: -29E3}
];
var game = new function () {
    this.haveBindZl = false;
};
game.get = function (g) {
    g = g ? g : 2E3;
    this.gameInfo.task.push({obj: this.carData, start: this.height, end: 200 - this.height, limit: 100, now: 0});
    this.musicPlay("music_enter");
    setTimeout(function () {
        $("#djs").fadeIn(500);
        $(".djs_3").fadeIn(100);
        game.musicPlay("music_green")
    }, 1E3);
    setTimeout(function () {
        $(".djs_3").fadeOut(100);
        $(".djs_2").fadeIn(100);
        // game.musicPlay("music_red")
    }, 2E3);
    setTimeout(function () {
        $(".djs_2").fadeOut(100);
        $(".djs_1").fadeIn(100);
        $("#djs").delay(1E3).fadeOut(500);
        // game.musicPlay("music_green")
    }, 3E3);
    setTimeout(function () {
        $(".djs_1").hide();
        game.gameStart();
        game.musicPlay("music_run")
    }, g)
};
game.init = function () {
    this.width = $(window).width();
    this.height = $(window).height();
    this.hd = 2 * Math.PI;
    this.urlPath = "images/game/";
    this.point = {obj: !1, url: this.urlPath + "point.png"};
    this.stoneData = {obj: !1, url: this.urlPath + "stone.png", limit: 20};
    this.jdData = {
        jdLineObj: !1,
        jdLineUrl: this.urlPath + "jdLine.png",
        jdLineX: -280,
        jdLineY: 0,
        jdBQObj: !1,
        jdBQUrl: this.urlPath + "jdBQ.png",
        jdBQX: -240,
        jdBQY: 0
    };
    this.c_id = "canvas";
    this.c_jQuery;
    this.c_obj;
    this.mapLoaded = 0;
    this.mapStart = (this.height - 1008) / 2 + 10;
    this.mapData = [
        {url: this.urlPath + "map1.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map2.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map3.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map4.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map5.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map6.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map7.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map8.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map9.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map10.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map11.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map12.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map13.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map14.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map15.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map16.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map17.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map18.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map19.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map20.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map21.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map22.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map23.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map24.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map25.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map26.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map27.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map28.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map29.jpg", x: 0, y: 0, obj: !1}, {
            url: this.urlPath + "map30.jpg",
            x: 0,
            y: 0,
            obj: !1
        }, {url: this.urlPath + "map31.jpg", x: 0, y: 0, obj: !1}];
    this.roadData = [];
    this.carData = {
        x: 0,
        y: this.height,
        url: this.urlPath + "car.png",
        obj: !1,
        rotateOffsetY: 0,
        rotate: 0,
        rotateMin: -10,
        rotateMax: 10,
        rotateStep: 1,
        hd: Math.PI / 180,
        life: 2
    };
    this.camera = {
        x: 0,
        y: 0,
        ySpeedA: .05,
        ySpeed: 0,
        ySpeedMax: 10,
        speedObj: !1,
        speedUrl: this.urlPath + "speedShow.png",
        speedX: this.width / 2 - 83,
        speedY: -this.height / 3
    };
    this.reLifePoints = [];
    this.gameInfo = {
        endY: 29700,
        hitLimit: 2,
        hitPointsLimit: 60,
        controlDIV: $("body"),
        over: !1,
        start: !1,
        pause: !1,
        controlType: "zl",
        debug: !1,
        task: [],
        load: !1
    };
    this.offsetTime = this.nowTime = this.lastTime = !1;
    this.speed = 1;
    this.RAF=0;

    this.c_obj = this.g(this.c_id).getContext("2d");
    this.c_jQuery = $(this.g(this.c_id));
    this.c_jQuery.attr("width", this.width).attr("height", this.height).css("position", "absolute").css("left", 0).css("top", 0);
    this.c_obj.translate(this.width / 2, this.height / 2);
    this.carData.life = 2;
    for (var g = 0; g < this.mapData.length; g++) {
        var l = new Image;
        l.src = this.mapData[g].url;
        l.indexID = g;
        l.onload = function () {
            game.mapData[this.indexID].obj = this;
            game.mapData[this.indexID].width = this.width;
            game.mapData[this.indexID].height = this.height;
            if (++game.mapLoaded >= game.mapData.length) {
                game.gameInfo.load = !0;
                for (var g = 0; g < game.mapData.length; g++)switch (g) {
                    case 0:
                        game.mapData[g].y = game.mapStart;
                        break;
                    default:
                        game.mapStart -= game.mapData[g].height, game.mapData[g].y = game.mapStart
                }
            }
        }
    }
    this.loadImage(this.carData.url, function (g) {
        game.carData.obj = g
    });
    this.loadImage(this.point.url, function (g) {
        game.point.obj = g
    });
    this.loadImage(this.stoneData.url, function (g) {
        game.stoneData.obj = g
    });
    this.loadImage(this.jdData.jdLineUrl, function (g) {
        game.jdData.jdLineObj = g
    });
    this.loadImage(this.jdData.jdBQUrl, function (g) {
        game.jdData.jdBQObj = g
    });
    this.loadImage(this.camera.speedUrl, function (g) {
        game.camera.speedObj = g
    });
    this.playControlBind(this.gameInfo.controlType);
    this.reLifePointsInit();
    this.cons();
    this.startRAF();
};
game.startRAF = function(){
    var loop = function(){
        game.gameInfo.load && (game.render(), game.work());
        game.RAF = r(loop);
    };
    var r = this.requestAnimationFrame();
    r(loop);
};
game.stopRAF = function(){
    window.cancelAnimationFrame(game.RAF);
};
game.render = function () {
    this.c_obj.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
    if (this.gameInfo.load)for (var g = 0; g < this.mapData.length; g++)this.mapData[g].y - this.mapData[g].height / 2 + this.camera.y <= this.height && this.mapData[g].y - this.mapData[g].height / 2 + this.camera.y >= -2 * this.height && this.c_obj.drawImage(this.mapData[g].obj, 0, 0, this.mapData[g].width, this.mapData[g].height, this.mapData[g].x - this.mapData[g].width / 2 + this.camera.x, this.mapData[g].y - this.mapData[g].height / 2 + this.camera.y, this.mapData[g].width, this.mapData[g].height);
    this.carRender();
    this.stonesRender();
    this.jdRender();
    this.speedRender();
    this.setPX()
};
game.setPX = function () {
    this.lastTime ? (this.nowTime = this.now(), this.offsetTime = this.nowTime - this.lastTime, this.speed = this.offsetTime / 17, this.speed = 3 >= this.speed ? 1 : 6 >= this.speed ? 3 : 9 >= this.speed ? 6 : 10, this.lastTime = this.nowTime) : this.lastTime = this.now()
};
game.carRender = function() {
    if(this.carData.obj){
        if(this.carData.allow){
            this.c_obj.globalAlpha = this.carData.opacity;
            if(this.carData.dir == 1){
                this.carData.opacity -= 0.04;
                if(this.carData.opacity <= 0){
                    this.carData.opacity = 0;
                    this.carData.dir = -1;
                }
            }
            else if(this.carData.dir == -1){
                this.carData.opacity += 0.04;
                if(this.carData.opacity >= 1){
                    this.carData.opacity = 1;
                    if(--this.carData.repeat < 1){
                        this.carData.allow = false;
                        game.gameInfo.pause = !1;
                        game.musicPlay("music_run")
                        var l = this.getReLifePoint();

                        game.gameStart({carX: l.x, cameraY: -l.y});
                    }
                    else{
                        this.carData.dir = 1;
                    }
                }
            }
        }
        this.c_obj.save();
        this.c_obj.translate(this.carData.x,this.carData.y);
        this.c_obj.rotate(this.carData.rotate*this.carData.hd);
        this.c_obj.translate(-this.carData.x,-this.carData.y+this.carData.rotateOffsetY);
        this.c_obj.drawImage(
            this.carData.obj,
            0,
            0,
            this.carData.obj.width,
            this.carData.obj.height,
            this.carData.x - this.carData.obj.width/2,
            this.carData.y - this.carData.obj.height/2,
            this.carData.obj.width,
            this.carData.obj.height
        );
        this.c_obj.restore();
        if(!this.gameInfo.pause && !this.gameInfo.debug &&this.isHit()){
            this.gameOver("hit");
        };
        this.carAnimation();
        this.c_obj.globalAlpha = 1;
    }
};
game.carSH = function() {
    this.carData.opacity = 1;
    this.carData.repeat = 2;
    this.carData.allow = true;
    this.carData.dir = 1;
};
game.isHit = function (g, l) {
    g = "number" == typeof g ? g : this.carData.x;
    l = "number" == typeof l ? l : this.carData.y;
    xLeftSide = g - this.carData.obj.width / 2;
    xRightSide = g + this.carData.obj.width / 2;
    yTopSide = l - this.carData.obj.height / 2;
    for (var r, w, U, R = 0; R < this.roadData.length; R++)
        if (r = this.roadData[R].x + this.camera.x, w = this.roadData[R].y + this.camera.y, U = this.roadData[R].flag, w >= this.carData.y - this.gameInfo.hitPointsLimit && w <= this.carData.y + this.gameInfo.hitPointsLimit)
            if ("left" == U) {
                if (xLeftSide < r || Math.sqrt(Math.pow(xLeftSide - r, 2) + Math.pow(yTopSide - w, 2)) < this.gameInfo.hitLimit)return true
            }
            else if (xRightSide > r || Math.sqrt(Math.pow(xRightSide - r, 2) + Math.pow(yTopSide - w, 2)) < this.gameInfo.hitLimit)return true;
    return false
};
game.carAnimation = function () {
    for (var g = 0; g < this.gameInfo.task.length; g++){
        this.gameInfo.task[g].obj.y = this.easeInOut(0, this.gameInfo.task[g].now, this.gameInfo.task[g].start, this.gameInfo.task[g].end, this.gameInfo.task[g].limit);
        if(++this.gameInfo.task[g].now >= this.gameInfo.task[g].limit){
            this.gameInfo.task.splice(g, 1)
        }
    }
};
game.work = function () {
    this.gameInfo.over || !this.gameInfo.start || this.gameInfo.pause || (this.camera.ySpeed = this.camera.ySpeed >= this.camera.ySpeedMax ? this.camera.ySpeedMax : this.camera.ySpeed + this.camera.ySpeedA, this.camera.y <= this.gameInfo.endY ? this.camera.y += this.camera.ySpeed * this.speed : this.gameOver("success"))
};
game.gameOver = function (g) {
    if (!this.gameInfo.over)
        switch (this.gameInfo.over = !0, this.gameInfo.start = !1, g) {
        case "hit":
            this.musicPlay("music_hit");
            this.musicPause("music_run");
            if (0 <= --this.carData.life) {
                game.carSH();
                // $("#hitTs").fadeIn(500);
                // $(".ts_hit_text1").hide();
                // $(".ts_hit_text2").hide();
                // $(".ts_hit_text" + (2 - this.carData.life)).show();
                // $("#hitTs").unbind("touchstart");
                // $("#hitTs").bind("touchstart", function () {
                //     $(this).fadeOut(500);


                // });
                this.gameInfo.pause = true;
            }
            else{
                this.gameOverCallBack();
            }
            break;
        case "success":
            this.gameSuccessCallBack(), this.musicPause("music_run")
    }
};
game.gameStart = function (g) {
    g = g ? g : {};
    g.cameraY = "number" == typeof g.cameraY ? g.cameraY : 0;
    g.carX = "number" == typeof g.carX ? g.carX : 0;
    g.carY = "number" == typeof g.carY ? g.carY : 200;
    this.gameInfo.start = !0;
    this.gameInfo.over = false;
    this.camera.y = g.cameraY;
    this.carData.rotate = 0;
    this.carData.x = g.carX;
    this.carData.y = g.carY
};
game.cons = function () {
    var g = new appTools.bezierDebug;
    g.scene = $("#cons");
    for (var l = 0; l < conf.loca.length; l++) {
        var r = g.createData({
            loca: conf.loca[l].controls,
            type: conf.loca[l].type,
            needControl: !1,
            flag: conf.loca[l].flag
        });
        this.roadData = this.roadData.concat(r)
    }
};
game.playControlBind = function (g) {
    if(this.haveBindZl){return;}
    "touch" == (g ? g : "touch") ? this.gameInfo.controlDIV.bind("touchmove", function (g) {
            game.gameInfo.pause || game.gameInfo.over || !game.gameInfo.start || (game.carData.x = g.originalEvent.changedTouches[0].pageX - game.width / 2)
        }) : $(window).bind("deviceorientation", function (g) {
            game.gameInfo.pause || game.gameInfo.over || !game.gameInfo.start || (-5 > g.originalEvent.gamma ? (game.carData.x -= 4, game.carData.rotate -= game.carData.rotateStep, game.carData.rotate = game.carData.rotate <= game.carData.rotateMin ? game.carData.rotateMin : game.carData.rotate) : 5 < g.originalEvent.gamma ? (game.carData.x += 4, game.carData.rotate += game.carData.rotateStep, game.carData.rotate = game.carData.rotate >= game.carData.rotateMax ? game.carData.rotateMax : game.carData.rotate) : 0 > game.carData.rotate ? game.carData.rotate += game.carData.rotateStep : 0 < game.carData.rotate && (game.carData.rotate -= game.carData.rotateStep))
        });
    $(window).bind("touchmove", function (g) {
        g.preventDefault()
    });
    this.haveBindZl = true;
};
game.reLifePointsInit = function () {
    this.reLifePoints = [{x: 0, y: 0}, {x: 0, y: -1500}, {x: 150, y: -3500}, {x: -80, y: -6E3}, {
        x: -95,
        y: -8500
    }, {x: 0, y: -1E4}, {x: 80, y: -13500}, {x: 140, y: -16E3}, {x: 0, y: -2E4}, {x: -5, y: -23E3}, {
        x: 155,
        y: -25200
    }, {x: -160, y: -28200}]
};
game.reLifePointsRender = function () {
    if (this.point.obj)for (var g = 0; g < this.reLifePoints.length; g++)this.c_obj.drawImage(this.point.obj, 0, 0, this.point.obj.width, this.point.obj.height, this.reLifePoints[g].x, this.reLifePoints[g].y + this.camera.y, this.point.obj.width, this.point.obj.height)
};
game.getReLifePoint = function () {
    for (var g = this.reLifePoints.length - 1; 0 <= g; g--)if (this.camera.y >= Math.abs(this.reLifePoints[g].y))return this.reLifePoints[g]
};
game.stonesRender = function () {
    if (this.stoneData.obj)
        for (var g = 0; g < conf.stones.length; g++){
            this.c_obj.drawImage(this.stoneData.obj, 0, 0, this.stoneData.obj.width, this.stoneData.obj.height, conf.stones[g].x - this.stoneData.obj.width / 2, conf.stones[g].y - this.stoneData.obj.height / 2 + this.camera.y, this.stoneData.obj.width, this.stoneData.obj.height);
        }
    this.gameInfo.pause || this.stonesHit()
};
game.stonesHit = function () {
    for (var g = 0; g < conf.stones.length; g++)!this.gameInfo.debug && conf.stones[g].x + this.stoneData.obj.width / 2 >= this.carData.x - this.carData.obj.width / 2 + this.stoneData.limit && conf.stones[g].x - this.stoneData.obj.width / 2 <= this.carData.x + this.carData.obj.width / 2 - this.stoneData.limit && conf.stones[g].y + this.camera.y + this.stoneData.obj.height / 2 >= this.carData.y - this.carData.obj.height / 2 + 2 * this.stoneData.limit && conf.stones[g].y + this.camera.y - this.stoneData.obj.height / 2 <= this.carData.y + this.carData.obj.height / 2 - 2 * this.stoneData.limit && this.gameOver("hit")
};
game.jdRender = function () {
    if (this.jdData.jdBQObj && this.jdData.jdLineObj) {
        this.c_obj.drawImage(this.jdData.jdLineObj, 0, 0, this.jdData.jdLineObj.width, this.jdData.jdLineObj.height, this.jdData.jdLineX - this.jdData.jdLineObj.width / 2, this.jdData.jdLineY - this.jdData.jdLineObj.height / 2, this.jdData.jdLineObj.width, this.jdData.jdLineObj.height);
        var g = this.getJdValue(), l = this.jdData.jdLineY + this.jdData.jdLineObj.height / 2 - 10 - (this.jdData.jdLineObj.height - 140) * g;
        this.c_obj.drawImage(this.jdData.jdBQObj, 0, 0, this.jdData.jdBQObj.width, this.jdData.jdBQObj.height, this.jdData.jdBQX - this.jdData.jdBQObj.width / 2, l - this.jdData.jdBQObj.height / 2, this.jdData.jdBQObj.width, this.jdData.jdBQObj.height);
        this.c_obj.fillStyle = "#ff7200";
        .1 > g ? (this.c_obj.font = "30px Q", this.c_obj.fillText(Math.floor(100 * g), this.jdData.jdBQX + 8, l + 22)) : .1 <= g && 1 > g ? (this.c_obj.font = "30px Georgia", this.c_obj.fillText(Math.floor(100 * g), this.jdData.jdBQX, l + 22)) : (this.c_obj.font = "24px Georgia", this.c_obj.fillText(Math.floor(100 * g), this.jdData.jdBQX - 4, l + 22))
    }
};
game.getJdValue = function () {
    return this.camera.y / this.gameInfo.endY
};
game.speedRender = function () {
    if (this.camera.speedObj) {
        this.c_obj.drawImage(this.camera.speedObj, 0, 0, this.camera.speedObj.width, this.camera.speedObj.height, this.camera.speedX - this.camera.speedObj.width / 2, this.camera.speedY - this.camera.speedObj.height / 2, this.camera.speedObj.width, this.camera.speedObj.height);
        this.c_obj.fillStyle = "#ffffff";
        this.c_obj.font = "30px Q";
        var g = parseInt(15 * this.camera.ySpeed);
        10 > g ? this.c_obj.fillText(g, this.camera.speedX, this.camera.speedY + 15) : 10 <= g && 100 > g ? this.c_obj.fillText(g, this.camera.speedX - 5, this.camera.speedY + 15) : (this.camera.ySpeed == this.camera.ySpeedMax && .4 < Math.random() && (g += Math.floor(4 * Math.random()) - 2), this.c_obj.fillText(g, this.camera.speedX - 20, this.camera.speedY + 15))
    }
};
game.g = function (g) {
    return document.getElementById(g)
};
game.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (g) {
            setTimeout(g, 1E3 / 60)
        }
};
game.cancelAnimationFrame = function(){
    return window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || function (g) {
            clearTimeout(g)
        }
},
    game.loadImage = function (g, l) {
        var r = new Image;
        r.src = g;
        r.onload = function () {
            l && l(this)
        }
    };
game.now = Date.now || function () {
        return (new Date).getTime()
    };
game.easeInOut = function (g, l, r, w, U) {
    return 1 > (l /= U / 2) ? w / 2 * l * l + r : -w / 2 * (--l * (l - 2) - 1) + r
};
game.gameOverCallBack = function () {
    alert("\u6e38\u620f\u5931\u8d25!")
};
game.gameSuccessCallBack = function () {
    alert("\u6e38\u620f\u901a\u5173!")
};
game.musicPlay = function (id) {
    var l = document.getElementById(id);
    l.currentTime = 0;
    "undefined" != typeof WeixinJSBridge ? WeixinJSBridge.invoke("getNetworkType", {}, function (g) {
            l.play()
        }) : l.play()
};
game.musicPause = function (g) {
    document.getElementById(g).pause()
};