(function () {
    'use strict';

    class Utils {

        constructor() {
        }

        static getSign(d) {
            if(d >= 0) {
                return 1
            }
            return -1;
        }

        static randomSign() {
            var n = Math.random();
            if(n > 0.5) {
                return -1;
            }
            return 1;
        }

        static randomExt(num) {
            let n = Math.random();
            return Math.floor(n*num);
        }

        static randomExt2(min, max) {
            let d = max - min;
            return min + Utils.randomExt(d);
        }

        static randomRangePoint(point, r) {
            let rx = point.x + Utils.randomSign() * Utils.randomExt(r);
            let ry = point.y + Utils.randomSign() * Utils.randomExt(r);
            return new Laya.Point(rx, ry);
        }

        //依据权重随机，要求arr的每一项的w属性为权重
        //totalWeight为空时自动从arr计算总权重
        static calcRandomWeight(arr, totalWeight) {
            let weightSum = totalWeight;
            let weightArr = arr;
            if(!weightSum) {
                weightSum = 0;
                for(const data of arr) {
                    weightSum = weightSum+data.w;
                }
            }
            let d = Utils.randomExt(weightSum);

            let pre = {w: -1};
            let ret = null;
            for(const cur of arr) {
                if(d >= pre.w && d < (cur.w + pre.w)) {
                    ret = cur;
                    break;
                } else {
                    pre.w += cur.w;
                }
            }
            return ret;
        }

        static map2Obj(map) {
            let obj = Object.create(null);
            for(let[k,v] of map) {
                obj[k] = v;
            }
            return obj;
        }

        static obj2Map(obj) {
            let map = new Map();
            for(let k of Object.keys(obj)) {
                map.set(k, obj[k]);
            }
            return map;
        }

        static fadeout(owner, time, handler) {
            owner.alpha = 1;
            Laya.Tween.to(owner, { alpha: 0 }, time,
                null,
                handler, 0);
        }

        static fadein(owner, time, handler) {
            owner.alpha = 0;
            Laya.Tween.to(owner, { alpha: 1 }, time,
                null,
                handler, 0);
        }
    }

    class TempletMgr {

        constructor() {
            this._templetMap = new Map();
            this._waitingMap = new Map();
        }

        clear() {
            this._templetMap.clear();
            this._waitMap.clear();
        }

        purge() {
            for(const [key, templet] of this._templetMap) {
                if(!this._waitingMap.has(key)){
                    if(templet.referenceCount==0) {
                        templet.destroy();
                        this._templetMap.delete(key);
                    }
                }
            }
        }

        static getInstance() {
            return TempletMgr.instance?TempletMgr.instance:TempletMgr.instance = new TempletMgr();
        }

        load(path, skin, aniMode, completeHandler) {
            // console.debug("TempletMgr load", path, skin, aniMode);
            let key = skin ? path+"_"+skin : path+"_"+(aniMode?1:0);
            let templet = this._templetMap.get(key);
            if(!templet){
                templet = new Laya.Templet();
                templet.on(Laya.Event.COMPLETE, this, this.onTempletLoaded, [key, aniMode]);
                templet.on(Laya.Event.ERROR, this, this.onTempletLoadError, [key, aniMode]);
                templet.loadAni(path);
                this._templetMap.set(key, templet);
                let handlerArray = new Array();
                this._waitingMap.set(key, handlerArray);
                if(completeHandler != null) {
                    handlerArray.push(completeHandler);
                }
            }else{
                let handlerArray = this._waitingMap.get(key);
                if(handlerArray){
                    if(completeHandler != null) {
                        handlerArray.push(completeHandler);
                    }
                }else{
                    if(completeHandler != null) {
                        completeHandler.runWith([templet, aniMode]);
                    }
                }
            }
        }

        onTempletLoaded(key, aniMode) {
            let templet = this._templetMap.get(key);
            let handlerArray = this._waitingMap.get(key);
            if(templet && handlerArray) {
                for(const handler of handlerArray) {
                    handler.runWith(templet, aniMode);
                }
            }
            this._waitingMap.delete(key);
        }

        onTempletLoadError(key, aniMode) {
            //报个错？
            let templet = this._templetMap.get(key);
            if(templet) {
                templet.destroy();
                this._templetMap.delete(key);
            }
                this._waitingMap.delete(key);
        }
    }

    class Spine extends Laya.Skeleton {
        constructor(skin=null) {
            super();
            this.skin = skin;
            this.loop = true;
            this.curAnim = "";
            this.loadedHandlers = new Array();
            this.eventHandlers = new Array();
            this.completeHandlers = new Array();

        }

        //添加加载完成回调
        addLoadedHandler(handler) {
            this.loadedHandlers.push(handler);
        }

        //添加动画播放完成回调
        addCompleteHandler(handler) {
            this.completeHandlers.push(handler);
        }

        //添加帧事件回调
        addEventHandlers(handler) {
            this.eventHandlers.push(handler);
        }

        //加载动画
        loadAnim(path, skin, aniMode) {
            if(skin) {
                this.skin = skin;
            }
            TempletMgr.getInstance().load(path, this.skin, aniMode, Laya.Handler.create(this, this.onLoadedExt));
            // this.on(Laya.Event.STOPPED, this, this.onCompleteExt);
            // this.on(Laya.Event.LABEL, this, this.onEventExt);
        }

        playAnim(aniName, loop = true) {
            if(this._inited){
                this.play(aniName, true);
            }
            this.loop = loop;
            this.curAnim = aniName;
        }

        stopAnim() {
            if(this._inited) {
                this.stop();
            }
            this.loop = null;
            this.curAnim = null;
        }

        getCurAnim() {
            return this.curAnim;
        }

        //========================================================================
        onCompleteExt() {
            this.completeHandlers.forEach(function(func) {
                func();
            });
            if(this.loop) {
                this.play(this.curAnim, false);
            }
        }

        onEventExt(eventData) {
            this.eventHandlers.forEach(function(func) {
                func(eventData);
            });
        }

        onLoadedExt(templet, aniMode) {
            this.init(templet, aniMode?1:0);
            if(this.skin){
                this.showSkinByName(this.skin);
            }else{
                this.showSkinByIndex(1);
            }
            this._inited = true;

            if(this.curAnim) {
                this.play(this.curAnim, this.loop);
            }

            this.loadedHandlers.forEach(function(func) {
                func();
            });
        }



    }

    class Cat extends Spine {
        constructor(data) {
            super();
            this.catData = data;
            this.maskAnim = null;
            this.activeAI = false;
            this.zOrder = 50;
        }

        get buildingId() {
            return this._buildingId;
        }

        set buildingId(buildingId) {
            this._buildingId = buildingId;
        }

        get spaceId() {
            return this._spaceId;
        }

        set spaceId(spaceId) {
            this._spaceId = spaceId;
        }

        getId() {
            return this.catData.getCatId();
        }

        getIsActive() {
            return this.activeAI;
        }

        setIsActive(active) {
            this.activeAI = active;
        }

        //获得信息
        getData() {
            return this.catData;
        }

        onLoadedExt(templet, aniMode) {
            super.onLoadedExt(templet, aniMode);
            this.initMaskAnim();
        }

        registerMouseDown(listener, func) {
            let panel =  new Laya.Panel();
            panel.mouseThrough = true;
            // panel.bgColor = "#c3504e";
            panel.width = 200;
            panel.height = 200;
            panel.centerX = 0.5;
            panel.y = -200;
            panel.on(Laya.Event.MOUSE_DOWN, listener, func);
            this.panel = panel;
            this.addChild(panel);
        }

        //初始化叹号
        initMaskAnim() {
            let anim = new Spine();
            this.maskAnim = anim;
            anim.y = -250;
            anim.visible = false;
            let outSelf = this;
            anim.addLoadedHandler(function() {
                outSelf.maskAnimLoaded = true;
                outSelf.addChild(anim);
            });
            anim.loadAnim("anim/UIdonghua.sk", null, 0);
        }

        showMaskAnim(animName, showDuration, handler) {
            if(this.maskAnim) {
                this.maskAnim.visible = true;
            }
            if(this.maskAnimLoaded){
                this.maskAnim.play(animName, true);
            }
            if(!showDuration) {
                Laya.timer.clear(this, this.hideMaskAnim);
            }else {
                Laya.timer.once(showDuration, this, this.hideMaskAnim, [handler]);
            }
        }

        hideMaskAnim(handler) {
            if(this.maskAnimLoaded){
                this.maskAnim.stop();
                this.maskAnim.visible = false;
            }
            if(handler != null) {
                handler.run();
            }
        }

        onDestroy() {
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
        }

    }

    class EventMgr {

        constructor() {
            this.eventDispatcher = new Laya.EventDispatcher();
        }
        
        static getInstance() {
            return EventMgr.instance?EventMgr.instance:EventMgr.instance = new EventMgr();
        }

        //广播消息
        postEvent(eventName, argv) {
            this.eventDispatcher.event(eventName, argv);
        }

        //注册消息
        registEvent(eventName, caller, listener) {
            this.removeEvent(eventName, caller, listener);
            this.eventDispatcher.on(eventName, caller, listener);
        }

        //移除消息
        removeEvent(eventName, caller, listener) {
            this.eventDispatcher.off(eventName, caller, listener, false);
        }

        //移除所有消息
        removeAllEvent() {
            this.eventDispatcher.offAll(eventName);
        }
    }

    let ConfigExt = ".txt";
    class ConfigMgr {

        constructor() {
            this._Protobuf = protobuf;
            this._configs = new Map();
            this.configClassMap = new Map();
            this._registClass();
        }

        static getInstance() {
            return ConfigMgr.instance?ConfigMgr.instance:ConfigMgr.instance = new ConfigMgr();
        }

        _registClass() {
            this.configClassMap.set("Const", pattern.Const);
            this.configClassMap.set("ActionEvent", pattern.ActionEvent);
            this.configClassMap.set("Role", pattern.Role);
            this.configClassMap.set("BuildingBase", pattern.BuildingBase);
            this.configClassMap.set("Building", pattern.Building);
            this.configClassMap.set("Scene", pattern.Scene);
            this.configClassMap.set("Translate", pattern.Translate);
            this.configClassMap.set("Foods", pattern.Foods);
            this.configClassMap.set("FoodsList", pattern.FoodsList);
            this.configClassMap.set("Task", pattern.Task);
            this.configClassMap.set("TaskList", pattern.TaskList);
            this.configClassMap.set("FishingBaits", pattern.FishingBaits);
            this.configClassMap.set("FishingFishes", pattern.FishingFishes);
            this.configClassMap.set("FishingResult", pattern.FishingResult);
        }

        getConfigList() {
            let arr = new Array();
            this.configClassMap.forEach((value , key) => {
                arr.push(key);
            });
            return arr;
        }

        getConfigCount() {
            return this.configClassMap.size;
        }

        loadConfig(ConfigName, handler) {
            if(this._configs.has(ConfigName)){
                if(handler){
                    handler.runWith(this._configs.get(ConfigName));
                }
                return;
            }
            let classType = this.configClassMap.get(ConfigName);
            if(classType){
                Laya.loader.load("config/" + ConfigName + ConfigExt, Laya.Handler.create(this, this._onBufferLoaded,[classType, ConfigName, handler]), null, Laya.Loader.BUFFER);
                return;
            } else {
                console.debug("不存在的proto: " + ConfigName + "请在_registClass中注册!");
            }
        }

        getConfig(ConfigName) {
            if(this._configs.has(ConfigName)) {
                return this._configs.get(ConfigName);
            }
            this.loadConfig(ConfigName);
            return null;
        }

        getItemById(ConfigName, id) {
            let config = this.getConfig(ConfigName);
            if(config) {
                return config.get(id);
            }
            return null;
        }

        _onBufferLoaded(proto, name, handler, buffer) {
            let config = new Map();
    		let data = new Laya.Byte(buffer);
    		data.endian = Laya.Byte.BIG_ENDIAN;
    		while(data.pos<data.length) {
    			let len = data.readInt16();
    			let array = data.readUint8Array(data.pos, len);
                let item = proto.decode(array); 
                config.set(item.Id, item);
            }
            this._configs.set(name, config);
            if(handler != null) {
                handler.runWith(config);
            }
        }
    }

    class CatData {

        constructor(configId) {
            this.config = ConfigMgr.getInstance().getItemById("Role", String(configId));
            this.catId = ++CatData.catIdMax;
            let foodWeightedMap = new Map();
            for(let i = 0 ;i<this.config.FavorFoodsList.length ; ++i) {
                let c = this.config.FavorFoodsList[i];
                let d = c.split(":");
                foodWeightedMap.set(String(d[1]), Number(d[0]));
            }
            this.foodWeighted = 0;
            this.foodWeightedArray = new Array();
            let outSelf = this;
            foodWeightedMap.forEach(function (value, key) {
                outSelf.foodWeighted += value;
                outSelf.foodWeightedArray.push({c: key, w: Number(value)});
            });
            outSelf.foodWeightedArray.sort(function(a, b) {
                return a.w < b.w;
            });
            this.sceneId = 0;
            this.eventCount = 0;
        }

        setSceneId(sceneId) {
            this.sceneId = sceneId;
        }

        getSceneId() {
            return this.sceneId;
        }

        setParams(params) {
            this.params = params;
        }

        getParams() {
            return this.params;
        }

        randomFood() {
            let ret = Utils.calcRandomWeight(this.foodWeightedArray, this.foodWeighted);
            return ret?ret.c:null;
        }

        getCatId() {
            return this.catId;
        }

        getConfigId() {
            return this.config.Id;
        }

        getSource() {
            return this.config.Source;
        }

        getSkin() {
            return this.config.Skin;
        }

        getEventVisit() {
            return this.config.EventVisit;
        }

        getEventTravel() {
            return this.config.EventTravel;
        }

        getValueBase() {
            return this.config.ValueBase;
        }

        getStarBase() {
            return this.config.StarBase;
        }
    }

    CatData.catIdMax = 0;

    class CoffeeCatData extends CatData {
        setPos(pos) {
            this.x = pos.x;
            this.y = pos.y;
        }

        getX(){
            return this.x;
        }

        getY(){
            return this.y;
        }

        pos(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    class BeachCatData extends CatData {

        setEvent(eventString) {
            if(this.params) {
                this.params.event = eventString;
            }else{
                this.params = {"event": eventString};
            }
        }

    }

    class Constants {
    }

    Constants.LoginSceneId = 0;

    Constants.CoffeeSceneId = 1;

    Constants.BeachSceneId = 2;

    Constants.FishingSceneId = 3;

    Constants.TaskType = {
        "kDaily":2,
        "kTrophy":1
    };

    Constants.TaskStatus = {
        "kRewarded":-1,
        "kCompleted":1,
        "kRunning":0
    };

    Constants.RedDotType = {
        "kTask": 100
    };


    Constants.RewardType = {
        "FISH": "FISH",
        "STAR": "STAR"
    };

    Constants.FetchType = {
        "DIRECT": 0,
        "AD": 1
    };

    Constants.SyncDelay = 10000;

    Constants.LetterBoxInterval = 60000;

    //一些客户端错误码定义
    Constants.NetError = 7770001;

    class CatDataMgr {

        constructor() {
            this.catMap = new Map();
        }

        static getInstance() {
            return CatDataMgr.instance?CatDataMgr.instance:CatDataMgr.instance = new CatDataMgr();
        }

        //添加一个猫咪数据
        addCatData(configId, sceneId) {
            let catData = null;
            if(sceneId==Constants.CoffeeSceneId) {
                catData = new CoffeeCatData(configId);
            }else if(sceneId==Constants.BeachSceneId){
                catData = new BeachCatData(configId);
            }

            this.catMap.set(catData.getCatId(), catData);
            catData.setSceneId(sceneId);
            return catData;
        }

        //获取当前猫咪的个数
        getCatCountBySceneId(sceneId) {
            let ret = 0;
            this.catMap.forEach((value, key) => {
                if(value.getSceneId() == sceneId) {
                    ret++;
                }
            });
            return ret;
        }

        getCatsBySceneId(sceneId) {
            let ret = new Array;
            this.catMap.forEach((value, key) => {
                if(value.getSceneId() == sceneId) {
                    ret.push(value);
                }
            });
            return ret;
        }

        removeCatData(catId) {
            this.catMap.delete(catId);
        }

        getCatData(id) {
            return this.catMap.get(id);
        }


        dump() {
            let scene1 = new Array();
            let scene2 = new Array();
            this.catMap.forEach((value, key) => {
                if(value.getSceneId() == 1) {
                    if(value.eventCount==0){
                        scene1.push({"id": value.getConfigId(), "params": value.getParams()});
                    }
                }else if(value.getSceneId() == 2) {
                    if(value.eventCount==0){
                        scene2.push({"id": value.getConfigId(), "params": value.getParams()});
                    }
                }
            });
            let customData = {"scene1": scene1, "scene2": scene2};
            return customData;
        }

        clear() {
            this.catMap.clear();
        }

    }

    class ScenePathMgr {

        constructor() {
            this.scene1BasePath = new Array();
            this.scene1ExtPath0 = new Array();
            this.scene1ExtPath1 = new Array();
            this.scene1ExtPath2 = new Array();
            this.scene1ExtPath3 = new Array();
        }

        static getInstance() {
            return ScenePathMgr.instance?ScenePathMgr.instance:ScenePathMgr.instance = new ScenePathMgr();
        }

        getZOrderPathPoint() {
            return 14;
        }

        getStartPathPoint() {
            return this.scene1BasePath[0];
        }

        _dealPath(path) {
            let n = Utils.randomExt(2);
            let arr = new Array();
            for(let i = 0 ; i < n + 1 ; ++i) {
                let idx = Utils.randomExt(path.length);
                arr.push(path[idx]);
            }
            return arr;
        }

        randomPath(sceneId) {
            let ret = new Array();
            if(Number(sceneId) == 1) {
                let arr1 = this._dealPath(this.scene1ExtPath0);
                let arr2 = this._dealPath(this.scene1ExtPath1);
                let arr3 = this._dealPath(this.scene1ExtPath2);
                let arr4 = this._dealPath(this.scene1ExtPath3);
                //开始处理
                for(let i = 0 ; i<=8; ++i) {
                    ret.push(this.scene1BasePath[i]);
                }
                arr1.forEach(a => {
                    ret.push(a);
                });
                for(let i = 9 ; i<=11; ++i) {
                    ret.push(this.scene1BasePath[i]);
                }
                arr2.forEach(a => {
                    ret.push(a);
                });
                for(let i = 12 ; i<=16; ++i) {
                    ret.push(this.scene1BasePath[i]);
                }
                arr3.forEach(a => {
                    ret.push(a);
                });
                for(let i = 17 ; i<=19; ++i) {
                    ret.push(this.scene1BasePath[i]);
                }
                arr4.forEach(a => {
                    ret.push(a);
                });
                ret.push(this.scene1BasePath[20]);
            }
            return ret;
        }

        load() {
            Laya.loader.create("prefab/path/Scene1Path.prefab", Laya.Handler.create(this, function(prefabDef) {
                let prefab = prefabDef.create();
                //base path
                for(let i = 0 ; i < 100; ++i) {
                    let c = prefab.getChildByName("b"+String(i));
                    if(c != null) {
                        this.scene1BasePath.push({i: i, x: c.x, y: c.y});
                    } else {
                        break;
                    }
                }
                //ext path
                for(let i = 0 ; i < 100; ++i) {
                    let c = prefab.getChildByName("p0"+String(i));
                    if(c != null) {
                        this.scene1ExtPath0.push({i: -1, x: c.x, y: c.y});
                    } else {
                        break;
                    }
                }

                for(let i = 0 ; i < 100; ++i) {
                    let c = prefab.getChildByName("p1"+String(i));
                    if(c != null) {
                        this.scene1ExtPath1.push({i: -1, x: c.x, y: c.y});
                    } else {
                        break;
                    }
                }

                for(let i = 0 ; i < 100; ++i) {
                    let c = prefab.getChildByName("p2"+String(i));
                    if(c != null) {
                        this.scene1ExtPath2.push({i: -1, x: c.x, y: c.y});
                    } else {
                        break;
                    }
                }

                for(let i = 0 ; i < 100; ++i) {
                    let c = prefab.getChildByName("p3"+String(i));
                    if(c != null) {
                        this.scene1ExtPath3.push({i: -1, x: c.x, y: c.y});
                    } else {
                        break;
                    }
                }
            }));
        }


    }

    class TimeUtils {

        static getTimeNowOnServer() {
            return (+ new Date()) + this.serverTsModify;
        }

        static updateServerTime(serverTs) {
            //先计算出本次传输的 delay，如果 delay 计算的过大，则直接认为是系统调时间了，清零之前的累计delay，重新开始调整
            //暂定超过2s，认为是调时间了
            let nowServerTs = this.getTimeNowOnServer();
            let delayOnce = nowServerTs - serverTs;
            if(Math.abs(delayOnce) < 2000) {
                this.averageDelay = Math.trunc((this.averageDelay * this.calcCount + delayOnce) / (this.calcCount + 1));
                this.calcCount++;
                //如果 calcCount 太大了，适当取小了再计算
                if(this.calcCount > 1000) this.calcCount = 100;
            } else {
                this.averageDelay = 50;
                this.calcCount = 0;
            }

            this.serverTsModify = serverTs + this.averageDelay - (+ new Date());
        }
    }

    TimeUtils.serverTsModify = 0;
    TimeUtils.calcCount = 0;
    //计算服务器的平均延迟，初始时假定为50ms
    TimeUtils.averageDelay = 50;

    //CatDataMgr 和 ScenePathMgr 都放到CatSystem里处理
    class CatSystem {
        static init() {
            EventMgr.getInstance().registEvent("CUSTOMDATA_CAT_RESTORE", null, CatSystem.restore);
            EventMgr.getInstance().registEvent("REMOVE_CAT", null, CatSystem.removeCatData);
        }

        //添加猫咪数据
        static addCatData(configId, sceneId, params) {
            let catData = CatDataMgr.getInstance().addCatData(configId, sceneId);
            catData.setParams(params);
            EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [sceneId, "ADD_CAT", catData.getCatId()]);
            return catData;
        }

        static getCatsBySceneId(sceneId) {
            return CatDataMgr.getInstance().getCatsBySceneId(sceneId);
        }

        static getCatCountBySceneId(sceneId) {
            return CatDataMgr.getInstance().getCatCountBySceneId(sceneId);
        }

        static removeCatData(catId, sceneId) {
            let catData = CatDataMgr.getInstance().removeCatData(catId, sceneId);
            EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [sceneId, "REMOVE_CAT", catId]);
        }

        static getCatData(id) {
            return CatDataMgr.getInstance().getCatData(id);
        }

        static restore(catsData, lastTime, scene2ExhaustTime) {
            EventMgr.getInstance().postEvent("SIMULATOR_CREATE_SESSION", Constants.CoffeeSceneId);
            EventMgr.getInstance().postEvent("SIMULATOR_CREATE_SESSION", Constants.BeachSceneId);
            console.debug("restore cats", catsData);
            if(catsData&&catsData.scene1){
                catsData.scene1.forEach(value=>{
                    // console.debug("restore", value)
                    CatSystem.addCatData(value.id, Constants.CoffeeSceneId, value.params);
                });
            }
            let now = TimeUtils.getTimeNowOnServer();
            if(lastTime && lastTime >0) {
                EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [Constants.BeachSceneId, "SET_TIME", lastTime]);
            }else{
                EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [Constants.BeachSceneId, "SET_TIME", now]);
            }
            if(catsData&&catsData.scene2){
                catsData.scene1.forEach(value=>{
                    CatSystem.addCatData(value.id, Constants.BeachSceneId, value.params);
                });
            }

            EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [Constants.BeachSceneId, "REFRESH_FOOD", scene2ExhaustTime]);
            if(lastTime && lastTime >0) {

                let simulateTime = now - lastTime;
                if(scene2ExhaustTime!=null && now > Math.max(scene2ExhaustTime, lastTime)+60000) {
                    simulateTime = Math.max(scene2ExhaustTime, lastTime)+60000 - lastTime;
                }

                EventMgr.getInstance().postEvent("SIMULATOR_SIMULATE_SESSION", [Constants.BeachSceneId, simulateTime]);
            }
            EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [Constants.BeachSceneId, "SET_TIME", now]);
            EventMgr.getInstance().postEvent("SIMULATOR_RUN_SESSION", Constants.CoffeeSceneId);
            EventMgr.getInstance().postEvent("SIMULATOR_RUN_SESSION", Constants.BeachSceneId);
        }

    }

    class CommonUIMgr {

        //管理各个场景中通用的UI部分，目前包括 TopUI、BottomUINew、LeftUI、ArrowUI

        constructor() {
            this.topUI = null;
            this.bottomUI = null;
            this.leftUI = null;
            this.arrowUI = null;
        }

        static getInstance() {
            return CommonUIMgr.instance?CommonUIMgr.instance:CommonUIMgr.instance = new CommonUIMgr();
        }

        showCommonUI(sceneId, handler) {
            let completeHandler = Laya.Handler.create(this, function() {
                if(this.topUI != null && this.bottomUI != null && this.leftUI != null && this.arrowUI != null) {
                    if(handler != null) {
                        handler();
                    }
                }
            }, null, false);

            if(sceneId == 1) {
                this.showTopUI(completeHandler);
                this.showBottomUI(completeHandler);
                this.showLeftUI(completeHandler);
                this.showArrowUI(sceneId, completeHandler);
            } else if(sceneId == 2) {
                this.showTopUI(completeHandler);
                this.showBottomUI();
                this.showLeftUI();
                this.showArrowUI(sceneId, completeHandler);
            } else {
                this.hideBottomUI();
                this.hideArrowUI();
                this.hideLeftUI();
            }
        }

        showTopUI(completeHandler) {
            if(this.topUI != null) {
                this.topUI.visible = true;
                if(completeHandler != null) {
                    completeHandler.run();
                }
            } else {
                this.loadResource("topUI", "prefab/ui/TopUI.prefab", completeHandler);
            }
        }

        hideTopUI() {
            if(this.topUI != null) this.topUI.visible = false;
        }

        showBottomUI(completeHandler) {
            if(this.bottomUI != null) {
                this.bottomUI.visible = true;
                if(completeHandler != null) {
                    completeHandler.run();
                }
            } else {
                this.loadResource("bottomUI", "prefab/ui/BottomUINew.prefab", completeHandler);
            }
        }

        hideBottomUI() {
            if(this.bottomUI != null) this.bottomUI.visible = false;
        }

        showLeftUI(completeHandler) {
            if(this.leftUI != null) {
                this.leftUI.visible = true;
                if(completeHandler != null) {
                    completeHandler.run();
                }
            } else {
                this.loadResource("leftUI", "prefab/ui/LeftUI.prefab", completeHandler);
            }
        }

        hideLeftUI() {
            if(this.leftUI != null) this.leftUI.visible = false;
        }

        showArrowUI(sceneId, completeHandler) {
            if(this.arrowUI != null) {
                this.arrowUI.visible = true;
                EventMgr.getInstance().postEvent("switch_arrow_btn", null);
                if(completeHandler != null) {
                    completeHandler.run();
                }
            } else {
                this.loadResource("arrowUI", "prefab/ui/ArrowUI.prefab", completeHandler);
            }
        }

        hideArrowUI() {
            if(this.arrowUI != null) this.arrowUI.visible = false;
        }

        loadResource(name, path, completeHandler) {
            if(path.indexOf(".prefab") != -1) {
                Laya.loader.create(path, Laya.Handler.create(this, function(prefabDef) {
                    if(name == "topUI") {
                        this.topUI = prefabDef.create();
                        this.topUI.x = 0;
                        this.topUI.y = 0;
                        Laya.stage.addChild(this.topUI);
                    } else if(name == "bottomUI") {
                        this.bottomUI = prefabDef.create();
                        this.bottomUI.x = 0;
                        this.bottomUI.y = 2136;
                        Laya.stage.addChild(this.bottomUI);
                    } else if(name == "leftUI") {
                        this.leftUI = prefabDef.create();
                        this.leftUI.x = 0;
                        this.leftUI.y = 0;
                        Laya.stage.addChild(this.leftUI);
                    } else if(name = "arrowUI") {
                        this.arrowUI = prefabDef.create();
                        this.arrowUI.x = 0;
                        this.arrowUI.y = 1141;
                        Laya.stage.addChild(this.arrowUI);
                    } else {
                        return;
                    }
                    if(completeHandler != null) {
                        completeHandler.run();
                    }
                }));
            }
        }

        clear() {
            this.topUI = null;
            this.bottomUI = null;
            this.leftUI = null;
            this.arrowUI = null;
        }
    }

    class SceneMgr {

        constructor() {
            this.sceneMap = new Map();
        }

        static getInstance() {
            return SceneMgr.instance?SceneMgr.instance:SceneMgr.instance = new SceneMgr();
        }

        getSceneUrl(sceneId) {
            if(sceneId == 1) {
                return "scene/CoffeeScene.scene";
            } else if(sceneId == 2) {
                return "scene/BeachScene.scene";
            } else if(sceneId == 3) {
                return "scene/FishingScene.scene";
            } else if(sceneId == 0) {
                return "scene/Login.scene";
            }
        }

        getScene(sceneId) {
            return this.sceneMap.get(sceneId);
        }

        getCurrentSceneId() {
            return this.currentSceneId;
        }

        loadScene(sceneId, handler) {
            let scene = this.sceneMap.get(sceneId);
            if(scene != null) {
                scene.visible = true;
                scene.open();
                CommonUIMgr.getInstance().showCommonUI(sceneId, function() {
                    if(handler != null) handler.runWith(scene);
                });
                return;
            } else {
                let sceneUrl = this.getSceneUrl(sceneId);
                for(let i = 0 ; i < Laya.Scene.unDestroyedScenes.length ; ++i) {
                    let s = Laya.Scene.unDestroyedScenes[i];
                    if(sceneUrl == s.url) {
                        s.open();
                        s.visible = true;
                        CommonUIMgr.getInstance().showCommonUI(sceneId, function() {
                            if(handler != null) handler.runWith(scene);
                        });
                        return;
                    }
                }
                Laya.Scene.open(sceneUrl, false, null, Laya.Handler.create(this, function(scene) {
                    this.sceneMap.set(sceneId, scene);
                    scene.visible = true;
                    CommonUIMgr.getInstance().showCommonUI(sceneId, function() {
                        if(handler != null) handler.runWith(scene);
                    });
                }));
            }
        }

        switchScene(sceneId, handler) {
            if(this.currentSceneId == sceneId) {
                return;
            }
            this.currentSceneId = sceneId;
            this.loadScene(sceneId, handler);
        }
        closeAllScene() {
            for(let i = Laya.Scene.unDestroyedScenes.length - 1 ; i >= 0  ; --i) {
                let s = Laya.Scene.unDestroyedScenes[i];
                s.destroy();
            }
            this.sceneMap.clear();
            Laya.Scene.gc();
        }
    }

    class BuildingExtInfo {
        constructor() {
            this.buildingRoot = null;
            this.move = null;
            this.isBusy = false;
            this.isFlip = false;
            this.buildingExtInfoMgr = null;
        }

        setBuildingExtInfoMgr(mgr) {
            this.buildingExtInfoMgr = mgr;
        }

        getBuildingExtInfoMgr() {
            return this.buildingExtInfoMgr;
        }

        addToBuildingRoot(render) {
            if(this.buildingRoot != null) {
                this.buildingRoot.addChild(render);
            }
        }

        setBuildingRoot(buildingRoot) {
            this.buildingRoot = buildingRoot;
            if(this.buildingRoot != null) {
                this.buildingRoot.mouseThrough = true;
            }
        }

        getBuildingRoot() {
            return this.buildingRoot;
        }

        setMove(text) {
            this.move = text.split(":");
        }

        getMove() {
            return this.move;
        }

        getBuildingRootWidth() {
            return this.buildingRoot.width;
        }

        getBuildingRootHalfWidth() {
            return this.getBuildingRootWidth()/2;
        }

        getBuildingRootHeight() {
            return this.buildingRoot.height;
        }

        getBuildingRootHalfHeight() {
            return this.getBuildingRootHeight()/2;
        }

        randomCatMove() {
            if(this.move != null) {
                let i = Utils.randomExt(this.move.length);
                return this.move[i];
            }
            return null;
        }

        setIsFlip(isFlip) {
            this.isFlip = isFlip;
        }

        getIsFlip() {
            return this.isFlip;
        }

        cleanBuildingExtInfo() {
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
        }
    }

    class VisitorReward {

        constructor() {

        }

        setData(id, catConfigId, buildingId, reward, rewardType) {
            this._catConfigId = catConfigId;
            this._buildingId = buildingId;
            this._reward = reward;
            this._rewardType = rewardType;
            this._id = id;
        }

        restore(info) {
            // console.debug("VisitorReward restore", info);
            this._id = info.id;
            this._catConfigId = info.roleId;
            this._buildingId = info.buildingId;
            if(info.rewards && info.rewards.rewards) {
                for(const item of info.rewards.rewards) {
                    this._reward = item.amount;
                    this._rewardType = item.id;
                }
            }
        }

        get fetched() {
            return this._fetched;
        }

        fetch() {
            this._fetched = true;
        }

        get id() {
            return this._id;
        }

        get catConfigId() {
            return this._catConfigId;
        }

        get buildingId() {
            return this._buildingId;
        }

        get reward() {
            return [this._reward, this._rewardType];
        }

        dump() {
            return {"id": this._id, "name":"", "buildingId":this._buildingId, "rewards": {"rewards": [{"type": "Currency", "id": this._rewardType, "amount": this._reward}]}, "roleId": String(this._catConfigId)};
        }

        clear() {
        }

    }

    //DataMgr都应该只包含ConfigMgr和对应的Data
    class SyncDataMgr {

        constructor() {
            this._cacheFishMap = new Map();
            this._cacheStarMap = new Map();
            this._fishReward = 0;
            this._starReward = 0;
            this._scene2ExhaustTime = null;
            this._visitorRewardCache = new Array();
            this._visitorRewardStash = new Array();

            this._visitorGift = null;
        }

        static getInstance() {
            return SyncDataMgr.instance?SyncDataMgr.instance:SyncDataMgr.instance = new SyncDataMgr();
        }

        getCachedFish(buildingId) {
            let fish = this._cacheFishMap.get(buildingId);
            return fish?fish:0;
        }

        addCachedFish(buildingId, count) {
            let fish = this.getCachedFish(buildingId);
            fish = fish+count;
            this._cacheFishMap.set(buildingId, fish);
        }

        getCachedStar(buildingId) {
            let star = this._cacheStarMap.get(buildingId);
            return star?star:0;
        }

        addCachedStar(buildingId, count) {
            let star = this.getCachedStar(buildingId);
            star = star+count;
            this._cacheStarMap.set(buildingId, star);
        }

        collectReward(buildingId) {
            let fish = this.getCachedFish(buildingId);
            this._cacheFishMap.delete(buildingId);
            this._fishReward += fish;
            let star = this.getCachedStar(buildingId);
            this._cacheStarMap.delete(buildingId);
            this._starReward += star;
            return [fish, star];
        }

        dumpRewards(){
            if(this._fishReward>0&&this._starReward>0){
                return {"rewards": [{"type": "Currency", "id": Constants.RewardType.FISH, "amount": this._fishReward}, {"type": "Currency", "id": Constants.RewardType.STAR, "amount": this._starReward}]};
            }else if(this._fishReward>0){
                return {"rewards": [{"type": "Currency", "id": Constants.RewardType.FISH, "amount": this._fishReward}]};
            }else if(this._starReward>0){
                return {"rewards": [{"type": "Currency", "id": Constants.RewardType.STAR, "amount": this._starReward}]};
            }
        }

        dropRewards() {
            this._fishReward = 0;
            this._starReward = 0;
        }

        dumpCachedFish() {
            let fishCache = new Array();
            for(const[key, value] of this._cacheFishMap) {
                if(value>0) {
                    fishCache.push([key, value]);
                }
            }
            return fishCache;
        }

        restoreFish(fishCache) {
            this.clear();
            if(fishCache){
                for(const value of fishCache) {
                    this._cacheFishMap.set(value[0], value[1]);
                }
            }
        }

        //场景2 投食
        getScene2ExhaustTime() {
            return this._scene2ExhaustTime?this._scene2ExhaustTime:0;
        }

        addScene2Food(time, quality) {
            if(!this._scene2ExhaustTime || this._scene2ExhaustTime < TimeUtils.getTimeNowOnServer()+time*1000) {
                this._scene2ExhaustTime = TimeUtils.getTimeNowOnServer()+time*1000;
                return this._scene2ExhaustTime;
            }
            return null;
        }

        restoreScene2ExhaustTime(time, quality) {
            this._scene2ExhaustTime = time;
        }

        //场景2 常客礼物
        cacheVisitorReward(catId, catConfigId, buildingId, reward, rewardType) {
            let visitorReward = new VisitorReward();
            let id = "00000"+String(catId);
            id = String(TimeUtils.getTimeNowOnServer()) + id.substr(id.length-4);
            visitorReward.setData(id, catConfigId, buildingId, reward, rewardType);
            this._visitorRewardCache.push(visitorReward);
        }

        dumpVisitorRewardsCache() {
            for(const visitorReward of this._visitorRewardCache) {
                this._visitorRewardStash.push(visitorReward.dump());
            }
            this._visitorRewardCache.length = 0;
            return this._visitorRewardStash;
        }

        dropVisitorRewardsCache() {
            this._visitorRewardStash.length = 0;
        }

        updateVisitorGift(visitorRewards) {
            if(!this._visitorGift) {
                this._visitorGift = new Array();
            }
            this._visitorGift.length = 0;
            for(const rewardInfo of visitorRewards) {
                let reward = new VisitorReward();
                reward.restore(rewardInfo);
                this._visitorGift.push(reward);
            }
        }

        clearVisitorGift() {
            if(this._visitorGift)
                this._visitorGift.length = 0;
        }

        getVisitorGifts() {
            return this._visitorGift;
        }

        clear() {
            this._cacheFishMap.clear();
            this._fishReward = 0;
            this._visitorRewardCache.length = 0;
            this._visitorRewardStash.length = 0;
            this._visitorGift = null;
        }
    }

    //DataMgr都应该只包含ConfigMgr和对应的Data
    class LetterBoxMgr {

        constructor() {
            this.cacheFish = 0;
        }

        static getInstance() {
            return LetterBoxMgr.instance?LetterBoxMgr.instance:LetterBoxMgr.instance = new LetterBoxMgr();
        }

        getCapacity() {
            return this.capacity;
        }

        setCapacity(capacity) {
            this.capacity = capacity;
        }

        getCacheFish() {
            return this.cacheFish;
        }

        setCacheFish(fish) {
            this.cacheFish = fish;
        }

        setLastUpdateTime(millis) {
            this.lastUpdateMillis = millis;
        }

        getLastUpdateTime() {
            return this.lastUpdateMillis;
        }


        clear() {
            this.cacheFish = 0;
        }
    }

    class PetData {

        constructor(configId, config) {
            this.configId = configId;
            this.config = config?config:ConfigMgr.getInstance().getItemById("Role", String(configId));
            this.intimacy = 0;
            this.visitTimes = 0;
            this.adopted = false;
            this.newCome = true;
        }

        setIntimacy(intimacy) {
            this.intimacy = intimacy;
        }

        getIntimacy() {
            return this.intimacy?this.intimacy:0;
        }

        addIntimacy(intimacy) {
            this.intimacy += intimacy;
        }

        setVisitTimes(visitTimes) {
            this.visitTimes = visitTimes;
        }

        getVisitTimes() {
            return this.visitTimes;
        }

        addVisitTimes(visitTimes) {
            this.visitTimes += visitTimes;
        }

        setAdopted(adopted) {
            this.adopted = adopted?true:false;
        }

        getAdopted() {
            return this.adopted;
        }

        setNewCome(newCome) {
            this.newCome = newCome ? true : false;
        }

        getNewCome(newCome) {
            return this.newCome;
        }

        getId() {
            return this.configId;
        }

        getSource() {
            return this.config.Source;
        }

        getName() {
            return this.config.Name;
        }

        getDefaultAction() {
            return this.config.DefaultAction;
        }

        getNormalPic() {
            return this.config.Icon;
        }

        getGrayPic() {
            return this.config.IconShadow;
        }

        getAdopLimit() {
            if(!this.adoptLimit)
                this.adoptLimit = JSON.parse(this.config.AdoptLimit);

            return this.adoptLimit;
        }

        //未领取并且已经达到领取状态，则返回true
        canAdopt() {
            if(this.getAdopted()) return false;

            let intimacyLimit = this.getAdopLimit()["Intimacy"];
            return this.intimacy >= intimacyLimit;
        }

        getIntimacyGrade() {
            let intimacy = this.getIntimacy();
            for(const k in this.config.Intimacy) {
                let v = this.config.Intimacy[k];
                if(intimacy < v){
                    return k - 1;
                }
            }
            return this.config.Intimacy.length - 1;
        }

        clear() {
            this.intimacy = 0;
            this.visitTimes = 0;
            this.adopted = false;
        }
    }

    class PetReward {

        constructor(configId) {
            this.id = configId;
            this.intimacyIncr = 0;
            this.visitTimesIncr = 0;
        }

        addIntimacy(intimacy) {
            this.intimacyIncr += intimacy;
        }

        addVisitTimes(visitTimes) {
            this.visitTimesIncr += visitTimes;
        }

        dumpAndStash() {
            if(this.stash){
                this.intimacyIncr += this.stash.intimacyIncr?this.stash.intimacyIncr:0;
                this.visitTimesIncr += this.stash.visitTimesIncr?this.stash.visitTimesIncr:0;
            }
            this.stash = null;
            if(this.intimacyIncr>0 || this.visitTimesIncr>0) {
                this.stash = {"intimacyIncr":this.intimacyIncr, "visitTimesIncr":this.visitTimesIncr};
                return this.stash;
            }
            return null;
        }

        dropStash() {
            this.stash = null;
            if(this.intimacyIncr>0 || this.visitTimesIncr>0) {
                return true;
            }
            return false;
        }

        clear() {
            this.intimacyIncr = 0;
            this.visitTimesIncr = 0;
        }

    }

    class PetDataMgr {

        constructor() {
            this._petsMap = new Map();
            this._petRewards = new Map();
            this.initPets();
        }

        static getInstance() {
            return PetDataMgr.instance?PetDataMgr.instance:PetDataMgr.instance = new PetDataMgr();
        }

        initPets() {
            let configs = ConfigMgr.getInstance().getConfig("Role");
            let petsMap = this._petsMap;
            for(const [petId, info] of configs) {
                let pet = new PetData(petId, info);
                petsMap.set(petId, pet);
            }
        }

        clear() {
            this._petsMap.forEach((pet)=>{
                pet.clear();
            });

            this._petRewards.clear();
        }

        getPet(petId) {
            return this._petsMap.get(petId);
        }

        updatePet(petId, intimacy, visitTimes, adopted, newCome) {
            let pet = this.getPet(petId);
            if(!pet){
                return false;
            }
            if(intimacy) {
                pet.setIntimacy(intimacy);
            }
            if(visitTimes) {
                pet.setVisitTimes(visitTimes);
            }
            if(adopted) {
                pet.setAdopted(adopted);
            }
            if(typeof(newCome) != "undefined" && newCome != null) {
                pet.setNewCome(newCome);
            }

            return pet;
        }

        getPetReward(petId) {
            let petReward = this._petRewards.get(petId);
            if(!petReward){
                petReward = new PetReward(petId);
                this._petRewards.set(petId, petReward);
            }
            return petReward;
        }

        addIntimacy(petId, intimacy) {
            let pet = this.getPet(petId);
            if(!pet || intimacy==null || intimacy==0) {
                return false;
            }
            pet.addIntimacy(intimacy);
            let petReward = this.getPetReward(petId);
            petReward.addIntimacy(intimacy);
            return true;
        }

        addVisitTimes(petId, visitTimes) {
            let pet = this.getPet(petId);
            if(!pet || visitTimes==null || visitTimes==0) {
                return false;
            }
            pet.addVisitTimes(visitTimes);
            let petReward = this.getPetReward(petId);
            petReward.addVisitTimes(visitTimes);
            return true;
        }

        adoptPet(petId) {
            let pet = this.getPet(petId);
            if(!pet){
                return false;
            }
            pet.setAdopted(true);
            return true;
        }

        dumpAndStashPetRewards() {
            let result = null;
            for(const [petId, petReward] of this._petRewards) {
                let info = petReward.dumpAndStash();
                if(info){
                    if(!result){
                        result = {};
                    }
                    result[petId] = info;
                }
            }
            return result;
        }


        dropPetRewardsStash() {
            for(const [petId, petReward] of this._petRewards) {
                petReward.dropStash();
            }
        }

        clearPetRewards() {
            this._petRewards.clear();
        }
    }

    class SyncSystem {
        static init() {
        }

        static scheduleUpdate() {
            // console.debug("scheduleUpdate");
            Laya.timer.loop(Constants.SyncDelay, SyncSystem, SyncSystem.updateSceneInfo, [], true, false);
        }

        static forceUpdate(handler) {
            SyncSystem.updateSceneInfo(handler);
            SyncSystem.scheduleUpdate();
        }

        static updateSceneInfo(handler) {
            // let customData = SyncDataMgr.getInstance().dump();
            let customData = JSON.stringify({lastTime: TimeUtils.getTimeNowOnServer(), scene2ExhaustTime: SyncDataMgr.getInstance().getScene2ExhaustTime(),cats: CatDataMgr.getInstance().dump(), fish: SyncDataMgr.getInstance().dumpCachedFish()});
            // console.debug("updateSceneInfo", customData);
            let rewards = SyncDataMgr.getInstance().dumpRewards();

            let petRewards = PetDataMgr.getInstance().dumpAndStashPetRewards();
            let visitorRewards = SyncDataMgr.getInstance().dumpVisitorRewardsCache();

            EventMgr.getInstance().postEvent("SERVICE_UPDATE_SCENE_INFO", [customData, rewards, petRewards, visitorRewards, handler]);
        }

        static dropCache() {
            SyncDataMgr.getInstance().dropRewards();
            PetDataMgr.getInstance().dropPetRewardsStash();
            SyncDataMgr.getInstance().dropVisitorRewardsCache();
        }


        //场景2 投食
        static getScene2ExhaustTime() {
            return SyncDataMgr.getInstance().getScene2ExhaustTime();
        }

        static addScene2Food(time, quality) {
            let exhaustTime = SyncDataMgr.getInstance().addScene2Food(time, quality);
            if(exhaustTime!=null) {
                EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [Constants.BeachSceneId, "REFRESH_FOOD", exhaustTime]);
                EventMgr.getInstance().postEvent("REFRESH_FOOD", [exhaustTime]);
            }
        }

        //场景2 常客礼物
        static cacheVisitorReward(catId, catConfigId, buildingId, reward, rewardType) {
            SyncDataMgr.getInstance().cacheVisitorReward(catId, catConfigId, buildingId, reward, rewardType);
        }

        //常客礼物 的相关操作
        static findVisitorGift(handler) {
            EventMgr.getInstance().postEvent("SERVICE_FIND_VISITOR_GIFT", [handler]);
        }

        static getVisitorGiftAll(fetchType, handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_VISITOR_GIFT_ALL", [fetchType, handler]);
        }

        static getVisitorGiftSingle(giftId, handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_VISITOR_GIFT_SINGLE", [giftId, handler]);
        }

        static clearVisitorGift() {
            SyncDataMgr.getInstance().clearVisitorGift();
        }

        static updateVisitorGift(visitorRewards) {
            SyncDataMgr.getInstance().updateVisitorGift(visitorRewards);
        }

        static getVisitorGifts() {
            return SyncDataMgr.getInstance().getVisitorGifts();
        }


        static restoreCustomData(customData) {
            // console.debug("restoreCustomData", customData);
            let data = customData?JSON.parse(customData):{};
            let lastTime = data.lastTime;
            let scene2ExhaustTime = data.scene2ExhaustTime;
            SyncDataMgr.getInstance().restoreScene2ExhaustTime(scene2ExhaustTime);
            SyncDataMgr.getInstance().restoreFish(data.fish);
            EventMgr.getInstance().postEvent("UPDATE_DROPFISH_ALL", []);
            EventMgr.getInstance().postEvent("CUSTOMDATA_CAT_RESTORE", [data.cats, lastTime, scene2ExhaustTime]);
        }

        //rewards SyncData

        static getCachedFish(buildingId) {
            return SyncDataMgr.getInstance().getCachedFish(buildingId);
        }

        static getCachedStar(buildingId) {
            return SyncDataMgr.getInstance().getCachedStar(buildingId);
        }

        static addCachedFish(buildingId, count) {
            SyncDataMgr.getInstance().addCachedFish(buildingId, count);
        }

        static addCachedStar(buildingId, count) {
            SyncDataMgr.getInstance().addCachedStar(buildingId, count);
        }

        static collectReward(buildingId) {
            let reward = SyncDataMgr.getInstance().collectReward(buildingId);
            let fish = reward[0];
            let star = reward[1];
            if(fish>0) {
                EventMgr.getInstance().postEvent("REFRESH_FISH", fish);
            }
            if(star>0) {
                EventMgr.getInstance().postEvent("REFRESH_STAR", star);
            }
        }


        //LetterBox

        static getLetterBoxInfo(handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_LETTER_BOX_INFO", [handler]);
        }

        static fetchLetterBox(handler) {
            EventMgr.getInstance().postEvent("SERVICE_FETCH_LETTER_BOX", [handler]);
        }

        static updateLetterBox(letterBox) {
            if(letterBox.capacity!=null) {
                // console.debug("updateLetterBox capacity", letterBox.capacity);
                LetterBoxMgr.getInstance().setCapacity(letterBox.capacity);
            }
            // console.debug("updateLetterBox fishToReward", letterBox.fishToReward);
            LetterBoxMgr.getInstance().setCacheFish(letterBox.fishToReward||0);

            if(letterBox.lastUpdateMillis) {
                // console.debug("updateLetterBox lastUpdateMillis", letterBox.lastUpdateMillis);
                let lastUpdateTime = letterBox.lastUpdateMillis;
                if(lastUpdateTime==0) {
                    lastUpdateTime = LetterBoxMgr.getInstance().getLastUpdateTime();
                    if(lastUpdateTime==null)
                        lastUpdateTime = TimeUtils.getTimeNowOnServer();
                }
                LetterBoxMgr.getInstance().setLastUpdateTime(lastUpdateTime);
            }
            EventMgr.getInstance().postEvent("UPDATE_LETTER_BOX");
        }

        static setCacheFish(fish) {
            LetterBoxMgr.getInstance().setCacheFish(fish);
        }

        static getCacheFish() {
            return LetterBoxMgr.getInstance().getCacheFish();
        }

        static getCacheFishCapacity() {
            return LetterBoxMgr.getInstance().getCapacity();
        }

        static getLetterBoxNextUpdateInterval() {
            let lastUpdateTime = LetterBoxMgr.getInstance().getLastUpdateTime()||TimeUtils.getTimeNowOnServer();
            let result = lastUpdateTime + Constants.LetterBoxInterval - TimeUtils.getTimeNowOnServer();
            return result;
        }

        static clear() {
            Laya.timer.clear(null, SyncSystem.updateSceneInfo);
        }

    }

    class BuildingExtInfoMgr {

        constructor(buildingData) { 
            this.buildingData = buildingData;
            this.dropPoint = null;
            this.dropFish = null;
            this.buildingExtInfoArray = new Array();
        }

        pushBuildingExtInfo(buildingExtInfo) {
            buildingExtInfo.setBuildingExtInfoMgr(this);
            this.buildingExtInfoArray.push(buildingExtInfo);
        }
        
        getBuildingExtInfo(spaceId) {
            return this.buildingExtInfoArray[spaceId];
        }

        getBuildingExtInfoCount() {
            return this.buildingExtInfoArray.length;
        }

        setDropFishPoint(dropPoint) {
            this.dropPoint = dropPoint;
            if(this.dropPoint != null) {
                this.dropPoint.on(Laya.Event.MOUSE_DOWN, this, function() {
                    let fish = this.dropFish;
                    this.dropFish = null;
                    if(fish){
                        SyncSystem.collectReward(this.buildingData.getId());
                        fish.onClick();
                        fish.zOrder = 9999999;
                        let fishTime = 400 + Utils.randomExt(400);

                        // TODO  这个坐标需要做一下适配，或者想办法获得到真实的鱼干位置
                        Laya.Tween.to(fish, { x: 1550, y: 73 }, fishTime,
                            null,
                            Laya.Handler.create(this, function() {
                                fish.destroy();
                            }), 0);
                    }
                });
            }
        }

        setDropFish(dropFish) {
            this.dropFish = dropFish;
        }

        getDropFish() {
            return this.dropFish;
        }

        getDropFishPoint() {
            return this.dropPoint;
        }

        getDropFishPointPosition() {
            return new Laya.Point(this.dropPoint.width/2, this.dropPoint.height/2);
        }

        cleanBuildingExtInfoMgr() {
            for(let i = 0; i < this.buildingExtInfoArray.length ; ++i) {
                this.buildingExtInfoArray[i].cleanBuildingExtInfo();
            }
            let dropFish = this.getDropFish();
            if(dropFish){
                dropFish.destroy();
            }
        }
    }

    class Building$1 extends Laya.Tree {

        constructor() {
            super();
            this.buildingData = null;
            this.anim = null;
            this.prefab = null;
            this.buildingExtInfoMgr = null;
            this.mouseThrough = true;
            this.loaded = false;
        }

        isLoaded() {
            return this.loaded;
        }

        getId() {
            return this.buildingData.getId();
        }

        //设置信息
        setData(data) {
            this.buildingData = data;
            this.buildingExtInfoMgr = new BuildingExtInfoMgr(this.buildingData);
        }

        //获得信息
        getData() {
            return this.buildingData;
        }

        onDisable() {

        }


        cleanBuilding() {
            this.getBuildingExtInfoMgr().cleanBuildingExtInfoMgr();
        }

        getBuildingExtInfoMgr() {
            return this.buildingExtInfoMgr;
        }

        judgeTouch() {
            let btn = this.prefab.getChildByName("touch");
            if(btn != null) {
                btn.on(Laya.Event.CLICK, this,this.onClick);
            }
        }

        judgeAnim() {
            for(let i = 0; i < 5; ++i) {
                let spineAnimText = this.prefab.getChildByName("spineAnim_"+String(i));
                if(spineAnimText != null &&
                    spineAnimText.text != null &&
                     spineAnimText.text != "") {
                        let animInfo = spineAnimText.text.split(":");
                        let animPath = animInfo[0];
                        let animMove = animInfo[1];
                        let animSkin = animInfo[2];
                        let anim = new Spine();
                        anim.addLoadedHandler(function() {

                            anim.x = spineAnimText.x;
                            anim.y = spineAnimText.y;
                            anim.zOrder = spineAnimText.zOrder;
                            anim.play(animMove, true);
                        });
                        this.prefab.addChild(anim);
                        anim.name = "_spineAnim_"+String(i);
                        anim.loadAnim(animPath, animSkin, 0);

                } else {
                    break;
                }
            }
        }

        judgeDropPoint() {
            let dropPoint = this.prefab.getChildByName("dropPoint");
            if(dropPoint) {
                this.buildingExtInfoMgr.setDropFishPoint(dropPoint);
            }
        }

        judgeBuildingRoot() {
            for(let i = 0; i < 5; ++i) {
                let info = new BuildingExtInfo();
                let buildingRoot = this.prefab.getChildByName("buildingRoot_"+String(i));
                let move = this.prefab.getChildByName("move_"+String(i));
                let flip = 1;
                let f1 = this.prefab.getChildByName("flip_"+String(i));
                if(f1 != null) {
                    flip = -1;
                }
                if(buildingRoot != null) {
                    info.setBuildingRoot(buildingRoot);
                    info.setMove(move.text);
                    info.setIsFlip(flip);
                    this.buildingExtInfoMgr.pushBuildingExtInfo(info);
                } else {
                    break;
                }
            }
        }


        //加载资源
        loadResource(path, completeHandler) {
            if(path.indexOf(".prefab") != -1) {
                Laya.loader.create(path, Laya.Handler.create(this, function(prefabDef) {
                    this.prefab = prefabDef.create();
                    this.prefab.mouseThrough = true;
                    this.width = this.prefab.width;
                    this.height = this.prefab.height;
                    this.pivotX = this.prefab.width/2;
                    this.pivotY = this.prefab.height/2;
                    this.addChild(this.prefab);
                    //掉落点
                    this.judgeDropPoint();
                    //判断是否有触摸区域
                    this.judgeTouch();
                    //判断动画
                    this.judgeAnim();
                    //判断buildingRoot
                    this.judgeBuildingRoot();
                    this.loaded = true;
                    //this.on(Laya.Event.CLICK, this,this.onClick);
                    if(completeHandler != null) {
                        completeHandler();
                    }

                }));
            }
        }

        //点击建筑物
        onClick() {
            SceneMgr.getInstance().switchScene(Constants.FishingSceneId);
            EventMgr.getInstance().postEvent("NEXT_GUIDE");
        }
    }

    class PlayerData {

        constructor() {
            this._fish = 0;
            this._star = 0;


            // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
        }

        update(data) {
            this.updateFish(data.fish);
            this.updateStar(data.star);
        }

        updateFish(fish) {
            this._fish = Number(fish);
        }

        updateStar(star) {
            this._star = Number(star);
        }

        getStar() { return this._star;}

        getFish() {  return this._fish;}
    }

    //DataMgr都应该只包含ConfigMgr和对应的Data
    class PlayerDataMgr {

        constructor() {
            this._player = new PlayerData();
        }

        static getInstance() {
            return PlayerDataMgr.instance?PlayerDataMgr.instance:PlayerDataMgr.instance = new PlayerDataMgr();
        }

        getFish() {
            return this._player.getFish();
        }

        updateFish(fish) {
            this._player.updateFish(fish);
        }

        getStar() {
            return this._player.getStar();
        }

        updateStar(star) {
            this._player.updateStar(star);
        }


        clear() {
            this._player = new PlayerData();
        }

    }

    class PlayerSystem {

        static init() {
            EventMgr.getInstance().registEvent("REFRESH_FISH", null, PlayerSystem.cumulateFish);
            EventMgr.getInstance().registEvent("REFRESH_STAR", null, PlayerSystem.cumulateStar);
            PlayerDataMgr.getInstance().clear();
        }

        static getFish() {
            return PlayerDataMgr.getInstance().getFish();
        }

        // 临时增加的鱼干，仅供展示
        static cumulateFish(fish, handler) {
            PlayerSystem.updateFish(PlayerSystem.getFish()+fish);
        }


        static updateFish(fish) {
            PlayerDataMgr.getInstance().updateFish(fish);
            EventMgr.getInstance().postEvent("UPDATE_FISH", fish);
        }

        static getStar() {
            return PlayerDataMgr.getInstance().getStar();
        }

        static updateStar(star) {
            PlayerDataMgr.getInstance().updateStar(star);
            EventMgr.getInstance().postEvent("UPDATE_STAR", star);
        }

        // 临时增加的星星，仅供展示
        static cumulateStar(star) {
            PlayerSystem.updateStar(PlayerSystem.getStar()+star);
        }

        static clear() {
            PlayerDataMgr.getInstance().clear();
        }
    }

    class LocationData {

        constructor() {
            this.locationData = null;
            this._curBuildingId = null;
        }

        setData(data) {
            this.locationData = data;
        }

        getId() {
            return this.locationData.Id;
        }

        getX() {
            return Number(this.locationData.Pos[0]);
        }

        getY() {
            return Number(this.locationData.Pos[1]);
        }

        getSelectionX() {
            return Number(this.locationData.PosSelection[0]);
        }

        getSelectionY() {
            return Number(this.locationData.PosSelection[1]);
        }

        getOrder() {
            return Number(this.locationData.Order);
        }

        getBaseType() {
            return this.locationData.BaseType;
        }

        getZOrder() {
            let zorder = Number(this.locationData.ZOrder);
            return zorder;
        }

        getListName() {
            return this.locationData.ListName;
        }

        getBaseSize() {
            return this.locationData.BaseSize;
        }

        getPathPointIndex() {
            return Number(this.locationData.PathPointIndex);
        }

        getFixedBuildings() {
            return this.locationData.FixedBuildings;
        }

        getBelongScene() {
            return this.locationData.BelongScene;
        }

        checkBuildingAvailable(buildingId) {
            let buildings = this.getFixedBuildings();
            let result = false;
            for(let element of buildings){
                if(element==buildingId){
                    result = true;
                    return true;
                }
            }
            return result;
        }

        setBuildingId(buildingId) {
            this._curBuildingId = buildingId;
        }

        getBuildingId() {
            return this._curBuildingId;
        }

        checkIsHigher(buildingId) {
            if(this.getBaseType()==1){
                let buildings = this.getFixedBuildings();
                if(!this._curBuildingId){
                    return true;
                }
                for(let element of buildings){
                    if(element==this._curBuildingId){
                        return true;
                    }
                    if(element==buildingId){
                        return false;
                    }
                }
            }else{
                return true;
            }
        }

        clear() {
            this._curBuildingId = null;
        }
    }

    //DataMgr都应该只包含ConfigMgr和对应的Data
    class LocationDataMgr {

        constructor() {
            this.locationMap = new Map();
            this.initLocations();
        }

        static getInstance() {
            return LocationDataMgr.instance?LocationDataMgr.instance:LocationDataMgr.instance = new LocationDataMgr();
        }

        //初始化点位
        initLocations() {
            let config = ConfigMgr.getInstance().getConfig("BuildingBase");
            let outSelf = this;
            config.forEach(function (item) {
                let data = new LocationData();
                data.setData(item);
                outSelf.locationMap.set(Number(item["Id"]), data);
            });
        }

        clear() {
            this.locationMap.forEach((location)=>{
                location.clear();
            });
        }

        getLocation(id) {
            return this.locationMap.get(Number(id));
        }

        getLocationsByBaseType(baseType) {
            let list = new Array();
            this.locationMap.forEach((location)=>{
                if(location.getBaseType()==baseType){
                    list.push(location);
                }
            });
            function sortByOrder(a,b)
            {
                return a.getOrder()-b.getOrder();
            }
            list.sort(sortByOrder);
            return list;
        }

    }

    class BuildingData{

        constructor(bid) {
            this.catWeightedMap = new Map();
            this.catWeightedSum = 0;
            this.config = ConfigMgr.getInstance().getItemById("Building", String(bid));
            this.config.CustomerInvite.forEach(element => {
                if(element != "") {
                    let data = element.split(":");
                    this.catWeightedMap.set(String(data[0]), Number(data[1]));
                    this.catWeightedSum += Number(data[1]);
                }
            });
            this.locationData = null;


            this.spaceMap = new Map();

            this.attractCD = null;

        }

        getCatWeightedSum() {
            return this.catWeightedSum;
        }

        getId() {
            return this.config.Id;
        }

        getSource() {
            return this.config.Source;
        }

        getLocationData() {
            return this.locationData;
        }

        setLocationData(data) {
            this.locationData = data;
            if(data==null) {
                for(const [key, cadId] of this.spaceMap) {
                    EventMgr.getInstance().postEvent("REMOVE_CAT", [catId,this.getBelongScene()]);
                }
                this.spaceMap.clear();
                this.attractCD = null;
            }
        }

        getCatWeightedMap() {
            return this.catWeightedMap;
        }

        getCatWeightedArray() {
            let ar = new Array();
            this.catWeightedMap.forEach((value, key) => {
                ar.push({w: value, n: key});
            });
            ar.sort(function(a, b) {
                return a.w < b.w;
            });
            return ar;
        }

        getBelongScene() {
            return this.config.BelongScene;
        }

        getCost() {
            return this.config.Cost;
        }

        getStar() {
            return this.config.StarReward;
        }

        getLimit() {
            return this.config.Limit;
        }

        getSpecialTpye() {
            return this.config.SpecialTpye;
        }

        getSpecialValue() {
            return this.config.SpecialValue;
        }

        getAutoIncome() {
            let ret = 0;
            if(this.config.AutoIncome != null) {
                ret = Number(this.config.AutoIncome);
            }
            return ret;
        }

        canStay() {
            return this.getLocationData()!= null && this.getCapacity()>0;
        }

        getCapacity() {
            return this.config.PointCount;
        }

        hasSpace() {
            for(let i = 0; i<this.getCapacity(); ++i) {
                if(!this.spaceMap.get(i)) {
                    return true;
                }
            }
            return false;
        }

        getSpaces() {
            let arr = new Array();
            for(let i = 0; i<this.getCapacity(); ++i) {
                if(!this.spaceMap.get(i)) {
                    arr.push(i);
                }
            }
            if(arr.length==0){
                return null;
            }

            return arr;
        }

        occupy(spaceId, catId) {
            spaceId = Number(spaceId);
            if(spaceId>=this.getCapacity()||spaceId<0) {
                return false;
            }
            let prevCat = this.spaceMap.get(spaceId);
            if(prevCat) {
                if(prevCat==catId) {
                    return true;
                }
                return false;
            }
            this.spaceMap.set(spaceId, catId);
            return true;
        }

        leave(spaceId, catId) {
            spaceId = Number(spaceId);
            if(spaceId>=this.getCapacity()||spaceId<0) {
                return false;
            }
            let prevCat = this.spaceMap.get(spaceId);
            if(!prevCat || prevCat!=catId) {
                return false;
            }
            this.spaceMap.delete(spaceId);
            return true;
        }

        isSupportAction(eventString) {
            for(let i = 0 ; i < this.config.SupportActions.length; ++i) {
                let d = this.config.SupportActions[i];
                if(d != null && d != ""
                 && eventString == d) {
                    return true;
                }
            }
            return false;
        }

    }

    //DataMgr都应该只包含ConfigMgr和对应的Data
    class BuildingDataMgr {

        constructor() {
            this.buildingMap = new Map();

            this.buildingMap.set(1, {weighted: 0, list: new Array(), catWeightedMap: new Map(), autoIncome: 0});
            this.buildingMap.set(2, {weighted: 0, list: new Array(), catWeightedMap: new Map(), autoIncome: 0});
            this.buildingMap.set(3, {weighted: 0, list: new Array(), catWeightedMap: new Map(), autoIncome: 0});

        }

        static getInstance() {
            return BuildingDataMgr.instance?BuildingDataMgr.instance:BuildingDataMgr.instance = new BuildingDataMgr();
        }

        //获得属于的scene
        getSceneIdByBid(bid) {
            let config = ConfigMgr.getInstance().getItemById("Building", String(bid));
            return config.BelongScene;
        }

        //获得建筑物列表
        getBuildingDataListInfo(sceneId) {
           return this.buildingMap.get(Number(sceneId));
        }

        //获取建筑物通过bid
        getBuildingDataByBid(bid) {
            let info = this.getBuildingDataListInfo(this.getSceneIdByBid(bid));
            for(let i = 0 ; i< info.list.length ; ++i) {
                let b = info.list[i];
                if(String(b.getId()) == String(bid)) {
                    return b;
                }
            }
            return null;
        }

        //移除建筑物
        removeBuildingDataByBid(buildingId) {
            let info = this.getBuildingDataListInfo(this.getSceneIdByBid(buildingId));
            if(info == null) {
                return;
            }
            for(let i = 0 ; i < info.list.length ; ++i) {
                let b = info.list[i];
                if(String(buildingId) == b.getId()) {
                    let d = b.getCatWeightedMap();
                    let a = b.getAutoIncome();
                    info.autoIncome = info.autoIncome - a;
                    d.forEach(function (value, key) {
                        info.weighted = info.weighted - value;
                        let v = info.catWeightedMap.get(key) - value;
                        info.catWeightedMap.set(key, v);
                    });
                    info.list.splice(i, 1);
                    return b;
                }
            }
        }

        //添加建筑物
        addBuildingDataByBid(bid) {
            let sceneId = this.getSceneIdByBid(bid);
            let ret = this.getBuildingDataByBid(bid);
            if(ret != null) {
                return ret;
            }
            ret  = new BuildingData(String(bid));
            let d = ret.getCatWeightedMap();
            let a = ret.getAutoIncome();
            let info = this.buildingMap.get(sceneId);
            info.autoIncome = info.autoIncome + a;
            d.forEach(function (value, key) {
                info.weighted = info.weighted + value;
                if(info.catWeightedMap.get(key)) {
                   let v = info.catWeightedMap.get(key) + value;
                   info.catWeightedMap.set(key, v);
                } else {
                   info.catWeightedMap.set(key, value);
                }
           });
           info.list.push(ret);
           return ret;
        }

        getCatWeightedMap(sceneId) {
            let info = this.buildingMap.get(sceneId);
            return info.catWeightedMap;
        }

        getCatWeightedArray(sceneId) {
            let catWeightedMap = this.getCatWeightedMap(sceneId);
            let arr = new Array();
            catWeightedMap.forEach((value, key) => {
                arr.push({w: value, n: key});
            });
            arr.sort(function(a, b) {
                return a.w < b.w;
            });
            return arr;
        }

        getAutoIncomeSum() {
            let a1 = this.buildingMap.get(1);
            let a2 = this.buildingMap.get(2);
            return Number(a1.autoIncome) + Number(a2.autoIncome);
        }


        clear() {
            // this.buildingList.clear();
            // this.catWeightedMap.clear();
        }
    }

    //先拆分出来，涉及EventMgr的以及其他DataMgr的都放到System中做，其他的之后再细化应该放在System还是DataMgr
    class BuildingSystem {

        static init() {
        }

        static clear() {
            BuildingDataMgr.getInstance().clear();
            LocationDataMgr.getInstance().clear();
        }

        static addBuildingDataByBid(bid) {
            BuildingDataMgr.getInstance().addBuildingDataByBid(bid);
        }

        //替换建筑物数据
        static replaceBuildingData(bid, pid) {
            let locationData = LocationDataMgr.getInstance().getLocation(Number(pid));
            if(locationData == null) {
                return;
            }
            let preBuildingId = locationData.getBuildingId();
            if(preBuildingId != null) {
                let toRemoveBuildingData = BuildingDataMgr.getInstance().getBuildingDataByBid(preBuildingId);
                EventMgr.getInstance().postEvent("REMOVE_BUILDING", toRemoveBuildingData);
                BuildingSystem.removeBuildingDataByPid(pid);
            }
            let buildingData = BuildingDataMgr.getInstance().addBuildingDataByBid(bid);
            if(buildingData == null) {
                return;
            }
            let prevLocation = buildingData.getLocationData();
            if(prevLocation){
                EventMgr.getInstance().postEvent("REMOVE_BUILDING",buildingData);
                prevLocation.setBuildingId(null);
            }
            locationData.setBuildingId(bid);
            buildingData.setLocationData(locationData);
            EventMgr.getInstance().postEvent("ADD_BUILDING", buildingData);
        }

        //获取建筑物通过location
        static getBuildingDataByPid(pid) {
            let location = LocationDataMgr.getInstance().getLocation(Number(pid));
            if(location == null) {
                return null;
            }
            let buildingId = location.getBuildingId();
            if(buildingId == null) {
                return null;
            }
            let building = BuildingDataMgr.getInstance().getBuildingDataByBid(buildingId);
            return building;
        }

        //移除建筑物通过pid
        static removeBuildingDataByPid(pid) {
            let locationData = LocationDataMgr.getInstance().getLocation(Number(pid));
            let buildingId = locationData.getBuildingId();
            if(buildingId) {
                let buildingData = BuildingDataMgr.getInstance().getBuildingDataByBid(buildingId);
                buildingData.setLocationData(null);
                locationData.setBuildingId(null);
                // return BuildingDataMgr.getInstance().removeBuildingDataByBid(buildingId);
            }
            return null;
        }

        //一场景使用，后续可以做预约？
        static randomVisitBuilding(sceneId, actionEvent) {
            let arr1 = new Array();
            let arr2 = new Array();
            let buildingDataList = BuildingDataMgr.getInstance().getBuildingDataListInfo(sceneId).list;
            buildingDataList.forEach(buildingData => {
                if(buildingData != null && buildingData.canStay() &&
                     buildingData.isSupportAction(actionEvent)) {
                    if(buildingData.hasSpace()){
                        arr1.push(buildingData);
                    }else{
                        arr2.push(buildingData);
                    }
                }
            });
            if(arr1.length == 0 && arr2.length == 0) {
                return null;
            }
            if(arr1.length>0) {
                let i = Utils.randomExt(arr1.length);
                let ret = arr1[i];
                return ret;
            }
            if(arr2.length>0) {
                let i = Utils.randomExt(arr2.length);
                let ret = arr2[i];
                return ret;
            }
        }

        //2场景使用
        static getAvailableBuilding(sceneId) {
            let arr = new Array();
            let buildingDataList = BuildingDataMgr.getInstance().getBuildingDataListInfo(sceneId).list;
            buildingDataList.forEach(buildingData => {
                if(buildingData != null && buildingData.canStay() && buildingData.hasSpace()) {
                    arr.push(buildingData);
                }
            });
            if(arr.length == 0) {
                return null;
            }
            return arr;
        }

        static getTotalSpaceCountInScene(sceneId) {
            let count = 0;
            let buildingDataList = BuildingDataMgr.getInstance().getBuildingDataListInfo(sceneId).list;
            buildingDataList.forEach(buildingData => {
                if(buildingData != null && buildingData.canStay()) {
                    count += buildingData.getCapacity();
                }
            });
            return count;
        }

        static getEmptySpaceCountInScene(sceneId) {
            let count = 0;
            let buildingDataList = BuildingDataMgr.getInstance().getBuildingDataListInfo(sceneId).list;
            buildingDataList.forEach(buildingData => {
                if(buildingData != null && buildingData.canStay() && buildingData.hasSpace()) {
                    count += buildingData.getSpaces().length;
                }
            });
            return count;
        }

        static getBuildingDataListInfo(sceneId) {
            return BuildingDataMgr.getInstance().getBuildingDataListInfo(sceneId);
        }

        static getLocationsByBaseType(baseType) {
            return LocationDataMgr.getInstance().getLocationsByBaseType(baseType);
        }

        //是否存在建筑物
        static hasBuildingDataByBid(buildingId) {
            let info = BuildingDataMgr.getInstance().getBuildingDataListInfo(BuildingDataMgr.getInstance().getSceneIdByBid(buildingId));
            // if(info == null) {
            //     return false;
            // }
            for(let i = 0 ; i < info.list.length ; ++i) {
                let b = info.list[i];
                if(String(buildingId) == b.getId()) {
                    return true;
                }
            }
            return false;
        }

        static getBuildingDataByBid(bid) {
            return BuildingDataMgr.getInstance().getBuildingDataByBid(bid);
        }

        static getCatWeightedArray(sceneId) {
            return BuildingDataMgr.getInstance().getCatWeightedArray(sceneId);
        }

        static getAutoIncomeSum() {
            return BuildingDataMgr.getInstance().getAutoIncomeSum();
        }

        /**----------------------------------------------------------------------
        原System调用
        */

        static checkBuildingUnlocked(buildingId) {
            if(BuildingSystem.hasBuildingDataByBid(buildingId)) {
                return true;
            }
            
            let building = new BuildingData(buildingId);
            if(PlayerSystem.getStar()<building.getLimit()) {
                return false;
            }
            return true;
        }

        static checkBuyBuildingAvailable(buildingId) {
            if(BuildingSystem.hasBuildingDataByBid(buildingId)) {
                return false;
            }
            let building = new BuildingData(buildingId);
            if(PlayerSystem.getFish()<building.getCost()) {
                return false;
            }
            return true;
        }

        static checkPlaceBuildingAvailable(buildingId, baseId) {
            let location = LocationDataMgr.getInstance().getLocation(baseId);
            if(!location.checkBuildingAvailable(buildingId)){
                return false;
            }
        }

        static buyBuilding(buildingId, callback) {
            if(BuildingSystem.checkBuyBuildingAvailable(buildingId)) {
                let func = function() {
                    BuildingDataMgr.getInstance().addBuildingDataByBid(buildingId);
                    if(callback){
                        callback();
                    }
                };
                // System.putBuilding(buildingId, "", Laya.Handler.create(null, func))
                EventMgr.getInstance().postEvent("SERVICE_PUT_BUILDING", [buildingId, "", Laya.Handler.create(null, func)]);
            }
        }

        static buyBuildingAndPlace(buildingId, baseId) {
            if(BuildingSystem.checkBuyBuildingAvailable(buildingId)) {
                let func = function() {
                    BuildingSystem.replaceBuildingData(buildingId, baseId);
                    let location = LocationDataMgr.getInstance().getLocation(baseId);
                    SceneMgr.getInstance().switchScene(location.getBelongScene());
                };
                // System.putBuilding(buildingId, baseId, Laya.Handler.create(null, func))
                EventMgr.getInstance().postEvent("SERVICE_PUT_BUILDING", [buildingId, baseId, Laya.Handler.create(null, func)]);
            }
        }

        static placeBuilding(buildingId, baseId) {
            let func = function() {
                BuildingSystem.replaceBuildingData(buildingId, baseId);
                let location = LocationDataMgr.getInstance().getLocation(baseId);
                SceneMgr.getInstance().switchScene(location.getBelongScene());
            };
            // System.putBuilding(buildingId, baseId, Laya.Handler.create(null, func))
            EventMgr.getInstance().postEvent("SERVICE_PUT_BUILDING", [buildingId, baseId, Laya.Handler.create(null, func)]);
        }

    }

    class BuildingTipLogic extends Laya.Script {

        constructor() {
            super();
            this.costText = null;
            this.letterTip = null;
        }

        onEnable() {
            this.autoIncomeLimit = SyncSystem.getCacheFishCapacity()||this.owner.getData().getSpecialValue();
            this.letterTip = this.owner.prefab.getChildByName("letter_tip");
            this.bg = this.owner.prefab.getChildByName("_spineAnim_1");
            this.costText = this.letterTip.getChildByName("cost_text");
            this.letterTip.on(Laya.Event.MOUSE_DOWN,this, this.onClickTip);
            EventMgr.getInstance().registEvent("UPDATE_LETTER_BOX", this, this.updateLetterBox);
            this.updateLetterBox();
        }

        onClickTip() {
            let cacheFish =  SyncSystem.getCacheFish();
            if(cacheFish > 0) {
                this.costText.text = String(0);
                this.letterTip.visible = false;
                this.bg.visible = false;

                SyncSystem.fetchLetterBox();

                let interval = SyncSystem.getLetterBoxNextUpdateInterval()+500;
                while(interval<=5000) {
                    interval = interval + Constants.LetterBoxInterval;
                }
                Laya.timer.once(interval, this, this.onAddCatTip, [], true);
            }
        }

        onAddCatTip() {
            let sum = BuildingSystem.getAutoIncomeSum();
            let cacheFish =  SyncSystem.getCacheFish();
            // console.debug("onAddCatTip", cacheFish, sum);
            let cost = Number(cacheFish) + Number(sum);
            if(cost >= this.autoIncomeLimit) {
                cost = this.autoIncomeLimit;
            }
            SyncSystem.setCacheFish(cost);
            this.costText.text = String(cost);
            this.letterTip.visible = true;
            this.bg.visible = true;
            SyncSystem.getLetterBoxInfo();
            let interval = SyncSystem.getLetterBoxNextUpdateInterval()+500;
            while(interval<=5000) {
                interval = interval + Constants.LetterBoxInterval;
            }
            Laya.timer.once(interval, this, this.onAddCatTip, [], true);
        }

        updateLetterBox() {
            let cacheFish = SyncSystem.getCacheFish();
            this.costText.text = String(cacheFish);
            if(cacheFish > 0) {
                this.letterTip.visible = true;
                this.bg.visible = true;
            } else {
                this.letterTip.visible = false;
                this.bg.visible = false;
            }
            let interval = SyncSystem.getLetterBoxNextUpdateInterval()+500;
            while(interval<=0) {
                interval = interval + Constants.LetterBoxInterval;
            }
            Laya.timer.once(interval, this, this.onAddCatTip, [], true);
        }

        onDisable() {
            EventMgr.getInstance().removeEvent("UPDATE_LETTER_BOX", this, this.updateLetterBox);
            Laya.timer.clear(this, this.onAddCatTip);
        }
    }

    class BuildingFactory {

        constructor() {
        }

        static getInstance() {
            return BuildingFactory.instance?BuildingFactory.instance:BuildingFactory.instance = new BuildingFactory();
        }

        createBuilding(buildingData, parent, completeHandler) {
            var building = new Building$1();
            building.setData(buildingData);
            building.loadResource(buildingData.getSource(), function() {
                parent.addChild(building);
                let locationData = buildingData.getLocationData();
                building.pos(Number(locationData.getX()), Number(locationData.getY()));
                building.zOrder = Number(locationData.getZOrder());
                let sceneId = buildingData.getBelongScene();
                if(sceneId == Constants.CoffeeSceneId) {
                } else if (sceneId == Constants.BeachSceneId) {
                    // building.addComponent(BeachAttractCatLogic);
                }
                let specialTpye = buildingData.getSpecialTpye();
                if(specialTpye == 1) {
                    building.addComponent(BuildingTipLogic);
                }

                Utils.fadein(building, 1000, Laya.Handler.create(this, function(){
                    if(completeHandler != null) {
                        completeHandler.runWith(building);
                    }
                }));
            });
            return building;
        }

        static createBuildingBaseSelector(location, parent) {
            let sprite = new Laya.Sprite();
            sprite.loadImage("facility/jianzhu"+(location.getBaseSize()+1)+".png");
            sprite.mouseEnabled = true;
            parent.addChild(sprite);
            sprite.pos(Number(location.getSelectionX()), Number(location.getSelectionY()));
            sprite.zOrder = Number(location.getZOrder());
            return sprite;
        }
    }

    class GameContext {
    }

    class BeachCatMgr {
        constructor() {
            this._catMap = new Map();
        }

        static getInstance() {
            return BeachCatMgr.instance?BeachCatMgr.instance:BeachCatMgr.instance = new BeachCatMgr();
        }

        addCat(cat) {
            this._catMap.set(cat.getId(), cat);
        }

        removeCat(catId) {
            this._catMap.delete(catId);
        }

        getCat(catId) {
            return this._catMap.get(catId);
        }

        idleCatsInBuilding(buildingId) {
            let result = new Array();
            for(const [key, cat] of this._catMap) {
                if(cat.buildingId==buildingId && cat.parent == null){
                    result.push(cat);
                }
            }
            return result;
        }

        clear() {

        }
    }

    /**
     * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
     * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
     * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
     */

    class BeachScene extends Laya.Scene {
        constructor() {
            super();
            this.sceneId = Constants.BeachSceneId;//2
            this.buildingMap = new Map();
        }

        onAwake() {
            EventMgr.getInstance().registEvent("ADD_BUILDING", this, this.addBuilding);
            EventMgr.getInstance().registEvent("REMOVE_BUILDING", this, this.removeBuilding);
            EventMgr.getInstance().registEvent("PLACE_BUILDING", this, this.placeBuilding);
            this.root = this.getChildByName("root");

            this.onBg();
            this.onInitBuilding();
            this.chooseLayer.on(Laya.Event.CLICK,this,this.onChooseLayerClick);
            if(GameContext.PlacingBuilding) {
                this.placeBuilding(GameContext.PlacingBuilding);
            }
        }

        onBg() {
           this.bgAnim = new Laya.Skeleton();
           this.bgAnim.load("anim/skeleton.sk", Laya.Handler.create(this, function() {
                this.root.addChild(this.bgAnim);
                this.bgAnim.scaleX = 1.2;
                this.bgAnim.scaleY = 1.2;
                this.bgAnim.x = 890;
                this.bgAnim.y = 1075;
           }));
        }

        onInitBuilding() {
            let buildingList = BuildingSystem.getBuildingDataListInfo(this.sceneId).list;
            for(var i = 0 ; i < buildingList.length ; ++i) {
                let data = buildingList[i];
                let buildingId = data.getId();
                if(this.buildingMap.get(buildingId) == null && data.getLocationData() != null) {
                    // console.debug("onInitBuilding", buildingId)
                    let building = BuildingFactory.getInstance().createBuilding(data, this.root, Laya.Handler.create(this, this._buildingLoaded));
                    this.buildingMap.set(buildingId, building);
                }
            }
        }

        _buildingLoaded(building) {
            let buildingId = building.getId();
            let cats = BeachCatMgr.getInstance().idleCatsInBuilding(buildingId);
            for(const cat of cats) {
                let spaceId = cat.spaceId;
                this.addCatToBuilding(cat, buildingId, spaceId);
            }
        }

        addCatToBuilding(cat, buildingId, spaceId) {
            let buildingExtInfo = this.getSpaceInfo(buildingId, spaceId);
            if(buildingExtInfo != null) {
                buildingExtInfo.addToBuildingRoot(cat);
                cat.x = buildingExtInfo.getBuildingRootHalfWidth();
                cat.y = buildingExtInfo.getBuildingRootHalfHeight();
                cat.scaleX = buildingExtInfo.getIsFlip()*Math.abs(cat.scaleX);
                Utils.fadein(cat, 500, Laya.Handler.create(this, function() {
                    cat.alpha = 1;
                    cat.playAnim(buildingExtInfo.randomCatMove());
                }));
            }
        }

        onEnable() {
            Laya.SoundManager.playSound("sound/beachWave.mp3", 0);
        }

        onDisable() {
            Laya.SoundManager.stopSound("sound/beachWave.mp3");
        }

        addBuilding(data) {
            if(data.getBelongScene()==this.sceneId){
                let building = BuildingFactory.getInstance().createBuilding(data, this.root, Laya.Handler.create(this, this._buildingLoaded));
                this.buildingMap.set(data.getId(), building);
            }
        }

        removeBuilding(data) {
            if(data.getBelongScene()==this.sceneId){
                if(this.buildingMap.has(data.getId())){
                    let building = this.buildingMap.get(data.getId());
                    building.destroy();
                    this.buildingMap.delete(data.getId());
                }
            }
        }

        placeBuilding(buildingId) {
            let locationList = BuildingSystem.getLocationsByBaseType(2);
            let list = new Array();
            locationList.forEach(element=>{
                if(element.getBelongScene()==this.sceneId && element.checkBuildingAvailable(buildingId)){
                    list.push(element);
                }
            });
            if(list.length>0){
                GameContext.PlacingBuilding = null;
                this.showLocationSelect(list, buildingId);
            }
        }

        getBuilding(id) {
            for (var [key, value] of this.buildingMap) {
                if(Number(key) == Number(id)) {
                    if(value.isLoaded()) {
                        return value;
                    }
                    return null;
                }
            }
            return null;
        }

        getSpaceInfo(buildingId, spaceId) {
            let building = this.getBuilding(buildingId);
            if(building){
                return building.getBuildingExtInfoMgr().getBuildingExtInfo(spaceId);
            }

        }

        showLocationSelect(locationList, buildingId) {
            this.chooseLayer.removeChildren();
            this.chooseLayer.visible = true;
            locationList.forEach(element=>{
                let selector = BuildingFactory.createBuildingBaseSelector(element, this.chooseLayer);
                selector.baseId = element.getId();
                selector.buildingId = buildingId;
                selector.on(Laya.Event.CLICK,this,this.onClick);
            });
        }

        onClick(event) {
            let buildingId = event.currentTarget.buildingId;
            let baseId =  event.currentTarget.baseId;
            BuildingSystem.placeBuilding(buildingId, baseId);
            this.chooseLayer.visible = false;
            Laya.SoundManager.playSound("sound/placeBuilding.mp3", 1);
        }

        onChooseLayerClick(){
            this.chooseLayer.visible = false;
        }

    }

    class Const {

        constructor() {
        }

        //获得原始数据
       static get(string_id) {
           return ConfigMgr.getInstance().getItemById("Const", String(string_id)).Value;
        }

        //获得数组
        static getArray(string_id) {
            let d = Const.get(string_id);
            let ret = JSON.parse(d);
            return ret;
        }
    }

    let trim = function(num, divisor, unit) {
        if(num%divisor==0)
            return String(num/divisor)+unit;
        else{
            let str = String(parseInt(num*10/divisor));
            return str.slice(0,-2)+"."+str.slice(-1)+unit;
        }
    };

    class Strings {

        static get(textId) {
            let item = ConfigMgr.getInstance().getItemById("Translate", textId);
            if(item!=null) {
                return item.zh_CH;
            }
        }

        static short(num) {
            if(num<1000) {
                return String(num);
            }else if(num<=1000000) {
                return trim(num, 1000, "k");
            }
        }
    }

    class Bowl extends Laya.Box {
        constructor() {
            super();
            this.visible = false;
        }

        update() {
            let exhaustTime = SyncSystem.getScene2ExhaustTime();
            let now = TimeUtils.getTimeNowOnServer();
            let total = Number(Const.get("CatFoodKeepTime"));
            let full = Number(Const.get("CatFoodNotFull"));
            if(exhaustTime==null || exhaustTime<=now) {
                if(this._image.texture!="common/bowl_0.png")
                        this._image.texture = "common/bowl_0.png";
                this._progress.value = 0;
            }else{
                let ratio = (exhaustTime - now)/1000/total;
                this._progress.value = ratio;
                if(ratio>full) {
                    if(this._image.texture!="common/bowl_2.png")
                        this._image.texture = "common/bowl_2.png";
                }else{
                    if(this._image.texture!="common/bowl_1.png")
                        this._image.texture = "common/bowl_1.png";
                }
            }
            this._image.visible = true;
            this._progress.visible = true;
        }

        onEnable() {
            this._image = this.getChildByName("image");
            this._progress = this.getChildByName("bar");
            if(this.visible==false) {
                this.visible = true;
                this._image.visible = false;
                this._progress.visible = false;
            }

            Laya.timer.loop(1000, this, this.update, null, true, true);
            EventMgr.getInstance().registEvent("REFRESH_FOOD", this, this.update);
            this.on(Laya.Event.CLICK, this, this.onClick);
        }

        onClick() {
            let exhaustTime = SyncSystem.getScene2ExhaustTime();
            let now = TimeUtils.getTimeNowOnServer();
            let total = Number(Const.get("CatFoodKeepTime"));
            let full = Number(Const.get("CatFoodNotFull"));

            if(exhaustTime&&(exhaustTime - now)/1000/total>full) {
                EventMgr.getInstance().postEvent("SHOW_TIPS", Strings.get("tid#catFoodFillFail"));
                return;
            }
            let result = SyncSystem.addScene2Food(total);
            if(result==null) {
                //没加成功；
            }
            EventMgr.getInstance().postEvent("SHOW_TIPS", Strings.get("tid#catFoodFillSuccess"));
            this.update();
        }

        onDisable() {
            Laya.timer.clearAll(this);
            this.offAll();
            EventMgr.getInstance().removeEvent("REFRESH_FOOD", this, this.update);
        }
    }

    class ViewAdjust extends Laya.Script {

        constructor() {
            super();
            //0 View剧中 1Dialog剧中
            /** @prop {name:align, tips:"0:View居中 1:Dialog居中", type:int, default:0}*/
            this.align = 0;
        }

        onStart() {
            if(this.owner) {
                if(this.align == 0) {
                    let heightScale = Laya.Browser.height/2436;
                    let realW = 1827*heightScale;
                    // let realH = 2436*heightScale;
                    this.owner.x = (Laya.Browser.width/2 - realW/2)/heightScale;
                } else if(this.align == 1) {
                    this.owner.popup();
                }

            }
        }
    }

    class Guide extends Laya.Script {

        constructor() {
            super();
            this.guideAnim = null;
            EventMgr.getInstance().registEvent("NEXT_GUIDE", this, this.onNextGuide);
        }

        onAwake() {
            this.guideAnim = new Laya.Skeleton();
            this.guideAnim.load("anim/maozhua.sk", Laya.Handler.create(this, function() {
                this.guideAnim.x = 406;
                this.guideAnim.y = 2051;
                this.guideAnim.scaleX = 0.6;
                this.guideAnim.scaleY = 0.6;
                this.guideAnim.play("2", true);
            }));
            let root = this.owner.getChildByName("root");
            root.addChild(this.guideAnim);
        }
        
        onEnable() {
            
        }

        onNextGuide() {
            this.guideAnim.stop();
            this.guideAnim.visible = false;
        }

        onDisable() {
        }
    }

    class ViewAlignment extends Laya.Script {

        constructor() { 
            super();
            // 1 靠右 2 靠左
            /** @prop {name:alignment, tips:"1 靠右", type:Int, default:1}*/
            this.alignment = 1;
            /** @prop {name:offsetX, tips:"偏移量", type:Int, default:0}*/
            this.offsetX = 0;
        }
        
        onEnable() {
            let renderW = 1827;
            let renderH = 2436;
            let heightScale = Laya.Browser.height/renderH;
            let realW = renderW*heightScale;
            let realH = renderH*heightScale;
            // let globalZero = new Laya.Point((realW/2 -Laya.Browser.width/2)/heightScale, 0);
            // let p = new Laya.Point(this.owner.x, this.owner.y);
            // this.owner.parent.localToGlobal(p);

            if(this.alignment == 1) {
                this.owner.x = Laya.Browser.width/heightScale + this.offsetX;
            } else if (this.alignment == 2) {
                this.owner.x = this.offsetX;
            }
        }

        onDisable() {
        }
    }

    class ClickVisitorGiftBtn extends Laya.Script {

        constructor() {
            super();
        }

        onAwake() {
            this.owner.on(Laya.Event.CLICK, this, this.onClick);
        }

        onEnable() {

        }

        onClick() {
            SyncSystem.findVisitorGift(Laya.Handler.create(this, this.openDialog));
        }

        openDialog() {
            Laya.Dialog.open("ui/visitorGiftPop.scene");
        }

        onDisable() {
        }
    }

    class CoffeeCatMgr {
        constructor() {
            this._catMap = new Map();
        }

        static getInstance() {
            return CoffeeCatMgr.instance?CoffeeCatMgr.instance:CoffeeCatMgr.instance = new CoffeeCatMgr();
        }

        addCat(cat) {
            this._catMap.set(cat.getId(), cat);
        }

        removeCat(catId) {
            this._catMap.delete(catId);
        }

        getCat(catId) {
            return this._catMap.get(catId);
        }

        allCatsInScene(parent) {
            let result = new Array();
            for(const [key, cat] of this._catMap) {
                if(cat.parent == parent){
                    result.push(cat);
                }
            }
            return result;
        }

        clear() {

        }
    }

    class DropFish extends Laya.Sprite {

        constructor(buildingId) {
            super();
            this._buildingId = buildingId;
            this.prefab = null;
            this.countText = null;
            this.dropFishCount = 0;
        }

        onEnable() {
            Laya.loader.create("prefab/component/drop_fish.prefab", Laya.Handler.create(this, function(prefabDef) {
                this.prefab = prefabDef.create();
                this.width = this.prefab.width;
                this.height = this.prefab.height;
                this.pivotX = this.prefab.width/2;
                this.pivotY = this.prefab.height/2;
                this.addChild(this.prefab);
                this.countText = this.prefab.getChildByName("coutText");
                Utils.fadein(this, 3000);
                this.countText.visible = this.dropFishCount>0?true:false;
                this.countText.text = "+"+String(this.dropFishCount);
            }));
        }

        onClick() {
            // this.setDropFish(0);
            if(this.countText) {
                this.countText.visible = false;
                Laya.SoundManager.playSound("sound/clickReward.mp3", 1);
            }
        }

        addDropFish(count) {
            this.setDropFish(this.dropFishCount + count);
        }

        setDropFish(count) {
            this.dropFishCount = count;
            if(this.countText) {
                this.countText.visible = count>0?true:false;
                this.countText.text = "+"+String(this.dropFishCount);
            }
            this.visible = count>0?true:false;
        }

        onDisable() {
        }
    }

    /**
     * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
     * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
     * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
     */

    class CoffeeScene extends Laya.Scene {
        constructor() {
            super();
            this.sceneId = Constants.CoffeeSceneId;//1
            this.buildingMap = new Map();
        }

        onAwake() {
            // EventMgr.getInstance().registEvent("ADD_COFFEE_CAT", this, this.addCat);
            // EventMgr.getInstance().registEvent("REMOVE_COFFEE_CAT", this, this.removeCat);
            EventMgr.getInstance().registEvent("ADD_BUILDING", this, this.addBuilding);
            EventMgr.getInstance().registEvent("REMOVE_BUILDING", this, this.removeBuilding);
            EventMgr.getInstance().registEvent("UPDATE_DROPFISH", this, this.updateDropFish);
            EventMgr.getInstance().registEvent("UPDATE_DROPFISH_ALL", this, this.updateDropFishAll);
        }

        onInitBuilding() {
            let buildingList = BuildingSystem.getBuildingDataListInfo(this.sceneId).list;
            for(var i = 0 ; i < buildingList.length ; ++i) {
                let data = buildingList[i];
                let buildingId = data.getId();
                if(this.buildingMap.get(buildingId) == null && data.getLocationData() != null) {
                    let building = BuildingFactory.getInstance().createBuilding(data, this.root, Laya.Handler.create(this, this._updateDropFish));
                    this.buildingMap.set(buildingId, building);
                }
            }
        }

        onEnable() {
            Laya.SoundManager.playMusic("sound/bgm1.mp3", 0);
            this.root = this.getChildByName("root");
            this.onInitBuilding();
            Laya.timer.loop(500, this, this.sortCatZOrder);
        }

        updateDropFish(buildingId, sceneId) {
            let building = this.getBuilding(buildingId);
            if(building==null) {
                return;
            }
            this._updateDropFish(building);
        }

        _updateDropFish(building) {
            let buildingId = building.getId();
            let fish = SyncSystem.getCachedFish(buildingId);
            let extInfoMgr = building.getBuildingExtInfoMgr();
            if(extInfoMgr.getDropFishPoint() == null) {

            } else {
                let dropFish = extInfoMgr.getDropFish();
                if(dropFish) {
                    dropFish.setDropFish(fish);
                } else {
                    let dropFish = new DropFish(buildingId);
                    extInfoMgr.setDropFish(dropFish);
                    dropFish.setDropFish(fish);
                    let scene = this;
                    let p = extInfoMgr.getDropFishPointPosition();
                    let point = new Laya.Point(p.x, p.y);
                    extInfoMgr.getDropFishPoint().localToGlobal(point, false, scene.root);
                    scene.root.addChild(dropFish);
                    dropFish.x = point.x;
                    dropFish.y = point.y;
                    dropFish.zOrder = building.zOrder;
                }
            }
        }



        updateDropFishAll() {
            for (var [key, value] of this.buildingMap) {
                this._updateDropFish(value);
            }
        }

        sortCatZOrder() {
            let upCats = new Array();
            let downCats = new Array();
            for(const value of CoffeeCatMgr.getInstance().allCatsInScene(this.root)) {
                if (value.zOrder >= 999999) {
                    upCats.push(value);
                } else {
                    downCats.push(value);
                }
            }
            function sortByOrder(a, b)
            {
                return a.y >= b.y;
            }
            upCats.sort(sortByOrder);
            downCats.sort(sortByOrder);

            let up = 999999;
            for(let i = 0 ;i<upCats.length; ++i) {
                upCats[i].zOrder = up + i;
            }

            let down = 50;
            for(let i = 0 ;i<downCats.length; ++i) {
                downCats[i].zOrder = down + i;
            }
        }

        addBuilding(data) {
            if(data.getBelongScene()==this.sceneId){
                let building = BuildingFactory.getInstance().createBuilding(data, this.root, Laya.Handler.create(this, this._updateDropFish));
                this.buildingMap.set(data.getId(), building);
            }
        }

        removeBuilding(data) {
            if(data.getBelongScene()==this.sceneId){
                if(this.buildingMap.has(data.getId())) {
                    let building = this.buildingMap.get(data.getId());
                    building.cleanBuilding();
                    this.buildingMap.delete(data.getId());
                    building.destroy();
                }
            }
        }

        getBuilding(id) {
            for (var [key, value] of this.buildingMap) {
                if(Number(key) == Number(id)) {
                    if(value.isLoaded()) {
                        return value;
                    }
                    return null;
                }
            }
            return null;
        }

        getSpaceInfo(buildingId, spaceId) {
            let building = this.getBuilding(buildingId);
            if(building){
                return building.getBuildingExtInfoMgr().getBuildingExtInfo(spaceId);
            }

        }

    }

    class ClickAddCatBtn extends Laya.Script {

        constructor() {
            super();
            this.maxCount = Number(Const.get("CatInviteClickTimes"));
            this.count = this.maxCount;
        }

        onAwake() {
            this.progressBar= this.owner.getChildByName("bar");
        }

        onEnable() {
            this.progressBar.value=this.count/this.maxCount;
            this.owner.on(Laya.Event.MOUSE_DOWN, this, function() {
                let catCount =  CatSystem.getCatCountBySceneId(Constants.CoffeeSceneId);
                if(catCount >= 15) {
                    EventMgr.getInstance().postEvent("SHOW_TIPS", "场景内猫的数量达到上限15只");
                    return;
                }
                this.count--;
                if(this.count == 0) {
                    this.count = this.maxCount;
                    EventMgr.getInstance().postEvent("FORCE_ATTRACT_COFFEE_CAT");
                }
                this.progressBar.value=this.count/this.maxCount;
                Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
            });
        }

        onDisable() {
        }
    }

    class FishingScene extends Laya.Scene {

        constructor() { 
            super();
            
        }
        
        onAwake() {
            this.leftLimit = 0;
            this.rightLimit = 0;
            this.targetX = 0;
            this.speed = 0;
            this.velocity = -3.001;
            this.initSpeed = 40;
            this.gameState = 1; //0 未开始 1 进行中 2 完成 3 结束
            this.tickTimer = new Laya.Timer();
            this.root = this.getChildByName("root");
            this.startBtn = this.root.getChildByName("start_btn");
            this.startBtn.on(Laya.Event.CLICK, this, this.onClickStartGame);
            this.endBtn = this.root.getChildByName("end_btn");
            this.endBtn.on(Laya.Event.CLICK, this, this.onClickEndGame);
            this.fishVernier = this.root.getChildByName("fish_vernier");
            this.initLimit();
            this.initAnims();
            this.resetGame();
            this.initData();
            this.tickTimer.loop(30, this, this.onUpdate);
        }

        initAnims() {
            let outSelf = this;
            this.animCat = new Laya.Skeleton();
            this.root.addChild(this.animCat);
            this.animCat.load("anim/diaoyu.sk", Laya.Handler.create(this, function() {
                this.animCat.x = 600;
                this.animCat.y = 900;
                this.animCat.stop();
            }));

            let sceneAnim = new Laya.Skeleton();
            sceneAnim.load("anim/diaoyuchangjing.sk", Laya.Handler.create(this, function() {
                sceneAnim.play("changjing", true);
                sceneAnim.x = 600;
                sceneAnim.y = 1200;
            }));
            this.root.addChild(sceneAnim);
        }

        initData() {
            this.dataMap = new Map();
            let l1 = this.root.getChildByName("left_limit1").x;
            let l2 = this.root.getChildByName("left_limit2").x;
            let l3 = this.root.getChildByName("left_limit3").x;
            let r1 = this.root.getChildByName("right_limit1").x;
            let r2 = this.root.getChildByName("right_limit2").x;
            let r3 = this.root.getChildByName("right_limit3").x;
        
            let a1 = new Array();
            a1.push({min: l3, max: r3});
            this.dataMap.set(1, a1);

            let a2 = new Array();
            a2.push({min: l2, max: l3});
            a2.push({min: r3, max: r2});
            this.dataMap.set(2, a2);

            let a3 = new Array();
            a3.push({min: l1, max: l2});
            a3.push({min: r2, max: r1});
            this.dataMap.set(3, a3);


            let a4 = new Array();
            a4.push({min: r1, max: 99999});
            a4.push({min: -99999, max: l1});
            this.dataMap.set(4, a4);
        }

        getResult() {
            let ret = 0;
            let x = this.fishVernier.x;
            this.dataMap.forEach((value, key) => {
                for(let i = 0 ; i< value.length ; ++i) {
                    let d = value[i];
                    if(x <= d.max && x >= d.min ) {
                        ret = key;
                        break;
                    }
                }
            });
            return ret;
        }

        startGame() {
            this.resetGame();
            this.gameState = 1;
            this.startBtn.visible = false;
            this.endBtn.visible = true;
            this.animCat.visible = true;
            this.targetX = this.rightLimit;
            this.animCat.play("diaoyu1", true);
            new Laya.Timer().once(1300, this, function() {
                this.animCat.play("diaoyu2", true);
            });
            this.tickTimer.resume();
        }

        onUpdate() {
            let sign = Utils.getSign(this.targetX - this.fishVernier.x);
            this.fishVernier.x += sign*(this.speed + 0.0001);
            if(this.fishVernier.x > this.rightLimit) {
                this.fishVernier.x = this.rightLimit;
                this.targetX = this.leftLimit;
            }
            if(this.fishVernier.x < this.leftLimit) {
                this.fishVernier.x = this.leftLimit;
                this.targetX = this.rightLimit;
            }
            if(this.gameState == 2) {
                this.speed += this.velocity;
                if(this.speed <= 0) {
                    this.gameState = 3;
                    this.tickTimer.pause();
                    this.animCat.play("diaoyu3", true);
                    new Laya.Timer().once(900, this, function() {
                        this.animCat.stop();
                        let d = this.getResult();
                        Laya.Dialog.open("ui/FishingDialog.scene", false, {result: d, baits: Utils.randomExt(3) + 1});
                    });
                }
            }
        }

        resetGame() {
            this.tickTimer.pause();
            this.speed = this.initSpeed;
            this.gameState = 0;
            this.fishVernier.x = this.leftLimit;
            this.targetX = this.rightLimit;
            this.startBtn.visible = true;
            this.endBtn.visible = false;
            this.animCat.visible = false;
        }

        initLimit() {
           let left = this.root.getChildByName("left_limit");
           let right = this.root.getChildByName("right_limit");
           this.leftLimit = left.x;
           this.rightLimit = right.x;
        }

        onClickStartGame() {
            if(this.gameState == 0) {
                this.startGame();
            }
        }

        onClickEndGame() {
            this.gameState = 2;
        }

        onEnable() {
            this.resetGame();
        }

        onDisable() {
            this.resetGame();
        }
    }

    class FoodData {

        constructor(config, level) {
            this._level = level;
            this._unlocked = false;
            this._config = config;
        }

        unlock() {
            this._unlocked = true;
        }

        isLocked() {
            return !this._unlocked;
        }

        getId() {
            return this._config.Id;
        }

        getName() {
            return this._config.Name;
        }

        getDesc1() {
            return this._config.Desc1;
        }

        get Source() {
            return this._config.Source;
        }

        getShopItems() {
            return this._config.ShopItems;
        }

        getLimit() {
            return this._config.Limit;
        }

        getCost() {
            return this._config.Cost;
        }

        getIncome() {
            return this._config.Income;
        }

        getCookingTime() {
            return this._config.CookingTime;
        }

        getLevel() {
            return this._level;
        }

        // setLevel(level) {
        //     this._level = level;
        // }

        clear() {
            this._unlocked = false;
        }
    }

    class FoodDataMgr {

        constructor() {
            this._foodsMap = new Map();
            this.foodListMap = new Map();
            this.cookBook = new Map();
            this.initFoods();
        }

        static getInstance() {
            return FoodDataMgr.instance?FoodDataMgr.instance:FoodDataMgr.instance = new FoodDataMgr();
        }

        //初始化点位
        initFoods() {
            let config = ConfigMgr.getInstance().getConfig("FoodsList");
            let foodConfig = ConfigMgr.getInstance().getConfig("Foods");
            let outSelf = this;
            config.forEach(function (item) {
                let foodsList = new Array();
                let list = JSON.parse(item.foodsList);
                list.forEach((foodInfo)=>{
                    let foodId = String(foodInfo["foodId"]);
                    let foodLv = Number(foodInfo["lv"]);
                    let food = new FoodData(foodConfig.get(foodId), foodLv);
                    outSelf._foodsMap.set(foodId, food);
                    foodsList.push(food);
                });
                foodsList.sort(function(a,b){
                    return a.getLevel()-b.getLevel();
                });
                outSelf.foodListMap.set(item["Id"], foodsList);
                outSelf.cookBook.set(item["Id"], foodsList[0]);
            });
        }

        clear() {
            this._foodsMap.forEach((food)=>{
                food.clear();
            });
            let outSelf = this;
            this.foodListMap.forEach((foodlist, foodListId)=>{
                outSelf.cookBook.set(foodListId, foodlist[0]);
            });
        }

        getFood(id) {
            return this._foodsMap.get(id);
        }

        getFoodList(foodListId) {
            return this.foodListMap.get(foodListId);
        }

        getCurFoodInList(listId) {
            return this.cookBook.get(String(listId));
        }

        updateFood(foodListId, level) {
            let list = this.foodListMap.get(foodListId);
            let food = this.cookBook.get(foodListId);
            if(food.isLocked()&&food.getLevel()==level){
                food.unlock();
                return true;
            }else if(food.getLevel()!=level) {
                let food = list[level - 1];
                if(food){
                    this.cookBook.set(foodListId, food);
                    for(let i=0;i<=level-1;i++){
                        list[i].unlock();
                    }
                    return true;
                }
            }
            return false;
        }

        getNextLevelUpFoodInList(foodListId) {
            let food = this.getCurFoodInList(foodListId);
            if(food.isLocked()){
                return food;
            }else{
                let list = this.getFoodList(foodListId);
                return list[food.getLevel()];
            }
        }

        getAvailableFood(type) {
            let food = this.cookBook.get(type);
            if(food.isLocked()) {
                return null;
            }
            return food;
        }
    }

    class FoodSystem {
        static init() {
        }

        static clear() {
            FoodDataMgr.getInstance().clear();
        }

        static updateFoods(FoodMenu) {
            if(FoodMenu.menu){
                let needUpdate = false;
                Object.getOwnPropertyNames(FoodMenu.menu).forEach(foodListId=>{
                    let level = FoodMenu.menu[foodListId];
                    needUpdate = FoodDataMgr.getInstance().updateFood(foodListId, level)||needUpdate;
                });
                if(needUpdate) {
                    EventMgr.getInstance().postEvent("UPDATE_FOODS");
                }
            }
        }

        static getFood(foodId) {
            return FoodDataMgr.getInstance().getFood(foodId);
        }

        static getFoodList(listId) {
            return FoodDataMgr.getInstance().getFoodList(listId);
        }

        static getCurFoodInList(listId) {
            return FoodDataMgr.getInstance().getCurFoodInList(listId);
        }

        static getAvailableFood(listId) {
            return FoodDataMgr.getInstance().getAvailableFood(listId);
        }

        static getNextLevelUpFoodInList(listId) {
            return FoodDataMgr.getInstance().getNextLevelUpFoodInList(listId);
        }

        static checkLevelUpUnAvailable(listId) {
            let food = FoodSystem.getNextLevelUpFoodInList(listId);
            if(food.getLimit()>PlayerSystem.getStar()){
                return "评价不足";
            }else if(food.getCost()>PlayerSystem.getFish()){
                return "还差"+String(food.getCost()-PlayerSystem.getFish())+"鱼干";
            }
            return false;
        }

        static getPlayerFoodMenu(handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_PLAYER_FOOD_MENU", [handler]);
        }

        static foodLevelUp(foodListId, handler) {
            EventMgr.getInstance().postEvent("SERVICE_FOOD_LEVELUP", [foodListId, handler]);
        }
    }

    class TaskData {

        constructor(taskId) {
            this.config = ConfigMgr.getInstance().getItemById("Task", taskId);
        }

        getId() {
            return this.config.Id;
        }

        getName() {
            return this.config.Name;
        }

        getDesc() {
            return this.config.Desc;
        }

        setProgress(current, target) {
            if(current==this.current&&target==this.target&&this.rewarded!=true)
                return false;
            this.current = current;
            this.target = target;
            this.rewarded = false;
            return true;
        }

        getCurrent() {
            return this.current?(this.current>this.getTarget()?this.getTarget():this.current):0;
        }

        getTarget() {
            return this.target?this.target:this.config.ConditionValue;
        }

        getRewardType() {
            return this.config.RewardType;
        }

        getReward() {
            return this.config.Reward;
        }

        getStatus() {
            if(this.rewarded)
                return Constants.TaskStatus.kRewarded;
            else if(this.getCurrent()>=this.getTarget())
                return Constants.TaskStatus.kCompleted;
            else
                return Constants.TaskStatus.kRunning;
        }

        setRewarded() {
            if(this.rewarded)
                return false;
            this.rewarded = true;
            this.current = this.getTarget();
            return true;
        }
    }

    class TaskDataMgr {

        constructor() {
            this.dailyTaskMap = new Map();
            this.trophyTaskMap = new Map();
            this.initTasks();
        }

        initTasks() {
            let config = ConfigMgr.getInstance().getConfig("TaskList");
            let outSelf = this;
            config.forEach(function(taskList, id) {
                let taskMap = outSelf.dailyTaskMap;
                if(taskList.TaskType==Constants.TaskType.kTrophy)
                    taskMap = outSelf.trophyTaskMap;
                taskMap.set(taskList.Id, new TaskData(taskList.List[0]));
            });
        }

        static getInstance() {
            return TaskDataMgr.instance?TaskDataMgr.instance:TaskDataMgr.instance = new TaskDataMgr();
        }

        setDirty(dirtyFlag) {
            this.dirtyFlag = dirtyFlag;
        }

        hasCompletedTask() {
            if(this.dirtyFlag==1)
                return true;
            if(this.dirtyFlag==-1)
                return false;
            let ret = this.hasCompletedDailyTask()||this.hasCompletedTrophyTask();
            return ret;
        }

        hasCompletedDailyTask() {
            let ret = false;
            this.dailyTaskMap.forEach(function(task, listId){
                if(task.getStatus()==Constants.TaskStatus.kCompleted)
                    ret = true;
            });
            return ret;
        }

        hasCompletedTrophyTask() {
            let ret = false;
            this.trophyTaskMap.forEach(function(task, listId){
                if(task.getStatus()==Constants.TaskStatus.kCompleted)
                    ret = true;
            });
            return ret;
        }

        getCurrentTask(taskListId) {
            let config = ConfigMgr.getInstance().getItemById("TaskList", taskListId);
            let taskMap = this.dailyTaskMap;
            if(config.TaskType==Constants.TaskType.kTrophy)
                taskMap = this.trophyTaskMap;
            return taskMap.get(taskListId);
        }

        updateTask(taskListId, taskId, current, target, checklist) {
            if(checklist)
                checklist.delete(taskListId);
            let config = ConfigMgr.getInstance().getItemById("TaskList", taskListId);
            let taskMap = this.dailyTaskMap;
            if(config.TaskType==Constants.TaskType.kTrophy)
                taskMap = this.trophyTaskMap;
            let task = taskMap.get(taskListId);
            if(task.getId()==taskId){
                return task.setProgress(current, target);
            }else{
                task = new TaskData(taskId);
                task.setProgress(current, target);
                taskMap.set(taskListId, task);
                return true;
            }
        }

        getChecklist() {
            let checklist = new Map();
            let config = ConfigMgr.getInstance().getConfig("TaskList");
            config.forEach(function(taskList, id) {
                checklist.set(id, true);
            });
            return checklist;
        }

        setUnUpdatedTaskCompleted(checklist) {
            let ret = false;
            if(checklist){
                let outSelf = this;
                checklist.forEach(function(v, taskListId){
                    if(v){
                        let config = ConfigMgr.getInstance().getItemById("TaskList", taskListId);
                        let taskMap = outSelf.dailyTaskMap;
                        if(config.TaskType==Constants.TaskType.kTrophy)
                            taskMap = outSelf.trophyTaskMap;
                        let task = taskMap.get(taskListId);
                        if(task.getId()==config.List[config.List.length-1]){
                            if(task.setRewarded())
                                ret = true;
                        }else{
                            task = new TaskData(config.List[config.List.length-1]);
                            task.setRewarded();
                            taskMap.set(taskListId, task);
                            ret = true;
                        }
                    }
                });
            }
            return ret;
        }

        clear() {
            this.dailyTaskMap.clear();
            this.trophyTaskMap.clear();
            this.initTasks();
        }

    }

    class TaskSystem {
        static init() {
        }

        static setDirty(dirty) {
            TaskDataMgr.getInstance().setDirty(dirty);
        }

        static updateTasks(tasks){
            TaskDataMgr.getInstance().setDirty(null);
            let dailyTasks = tasks.dailyTasks;
            let trophyTasks = tasks.trophyTasks;
            let checklist = TaskDataMgr.getInstance().getChecklist();
            let needUpdate = false;
            [dailyTasks, trophyTasks].forEach(taskLists=>{
                if(taskLists){
                    Object.getOwnPropertyNames(taskLists).forEach(key=>{

                        let task = taskLists[key];
                        let taskId = task.id;
                        let taskListId = task.taskListId;
                        let current = task.current;
                        let target = task.target;
                        needUpdate = TaskDataMgr.getInstance().updateTask(
                                        taskListId, taskId, current, target, checklist)
                                        ||needUpdate;
                    });
                }
            });
            needUpdate = TaskDataMgr.getInstance().setUnUpdatedTaskCompleted(checklist) || needUpdate;
            if(needUpdate) {
                EventMgr.getInstance().postEvent("UPDATE_TASKS");
            }

            EventMgr.getInstance().postEvent("REDPOINT_REFRESH", ["task"]);
        }

        static hasCompletedTask() {
            return TaskDataMgr.getInstance().hasCompletedTask();
        }

        static hasCompletedDailyTask() {
            return TaskDataMgr.getInstance().hasCompletedDailyTask();
        }

        static hasCompletedTrophyTask() {
            return TaskDataMgr.getInstance().hasCompletedTrophyTask();
        }

        static getCurrentTask(taskListId) {
            return TaskDataMgr.getInstance().getCurrentTask(taskListId);
        }

        static getAllTasks(handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_ALLTASKS", [handler]);
        }

        static getDailyTaskReward(taskId, handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_DAILY_TASK_REWARD", [taskId, handler]);
        }

        static getTrophyTaskReward(taskId, handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_TROPHY_TASK_REWARD", [taskId, handler]);
        }

    }

    class RedPointMgr {

        constructor() {
            this.redPointMap = new Map();
        }

        static getInstance() {
            return RedPointMgr.instance?RedPointMgr.instance:RedPointMgr.instance = new RedPointMgr();
        }

        registerObject(redPointType, object) {
            let map = this.redPointMap.get(redPointType);
            if(map==null){
                map = new Map();
                this.redPointMap.set(redPointType, map);
            }
            map.set(object, true);
        }

        unregisterObject(redPointType, object) {
            let map = this.redPointMap.get(redPointType);
            if(map!=null){
                map.delete(object);
            }
        }

        refreshRedPoint(redPointType, data) {
            let map = this.redPointMap.get(redPointType);
            console.debug("refresh red point map", map);
            if(map!=null){
                map.forEach((v, object)=>{
                    // console.debug("map object", v, object);
                    object.refreshRedPoint(data);
                });
            }
        }

        clear() {
            this.redPointMap.clear();
        }

    }

    class RedPointSystem {
        static init() {
            EventMgr.getInstance().registEvent("REDPOINT_REFRESH", null, RedPointSystem.refreshRedPoint);
        }

        static registerObject(redPointType, object) {
            // console.debug("registerObject", redPointType, object);
            RedPointMgr.getInstance().registerObject(redPointType, object);
        }

        static unregisterObject(redPointType, object) {
            // console.debug("unregisterObject", redPointType, object);
            RedPointMgr.getInstance().unregisterObject(redPointType, object);
        }

        static refreshRedPoint(redPointType, data) {
            // console.debug("refreshRedPoint", redPointType);
            RedPointMgr.getInstance().refreshRedPoint(redPointType, data);
        }

    }

    let DefaultFrameInterval = 50;  // milliseconds
    class SceneDirector {
        start() {
            this._frameCounter = 0;
            this._actime = 0;
            this._frameInterval = DefaultFrameInterval;
            this._paused = false;
            this._interpreter.start();
            this._simulator.start();
        }

        pause() {
            this._paused = true;
        }

        update(dt) {
            let frameInterval = this._frameInterval;
            let actime = this._actime + dt;
            let simulator = this._simulator;
            let interpreter = this._interpreter;
            this._actime = actime;
            while(actime>=frameInterval) {
                actime = actime - frameInterval;
                this._actime = actime;
                if(this._paused) {
                    return "paused";
                }
                this._frameCounter ++;
                if(simulator) {
                    simulator.tick(frameInterval, this._frameCounter);
                }
                if(interpreter) {
                    interpreter.update(this._frameCounter);
                }
            }
        }

        flush() {
            this._interpreter.flush();
        }

        setSimulator(simulator) {
            this._simulator = simulator;
        }

        //解释器 调用后端接口与 改变表现
        setInterpreter(interpreter) {
            this._interpreter = interpreter;
        }

        //1 正常 2快进
        setInterpreterMode(mode) {
            this._interpreter.setMode(mode);
        }
    }

    class Context {

        setRecorder(recorder) {
            this._recorder = recorder;
        }

        getRecorder() {
            return this._recorder;
        }

        setRandomizer(randomizer) {
            this._randomizer = randomizer;
        }

        getRandomizer() {
            return this._randomizer;
        }

        random() {

        }

        randomExt(num) {

        }

        newTimeline(objId, typeName) {
            this._recorder.newTimeline(objId, typeName);
        }

        recordEvent(objId, evt, data) {
            this._recorder.recordEvent(objId, evt, data);
        }

        recordMetaEvent(objId, evt, data, typeName) {
            this._recorder.recordMetaEvent(objId, evt, data, typeName);
        }

        removeTimeline(objId) {
            this._recorder.setTimelineRemovable(objId);
        }

        newMainLine() {
            if(!this._mainlineCreated){
                this._recorder.newTimeline("Main", "MainLine");
                this._mainlineCreated = true;
            }
        }

        recordMainEvent(evt, data) {
            this.newMainLine();
            this._recorder.recordEvent("Main", evt, data);
        }

    }

    class SceneSimulator {

        constructor() {
        }

        start() {
            this._context = new Context();
            this._context.setRecorder(this._recorder);
            this._recorder.start();
            this._logic.start(this._context);
        }

        setLogic(logic) {
            this._logic = logic;
        }

        setRecorder(recorder) {
            this._recorder = recorder;
        }

        setController(controller) {
            this._controller = controller;
        }

        tick(frameInterval, frameCounter) {
            this._recorder.gotoFrame(frameCounter);

            this._processInputs(this._controller, this._logic);

            this._controller.cleanUp();

            this._logic.step(frameInterval);

        }

        _processInputs(controller, logic) {
            if(!logic.isReadyForInput()) {
                return
            }

            while(true) {
                let input = controller.nextInput();
                if(input==null) {
                    return;
                }
                logic.handlerInput(input);
            }
        }
    }

    class Controller {
        constructor() {
            // this._inputHistory = new Array();
            this._inputs = new Array();
            this._processingIndex = 0;
        }

        sendOpCommand(op, args, handler) {
            if(this._inputs==null) {
                return null;
            }
            let input = {
                "frame"  : this._currentFrame,
                "op"     : op,
                "args"   : args,
                "handler": handler
            };

            this._inputs.push(input);
            return true
        }

        nextInput() {
            return this._inputs[this._processingIndex++];
        }

        cleanUp() {
            this._inputs.length = 0;
            this._processingIndex = 0;
        }

    }

    class Recorder {
        //recorder
        start() {
            this._timelineDict = new Map();
            this._timelineArray = new Array();
            this._eventsOnFrames = new Map();
            this._currentFrame = 0;
        }

        gotoFrame(frame) {
            this._currentFrame = frame;
        }

        getCurrentFrame() {
            return this._currentFrame;
        }

        newTimeline(objId, typeName) {
            return this.newTimelineAtFrame(objId, this._currentFrame, typeName);
        }

        recordEvent(objId, evt, data) {
            this.recordEventAtFrame(objId, this._currentFrame, evt, data);
        }

        recordMetaEvent(objId, evt, data, typeName) {
            this.newTimeline(objId, typeName);
            this.recordEvent(objId, evt, data);
        }

        newTimelineAtFrame(objId, frame, typeName) {
            if(this._timelineDict.get(objId)){
                console.debug("ERROR!!!!!!objId not unique", objId);
                return;
            }
            let timeline = {"id":objId, "type":typeName, "start":frame, "end":frame};
            this._timelineDict.set(objId, timeline);
            this._timelineArray.push(timeline);
            return timeline;
        }

        recordEventAtFrame(objId, frame, evt, data) {
            let timeline = this._timelineDict.get(objId);
            if(timeline==null){
                console.debug("ERROR!!!!!!objId not exists", objId);
                return;
            }
            if(timeline.ended==null||timeline.ended<frame) {
                timeline.ended = frame;
            }

            let frameEvents = this._eventsOnFrames.get(frame);
            if(frameEvents==null){
                frameEvents = new Array();
                this._eventsOnFrames.set(frame, frameEvents);
            }
            frameEvents.push({"id":objId, "e":evt, "d":data});
        }

        //provider
        allNewTimelinesAtFrame(frame) {
            let newTimelines = null;
            let timelineArray = this._timelineArray;
            for(let i = 0; i < timelineArray.length; ++i) {
                let tl = timelineArray[i];
                if(tl.start==frame){
                    if(newTimelines==null) {
                        newTimelines = new Array();
                    }
                    newTimelines.push([tl.id, tl.type]);
                }
            }
            return newTimelines;
        }

        allRecordsAtFrame(frame) {
            let frameEvents = this._eventsOnFrames.get(frame);
            if(frameEvents==null) {
                return null;
            }

            let records = new Array();
            for(let i = 0; i< frameEvents.length; ++i) {
                let event = frameEvents[i];
                records.push([event.id, event.e, event.d]);
            }
            return records;
        }

        //清理记录

        setTimelineRemovable(objId) {
            let timeline = this._timelineDict.get(objId);
            timeline.removable = true;
        }

        cleanUpBeforeFrame(frame) {
            for(const [f, events] of this._eventsOnFrames) {
                if(f < frame){
                    this._eventsOnFrames.delete(f);
                }
            }
            let timelineArray = this._timelineArray;
            let timelineDict = this._timelineDict;
            for(let i = timelineArray.length-1; i >=0 ; --i) {
                let tl = timelineArray[i];
                if(tl.removable && tl.start<frame){
                    timelineArray.splice(i,1);
                    timelineDict.delete(tl.id);
                }
            }
        }

    }

    class TLInterpreter {

        setId(id) {
            this._id = id;
        }

        getId() {
            return this._id;
        }

        setInterpreter(interpreter) {
            this._interpreter = interpreter;
        }

        getInterpreter() {
            return this._interpreter;
        }

        getTLInterpreterById(id) {
            if(this._interpreter==null){
                return null;
            }
            return this._interpreter.findTLInterpreter(id);
        }

        _removeSelf() {
            if(this._interpreter==null){
                return null;
            }
            return this._interpreter.removeTLInterpreter(this._id);
        }

        doAction(action, args, mode) {
            let func = this[action];
            if(func==null){
                console.debug("warning", "'"+this._id+"' skipped action '"+ action + "'");
                return;
            }
            return func.bind(this)(action, args, mode)
        }

    }

    class MainTLInterpreter extends TLInterpreter {
        DropFish(action, args, mode) {
            let buildingId = args.buildingId;
            let reward     = args.reward;
            let sceneId    = args.sceneId;
            EventMgr.getInstance().postEvent("UPDATE_DROPFISH", [buildingId, sceneId]);
        }

        DropStar(action, args, mode) {
            let buildingId = args.buildingId;
            let reward     = args.reward;
            let sceneId    = args.sceneId;
            // EventMgr.getInstance().postEvent("UPDATE_DROPFISH", [buildingId, sceneId]);
        }

        flush(){

        }

    }

    class CatFactory {

        constructor() {
        }

        static getInstance() {
            return CatFactory.instance?CatFactory.instance:CatFactory.instance = new CatFactory();
        }

        createCoffeeCat(catData, parent, initX, initY, completeHandler) {
            let cat = new Cat(catData);
            cat.pos(initX, initY);
            cat.addLoadedHandler(function() {
                parent.addChild(cat);
                cat.playAnim("lick1", true);
                Utils.fadein(cat, 500, Laya.Handler.create(this, function() {
                    if(completeHandler != null) {
                        completeHandler();
                    }
                }));
            });
            cat.loadAnim(catData.getSource()+".sk", catData.getSkin(), 0);
            return cat;
        }

        createBeachCat(catData, buildingId, spaceId, completeHandler) {
            let cat = new Cat(catData);
            cat.buildingId = buildingId;
            cat.spaceId = spaceId;
            cat.addLoadedHandler(function() {
                if(completeHandler != null) {
                    completeHandler.runWith(cat);
                }
            });
            cat.loadAnim(catData.getSource()+".sk", catData.getSkin(), 0);
            return cat;
        }
    }

    class ShowCatMenuTip {

        constructor(cat, foodId, buildingExtInfo, time, handler) {
            this.cat = cat;
            this.foodId = foodId;
            Laya.loader.create("prefab/component/cat_menu_tip.prefab", Laya.Handler.create(this, function(prefabDef) {
                if(this._destroyed){
                    return;
                }
                this.menuTipPrefab = prefabDef.create();
                this.buildingExtInfo = buildingExtInfo;
                this.time = time;
                this.handler = handler;
                this.initCatMenuTip();
            }));
        }

        destroy() {
            if(this.menuTipPrefab){
                this.menuTipPrefab.destroy();
            }
            if(this.panel) {
                this.panel.destroy();
            }
            this._destroyed = true;
        }

        initCatMenuTip() {
            let handler = this.handler;
            let cat = this.cat;
            let catData = this.cat.getData();
            let menuTipPrefab = this.menuTipPrefab;

            this.cat.addChild(this.menuTipPrefab);
            let food = FoodSystem.getFood(this.foodId);
            let catTipImage = this.menuTipPrefab.getChildByName("meals_img");
            catTipImage.loadImage(food.Source, Laya.Handler.create(this, function() {
                catTipImage.x -= catTipImage.width/2.0*catTipImage.scaleX;
                catTipImage.y -= catTipImage.height/2.0*catTipImage.scaleY;
            }));
            this.menuTipPrefab.y = -388.5;
            this.menuTipPrefab.x = -78;

            if(cat.scaleX<0) {
                this.menuTipPrefab.scaleX = -1;
                this.menuTipPrefab.x = 78;
            }

            let panel =  new Laya.Panel();
            // panel.bgColor = "#c3504e";
            panel.width = 200;
            panel.height = 200;
            panel.centerX = 0.5;
            panel.y = -panel.height;
            this.cat.addChild(panel);
            this.panel = panel;

            panel.on(Laya.Event.CLICK, this, function() {
                if(this.menuTipPrefab.isClicked == true) {
                    return;
                }
                // Laya.timer.clear(this.buildingExtInfo, this.buildingExtInfo.onTimeOutRemoveCatFunc)
                EventMgr.getInstance().postEvent("SIMULATOR_SEND_CMD", [Constants.CoffeeSceneId, "CAT_EAT", catData.getCatId()]);
                // Laya.timer.once(this.time, this.buildingExtInfo, this.buildingExtInfo.onCatEatRemoveFunc, new Array({cat, handler, catData}));
            });
            //超时
            // Laya.timer.once(10000, this.buildingExtInfo, this.buildingExtInfo.onTimeOutRemoveCatFunc, new Array({anim, cat, handler, catData, menuTipPrefab}));
        }

    }

    let CatFace = {
        Left: 1,
        Right: -1,
    };
    class CoffeeCatTLInterpreter extends TLInterpreter{

        AddCat(action, args, mode) {
            if(mode==1) {
                let owner = null;
                let catId = args;
                let catData = CatSystem.getCatData(catId);
                let initX = catData.getX();
                let initY = catData.getY();
                let scene = SceneMgr.getInstance().getScene(Constants.CoffeeSceneId);
                let cat = CatFactory.getInstance().createCoffeeCat(
                    catData,
                    scene.root, initX, initY, null);
                // owner.playAnim("stand", true);

                this._cat = cat;
            }

            CoffeeCatMgr.getInstance().addCat(this._cat);

        }

        RemoveCat(action, args, mode) {
            if(mode==1){
                let owner = this._cat;
                if(owner != null) {
                    CoffeeCatMgr.getInstance().removeCat(this._cat.getId());
                    owner.destroy();
                }
                this._removeSelf();
            }
        }

        MoveTo(action, args, mode) {
            let toX = args.x;
            let toY = args.y;
            let time = args.time;
            let zOrder = args.zOrder;
            let owner = this._cat;
            if(mode==1){

                let targetPoint = Utils.randomRangePoint({x: toX, y: toY}, 20);

                let act = Laya.Tween.to(owner, { x: targetPoint.x, y: targetPoint.y }, time,
                    null,
                    Laya.Handler.create(this, function() {
                        if(zOrder){
                            owner.zOrder = zOrder;
                            owner.updateZOrder();
                        }
                    }), 0);
                var curAnim = owner.getCurAnim();
                if (targetPoint.y - owner.y > 0) {
                    if (curAnim != "move1") {
                        owner.playAnim("move1", true);
                    }
                } else if (targetPoint.y - owner.y < 0) {
                    if (curAnim != "move2") {
                        owner.playAnim("move2", true);
                    }
                }
                let face = CatFace.Left;
                if (targetPoint.x - owner.x > 0) {
                    face = CatFace.Right;
                }
                owner.scaleX = Math.abs(owner.scaleX) * face;
                return act;
            }

        }

        RandomStand(action, args, mode) {
            if(mode==1){
                let owner = this._cat;
                let animArray = new Array("lick1", "rest1", "rest2");
                let i = Utils.randomExt(animArray.length);
                let anim = animArray[i];
                if(owner != null) {
                    // owner.playAnim(anim, true);
                    if(owner.getCurAnim() != anim) {
                        owner.playAnim(anim, true);
                    }
                }
            }
        }

        Wait(action, args, mode) {
            if(mode==1){
                let owner = this._cat;
                if(owner != null) {
                    if(owner.getCurAnim() != "lick1") {
                        owner.playAnim("lick1", true);
                    }
                }
            }
        }

        IntoBuilding(action, args, mode) {
            if(mode==1){
                let owner = this._cat;
                let type = args.type;
                let buildingId = args.buildingId;
                let spaceId = args.spaceId;
                let foodId = args.food;
                let scene = SceneMgr.getInstance().getScene(Constants.CoffeeSceneId);
                let buildingExtInfo = scene.getSpaceInfo(buildingId, spaceId);
                let time = args.time;

                owner.playAnim("lick1");
                owner.showMaskAnim("tanhao", 400, Laya.Handler.create(this, function() {
                    Utils.fadeout(owner, 500, Laya.Handler.create(this, function() {
                        if(buildingExtInfo != null) {
                            owner.removeSelf();
                            let cat = owner;
                            buildingExtInfo.addToBuildingRoot(cat);
                            cat.alpha = 1;
                            cat.playAnim(buildingExtInfo.randomCatMove());
                            cat.x = buildingExtInfo.getBuildingRootHalfWidth();
                            cat.y = buildingExtInfo.getBuildingRootHalfHeight();
                            cat.scaleX = buildingExtInfo.getIsFlip()*Math.abs(cat.scaleX);
                            if(type == 1) {
                                if(owner.catMenuTips){
                                    owner.catMenuTips.destroy();
                                    owner.catMenuTips = null;
                                }
                                owner.showMaskAnim("chifan1");
                                owner.catMenuTips = new ShowCatMenuTip(cat, foodId, buildingExtInfo, time, null);
                            }
                            return cat;
                        }
                    }));
                }));
            }
        }

        OutBuilding(action, args, mode) {
            if(mode==1){
                let owner = this._cat;
                if(owner.catMenuTips){
                    owner.catMenuTips.destroy();
                    owner.catMenuTips = null;
                }
                owner.hideMaskAnim();
                owner.stopAnim();
                owner.removeSelf();
                owner.playAnim("lick1");
                let scene = SceneMgr.getInstance().getScene(Constants.CoffeeSceneId);
                scene.root.addChild(owner);
                let pos = args.pos;
                owner.pos(pos.x, pos.y);
                let zOrder = pos.zOrder;
                if(zOrder) {
                    owner.zOrder = zOrder;
                    owner.updateZOrder();
                }
                Utils.fadein(owner, 500);
            }
        }

        CatEat(action, args, mode) {
            let owner = this._cat;
            owner.playAnim("lick1");
            if(owner.catMenuTips){
                owner.catMenuTips.menuTipPrefab.isClicked = true;
                owner.catMenuTips.menuTipPrefab.visible = false;
                owner.showMaskAnim("chifan2");
            }
        }

        WaitEatTimeOut(action, args, mode) {
            let owner = this._cat;
            if(owner.catMenuTips){
                owner.catMenuTips.menuTipPrefab.isClicked = true;
                owner.catMenuTips.menuTipPrefab.visible = false;
                owner.showMaskAnim("shengqi");
            }
        }

        RemoveFade(action, args, mode) {
            if(mode==1){
                let owner = this._cat;
                CoffeeCatMgr.getInstance().removeCat(owner.getId());
                if(owner.parent!=null){
                    Utils.fadeout(owner, 500, Laya.Handler.create(this, function() {
                        owner.destroy();
                    }));
                }else{
                    owner.destroy();
                }
            }
        }

        flush() {

        }

    }

    let CatFace$1 = {
        Left: 1,
        Right: -1,
    };
    class BeachCatTLInterpreter extends TLInterpreter{

        AddCat(action, args, mode) {
            this._catId = args.catId;
            this._buildingId = args.buildingId;
            this._spaceId = args.spaceId;

            if(mode==1){
                this._createCat();
            }
        }

        _createCat() {
            if(this._catId) {
                let catData = CatSystem.getCatData(this._catId);
                let cat = CatFactory.getInstance().createBeachCat(
                    catData, this._buildingId, this._spaceId, Laya.Handler.create(this, this._addCatToBuildingExt));
                this._cat = cat;
                BeachCatMgr.getInstance().addCat(this._cat);
            }
        }

        _addCatToBuildingExt(cat){
            let scene = SceneMgr.getInstance().getScene(Constants.BeachSceneId);

            if(scene && cat && cat.parent==null) {
                // console.debug("_addCatToBuildingExt", 1);
                scene.addCatToBuilding(cat, cat.buildingId, cat.spaceId);
            }
        }

        RemoveCat(action, args, mode) {
            if(mode==1 && this._cat) {
                let owner = this._cat;
                if(owner != null) {
                    BeachCatMgr.getInstance().removeCat(owner.getId());
                    owner.destroy();
                }
            }
            this._cat = null;
            this._catId = null;
            this._removeSelf();
        }

        RemoveFade(action, args, mode) {
            if(mode==1 && this._cat) {
                let owner = this._cat;
                BeachCatMgr.getInstance().removeCat(owner.getId());
                if(mode==1 && owner.parent!=null){
                    Utils.fadeout(owner, 500, Laya.Handler.create(this, function() {
                        owner.destroy();
                    }));
                }else{
                    owner.destroy();
                }
            }
            this._cat = null;
            this._catId = null;
            this._removeSelf();
        }

        flush() {
            this._createCat();
        }

    }

    class TLInterpreterFactory {

        static createTLInterpreter(typeName) {
            let interpreter = null;
            switch(typeName) {
                case "MainLine":
                    interpreter = new MainTLInterpreter();
                    break;
                case "CoffeeCatLine":
                    interpreter = new CoffeeCatTLInterpreter();
                    break;
                case "BeachCatLine":
                    interpreter = new BeachCatTLInterpreter();
                    break;
            }
            return interpreter;
        }

    }

    class Interpreter {
        constructor(){
            this._mode = 1; //1 Normal 2 Fastforward
        }

        setMode(mode) {
            this._mode = mode;
        }

        setRecordsProvider(provider) {
            this._recordsProvider = provider;
        }

        getRecordsProvider() {
            return this._recordsProvider;
        }

        addTLInterpreter(id, tlTypeName) {
            let tlInterpreter = TLInterpreterFactory.createTLInterpreter(tlTypeName);

            if(tlInterpreter==null){
                return null;
            }

            tlInterpreter.setId(id);
            tlInterpreter.setInterpreter(this);
            this._timelineInterpreters.set(id, tlInterpreter);
            return tlInterpreter;
        }

        removeTLInterpreter(id) {
            this._timelineInterpreters.delete(id);
        }

        findTLInterpreter(id) {
            if(this._timelineInterpreters) {
                return this._timelineInterpreters.get(id);
            }
        }

        start() {
            this._timelineInterpreters = new Map();
            this._lastIndex = -1;
        }

        update(frame) {
            let lastIndex  = this._lastIndex?this._lastIndex:0;
            if(frame<=lastIndex){
                return;
            }
            for(let i = lastIndex+1; i<=frame; ++i) {
                this._lastIndex = i;
                this._processOneFrame(i);
            }

            //清理记录
            this._recordsProvider.cleanUpBeforeFrame(frame);
        }

        _processOneFrame(frame) {
            let recordsProvider = this._recordsProvider;
            if(recordsProvider==null){
                return;
            }

            // add new timelines
            let newTimelines = recordsProvider.allNewTimelinesAtFrame(frame);
            if(newTimelines!=null){
                newTimelines.forEach(tlInfo => {
                    this.addTLInterpreter(tlInfo[0], tlInfo[1]);
                });
            }

            // interpret records of this frame
            let timelineInterpreters  = this._timelineInterpreters;
            let frameRecords = recordsProvider.allRecordsAtFrame(frame);
            if(timelineInterpreters!=null && frameRecords!=null){
                frameRecords.forEach(record => {
                    let tlInterpreter = timelineInterpreters.get(record[0]);
                    if(tlInterpreter!=null) {
                        tlInterpreter.doAction(record[1], record[2], this._mode);
                    }
                });
            }
        }

        //将mode2 堆积的结果进行最终体现
        flush() {
            if(this._timelineInterpreters){
                this._timelineInterpreters.forEach(tlInterpreter=> {
                    tlInterpreter.flush();
                });
            }
        }

    }

    class Logic {
        start(context) {
            this._context = context;
        }

        step(dt) {}

        handlerInput(input) {}

        isReadyForInput() {
            return true;
        }

    }

    //管理PetDataMgr
    class PetSystem {
        static init() {
        }

        static clear() {
            PetDataMgr.getInstance().clear();
        }

        static getPetInfo(petId) {
            return PetDataMgr.getInstance().getPet(petId);
        }

        static addIntimacy(petId, intimacy) {
            PetDataMgr.getInstance().addIntimacy(petId, intimacy);
        }

        static addVisitTimes(petId, visitTimes) {
            PetDataMgr.getInstance().addVisitTimes(petId, visitTimes);
        }

        static doAdoptPet(petId){
            PetDataMgr.getInstance().adoptPet(petId);
        }

        static dumpAndStashPetRewards() {
            return PetDataMgr.getInstance().dumpAndStashPetRewards();
        }

        static clearPetRewards() {
            PetDataMgr.getInstance().clearPetRewards();
        }

        // 下面是与System交互

        static updatePets(pets) {
            Object.getOwnPropertyNames(pets).forEach(key=>{

                let pet = pets[key];
                let petId = pet.id;
                let intimacy = pet.intimacy;
                let visitTimes = pet.visitTimes;
                let adopted = pet.adopted;
                let newCome = pet.newCome;
                PetDataMgr.getInstance().updatePet(petId, intimacy, visitTimes, adopted, newCome);
            });
        }

        static adoptPet(petId, handler) {
            EventMgr.getInstance().postEvent("SERVICE_ADOPT_PET", [petId, handler]);
        }

        static getPetsInfo(handler) {
            EventMgr.getInstance().postEvent("SERVICE_GET_PETSINFO", [handler]);
        }

    }

    var CatFace$2 = {
        Left: 1,
        Right: -1,
    };

    class CatLogicHelper {
            //获得奖励
        static getFishReward(eventData, valueBase) {
            let completeReward = eventData.CompleteReward;

            let weightArr = new Array();
            let totalWeight = 0;
            for(const key in completeReward) {
                let element = completeReward[key];
                if( element != null && element != "") {
                    let arr =  element.split(":");
                    let weight = Number(arr[0]);
                    let reward = Number(arr[1]);
                    weightArr.push({"w":weight, "reward":reward});
                    totalWeight +=weight;
                }
            }

            let ret = Utils.calcRandomWeight(weightArr, totalWeight);

            return ret?ret.reward*valueBase:null;
        }

        static getStarReward(eventData, valueBase) {
            let ret = null;
            let completeReward = JSON.parse(eventData.SCompleteReward);
            let probability = Math.random();

            if(probability<Number(completeReward.rate)) {
                ret = Number(completeReward.times)*valueBase;
            }
            return ret;
        }

        //随机下一个事件
        static randomNextEvent(sceneId, eventData) {
            let n = eventData.NextEvent.length;
            if(n == 0) {
                return null;
            }
            let arr = new Array();
            for(let i = 0 ; i < eventData.NextEvent.length ; ++i) {
               let event = eventData.NextEvent[i];
               let b = BuildingSystem.randomVisitBuilding(sceneId, event);
               if(b != null) {
                   arr.push(event);
               }
            }
            if(arr.length == 0) {
                return null;
            }
            let m = Utils.randomExt(arr.length);
            let ret = arr[m];
            return ret;
        }

        static randomNextEventInBuilding(buildingData, eventData) {
            let n = eventData.NextEvent.length;
            if(n == 0) {
                return null;
            }
            let arr = new Array();
            for(let i = 0 ; i < eventData.NextEvent.length ; ++i) {
               let event = eventData.NextEvent[i];
               if(buildingData.isSupportAction(event)) {
                   arr.push(event);
               }
            }
            if(arr.length == 0) {
                return null;
            }
            let m = Utils.randomExt(arr.length);
            let ret = arr[m];
            return ret;
        }


        //寻找可以执行动作的空位
        //1 有空位 2 没有空位 3 building消失了或者无载猫功能
        static findCatMoveBlock(buildingId, sceneId) {
            let buildingData = BuildingSystem.getBuildingDataByBid(buildingId);
            if(buildingData == null || buildingData.getCapacity()<=0) {
                return {"t": 3, "s": null};
            }
            let spaces = buildingData.getSpaces();
            if(spaces==null || spaces.length == 0) {
                return {"t": 2, "s": null};
            }
            let space = spaces[Utils.randomExt(spaces.length)];
            if (space != null) {
                return {"t": 1, "s": space};
            }
            return {"t": 2, "s": null};
        }

    }

    //后续改成状态机
    class CoffeeCatRole {
        constructor(data) {
            this.catData = data;
            this.activeAI = false;

            this.eventActionConfig = ConfigMgr.getInstance().getConfig("ActionEvent");
            this.targetBuildingData = null;
            this.speed = 180;
            this.path = ScenePathMgr.getInstance().randomPath(Constants.CoffeeSceneId);
            this.pathIndex = -1;
            this.upOrder = 999999;
            this.downOrder = 50;

            this._eventStack = new Array();

        }

        getId() {
            return this.catData.getCatId();
        }

        getConfigId() {
            return this.catData.getConfigId();
        }

        restore(restoreData) {

        }

        getIsActive() {
            return this.activeAI;
        }

        setIsActive(active) {
            this.activeAI = active;
        }

        //获得信息
        getData() {
            return this.catData;
        }

        _popEvent() {
            let info = this._eventStack.pop();
            if(info) {
                this._setNextStep(info.event, info.delay, info.args);
                this.update(0);
            }
        }

        _stackEvent(event, delay, args) {
            this._eventStack.push({"event":event, "delay":delay, "args":args});
        }

        _setNextStep(event, delay, args) {
            this._scheduleTime = delay;
            this._nextEvent = event;
            this._nextEventArgs = args;
        }


        start(context) {
            let p = ScenePathMgr.getInstance().getStartPathPoint();
            this.catData.setPos(Utils.randomRangePoint(new Laya.Point(p.x, p.y), 100));
            this._context = context;
            this._state = "start";
            this._setNextStep("onActive", 2000);

            this._context.recordMetaEvent(this.getId(), "AddCat", this.getId(), "CoffeeCatLine");
        }

        update(dt) {
            if(this._scheduleTime && this._scheduleTime>0) {
                this._scheduleTime -= dt;
                return;
            }
            if(this._nextEvent){
                let event = this._nextEvent;
                this._nextEvent = null;
                switch(event) {
                    case "onActive":
                        this._onActive(this._nextEventArgs);
                        break;
                    case "gotoTargetIndex":
                        this._gotoTargetIndex(this._nextEventArgs);
                        break;
                    case "gotoTargetIndexAndStand":
                        this._gotoTargetIndexAndStand(this._nextEventArgs);
                        break;
                    // case "gotoBuilding":
                    //     this._gotoBuilding(this._nextEventArgs);
                    //     break;
                    case "waitEmpty":
                        this._waitEmpty(this._nextEventArgs);
                        break;
                    case "intoBuilding":
                        this._intoBuilding(this._nextEventArgs);
                        break;
                    case "outBuilding":
                        this._outBuilding(this._nextEventArgs);
                        break;
                    case "newDecision":
                        this._newDecision(this._nextEventArgs);
                        break;
                    case "remove":
                        this._remove(this._nextEventArgs);
                        break;
                    case "waitEatTimeOut":
                        this._waitEatTimeOut(this._nextEventArgs);
                        break;
                }
            }
        }

        eat() {
            if(this._state=="waitEat") {
                let foodId = this._eatInfo[3];
                let food = FoodSystem.getFood(foodId);
                if(food.isLocked()) {
                    this._waitEatTimeOut(this._eatInfo);
                    return;
                }
                let income = food.getIncome();
                this._eatInfo[4] = income;
                this._state="eating";
                this._setNextStep("outBuilding", food.getCookingTime()*1000, this._eatInfo);
                this._context.recordEvent(this.getId(), "CatEat", null);
            }
        }

        remove() {
            if(!this._context) {
                return true;
            }
            if(this._state!="leaving"){
                this._context.recordEvent(this.getId(), "RemoveCat", null);
                return true;
            }
            return false;
        }

        _onActive() {
            let spaceCount = BuildingSystem.getTotalSpaceCountInScene(Constants.CoffeeSceneId);
            let activeCatCount = this._context._roleMgr.getActiveRoleCount();
            if(activeCatCount <= spaceCount + 2) {
                this._resetToVisitEvent();
                this.setIsActive(true);
            }else{
                this._setNextStep("onActive", 2000);
            }
        }

        _resetToVisitEvent() {
            let eventVisit = this.catData.getEventVisit();
            this._doActionEvent(eventVisit);
        }

        _doActionEvent(eventString) {
            this._genTarget(eventString);
            let eventData = this.eventActionConfig.get(eventString);
            if(eventData != null) {
                this._doWork(eventData);
                return;
            }
            if(this.targetBuildingData == null) {
                this._doLeave();
                return;
            }
        }

        _doLeave() {
            this.setIsActive(false);
            this._stackEvent("remove");
            this._gotoTargetIndex(0);
            this._state = "leaving";
        }

        _remove() {
            CatSystem.removeCatData(this.getId(), Constants.CoffeeSceneId);
            this._context.recordEvent(this.getId(), "RemoveFade", null);
            this._context._roleMgr.removeRole(this.getId());
        }

        _genTarget(eventString) {
            this.targetBuildingData = null;
            let b = BuildingSystem.randomVisitBuilding(Constants.CoffeeSceneId, eventString);
            if(b != null) {
                this.targetBuildingData = b;
            }
        }

        _gotoBuilding(targetBuildingData) {
            let targetIndex = targetBuildingData.getLocationData().getPathPointIndex();
            for(let i = 0 ; i < this.path.length; ++i) {
               let p = this.path[i];
               if(p.i == targetIndex) {
                    targetIndex = i;
                    break;
                }
            }
            this._gotoTargetIndexAndStand(targetIndex);
        }

        _gotoTargetIndexAndStand(targetPathIndex) {
            let g = Utils.randomExt(100);
            if(g > 97) {
                let time = 3000 + Utils.randomExt(6000);
                this._state = "randomStand";
                this._context.recordEvent(this.getId(), "RandomStand", null);
                this._setNextStep("gotoTargetIndex", time, targetPathIndex);
            } else {
                this._gotoTargetIndex(targetPathIndex);
            }
        }

        _gotoTargetIndex(targetPathIndex) {
            if(this.pathIndex != targetPathIndex) {
                if(this.pathIndex == -1) {
                    this.pathIndex = 0;
                }
                let d = targetPathIndex - this.pathIndex;
                if(d > 0) {
                    this.pathIndex++;
                } else if(d < 0) {
                    this.pathIndex--;
                }
                let p = this.path[this.pathIndex];

                let dx = this.catData.getX() - p.x;
                let dy = this.catData.getY() - p.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let time = distance / this.speed * 1000;
                let zOrder = null;
                if (p.i == ScenePathMgr.getInstance().getZOrderPathPoint()) {
                    if(targetPathIndex > this.pathIndex) {
                        zOrder = this.upOrder;
                    } else if (targetPathIndex < this.pathIndex) {
                        zOrder = this.downOrder;
                    }
                }
                this.zOrder = zOrder;
                this.catData.setPos(p);
                this._state = "moving";
                this._context.recordEvent(this.getId(), "MoveTo", {"x":p.x, "y":p.y, "time":time, "zOrder":zOrder});
                this._setNextStep("gotoTargetIndexAndStand", time, targetPathIndex);
            } else {
                this._popEvent();
            }
        }

        _getCurrentPos() {
            let p = this.path[this.pathIndex];
            return {"x":p.x, "y":p.y, "zOrder":this.zOrder};
        }

        //执行动作
        _doWork(eventData) {
            if(eventData.Type == "VISIT") {
                this._doActionEvent(CatLogicHelper.randomNextEvent(Constants.CoffeeSceneId, eventData));
            } else {
                this._stackEvent("waitEmpty",0, eventData);
                this._gotoBuilding(this.targetBuildingData);
            }
        }

        _waitEmpty(eventData) {
            this._state = "waitEmpty";
            this._context.recordEvent(this.getId(), "Wait", {"anim":"lick1"});
            let buildingId = this.targetBuildingData.getId();
            let info = CatLogicHelper.findCatMoveBlock(buildingId, Constants.CoffeeSceneId);
            if(info.t == 1) {
                if(info.s != null) {
                    this._setNextStep("intoBuilding", 0, [eventData, buildingId, info.s]);
                }
            } else if (info.t == 2) {
                this._setNextStep("waitEmpty", 1000);
            } else {
                this._setNextStep("intoBuilding", 0);
            }
        }

        _intoBuilding(info) {
            if(info && info[0] && info[1]) {
                let eventData = info[0];
                let buildingId = info[1];
                let spaceId = info[2];
                let buildingData = BuildingSystem.getBuildingDataByBid(buildingId);
                buildingData.occupy(spaceId, this.getId());
                let type = 1;
                if(eventData.Type == "REST") {
                    type = 2;
                }
                if(type==1){
                    //吃饭
                    this._state = "waitEat";
                    let foodType = this.catData.randomFood();
                    let food = FoodSystem.getCurFoodInList(foodType);
                    console.debug('randomfood', foodType, food);
                    info[3] = food.getId();
                    this._eatInfo = info;
                    let time = Number(Const.get("CookingOvertime"))*1000;
                    this._setNextStep("waitEatTimeOut", time+ 900, info);
                    this._context.recordEvent(this.getId(), "IntoBuilding", {"type":type, "time": 10900, "buildingId":buildingId, "spaceId":spaceId, "food": food.getId()});
                }else if(type==2){
                    //休息
                    this._state = "rest";
                    this._setNextStep("outBuilding", 6900, info);
                    this._context.recordEvent(this.getId(), "IntoBuilding", {"type":type, "time": 6900, "buildingId":buildingId, "spaceId":spaceId});
                }

            } else {
                // TODO 没building怎么处理 因为换场景肯定容易出现 by sunwen
                this._resetToVisitEvent();
            }
        }

        _waitEatTimeOut(info) {
            this._state = "waitEatTimeOut";
            this._setNextStep("outBuilding", 1000, info);
            this._context.recordEvent(this.getId(), "WaitEatTimeOut", null);
        }

        _outBuilding(info) {//假如猫没了？
            let eventData = info[0];
            let buildingId = info[1];
            let spaceId = info[2];
            let income = info[4];
            let buildingData = BuildingSystem.getBuildingDataByBid(buildingId);
            buildingData.leave(spaceId, this.getId());

            if(this._state!="waitEatTimeOut") {
                //增加亲密度
                if(this.catData.eventCount==0) {
                    PetSystem.addVisitTimes(this.getConfigId(), 1);
                }
                PetSystem.addIntimacy(this.getConfigId(), eventData.IntimacyUp);

                let reward = CatLogicHelper.getStarReward(eventData, this.catData.getStarBase());
                if(reward && reward>0){
                    SyncSystem.addCachedStar(buildingId, reward);
                    this._context.recordMainEvent("DropStar", {"buildingId":buildingId, "reward":reward, "sceneId":Constants.CoffeeSceneId});
                }else {
                    reward = CatLogicHelper.getFishReward(eventData, this.catData.getValueBase());
                    if(reward && reward>0){
                        SyncSystem.addCachedFish(buildingId, reward);
                        this._context.recordMainEvent("DropFish", {"buildingId":buildingId, "reward":reward, "sceneId":Constants.CoffeeSceneId});
                    }
                }

                // console.debug("outBuilding", reward, income, this._state);
                if(this._state=="eating") {
                    if(income) {
                        SyncSystem.addCachedFish(buildingId, income);
                        this._context.recordMainEvent("DropFish", {"buildingId":buildingId, "reward":income, "sceneId":Constants.CoffeeSceneId});
                    }
                }
            }

            this._state = "idle";

            this.catData.eventCount++;

            this._context.recordEvent(this.getId(), "OutBuilding", {"time": 500, "buildingId":buildingId, "spaceId":spaceId, "pos":this._getCurrentPos()});
            this._setNextStep("newDecision", 500, eventData);
        }

        _newDecision(eventData) {
            if(this.catData.eventCount >= 2) {
                this._doLeave();
                return;
            } else {
                this._doActionEvent(CatLogicHelper.randomNextEvent(Constants.CoffeeSceneId, eventData));
            }
        }





        destroy() {
            this._context.removeTimeline(this.getId());
        }

    }

    class CoffeeRoleMgr {

        constructor() {
            this._roleMap = new Map();
            this._roleList = new Array();
            this._roleStack = new Array();
        }

        addCat(catData) {
            let role = new CoffeeCatRole(catData);
            this._roleMap.set(Number(catData.getCatId()), role);
            this._roleStack.push(role);
            return role;
        }

        removeRole(roleId) {
            this._roleMap.delete(Number(roleId));
            for(const key in this._roleList) {
                let role = this._roleList[key];
                if(role.getId() == roleId){
                    role.destroy();
                    this._roleList.splice(key, 1);
                    return role;
                }
            }
            for(const key in this._roleStack) {
                let role = this._roleStack[key];
                if(role.getId() == roleId){
                    role.destroy();
                    this._roleStack.splice(key, 1);
                    return;
                }
            }
        }

        showRole() {
            let role = this._roleStack.shift();
            if(role) {
                this._roleList.push(role);
            }
            return role;
        }

        getRoleById(id) {
            return this._roleMap.get(id);
        }

        getRoles() {
            return this._roleList.slice(0);
        }

        getRoleCount() {
            return this._roleMap.size;
        }

        getRoleListCount() {
            return this._roleList.length;
        }

        getStackRoleCount() {
            return this._roleStack.length;
        }

        getActiveRoleCount() {
            let activeCatCount = 0;
            for (const role of this._roleList) {
                if(role.getIsActive()) {
                    activeCatCount++;
                }
            }
            return activeCatCount;
        }
    }

    let kShowCD = 2000;

    class CoffeeSceneLogic extends Logic {

        constructor() {
            super();
            this._roleMgr = new CoffeeRoleMgr();
        }

        start(context) {
            this._context = context;
            // this._attractCD = 10000;
            this._calcAttractCD();
            this._showCD = kShowCD;
            this._immediateShow = false;
            context._roleMgr = this._roleMgr;
            this._context.newMainLine();
        }

        step(dt) {
            let roles = this._roleMgr.getRoles();
            for(const role of roles) {
                role.update(dt);
            }
            this._attractCD -= dt;
            if(this._attractCD<=0){
                // this._attractCD = 10000+Utils.randomExt(5000);
                this._calcAttractCD();
                this._attractCat();
            }
            this._showCD -= dt;
            if(this._showCD<=0) {
                this._showCD = kShowCD;
                this._showCat();
            }
            if(this._immediateShow) {
                this._immediateShow = false;
                this._showCat();
            }
        }

        _calcAttractCD() {
            let array = Const.getArray("CatVisitGaps");
            this._attractCD = Utils.randomExt2(Number(array[0]), Number(array[1])) * 1000;
        }

        _attractCat() {
            let catVisitWeightedArray = BuildingSystem.getCatWeightedArray(Constants.CoffeeSceneId);
            let catVisitWeightedSum = BuildingSystem.getBuildingDataListInfo(Constants.CoffeeSceneId).weighted;

            let ret = Utils.calcRandomWeight(catVisitWeightedArray, catVisitWeightedSum);

            if(ret != null) {
               let cout =  this._roleMgr.getRoleCount();
               if (cout < 30) {
                    //此处触发刷
                    let p = ScenePathMgr.getInstance().getStartPathPoint();
                    if(p != null) {
                        let configId = ret.n;
                        let catData = CatSystem.addCatData(configId, Constants.CoffeeSceneId,{});
                    }
                }
            }
        }

        _showCat() {
            if (this._roleMgr.getStackRoleCount() > 0) {
                let spaceCount = BuildingSystem.getTotalSpaceCountInScene(Constants.CoffeeSceneId);;
                if(this._roleMgr.getRoleListCount() < spaceCount + 6) {
                    let role = this._roleMgr.showRole();
                    role.start(this._context);
                }
            }
        }

        handlerInput(input) {
            let op = input.op;
            let args = input.args;
            let handler = input.handler;
            switch(op) {
                case "ADD_CAT":
                    this._addCat(args, handler);
                    break;
                case "REMOVE_CAT":
                    this._removeCat(args, handler);
                    break;
                case "FORCE_ATTRACT_CAT":
                    this._forceAttractCat();
                    break;
                case "RESTORE_CAT":
                    this._restoreCat(args, handler);
                    break;
                case "CAT_EAT":
                    this._catEat(args);
                    break;
            }
        }


        _addCat(args, handler) {
            let catId = args;
            let catData = CatSystem.getCatData(catId);
            let role = this._roleMgr.addCat(catData);
        }

        _restoreCat(args, handler) {

        }

        _removeCat(args, handler) {
            let catId = args;
            let role = this._roleMgr.getRoleById(catId);
            if(role) {
                if(role.remove()) {
                    this._roleMgr.removeRole(catId);
                }
            }
        }

        _forceAttractCat() {
            this._attractCat();
            this._immediateShow = true;
        }

        _catEat(args) {
            let catId = args;
            let role = this._roleMgr.getRoleById(catId);
            role.eat();
        }

    }

    let kLoopInterval = 50;
    class CoffeeSession {
        static getOrCreateSession() {
            if(GameContext.coffeeSession){
                return GameContext.coffeeSession;
            }
            GameContext.coffeeSession = new CoffeeSession();
            GameContext.coffeeSession.build();
            GameContext.coffeeSession.prepare();
            return GameContext.coffeeSession;
        }

        static runSession() {
            let session = CoffeeSession.getOrCreateSession();
            session.startLoop();
        }

        static sendOpCommand(op, args, handler) {
            let session = CoffeeSession.getOrCreateSession();
            session._sendOpCommand(op, args, handler);
        }

        static simulate(time) {
            let session = CoffeeSession.getOrCreateSession();
            session._simulate(time);
        }

        static clear() {
            if(GameContext.coffeeSession) {
                GameContext.coffeeSession.destroy();
                GameContext.coffeeSession = null;
            }
        }

        constructor() {
            this._director = new SceneDirector();
            this._simulator = new SceneSimulator();
            this._logic = new CoffeeSceneLogic();
            this._controller = new Controller();
            this._recorder = new Recorder();
            this._interpreter = new Interpreter();
        }

        build() {
            this._director.setSimulator(this._simulator);
            this._director.setInterpreter(this._interpreter);
            this._interpreter.setRecordsProvider(this._recorder);
            this._simulator.setRecorder(this._recorder);
            this._simulator.setLogic(this._logic);
            this._simulator.setController(this._controller);
        }

        prepare() {
            this._director.start();

            EventMgr.getInstance().registEvent("FORCE_ATTRACT_COFFEE_CAT", this, this.onForceAttractCat);
        }

        onForceAttractCat() {
            this._sendOpCommand("FORCE_ATTRACT_CAT");
        }

        startLoop() {
            Laya.timer.loop(kLoopInterval, this, this._update, [], true, true);
        }

        _update() {
            this._director.update(kLoopInterval);
        }

        //模拟多少时间
        _simulate(time) {
            this._director.setInterpreterMode(2);
            this._director.update(time);
            this._director.flush();
            this._director.setInterpreterMode(1);
        }

        _sendOpCommand(op, args, handler) {
            this._controller.sendOpCommand(op, args, handler);
        }


        destroy() {
            Laya.timer.clearAll(this);
            EventMgr.getInstance().removeEvent("FORCE_ATTRACT_COFFEE_CAT", this, this.onForceAttractCat);
        }
    }

    //后续改成状态机
    class BeachCatRole {
        constructor(data) {
            this.catData = data;

            this.eventActionConfig = ConfigMgr.getInstance().getConfig("ActionEvent");
            this.targetEvent = null;


            this._eventStack = new Array();

        }

        getId() {
            return this.catData.getCatId()
        }

        getConfigId() {
            return this.catData.getConfigId();
        }

        //获得信息
        getData() {
            return this.catData;
        }

        _popEvent() {
            let info = this._eventStack.pop();
            if(info) {
                this._setNextStep(info.event, info.delay, info.args);
                this.update(0);
            }
        }

        _stackEvent(event, delay, args) {
            this._eventStack.push({"event":event, "delay":delay, "args":args});
        }

        _setNextStep(event, delay, args) {
            this._scheduleTime = delay;
            this._nextEvent = event;
            this._nextEventArgs = args;
        }


        start(context, currentTime) {
            let params = this.catData.getParams();
            this.buildingId = params.BuildingId;
            this.spaceId = params.SpaceId;
            this.travelTime = params.TravelTime;
            this.startTime = params.StartTime;
            if(this.buildingId==null) {
                CatSystem.removeCatData(this.getId(), Constants.BeachSceneId);
                return;
            }
            let travelTime = this.travelTime;
            if(currentTime && this.startTime) {
                travelTime = this.travelTime - currentTime + this.startTime;
                if(travelTime<0) {
                    travelTime = 0;
                }
            }
            let buildingData = BuildingSystem.getBuildingDataByBid(this.buildingId);
            buildingData.occupy(this.spaceId, this.getId());


            let eventString = params.event;
            if(!eventString) {
                eventString = this.catData.getEventTravel();
            }
            let eventData = this.eventActionConfig.get(eventString);
            if(eventData.Type == "VISIT") {
                eventString = CatLogicHelper.randomNextEventInBuilding(buildingData, eventData);
                if(eventString==null){
                    buildingData.leave(this.spaceId, this.getId());
                    CatSystem.removeCatData(this.getId(), Constants.BeachSceneId);
                    return;
                }
            }

            this._context = context;
            this._state = "inBuilding";

            this._eventString = eventString;

            this.catData.setEvent(eventString);

            this._context.recordMetaEvent(this.getId(), "AddCat", {"catId":this.getId(), "buildingId":this.buildingId, "spaceId":this.spaceId, "event":eventString}, "BeachCatLine");

            this._setNextStep("travelEnd", travelTime);
            this.update(0);
        }

        update(dt) {
            if(this._scheduleTime && this._scheduleTime>0) {
                this._scheduleTime -= dt;
                return;
            }
            if(this._nextEvent){
                let event = this._nextEvent;
                this._nextEvent = null;
                switch(event) {
                    case "travelEnd":
                        this._travelEnd(this._nextEventArgs);
                        break;
                    case "remove":
                        this._remove(this._nextEventArgs);
                        break;
                 }
            }
        }

        remove() {
            if(!this._context) {
                return true;
            }
            if(this._state!="leaving"){
                let buildingData = BuildingSystem.getBuildingDataByBid(this.buildingId);
                buildingData.leave(this.spaceId, this.getId());
                this._context.recordEvent(this.getId(), "RemoveCat", null);
                return true;
            }
            return false;
        }

        _travelEnd() {
            if(this._eventString) {
                let eventData = this.eventActionConfig.get(this._eventString);
                if(this.catData.eventCount==0) {
                    PetSystem.addVisitTimes(this.getConfigId(), 1);
                }
                PetSystem.addIntimacy(this.getConfigId(), eventData.IntimacyUp);
                let reward = CatLogicHelper.getStarReward(eventData, this.catData.getStarBase());
                let rewardType = Constants.RewardType.STAR;
                if(reward && reward>0){
                    SyncSystem.cacheVisitorReward(this.getId(), this.getConfigId(), this.buildingId, reward, rewardType);
                }else {
                    reward = CatLogicHelper.getFishReward(eventData, this.catData.getValueBase());
                    rewardType = Constants.RewardType.FISH;
                    if(reward && reward>0){
                        SyncSystem.cacheVisitorReward(this.getId(), this.getConfigId(), this.buildingId, reward, rewardType);
                    }
                }
            }


            this._state = "leaving";
            this.catData.eventCount++;
            this._context.recordEvent(this.getId(), "RemoveFade", null);
            this._setNextStep("remove", 500);
        }

        _remove() {
            let buildingData = BuildingSystem.getBuildingDataByBid(this.buildingId);
            buildingData.leave(this.spaceId, this.getId());
            CatSystem.removeCatData(this.getId(), Constants.BeachSceneId);
            this._context._roleMgr.removeRole(this.getId());
        }

        destroy() {
            if(this._context) {
                this._context.removeTimeline(this.getId());
            }
        }

    }

    class BeachRoleMgr {

        constructor() {
            this._roleMap = new Map();
            this._roleList = new Array();
        }

        addCat(catData) {
            let role = new BeachCatRole(catData);
            this._roleMap.set(Number(catData.getCatId()), role);
            this._roleList.push(role);
            return role;
        }

        removeRole(roleId) {
            this._roleMap.delete(Number(roleId));
            for(const key in this._roleList) {
                let role = this._roleList[key];
                if(role.getId() == roleId){
                    role.destroy();
                    this._roleList.splice(key, 1);
                    return role;
                }
            }
        }

        getRoleById(id) {
            return this._roleMap.get(id);
        }

        getRoles() {
            return this._roleList.slice(0);
        }

        getRoleCount() {
            return this._roleList.length;
        }

    }

    let kShowCD$1 = 2000;

    class BeachSceneLogic extends Logic {

        constructor() {
            super();
            this._roleMgr = new BeachRoleMgr();
            this._currentTime = 0;
            this._exhaustTime = null;
        }

        start(context) {
            this._context = context;
            this._attractCD = 10000;
            this._showCD = kShowCD$1;
            this._immediateShow = false;
            context._roleMgr = this._roleMgr;
        }

        step(dt) {
            this._currentTime += dt;
            let roles = this._roleMgr.getRoles();
            for(const role of roles) {
                role.update(dt);
            }
            this._attractCat(dt);
        }

        _attractCat(dt) {
            if(this._exhaustTime==null || this._exhaustTime< this._currentTime) {
                // console.debug("wont _attractCat");
                return;
            }
            let arr = BuildingSystem.getAvailableBuilding(Constants.BeachSceneId);
            if(arr) {
                for(const buildingData of arr) {
                    let id = buildingData.getId();
                    if(!buildingData.attractCD) {
                         let array = Const.getArray("TravelTriggerGaps");
                         buildingData.attractCD =  Utils.randomExt2(Number(array[0]), Number(array[1])) * 1000;
                    }
                    buildingData.attractCD -= dt;
                    if(buildingData.attractCD<=0) {

                        let ret = Utils.calcRandomWeight(buildingData.getCatWeightedArray(), buildingData.getCatWeightedSum());

                        if(ret != null) {
                            let configId = ret.n;
                            let spaces = buildingData.getSpaces();
                            let space = spaces[Utils.randomExt(spaces.length)];
                            // console.debug("_attractCat 4", configId, id, space, spaces);
                            if(space!=null) {
                                let array = Const.getArray("TravelKeepTime");
                                let time =  Utils.randomExt2(Number(array[0]), Number(array[1]))*1000;
                                let catData = CatSystem.addCatData(configId, Constants.BeachSceneId,{"BuildingId":id, "SpaceId":space, "TravelTime":time, "StartTime":this._currentTime});
                                buildingData.occupy(space, catData.getCatId());
                            }
                        }
                        buildingData.attractCD = null;
                    }
                }
            }
        }

        handlerInput(input) {
            let op = input.op;
            let args = input.args;
            let handler = input.handler;
            switch(op) {
                case "ADD_CAT":
                    this._addCat(args, handler);
                    break;
                case "REMOVE_CAT":
                    this._removeCat(args, handler);
                    break;
                case "CAT_EAT":
                    this._catEat(args);
                    break;
                case "SET_TIME":
                    this._setTime(args);
                    break;
                case "REFRESH_FOOD":
                    this._refreshFood(args);
                    break;
            }
        }


        _addCat(args, handler) {
            // console.debug("_addCat", args);
            let catId = args;
            let catData = CatSystem.getCatData(catId);
            let role = this._roleMgr.addCat(catData);
            role.start(this._context, this._currentTime);
        }

        _removeCat(args, handler) {
            let catId = args;
            let role = this._roleMgr.getRoleById(catId);
            if(role) {
                if(role.remove()) {
                    this._roleMgr.removeRole(catId);
                }
            }
        }

        _catEat(args) {
            let catId = args;
            let role = this._roleMgr.getRoleById(catId);
            role.eat();
        }

        _setTime(args) {
            this._currentTime = args;
        }

        _refreshFood(args) {
            this._exhaustTime = args;
        }

    }

    let kLoopInterval$1 = 50;
    class BeachSession {
        static getOrCreateSession() {
            if(GameContext.beachSession){
                return GameContext.beachSession;
            }
            GameContext.beachSession = new BeachSession();
            GameContext.beachSession.build();
            GameContext.beachSession.prepare();
            return GameContext.beachSession;
        }

        static runSession() {
            let session = BeachSession.getOrCreateSession();
            session.startLoop();
        }

        static sendOpCommand(op, args, handler) {
            let session = BeachSession.getOrCreateSession();
            session._sendOpCommand(op, args, handler);
        }

        static simulate(time) {
            let session = BeachSession.getOrCreateSession();
            session._simulate(time);
        }

        static clear() {
            if(GameContext.beachSession) {
                GameContext.beachSession.destroy();
                GameContext.beachSession = null;
            }
        }

        constructor() {
            this._director = new SceneDirector();
            this._simulator = new SceneSimulator();
            this._logic = new BeachSceneLogic();
            this._controller = new Controller();
            this._recorder = new Recorder();
            this._interpreter = new Interpreter();
        }

        build() {
            this._director.setSimulator(this._simulator);
            this._director.setInterpreter(this._interpreter);
            this._interpreter.setRecordsProvider(this._recorder);
            this._simulator.setRecorder(this._recorder);
            this._simulator.setLogic(this._logic);
            this._simulator.setController(this._controller);
        }

        prepare() {
            this._director.start();
        }

        onForceAttractCat() {
            this.sendOpCommand("FORCE_ATTRACT_CAT");
        }

        startLoop() {
            Laya.timer.loop(kLoopInterval$1, this, this._update, [], true, true);
        }

        _update() {
            this._director.update(kLoopInterval$1);
        }

        //模拟多少时间
        _simulate(time) {
            this._director.setInterpreterMode(2);
            this._director.update(time);
            this._director.flush();
            this._director.setInterpreterMode(1);
        }

        _sendOpCommand(op, args, handler) {
            this._controller.sendOpCommand(op, args, handler);
        }


        destroy() {
            Laya.timer.clearAll(this);
        }
    }

    class SimulatorSystem {
        static init() {
            EventMgr.getInstance().registEvent("SIMULATOR_SEND_CMD", null, SimulatorSystem.sendOpCommand);

            EventMgr.getInstance().registEvent("SIMULATOR_CREATE_SESSION", null, SimulatorSystem.CreateSession);

            EventMgr.getInstance().registEvent("SIMULATOR_RUN_SESSION", null, SimulatorSystem.RunSession);

            EventMgr.getInstance().registEvent("SIMULATOR_SIMULATE_SESSION", null, SimulatorSystem.SimulateSession);

        }

        static clear() {
            CoffeeSession.clear();
            BeachSession.clear();
        }

        static CreateSession(sceneId) {
            if(sceneId==Constants.CoffeeSceneId) {
                CoffeeSession.getOrCreateSession();
            }else if(sceneId==Constants.BeachSceneId) {
                BeachSession.getOrCreateSession();
            }
        }

        static SimulateSession(sceneId, time) {
            if(sceneId==Constants.CoffeeSceneId) {
                CoffeeSession.simulate(time);
            }else if(sceneId==Constants.BeachSceneId) {
                BeachSession.simulate(time);
            }
        }

        static RunSession(sceneId) {
            if(sceneId==Constants.CoffeeSceneId) {
                CoffeeSession.runSession();
            }else if(sceneId==Constants.BeachSceneId) {
                BeachSession.runSession();
            }
        }

        static sendOpCommand(sceneId, op, args, handler) {
            if(sceneId==Constants.CoffeeSceneId) {
                CoffeeSession.sendOpCommand(op, args, handler);
            }else if(sceneId==Constants.BeachSceneId) {
                BeachSession.sendOpCommand(op, args, handler);
            }
        }
    }

    class NetUtils {

        //将字符串转换为字节数组
        static stringToByte(str) {
            var bytes = new Array();
            var len, c;
            len = str.length;
            for(var i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if(c >= 0x010000 && c <= 0x10FFFF) {
                    bytes.push(((c >> 18) & 0x07) | 0xF0);
                    bytes.push(((c >> 12) & 0x3F) | 0x80);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                } else if(c >= 0x000800 && c <= 0x00FFFF) {
                    bytes.push(((c >> 12) & 0x0F) | 0xE0);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                } else if(c >= 0x000080 && c <= 0x0007FF) {
                    bytes.push(((c >> 6) & 0x1F) | 0xC0);
                    bytes.push((c & 0x3F) | 0x80);
                } else {
                    bytes.push(c & 0xFF);
                }
            }
            return bytes;
        }

        //将字节数组转换为字符串
        static byteToString(arr) {
            if(typeof arr === 'string') {
                return arr;
            }
            var str = '',
                _arr = arr;
            for(var i = 0; i < _arr.length; i++) {
                var one = _arr[i].toString(2),
                    v = one.match(/^1+?(?=0)/);
                if(v && one.length == 8) {
                    var bytesLength = v[0].length;
                    var store = _arr[i].toString(2).slice(7 - bytesLength);
                    for(var st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2);
                    }
                    str += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                } else {
                    str += String.fromCharCode(_arr[i]);
                }
            }
            return str;
        }

        static bytesToHexString(byteArray) {
    		return Array.from(byteArray, function(byte) {
    		  return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    		}).join('')
    	}

    	static hexString2Bytes(str) {
    		var pos = 0;
    		var len = str.length;
    		if (len % 2 != 0) {
    		  return null;
    		}
    		len /= 2;
    		var hexA = new Array();
    		for (var i = 0; i < len; i++) {
    		  var s = str.substr(pos, 2);
    		  var v = parseInt(s, 16);
    		  hexA.push(v);
    		  pos += 2;
    		}
    		return hexA;
    	  }

    	static base64ToBytes(base64) {
    		var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    		base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
    		for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
    			if (imod4 == 0) continue;
    			bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) |
    					   (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
    		}
    		return bytes;
        }

        static base64_encode(str) {
            var c1, c2, c3;
            var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var i = 0, len = str.length, string = '';
          
            while (i < len) {
              c1 = str.charCodeAt(i++) & 0xff;
              if (i == len) {
                string += base64EncodeChars.charAt(c1 >> 2);
                string += base64EncodeChars.charAt((c1 & 0x3) << 4);
                string += "==";
                break;
              }
              c2 = str.charCodeAt(i++);
              if (i == len) {
                string += base64EncodeChars.charAt(c1 >> 2);
                string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                string += base64EncodeChars.charAt((c2 & 0xF) << 2);
                string += "=";
                break;
              }
              c3 = str.charCodeAt(i++);
              string += base64EncodeChars.charAt(c1 >> 2);
              string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
              string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
              string += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return string
          }
        
        static byteToBase64String( buffer ) {
            var binary = '';
            var bytes = new Uint8Array( buffer );
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode( bytes[ i ] );
            }
            return NetUtils.base64_encode( binary );
        }

    	static Int8parse(u8arr) {
    		var len = u8arr.length;
      
    		var words = [];
    		for (var i = 0; i < len; i++) {
    			words[i >>> 2] |= (u8arr[i] & 0xff) << (24 - (i % 4) * 8);
    		}
      
    		return CryptoJS.lib.WordArray.create(words, len);
        }
        
        /**
         * important important important ！！！
         * JSEncrypt 库的 rsa 加密有点问题，源代码中，对于 byte[] 类型数据进行解密的时候，会默认按照 pkcs1unpad2 的格式进行转换 string
         * 但是这种字符串无法再转回来，所以修改了 JSEncrypt 的源代码，在 decrypt 的函数中，直接返回解密的bitInteger，业务中再将 bigInteger 转为 byte[]
         * @param {*} d 
         * @param {*} n 
         */
        static rsaIntToBytes(d, n) {
            var b = d.toByteArray();
            var i = 0;
            while (i < b.length && b[i] == 0) {
                ++i;
            }
            if (b.length - i != n - 1 || b[i] != 2) {
                return null;
            }
            ++i;
            while (b[i] != 0) {
                if (++i >= b.length) {
                    return null;
                }
            }
            var ret = [];
            while (++i < b.length) {
                var c = b[i] & 255;
                ret.push(c);
            }
            return ret;
        }

        //生成一个长度为 16 的随机字节数组
        static createRandom16Bytes() {
            var ret = new Int8Array(16);
            for(var i = 0; i < 16; i++) {
                var random = Math.floor(65536 * Math.random());
                ret[i] = random & 255;
            }
            return ret;
        }

        //将 d 的数据量填充到 16 的倍数
        static paddingBytesTo16Times(d) {
            //d可能是 Array 可能是 ArrayBuffer，两者的拷贝方法不同
            var dLength = (d instanceof Array) ? d.length : d.byteLength;
            if(dLength % 16 == 0) {
                return new Int8Array(d);
            } else {
                var ret = new Int8Array(dLength + 16 - (dLength % 16));
                if(d instanceof Array) {
                    for(var i = 0; i < dLength; i++) {
                        ret[i] = d[i];
                    }
                } else {
                    ret.set(new Int8Array(d), 0);
                }
                for(var i = 0; i < 16 - (dLength % 16); i++) {
                    ret[dLength + i] = 0;
                }
                return ret;
            }
        }

        static aesEncrypt(originData, aesKey) {
            //TODO 先不加密，但是格式上按照 crc + originDataLenght + iv + encryptData 的格式来

            var ba = new Laya.Byte();
            ba.endian = Laya.Socket.BIG_ENDIAN;
            var dataArray = NetUtils.paddingBytesTo16Times(originData);
            var crc = CRC32.buf(new Uint8Array(originData));
            var randomIv = NetUtils.createRandom16Bytes();
            var encryptedData = CryptoJS.AES.encrypt(NetUtils.Int8parse(dataArray), aesKey, { iv: CryptoJS.lib.WordArray.create(randomIv, 16), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.NoPadding });
            var finalEncryptedData = NetUtils.base64ToBytes(encryptedData.toString());

            ba.writeInt32(crc);                 //crc
            ba.writeInt32(originData.byteLength);   //原始数据长度
            ba.writeArrayBuffer(randomIv, 0, randomIv.length);  //iv向量
            ba.writeArrayBuffer(finalEncryptedData, 0, finalEncryptedData.length);    //加密后的数据

            return ba.buffer;
        }

        //AES 解密，返回解密后的内容，并且校验 CRC 是否对
        static aesDecrypt(crc, originDataLength, iv, encryptData, aesKey) {
            var bytes  = CryptoJS.AES.decrypt(NetUtils.byteToBase64String(new Int8Array(encryptData)), aesKey, { iv: CryptoJS.lib.WordArray.create(new Int8Array(iv), 16), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.NoPadding });
            var decryptedData = NetUtils.hexString2Bytes(bytes.toString());
            var ba = new Laya.Byte(decryptedData);
            var realData = ba.readArrayBuffer(originDataLength);

            var clientCrc = CRC32.buf(new Uint8Array(realData));
            if(clientCrc != crc) {
                //TODO 这里应该抛出异常，先只记录日志
                return null;
            }
            return realData;
        }
    }

    /**
     *
     * 协议映射表
     */
    class ProtoIds {
        constructor() {
        }

        static getRequestMap() {
            var protoIDs = {};
            protoIDs["Player.LoginReq"]                 = [10001, Player.LoginReq];
            protoIDs["Player.LogoutReq"]                = [10002, Player.LogoutReq];
            protoIDs["Player.OnlineCrossDayReq"]        = [10003, Player.OnlineCrossDayReq];
            protoIDs["Player.FullBagReq"]               = [10004, Player.FullBagReq];

            protoIDs["Building.GetAllBuildingReq"]      = [10101, Building.GetAllBuildingReq];
            protoIDs["Building.PutBuildingReq"]         = [10102, Building.PutBuildingReq];
            protoIDs["Building.RemoveBuildingReq"]      = [10103, Building.RemoveBuildingReq];

            protoIDs["Scene.UpdateSceneInfoReq"]        = [10201, Scene.UpdateSceneInfoReq];
            protoIDs["Scene.FetchLetterBoxReq"]         = [10202, Scene.FetchLetterBoxReq];
            protoIDs["Scene.GetLetterBoxInfoReq"]       = [10203, Scene.GetLetterBoxInfoReq];
            protoIDs["Scene.FindVisitorGiftReq"]        = [10204, Scene.FindVisitorGiftReq];
            protoIDs["Scene.GetVisitorGiftAllReq"]      = [10205, Scene.GetVisitorGiftAllReq];
            protoIDs["Scene.GetVisitorGiftSingleReq"]   =  [10208, Scene.GetVisitorGiftSingleReq];

            protoIDs["Task.GetAllTasksReq"]             = [10301, Task.GetAllTasksReq];
            protoIDs["Task.getDailyTaskRewardReq"]      = [10302, Task.getDailyTaskRewardReq];
            protoIDs["Task.getTrophyTaskRewardReq"]     = [10303, Task.getTrophyTaskRewardReq];

            protoIDs["Food.GetPlayerFoodMenuReq"]       = [10401, Food.GetPlayerFoodMenuReq];
            protoIDs["Food.FoodLevelUpReq"]             = [10402, Food.FoodLevelUpReq];

            protoIDs["Pet.GetPlayerPetsInfoReq"]        = [10501, Pet.GetPlayerPetsInfoReq];
            protoIDs["Pet.AdoptPetReq"]                 = [10502, Pet.AdoptPetReq];

            protoIDs["Nautical.GetNauticalInfoReq"]     = [10601, Nautical.GetNauticalInfoReq];
            protoIDs["Nautical.MergeNauticalFoodReq"]   = [10602, Nautical.MergeNauticalFoodReq];
            protoIDs["Nautical.GetNauticalInfoReq"]     = [10603, Nautical.StartNauticalTripReq];
            protoIDs["Nautical.MergeNauticalFoodReq"]   = [10604, Nautical.FinishNauticalTripReq];

            protoIDs["FishingGame.GetFishGameInfoReq"]        = [10701, FishingGame.GetFishGameInfoReq];
            protoIDs["FishingGame.PlayFishGameReq"]           = [10702, FishingGame.PlayFishGameReq];
            protoIDs["FishingGame.GetFishingFishInfoReq"]     = [10703, FishingGame.GetFishingFishInfoReq];

            return protoIDs;
        }

        static getResponseMap() {
            var protoIDs = {};
            protoIDs[10001] = ["Player.LoginRes", Player.LoginRes];
            protoIDs[10002] = ["Player.LogoutRes", Player.LogoutRes];
            protoIDs[10003] = ["Player.OnlineCrossDayRes", Player.OnlineCrossDayRes];
            protoIDs[10004] = ["Player.FullBagRes", Player.FullBagRes];

            protoIDs[10101] = ["Building.GetAllBuildingRes", Building.GetAllBuildingRes];
            protoIDs[10102] = ["Building.PutBuildingRes", Building.PutBuildingRes];
            protoIDs[10103] = ["Building.RemoveBuildingRes", Building.RemoveBuildingRes];

            protoIDs[10201] = ["Scene.UpdateSceneInfoRes", Scene.UpdateSceneInfoRes];
            protoIDs[10202] = ["Scene.FetchLetterBoxRes", Scene.FetchLetterBoxRes];
            protoIDs[10203] = ["Scene.GetLetterBoxInfoRes", Scene.GetLetterBoxInfoRes];
            protoIDs[10204] = ["Scene.FindVisitorGiftRes", Scene.FindVisitorGiftRes];
            protoIDs[10205] = ["Scene.GetVisitorGiftAllRes", Scene.GetVisitorGiftAllRes];
            protoIDs[10208] = ["Scene.GetVisitorGiftSingleRes", Scene.GetVisitorGiftSingleRes];

            protoIDs[10301] = ["Task.GetAllTasksRes", Task.GetAllTasksRes];
            protoIDs[10302] = ["Task.getDailyTaskRewardRes", Task.getDailyTaskRewardRes];
            protoIDs[10303] = ["Task.getTrophyTaskRewardRes", Task.getTrophyTaskRewardRes];

            protoIDs[10401] = ["Food.GetPlayerFoodMenuRes", Food.GetPlayerFoodMenuRes];
            protoIDs[10402] = ["Food.FoodLevelUpRes", Food.FoodLevelUpRes];

            protoIDs[10501] = ["Pet.GetPlayerPetsInfoRes", Pet.GetPlayerPetsInfoRes];
            protoIDs[10502] = ["Pet.AdoptPetRes", Pet.AdoptPetRes];

            protoIDs[10601] = ["Nautical.GetNauticalInfoRes", Nautical.GetNauticalInfoRes];
            protoIDs[10602] = ["Nautical.MergeNauticalFoodRes", Nautical.MergeNauticalFoodRes];
            protoIDs[10603] = ["Nautical.StartNauticalTripRes", Nautical.StartNauticalTripRes];
            protoIDs[10604] = ["Nautical.FinishNauticalTripRes", Nautical.FinishNauticalTripRes];

            protoIDs[10701] = ["FishingGame.GetFishGameInfoRes", FishingGame.GetFishGameInfoRes];
            protoIDs[10702] = ["FishingGame.PlayFishGameRes", FishingGame.PlayFishGameRes];
            protoIDs[10702] = ["FishingGame.GetFishingFishInfoRes", FishingGame.GetFishingFishInfoRes];

            return protoIDs;
        }

        static getNotifyProtoMap() {
            var protoIDs = {};
            protoIDs[1001] = ["PlayerPushMsg.TestMsg", PlayerPushMsg.TestMsg];
            protoIDs[1002] = ["PlayerPushMsg.ReddotMsg", PlayerPushMsg.ReddotMsg];
            return protoIDs;
        }
    }

    class ProtoManager {

        constructor() {

            this._protoBuf = protobuf;
            this._requestProtoIDs = ProtoIds.getRequestMap();
            this._responseProtoIDs = ProtoIds.getResponseMap();
            this._notifyProtoIDs = ProtoIds.getNotifyProtoMap();

            this._loadedHandler = null;

            this._eventDispatcher = new Laya.EventDispatcher();
        }

        static getInstance() {
            return ProtoManager.instance ? ProtoManager.instance : ProtoManager.instance = new ProtoManager();
        }

        init(handler) {
            //初始化的时候读取所有的 proto，遍历requestMap 和 notifyMap 进行初始化
            this._loadedHandler = handler;
            if (this._loadedHandler != null) {
                this._loadedHandler.run();
            }
        }

        getOpcode(requestName) {
            return this._requestProtoIDs[requestName][0];
        }

        encodeRequest(requestName, paramData) {
            var protoMsg = this._requestProtoIDs[requestName][1];
            if(!protoMsg) {
                console.error("没有找到协议信息: " + requestName);
                return null;
            }
            var errMsg = protoMsg.verify(paramData);
            if(errMsg) throw Error(errMsg);

            var buffer = protoMsg.encode(paramData).finish();
            return buffer;
        }

        decodeResponse(opCode, paramData) {
            var protoMsgName = this._responseProtoIDs[opCode][0];
            if(!protoMsgName) {
                console.error("没有ID为: " + opCode + " 的协议！");
                return null;
            }
            var protoMsg = this._responseProtoIDs[opCode][1];
            if(!protoMsg) {
                console.error("没有找到协议信息: " + protoMsgName);
                return null;
            }
            var newMessage = protoMsg.decode(paramData);
            return newMessage;
        }

        decodeNotify(opCode, paramData) {
            var protoMsgName = this._notifyProtoIDs[opCode][0];
            if(!protoMsgName) {
                console.error("没有ID为: " + opCode + " 的协议！");
                return null;
            }
            var protoMsg = this._notifyProtoIDs[opCode][1];
            if(!protoMsg) {
                console.error("没有找到协议信息: " + protoMsgName);
                return null;
            }
            var newMessage = protoMsg.decode(paramData);
            return newMessage;
        }

        //TODO 测试时添加的对notify数据进行，正常使用中应该是用不到这个函数的
        encodeNotify(opCode, paramData) {
            var protoMsgName = this._notifyProtoIDs[opCode][0];
            if(!protoMsgName) {
                console.error("没有ID为: " + opCode + " 的协议！");
                return null;
            }
            var protoMsg = this._notifyProtoIDs[opCode][1];
            if(!protoMsg) {
                console.error("没有找到协议信息: " + protoMsgName);
                return null;
            }
            var errMsg = protoMsg.verify(paramData);
            if(errMsg) throw Error(errMsg);

            var buffer = protoMsg.encode(paramData).finish();
            return buffer;
        }

        registerNotifyCallback(opCode, caller, listener, args) {
            //只允许一个回调存在
            this._eventDispatcher.offAll("NotifyCallback_" + opCode);
            this._eventDispatcher.on("NotifyCallback_" + opCode, caller, listener, args);
        }

        //实际处理收到的服务器推送
        handlerNotify(opCode, params) {
            this._eventDispatcher.event("NotifyCallback_" + opCode, params);
        }
    }

    class WaitingRequest {

        constructor(requestName, param, handler) {
            this._requestName = requestName;
            this._param = param;
            this._handler = handler;
            this._buffer = null;
        }

        getRequestName() {
            return this._requestName;
        }

        getParam() {
            return this._param;
        }

        getHandler() {
            return this._handler;
        }

        setBuffer(dataBuffer) {
            this._buffer = dataBuffer;
        }

        getBuffer() {
            return this._buffer;
        }

    }

    class WebSocketClient {
        constructor() {
            this._initFinished = false;
            this._waitInitHandlers = new Array();
            this._connectReady = false;
            this._heartTimer = Laya.timer;
            this._socket = new Laya.Socket();
            this._socket.endian = Laya.Socket.BIG_ENDIAN;
            this._socket.on(Laya.Event.OPEN, this, this._openHandler);
            this._socket.on(Laya.Event.MESSAGE, this, this._receiveHandler);
            this._socket.on(Laya.Event.CLOSE, this, this._closeHandler);
            this._socket.on(Laya.Event.ERROR, this, this._errorHandler);

            this._msgId = 0;
            this._waitSendRequests = new Array();
            this._sendingRequest = null;
        }

        static getInstance() {
            return WebSocketClient.instance ? WebSocketClient.instance : WebSocketClient.instance = new WebSocketClient();
        }

        init(handler) {
            this._protoManager = ProtoManager.getInstance();
            this._protoManager.init(handler);
        }

        //初始化结束，置初始化结束的标志，并且查看是否有已经注册过来的请求，有的话帮助调用
        initFinish() {
            this._initFinished = true;
            console.debug("==== init web socket finish!!!");

            while(this._waitInitHandlers.length > 0) {
                let waitingHandler = this._waitInitHandlers.shift();
                if(waitingHandler != null) {
                    console.debug("==== waiting init handler run: ");
                    console.debug(waitingHandler);
                    waitingHandler.run();
                }
            }
        }

        //连接, 必须传入 rid，收到连接成功的回调之后，自动的发送 Connect 消息
        login(url, loginParam, handler) {
            if(!this._initFinished) {
                console.debug("not finished, register login handler");
                var handlerParam = new Array(url, loginParam, handler);
                this._waitInitHandlers.push(Laya.Handler.create(this, this.login, handlerParam));
                return;
            }

            console.debug("========= login =========");
            this._rid = loginParam.rid;
            this._token = loginParam.token;
            this._sdkName = loginParam.sdkName;
            this._socket.connectByUrl(url);
            this._loginHandler = handler;
            this._loginUrl = url;
        }

        reconnect(handler) {
            //必须有rid、aesKey、loginUrl 才能够进行重连
            if(this._rid && this._aesKey && this._loginUrl) {
                console.debug("========= reconnect =========");
                this._socket.connectByUrl(this._loginUrl);
                this._reconnecting = true;
                this._reconnectedHandler = handler;
            } else {
                //TODO 这里需要抛出一个异常
                console.log("rid or loginUrl or aesKey not init");
                return;
            }
        }

        logout() {
            //TODO 登出接口,暂时没用上
            this._connectReady = false;
            this._heartTimer.clear(this, this._onHeartBeat);

            this._socket.cleanSocket();
            this._socket.close();

            this._clearNetStatus();
            EventMgr.getInstance().postEvent("LOGOUT");
        }

        /**
         * 发送消息
         * @param {*} opCode 
         * @param {*} param json格式的，未经proto转化
         * @param {*} handler 回调函数
         */
        sendRequest(requestName, param, handler) {
            if(!this._initFinished) {
                //如果尚未初始化完，则先把请求暂存起来，等初始化完了之后进行调用
                //其实理论来说，直接抛异常也可以
                console.debug("not finished, register send request handler");
                var handlerParam = new Array(requestName, param, handler);
                this._waitInitHandlers.push(Laya.Handler.create(this, this.sendRequest, handlerParam));
                return;
            }

            if(this._reconnecting) {
                //如果已经正在重连，则直接返回error
                var ret = new Array();
                ret[0] = Constants.NetError;
                handler.runWith(ret);
                return;
            }

            if(!this._connectReady) {
                //如果没有准备好的连接，则先走重连，注册一个重连成功后的回调
                var handler = Laya.Handler.create(this, this.sendRequest, Array.from(arguments));
                this.reconnect(handler);
                return;
            }

            //如果当前正有消息在发送，则把本条请求先缓存起来，如果没有消息在发送，则直接发送
            var waitingReqeust = new WaitingRequest(requestName, param, handler);
            if(this._sendingRequest != null) {
                console.log('----- current sending msg: ' + this._msgId + ", requestName: " + requestName);
                console.log(this._sendingRequest);
                this._waitSendRequests.push(waitingReqeust);
                console.log(this._waitSendRequests);
            } else {
                this._oncePopReq(waitingReqeust);
            }
        }

        _oncePopReq(waitingRequest) {
            console.debug("===== send request ===== " + waitingRequest.getRequestName());
            let requestName = waitingRequest.getRequestName();
            let param = waitingRequest.getParam();
            let handler = waitingRequest.getHandler();

            var opCode = this._protoManager.getOpcode(requestName);
            var data = this._protoManager.encodeRequest(requestName, param);

            //先拼内层数据 dataMsgType + msgID + opCode + ridLength + rid + dataLength + data
            var ba = new Laya.Byte();
            ba.endian = Laya.Socket.BIG_ENDIAN;

            ba.writeByte(WebSocketClient.RequestData);
            this._msgId++;
            ba.writeInt32(this._msgId);
            ba.writeInt32(opCode);
            var ridBytes = NetUtils.stringToByte(this._rid);
            ba.writeByte(ridBytes.length);
            ba.writeArrayBuffer(ridBytes, 0, ridBytes.length);
            ba.writeInt32(data.length);
            ba.writeArrayBuffer(data, 0, data.length);

            //开始加密
            var encryptData = NetUtils.aesEncrypt(ba.buffer, this._aesKey);

            //写最终的发送包
            var finalBa = new Laya.Byte();
            finalBa.endian = Laya.Socket.BIG_ENDIAN;

            finalBa.writeByte(WebSocketClient.DataMsg);
            finalBa.writeInt32(encryptData.byteLength);
            finalBa.writeArrayBuffer(encryptData, 0, encryptData.byteLength);

            waitingRequest.setBuffer(finalBa.buffer);
            this._sendingRequest = waitingRequest;
            //注册一个10秒的超时回调函数，如果进入该函数则直接再次重试请求
            Laya.timer.once(10000, this, this._reqTimeout);

            this._socket.send(finalBa.buffer);
        }

        _reqTimeout() {
            console.log("........ req timeout .......");
            if(this._sendingRequest != null && this._sendingRequest.getBuffer() != null) {
                //直接重新发送一次该请求，并且重新注册 timeOut
                this._socket.send(this._sendingRequest.getBuffer());
                Laya.timer.once(10000, this, this._reqTimeout);
            }
        }

        _openHandler(event) {
            if(this._rid) {
                if(this._reconnecting) {
                    //表示是在重连, 发送 reconnect 信号
                    var ba = new Laya.Byte();
                    ba.endian = Laya.Socket.BIG_ENDIAN;
                    var ridBytes = NetUtils.stringToByte(this._rid);
                    ba.writeByte(ridBytes.length);
                    ba.writeArrayBuffer(ridBytes, 0, ridBytes.length);

                    //进行aes加密
                    var dataArray = NetUtils.paddingBytesTo16Times(ridBytes);
                    var randomIv = NetUtils.createRandom16Bytes();
                    var encryptedData = CryptoJS.AES.encrypt(NetUtils.Int8parse(dataArray), this._aesKey, { iv: CryptoJS.lib.WordArray.create(randomIv, 16), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.NoPadding });
                    var finalEncryptedData = NetUtils.base64ToBytes(encryptedData.toString());

                    ba.writeArrayBuffer(randomIv, 0, randomIv.length);  //iv向量
                    ba.writeInt32(ridBytes.length);   //原始rid的长度
                    ba.writeArrayBuffer(finalEncryptedData, 0, finalEncryptedData.length);    //加密后的数据

                    //写最终的发送包
                    var finalBa = new Laya.Byte();
                    finalBa.endian = Laya.Socket.BIG_ENDIAN;

                    finalBa.writeByte(WebSocketClient.ReconnectMsg);
                    finalBa.writeInt32(ba.buffer.byteLength);
                    finalBa.writeArrayBuffer(ba.buffer, 0, ba.buffer.byteLength);

                    this._socket.send(finalBa.buffer);
                    this._socket.flush();

                    this._connectReady = true;

                    console.log("reconnect success");
                } else {
                    //发送 Connect 的消息，用于生成秘钥
                    var ba = new Laya.Byte();
                    ba.endian = Laya.Socket.BIG_ENDIAN;
                    var ridBytes = NetUtils.stringToByte(this._rid);
                    ba.writeByte(ridBytes.length);
                    ba.writeArrayBuffer(ridBytes, 0, ridBytes.length);

                    //这里生成一个随机密钥
                    this._rsaKey = new JSEncrypt();
                    this._rsaDataLength = (this._rsaKey.getKey().n.bitLength() + 7) >> 3;
                    var publicKey = NetUtils.base64ToBytes(this._rsaKey.getPublicKeyB64());
                    ba.writeInt16(publicKey.length);                            //秘钥长度
                    ba.writeArrayBuffer(publicKey, 0, publicKey.length);        //秘钥内容

                    //写最终的发送包
                    var finalBa = new Laya.Byte();
                    finalBa.endian = Laya.Socket.BIG_ENDIAN;

                    finalBa.writeByte(WebSocketClient.ConnectMsg);
                    finalBa.writeInt32(ba.buffer.byteLength);
                    finalBa.writeArrayBuffer(ba.buffer, 0, ba.buffer.byteLength);

                    this._socket.send(finalBa.buffer);
                    this._socket.flush();

                    this._connectReady = true;
                }
            } else {
                console.debug("Not have rid");
            }
        }

        _receiveHandler(msg) {
            var bytes = new Laya.Byte();
            bytes.writeArrayBuffer(msg);
            bytes.pos = 0;
            bytes.endian = Laya.Socket.BIG_ENDIAN;

            var msgType = bytes.getByte();
            var msgLength = bytes.getInt32();
            var msgData = bytes.readArrayBuffer(msgLength);
            switch (msgType) {
                case WebSocketClient.EstablishMsg:
                    console.debug("连接成功");
                    //开启定时心跳
                    this._heartTimer.clear(this, this._onHeartBeat);
                    this._heartTimer.loop(10000, this, this._onHeartBeat);

                    //先将整个数据用 rsa 解密
                    var rsaDecryptedData = this._rsaKey.decrypt(NetUtils.byteToBase64String(new Int8Array(msgData)));

                    //从解析的数据中拿aes秘钥
                    var establishBa = new Laya.Byte(NetUtils.rsaIntToBytes(rsaDecryptedData, this._rsaDataLength));
                    establishBa.endian = Laya.Socket.BIG_ENDIAN;

                    var keyLength = establishBa.getInt16();
                    var originAesKey = establishBa.readArrayBuffer(keyLength);
                    this._aesKey = NetUtils.Int8parse(new Int8Array(originAesKey));

                    //发送 Data 的登录数据 TODO
                    if(this._reconnecting) {
                        this._reconnecting = false;         //重连结束, TODO 可以发送重连时需要请求的接口
                        if(this._reconnectedHandler != null) {
                            this._reconnectedHandler.run();
                        }
                    } else {
                        this.sendRequest("Player.LoginReq", {"rid":this._rid, "token": this._token, "sdkName": this._sdkName}, this._loginHandler);
                    }
                    break;
                case WebSocketClient.DataMsg:
                    let dataMsgBa = new Laya.Byte(msgData);
                    dataMsgBa.endian = Laya.Socket.BIG_ENDIAN;

                    //先解密
                    let crc = dataMsgBa.getUint32();
                    let originDataLength = dataMsgBa.readInt32();
                    let iv = dataMsgBa.readArrayBuffer(16);
                    let encryptData = dataMsgBa.readArrayBuffer(msgLength - 4 - 4 - 16);

                    let dataBa = new Laya.Byte(NetUtils.aesDecrypt(crc, originDataLength, iv, encryptData, this._aesKey));
                    dataBa.endian = Laya.Socket.BIG_ENDIAN;

                    //解密后的数据读取是 Response 还是 Notify
                    let dataMsgType = dataBa.getByte();
                    if(dataMsgType == WebSocketClient.ResponseData) {
                        let msgId = dataBa.readInt32();
                        //TODO 临时写的读取服务器时间戳, 这里以后要优化一下，因为时间戳会有传输延迟
                        let serverTsHigh = dataBa.readInt32();
                        let serverTsLow = dataBa.readInt32();
                        TimeUtils.updateServerTime((serverTsHigh * 4294967296) + serverTsLow);

                        let dataError = dataBa.readInt32();
                        let dataLength = dataBa.readInt32();
                        let dataParam = new Uint8Array(dataBa.readArrayBuffer(dataLength));
                        this._handlerResponse(msgId, dataParam, dataError);
                    } else if(dataMsgType == WebSocketClient.NotifyData) {
                        let opCode = dataBa.readInt32();
                        let dataLength = dataBa.readInt32();
                        let dataParam = new Uint8Array(dataBa.readArrayBuffer(dataLength));
                        this._handlerNotify(opCode, dataParam);
                    } else {
                        //都不是，则直接返回，记录个错误日志
                        console.debug("error msg type: " + dataMsgType);
                    }
                    break;
                case WebSocketClient.ErrorMsg:
                    let errorMsgBa = new Laya.Byte(msgData);
                    errorMsgBa.endian = Laya.Socket.BIG_ENDIAN;
                    let errorCode = errorMsgBa.getInt32();
                    console.log("*********** " + errorCode + " **********");
                    if(errorCode == 1030) {
                        console.log("===== network disconnect =====");
                        this._clearNetStatus();
                        this.showMultiLoginTip();
                    }
                    break;
            }
        }

        showMultiLoginTip() {
            Laya.Dialog.open("ui/MultiLogin.scene", false);
        }

        _closeHandler(e) {
            console.log("------ socket close ------");

            if(this._connectReady) {
                this._connectReady = false;

                //尝试重连
                this.reconnect(null);
                this._heartTimer.clear(this, this._onHeartBeat);
            }
        }

        _errorHandler(e) {
            console.log("------- socket error ------");
            this._connectReady = false;
            if(this._reconnecting) {
                //如果正在重连，但是重连失败，则该断线了
                EventMgr.getInstance().postEvent("NETWORD_DISCONNECT");
                console.log("===== network disconnect =====");
                this._clearNetStatus();
            }
        }

        //清空当前
        _clearNetStatus() {
            console.log("===== clear net status ======");
            this._aesKey = null;
            this._rsaKey = null;
            this._connectReady = false;
            this._loginUrl = null;
            this._reconnecting = false;
            this._rid = null;
            this._msgId = 0;
            this._sendingRequest = null;
        }

        _onHeartBeat() {
            console.log("------- heart beat -------");

            if (this._connectReady) {
                var ba = new Laya.Byte();
                ba.endian = Laya.Byte.BIG_ENDIAN;
                ba.writeByte(WebSocketClient.HeartbeatMsg);
                ba.writeInt32(0);
                this._socket.send(ba.buffer);
                this._socket.flush();
            } else {
                //尝试重连
                this.reconnect(null);
                this._heartTimer.clear(this, this._onHeartBeat);
            }
        }

        _handlerResponse(msgId, dataParam, dataError) {
            //具体处理接收到返回数据的处理函数,只处理msgId等于当前缓存的this._msgId的消息
            if(this._msgId == msgId && this._sendingRequest != null) {
                var opCode = this._protoManager.getOpcode(this._sendingRequest.getRequestName());
                var ret = new Array();
                ret[0] = dataError;
                //当返回没有错误码的时候，才去解析数据，否则直接将数据复制一个空的json
                if(ret[0] == 0) {
                    ret[1] = this._protoManager.decodeResponse(opCode, dataParam);
                } else {
                    ret[1] = {};
                }

                var handler = this._sendingRequest.getHandler();
                handler.runWith(ret);
                this._sendingRequest = null;
                Laya.timer.clear(this, this._reqTimeout);

                if(this._waitSendRequests.length > 0) {
                    this._oncePopReq(this._waitSendRequests.shift());
                }

            } else {
                console.error("!!!!! msgId wrong or sending request is null: " + msgId);
                console.error(this._msgId);
                console.error(this._sendingRequest);
            }
        }

        _handlerNotify(opCode, dataParam) {
            //具体处理服务器推送的处理函数
            var ret = this._protoManager.decodeNotify(opCode, dataParam);
            console.debug(ret);

            this._protoManager.handlerNotify(opCode, ret);
        }
    }

    WebSocketClient.ConnectMsg = 0x21;
    WebSocketClient.DataMsg = 0x22;
    WebSocketClient.HeartbeatMsg = 0x23;
    WebSocketClient.EstablishMsg = 0x34;
    WebSocketClient.ErrorMsg = 0x35;
    WebSocketClient.ReconnectMsg = 0x41;

    WebSocketClient.RequestData = 0x01;
    WebSocketClient.ResponseData = 0x02;
    WebSocketClient.NotifyData = 0x03;

    class Service {

        static init(handler) {
            let initFinish = function() {
                //这里之后应该是置一个初始化好了的标志，允许开始调用网络 TODO
                WebSocketClient.getInstance().initFinish();
                const args = Array.from(arguments);
                handler.runWith(args);
            };
            WebSocketClient.getInstance().init(Laya.Handler.create(null, initFinish));
        }

        static sendRequest(reqName, params, handler) {
            let commonHandler = function() {
                // 处理通用错误
                const args = Array.from(arguments);
                if(args[0]!=0) {
                    // TODO 展示错误信息
                    console.error("Error Number:"+args[0]);
                }else{
                    handler.runWith(args.slice(1));
                }
            };
            WebSocketClient.getInstance().sendRequest(reqName, params, Laya.Handler.create(null, commonHandler));
        }

        static login(url, serverId, rid, token, handler) {
            let commonHandler = function() {
                // 处理通用错误
                const args = Array.from(arguments);
                if(args[0]!=0) {
                    // TODO 展示错误信息
                    console.error("Error Number:"+args[0]);
                }else{
                    handler.runWith(args.slice(1));
                }
            };
            let sdkName = "dev";
            if (Laya.Browser.onMiniGame) {
                sdkName = "wx";
            }
            WebSocketClient.getInstance().login(url, {"rid":rid, "sdkName": sdkName, "token": token }, Laya.Handler.create(null, commonHandler));
        }

        static registerNotifyCallback(opCode, caller, listener, args) {
            ProtoManager.getInstance().registerNotifyCallback(opCode, caller, listener, args);
        }

        static logout(handler) {
            Service.sendRequest("Player.LogoutReq", {}, handler);
        }

        static onlineCrossDay(handler) {
            Service.sendRequest("Player.OnlineCrossDayReq", {}, handler);
        }

        static getFullBag(handler) {
            Service.sendRequest("Player.FullBagReq", {}, handler);
        }

        //建筑
        static getAllBuilding(handler) {
            // WebSocketClient.getInstance().sendRequest("Building.GetAllBuildingReq", {}, handler);
            Service.sendRequest("Building.GetAllBuildingReq", {}, handler);
        }

        static putBuilding(buildingId, baseId, handler) {
            // WebSocketClient.getInstance().sendRequest("Building.PutBuildingReq", {"buildingId":buildingId, "pos":baseId}, handler);
            Service.sendRequest("Building.PutBuildingReq", {"buildingId":buildingId, "pos":baseId}, handler);
        }

        static removeBuilding(buildingId, handler) {
            // WebSocketClient.getInstance().sendRequest("Building.RemoveBuildingReq", {"buildingId":buildingId}, handler);
            Service.sendRequest("Building.RemoveBuildingReq", {"buildingId":buildingId}, handler);
        }

        //任务
        static getAllTasks(handler) {
            Service.sendRequest("Task.GetAllTasksReq", {}, handler);
        }

        static getDailyTaskReward(taskId, handler) {
            Service.sendRequest("Task.getDailyTaskRewardReq",  {"taskId":taskId}, handler);
        }

        static getTrophyTaskReward(taskId, handler) {
            Service.sendRequest("Task.getTrophyTaskRewardReq", {"taskId":taskId}, handler);
        }

        //菜谱
        static getPlayerFoodMenu(handler) {
            Service.sendRequest("Food.GetPlayerFoodMenuReq", {}, handler);
        }

        static foodLevelUp(foodListId, handler) {
            Service.sendRequest("Food.FoodLevelUpReq", {"foodListId":foodListId}, handler);
        }

        //场景同步
        static getLetterBoxInfo(handler) {
            Service.sendRequest("Scene.GetLetterBoxInfoReq", {}, handler);
        }

        static fetchLetterBox(handler) {
            Service.sendRequest("Scene.FetchLetterBoxReq", {}, handler);
        }

        static updateSceneInfo(customData, rewards, petRewards, visitorRewards, handler) {
            if(petRewards){
                Service.sendRequest("Scene.UpdateSceneInfoReq",
                    {"customData":customData, "rewards":rewards, "petRewards":petRewards, "visitorRewards":visitorRewards},
                    handler);
            }else{
                Service.sendRequest("Scene.UpdateSceneInfoReq",
                    {"customData":customData, "rewards":rewards, "visitorRewards":visitorRewards}, handler);
            }
        }

        //宠物 图鉴
        static getPetsInfo(handler) {
            Service.sendRequest("Pet.GetPlayerPetsInfoReq", {}, handler);
        }

        static adoptPet(petId, handler) {
            Service.sendRequest("Pet.AdoptPetReq", {"roleId":petId}, handler);
        }

        //长客
        static findVisitorGift(handler) {
            Service.sendRequest("Scene.FindVisitorGiftReq", {}, handler);
        }

        static getVisitorGiftAll(fetchType, handler) {
            Service.sendRequest("Scene.GetVisitorGiftAllReq", {"type":fetchType}, handler);
        }

        static getVisitorGiftSingle(giftId, handler) {
            Service.sendRequest("Scene.GetVisitorGiftSingleReq", {"id": giftId}, handler);
        }

        //探险
        static getNauticalInfo(handler) {
            Service.sendRequest("Nautical.GetNauticalInfoReq", {}, handler);
        }

        static mergeNauticalFood(nauticalFoodId, nauticalFoodCount, handler) {
            Service.sendRequest("Nautical.MergeNauticalFoodReq",
                {"id": String(nauticalFoodId), "amount": Number(nauticalFoodCount)}, handler);
        }

        static startNauticalTrip(catIds, foodInTrip, toolInTrip, handler) {
            Service.sendRequest("Nautical.MergeNauticalFoodReq",
                {"catIds": catIds, "foodInTrip": foodInTrip, "toolInTrip": toolInTrip}, handler);
        }

        static finishNauticalTrip(handler) {
            Service.sendRequest("Nautical.FinishNauticalTripReq", {}, handler);
        }

        //钓鱼
        static getFishGameInfo(handler) {
            Service.sendRequest("FishingGame.GetFishGameInfoReq", {}, handler);
        }

        static playFishGame(fishingFishId, fishingBaitId, rewards, fishingFishSize, handler) {
            Service.sendRequest("FishingGame.PlayFishGameReq",
                {"fishingFishId": fishingFishId, "fishingBaitId": fishingBaitId, "rewards": rewards, "fishingFishSize": fishingFishSize},
                handler);
        }

        static getFishingFishInfo(handler) {
            Service.sendRequest("FishingGame.GetFishingFishInfoReq", {}, handler);
        }
    }

    let url = "ws://49.232.18.82:14002/gs2"; //开发服
    // let url = "ws://49.232.18.82:14001/gs1"    //稳定服
    // let url = "ws://49.232.98.28:14002"    //调试服
    // let url = "wss://shuangfeng33.cn:17305/gs1"    //稳定服
    // let url = "ws://10.0.72.156:9823"
    // let url = "ws://127.0.0.1:9823"
    // let serverId = "1"  //稳定服
    let serverId = "2"; //开发服


    let _rid;
    let _token = "dev";
    let _serverTag;
    class System {
        static init() {
            if(System.inited==null){
                System.inited = true;
                EventMgr.getInstance().registEvent("NETWORD_DISCONNECT", null, System.restart);

                EventMgr.getInstance().registEvent("SERVICE_ONLINE_CROSSDAY", null, System.onlineCrossDay);

                EventMgr.getInstance().registEvent("SERVICE_PUT_BUILDING", null, System.putBuilding);

                EventMgr.getInstance().registEvent("SERVICE_GET_ALLTASKS", null, System.getAllTasks);
                EventMgr.getInstance().registEvent("SERVICE_GET_TROPHY_TASK_REWARD", null, System.getTrophyTaskReward);
                EventMgr.getInstance().registEvent("SERVICE_GET_DAILY_TASK_REWARD", null, System.getDailyTaskReward);

                EventMgr.getInstance().registEvent("SERVICE_GET_PLAYER_FOOD_MENU", null, System.getPlayerFoodMenu);
                EventMgr.getInstance().registEvent("SERVICE_FOOD_LEVELUP", null, System.foodLevelUp);

                EventMgr.getInstance().registEvent("SERVICE_UPDATE_SCENE_INFO", null, System.updateSceneInfo);

                EventMgr.getInstance().registEvent("SERVICE_GET_LETTER_BOX_INFO", null, System.getLetterBoxInfo);
                EventMgr.getInstance().registEvent("SERVICE_FETCH_LETTER_BOX", null, System.fetchLetterBox);

                EventMgr.getInstance().registEvent("SERVICE_GET_PETSINFO", null, System.getPetsInfo);
                EventMgr.getInstance().registEvent("SERVICE_ADOPT_PET", null, System.adoptPet);

                EventMgr.getInstance().registEvent("SERVICE_FIND_VISITOR_GIFT", null, System.findVisitorGift);
                EventMgr.getInstance().registEvent("SERVICE_GET_VISITOR_GIFT_ALL", null, System.getVisitorGiftAll);
                EventMgr.getInstance().registEvent("SERVICE_GET_VISITOR_GIFT_SINGLE", null, System.getVisitorGiftSingle);


                PlayerSystem.init();
                BuildingSystem.init();
                CatSystem.init();
                FoodSystem.init();
                TaskSystem.init();
                RedPointSystem.init();
                SyncSystem.init();
                SimulatorSystem.init();
                PetSystem.init();
            }
        }

        static restart() {
            System.clear();
            //总是报错，只能先reload
            // SceneMgr.getInstance().closeAllScene();
            // SceneMgr.getInstance().switchScene(0);
            Laya.Browser.window.location.reload();      //这句话会重新执行main函数
            //TODO: 显示些啥
        }

        static clear() {
            PlayerSystem.clear();
            BuildingSystem.clear();
            // CatSystem.clear();
            FoodSystem.clear();
            // TaskSystem.clear();
            // RedPointSystem.clear();
            // SyncSystem.clear();
            SimulatorSystem.clear();
            PetSystem.clear();
        }

        static setRid(rid) {
            _rid = rid;
        }

        static getRid(){
            if(Laya.Browser.onMiniGame) {
                return _rid;
            }
            return _rid + "_" + serverId;
        }

        static setToken(token) {
            _token = token;
        }

        static getToken(){
            return _token;
        }

        static setServerTag(tag) {
            _serverTag = tag;
        }

        static getServerTag(){
            return _serverTag;
        }

        static getServerUrl() {
            if(Laya.Browser.onMiniGame) {
                return "wss://fy.hulai.com:17305"+_serverTag
            }
            return url
        }


        static _updateCurrencyBag(bag) {
            if(bag){
                // console.debug("_updateCurrencyBag arguments", arguments);
                let currency = bag.currency;
                // console.debug("currency:", currency);
                Object.getOwnPropertyNames(currency).forEach(function(key){

                    let item = currency[key];
                    let itemId = item.id;
                    let count = item.amount;
                    // console.debug("updateItem", itemId, count, item);
                    if(itemId==Constants.RewardType.FISH ) {
                        PlayerSystem.updateFish(count);
                    }else if(itemId==Constants.RewardType.STAR) {
                        PlayerSystem.updateStar(count);
                    }
                });
            }
        }

        static _updateFullBag(bag) {
            if(bag) {
                if(bag.currency)
                    System._updateCurrencyBag(bag);
            }
        }

        static _initBuilding(playerBuilding) {
            if(playerBuilding) {
                // console.debug("_initBuilding arguments", arguments);
                let buildings = playerBuilding.buildings;
                // console.debug("buildings:", buildings);
                Object.getOwnPropertyNames(buildings).forEach(function(key){

                    let building = buildings[key];
                    let buildingId = building.id;
                    let baseId = building.position;
                    // console.debug("initBuilding", buildingId, baseId);
                    if(baseId){
                        BuildingSystem.replaceBuildingData(buildingId, baseId);
                    }else{
                        BuildingSystem.addBuildingDataByBid(buildingId);
                    }
                });
            }
        }

        static _updateBuilding(playerBuilding) {
            //TODO 先清除现有的建筑信息
            BuildingSystem.clear();
            System._initBuilding(playerBuilding);
        }

        static _updatePets(pets) {
            if(pets) {
                if(pets.cats) {
                    PetSystem.updatePets(pets.cats);
                }
            }
        }

        static _updateTasks(tasks) {
            if(tasks){
                // console.debug("_updateTasks:", tasks);
                TaskSystem.updateTasks(tasks);
            }
        }

        static _updateFoods(menu) {
            if(menu) {
                // console.debug("_updateFoods:", menu);
                FoodSystem.updateFoods(menu);
            }
        }

        static _updateVisitorGift(visitorRewards) {
            if(visitorRewards) {
                SyncSystem.updateVisitorGift(visitorRewards);
            }
        }

        static _updateLetterBox(letterBox) {
            if(letterBox) {
                // console.debug("_updateLetterBox:", letterBox);
                SyncSystem.updateLetterBox(letterBox);
            }
        }

        static _restoreCustomData(customData) {
            // console.debug("_restoreCustomData:", customData);
            SyncSystem.restoreCustomData(customData);
        }

        static _updateFishGameInfo(fishingGameInfo) {
            //TODO by zhouhuikun
        }

        static _testNotify() {
            // console.debug("_testNotify", arguments);
        }

        static _reddotNotify(ReddotMsg) {
            // console.debug("_reddotNotify", arguments);
            if(ReddotMsg&&ReddotMsg.type){
                if(ReddotMsg.type==Constants.RedDotType.kTask) {
                    TaskSystem.setDirty(1);
                }
                RedPointSystem.refreshRedPoint(ReddotMsg.type);
            }
        }

        /**----------------------------------------------------------------------
        直接调用
        */

        static initService(handler) {
            System.init();
            Service.init(handler);
            Service.registerNotifyCallback(1001, null, System._testNotify);
            Service.registerNotifyCallback(1002, null, System._reddotNotify);
        }

        static login(rid, handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let playerBuilding = res.playerBuilding;
                let playerPets = res.playerPets;
                let tasks = res.tasks;
                let foodMenu = res.menu;
                let letterBox = res.letterbox;
                let customData = res.customData;
                System._updateCurrencyBag(bag);
                System._initBuilding(playerBuilding);
                System._updatePets(res.playerPets);
                System._updateTasks(tasks);
                System._updateFoods(foodMenu);
                System._updateLetterBox(letterBox);
                System._restoreCustomData(customData);
                if(handler) {
                    Laya.LocalStorage.setItem("user_rid", rid);
                    handler.runWith([res]);
                }
                SyncSystem.scheduleUpdate();
            };
            if (Laya.Browser.onMiniGame) {
                wx.login({
                    success (res) {
                      if (res.code) {
                        // console.log(res);
                        wx.request({
                            url: 'https://fy.hulai.com:17305/gatew',
                            method: 'POST',
                            header: {
                                'content-type': 'application/x-www-form-urlencoded'
                              },
                            data: 'opCode=110001&params={\'sdkName\': \'wx\', \'param\':\'' + res.code + '\'}',
                            success (res) {
                                let object = JSON.parse(res.data.data);
                                console.debug("登录发送code服务器返回:" + JSON.stringify(object));
                                console.debug(object);
                                System.setToken(object.token);
                                System.setRid(object.rid);
                                System.setServerTag(object.gameserverUrl);
                                Service.login(System.getServerUrl(), "1", System.getRid(), System.getToken(), Laya.Handler.create(null, dealFunc));
                            },
                            fail() {
                                console.debug("登录发送code服务器返回失败!!!");
                            }
                          });
                      } else {
                        console.log('登录失败！' + res.errMsg);
                      }
                    }
                });
            } else {
                System.setRid(rid);
                Service.login(System.getServerUrl(), serverId, System.getRid(), System.getToken(), Laya.Handler.create(null, dealFunc));
            }
        }

        static onlineCrossDay(handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let tasks = res.tasks;
                System._updateCurrencyBag(bag);
                System._updateTasks(tasks);
                if(handler)
                    handler.runWith([res]);
            };
            Service.onlineCrossDay(Laya.Handler.create(null, dealFunc));
        }

        static getFullBag(handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                System._updateFullBag(bag);
                if(handler)
                    handler.runWith([res]);
            };
            Service.getFullBag(Laya.Handler.create(null, dealFunc));
        }

        static getAllBuilding(handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let playerBuilding = res.playerBuilding;
                System._updateCurrencyBag(bag);
                System._updateBuilding(playerBuilding);
                if(handler)
                    handler.runWith([res]);
            };
            Service.getAllBuilding(Laya.Handler.create(null, dealFunc));
        }

        /**----------------------------------------------------------------------
        通过EVENT 调用
        */
        //建筑
        static putBuilding(buildingId, baseId, handler) {
            // console.debug("putBuilding", buildingId, baseId, handler)
            let dealFunc = function(res) {
                let bag = res.bag;
                let letterBox = res.letterbox;
                System._updateCurrencyBag(bag);
                System._updateLetterBox(letterBox);
                if(handler)
                    handler.runWith([res]);
            };
            Service.putBuilding(buildingId, baseId, Laya.Handler.create(null, dealFunc));
        }

        // 这个接口目前还没用过
        static removeBuilding(buildingId, handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                System._updateCurrencyBag(bag);
                if(handler)
                    handler.runWith([res]);
            };
            Service.removeBuilding(buildingId, Laya.Handler.create(null, dealFunc));
        }

        //任务
        static getAllTasks(handler) {
            let dealFunc = function(res) {
                if(res)
                    System._updateTasks(res.tasks);
                if(handler)
                    handler.runWith([res]);
            };
            Service.getAllTasks(Laya.Handler.create(null, dealFunc));
        }

        static getDailyTaskReward(taskId, handler) {
            let dealFunc = function(res) {
                let tasks = res.tasks;
                let bag = res.bag;
                let reward = res.rewards;
                System._updateTasks(tasks);
                System._updateCurrencyBag(bag);
                //TODO show reward
                if(handler)
                    handler.runWith([res]);
            };
            Service.getDailyTaskReward(taskId, Laya.Handler.create(null, dealFunc));
        }

        static getTrophyTaskReward(taskId, handler) {
            let dealFunc = function(res) {
                let tasks = res.tasks;
                let bag = res.bag;
                let reward = res.rewards;
                System._updateTasks(tasks);
                System._updateCurrencyBag(bag);
                //TODO show reward
                if(handler)
                    handler.runWith([res]);
            };
            Service.getTrophyTaskReward(taskId, Laya.Handler.create(null, dealFunc));
        }

        //菜谱
        static getPlayerFoodMenu(handler) {
            let dealFunc = function(res) {
                if(res)
                    System._updateFoods(res.menu);
                if(handler)
                    handler.runWith([res]);
            };
            Service.getPlayerFoodMenu(Laya.Handler.create(null, dealFunc));
        }

        static foodLevelUp(foodListId, handler) {
            let dealFunc = function(res) {
                let menu = res.menu;
                let bag = res.bag;
                System._updateFoods(menu);
                System._updateFullBag(bag);
                if(handler)
                    handler.runWith([res]);
            };
            Service.foodLevelUp(foodListId, Laya.Handler.create(null, dealFunc));
        }

        //场景同步
        static getLetterBoxInfo(handler) {
            let dealFunc = function(res) {
                let letterBox = res.letterbox;
                System._updateLetterBox(letterBox);
                if(handler)
                    handler.runWith([res]);
            };
            Service.getLetterBoxInfo(Laya.Handler.create(null, dealFunc));
        }

        static fetchLetterBox(handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let letterBox = res.letterbox;
                System._updateCurrencyBag(bag);
                System._updateLetterBox(letterBox);
                if(handler)
                    handler.runWith([res]);
            };
            Service.fetchLetterBox(Laya.Handler.create(null, dealFunc));
        }

        static updateSceneInfo(customData, rewards, petRewards, visitorRewards, handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let letterBox = res.letterbox;
                System._updateCurrencyBag(bag);
                System._updateLetterBox(letterBox);
                SyncSystem.dropCache();
                if(handler)
                    handler.runWith([res]);
            };
            Service.updateSceneInfo(customData, rewards, petRewards, visitorRewards, Laya.Handler.create(null, dealFunc));
        }

        //宠物 图鉴
        static getPetsInfo(handler) {
            let dealFunc = function(res) {
                let pets = res.playerPets;
                System._updatePets(pets);
                if(handler)
                    handler.runWith([res]);
            };
            Service.getPetsInfo(Laya.Handler.create(null, dealFunc));
        }

        static adoptPet(petId, handler) {
            let dealFunc = function(res) {
                PetSystem.doAdoptPet(petId);
                if(handler)
                    handler.runWith([res]);
            };
            Service.adoptPet(petId, Laya.Handler.create(null, dealFunc));
        }

        //长客
        static findVisitorGift(handler) {
            let dealFunc = function(res) {
                let visitorRewards = res.visitorRewards;
                System._updateVisitorGift(visitorRewards);
                if(handler)
                    handler.runWith([res]);
            };
            Service.findVisitorGift(Laya.Handler.create(null, dealFunc));
        }

        static getVisitorGiftAll(fetchType, handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let reward = res.rewards;
                System._updateCurrencyBag(bag);
                SyncSystem.clearVisitorGift();
                //TODO show reward
                if(handler)
                    handler.runWith([res]);
            };
            Service.getVisitorGiftAll(fetchType, Laya.Handler.create(null, dealFunc));
        }

        static getVisitorGiftSingle(giftId, handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let reward = res.rewards;
                let visitorRewards = res.visitorRewards;
                System._updateCurrencyBag(bag);
                System._updateVisitorGift(visitorRewards);
                //TODO show reward
                if(handler)
                    handler.runWith([res]);
            };
            Service.getVisitorGiftSingle(giftId, Laya.Handler.create(null, dealFunc));
        }

        //探险
        static getNauticalInfo(handler) {
            let dealFunc = function(res) {
                let nauticalInfo = res.nauticalInfo;
                let petIds = res.petIds;
                let nauticalFoods = res.nauticalFoods;
                let nauticalTools = res.nauticalTools;
                //TODO by pengtao
                if(handler)
                    handler.runWith([res]);
            };
            Service.getNauticalInfo(Laya.Handler.create(null, dealFunc));
        }

        static mergeNauticalFood(nauticalFoodId, nauticalFoodCount, handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                System._updateFullBag(bag);
                if(handler)
                    handler.runWith([res]);
            };
            Service.mergeNauticalFood(nauticalFoodId, nauticalFoodCount, Laya.Handler.create(null, dealFunc));
        }

        static startNauticalTrip(catIds, foodInTrip, toolInTrip, handler) {
            let dealFunc = function(res) {
                let nauticalInfo = res.nauticalInfo;
                //TODO by pengtao
                if(handler)
                    handler.runWith([res]);
            };
            Service.startNauticalTrip(catIds, Utils.map2Obj(foodInTrip), toolInTrip, Laya.Handler.create(null, dealFunc));
        }

        static finishNauticalTrip(handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let reward = res.rewards;
                System._updateFullBag(bag);
                //TODO by pengtao show reward
                if(handler)
                    handler.runWith([res]);
            };
            Service.finishNauticalTrip(Laya.Handler.create(null, dealFunc));
        }

        //钓鱼
        static getFishGameInfo(handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let gameInfo = res.gameInfo;
                System._updateCurrencyBag(bag);
                System._updateFishGameInfo(gameInfo);
                if(handler)
                    handler.runWith([res]);
            };
            Service.getFishGameInfo(Laya.Handler.create(null, dealFunc));
        }

        static playFishGame(fishingFishId, fishingBaitId, rewards, fishingFishSize, handler) {
            let dealFunc = function(res) {
                let bag = res.bag;
                let gameInfo = res.gameInfo;
                let actualRewards = res.actualRewards;
                System._updateCurrencyBag(bag);
                System._updateFishGameInfo(gameInfo);
                //TODO by zhouhuikun
                if(handler)
                    handler.runWith([res]);
            };
            Service.playFishGame(fishingFishId, fishingBaitId, rewards, fishingFishSize, Laya.Handler.create(null, dealFunc));
        }

        static getFishingFishInfo(handler) {
            let dealFunc = function(res) {
                let bag = res.fishInfos;
                //TODO by zhouhuikun
                if(handler)
                    handler.runWith([res]);
            };
            Service.getFishingFishInfo(Laya.Handler.create(null, dealFunc));
        }

    }

    class GameLoader {

        constructor() {
            this.configs = null;
            this.configIndex = 0;
        }

        static getInstance() {
            return GameLoader.instance?GameLoader.instance:GameLoader.instance = new GameLoader();
        }

        reset() {
            this.configArray = ConfigMgr.getInstance().getConfigList();
            this.configSize = ConfigMgr.getInstance().getConfigCount();
            this.configIndex = 0;
        }

        loadConfig(handler) {
            if(this.configIndex < this.configSize) {
                let config = this.configArray[this.configIndex];
                console.debug(config);
                ConfigMgr.getInstance().loadConfig(config, Laya.Handler.create(this, function(){
                    ++this.configIndex;
                    console.debug("加载数据表:" + String(this.configIndex));
                    if(this.loadingUI) {
                        this.loadingUI.setValue(this.configIndex);
                        console.debug("更新进度条UI");
                    }
                    this.loadConfig(handler);
                }));
            } else {
                console.debug("加载数据表完成");
                if (handler != null) {
                    Laya.Dialog.close("ui/LoadingDlg.scene");
                    this.loadingUI = null;
                    handler.run();
                }
            }
        }

        start(handler) {
            let outSelf = this;
            this.reset();
            ScenePathMgr.getInstance().load();
            Laya.Dialog.open("ui/LoadingDlg.scene", false, null, Laya.Handler.create(this, function(ui){
                this.loadingUI = ui;
                this.loadingUI.setMaxValue(this.configSize);
                this.loadConfig(Laya.Handler.create(this, function() {
                    if(handler != null) {
                        handler.run();
                    }
                }));
            }));
        }

    }

    /**
     * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
     * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
     * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
     */

    class LoginScene extends Laya.Scene {
        constructor() {
            super();
            this.sceneId = 0;
        }


        onEnable() {
            this.input = this.getChildByName("input");
            let loginButton = this.getChildByName("loginButton");
            loginButton.on(Laya.Event.CLICK, this, this.onLoginClick);
            let rid = Laya.LocalStorage.getItem("user_rid");
            if(rid!=null&&rid!=""){
                this.input.text = rid;
            }
        }

        onLoginClick() {
            let text=this.input.text;
            if(text){
                System.login(text , Laya.Handler.create(this, this.onLogin));
            }else{
                EventMgr.getInstance().postEvent("SHOW_TIPS", "请输入账号");
            }
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onLogin() {
            SceneMgr.getInstance().switchScene(Constants.CoffeeSceneId, Laya.Handler.create(this, function(scene1) {
                SceneMgr.getInstance().loadScene(Constants.BeachSceneId, Laya.Handler.create(this, function(scene2) {
                    scene2.visible = false;
                    Laya.SoundManager.stopSound("sound/beachWave.mp3");
                }));
            }));
        }
    }

    class CollectPop extends Laya.Dialog {
        constructor() {
            super();
            this.showPetId = "";
        }

        onEnable() {
            this.show = this.getChildByName("show");
            this.text = this.getChildByName("text");
            this.text.text = "";
            this.button = this.getChildByName("adopt");
            this.button.visible = false;
            this.button.on(Laya.Event.CLICK, this, this.onAdoptPet);
            this.number = this.getChildByName("number");
            this.times = this.getChildByName("times");
            this.showVisitTimes(0);
            this.heart1 = this.getChildByName("heart1").getChildByName("red");
            this.heart2 = this.getChildByName("heart2").getChildByName("red");
            this.heart3 = this.getChildByName("heart3").getChildByName("red");
            this.showIntimacyGrade(0);

            let close = this.getChildByName("close");
            close.on(Laya.Event.CLICK, this, this.onCloseClick);

            this.findDefaultShow();

            let config = ConfigMgr.getInstance().getConfig("Role");
            let array = new Array();
            config.forEach((listConfig, petId) => {
                array.push(petId);
            });
            this.list.array = array;
        }

        isShowPetId(petId) {
            return this.showPetId == petId;
        }
      
        findDefaultShow() {
            if(this.showPetId != "") return;

            let config = ConfigMgr.getInstance().getConfig("Role");
            for(const [petId, listConfig] of config) {
                let petData = PetSystem.getPetInfo(petId);
                if(petData != null && petData.getVisitTimes() > 0) {
                    this.showPetId = petId;
                    break;
                }
            }
        }

        //查找指定petId的cell
        findTargetCell(showPetId) {
            for(const cell of this.list.cells) {
                if(cell.dataSource == showPetId) {
                    return cell;
                }
            }
            return null;
        }

        onCloseClick() {
            this.close();
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onDisable() {
            EventMgr.getInstance().removeEvent("UPDATE_PETS", this, this.updatePets);
        }

        updatePets() {
            this.list2.refresh();
        }

        //展示新的猫咪，传入的pet是PetData类型
        showPet(pet) {
            //切换动画
            if(this.cat != null) {
                //先把原来的暂停了并销毁，再创建新的
                this.cat.stop();
                this.cat.destroy(true);
            }

            this.cat = new Laya.Skeleton();
            this.show.addChild(this.cat);
            this.cat.x = this.show.width / 2;
            this.cat.y = this.show.height / 2;
            this.cat.load(pet.getSource() + ".sk", Laya.Handler.create(this, function() {
                this.cat.play(pet.getDefaultAction(), true);
            }));

            //切换记录的展示猫咪、名字、是否可领取、造访次数、心数等信息
            this.text.text = Strings.get(pet.getName());
            this.button.visible = pet.canAdopt();

            //这里对访问次数的展示做一个限制，最大值展示99999
            let visitTimes = pet.getVisitTimes();
            if(visitTimes > 99999) visitTimes = 99999;
            this.showVisitTimes(visitTimes);

            let intimacyGrade = pet.getIntimacyGrade();
            this.showIntimacyGrade(intimacyGrade);
        }

        showVisitTimes(visitTimes) {
            this.number.value = visitTimes;
            this.times.x = 625 + visitTimes.toString().length * 60;
        }

        showIntimacyGrade(intimacyGrade) {
            this.heart1.visible = false;
            this.heart2.visible = false;
            this.heart3.visible = false;
            if(intimacyGrade > 0) {
                this.heart1.visible = true;
            }
            if(intimacyGrade > 1) {
                this.heart2.visible = true;
            }
            if(intimacyGrade > 2) {
                this.heart3.visible = true;
            }
        }

        //切换展示的猫咪，修改缓存记录，传入的pet是PetData类型
        changeShowPet(pet) {
            if(pet.getSource() == this.showPetId) {
                return;
            }

            //先把原来的 cell 切换下状态
            let oldShowCell = this.findTargetCell(this.showPetId);
            if(oldShowCell != null) oldShowCell.updateSelected(false);

            this.showPetId = pet.getId();
            this.showPet(pet);
        }

        onAdoptPet() {
            if(this.showPetId == "") {
                console.error("show pet id is empty!!!");
                return;
            }
            let petData = PetSystem.getPetInfo(this.showPetId);
            if(!petData.canAdopt()) {
                console.log("pet [" + this.showPetId + "] can not adopt");
                return;
            }
            
            let dealHandler = Laya.Handler.create(this, function() {
                this.button.visible = false;
                PetSystem.getPetInfo(this.showPetId).setAdopted(true);
            });

            System.adoptPet(this.showPetId, dealHandler);
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }
    }

    class CommonList extends Laya.List {

        constructor() {
            super();
            this.vScrollBarSkin = "";

            this.renderHandler = Laya.Handler.create(this, this.updateItem, null, false);
        }

        onSelect(index) {
        }

        updateItem(cell, index)
        {
            cell.setItem(cell.dataSource);
        }
    }

    class CollectItem extends Laya.Sprite {

        constructor() {
            super();
        }

        setItem(petId) {
            this.petId = petId;
            this.pet = PetSystem.getPetInfo(this.petId);
            this.normalPic = this.pet.getNormalPic();
            this.grayPic = this.pet.getGrayPic();

            let icon = this.getChildByName("image");
            if(this.pet.getVisitTimes() > 0) {
                //访问大于0，展示正常形象
                icon.skin = this.normalPic;
                icon.scaleX = 1.0;
                icon.scaleY = 1.0;

                //TODO 需要注册一个点击事件
                this.on(Laya.Event.CLICK, this, function() {
                    if(!this.parent.parent.parent.isShowPetId(this.petId)) {
                        this.updateSelected(true);
                        this.parent.parent.parent.changeShowPet(this.pet);
                    }
                });
            } else {
                //展示灰色形象, 需放大一倍
                icon.skin = this.grayPic;
                icon.scaleX = 2.0;
                icon.scaleY = 2.0;
            }

            if(this.parent.parent.parent.isShowPetId(petId)) {
                this.updateSelected(true);
                this.parent.parent.parent.showPet(this.pet);
            } else {
                this.updateSelected(false);
            }

            //展示新
            let newPic = this.getChildByName("new");
            if(this.pet.getNewCome() && this.pet.getVisitTimes() > 0) {
                newPic.visible = true;
            }
        }

        updateSelected(selected) {
            if(selected) {
                let selected = this.getChildByName("selected");
                let hook = this.getChildByName("hook");
                selected.visible = true;
                hook.visible = true;
            } else {
                let selected = this.getChildByName("selected");
                let hook = this.getChildByName("hook");
                selected.visible = false;
                hook.visible = false;
            }
        }

    }

    /**
     * 确认购买
     */
    class ConfirmPop extends Laya.Dialog {
        constructor() { super(); }
        onEnable() {
            let bg = this.getChildByName("bg");
            bg.on(Laya.Event.CLICK, this, this.onCloseClick);
            let confirm = this.getChildByName("confirm");
            confirm.on(Laya.Event.CLICK, this, this.onConfirmClick);
            this.showInfo(GameContext.CurrentShopBuilding);
        }

        showInfo(buildingId) {
            if(buildingId==null){
                this.close();
                return;
            }
            let item = ConfigMgr.getInstance().getItemById("Building", buildingId);
            if(item==null){
                this.close();
                return;
            }
            this.title.text = Strings.get(item.Name);
            this.desc1.text = Strings.get(item.Desc1);
            this.desc2.text = Strings.get(item.Desc2);
            this.star.text = "+"+item.StarReward;
            this.cost.text = String(item.Cost);
            this.icon.skin = item.ShopItems;
            
            this.buildingId = buildingId;
            if(!BuildingSystem.checkBuyBuildingAvailable(buildingId)) {
                this.setGray();
            }
        }

        setGray() {
            this.confirm.gray = true;
            this.confirm.disabled = true;
        }

        onOpened(param) {

        }

        onCloseClick() {
            this.close();
            // Laya.Dialog.open("ui/shopPop.scene");
        }

        onConfirmConfirmClick() {
            this.close();
            Laya.Dialog.closeAll();
            if(GameContext.CurrentShopBuildingBase) {
                if(GameContext.CurrentShopBuildingBase.checkIsHigher(this.buildingId)) {
                    BuildingSystem.buyBuildingAndPlace(this.buildingId, GameContext.CurrentShopBuildingBase.getId());
                }else{
                    BuildingSystem.buyBuilding(this.buildingId, null);
                }
                
            } else {
                let buildingId = this.buildingId;
                BuildingSystem.buyBuilding(this.buildingId, function() {
                    GameContext.PlacingBuilding = buildingId;
                    SceneMgr.getInstance().switchScene(Constants.BeachSceneId);
                    EventMgr.getInstance().postEvent("PLACE_BUILDING", buildingId);
                });
            }
            Laya.SoundManager.playSound("sound/buyItemSuccess.mp3", 1);
        }
    }

    /**
     * 菜谱
     */
    class CookBookPop extends Laya.Dialog {
        constructor() {
            super();
        }
        onEnable() {
            let close = this.getChildByName("close");
            close.on(Laya.Event.CLICK, this, this.onCloseClick);
            let config = ConfigMgr.getInstance().getConfig("FoodsList");
            let array = new Array();
            config.forEach((listConfig, foodListId) => {
                array.push(foodListId);
            });
            // function sortByOrder(a,b)
            // {
            //     return config.get(a).Order-config.get(b).Order;
            // }
            // array.sort(sortByOrder);
            this.list.array = array;
            // EventMgr.getInstance().registEvent("UPDATE_FOODS", this, this.updateFoods);

            let facility = this.getChildByName("facility");
            facility.on(Laya.Event.CLICK, this, this.onFacilityClicked); 
        }

        onDisable() {
            EventMgr.getInstance().removeEvent("UPDATE_FOODS", this, this.updateFoods);
        }

        updateFoods() {
            this.list.refresh();
        }

        onCloseClick() {
            this.close();
            // Laya.Dialog.open("ui/menu.scene");
        }
        onFacilityClicked() {
            Laya.Dialog.open("ui/shopPop.scene");
            let facility = this.getChildByName("facility");
            facility.disabled = true;
            facility.gray = false;
            let cook = this.getChildByName("shipu");
            cook.selected = false;
            cook.disabled = false;
        }
    }

    class CookBookItem extends Laya.Sprite {

        constructor() {
            super();
        }

        setItem(foodListId) {
            // console.debug("setItem foodId:", foodListId);
            this.foodListId = foodListId;
            let food = FoodSystem.getCurFoodInList(foodListId);
            let title = this.getChildByName("title");
            title.text = Strings.get(food.getName());
            let icon = this.getChildByName("icon");
            icon.skin = food.getShopItems();
            if(icon.width > 128) {
                //做一个简单的长宽限制，防止过大
                icon.height = icon.height * 128 / icon.width;
                icon.width = 128;
            }
            let upIcon = this.getChildByName("upIcon");
            upIcon.visible = false;
            this.setGray(false);
            if(food.isLocked()){
                this.setGray(true);
                this.on(Laya.Event.CLICK,this,this.showLevelUp);
            }else{
                let list = FoodSystem.getFoodList(foodListId);
                if(list[food.getLevel()]){
                    upIcon.visible = true;
                    this.on(Laya.Event.CLICK,this,this.showLevelUp);
                }else{
                    this.off(Laya.Event.CLICK,this,this.showLevelUp);
                }
            }
        }

        setGray(b) {
            if(b){
                let icon = this.getChildByName("icon");
                icon.gray = true;
                let item = this.getChildByName("item");
                item.gray = true;
            }else{
                let icon = this.getChildByName("icon");
                icon.gray = false;
                let item = this.getChildByName("item");
                item.gray = false;
            }
        }

        showLevelUp() {
            GameContext.CurrentFoodListId = this.foodListId;
            Laya.Dialog.open("ui/foodLevelUpPop.scene", false);
        }

    }

    class FishingDialog extends Laya.Dialog {

        constructor() {
            super();
        }

        onOpened(data) {
            let baitConfig = ConfigMgr.getInstance().getItemById("FishingBaits", String(data.baits));
            let resultConfig = ConfigMgr.getInstance().getItemById("FishingResult", String(data.result));
            //确定是高级鱼还是普通鱼
            //1 普通鱼 2 高级鱼
            let a = 1;
            let r = Utils.randomExt(100);
            if(r <= resultConfig.specialRate) {
                a = 2;
            }
            //确定鱼种
            let m = new Map();
            let array = new Array();
            let d = baitConfig.normal;
            if(a == 2) {
                d = baitConfig.special;
            }
            for(let i = 0 ; i < d.length; ++i) {
                let c = d[i];
                let arr = c.split(":");
                m.set(arr[1], Number(arr[0]));
            }
            let weightedSum = 0;
            m.forEach((value, key) => {
                weightedSum += Number(value);
                array.push({w: value, n: key});
            });
            array.sort(function(a, b) {
                return a.w < b.w;
            });

            let ret = Utils.calcRandomWeight(array, weightedSum);

            let fishId = ret.n;
            let fishConfig = ConfigMgr.getInstance().getItemById("FishingFishes", String(fishId));
            if(fishConfig == undefined) {
                console.debug(String(fishId));
            }
            let fishSpr = this.getChildByName("fish_img");
            fishSpr.loadImage(fishConfig.img, Laya.Handler.create(this, function() {
                fishSpr.x -= fishSpr.width/2 * fishSpr.scaleX;
                fishSpr.y -= fishSpr.height/2 * fishSpr.scaleY;
            }));

            //鱼尺寸
            let sizeMin = resultConfig.sizeIncrease[0];
            let sizeMax = resultConfig.sizeIncrease[1];
            let ss = Utils.randomExt2(Number(sizeMin*100), Number(sizeMax*100))/100.0;
            let finalSize = Number(fishConfig.size) + Math.floor(ss*Number(fishConfig.size)*Number(fishConfig.sizeTimes));

            let fishSizeLabel = this.getChildByName("fish_size");
            fishSizeLabel.text = String(fishConfig.size);

            //鱼收益
            let incomeMin = resultConfig.incomeIncrease[0];
            let incomeMax = resultConfig.incomeIncrease[1];
            let ss2 = Utils.randomExt2(Number(incomeMin*100), Number(incomeMax*100))/100.0;
            let finalIncome = Number(fishConfig.income) + Math.floor(ss2*Number(fishConfig.income)*Number(fishConfig.incomeTimes));
            let fishIncomeLabel = this.getChildByName("fish_income");
            fishIncomeLabel.text = String("+") + String(finalIncome);

            //鱼名字
            let fishNameLabel = this.getChildByName("name_text");
            fishNameLabel.text = (Strings.get(fishConfig.name) + ":");

            Laya.SoundManager.playSound("sound/fishingPerfectSuccess.mp3");
            // Laya.SoundManager.playSound("sound/fishingSuccess.mp3");
        }
        
        onEnable() {
            this.bgPanel = this.getChildByName("bg_panel");
            this.bgPanel.alpha = 0.2;
            this.bgPanel.on(Laya.Event.CLICK, this, function() {
                this.close();
                SceneMgr.getInstance().switchScene(Constants.BeachSceneId);
            });
        }

        onDisable() {
        }
    }

    /**
     * 确认购买
     */
    class FoodLevelUpPop extends Laya.Dialog {
        constructor() { super(); }
        onEnable() {
            let bg = this.getChildByName("bg");
            bg.on(Laya.Event.CLICK, this, this.onCloseClick);
            let confirm = this.getChildByName("confirm");
            confirm.on(Laya.Event.CLICK, this, this.onConfirmClick);
            this.showInfo(GameContext.CurrentFoodListId);
        }

        showInfo(foodListId) {
            if(foodListId==null){
                this.close();
                return;
            }
            let food = FoodSystem.getNextLevelUpFoodInList(foodListId);
            if(food==null){
                this.close();
                return;
            }
            this.title.text = Strings.get(food.getName());
            this.desc1.text = Strings.get(food.getDesc1());
            this.time.text = food.getCookingTime()+"s";
            this.star.text = String(food.getLimit());
            this.fish.text = "+"+food.getIncome();
            this.cost.text = String(food.getCost());
            this.icon.skin = food.getShopItems();
            
            this.foodListId = foodListId;
            this.setGray(FoodSystem.checkLevelUpUnAvailable(foodListId));
        }

        setGray(ret) {
            if(ret){
                this.confirm.gray = true;
                this.confirm.disabled = true;
                this.reason.visible = true;
                this.reason.text = ret;
                this.reason.x = 563.5 - this.reason.width/2;
            }else{
                this.confirm.gray = false;
                this.confirm.disabled = false;
                this.reason.visible = false;
            }
        }

        onOpened(param) {

        }

        onCloseClick() {
            this.close();
            // Laya.Dialog.open("ui/shopPop.scene");
        }

        onConfirmClick() {
            this.close();
            Laya.Dialog.closeAll();
            
            let foodListId = this.foodListId;
            FoodSystem.foodLevelUp(foodListId);
            
        }
    }

    class LoadingUI extends Laya.Dialog {

        constructor() {
            super();
            this.animCat = null;
            this.bar = null;
            this.bar2 = null;
            this.bar3 = null;
            this.barSpr = null;
            this.max = 0;

            this.maxValue = 0;
            this.value = 0;
        }

        onEnable() {
            this.barSpr = this.getChildByName("bar");
            this.max = this.barSpr.width;
            this.closeEffect = null;
            this.popupEffect = null;
            this.animCat = new Laya.Skeleton();
            this.animCat.load("loading/loading1.sk", Laya.Handler.create(this, function() {
                this.animCat.x = 1827/2;
                this.animCat.y = 2436/2;
                this.animCat.play("1", true);
            }));
            this.addChild(this.animCat);

            this.bar3 = new Laya.Skeleton();
            this.bar3.load("loading/loading1.sk", Laya.Handler.create(this, function() {
                this.bar3.x = 1827/2;
                this.bar3.y = 1600;
                this.bar3.play("4", true);
            }));
            this.addChild(this.bar3);

            this.bar = new Laya.Skeleton();
            this.bar.load("loading/loading1.sk", Laya.Handler.create(this, function() {
                this.bar.x = 0;
                this.bar.y = 50;
                this.bar.play("2", true);
            }));
            this.barSpr.addChild(this.bar);

            this.bar2 = new Laya.Skeleton();
            this.bar2.load("loading/loading1weiba.sk", Laya.Handler.create(this, function() {
                this.bar2.y = 50;
                this.bar2.play("3", true);
            }));
            this.barSpr.addChild(this.bar2);
            this.setValue(0);
        }

        onDisable() {
        }

        setMaxValue(v) {
            this.maxValue = v;
        }

        setValue(v) {
            this.value = v;
            let a = this.value/this.maxValue;
            this.barSpr.width = this.max*a;
            this.bar.x = this.barSpr.width - 3;
        }


    }

    /**
     * 菜单
     */
    class Menu extends Laya.Dialog {
        constructor() { super(); this.autoDestroyAtClosed = true;}
        onEnable() {
            // let close = this.getChildByName("close");
            // close.on(Laya.Event.CLICK, this, this.onCloseClick);
            let shop = this.getChildByName("shopMenu").getChildByName("menu");
            shop.on(Laya.Event.CLICK, this, this.onShopClick);
            let scene = this.getChildByName("sceneMenu").getChildByName("menu");
            scene.on(Laya.Event.CLICK, this, this.onSceneMenuClick);
            let cook = this.getChildByName("cookbookMenu").getChildByName("menu");
            cook.on(Laya.Event.CLICK, this, this.onCookBookMenuClick);
            let illustration = this.getChildByName("illustrationMenu").getChildByName("menu");
            illustration.on(Laya.Event.CLICK, this, this.onIllustrationMenuClick);
            let share = this.getChildByName("shareMenu").getChildByName("menu");
            share.on(Laya.Event.CLICK, this, this.onShareMenuClick);
            let photo = this.getChildByName("photoMenu").getChildByName("menu");
            photo.on(Laya.Event.CLICK, this, this.onPhotoMenuClick);
            let setting = this.getChildByName("settingMenu").getChildByName("menu");
            setting.on(Laya.Event.CLICK, this, this.onSettingMenuClick);
        }
        
        onCloseClick() {
            this.close();
        }

        onShopClick() {
            Laya.Dialog.open("ui/shopPop.scene");
        }

        onSceneMenuClick() {
            // Laya.Dialog.open("ui/sceneSelectDlg.scene", true, "haha", Laya.Handler.create(this, this._onBufferLoaded,[1, 2]), Laya.Handler.create(this, this._onBufferLoaded,[3, 4]));
            Laya.Dialog.open("ui/SceneSelectDlg.scene", true, 1);
        }

        onCookBookMenuClick() {
            Laya.Dialog.open("ui/cookbookPop.scene");
        }

        onIllustrationMenuClick() {
            // Laya.Dialog.open("ui/shopPop.scene");
            EventMgr.getInstance().postEvent("SHOW_TIPS", "图鉴还未开放");
        }

        onShareMenuClick() {
            // Laya.Dialog.open("ui/shopPop.scene");
            EventMgr.getInstance().postEvent("SHOW_TIPS", "分享还未开放");
        }

        onPhotoMenuClick() {
            // Laya.Dialog.open("ui/shopPop.scene");
            EventMgr.getInstance().postEvent("SHOW_TIPS", "相机还未开放");
        }

        onSettingMenuClick() {
            // Laya.Dialog.open("ui/shopPop.scene");
            EventMgr.getInstance().postEvent("SHOW_TIPS", "设置还未开放");
        }

        _onBufferLoaded(proto, ConfigName) {
        }
    }

    class MultiLoginDialog extends Laya.Dialog {
        constructor() {
            super();
        }

        onEnable() {
            this.bgPanel = this.getChildByName("bg_panel");
            this.bgPanel.alpha = 0.2;
            this.bgPanel.on(Laya.Event.CLICK, this, function() {
                this.close();
                EventMgr.getInstance().postEvent("NETWORD_DISCONNECT");
            });
        }
    }

    class ViewAlign extends Laya.Script {

        constructor() {
            super();
        }

        onStart() {
            this.owner.width = Laya.Browser.width * 2436 / Laya.Browser.height;
        }
    }

    /**
    * 确认放置
    */
    class PlacePop extends Laya.Dialog {
        constructor() { super(); }
        onEnable() {
            let bg = this.getChildByName("bg");
            bg.on(Laya.Event.CLICK, this, this.onCloseClick);
            let confirm = this.getChildByName("confirm");
            confirm.on(Laya.Event.CLICK, this, this.onConfirmClick);
            this.showInfo(GameContext.CurrentShopBuilding);
        }

        showInfo(buildingId) {
            if(buildingId==null){
                this.close();
                return;
            }
            let item = ConfigMgr.getInstance().getItemById("Building", buildingId);
            if(item==null){
                this.close();
                return;
            }
            this.title.text = Strings.get(item.Name);
            this.desc1.text = Strings.get(item.Desc1);
            this.desc2.text = Strings.get(item.Desc2);
            this.star.text = "+"+item.StarReward;
            //    this.cost.text = String(item.Cost);
            this.icon.skin = item.ShopItems;
            
            this.buildingId = buildingId;

            if(GameContext.CurrentShopBuildingBase&&GameContext.CurrentShopBuildingBase.getBuildingId()==this.buildingId) {
                this.cost = "已放置";
                let confirm = this.getChildByName("confirm");
                confirm.disabled = true;
                confirm.gray = false;
            }
        }

        setGray() {
            this.confirm.gray = true;
            this.confirm.disabled = true;
        }

        onOpened(param) {
        }

        onCloseClick() {
            this.close();
            // Laya.Dialog.open("ui/shopPop.scene");
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onConfirmClick() {
            this.close();
            Laya.Dialog.closeAll();
            if(GameContext.CurrentShopBuildingBase){
                BuildingSystem.placeBuilding(this.buildingId, GameContext.CurrentShopBuildingBase.getId());
            }else{
                GameContext.PlacingBuilding = this.buildingId;
                SceneMgr.getInstance().switchScene(Constants.BeachSceneId);
                EventMgr.getInstance().postEvent("PLACE_BUILDING", this.buildingId);
            }
            Laya.SoundManager.playSound("sound/buyItemSuccess.mp3", 1);
        }
    }

    class SceneSelectDlg extends Laya.Dialog {

        constructor() { 
            super();
            this.autoDestroyAtClosed = true;
        }
        
        onEnable() {
            let currentSceneId = SceneMgr.getInstance().getCurrentSceneId();
            for(let i = 1 ; i<4 ; ++i) {
                let button = this.getChildByName("button_"+String(i));
                button.tag = i;
                button.on(Laya.Event.CLICK, this, this.onClickBtn);
                if(currentSceneId==i){
                    this.moveSelect(button);
                }
            }
        }

        moveSelect(button) {
            this.select.y = button.y-10;
        }

        onOpened(param) {
        }

        onClickBtn(e) {
            if(SceneMgr.getInstance().getSceneUrl(e.currentTarget.tag)!=null){
                SceneMgr.getInstance().switchScene(e.currentTarget.tag);
                this.moveSelect(e.currentTarget);
                this.close();
            }else{
                
            }
        }

        onDisable() {
        }
    }

    /**
     * 商店
     */
    class ShopPop extends Laya.Dialog {
        constructor() {
            super(); 
        }
        onEnable() {
            let close = this.getChildByName("close");
            close.on(Laya.Event.CLICK, this, this.onCloseClick);

            let facility = this.getChildByName("facilityButton");
            facility.on(Laya.Event.CLICK, this, this.onFacilityClicked);
            // facility.disabled = true;
            // facility.gray = false;

            let component = this.getChildByName("componentButton");
            component.on(Laya.Event.CLICK, this, this.onComponentClicked);
            if(SceneMgr.getInstance().getCurrentSceneId()==1){
                this.list.setListType(1);
                component.disabled = true;
                component.gray = false;
                component.selected = true;
                facility.selected = false;
                facility.disabled = false;
            }else{
                this.list.setListType(2);
                facility.disabled = true;
                facility.gray = false;
                facility.selected = true;
                component.selected = false;
                component.disabled = false;

            }
            let cook = this.getChildByName("shipu");
            cook.on(Laya.Event.CLICK, this, this.onCookBookClicked);    
        }

        onCloseClick() {
            this.close();
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
            // Laya.Dialog.open("ui/menu.scene");
        }

        onComponentClicked() {
            let facility = this.getChildByName("facilityButton");
            facility.selected = false;
            facility.disabled = false;
            let component = this.getChildByName("componentButton");
            component.disabled = true;
            component.gray = false;

            this.list.setListType(1);
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onFacilityClicked() {
            let facility = this.getChildByName("facilityButton");
            facility.disabled = true;
            facility.gray = false;
            let component = this.getChildByName("componentButton");
            component.selected = false;
            component.disabled = false;

            this.list.setListType(2);
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onCookBookClicked() {
            Laya.Dialog.open("ui/cookbookPop.scene");
            let cook = this.getChildByName("shipu");
            cook.disabled = true;
            cook.gray = false;
            let facility = this.getChildByName("facility");
            facility.selected = false;
            facility.disabled = false;
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }
    }

    class ShopList extends Laya.List {

        constructor() {
    		super();
    		this.repeatX = 1;
    		this._type = 0;
    		// this.vScrollBarSkin = "";
    		// this.repeatY = 4;
    		// this.vScrollBarSkin = "shopui/gundongtiao2.png";
    		// this.itemRender = ShopItem;
    		// this.selectEnable = true;
    		// this.selectHandler = Laya.Handler.create(this, this.onSelect);

    		this.renderHandler = Laya.Handler.create(this, this.updateItem, null, false);

    		Laya.loader.load("prefab/ui/CommonComponentItem.json", Laya.Handler.create(this, this.onPrefabLoaded), null, Laya.Loader.JSON);
    	}

    	onEnable() {
    		// console.debug("scrollbar", this.scrollBar);
    		this.scrollBar.sizeGrid = "8,6,8,6,0";
    	}

        setListType(type) {
    		if(!this._itemRender1){
    			this._itemRender1 =this.itemRender;
    		}
    		if(this._type==type){
    			return;
    		}
    		this._type=type;
    		if(type==1){
    			this.x = 454;
    			this.repeatX = 1;
    			this.array = null;
    			this.itemRender = this._itemRender1;
    			let data = BuildingSystem.getLocationsByBaseType(1);
    			this.array = data;
    			// this.repeatY = data.length;
    		}else{
    			if(this._itemRender2){
    				this.array = null;
    				this.itemRender = this._itemRender2;
    				this.setCommonComponentData();
    			}
    		}
    	}

    	setCommonComponentData() {
    		this.x = 454;
    		this.repeatX = 3;
    		let data = BuildingSystem.getLocationsByBaseType(2);
    		let list = new Array();
    		data.forEach(element=>{
    			list = list.concat(element.getFixedBuildings());
    		});
    		let ret = Array.from(new Set(list));
    		// let index = ret.indexOf("");
    		// if(index>-1){
    		// 	ret.splice(index, 1);
    		// }

    		this.array = ret;
    	}

    	onPrefabLoaded(prefabJson) {
            let prefab = new Laya.Prefab();
            prefab.json = prefabJson;
    		this._prefab = prefab;
    		this._itemRender2 = function() {
    			let buildingItem = Laya.Pool.getItemByCreateFun("CommonComponentItem", prefab.create, prefab);
    			return buildingItem;
    		};
    		if(this._type==2){
    			this.array = null;
    			this.itemRender = this._itemRender2;
    			this.setCommonComponentData();
    		}
        }

        onSelect(index) {
        }

        updateItem(cell, index)
    	{
    		cell.setItem(cell.dataSource);
    	}
    }

    let NameMap = {"101":"【咖啡屋】猫窝",
                   "102":"【咖啡屋】猫爬架",
                   "103":"【咖啡屋】猫爪挠（左）",
                   "104":"【咖啡屋】猫爪挠（右）",
                   "105":"【咖啡屋】坐垫（左）",
                   "106":"【咖啡屋】坐垫（右）",
                   "107":"【咖啡屋】座椅（左）",
                   "108":"【咖啡屋】座椅（中）",
                   "109":"【咖啡屋】座椅（右）",
                   "110":"【咖啡屋】柜台"};

    class ShopItem extends Laya.Box {

        constructor() { 
            super();
        }
        
        setItem(location) {
            this.location = location;
            
            let title = this.getChildByName("title");
            title.text = Strings.get(location.getListName());
            // title.text = NameMap[baseId];
            Laya.loader.load("prefab/ui/SceneComponentItem.json", Laya.Handler.create(this, this.onPrefabLoaded), null, Laya.Loader.JSON);
        }

        onPrefabLoaded(prefabJson) {
            let prefab = new Laya.Prefab();
            prefab.json = prefabJson;
            let x = 10;
            let y = 145;
            let buildings = this.location.getFixedBuildings();
            buildings.forEach(element => {
                let buildingItem = Laya.Pool.getItemByCreateFun("SceneComponentItem", prefab.create, prefab);
                buildingItem.x = x;
                buildingItem.y = y;
                x = x +300;
                buildingItem.setBuildingId(element, this.location);
                this.addChild(buildingItem);
            });

            
        }
    }

    /**
     * 任务 目标
     */
    class TaskPop extends Laya.Dialog {
        constructor() {
            super();
        }
        onEnable() {
            let close = this.getChildByName("close");
            close.on(Laya.Event.CLICK, this, this.onCloseClick);
            // this.list.array = [1,2,3,4,5,7,9,10,12];

            let achievement = this.getChildByName("achievementBtn");
            achievement.on(Laya.Event.CLICK, this, this.onAchievementClicked);
            // achievement.disabled = true;
            // achievement.gray = false;
            let achievementRed = achievement.getChildByName("redPoint");
            achievementRed.setCheckFunc(TaskSystem.hasCompletedTrophyTask);
            achievementRed.refreshRedPoint();

            let daily = this.getChildByName("dailyBtn");
            daily.on(Laya.Event.CLICK, this, this.onDailyClicked);
            // daily.disabled = true;
            // daily.gray = false;

            let dailyRed = daily.getChildByName("redPoint");
            dailyRed.setCheckFunc(TaskSystem.hasCompletedDailyTask);
            dailyRed.refreshRedPoint();

            this.onTaskRefresh();

            TaskSystem.getAllTasks(Laya.Handler.create(this, this.onTaskRefresh));
            EventMgr.getInstance().registEvent("UPDATE_TASKS", this, this.updateTasks);
        }

        onDisable() {
            EventMgr.getInstance().removeEvent("UPDATE_TASKS", this, this.updateTasks);
        }

        onTaskRefresh() {
            let achievement = this.getChildByName("achievementBtn");
            let daily = this.getChildByName("dailyBtn");
            if(TaskSystem.hasCompletedDailyTask()){
                daily.selected = true;
                this.onDailyClicked();
            }else if(TaskSystem.hasCompletedTrophyTask()) {
                achievement.selected = true;
                this.onAchievementClicked();
            }else{
                // achievement.selected = true;
                // this.onAchievementClicked();
                daily.selected = true;
                this.onDailyClicked();
            }
        }

        updateTasks() {
            this.list.refresh();
        }

        onCloseClick() {
            this.close();
        }

        onDailyClicked() {
            let achievement = this.getChildByName("achievementBtn");
            achievement.selected = false;
            achievement.disabled = false;
            let daily = this.getChildByName("dailyBtn");
            daily.disabled = true;
            daily.gray = false;

            let config = ConfigMgr.getInstance().getConfig("TaskList");
            let array = new Array();
            config.forEach((listConfig, key) => {
                if(listConfig.TaskType==Constants.TaskType.kDaily)
                    array.push(key);
            });
            function sortByOrder(a,b)
            {
                return config.get(a).Order-config.get(b).Order;
            }
            array.sort(sortByOrder);
            this.list.array = array;
        }

        onAchievementClicked() {
            let achievement = this.getChildByName("achievementBtn");
            achievement.disabled = true;
            achievement.gray = false;
            let daily = this.getChildByName("dailyBtn");
            daily.selected = false;
            daily.disabled = false;

            let config = ConfigMgr.getInstance().getConfig("TaskList");
            let array = new Array();
            config.forEach((listConfig, key) => {
                if(listConfig.TaskType==Constants.TaskType.kTrophy)
                    array.push(key);
            });
            function sortByOrder(a,b)
            {
                return config.get(a).Order-config.get(b).Order;
            }
            array.sort(sortByOrder);
            this.list.array = array;
        }
    }

    class RedPoint extends Laya.Sprite {

        constructor() {
            super();
            this.otherRed = null;       //这个红点关联的其他红点，例如task的会关联到updown
        }

        setCheckFunc(func) {
            this.checkFunc = func;
        }

        refreshRedPoint(data) {
            if(this.checkFunc) {
                let ret = this.checkFunc();//用handler总是在这行莫名报错，所以换成了func
                this.visible = ret?true:false;
                if(this.otherRed != null) {
                    EventMgr.getInstance().postEvent("REDPOINT_REFRESH", [this.otherRed]);
                }
            }
        }

        onStart() {
            this.visible = false;
        }

    }

    class RedPointType extends Laya.Script {

        constructor() {
            super();
            /** @prop {name:redPointType1, tips:"红点注册类型", type:int, default:-1}*/
            this.redPointType1 = -1;
            /** @prop {name:redPointType2, tips:"红点注册类型", type:String, default:null}*/
            this.redPointType2 = null;
            /** @prop {name:otherRed, tips:"其他关联红点", type:String, default:null}*/
            this.otherRed = null;
        }

        onEnable() {
            if(this.redPointType1!=-1)
                RedPointSystem.registerObject(this.redPointType1, this.owner);
            if(this.redPointType2!=null&&this.redPointType2!="null")
                RedPointSystem.registerObject(this.redPointType2, this.owner);
            if(this.otherRed!=null&&this.otherRed!="null")
                this.owner.otherRed = this.otherRed;
        }

        onDisable() {
            if(this.redPointType1!=-1)
                RedPointSystem.unregisterObject(this.redPointType1, this.owner);
            if(this.redPointType2!=null&&this.redPointType2!="null")
                RedPointSystem.unregisterObject(this.redPointType2, this.owner);
        }
    }

    class TaskItem extends Laya.Sprite {

        constructor() {
            super();
        }

        onEnable() {
            let receive = this.getChildByName("receive");
            receive.on(Laya.Event.CLICK, this, this.receive);
        }

        setItem(taskListId) {
            this.taskListId = taskListId;
            let task = TaskSystem.getCurrentTask(taskListId);
            this.taskId = task.getId();

            let title = this.getChildByName("title");
            title.text = Strings.get(task.getName());
            let desc = this.getChildByName("desc");
            desc.title = Strings.get(task.getDesc());
            let bar = this.getChildByName("bar");
            bar.value = task.getCurrent()/ task.getTarget();
            let progress = this.getChildByName("progress");
            progress.text = Strings.short(task.getCurrent())+"/"+Strings.short(task.getTarget());
            let reward = this.getChildByName("reward");
            reward.text = "+"+Strings.short(task.getReward());
            let rewardIcon = this.getChildByName("rewardIcon");
            if(task.getRewardType()==Constants.RewardType.FISH){
                rewardIcon.texture = "topui/yugan.png";
            }else{
                rewardIcon.texture = "topui/xingxing.png";
            }
            progress.x = 460-(progress.width>50?progress.width/2:progress.width/2+7);
            reward.x = 545;
            rewardIcon.x = 491;
            if(reward.x+reward.width>642){
                reward.x = 642-reward.width;
                rewardIcon.x = 491+reward.x-545;
            }

            let received = this.getChildByName("received");
            let receive = this.getChildByName("receive");
            let progressing = this.getChildByName("progressing");
            progressing.visible = task.getStatus()==Constants.TaskStatus.kRunning;
            received.visible = task.getStatus()==Constants.TaskStatus.kRewarded;
            receive.visible = task.getStatus()==Constants.TaskStatus.kCompleted;
        }

        receive() {
            let config = ConfigMgr.getInstance().getItemById("TaskList", this.taskListId);
            if(config.TaskType==Constants.TaskType.kDaily)
                TaskSystem.getDailyTaskReward(this.taskId);
            else
                TaskSystem.getTrophyTaskReward(this.taskId);
        }

    }

    /**
     * 任务 目标
     */
    class VisitorGiftPop extends Laya.Dialog {
        constructor() {
            super();
        }
        onEnable() {
            let close = this.getChildByName("close");
            close.on(Laya.Event.CLICK, this, this.onCloseClick);


            this.common = this.getChildByName("commonBtn");
            this.common.on(Laya.Event.CLICK, this, this.onCommonClicked);

            this.double = this.getChildByName("doubleBtn");
            this.double.on(Laya.Event.CLICK, this, this.onDoubleClicked);


            this.fish = this.getChildByName("fish");
            this.star = this.getChildByName("star");

            this.refresh();

            SyncSystem.findVisitorGift(Laya.Handler.create(this, this.refresh));
            EventMgr.getInstance().registEvent("FETCH_ONE_VISITOR_GIFT", this, this._fetchOne);
        }

        onDisable() {
            EventMgr.getInstance().removeEvent("FETCH_ONE_VISITOR_GIFT", this, this._fetchOne);
        }

        onCloseClick() {
            this.close();
        }

        refresh() {
            let fish = 0;
            let star = 0;
            let gifts = SyncSystem.getVisitorGifts();
            if(gifts) {
                let array = new Array();
                for(const gift of gifts) {
                    if(!gift.fetched) {
                        array.push(gift);
                        let reward = gift.reward;
                        if(reward[1]==Constants.RewardType.FISH){
                            fish +=reward[0];
                        }else if(reward[1]==Constants.RewardType.STAR) {
                            star +=reward[0];
                        }
                    }
                }

                this.list.array = array;
            }

            this.fish.text = "X"+String(fish);
            this.star.text = "X"+String(star);

            if(fish==0&&star==0) {
                this.common.disabled = true;
                this.double.disabled = true;
            }else{
                this.common.disabled = false;
                this.double.disabled = false;
            }
        }

        _fetchOne() {
            let fish = 0;
            let star = 0;
            if(this.list.array) {
                for(const gift of this.list.array) {
                    if(!gift.fetched) {
                        let reward = gift.reward;
                        if(reward[1]==Constants.RewardType.FISH){
                            fish +=reward[0];
                        }else if(reward[1]==Constants.RewardType.STAR) {
                            star +=reward[0];
                        }
                    }
                }
            }

            this.fish.text = "X"+String(fish);
            this.star.text = "X"+String(star);

            if(fish==0&&star==0) {
                this.common.disabled = true;
                this.double.disabled = true;
            }else{
                this.common.disabled = false;
                this.double.disabled = false;
            }
        }

        _fetchAll() {
            for(const gift of this.list.array) {
                gift.fetch();
            }
            this.list.refresh();

            this.fish.text = "X0";
            this.star.text = "X0";

            this.common.disabled = true;
            this.double.disabled = true;
        }

        onCommonClicked() {
            SyncSystem.getVisitorGiftAll(Constants.FetchType.DIRECT, Laya.Handler.create(this, this._fetchAll));
        }

        onDoubleClicked() {
            SyncSystem.getVisitorGiftAll(Constants.FetchType.AD, Laya.Handler.create(this, this._fetchAll));
        }
    }

    class VisitorGiftItem extends Laya.Sprite {

        constructor() {
            super();
        }

        onEnable() {
            this.receive = this.getChildByName("receive");
            this.receive.on(Laya.Event.CLICK, this, this.fetch);
        }

        setItem(visitorReward) {
            this.visitorReward = visitorReward;
            let catConfig = ConfigMgr.getInstance().getItemById("Role", visitorReward.catConfigId);
            let buildingConfig = ConfigMgr.getInstance().getItemById("Building", visitorReward.buildingId);

            this.titleText = this.getChildByName("title");
            this.headIcon = this.getChildByName("headIcon");
            this.building = this.getChildByName("building");
            this.reward = this.getChildByName("reward");
            this.rewardIcon = this.getChildByName("rewardIcon");
            this.received = this.getChildByName("received");


            this.titleText.text = Strings.get(catConfig.Name);

            // this.headIcon.skin = catConfig.HeadIcon;
            this.building.skin = buildingConfig.ShopItems;
            // this.building.pivotX

            let reward = visitorReward.reward;
            this.reward.text = "+"+Strings.short(reward[0]);

            if(reward[1]==Constants.RewardType.FISH){
                this.rewardIcon.texture = "topui/yugan.png";
            }else{
                this.rewardIcon.texture = "topui/xingxing.png";
            }



            this.receive.visible = visitorReward.fetched?false:true;
            this.received.visible = visitorReward.fetched?true:false;
        }

        fetch() {
            this.receive.disabled = true;
            SyncSystem.getVisitorGiftSingle(this.visitorReward.id, Laya.Handler.create(this, this.onFetch));
        }

        onFetch() {
            console.debug("onFetch");
            this.visitorReward.fetch();
            this.receive.visible = false;
            this.received.visible = true;
            EventMgr.getInstance().postEvent("FETCH_ONE_VISITOR_GIFT");
        }
    }

    class ArrowUI extends Laya.Script {

        constructor() {
            super();
        }

        switchBtn() {
            let sceneId =  SceneMgr.getInstance().getCurrentSceneId();
            this.leftBtn = this.owner.getChildByName("leftBtn");
            this.rightBtn = this.owner.getChildByName("rightBtn");
            if(sceneId == Constants.CoffeeSceneId) {
                this.leftBtn.visible = false;
                this.rightBtn.visible = true;
            } else if(sceneId == Constants.BeachSceneId) {
                this.leftBtn.visible = true;
                this.rightBtn.visible = false;
            }
        }

        onEnable() {
            this.leftBtn = this.owner.getChildByName("leftBtn");
            this.rightBtn = this.owner.getChildByName("rightBtn");
            this.leftBtn.on(Laya.Event.CLICK, this, function() {
                Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
                SceneMgr.getInstance().switchScene(Constants.CoffeeSceneId);
            });

            this.rightBtn.on(Laya.Event.CLICK, this, function() {
                Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
                SceneMgr.getInstance().switchScene(Constants.BeachSceneId);
            });

            this.switchBtn();
            EventMgr.getInstance().registEvent("switch_arrow_btn", this, this.switchBtn);
        }

        onDisable() {
        }
    }

    /**
     * 顶部UI
     */
    class BottomUINew extends Laya.Script {
        constructor() {
            super();
        }

        onEnable() {
            this.shop = this.owner.getChildByName("shop");
            this.shop.on(Laya.Event.CLICK, this, this.onShopClick);
        }

        onShopClick() {
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
            Laya.Dialog.open("ui/shopPop.scene");
        }
    }

    class BuildingItem extends Laya.Sprite {

        constructor() { 
            super(); 
        }

        setItem(buildingId) {
            this.setBuildingId(buildingId, null);
        }
        
        setBuildingId(buildingId, location) {
            if(buildingId==null){
                return;
            }
            let item = ConfigMgr.getInstance().getItemById("Building", buildingId);
            if(item==null){
                return;
            }
            this.buildingId = buildingId;
            this.location = location;
            this.item = this.getChildByName("item");
            let title = this.getChildByName("title");
            title.text = Strings.get(item.Name);
            title.width = 140;
            title.align = "center";

            let icon = this.getChildByName("icon");
            let char = item.ShopItems.substr(item.ShopItems.lastIndexOf(".")-1,1);
            
            icon.skin = item.ShopItems;
            if(icon.width > 128) {
                //做一个简单的长宽限制，防止过大
                icon.width = 128;
                icon.height = icon.height * 128 / icon.width;
            }
            if(!BuildingSystem.checkBuildingUnlocked(buildingId)){
                // this.disable();
                this.on(Laya.Event.CLICK,this,this.showUnlock, [item.Limit]);
            }else{
                if(BuildingSystem.hasBuildingDataByBid(buildingId)){
                    let buildingData = BuildingSystem.getBuildingDataByBid(buildingId);
                    if(location && buildingData.getLocationData()){
                        //已经放置
                    }
                    this.on(Laya.Event.CLICK,this,this.showPlacePop);
                }else{
                    this.on(Laya.Event.CLICK,this,this.showBuyPop);
                }
            }
            
        }

        disable(){
            let icon = this.getChildByName("icon");
            // icon.visible=false;
            // this.texture = "shopui/xiaomianban2.png";
            this.disabled = true;
        }

        showUnlock(limit) {
            EventMgr.getInstance().postEvent("SHOW_TIPS", "需要"+limit+"星星才能解锁");
        }

        showBuyPop() {
            if(this.disabled==true){
                return;
            }
            GameContext.CurrentShopBuildingBase = this.location;
            GameContext.CurrentShopBuilding = this.buildingId;
            Laya.Dialog.open("ui/confirmPop.scene", false);
        }

        showPlacePop() {
            if(this.disabled==true){
                return;
            }
            GameContext.CurrentShopBuildingBase = this.location;
            GameContext.CurrentShopBuilding = this.buildingId;
            Laya.Dialog.open("ui/placePop.scene", false);
        }
    }

    /**
     * 左侧下拉UI
     */
    class LeftUI extends Laya.Tree {
        constructor() {
            super();
        }

        onEnable() {
            this.status = 1;    //status 为1是收起up状态，2是放下down状态

            this.setting = this.getChildByName("settings");
            this.setting.on(Laya.Event.CLICK, this, this.onSettingMenuClick);
            this.photo = this.getChildByName("photo");
            this.photo.on(Laya.Event.CLICK, this, this.onPhotoMenuClick);
            this.share = this.getChildByName("share");
            this.share.on(Laya.Event.CLICK, this, this.onShareMenuClick);
            this.collect = this.getChildByName("collect");
            this.collect.on(Laya.Event.CLICK, this, this.onCollectMenuClick);
            this.task = this.getChildByName("task");
            this.task.on(Laya.Event.CLICK, this, this.onTaskClick);
            this.updown = this.getChildByName("updown");
            this.updown.on(Laya.Event.CLICK, this, this.onUpDownClick);
            
            // console.debug("_children", this.task._children);
            let taskRed = this.task.getChildByName("redPoint");
            taskRed.setCheckFunc(TaskSystem.hasCompletedTask);
            taskRed.refreshRedPoint();

            let updownRed = this.updown.getChildByName("redPoint");
            updownRed.setCheckFunc(this.checkUpdownRed);
            updownRed.refreshRedPoint();

            this.updateStatus();

            this.downTimeline = new Laya.TimeLine();
            this.upTimeline = new Laya.TimeLine();
            this.createDownTimerLine();
            this.createUpTimerLine();
        }

        //创建展开的动画
        createDownTimerLine() {
            this.downTimeline.to(this.updown, {y: -7}, 200, null, 0)
                            .to(this.updown, {y: 1370}, 466, null, 0)
                            .to(this.updown, {y: 1248}, 100, null, 0)
                            .to(this.updown, {y: 1235}, 67, null, 0)
                            .to(this.updown, {y: 1290}, 300, null, 0)
                            .to(this.setting, {y: 0}, 466, null, -933)
                            .to(this.setting, {y: -7}, 100, null, -467)
                            .to(this.setting, {y: 0}, 200, null, -367)
                            .to(this.photo, {y: 242}, 466, null, -933)
                            .to(this.photo, {y: 214}, 100, null, -467)
                            .to(this.photo, {y: 228}, 200, null, -367)
                            .to(this.share, {y: 525}, 466, null, -933)
                            .to(this.share, {y: 465}, 100, null, -467)
                            .to(this.share, {y: 493}, 200, null, -367)
                            .to(this.collect, {y: 802}, 466, null, -933)
                            .to(this.collect, {y: 712}, 100, null, -467)
                            .to(this.collect, {y: 758}, 200, null, -367)
                            .to(this.task, {y: 1082}, 466, null, -933)
                            .to(this.task, {y: 960}, 100, null, -467)
                            .to(this.task, {y: 1023}, 200, null, -367);

            this.downTimeline.on(Laya.Event.COMPLETE, this, this.onComplete);
        }

        //创建收拢的动画
        createUpTimerLine() {
            this.upTimeline.to(this.updown, {y: 1235}, 300, null, 0)
                            .to(this.updown, {y: 1248}, 67, null, 0)
                            .to(this.updown, {y: 1370}, 100, null, 0)
                            .to(this.updown, {y: -7}, 466, null, 0)
                            .to(this.updown, {y: 0}, 200, null, 0)
                            .to(this.setting, {y: -7}, 200, null, -766)
                            .to(this.setting, {y: 0}, 100, null, -566)
                            .to(this.setting, {y: -228}, 466, null, -466)
                            .to(this.photo, {y: 214}, 200, null, -766)
                            .to(this.photo, {y: 242}, 100, null, -566)
                            .to(this.photo, {y: -265}, 466, null, -466)
                            .to(this.share, {y: 465}, 200, null, -766)
                            .to(this.share, {y: 525}, 100, null, -566)
                            .to(this.share, {y: -265}, 466, null, -466)
                            .to(this.collect, {y: 712}, 200, null, -766)
                            .to(this.collect, {y: 802}, 100, null, -566)
                            .to(this.collect, {y: -265}, 466, null, -466)
                            .to(this.task, {y: 960}, 200, null, -766)
                            .to(this.task, {y: 1082}, 100, null, -566)
                            .to(this.task, {y: -265}, 466, null, -466);

            this.upTimeline.on(Laya.Event.COMPLETE, this, this.onComplete);
        }

        onSettingMenuClick() {
            // Laya.Dialog.open("ui/shopPop.scene");
            EventMgr.getInstance().postEvent("SHOW_TIPS", "设置还未开放");
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onPhotoMenuClick() {
            // Laya.Dialog.open("ui/shopPop.scene");
            EventMgr.getInstance().postEvent("SHOW_TIPS", "相机还未开放");
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onShareMenuClick() {
            // Laya.Dialog.open("ui/shopPop.scene");
            EventMgr.getInstance().postEvent("SHOW_TIPS", "分享还未开放");
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onCollectMenuClick() {
            System.getPetsInfo(Laya.Handler.create(null, Laya.Dialog.open("ui/CollectPop.scene")));
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onTaskClick() {
            Laya.Dialog.open("ui/taskPop.scene");
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        onUpDownClick() {
            if(this.status == 1) {
                this.downTimeline.play();
            } else {
                this.upTimeline.play();
            }
            Laya.SoundManager.playSound("sound/clickSound.mp3", 1);
        }

        updateStatus() {
            if(this.status == 1) {
                this.setting.y = -228;
                this.photo.y = -265;
                this.share.y = -265;
                this.collect.y = -265;
                this.task.y = -265;
                this.updown.y = 0;
            } else {
                this.setting.y = 0;
                this.photo.y = 228;
                this.share.y = 493;
                this.collect.y = 758;
                this.task.y = 1023;
                this.updown.y = 1290;
            }
        }
        
        onComplete(){
            console.log("动画播放完成了");
            this.status = 3 - this.status;
            this.updateStatus();
        }

        //updown 是否需要展示红点，取决于内部各个模块的红点状态
        checkUpdownRed() {
            return TaskDataMgr.getInstance().hasCompletedTask();
        }
    }

    /**
     * 顶部UI
     */
    class TopUI extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            let xingxing = this.owner.getChildByName("xingxing");
            let xiaoyugan = this.owner.getChildByName("xiaoyugan");

            this.fishText = xiaoyugan.getChildByName("fish_text");
            this.starText = xingxing.getChildByName("star_text");

            this.updateFish(PlayerSystem.getFish());
            this.updateStar(PlayerSystem.getStar());

            EventMgr.getInstance().registEvent("UPDATE_FISH", this, this.updateFish);
            EventMgr.getInstance().registEvent("UPDATE_STAR", this, this.updateStar);
        }

        updateFish(fish) {
            this.fishText.text = String(fish);
        }

        updateStar(star) {
            this.starText.text = String(star);
        }
    }

    /**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

    class GameConfig {
        static init() {
            //注册Script或者Runtime引用
            let reg = Laya.ClassUtils.regClass;
    		reg("scene/BeachScene.js",BeachScene);
    		reg("form/Bowl.js",Bowl);
    		reg("core/component/ViewAdjust.js",ViewAdjust);
    		reg("guide/Guide.js",Guide);
    		reg("core/component/ViewAlignment.js",ViewAlignment);
    		reg("form/ClickVisitorGiftBtn.js",ClickVisitorGiftBtn);
    		reg("scene/CoffeeScene.js",CoffeeScene);
    		reg("form/ClickAddCatBtn.js",ClickAddCatBtn);
    		reg("scene/FishingScene.js",FishingScene);
    		reg("scene/LoginScene.js",LoginScene);
    		reg("form/CollectPop.js",CollectPop);
    		reg("form/CommonList.js",CommonList);
    		reg("form/CollectItem.js",CollectItem);
    		reg("form/ConfirmPop.js",ConfirmPop);
    		reg("form/CookBookPop.js",CookBookPop);
    		reg("form/CookBookItem.js",CookBookItem);
    		reg("form/FishingDialog.js",FishingDialog);
    		reg("form/FoodLevelUpPop.js",FoodLevelUpPop);
    		reg("form/LoadingUI.js",LoadingUI);
    		reg("form/Menu.js",Menu);
    		reg("form/MultiLoginDialog.js",MultiLoginDialog);
    		reg("core/component/ViewMid.js",ViewAlign);
    		reg("form/PlacePop.js",PlacePop);
    		reg("form/SceneSelectDlg.js",SceneSelectDlg);
    		reg("form/ShopPop.js",ShopPop);
    		reg("form/ShopList.js",ShopList);
    		reg("form/ShopItem.js",ShopItem);
    		reg("form/TaskPop.js",TaskPop);
    		reg("form/RedPoint.js",RedPoint);
    		reg("form/RedPointType.js",RedPointType);
    		reg("form/TaskItem.js",TaskItem);
    		reg("form/VisitorGiftPop.js",VisitorGiftPop);
    		reg("form/VisitorGiftItem.js",VisitorGiftItem);
    		reg("form/ArrowUI.js",ArrowUI);
    		reg("form/BottomUINew.js",BottomUINew);
    		reg("form/BuildingItem.js",BuildingItem);
    		reg("form/LeftUI.js",LeftUI);
    		reg("form/TopUI.js",TopUI);
        }
    }
    GameConfig.width = 1827;
    GameConfig.height = 2436;
    GameConfig.scaleMode ="fixedheight";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "scene/CoffeeScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = true;
    GameConfig.exportSceneToJson = true;

    GameConfig.init();

    class Main {

    	constructor() {
    		//根据IDE设置初始化引擎
    		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
    		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
    		Laya["Physics"] && Laya["Physics"].enable();
    		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
    		Laya.stage.scaleMode = GameConfig.scaleMode;
    		Laya.stage.screenMode = GameConfig.screenMode;
    		Laya.stage.alignV = GameConfig.alignV;
    		Laya.stage.alignH = GameConfig.alignH;
    		Laya.stage.frameRate = "slow";
    		//兼容微信不支持加载scene后缀场景
    		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
    		if (Laya.Browser.onMiniGame) {
    			// Laya.URL.basePath = "https://shuangfeng33.cn:8787/"
    			Laya.URL.basePath = "https://raw.githubusercontent.com/sw28363807/sunwen/master/";
    			Laya["MiniAdpter"].nativefiles = [
    				"config/",
    				"js/",
    				"libs/",
    				// "loading/",
    				// "sound/",
    				"fileconfig.json",
    				"game.js",
    				"game.json",
    				"index.js",
    				"project.config.json",
    				"unpack.json",
    				"version.json",
    				"weapp-adapter.js"
    		  	];
    		}
    		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
    		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
    		if (GameConfig.stat) Laya.Stat.show();
    		Laya.alertGlobalError = true;

    		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
    		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    	}

    	onProtoInit() {
    		console.debug("显示登录场景");
    		SceneMgr.getInstance().switchScene(Constants.LoginSceneId, Laya.Handler.create(this, function(scene) {

    		}));
    		GameLoader.getInstance().start(Laya.Handler.create(this, function() {

    		}));
    	}

    	getObj(className) {
    		return className()
    	}

    	onLogin(res) {
    	}

    	onVersionLoaded() {
    		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
    		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    	}

    	onConfigLoaded() {
    		EventMgr.getInstance().registEvent("SHOW_TIPS", this, this._showDefaultTip);
    		//先初始化加载好WebSocketClient要的proto文件
    		System.initService(Laya.Handler.create(this, this.onProtoInit));
    	}

    	_initTip(){
    		if(this._tipInited!=true){
    			this.offsetX = 0;
    			this._tipInited = true;
    			this.tipBackColor = "#ffffff";
    			this.tipDelay = 2000;
    			this._tipBox = new Laya.UIComponent();
    			this._tipBox.addChild(this._tipText = new Laya.Text());
    			this._tipText.fontSize = 40;
    			this._tipText.x = this._tipText.y = 5;
    			Laya.ILaya.stage.addChild(this._tipBox);
    			this._tipBox.zOrder = 10000;
    		}
    	}

    	_showDefaultTip(text) {
    		this._initTip();
            // console.debug("_showDefaultTip", text)
            Laya.ILaya.timer.clear(this, this._hideTip);
            this._tipText.text = text;
            let g = this._tipBox.graphics;
            g.clear(true);
            g.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, this.tipBackColor);
            this._tipBox.visible=true;
    		this._showToStage(this._tipBox, 50, -100);

            Laya.ILaya.timer.once(this.tipDelay, this, this._hideTip, [], true);
        }

        _showToStage(dis, offX = 0, offY = 0) {

            let rec = dis.getBounds();
            dis.x = Laya.ILaya.stage.mouseX + offX + this.offsetX;
            dis.y = Laya.ILaya.stage.mouseY + offY;

            if (dis.x + rec.width > Laya.ILaya.stage.width) {
                dis.x -= rec.width + offX;
            }
            if (dis.y + rec.height > Laya.ILaya.stage.height) {
                dis.y -= rec.height + offY;
    		}
    		// console.debug(Laya.ILaya.stage.width, Laya.ILaya.stage.height);
    		// console.debug(dis.x, dis.y);
        }

        _hideTip() {
            // console.debug("hideTip")
            this._tipBox.visible=false;
    		Laya.ILaya.timer.clear(this, this._hideTip);
        }
    }
    //激活启动类
    new Main();

}());
