!function(a){
    var loading = function(id){
        this.canvas = document.getElementById(id);
        this.init();
    };
    loading.prototype={
        init:function(){
            this.canvas.width = 130;
            this.canvas.height = 130;
            this.ctx = this.canvas.getContext("2d");
            // this.ctx.strokeStyle = this.ctx.createPattern(img,"no-repeat");
            // var pat = this.ctx.createPattern(img,"repeat-x");
            // this.ctx.fillStyle = "yellow";
            // ctx.shadowOffsetX=20;

            // this.ctx.strokeStyle = pat;
        },
        draw:function(deg,percent){
            this.ctx.clearRect(0,0,130,130);
            //画圆
            this.ctx.beginPath();
            this.ctx.shadowBlur=20;//模糊级别
            this.ctx.shadowColor="rgba(255,157,12,1)";//阴影颜色
            this.ctx.strokeStyle = "rgb(255,157,12)";//线条色
            this.ctx.lineWidth=6;//线条粗细
            this.ctx.arc(65,65,50,-0.5*Math.PI,(-0.5+deg)*Math.PI);//圆的路径
            this.ctx.stroke();//画
            this.ctx.closePath();

            //写字
            this.ctx.beginPath();
            this.ctx.shadowBlur=0;//模糊级别
            this.ctx.shadowColor="rgba(255,157,12,0)";//阴影颜色
            this.ctx.strokeStyle = "rgb(255,255,255)";//线条色

            this.ctx.fillStyle="rgb(255,255,255)";
            // this.ctx.lineWidth=1;
            this.ctx.textAlign="center";
            this.ctx.font="20px Arial";
            this.ctx.fillText(percent+"%",67,72);
            this.ctx.closePath();
        },
        mask:function(radius){
            this.ctx.beginPath();
            this.ctx.shadowBlur=0;//模糊级别
            this.ctx.shadowColor="rgba(0,0,0,0)";//阴影颜色
            this.ctx.strokeStyle = "rgb(0,0,0)";//线条色
            this.ctx.lineWidth=1.5;//线条粗细
            this.ctx.arc(65,65,radius,0,2*Math.PI);//圆的路径
            this.ctx.stroke();//画
            this.ctx.closePath();
        }
    };
    var Utils = new function(){
        this.preloadImage = function(ImageURL,callback,realLoading){
            var rd = realLoading||false;
            var i,j,haveLoaded = 0;
            for(i = 0,j = ImageURL.length;i<j;i++){
                (function(img, src) {
                    img.onload = function() {
                        haveLoaded+=1;
                        var num = Math.ceil(haveLoaded / ImageURL.length* 100);
                        if(rd){
                            var p = 2*(haveLoaded / ImageURL.length);
                            Main.a.loader.draw(p,num);
                            $(".num").html("- "+num + "% -");
                        }
                        if (haveLoaded == ImageURL.length && callback) {
                            setTimeout(callback, 500);
                        }
                    };
                    img.onerror = function() {};
                    img.onabort = function() {};

                    img.src = src;
                }(new Image(), ImageURL[i]));
            }
        },//图片列表,图片加载完后回调函数，是否需要显示百分比
            this.lazyLoad = function(){
                var a = $(".lazy");
                var len = a.length;
                var imgObj;
                var Load = function(){
                    for(var i=0;i<len;i++){
                        imgObj = a.eq(i);
                        imgObj.attr("src",imgObj.attr("data-src"));
                    }
                };
                Load();
            },//将页面中带有.lazy类的图片进行加载
            this.browser = function(t){
                var u = navigator.userAgent;
                var u2 = navigator.userAgent.toLowerCase();
                var p = navigator.platform;
                var browserInfo = {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                    iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
                    weixin: u2.match(/MicroMessenger/i) == "micromessenger",
                    taobao: u.indexOf('AliApp(TB') > -1,
                    win: p.indexOf("Win") == 0,
                    mac: p.indexOf("Mac") == 0,
                    xll: (p == "X11") || (p.indexOf("Linux") == 0),
                    ipad: (navigator.userAgent.match(/iPad/i) != null) ? true : false
                };
                return browserInfo[t];
            },//获取浏览器信息
            this.g=function(id){
                return document.getElementById(id);
            },
            this.E=function(selector,type,handle){
                $(selector).on(type,handle);
            },
            this.limitNum=function(obj,len){//限制11位手机号
                var value = $(obj).val();
                var length = value.length;
                //假设长度限制为10
                if(length>len){
                    //截取前10个字符
                    value = value.substring(0,len);
                    $(obj).val(value);
                }
            }
    };
    var Main = new function(){//项目主流程
        this.a={
            win_h:window.innerHeight,
            AndroisImage:[
                "images/bg.jpg",
                "images/codebg.png",
                "images/esc.png",
                "images/guize.png",
                "images/guizeye.png",
                "images/laoyonghu.png",
                "images/loadbtn.png",
                "images/loading-text.png",
                "images/loadingbg.jpg",
                "images/logo.png",
                "images/music.gif",
                "images/music.png",
                "images/p1-bg.jpg",
                "images/p1-img-2.png",
                "images/p1-img-3.png",
                "images/p1-text-1.png",
                "images/p1-text-2.png",
                "images/p1-text-3.png",
                "images/p2-img-1.png",
                "images/p2-img-2.png",
                "images/p2-text-1.png",
                "images/p2-text-2.png",
                "images/p2-text-3.png",
                "images/p2-text-4.png",
                "images/p2-text-5.png",
                "images/p2-text-6.png",
                "images/p2-text-7.png",
                "images/p2-text-8.png",
                "images/p2-text-9.png",
                "images/p3-button-1.png",
                "images/p3-button-2.png",
                "images/p3-button-3.png",
                "images/p3-text-1.png",
                "images/p3-text-3.png",
                "images/p3-text-4.png",
                "images/p3-text-5.png",
                "images/p4-button-1.png",
                "images/p4-button-2.png",
                "images/p4-img-1.png",
                "images/p4-img-2.png",
                "images/p4-img-3.png",
                "images/p4-img-4.png",
                "images/p4-text-1.png",
                "images/p4-text-2.png",
                "images/p5-button-1.png",
                "images/p5-button-2.png",
                "images/p5-img-1.png",
                "images/p5-img-2.png",
                "images/p5-img-3.png",
                "images/p5-text-1.png",
                "images/p5-text-2.png",
                "images/p6-button-2.png",
                "images/p6-button-3.png",
                "images/p6-text-1.png",
                "images/p6-text-3.png",
                "images/p6-text-4.png",
                "images/p6-text-5.png",
                "images/p6-text-6.png",
                "images/p6-text-7.png",
                "images/p7-button-1.png",
                "images/p7-button-2.png",
                "images/p7-text-1.png",
                "images/p7-text-2.png",
                "images/p7-text-3.png",
                "images/p8-img-1.png",
                "images/p9-text-1.png",
                "images/phone.png",
                "images/quedin.png",
                "images/text.png",
                "images/weile.png",
                "images/xinyinghu.png",
                "images/game/car.png",
                "images/game/djs_1.png",
                "images/game/djs_2.png",
                "images/game/djs_3.png",
                "images/game/gameover.png",
                "images/game/goon.png",
                "images/game/jdBQ.png",
                "images/game/jdLine.png",
                "images/game/map1.jpg",
                "images/game/map2.jpg",
                "images/game/map3.jpg",
                "images/game/map4.jpg",
                "images/game/map5.jpg",
                "images/game/map6.jpg",
                "images/game/map7.jpg",
                "images/game/map8.jpg",
                "images/game/map9.jpg",
                "images/game/map10.jpg",
                "images/game/map11.jpg",
                "images/game/map12.jpg",
                "images/game/map13.jpg",
                "images/game/map14.jpg",
                "images/game/map15.jpg",
                "images/game/map16.jpg",
                "images/game/map17.jpg",
                "images/game/map18.jpg",
                "images/game/map19.jpg",
                "images/game/map20.jpg",
                "images/game/map21.jpg",
                "images/game/map22.jpg",
                "images/game/map23.jpg",
                "images/game/map24.jpg",
                "images/game/map25.jpg",
                "images/game/map26.jpg",
                "images/game/map27.jpg",
                "images/game/map28.jpg",
                "images/game/map29.jpg",
                "images/game/map30.jpg",
                "images/game/map31.jpg",
                "images/game/music.png",
                "images/game/point.png",
                "images/game/speedShow.png",
                "images/game/stone.png",
                "images/game/ts_arrow.png",
                "images/game/ts_hit_text1.png",
                "images/game/ts_hit_text2.png",
                "images/game/ts_phone.png",
                "images/game/ts_phones.png",
                "images/game/yun-1.png",
                "images/game/yun-2.png",
                "images/game/yun-3.png",
                "images/game/yun-4.png",
            ],
            ImageList:[
                "images/bg.jpg",
                "images/codebg.png",
                "images/esc.png",
                "images/guize.png",
                "images/guizeye.png",
                "images/laoyonghu.png",
                "images/loadbtn.png",
                "images/loading-text.png",
                "images/loadingbg.jpg",
                "images/logo.png",
                "images/music.gif",
                "images/music.png",
                "images/p1-bg.jpg",
                "images/p1-img-2.png",
                "images/p1-img-3.png",
                "images/p1-text-1.png",
                "images/p1-text-2.png",
                "images/p1-text-3.png",
                "images/p2-img-1.png",
                "images/p2-img-2.png",
                "images/p2-text-1.png",
                "images/p2-text-2.png",
                "images/p2-text-3.png",
                "images/p2-text-4.png",
                "images/p2-text-5.png",
                "images/p2-text-6.png",
                "images/p2-text-7.png",
                "images/p2-text-8.png",
                "images/p2-text-9.png",
                "images/p3-button-1.png",
                "images/p3-button-2.png",
                "images/p3-button-3.png",
                "images/p3-text-1.png",
                "images/p3-text-3.png",
                "images/p3-text-4.png",
                "images/p3-text-5.png",
                "images/p4-button-1.png",
                "images/p4-button-2.png",
                "images/p4-img-1.png",
                "images/p4-img-2.png",
                "images/p4-img-3.png",
                "images/p4-img-4.png",
                "images/p4-text-1.png",
                "images/p4-text-2.png",
                "images/p5-button-1.png",
                "images/p5-button-2.png",
                "images/p5-img-1.png",
                "images/p5-img-2.png",
                "images/p5-img-3.png",
                "images/p5-text-1.png",
                "images/p5-text-2.png",
                "images/p6-button-2.png",
                "images/p6-button-3.png",
                "images/p6-text-1.png",
                "images/p6-text-3.png",
                "images/p6-text-4.png",
                "images/p6-text-5.png",
                "images/p6-text-6.png",
                "images/p6-text-7.png",
                "images/p7-button-1.png",
                "images/p7-button-2.png",
                "images/p7-text-1.png",
                "images/p7-text-2.png",
                "images/p7-text-3.png",
                "images/p8-img-1.png",
                "images/p9-text-1.png",
                "images/phone.png",
                "images/quedin.png",
                "images/text.png",
                "images/weile.png",
                "images/xinyinghu.png",
            ],//图片列表
            gameList:[
                "images/game/car.png",
                "images/game/djs_1.png",
                "images/game/djs_2.png",
                "images/game/djs_3.png",
                "images/game/gameover.png",
                "images/game/goon.png",
                "images/game/jdBQ.png",
                "images/game/jdLine.png",
                "images/game/map1.jpg",
                "images/game/map2.jpg",
                "images/game/map3.jpg",
                "images/game/map4.jpg",
                "images/game/map5.jpg",
                "images/game/map6.jpg",
                "images/game/map7.jpg",
                "images/game/map8.jpg",
                "images/game/map9.jpg",
                "images/game/map10.jpg",
                "images/game/map11.jpg",
                "images/game/map12.jpg",
                "images/game/map13.jpg",
                "images/game/map14.jpg",
                "images/game/map15.jpg",
                "images/game/map16.jpg",
                "images/game/map17.jpg",
                "images/game/map18.jpg",
                "images/game/map19.jpg",
                "images/game/map20.jpg",
                "images/game/map21.jpg",
                "images/game/map22.jpg",
                "images/game/map23.jpg",
                "images/game/map24.jpg",
                "images/game/map25.jpg",
                "images/game/map26.jpg",
                "images/game/map27.jpg",
                "images/game/map28.jpg",
                "images/game/map29.jpg",
                "images/game/map30.jpg",
                "images/game/map31.jpg",
                "images/game/music.png",
                "images/game/point.png",
                "images/game/speedShow.png",
                "images/game/stone.png",
                "images/game/ts_arrow.png",
                "images/game/ts_hit_text1.png",
                "images/game/ts_hit_text2.png",
                "images/game/ts_phone.png",
                "images/game/ts_phones.png",
                "images/game/yun-1.png",
                "images/game/yun-2.png",
                "images/game/yun-3.png",
                "images/game/yun-4.png",
            ],
            loader:new loading("loader"),
            isMusic:true,//音乐初始开启
            iphone:Utils.browser("iPhone"),
            result:false,//抽奖结果
            win:false,//超过100公里表示胜利，可抽奖
            distance:0,//公里数
            havePrize:false,//是否已经抽过奖
            touch:{
                ScrollObj:$(".rule"),
                isScroll:false,
                limit:0,
                overlimit:false,
                StartY:0,
                NewY:0,
                addY:0,
                scrollY:0,
            },
            needLoad:true,//游戏资源未加载
            bgm:{
                obj:document.getElementById("bgmusic"),
                isPlay:false,
            },
            codeClock:undefined,
            car:$(".car"),
            p1touchAllow:false
        };//主参数
        var Data = this.a;
        this.f = {
            androidStart : function(){
                $(".P_loading").removeClass("none");
                Utils.preloadImage(Data.AndroisImage,function(){
                    var radius = 30;
                    var clock = setInterval(function(){
                        if(radius>0){
                            radius-=1;
                            Main.a.loader.mask(radius);
                            return;
                        }
                        $("#loader").fadeOut(function(){
                            $(".fangxiangpan").fadeIn(function(){
                                // $(".fangxiangpan").addClass("breath");
                            });
                        });
                        clearInterval(clock);
                    },20);//黑色遮罩
                    Utils.lazyLoad();
                },true)
            },

            iosStart:function(){
                $(".P_loading").removeClass("none");
                var total = 100,
                    now = 0,
                    per=0,
                    deg=0;
                var clock = setInterval(function(){
                    // now+=parseInt(3*Math.random());
                    now+=1;

                    per = parseInt((now/total)*100);
                    deg = 2*(now/total);
                    Data.loader.draw(deg,per);
                    if(per>100){
                        per=100;
                        deg = 2*Math.PI;
                        Data.loader.draw(2*Math.PI,100);
                        // start();
                        var radius = 30;
                        var clock2 = setInterval(function(){
                            if(radius>0){
                                radius-=1;
                                Main.a.loader.mask(radius);
                                return;
                            }
                            $("#loader").fadeOut(function(){
                                $(".fangxiangpan").fadeIn(function(){
                                    // $(".fangxiangpan").addClass("breath");
                                });
                            });
                            clearInterval(clock2);
                        },20);//黑色遮罩
                        clearInterval(clock);
                    }
                },20);
                var start = function(){
                    $(".P_loading").fadeOut(function(){
                        $(".P_video").removeClass("none");
                        var video = document.getElementById("video");
                        video.play();
                    });
                };
                // $(".P_video").removeClass("none");
                // var video = document.getElementById("video");
                // video.play();
                // video.currentTime = 44;

                // if(Main.a.iphone){
                //     document.addEventListener("WeixinJSBridgeReady",function(){
                //         video.play();
                //         video.currentTime = 44;
                //     },false)
                // }
            },
            playbgm:function(){
                Data.bgm.obj.play();
                Data.bgm.obj.volume = 1;
                // Data.bgm.obj.volume = 0;
                // $(".bgm").addClass("music_rotate").removeClass("stop_music");
                $(".bgm").css("backgroundImage","url('images/music.gif?v4')");
                Data.bgm.isPlay = true;
            },
            pausebgm:function(){
                Data.bgm.obj.pause();
                // $(".bgm").addClass("stop_music");
                $(".bgm").css("backgroundImage","url('images/music.png?v6')");
                Data.bgm.isPlay = false;
            },
            loadingleave:function(){
                $(".P_loading").fadeOut();
            },
            pvideo:function(){
                $(".P_video").fadeIn();
                var video = document.getElementById("video");
                video.play();


                video.addEventListener("touchstart",function(){
                    this.currentTime = 44;
                });

            },
            pvideoleave:function(){
                $(".P_video").fadeOut();
            },
            p1:function(){
                this.scrollinit();
                Data.car.on("webkitAnimationEnd",this.carAnimationHand1).addClass("drive_from_bottom");
                $(".top").removeClass("none");
                $(".P1").fadeIn();
            },
            carAnimationHand1:function(){
                $(".arrow").fadeIn();
                $(this).off("webkitAnimationEnd").removeClass("opacity drive_from_bottom");
                Data.p1touchAllow = true;
            },
            carAnimationHand2:function(){
                $(".arrow").fadeOut();
                $(".P1").addClass("PagetoUp");
                setTimeout(function(){
                    document.getElementById("start").play();
                    // main.f.pausebgm();//bgm暂停
                        Main.f.p1leave();
                        Main.f.pgame();//视图层面
                        Main.f.gameStart();//数据
                },1000)
            },

            p1leave:function(){
                $(".P1").fadeOut();
            },
            gameStart:function(){
                game.urlPath = "images/game/";

                setTimeout(function(){
                    $("#ts").fadeOut(500,function () {
                        $(".ts_text").removeClass("delay18")
                    });
                    $("#yun_1,#yun_4").addClass("move_to_right_short");
                    $("#yun_2,#yun_3").addClass("move_to_left_short");
                    setTimeout(function()
                    {
                        game.get(4500);
                    },500);
                    game.init();
                },2000)


            },
            pgame:function(){
                $(".top").addClass("none");
                // Main.f.pausebgm();
                $(".P_game").fadeIn();
            },
            pgameleave:function(){
                $(".P_game").fadeOut(function(){
                    Main.f.playbgm();
                    $(".top").removeClass("none");
                });
            },
            gameLose:function(){
                Data.win = false;
                // Data.win = true;
                $(".lose-distance").html(parseInt(Data.distance));
                if((60>Data.distance)&&(Data.distance>0)){
                    $(".pgr-1").removeClass("none");
                }
                if((99>Data.distance)&&(Data.distance>60)){
                    $(".pgr-2").removeClass("none");
                }
            },
            gameWin:function(){
                Data.win = true;
                $(".win-distance").html(parseInt(Data.distance));
                if((110>Data.distance)&&(Data.distance>100)){
                    $(".pgr-3").removeClass("none");
                    return;
                }
                else if((Data.distance>110)&&(120>Data.distance)){
                    $(".pgr-4").removeClass("none");
                    return;
                }
                else{
                    $(".pgr-5").removeClass("none");
                    return;
                }
            },
            p2:function(){
                console.log(2)
            },
            p2leave:function(){

            },
            replay:function(){
                document.getElementById("start").play();//极速前进音乐
                $("#gameover,#win").hide();//游戏结束去掉
                $("#ts").show();
                $(".P_bg").addClass("none");//背景去掉
                $("#yun_1,#yun_4").removeClass("move_to_right_short");//云1复位
                $("#yun_2,#yun_3").removeClass("move_to_left_short");//云2复位
                setTimeout(function(){
                    $("#yun_1,#yun_4").addClass("move_to_right_short");//云1复位
                    $("#yun_2,#yun_3").addClass("move_to_left_short");//云2复位
                    $("#ts").fadeOut(500);
                    setTimeout(function()
                    {
                        game.get(4500);
                    },500);
                    game.init();
                },2000)
            },
            presult:function(){
                $(".P_bg").removeClass("none");//调出背景
                game.stopRAF();
                if(Data.win){
                    $(".win").removeClass("none");
                }
                else{
                    $(".lose").removeClass("none");
                }
                $(".P_game_result").fadeIn();
            },
            presultleave:function(){
                $(".P_game_result").fadeOut(function(){
                    $(".win,.lose,.pgr-text").addClass("none");
                });
            },
            pmore:function(){
                $(".P_more").fadeIn();
            },
            pmoreleave:function(){
                $(".P_more").hide();
            },
            pfill:function(){
                $(".P_fill").fadeIn();
            },
            pfillleave:function(){
                $(".P_fill").fadeOut();
            },
            prize:function(){
                Data.result = 0;//未中奖
                // Data.result = 1;//奖品1,电影券
                // Data.result = 2;//奖品2，ipad
                // Data.result = 3;//奖品3，applewatch
            },
            prizeresult:function(){
                if(!Data.result){
                    $(".noPrize").removeClass("none");
                }
                else{
                    switch(Data.result){
                        case 1:
                            $(".prize-pic1").removeClass("none");
                            break;
                        case 2:
                            $(".prize-pic2").removeClass("none");
                            break;
                        case 3:
                            $(".prize-pic3").removeClass("none");
                            break;
                    }
                    $(".havePrize").removeClass("none");
                }
                $(".P_prize_result").fadeIn();
            },
            prizeresultleave:function(){
                $(".P_prize_result").fadeOut(function(){
                    $(".noPrize").addClass("none");
                });
            },
            pshare:function(){
                $(".P_share").fadeIn();
            },
            scrollinit:function(){
                Data.touch.limit = Data.win_h-Data.touch.ScrollObj.height();//滚动限制
                Data.touch.StartY=0;
                Data.touch.NewY=0;
                Data.touch.addY=0;
                Data.touch.scrollY=0;
            }
        };//主函数
    };
    var Media = new function(){
        this.mutedEnd = false;//静音播放结束标志
        this.WxMediaInit=function(){//针对ios系统在微信环境的调整
            var _self = this;
            if(!Utils.browser("weixin")){//非微信环境直接跳出
                this.mutedEnd = true;
                return;
            }
            if(!Utils.browser("iPhone")){
                _self.mutedEnd = true;
                return;
            }
            document.addEventListener("WeixinJSBridgeReady",function(){
                var $media = $(".iosPreload");
                $.each($media,function(index,value){//将需要静音播放的media统一播放
                    _self.MutedPlay(value["id"]);
                    if(index+1==$media.length){
                        _self.mutedEnd = true;
                    }
                });
            },false)
        },
        this.MutedPlay=function(string){//静音播放
            var str = string.split(",");//id数组
            var f = function(id){//播放函数
                var media = Utils.g(id);
                media.volume = 0;
                media.play();
                // setTimeout(function(){
                media.pause();
                media.volume = 1;
                media.currentTime = 0;
                // },100)
            };
            if(!(str.length-1)){//只有一个media需要播放
                f(str[0]);
                return 0;
            }
            str.forEach(function(value,index){
                f(value);
            })
        },
        this.playMedia=function(id){//播放音频
            var _self = this;
            var clock = setInterval(function(){//静音结束后可播放
                if(_self.mutedEnd){
                    Utils.g(id).play()
                    clearInterval(clock);
                }
            },20)
        }
    };

    a.output = {main:Main,media:Media,utils:Utils};
/*-----------------------------事件绑定--------------------------------*/
}(window)
$(function(){
    var main = output.main,
        media = output.media,
        utils = output.utils;
    media.WxMediaInit();


    var ios = utils.browser("iPhone");
    if(ios){
        main.f.iosStart();
    }
    else{
        main.f.androidStart();
        main.f.playbgm();
    }
    game.gameOverCallBack = function (e) {//数据层面
        $("#gameover").fadeIn(500);
        var score = main.a.distance = game.getJdValue()*300;
        if(score>100){
            main.f.gameWin();
        }
        else{
            main.f.gameLose()//标记为失败
        }

        setTimeout(function(){
            main.f.pgameleave();//视图改变
            main.f.presult();
        },2000);
    };
    game.gameSuccessCallBack = function (e) {//数据层面
        $("#win").fadeIn(500);
        main.a.distance = game.getJdValue()*300;
        main.f.gameWin();
        setTimeout(function(){
            main.f.pgameleave();//视图改变
            main.f.presult();
        },2000);
    };


    $(".fangxiangpan").on({
        touchstart:function(){
            document.getElementById("start").play();
            $(this).addClass("press");
        },
        touchend:function(){
            $(this).removeClass("press");
            main.f.loadingleave();
            //////////////////////////正常流程/////////////////////////////
            main.f.pvideo();
            main.f.pausebgm();
            //////////////////////////正常流程/////////////////////////////

            ///////////////////////测试流程////////////////////////////////
            // main.a.distance = 30;//失败,无法抽奖
            // main.a.distance = 70;//失败,无法抽奖
            // main.a.distance = 105;//成功,可以抽奖
            // main.a.distance = 115;
            // main.a.distance = 140;
            // if(main.a.distance > 100){
            //     main.f.gameWin();
            // }
            // else{
            //     main.f.gameLose();
            // }
            // main.f.presult();//游戏结果页
            ///////////////////////测试流程////////////////////////////////
        },
    });
    var touchNumber = 1;
    $(".p1-btn").on({
        touchstart:function(){
            $(this).attr("src","images/p1-button-2.png");
            if(touchNumber>1){return;}
            touchNumber+=1;
            document.getElementById("start").play();
            // main.f.pausebgm();//bgm暂停
            setTimeout(function(){
                main.f.gameStart();//数据
                main.f.p1leave();
                main.f.pgame();//视图层面
            },2000);
        },
        touchend:function(){
            $(".p1-btn").attr("src","images/p1-button-1.png");
        }
    });
    $("#video").on({
        ended:function(){
            main.f.pvideoleave();
            main.f.p1();
            main.f.playbgm();
            utils.lazyLoad();//把所有lazy加载
        },
        timeupdate:function(){
            if(this.currentTime>10&&main.a.zhenNeedLoad){//静默加载51张序列帧
                main.a.zhenNeedLoad = false;
                main.f.loadzhen();
            }
            if((!ios)||(!main.a.needLoad)){return;};

            if(this.currentTime>25){//iPhone加载游戏图片
                main.a.needLoad = false;
                utils.preloadImage(main.a.gameList);
            }
        }
    });

    $(".pgr-btn1-win").on("touchstart",function(){//胜利结果页，我要抽奖
        main.f.presultleave();
        main.f.pfill();
    });
    $(".pgr-btn2-win").on("touchstart",function(){//胜利结果页，再次挑战
        main.f.replay();
        main.f.presultleave();
        main.f.pgame();
    });

    $(".pgr-btn3-win").on("touchstart",function(){//胜利结果页，邀友来战
        main.f.pshare();
    });



    $(".P_share").on("touchstart",function(){//关闭分享提示页
        $(this).fadeOut();
    });

    $(".pf-btn").on("touchstart",function(){//立即抽奖
        if(main.a.havePrize){//抽过奖无法抽奖
            $(".havePrizeBox").removeClass("none");
            return;
        }
        //没抽过奖
            var code = $("#code").val();
            if(code.length!=4){
                $(".codeError").removeClass("none");//验证码错误提示框
                return;
            }
            main.f.pfillleave();
            main.f.prize();//抽奖
            main.f.prizeresult();
    });

    $(".ppr-btn1").on("touchstart",function(){//新用户注册
        window.location.href = "https://m.lu.com/m/auth?actionId=lu010&actionType=20#cover";//新客
    });



    $(".ppr-btn2").on("touchstart",function(){//未中奖-邀友来战
        main.f.pshare();
    });


    /*----------未中奖页面按钮------------*/
    $(".new_user").on("touchstart",function(){
        $(".new_k").removeClass("none");
    });
    $(".old_user").on("touchstart",function(){
        $(".old_k").removeClass("none");
    });
    $(".invite").on("touchstart",function(){//邀友来战
        main.f.pshare();
    });
    $(".again").on("touchstart",function(){
        main.f.replay();
        main.f.prizeresultleave();
        main.f.pgame();
    });

    $(".newxx").on("touchstart",function(){
       $(".new_k").addClass("none");
    });
    $(".newbtn").on("touchstart",function(){
        window.location.href = "https://m.lu.com/m/auth?actionId=lu010&actionType=20#cover";//新用户注册
    });

    $(".oldbtn2").on("touchstart",function(){//速去购买
        window.location.href = "https://m.lu.com/list/#/?activityId=B2C20161017&_k=p1ixi8";//老客
    });
    $(".oldbtn3").on("touchstart",function(){//邀友来战
        window.location.href = "https://www.playlu.com/juice/show";//好友推荐
    });
    $(".oldxx").on("touchstart",function(){
        $(".old_k").addClass("none");
    });
    /*----------未中奖页面按钮------------*/

    /*----------游戏失败页面按钮------------*/
    $(".pgr-btn3-lose").on("touchstart",function(){//挑战更多
        main.f.pmore();
    });
    $(".pgr-btn1-lose").on("touchstart",function(){//不服再战
        main.f.replay();
        main.f.presultleave();
        main.f.pgame();
    });
    $(".pgr-btn2-lose").on("touchstart",function(){//邀友来战
        main.f.pshare();
    });
    /*----------游戏失败页面按钮------------*/

    /*----------更多活动------------*/

    $(".morexx").on("touchstart",function(){
        main.f.pmoreleave();
    });

    $(".pm-btn1").on("touchstart",function(){//新用户注册
        window.location.href = "https://m.lu.com/m/auth?actionId=lu010&actionType=20#cover";//新客
    });

    $(".pm-btn4").on("touchstart",function(){
        window.location.href="https://www.playlu.com/juice/show";//好友推荐
    });

    $(".pm-btn3").on("touchstart",function(){
        window.location.href="https://m.lu.com/list/#/?activityId=B2C20161017&_k=p1ixi8";//老客
    });
    /*----------更多活动------------*/

    $(".havePrize-btn1").on("touchstart",function(e){//已中奖提示弹框，挑战更多
        e.stopPropagation();
        main.f.pmore();
    });
    $(".havePrize-btn2").on("touchstart",function(e){//已中奖提示弹框，邀友来战
        e.stopPropagation();
        main.f.pshare();
    });
    $(".havePrizeBox").on("touchstart",function(){//关闭已经中过奖的提示
        $(this).addClass("none");
    });
    $(".caution").on("touchstart",function(){//打开规则
        $(this).addClass("none");
        $(".P_rule").removeClass("none");
        main.f.scrollinit();
    });
    $(".iknow").on("touchstart",function(){
        $(".P_rule").addClass("none");
        $(".caution").removeClass("none");
        main.a.touch.ScrollObj[0].style.webkitTransform="translate3d(0,0,0)";
    });
    $(".P_rule").on("touchend",function(){//点击关闭规则页
        if(!main.a.touch.isScroll){
            $(this).addClass("none");
        }
        main.a.touch.isScroll = false;
    });
    $(".rule").on({
       touchstart:function(e){
           main.a.touch.StartY = e.originalEvent.changedTouches[0].pageY;
       },
        touchmove:function(e){
            main.a.touch.isScroll = true;

            main.a.touch.NewY = e.originalEvent.changedTouches[0].pageY;
            main.a.touch.addY = 1.5*(main.a.touch.NewY-main.a.touch.StartY);
            main.a.touch.StartY = main.a.touch.NewY;
            if(main.a.touch.scrollY+main.a.touch.addY<0){
                if(main.a.touch.scrollY+main.a.touch.addY>-920){
                    main.a.touch.scrollY+=main.a.touch.addY;
                }
                else{
                    main.a.touch.scrollY=-920;
                }
            }
            else{
                main.a.touch.scrollY=0;
            }
            main.a.touch.ScrollObj[0].style.webkitTransform="translate3d(0,"+main.a.touch.scrollY+"px,0)";
        },
        touchend:function(e){

        }
    });


    // $("#ts").bind("touchstart",function()
    // {
    //     $("#yun_1").addClass("move_to_right_short");
    //     $("#yun_2").addClass("move_to_left_short");
    //     $(this).fadeOut(500);
    //     setTimeout(function()
    //     {
    //         game.get(4500);
    //     },500);
    // });
    // $("#gameover").on("touchstart",function(){
    //     main.f.pgameleave();//视图改变
    //     main.f.presult();
    // });
    // $("#video").on("touchstart",function(){//快速跳过视频
    //     $(this)[0].currentTime = 44;
    // });
    $(".bgm").on("touchstart",function(){//音乐开关
        if(!main.a.bgm.isPlay){
            main.f.playbgm();
            return;
        }
        main.f.pausebgm();
    });

    $(".Error").on("touchstart",function(){
       $(this).addClass("none");
    });
    var isClock,time;
    var clockObj = $(".clock"),
        codebg1 = $(".codebg1"),
        codebg2 = $(".codebg2");
    $(".getCode").on("touchstart",function(){//获取验证码
        var phoneNumber = $("#phoneNumber").val();
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(phoneNumber))){
            $(".phoneError").removeClass("none");//手机号错误提示框
            return;
        }
        if(isClock){return};
        isClock = true;//开启倒计时标志
        time = 60;//时间
        codebg1.addClass("none");//文字消失
        codebg2.removeClass("none");//白底出现
        clockObj.html(time+"s").removeClass("none");
        main.a.codeClock = setInterval(function(){
            time--;
            if(time>0){
                clockObj.html(time+"s")
                return;
            }
            codebg1.removeClass("none");
            clockObj.addClass("none");
            codebg2.addClass("none");
            isClock = false;
            clearInterval(main.a.codeClock);
        },1000)
    });



    $(window).on("orientationchange",function(e){
        if(window.orientation == 0 || window.orientation == 180 )
        {
            $(".hp").hide();
        }
        else if(window.orientation == 90 || window.orientation == -90)
        {
            $(".hp").show();
        }
    });
    var p1touch = {
        startY:0,
    };

    $(".P1").on({
        touchstart:function(e){
            p1touch.startY = e.originalEvent.changedTouches[0].pageY;
        },
        touchend:function(e){
            if(!main.a.p1touchAllow){return;};
            if((e.originalEvent.changedTouches[0].pageY-p1touch.startY)<-30){
                // main.a.car.addClass("car_leave").on("webkitAnimationEnd",main.f.carAnimationHand2);
                    main.f.pgame();//视图层面
                    document.getElementById("start").play();
                    setTimeout(function(){
                        main.a.car.addClass("car_leave");
                        $(".arrow").fadeOut();
                        $(".P1").addClass("PagetoUp");
                    },1000);
                    setTimeout(function(){
                        // main.f.pausebgm();//bgm暂停
                        main.f.p1leave();
                        main.f.gameStart();//数据
                    },1500);
            }
            $(".P1").off("touchend")
        }
    });
    $("body").on("touchmove",function(e){
        e.preventDefault();
    });
});



