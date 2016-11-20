(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,1473,256,256],[401,1348,256,256],[888,1945,134,82],[0,1731,141,84],[0,1901,408,123],[258,1473,131,426],[659,1570,40,21],[410,1949,256,80],[401,1278,200,63],[904,0,114,109],[888,1028,114,109],[659,1473,99,95],[0,514,512,512],[514,510,450,193],[544,1731,132,200],[410,1731,132,216],[391,1606,374,123],[659,1348,285,123],[0,1153,632,123],[0,1028,886,123],[514,0,388,313],[634,1153,376,193],[0,1278,399,193],[514,315,478,193],[668,1933,48,48],[514,900,411,126],[767,1473,143,244],[767,1719,119,255],[0,0,512,512],[514,705,423,193],[888,1719,132,224]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg_wood = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.chicken = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cloud1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cloud2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.creditos = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.curtain = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.curtain_rope = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.curtain_straight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.curtain_top = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.duck_outline_brown = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.duck_outline_yellow = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.duck_target_white = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.facebook = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ganaste = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.grass1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.grass2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.historia = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.iniciar = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.instrucciones = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.juan = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mapsite = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.nivel1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.nivel2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.perdiste = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.sitemap = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.titulo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.tree_oak = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.tree_pine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.twitter = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.volver = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.water1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.timer_clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape.setTransform(28.3,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(153,102,1,0.996)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_1.setTransform(28.3,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(153,103,1,0.996)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_2.setTransform(28.3,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(154,103,1,0.996)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_3.setTransform(28.3,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(154,103,2,0.992)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_4.setTransform(28.3,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(154,104,3,0.988)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_5.setTransform(28.3,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(154,104,4,0.984)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_6.setTransform(28.3,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(155,104,4,0.984)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_7.setTransform(28.3,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(155,105,4,0.984)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_8.setTransform(28.3,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(155,105,5,0.98)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_9.setTransform(28.3,6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(155,105,6,0.976)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_10.setTransform(28.3,6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(155,106,6,0.976)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_11.setTransform(28.3,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(156,106,6,0.976)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_12.setTransform(28.3,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(156,106,7,0.973)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_13.setTransform(28.3,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(156,107,8,0.969)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_14.setTransform(28.3,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(156,107,9,0.965)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_15.setTransform(28.3,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(157,107,9,0.965)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_16.setTransform(28.3,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(157,108,9,0.965)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_17.setTransform(28.3,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(157,108,10,0.961)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_18.setTransform(28.3,6.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(157,108,11,0.957)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_19.setTransform(28.3,6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(157,109,11,0.957)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_20.setTransform(28.3,6.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(158,109,11,0.957)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_21.setTransform(28.3,6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(158,109,12,0.953)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_22.setTransform(28.3,6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(158,110,13,0.949)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_23.setTransform(28.3,6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(159,110,14,0.945)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_24.setTransform(28.3,6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(159,111,14,0.945)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_25.setTransform(28.3,6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(159,111,15,0.941)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_26.setTransform(28.3,6.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(159,111,16,0.937)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_27.setTransform(28.3,6.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(159,112,16,0.937)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_28.setTransform(28.3,6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(160,112,16,0.937)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_29.setTransform(28.3,6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(160,112,17,0.933)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_30.setTransform(28.3,6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(160,113,18,0.929)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_31.setTransform(28.3,6.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(161,113,19,0.925)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_32.setTransform(28.3,6.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(161,114,20,0.922)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_33.setTransform(28.3,6.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(161,114,21,0.918)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_34.setTransform(28.3,6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(161,115,21,0.918)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_35.setTransform(28.3,6.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(162,115,21,0.918)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_36.setTransform(28.3,6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(162,115,22,0.914)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_37.setTransform(28.3,6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(162,116,23,0.91)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_38.setTransform(28.3,6.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(163,116,24,0.906)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_39.setTransform(28.3,6.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(163,117,24,0.906)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_40.setTransform(28.3,6.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(163,117,25,0.902)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_41.setTransform(28.3,6.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(163,117,26,0.898)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_42.setTransform(28.3,6.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(163,118,26,0.898)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_43.setTransform(28.3,6.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(164,118,27,0.894)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_44.setTransform(28.3,6.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(164,119,28,0.89)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_45.setTransform(28.3,6.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(164,119,29,0.886)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_46.setTransform(28.3,6.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(165,119,29,0.886)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_47.setTransform(28.3,6.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(165,120,29,0.886)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_48.setTransform(28.3,6.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(165,120,30,0.882)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_49.setTransform(28.3,6.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(165,120,31,0.878)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_50.setTransform(28.3,6.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(165,121,31,0.878)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_51.setTransform(28.3,6.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(166,121,32,0.875)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_52.setTransform(28.3,6.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(166,122,33,0.871)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_53.setTransform(28.3,6.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(166,122,34,0.867)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_54.setTransform(28.3,6.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(167,122,34,0.867)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_55.setTransform(28.3,6.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(167,123,34,0.867)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_56.setTransform(28.3,6.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(167,123,35,0.863)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_57.setTransform(28.3,6.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(167,123,36,0.859)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_58.setTransform(28.3,6.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(167,124,36,0.859)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_59.setTransform(28.3,6.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(168,124,37,0.855)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_60.setTransform(28.3,6.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(168,125,38,0.851)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_61.setTransform(28.3,6.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(168,125,39,0.847)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_62.setTransform(28.3,6.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(169,125,39,0.847)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_63.setTransform(28.3,6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(169,126,39,0.847)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_64.setTransform(28.3,6.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(169,126,40,0.843)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_65.setTransform(28.3,6.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(169,126,41,0.839)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_66.setTransform(28.3,6.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(169,127,41,0.839)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_67.setTransform(28.3,6.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(170,127,41,0.839)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_68.setTransform(28.3,6.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(170,127,42,0.835)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_69.setTransform(28.3,6.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(170,128,43,0.831)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_70.setTransform(28.3,6.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(170,128,44,0.827)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_71.setTransform(28.3,6.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(171,128,44,0.827)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_72.setTransform(28.3,6.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(171,129,44,0.827)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_73.setTransform(28.3,6.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(171,129,45,0.824)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_74.setTransform(28.3,6.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(171,129,46,0.82)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_75.setTransform(28.3,6.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(171,130,46,0.82)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_76.setTransform(28.3,6.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(172,130,46,0.82)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_77.setTransform(28.3,6.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(172,130,47,0.816)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_78.setTransform(28.3,6.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(172,131,48,0.812)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_79.setTransform(28.3,6.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(172,131,49,0.808)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_80.setTransform(28.3,6.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(173,131,49,0.808)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_81.setTransform(28.3,6.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(173,132,49,0.808)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_82.setTransform(28.3,6.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(173,132,50,0.804)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_83.setTransform(28.3,6.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(173,132,51,0.8)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_84.setTransform(28.3,6.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(173,133,51,0.8)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_85.setTransform(28.3,6.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(174,133,51,0.8)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_86.setTransform(28.3,6.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(174,133,52,0.796)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_87.setTransform(28.3,6.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(174,134,53,0.792)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_88.setTransform(28.3,6.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(174,134,54,0.788)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_89.setTransform(28.3,6.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(175,134,54,0.788)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_90.setTransform(28.3,6.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(175,135,54,0.788)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_91.setTransform(28.3,6.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(175,135,55,0.784)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_92.setTransform(28.3,6.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(175,135,56,0.78)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_93.setTransform(28.3,6.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(175,136,56,0.78)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_94.setTransform(28.3,6.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(176,136,56,0.78)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_95.setTransform(28.3,6.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(176,136,57,0.776)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_96.setTransform(28.3,6.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(176,137,58,0.773)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_97.setTransform(28.3,6.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(176,137,59,0.769)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_98.setTransform(28.3,6.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(177,137,59,0.769)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_99.setTransform(28.3,6.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(177,138,59,0.769)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_100.setTransform(28.3,6.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(177,138,60,0.765)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_101.setTransform(28.3,6.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(177,138,61,0.761)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_102.setTransform(28.3,6.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(177,139,61,0.761)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_103.setTransform(28.3,6.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(178,139,61,0.761)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_104.setTransform(28.3,6.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(178,139,62,0.757)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_105.setTransform(28.3,6.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(178,140,63,0.753)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_106.setTransform(28.3,6.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(179,140,64,0.749)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_107.setTransform(28.3,6.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(179,141,64,0.749)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_108.setTransform(28.3,6.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(179,141,65,0.745)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_109.setTransform(28.3,6.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(179,141,66,0.741)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_110.setTransform(28.3,6.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("rgba(179,142,66,0.741)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_111.setTransform(28.3,6.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(180,142,66,0.741)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_112.setTransform(28.3,6.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("rgba(180,142,67,0.737)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_113.setTransform(28.3,6.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(180,143,68,0.733)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_114.setTransform(28.3,6.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("rgba(181,143,69,0.729)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_115.setTransform(28.3,6.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(181,144,70,0.725)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_116.setTransform(28.3,6.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(181,144,71,0.722)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_117.setTransform(28.3,6.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(181,145,71,0.722)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_118.setTransform(28.3,6.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("rgba(182,145,71,0.722)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_119.setTransform(28.3,6.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(182,145,72,0.718)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_120.setTransform(28.3,6.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("rgba(182,146,73,0.714)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_121.setTransform(28.3,6.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(183,146,74,0.71)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_122.setTransform(28.3,6.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("rgba(183,147,74,0.71)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_123.setTransform(28.3,6.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(183,147,75,0.706)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_124.setTransform(28.3,6.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("rgba(183,147,76,0.702)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_125.setTransform(28.3,6.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(183,148,76,0.702)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_126.setTransform(28.3,6.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("rgba(184,148,76,0.702)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_127.setTransform(28.3,6.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(184,148,77,0.698)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_128.setTransform(28.3,6.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(184,149,78,0.694)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_129.setTransform(28.3,6.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(184,149,79,0.69)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_130.setTransform(28.3,6.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("rgba(185,149,79,0.69)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_131.setTransform(28.3,6.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(185,150,79,0.69)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_132.setTransform(28.3,6.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("rgba(185,150,80,0.686)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_133.setTransform(28.3,6.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(185,150,81,0.682)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_134.setTransform(28.3,6.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("rgba(185,151,81,0.682)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_135.setTransform(28.3,6.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(186,151,82,0.678)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_136.setTransform(28.3,6.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("rgba(186,152,83,0.675)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_137.setTransform(28.3,6.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(186,152,84,0.671)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_138.setTransform(28.3,6.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("rgba(187,152,84,0.671)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_139.setTransform(28.3,6.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(187,153,84,0.671)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_140.setTransform(28.3,6.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(187,153,85,0.667)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_141.setTransform(28.3,6.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(187,153,86,0.663)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_142.setTransform(28.3,6.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(187,154,86,0.663)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_143.setTransform(28.3,6.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(188,154,87,0.659)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_144.setTransform(28.3,6.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(188,155,88,0.655)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_145.setTransform(28.3,6.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(188,155,89,0.651)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_146.setTransform(28.3,6.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(189,155,89,0.651)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_147.setTransform(28.3,6.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(189,156,89,0.651)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_148.setTransform(28.3,6.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(189,156,90,0.647)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_149.setTransform(28.3,6.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(189,156,91,0.643)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_150.setTransform(28.3,6.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("rgba(189,157,91,0.643)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_151.setTransform(28.3,6.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(190,157,92,0.639)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_152.setTransform(28.3,6.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(190,158,93,0.635)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_153.setTransform(28.3,6.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(190,158,94,0.631)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_154.setTransform(28.3,6.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("rgba(191,158,94,0.631)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_155.setTransform(28.3,6.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(191,159,94,0.631)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_156.setTransform(28.3,6.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("rgba(191,159,95,0.627)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_157.setTransform(28.3,6.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("rgba(191,159,96,0.624)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_158.setTransform(28.3,6.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("rgba(191,160,96,0.624)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_159.setTransform(28.3,6.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("rgba(192,160,96,0.624)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_160.setTransform(28.3,6.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("rgba(192,160,97,0.62)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_161.setTransform(28.3,6.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("rgba(192,161,98,0.616)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_162.setTransform(28.3,6.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("rgba(192,161,99,0.612)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_163.setTransform(28.3,6.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("rgba(193,161,99,0.612)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_164.setTransform(28.3,6.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("rgba(193,162,99,0.612)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_165.setTransform(28.3,6.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("rgba(193,162,100,0.608)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_166.setTransform(28.3,6.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("rgba(193,162,101,0.604)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_167.setTransform(28.3,6.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("rgba(193,163,101,0.604)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_168.setTransform(28.3,6.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("rgba(194,163,101,0.604)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_169.setTransform(28.3,6.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("rgba(194,163,102,0.6)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_170.setTransform(28.3,6.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("rgba(194,164,103,0.596)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_171.setTransform(28.3,6.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("rgba(194,164,104,0.592)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_172.setTransform(28.3,6.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("rgba(195,164,104,0.592)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_173.setTransform(28.3,6.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("rgba(195,165,104,0.592)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_174.setTransform(28.3,6.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("rgba(195,165,105,0.588)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_175.setTransform(28.3,6.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("rgba(195,165,106,0.584)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_176.setTransform(28.3,6.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("rgba(195,166,106,0.584)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_177.setTransform(28.3,6.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("rgba(196,166,106,0.584)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_178.setTransform(28.3,6.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("rgba(196,166,107,0.58)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_179.setTransform(28.3,6.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("rgba(196,167,108,0.576)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_180.setTransform(28.3,6.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("rgba(196,167,109,0.573)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_181.setTransform(28.3,6.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("rgba(197,167,109,0.573)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_182.setTransform(28.3,6.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("rgba(197,168,109,0.573)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_183.setTransform(28.3,6.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("rgba(197,168,110,0.569)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_184.setTransform(28.3,6.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("rgba(197,168,111,0.565)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_185.setTransform(28.3,6.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("rgba(197,169,111,0.565)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_186.setTransform(28.3,6.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("rgba(198,169,111,0.565)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_187.setTransform(28.3,6.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("rgba(198,169,112,0.561)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_188.setTransform(28.3,6.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("rgba(198,170,113,0.557)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_189.setTransform(28.3,6.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("rgba(199,170,114,0.553)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_190.setTransform(28.3,6.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("rgba(199,171,114,0.553)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_191.setTransform(28.3,6.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("rgba(199,171,115,0.549)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_192.setTransform(28.3,6.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("rgba(199,171,116,0.545)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_193.setTransform(28.3,6.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("rgba(199,172,116,0.545)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_194.setTransform(28.3,6.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("rgba(200,172,116,0.545)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_195.setTransform(28.3,6.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(200,172,117,0.541)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_196.setTransform(28.3,6.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("rgba(200,173,118,0.537)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_197.setTransform(28.3,6.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("rgba(201,173,119,0.533)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_198.setTransform(28.3,6.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("rgba(201,174,120,0.529)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_199.setTransform(28.3,6.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("rgba(201,174,121,0.525)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_200.setTransform(28.3,6.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("rgba(201,175,121,0.525)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_201.setTransform(28.3,6.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("rgba(202,175,121,0.525)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_202.setTransform(28.3,6.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("rgba(202,175,122,0.522)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_203.setTransform(28.3,6.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("rgba(202,176,123,0.518)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_204.setTransform(28.3,6.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("rgba(203,176,124,0.514)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_205.setTransform(28.3,6.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("rgba(203,177,124,0.514)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_206.setTransform(28.3,6.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("rgba(203,177,125,0.51)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_207.setTransform(28.3,6.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("rgba(203,177,126,0.506)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_208.setTransform(28.3,6.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("rgba(203,178,126,0.506)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_209.setTransform(28.3,6.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("rgba(204,178,126,0.506)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_210.setTransform(28.3,6.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("rgba(204,178,127,0.502)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_211.setTransform(28.3,6.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("rgba(204,179,128,0.498)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_212.setTransform(28.3,6.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("rgba(204,179,129,0.494)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_213.setTransform(28.3,6.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("rgba(205,179,129,0.494)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_214.setTransform(28.3,6.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("rgba(205,180,129,0.494)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_215.setTransform(28.3,6.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("rgba(205,180,130,0.49)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_216.setTransform(28.3,6.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("rgba(205,180,131,0.486)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_217.setTransform(28.3,6.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("rgba(205,181,131,0.486)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_218.setTransform(28.3,6.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("rgba(206,181,132,0.482)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_219.setTransform(28.3,6.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("rgba(206,182,133,0.478)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_220.setTransform(28.3,6.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("rgba(206,182,134,0.475)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_221.setTransform(28.3,6.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(207,182,134,0.475)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_222.setTransform(28.3,6.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("rgba(207,183,134,0.475)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_223.setTransform(28.3,6.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(207,183,135,0.471)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_224.setTransform(28.3,6.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("rgba(207,184,136,0.467)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_225.setTransform(28.3,6.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("rgba(208,184,137,0.463)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_226.setTransform(28.3,6.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("rgba(208,185,138,0.459)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_227.setTransform(28.3,6.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("rgba(208,185,139,0.455)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_228.setTransform(28.3,6.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("rgba(209,185,139,0.455)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_229.setTransform(28.3,6.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("rgba(209,186,139,0.455)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_230.setTransform(28.3,6.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("rgba(209,186,140,0.451)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_231.setTransform(28.3,6.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("rgba(209,186,141,0.447)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_232.setTransform(28.3,6.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("rgba(209,187,141,0.447)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_233.setTransform(28.3,6.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("rgba(210,187,142,0.443)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_234.setTransform(28.3,6.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("rgba(210,188,143,0.439)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_235.setTransform(28.3,6.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("rgba(210,188,144,0.435)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_236.setTransform(28.3,6.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("rgba(211,188,144,0.435)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_237.setTransform(28.3,6.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("rgba(211,189,144,0.435)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_238.setTransform(28.3,6.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("rgba(211,189,145,0.431)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_239.setTransform(28.3,6.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("rgba(211,189,146,0.427)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_240.setTransform(28.3,6.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("rgba(211,190,146,0.427)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_241.setTransform(28.3,6.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("rgba(212,190,146,0.427)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_242.setTransform(28.3,6.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("rgba(212,190,147,0.424)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_243.setTransform(28.3,6.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("rgba(212,191,148,0.42)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_244.setTransform(28.3,6.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("rgba(212,191,149,0.416)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_245.setTransform(28.3,6.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("rgba(213,191,149,0.416)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_246.setTransform(28.3,6.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("rgba(213,192,149,0.416)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_247.setTransform(28.3,6.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("rgba(213,192,150,0.412)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_248.setTransform(28.3,6.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("rgba(213,192,151,0.408)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_249.setTransform(28.3,6.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("rgba(213,193,151,0.408)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_250.setTransform(28.3,6.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("rgba(214,193,151,0.408)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_251.setTransform(28.3,6.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("rgba(214,193,152,0.404)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_252.setTransform(28.3,6.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("rgba(214,194,153,0.4)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_253.setTransform(28.3,6.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("rgba(214,194,154,0.396)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_254.setTransform(28.3,6.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("rgba(215,194,154,0.396)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_255.setTransform(28.3,6.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("rgba(215,195,154,0.396)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_256.setTransform(28.3,6.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("rgba(215,195,155,0.392)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_257.setTransform(28.3,6.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("rgba(215,195,156,0.388)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_258.setTransform(28.3,6.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("rgba(215,196,156,0.388)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_259.setTransform(28.3,6.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("rgba(216,196,156,0.388)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_260.setTransform(28.3,6.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("rgba(216,196,157,0.384)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_261.setTransform(28.3,6.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("rgba(216,197,158,0.38)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_262.setTransform(28.3,6.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("rgba(216,197,159,0.376)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_263.setTransform(28.3,6.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("rgba(217,197,159,0.376)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_264.setTransform(28.3,6.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("rgba(217,198,159,0.376)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_265.setTransform(28.3,6.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("rgba(217,198,160,0.373)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_266.setTransform(28.3,6.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("rgba(217,198,161,0.369)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_267.setTransform(28.3,6.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("rgba(217,199,161,0.369)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_268.setTransform(28.3,6.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("rgba(218,199,161,0.369)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_269.setTransform(28.3,6.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("rgba(218,199,162,0.365)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_270.setTransform(28.3,6.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("rgba(218,200,163,0.361)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_271.setTransform(28.3,6.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("rgba(219,200,164,0.357)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_272.setTransform(28.3,6.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("rgba(219,201,164,0.357)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_273.setTransform(28.3,6.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("rgba(219,201,165,0.353)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_274.setTransform(28.3,6.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("rgba(219,201,166,0.349)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_275.setTransform(28.3,6.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("rgba(219,202,166,0.349)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_276.setTransform(28.3,6.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("rgba(220,202,166,0.349)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_277.setTransform(28.3,6.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("rgba(220,202,167,0.345)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_278.setTransform(28.3,6.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("rgba(220,203,168,0.341)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_279.setTransform(28.3,6.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("rgba(221,203,169,0.337)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_280.setTransform(28.3,6.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("rgba(221,204,169,0.337)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_281.setTransform(28.3,6.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(221,204,170,0.333)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_282.setTransform(28.3,6.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("rgba(221,204,171,0.329)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_283.setTransform(28.3,6.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(221,205,171,0.329)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_284.setTransform(28.3,6.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("rgba(222,205,171,0.329)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_285.setTransform(28.3,6.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(222,205,172,0.325)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_286.setTransform(28.3,6.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("rgba(222,206,173,0.322)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_287.setTransform(28.3,6.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("rgba(223,206,174,0.318)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_288.setTransform(28.3,6.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("rgba(223,207,174,0.318)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_289.setTransform(28.3,6.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("rgba(223,207,175,0.314)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_290.setTransform(28.3,6.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("rgba(223,207,176,0.31)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_291.setTransform(28.3,6.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("rgba(223,208,176,0.31)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_292.setTransform(28.3,6.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("rgba(224,208,176,0.31)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_293.setTransform(28.3,6.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("rgba(224,208,177,0.306)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_294.setTransform(28.3,6.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("rgba(224,209,178,0.302)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_295.setTransform(28.3,6.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("rgba(224,209,179,0.298)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_296.setTransform(28.3,6.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("rgba(225,209,179,0.298)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_297.setTransform(28.3,6.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("rgba(225,210,179,0.298)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_298.setTransform(28.3,6.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("rgba(225,210,180,0.294)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_299.setTransform(28.3,6.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("rgba(225,210,181,0.29)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_300.setTransform(28.3,6.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("rgba(225,211,181,0.29)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_301.setTransform(28.3,6.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("rgba(226,211,182,0.286)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_302.setTransform(28.3,6.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("rgba(226,212,183,0.282)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_303.setTransform(28.3,6.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("rgba(226,212,184,0.278)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_304.setTransform(28.3,6.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("rgba(227,212,184,0.278)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_305.setTransform(28.3,6.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("rgba(227,213,184,0.278)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_306.setTransform(28.3,6.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("rgba(227,213,185,0.275)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_307.setTransform(28.3,6.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("rgba(227,214,186,0.271)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_308.setTransform(28.3,6.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("rgba(228,214,187,0.267)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_309.setTransform(28.3,6.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(228,215,188,0.263)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_310.setTransform(28.3,6.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("rgba(228,215,189,0.259)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_311.setTransform(28.3,6.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("rgba(229,215,189,0.259)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_312.setTransform(28.3,6.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("rgba(229,216,189,0.259)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_313.setTransform(28.3,6.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("rgba(229,216,190,0.255)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_314.setTransform(28.3,6.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("rgba(229,216,191,0.251)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_315.setTransform(28.3,6.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("rgba(229,217,191,0.251)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_316.setTransform(28.3,6.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("rgba(230,217,192,0.247)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_317.setTransform(28.3,6.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("rgba(230,218,193,0.243)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_318.setTransform(28.3,6.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("rgba(230,218,194,0.239)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_319.setTransform(28.3,6.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("rgba(231,218,194,0.239)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_320.setTransform(28.3,6.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("rgba(231,219,194,0.239)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_321.setTransform(28.3,6.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("rgba(231,219,195,0.235)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_322.setTransform(28.3,6.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("rgba(231,219,196,0.231)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_323.setTransform(28.3,6.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("rgba(231,220,196,0.231)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_324.setTransform(28.3,6.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("rgba(232,220,196,0.231)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_325.setTransform(28.3,6.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("rgba(232,220,197,0.227)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_326.setTransform(28.3,6.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("rgba(232,221,198,0.224)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_327.setTransform(28.3,6.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("rgba(232,221,199,0.22)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_328.setTransform(28.3,6.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("rgba(233,221,199,0.22)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_329.setTransform(28.3,6.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("rgba(233,222,199,0.22)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_330.setTransform(28.3,6.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("rgba(233,222,200,0.216)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_331.setTransform(28.3,6.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("rgba(233,222,201,0.212)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_332.setTransform(28.3,6.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("rgba(233,223,201,0.212)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_333.setTransform(28.3,6.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("rgba(234,223,201,0.212)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_334.setTransform(28.3,6.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("rgba(234,223,202,0.208)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_335.setTransform(28.3,6.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("rgba(234,224,203,0.204)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_336.setTransform(28.3,6.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("rgba(234,224,204,0.2)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_337.setTransform(28.3,6.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("rgba(235,224,204,0.2)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_338.setTransform(28.3,6.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("rgba(235,225,204,0.2)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_339.setTransform(28.3,6.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("rgba(235,225,205,0.196)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_340.setTransform(28.3,6.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("rgba(235,225,206,0.192)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_341.setTransform(28.3,6.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("rgba(235,226,206,0.192)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_342.setTransform(28.3,6.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("rgba(236,226,206,0.192)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_343.setTransform(28.3,6.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("rgba(236,226,207,0.188)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_344.setTransform(28.3,6.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("rgba(236,227,208,0.184)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_345.setTransform(28.3,6.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("rgba(236,227,209,0.18)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_346.setTransform(28.3,6.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("rgba(237,227,209,0.18)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_347.setTransform(28.3,6.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("rgba(237,228,209,0.18)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_348.setTransform(28.3,6.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("rgba(237,228,210,0.176)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_349.setTransform(28.3,6.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("rgba(237,228,211,0.173)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_350.setTransform(28.3,6.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("rgba(237,229,211,0.173)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_351.setTransform(28.3,6.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("rgba(238,229,211,0.173)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_352.setTransform(28.3,6.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("rgba(238,229,212,0.169)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_353.setTransform(28.3,6.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("rgba(238,230,213,0.165)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_354.setTransform(28.3,6.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("rgba(238,230,214,0.161)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_355.setTransform(28.3,6.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("rgba(239,230,214,0.161)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_356.setTransform(28.3,6.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("rgba(239,231,214,0.161)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_357.setTransform(28.3,6.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("rgba(239,231,215,0.157)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_358.setTransform(28.3,6.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("rgba(239,231,216,0.153)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_359.setTransform(28.3,6.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("rgba(239,232,216,0.153)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_360.setTransform(28.3,6.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("rgba(240,232,216,0.153)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_361.setTransform(28.3,6.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("rgba(240,232,217,0.149)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_362.setTransform(28.3,6.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("rgba(240,233,218,0.145)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_363.setTransform(28.3,6.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("rgba(241,233,219,0.141)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_364.setTransform(28.3,6.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("rgba(241,234,219,0.141)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_365.setTransform(28.3,6.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("rgba(241,234,220,0.137)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_366.setTransform(28.3,6.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("rgba(241,234,221,0.133)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_367.setTransform(28.3,6.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("rgba(241,235,221,0.133)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_368.setTransform(28.3,6.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("rgba(242,235,221,0.133)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_369.setTransform(28.3,6.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("rgba(242,235,222,0.129)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_370.setTransform(28.3,6.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("rgba(242,236,223,0.125)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_371.setTransform(28.3,6.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("rgba(243,236,224,0.122)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_372.setTransform(28.3,6.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("rgba(243,237,224,0.122)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_373.setTransform(28.3,6.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("rgba(243,237,225,0.118)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_374.setTransform(28.3,6.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("rgba(243,237,226,0.114)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_375.setTransform(28.3,6.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("rgba(243,238,226,0.114)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_376.setTransform(28.3,6.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("rgba(244,238,226,0.114)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_377.setTransform(28.3,6.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("rgba(244,238,227,0.11)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_378.setTransform(28.3,6.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("rgba(244,239,228,0.106)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_379.setTransform(28.3,6.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("rgba(245,239,229,0.102)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_380.setTransform(28.3,6.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("rgba(245,240,229,0.102)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_381.setTransform(28.3,6.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("rgba(245,240,230,0.098)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_382.setTransform(28.3,6.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("rgba(245,240,231,0.094)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_383.setTransform(28.3,6.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("rgba(245,241,231,0.094)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_384.setTransform(28.3,6.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("rgba(246,241,232,0.09)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_385.setTransform(28.3,6.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("rgba(246,242,233,0.086)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_386.setTransform(28.3,6.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("rgba(246,242,234,0.082)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_387.setTransform(28.3,6.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("rgba(247,242,234,0.082)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_388.setTransform(28.3,6.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("rgba(247,243,234,0.082)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_389.setTransform(28.3,6.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("rgba(247,243,235,0.078)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_390.setTransform(28.3,6.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("rgba(247,244,236,0.075)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_391.setTransform(28.3,6.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("rgba(248,244,237,0.071)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_392.setTransform(28.3,6.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("rgba(248,245,238,0.067)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_393.setTransform(28.3,6.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("rgba(248,245,239,0.063)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_394.setTransform(28.3,6.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("rgba(249,245,239,0.063)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_395.setTransform(28.3,6.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("rgba(249,246,239,0.063)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_396.setTransform(28.3,6.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("rgba(249,246,240,0.059)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_397.setTransform(28.3,6.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("rgba(249,246,241,0.055)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_398.setTransform(28.3,6.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("rgba(249,247,241,0.055)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_399.setTransform(28.3,6.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("rgba(250,247,242,0.051)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_400.setTransform(28.3,6.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("rgba(250,248,243,0.047)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_401.setTransform(28.3,6.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("rgba(250,248,244,0.043)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_402.setTransform(28.3,6.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("rgba(251,248,244,0.043)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_403.setTransform(28.3,6.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("rgba(251,249,244,0.043)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_404.setTransform(28.3,6.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("rgba(251,249,245,0.039)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_405.setTransform(28.3,6.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("rgba(251,249,246,0.035)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_406.setTransform(28.3,6.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("rgba(251,250,246,0.035)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_407.setTransform(28.3,6.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("rgba(252,250,246,0.035)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_408.setTransform(28.3,6.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("rgba(252,250,247,0.031)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_409.setTransform(28.3,6.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("rgba(252,251,248,0.027)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_410.setTransform(28.3,6.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("rgba(252,251,249,0.024)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_411.setTransform(28.3,6.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("rgba(253,251,249,0.024)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_412.setTransform(28.3,6.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("rgba(253,252,249,0.024)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_413.setTransform(28.3,6.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("rgba(253,252,250,0.02)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_414.setTransform(28.3,6.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("rgba(253,252,251,0.016)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_415.setTransform(28.3,6.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("rgba(253,253,251,0.016)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_416.setTransform(28.3,6.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("rgba(254,253,251,0.016)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_417.setTransform(28.3,6.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("rgba(254,253,252,0.012)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_418.setTransform(28.3,6.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("rgba(254,254,253,0.008)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_419.setTransform(28.3,6.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("rgba(254,254,254,0.004)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_420.setTransform(28.3,6.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("rgba(255,254,254,0.004)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_421.setTransform(28.3,6.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("rgba(255,255,254,0.004)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_422.setTransform(28.3,6.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("rgba(255,255,255,0)").ss(4.6,1,1).p("AgRg1IAABUIAjAX");
	this.shape_423.setTransform(28.3,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_423}]},1).wait(1));

	// Capa 3
	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#996600").ss(1,1,1).p("AC0AAQAAAogPAiQgCAGgEAHQgMAVgTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJg");
	this.shape_424.setTransform(26,7.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#996600").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_425.setTransform(26,7.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("rgba(153,102,0,0.996)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_426.setTransform(26,7.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("rgba(153,102,0,0.992)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_427.setTransform(26,7.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("rgba(153,102,0,0.988)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_428.setTransform(26,7.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("rgba(153,102,0,0.984)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_429.setTransform(26,7.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("rgba(153,102,0,0.98)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_430.setTransform(26,7.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("rgba(153,102,0,0.976)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_431.setTransform(26,7.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("rgba(153,102,0,0.973)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_432.setTransform(26,7.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("rgba(153,102,0,0.969)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_433.setTransform(26,7.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("rgba(153,102,0,0.965)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_434.setTransform(26,7.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("rgba(153,102,0,0.961)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_435.setTransform(26,7.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("rgba(153,102,0,0.957)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_436.setTransform(26,7.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("rgba(153,102,0,0.953)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_437.setTransform(26,7.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("rgba(153,102,0,0.949)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_438.setTransform(26,7.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("rgba(153,102,0,0.945)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_439.setTransform(26,7.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("rgba(153,102,0,0.941)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_440.setTransform(26,7.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("rgba(153,102,0,0.937)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_441.setTransform(26,7.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("rgba(153,102,0,0.933)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_442.setTransform(26,7.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("rgba(153,102,0,0.929)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_443.setTransform(26,7.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("rgba(153,102,0,0.925)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_444.setTransform(26,7.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("rgba(153,102,0,0.922)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_445.setTransform(26,7.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("rgba(153,102,0,0.918)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_446.setTransform(26,7.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("rgba(153,102,0,0.914)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_447.setTransform(26,7.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("rgba(153,102,0,0.91)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_448.setTransform(26,7.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("rgba(153,102,0,0.906)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_449.setTransform(26,7.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("rgba(153,102,0,0.902)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_450.setTransform(26,7.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("rgba(153,102,0,0.898)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_451.setTransform(26,7.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("rgba(153,102,0,0.894)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_452.setTransform(26,7.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("rgba(153,102,0,0.89)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_453.setTransform(26,7.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("rgba(153,102,0,0.886)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_454.setTransform(26,7.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("rgba(153,102,0,0.882)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_455.setTransform(26,7.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("rgba(153,102,0,0.878)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_456.setTransform(26,7.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("rgba(153,102,0,0.875)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_457.setTransform(26,7.3);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("rgba(153,102,0,0.871)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_458.setTransform(26,7.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("rgba(153,102,0,0.867)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_459.setTransform(26,7.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("rgba(153,102,0,0.863)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_460.setTransform(26,7.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("rgba(153,102,0,0.859)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_461.setTransform(26,7.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("rgba(153,102,0,0.855)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_462.setTransform(26,7.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("rgba(153,102,0,0.851)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_463.setTransform(26,7.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("rgba(153,102,0,0.847)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_464.setTransform(26,7.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("rgba(153,102,0,0.843)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_465.setTransform(26,7.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("rgba(153,102,0,0.839)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_466.setTransform(26,7.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("rgba(153,102,0,0.835)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_467.setTransform(26,7.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("rgba(153,102,0,0.831)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_468.setTransform(26,7.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("rgba(153,102,0,0.827)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_469.setTransform(26,7.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("rgba(153,102,0,0.824)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_470.setTransform(26,7.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("rgba(153,102,0,0.82)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_471.setTransform(26,7.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("rgba(153,102,0,0.816)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_472.setTransform(26,7.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("rgba(153,102,0,0.812)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_473.setTransform(26,7.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("rgba(153,102,0,0.808)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_474.setTransform(26,7.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("rgba(153,102,0,0.804)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_475.setTransform(26,7.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("rgba(153,102,0,0.8)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_476.setTransform(26,7.3);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("rgba(153,102,0,0.796)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_477.setTransform(26,7.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("rgba(153,102,0,0.792)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_478.setTransform(26,7.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("rgba(153,102,0,0.788)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_479.setTransform(26,7.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("rgba(153,102,0,0.784)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_480.setTransform(26,7.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("rgba(153,102,0,0.78)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_481.setTransform(26,7.3);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("rgba(153,102,0,0.776)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_482.setTransform(26,7.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("rgba(153,102,0,0.773)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_483.setTransform(26,7.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("rgba(153,102,0,0.769)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_484.setTransform(26,7.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("rgba(153,102,0,0.765)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_485.setTransform(26,7.3);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("rgba(153,102,0,0.761)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_486.setTransform(26,7.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("rgba(153,102,0,0.757)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_487.setTransform(26,7.3);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("rgba(153,102,0,0.753)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_488.setTransform(26,7.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("rgba(153,102,0,0.749)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_489.setTransform(26,7.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("rgba(153,102,0,0.745)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_490.setTransform(26,7.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("rgba(153,102,0,0.741)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_491.setTransform(26,7.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("rgba(153,102,0,0.737)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_492.setTransform(26,7.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("rgba(153,102,0,0.733)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_493.setTransform(26,7.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("rgba(153,102,0,0.729)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_494.setTransform(26,7.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("rgba(153,102,0,0.725)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_495.setTransform(26,7.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("rgba(153,102,0,0.722)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_496.setTransform(26,7.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("rgba(153,102,0,0.718)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_497.setTransform(26,7.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("rgba(153,102,0,0.714)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_498.setTransform(26,7.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("rgba(153,102,0,0.71)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_499.setTransform(26,7.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("rgba(153,102,0,0.706)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_500.setTransform(26,7.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("rgba(153,102,0,0.702)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_501.setTransform(26,7.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("rgba(153,102,0,0.698)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_502.setTransform(26,7.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("rgba(153,102,0,0.694)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_503.setTransform(26,7.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("rgba(153,102,0,0.69)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_504.setTransform(26,7.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("rgba(153,102,0,0.686)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_505.setTransform(26,7.3);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("rgba(153,102,0,0.682)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_506.setTransform(26,7.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("rgba(153,102,0,0.678)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_507.setTransform(26,7.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("rgba(153,102,0,0.675)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_508.setTransform(26,7.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("rgba(153,102,0,0.671)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_509.setTransform(26,7.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("rgba(153,102,0,0.667)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_510.setTransform(26,7.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("rgba(153,102,0,0.663)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_511.setTransform(26,7.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("rgba(153,102,0,0.659)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_512.setTransform(26,7.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("rgba(153,102,0,0.655)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_513.setTransform(26,7.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("rgba(153,102,0,0.651)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_514.setTransform(26,7.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("rgba(153,102,0,0.647)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_515.setTransform(26,7.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("rgba(153,102,0,0.643)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_516.setTransform(26,7.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("rgba(153,102,0,0.639)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_517.setTransform(26,7.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("rgba(153,102,0,0.635)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_518.setTransform(26,7.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("rgba(153,102,0,0.631)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_519.setTransform(26,7.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("rgba(153,102,0,0.627)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_520.setTransform(26,7.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("rgba(153,102,0,0.624)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_521.setTransform(26,7.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("rgba(153,102,0,0.62)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_522.setTransform(26,7.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("rgba(153,102,0,0.616)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_523.setTransform(26,7.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("rgba(153,102,0,0.612)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_524.setTransform(26,7.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("rgba(153,102,0,0.608)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_525.setTransform(26,7.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("rgba(153,102,0,0.604)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_526.setTransform(26,7.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("rgba(153,102,0,0.6)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_527.setTransform(26,7.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("rgba(153,102,0,0.596)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_528.setTransform(26,7.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("rgba(153,102,0,0.592)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_529.setTransform(26,7.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("rgba(153,102,0,0.588)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_530.setTransform(26,7.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("rgba(153,102,0,0.584)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_531.setTransform(26,7.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("rgba(153,102,0,0.58)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_532.setTransform(26,7.3);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("rgba(153,102,0,0.576)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_533.setTransform(26,7.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("rgba(153,102,0,0.573)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_534.setTransform(26,7.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("rgba(153,102,0,0.569)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_535.setTransform(26,7.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("rgba(153,102,0,0.565)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_536.setTransform(26,7.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("rgba(153,102,0,0.561)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_537.setTransform(26,7.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("rgba(153,102,0,0.557)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_538.setTransform(26,7.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("rgba(153,102,0,0.553)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_539.setTransform(26,7.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("rgba(153,102,0,0.549)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_540.setTransform(26,7.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("rgba(153,102,0,0.545)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_541.setTransform(26,7.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("rgba(153,102,0,0.541)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_542.setTransform(26,7.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("rgba(153,102,0,0.537)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_543.setTransform(26,7.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("rgba(153,102,0,0.533)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_544.setTransform(26,7.3);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("rgba(153,102,0,0.529)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_545.setTransform(26,7.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("rgba(153,102,0,0.525)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_546.setTransform(26,7.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("rgba(153,102,0,0.522)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_547.setTransform(26,7.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("rgba(153,102,0,0.518)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_548.setTransform(26,7.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("rgba(153,102,0,0.514)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_549.setTransform(26,7.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("rgba(153,102,0,0.51)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_550.setTransform(26,7.3);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("rgba(153,102,0,0.506)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_551.setTransform(26,7.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("rgba(153,102,0,0.502)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_552.setTransform(26,7.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("rgba(153,102,0,0.498)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_553.setTransform(26,7.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("rgba(153,102,0,0.494)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_554.setTransform(26,7.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("rgba(153,102,0,0.49)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_555.setTransform(26,7.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("rgba(153,102,0,0.486)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_556.setTransform(26,7.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("rgba(153,102,0,0.482)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_557.setTransform(26,7.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("rgba(153,102,0,0.478)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_558.setTransform(26,7.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("rgba(153,102,0,0.475)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_559.setTransform(26,7.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("rgba(153,102,0,0.471)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_560.setTransform(26,7.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("rgba(153,102,0,0.467)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_561.setTransform(26,7.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("rgba(153,102,0,0.463)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_562.setTransform(26,7.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("rgba(153,102,0,0.459)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_563.setTransform(26,7.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("rgba(153,102,0,0.455)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_564.setTransform(26,7.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("rgba(153,102,0,0.451)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_565.setTransform(26,7.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("rgba(153,102,0,0.447)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_566.setTransform(26,7.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("rgba(153,102,0,0.443)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_567.setTransform(26,7.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("rgba(153,102,0,0.439)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_568.setTransform(26,7.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("rgba(153,102,0,0.435)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_569.setTransform(26,7.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("rgba(153,102,0,0.431)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_570.setTransform(26,7.3);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("rgba(153,102,0,0.427)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_571.setTransform(26,7.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("rgba(153,102,0,0.424)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_572.setTransform(26,7.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("rgba(153,102,0,0.42)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_573.setTransform(26,7.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("rgba(153,102,0,0.416)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_574.setTransform(26,7.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("rgba(153,102,0,0.412)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_575.setTransform(26,7.3);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("rgba(153,102,0,0.408)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_576.setTransform(26,7.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("rgba(153,102,0,0.404)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_577.setTransform(26,7.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("rgba(153,102,0,0.4)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_578.setTransform(26,7.3);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("rgba(153,102,0,0.396)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_579.setTransform(26,7.3);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("rgba(153,102,0,0.392)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_580.setTransform(26,7.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("rgba(153,102,0,0.388)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_581.setTransform(26,7.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("rgba(153,102,0,0.384)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_582.setTransform(26,7.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("rgba(153,102,0,0.38)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_583.setTransform(26,7.3);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("rgba(153,102,0,0.376)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_584.setTransform(26,7.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("rgba(153,102,0,0.373)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_585.setTransform(26,7.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("rgba(153,102,0,0.369)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_586.setTransform(26,7.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("rgba(153,102,0,0.365)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_587.setTransform(26,7.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("rgba(153,102,0,0.361)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_588.setTransform(26,7.3);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("rgba(153,102,0,0.357)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_589.setTransform(26,7.3);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("rgba(153,102,0,0.353)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_590.setTransform(26,7.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("rgba(153,102,0,0.349)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_591.setTransform(26,7.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("rgba(153,102,0,0.345)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_592.setTransform(26,7.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("rgba(153,102,0,0.341)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_593.setTransform(26,7.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("rgba(153,102,0,0.337)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_594.setTransform(26,7.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("rgba(153,102,0,0.333)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_595.setTransform(26,7.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("rgba(153,102,0,0.329)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_596.setTransform(26,7.3);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("rgba(153,102,0,0.325)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_597.setTransform(26,7.3);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("rgba(153,102,0,0.322)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_598.setTransform(26,7.3);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("rgba(153,102,0,0.318)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_599.setTransform(26,7.3);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("rgba(153,102,0,0.314)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_600.setTransform(26,7.3);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("rgba(153,102,0,0.31)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_601.setTransform(26,7.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("rgba(153,102,0,0.306)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_602.setTransform(26,7.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("rgba(153,102,0,0.302)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_603.setTransform(26,7.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("rgba(153,102,0,0.298)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_604.setTransform(26,7.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("rgba(153,102,0,0.294)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_605.setTransform(26,7.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("rgba(153,102,0,0.29)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_606.setTransform(26,7.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("rgba(153,102,0,0.286)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_607.setTransform(26,7.3);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("rgba(153,102,0,0.282)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_608.setTransform(26,7.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("rgba(153,102,0,0.278)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_609.setTransform(26,7.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("rgba(153,102,0,0.275)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_610.setTransform(26,7.3);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("rgba(153,102,0,0.271)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_611.setTransform(26,7.3);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("rgba(153,102,0,0.267)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_612.setTransform(26,7.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("rgba(153,102,0,0.263)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_613.setTransform(26,7.3);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("rgba(153,102,0,0.259)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_614.setTransform(26,7.3);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("rgba(153,102,0,0.255)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_615.setTransform(26,7.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("rgba(153,102,0,0.251)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_616.setTransform(26,7.3);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("rgba(153,102,0,0.247)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_617.setTransform(26,7.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("rgba(153,102,0,0.243)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_618.setTransform(26,7.3);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("rgba(153,102,0,0.239)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_619.setTransform(26,7.3);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("rgba(153,102,0,0.235)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_620.setTransform(26,7.3);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("rgba(153,102,0,0.231)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_621.setTransform(26,7.3);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("rgba(153,102,0,0.227)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_622.setTransform(26,7.3);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("rgba(153,102,0,0.224)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_623.setTransform(26,7.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("rgba(153,102,0,0.22)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_624.setTransform(26,7.3);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("rgba(153,102,0,0.216)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_625.setTransform(26,7.3);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("rgba(153,102,0,0.212)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_626.setTransform(26,7.3);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("rgba(153,102,0,0.208)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_627.setTransform(26,7.3);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("rgba(153,102,0,0.204)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_628.setTransform(26,7.3);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("rgba(153,102,0,0.2)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_629.setTransform(26,7.3);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("rgba(153,102,0,0.196)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_630.setTransform(26,7.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("rgba(153,102,0,0.192)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_631.setTransform(26,7.3);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("rgba(153,102,0,0.188)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_632.setTransform(26,7.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("rgba(153,102,0,0.184)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_633.setTransform(26,7.3);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("rgba(153,102,0,0.18)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_634.setTransform(26,7.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("rgba(153,102,0,0.176)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_635.setTransform(26,7.3);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("rgba(153,102,0,0.173)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_636.setTransform(26,7.3);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("rgba(153,102,0,0.169)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_637.setTransform(26,7.3);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("rgba(153,102,0,0.165)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_638.setTransform(26,7.3);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("rgba(153,102,0,0.161)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_639.setTransform(26,7.3);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("rgba(153,102,0,0.157)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_640.setTransform(26,7.3);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("rgba(153,102,0,0.153)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_641.setTransform(26,7.3);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("rgba(153,102,0,0.149)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_642.setTransform(26,7.3);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("rgba(153,102,0,0.145)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_643.setTransform(26,7.3);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("rgba(153,102,0,0.141)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_644.setTransform(26,7.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("rgba(153,102,0,0.137)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_645.setTransform(26,7.3);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("rgba(153,102,0,0.133)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_646.setTransform(26,7.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("rgba(153,102,0,0.129)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_647.setTransform(26,7.3);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("rgba(153,102,0,0.125)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_648.setTransform(26,7.3);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("rgba(153,102,0,0.122)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_649.setTransform(26,7.3);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("rgba(153,102,0,0.118)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_650.setTransform(26,7.3);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("rgba(153,102,0,0.114)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_651.setTransform(26,7.3);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("rgba(153,102,0,0.11)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_652.setTransform(26,7.3);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("rgba(153,102,0,0.106)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_653.setTransform(26,7.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("rgba(153,102,0,0.102)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_654.setTransform(26,7.3);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("rgba(153,102,0,0.098)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_655.setTransform(26,7.3);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("rgba(153,102,0,0.094)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_656.setTransform(26,7.3);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("rgba(153,102,0,0.09)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_657.setTransform(26,7.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("rgba(153,102,0,0.086)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_658.setTransform(26,7.3);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("rgba(153,102,0,0.082)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_659.setTransform(26,7.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("rgba(153,102,0,0.078)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_660.setTransform(26,7.3);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("rgba(153,102,0,0.075)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_661.setTransform(26,7.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("rgba(153,102,0,0.071)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_662.setTransform(26,7.3);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("rgba(153,102,0,0.067)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_663.setTransform(26,7.3);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("rgba(153,102,0,0.063)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_664.setTransform(26,7.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("rgba(153,102,0,0.059)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_665.setTransform(26,7.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("rgba(153,102,0,0.055)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_666.setTransform(26,7.3);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("rgba(153,102,0,0.051)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_667.setTransform(26,7.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("rgba(153,102,0,0.047)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_668.setTransform(26,7.3);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("rgba(153,102,0,0.043)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_669.setTransform(26,7.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("rgba(153,102,0,0.039)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_670.setTransform(26,7.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("rgba(153,102,0,0.035)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_671.setTransform(26,7.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("rgba(153,102,0,0.031)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_672.setTransform(26,7.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("rgba(153,102,0,0.027)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_673.setTransform(26,7.3);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("rgba(153,102,0,0.024)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_674.setTransform(26,7.3);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("rgba(153,102,0,0.02)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_675.setTransform(26,7.3);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("rgba(153,102,0,0.016)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_676.setTransform(26,7.3);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("rgba(153,102,0,0.012)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_677.setTransform(26,7.3);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("rgba(153,102,0,0.008)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_678.setTransform(26,7.3);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("rgba(153,102,0,0.004)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_679.setTransform(26,7.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("rgba(153,102,0,0)").ss(1,1,1).p("AizAAQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJQAAAogPAiQgSAigTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLg");
	this.shape_680.setTransform(26,7.3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("rgba(153,102,0,0)").ss(1,1,1).p("AC0AAQAAAogPAiQgCAGgEAHQgMAVgTAUQg1A0hLAAQhKAAg1g0Qg0g1AAhLQAAhJA0g1QA1g1BKAAQBLAAA1A1QA0A1AABJg");
	this.shape_681.setTransform(26,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_424}]}).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).wait(1));

	// circle
	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#FFFFFF").ss(4.6,1,1).p("ACWAAQAAA/gsArQgIAIgJAHQgmAdgzAAQg9AAgtgsQgBgBgCgCQgogrAAg8QAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9g");
	this.shape_682.setTransform(26.3,7.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#FFFFFF").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_683.setTransform(26.3,7.1);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("rgba(255,255,255,0.996)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_684.setTransform(26.3,7.1);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("rgba(255,255,255,0.992)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_685.setTransform(26.3,7.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("rgba(255,255,255,0.988)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_686.setTransform(26.3,7.1);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("rgba(255,255,255,0.984)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_687.setTransform(26.3,7.1);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("rgba(255,255,255,0.98)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_688.setTransform(26.3,7.1);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("rgba(255,255,255,0.98)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_689.setTransform(26.3,7.1);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("rgba(255,255,255,0.976)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_690.setTransform(26.3,7.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("rgba(255,255,255,0.973)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_691.setTransform(26.3,7.1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("rgba(255,255,255,0.969)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_692.setTransform(26.3,7.1);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("rgba(255,255,255,0.965)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_693.setTransform(26.3,7.1);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("rgba(255,255,255,0.961)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg9AAgtgsQgrguAAg8g");
	this.shape_694.setTransform(26.3,7.1);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("rgba(255,255,255,0.957)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgsA+AAQA+AAAsAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg+AAgsgsQgrguAAg8g");
	this.shape_695.setTransform(26.3,7.1);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("rgba(255,255,255,0.953)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgsA+AAQA+AAAsAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg+AAgsgsQgrguAAg8g");
	this.shape_696.setTransform(26.3,7.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("rgba(255,255,255,0.949)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgsA+AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg+AAgsgsQgrguAAg8g");
	this.shape_697.setTransform(26.3,7.1);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("rgba(255,255,255,0.945)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgsA+AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg+AAgsgsQgrguAAg8g");
	this.shape_698.setTransform(26.3,7.1);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("rgba(255,255,255,0.941)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgsA+AAQA/AAArAsQAsAsAAA9QAAA/gsArQg3AsgzAAQg+AAgsgsQgrguAAg8g");
	this.shape_699.setTransform(26.3,7.1);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("rgba(255,255,255,0.937)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAsgtA+AAQA/AAArAtQAsArAAA+QAAA/gsArQg3AtgzAAQg+AAgsgtQgrguAAg8g");
	this.shape_700.setTransform(26.3,7.1);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("rgba(255,255,255,0.937)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_701.setTransform(26.3,7.1);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("rgba(255,255,255,0.933)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_702.setTransform(26.3,7.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("rgba(255,255,255,0.929)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_703.setTransform(26.3,7.1);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("rgba(255,255,255,0.929)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_704.setTransform(26.3,7.1);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("rgba(255,255,255,0.925)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_705.setTransform(26.3,7.1);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("rgba(255,255,255,0.922)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_706.setTransform(26.3,7.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("rgba(255,255,255,0.918)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_707.setTransform(26.3,7.1);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("rgba(255,255,255,0.914)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_708.setTransform(26.4,7.1);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("rgba(255,255,255,0.91)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrguAAg9g");
	this.shape_709.setTransform(26.4,7.1);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("rgba(255,255,255,0.906)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrguAAg9g");
	this.shape_710.setTransform(26.4,7.1);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("rgba(255,255,255,0.902)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrguAAg9g");
	this.shape_711.setTransform(26.4,7.1);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("rgba(255,255,255,0.898)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_712.setTransform(26.4,7.1);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("rgba(255,255,255,0.894)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_713.setTransform(26.4,7.1);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("rgba(255,255,255,0.89)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_714.setTransform(26.4,7.1);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("rgba(255,255,255,0.886)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_715.setTransform(26.4,7.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("rgba(255,255,255,0.882)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsArQg3AtgzAAQg9AAgtgtQgrguAAg8g");
	this.shape_716.setTransform(26.4,7.1);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("rgba(255,255,255,0.878)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_717.setTransform(26.4,7.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("rgba(255,255,255,0.875)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAtgtA9AAQA/AAArAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_718.setTransform(26.4,7.1);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("rgba(255,255,255,0.875)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgtA+AAQA+AAAsAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_719.setTransform(26.4,7.1);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("rgba(255,255,255,0.871)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgtA+AAQA+AAAsAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_720.setTransform(26.4,7.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("rgba(255,255,255,0.867)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgtA+AAQA+AAAsAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_721.setTransform(26.4,7.1);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("rgba(255,255,255,0.863)").ss(4.6,1,1).p("AiVAAQAAg9ArgsQAsgtA+AAQA+AAAsAtQAsAsAAA9QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_722.setTransform(26.4,7.1);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("rgba(255,255,255,0.859)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA+AAAsAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_723.setTransform(26.4,7.2);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("rgba(255,255,255,0.855)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA+AAAsAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_724.setTransform(26.4,7.2);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("rgba(255,255,255,0.851)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA+AAAsAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_725.setTransform(26.4,7.2);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("rgba(255,255,255,0.851)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA/AAArAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_726.setTransform(26.4,7.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("rgba(255,255,255,0.847)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA/AAArAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_727.setTransform(26.4,7.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("rgba(255,255,255,0.843)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA/AAArAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_728.setTransform(26.4,7.2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("rgba(255,255,255,0.839)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA/AAArAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_729.setTransform(26.4,7.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("rgba(255,255,255,0.835)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgsA+AAQA/AAArAsQAsAsAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_730.setTransform(26.4,7.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("rgba(255,255,255,0.831)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAsgtA+AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_731.setTransform(26.4,7.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("rgba(255,255,255,0.827)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAsgtA+AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_732.setTransform(26.4,7.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("rgba(255,255,255,0.824)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAsgtA+AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_733.setTransform(26.4,7.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("rgba(255,255,255,0.82)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAsgtA+AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_734.setTransform(26.4,7.2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("rgba(255,255,255,0.816)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAsgtA+AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_735.setTransform(26.4,7.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("rgba(255,255,255,0.812)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAsgtA+AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg+AAgsgsQgrgvAAg8g");
	this.shape_736.setTransform(26.4,7.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("rgba(255,255,255,0.812)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_737.setTransform(26.4,7.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("rgba(255,255,255,0.808)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_738.setTransform(26.4,7.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("rgba(255,255,255,0.804)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_739.setTransform(26.4,7.2);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("rgba(255,255,255,0.8)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_740.setTransform(26.4,7.2);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("rgba(255,255,255,0.796)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrgvAAg8g");
	this.shape_741.setTransform(26.4,7.2);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("rgba(255,255,255,0.792)").ss(4.6,1,1).p("AiVAAQAAg+ArgrQAtgtA9AAQA/AAArAtQAsArAAA+QAAA/gsAsQg3AsgzAAQg9AAgtgsQgrguAAg9g");
	this.shape_742.setTransform(26.4,7.2);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("rgba(255,255,255,0.792)").ss(4.6,1,1).p("AiWAAQAAg+AsgrQAsgtA+AAQA/AAArAtQAtArAAA+QAAA/gtAsQg3AsgzAAQg+AAgsgsQgsguAAg9g");
	this.shape_743.setTransform(26.4,7.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("rgba(255,255,255,0.788)").ss(4.6,1,1).p("AiWAAQAAg+AsgrQAsgtA+AAQA/AAArAtQAtArAAA+QAAA/gtAsQg3AsgzAAQg+AAgsgsQgsguAAg9g");
	this.shape_744.setTransform(26.4,7.2);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("rgba(255,255,255,0.784)").ss(4.6,1,1).p("AiWAAQAAg+AsgrQAsgtA+AAQA/AAArAtQAtArAAA+QAAA/gtAsQg3AsgzAAQg+AAgsgsQgsguAAg9g");
	this.shape_745.setTransform(26.4,7.2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("rgba(255,255,255,0.784)").ss(4.6,1,1).p("AiWAAQAAg9AsgsQAsgtA+AAQA/AAArAtQAtAsAAA9QAAA/gtAsQg3AsgzAAQg+AAgsgsQgsguAAg9g");
	this.shape_746.setTransform(26.4,7.2);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("rgba(255,255,255,0.78)").ss(4.6,1,1).p("AiWAAQAAg9AsgsQAsgtA+AAQA/AAArAtQAtAsAAA9QAAA/gtAsQg3AsgzAAQg+AAgsgsQgsguAAg9g");
	this.shape_747.setTransform(26.4,7.2);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("rgba(255,255,255,0.78)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_748.setTransform(26.4,7.2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("rgba(255,255,255,0.776)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_749.setTransform(26.4,7.2);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("rgba(255,255,255,0.773)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_750.setTransform(26.4,7.2);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("rgba(255,255,255,0.769)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_751.setTransform(26.4,7.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("rgba(255,255,255,0.765)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_752.setTransform(26.4,7.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("rgba(255,255,255,0.761)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_753.setTransform(26.4,7.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("rgba(255,255,255,0.757)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_754.setTransform(26.4,7.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("rgba(255,255,255,0.753)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgsgtQgsgvAAg8g");
	this.shape_755.setTransform(26.4,7.2);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("rgba(255,255,255,0.749)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrgvAAg8g");
	this.shape_756.setTransform(26.4,7.2);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("rgba(255,255,255,0.745)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrgvAAg8g");
	this.shape_757.setTransform(26.4,7.2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("rgba(255,255,255,0.741)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrgvAAg8g");
	this.shape_758.setTransform(26.4,7.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("rgba(255,255,255,0.737)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrgvAAg8g");
	this.shape_759.setTransform(26.4,7.2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("rgba(255,255,255,0.733)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrguAAg9g");
	this.shape_760.setTransform(26.4,7.2);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("rgba(255,255,255,0.729)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrguAAg9g");
	this.shape_761.setTransform(26.4,7.2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("rgba(255,255,255,0.725)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrguAAg9g");
	this.shape_762.setTransform(26.4,7.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("rgba(255,255,255,0.722)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrguAAg9g");
	this.shape_763.setTransform(26.4,7.2);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("rgba(255,255,255,0.718)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrguAAg9g");
	this.shape_764.setTransform(26.4,7.2);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("rgba(255,255,255,0.714)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrguAAg9g");
	this.shape_765.setTransform(26.4,7.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("rgba(255,255,255,0.71)").ss(4.6,1,1).p("AiVAAQAAg+ArgsQAsgtA+AAQA/AAArAtQAsAsAAA+QAAA/gsAsQg3AtgzAAQg+AAgsgtQgrguAAg9g");
	this.shape_766.setTransform(26.4,7.2);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("rgba(255,255,255,0.71)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_767.setTransform(26.5,7.2);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("rgba(255,255,255,0.706)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_768.setTransform(26.5,7.2);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("rgba(255,255,255,0.702)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_769.setTransform(26.5,7.2);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("rgba(255,255,255,0.698)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_770.setTransform(26.5,7.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("rgba(255,255,255,0.694)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_771.setTransform(26.5,7.3);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("rgba(255,255,255,0.69)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAsQg3AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_772.setTransform(26.5,7.3);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("rgba(255,255,255,0.69)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAtQg3AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_773.setTransform(26.5,7.3);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("rgba(255,255,255,0.686)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAtQg3AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_774.setTransform(26.5,7.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("rgba(255,255,255,0.682)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAtQg3AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_775.setTransform(26.5,7.3);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("rgba(255,255,255,0.682)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAtQg4AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_776.setTransform(26.5,7.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("rgba(255,255,255,0.678)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAtQg4AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_777.setTransform(26.5,7.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("rgba(255,255,255,0.675)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAABAgsAsQg4AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_778.setTransform(26.5,7.3);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("rgba(255,255,255,0.671)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAABAgsAsQg4AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_779.setTransform(26.5,7.3);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("rgba(255,255,255,0.667)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAABAgsAsQg4AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_780.setTransform(26.5,7.3);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("rgba(255,255,255,0.663)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAABAgsAsQg4AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_781.setTransform(26.5,7.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("rgba(255,255,255,0.659)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAABAgsAsQg4AsgzAAQg+AAgtgsQgrgvAAg9g");
	this.shape_782.setTransform(26.5,7.3);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("rgba(255,255,255,0.659)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAsQg4AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_783.setTransform(26.5,7.3);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("rgba(255,255,255,0.655)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAsQg4AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_784.setTransform(26.5,7.3);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("rgba(255,255,255,0.651)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAsQg4AtgzAAQg+AAgtgtQgrguAAg9g");
	this.shape_785.setTransform(26.5,7.3);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("rgba(255,255,255,0.651)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAsQg3Atg0AAQg+AAgtgtQgrguAAg9g");
	this.shape_786.setTransform(26.5,7.3);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("rgba(255,255,255,0.647)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAsQg3Atg0AAQg+AAgtgtQgrguAAg9g");
	this.shape_787.setTransform(26.5,7.3);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("rgba(255,255,255,0.643)").ss(4.6,1,1).p("AiWAAQAAg+ArgsQAtgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAsQg3Atg0AAQg+AAgtgtQgrguAAg9g");
	this.shape_788.setTransform(26.5,7.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("rgba(255,255,255,0.643)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAtQg3Asg0AAQg+AAgsgsQgsgvAAg9g");
	this.shape_789.setTransform(26.5,7.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("rgba(255,255,255,0.639)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAtQg3Asg0AAQg+AAgsgsQgsgvAAg9g");
	this.shape_790.setTransform(26.5,7.3);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("rgba(255,255,255,0.635)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAtQg3Asg0AAQg+AAgsgsQgsgvAAg9g");
	this.shape_791.setTransform(26.5,7.3);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("rgba(255,255,255,0.631)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAtQg3Asg0AAQg+AAgsgsQgsgvAAg9g");
	this.shape_792.setTransform(26.5,7.3);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("rgba(255,255,255,0.627)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAAsAtQAsAsAAA+QAAA/gsAtQg3Asg0AAQg+AAgsgsQgsgvAAg9g");
	this.shape_793.setTransform(26.5,7.3);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("rgba(255,255,255,0.624)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAtQg3AsgzAAQg+AAgsgsQgsgvAAg9g");
	this.shape_794.setTransform(26.5,7.3);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("rgba(255,255,255,0.62)").ss(4.6,1,1).p("AiWAAQAAg+AsgsQAsgtA+AAQA/AAArAtQAtAsAAA+QAAA/gtAtQg3AsgzAAQg+AAgsgsQgsgvAAg9g");
	this.shape_795.setTransform(26.5,7.3);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("rgba(255,255,255,0.62)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAAA/gtAtQg3AtgzAAQg+AAgsgtQgsgwAAg8g");
	this.shape_796.setTransform(26.5,7.3);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("rgba(255,255,255,0.616)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_797.setTransform(26.5,7.3);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("rgba(255,255,255,0.612)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_798.setTransform(26.5,7.3);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("rgba(255,255,255,0.608)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_799.setTransform(26.5,7.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("rgba(255,255,255,0.604)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_800.setTransform(26.5,7.3);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("rgba(255,255,255,0.6)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_801.setTransform(26.5,7.3);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("rgba(255,255,255,0.596)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_802.setTransform(26.5,7.3);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("rgba(255,255,255,0.592)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_803.setTransform(26.5,7.3);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("rgba(255,255,255,0.588)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_804.setTransform(26.5,7.3);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("rgba(255,255,255,0.584)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_805.setTransform(26.5,7.3);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("rgba(255,255,255,0.584)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgrgvAAg9g");
	this.shape_806.setTransform(26.5,7.3);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("rgba(255,255,255,0.58)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgrgvAAg9g");
	this.shape_807.setTransform(26.5,7.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("rgba(255,255,255,0.58)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAAA/gsAtQg4AtgzAAQg+AAgsgtQgrgvAAg9g");
	this.shape_808.setTransform(26.5,7.3);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("rgba(255,255,255,0.576)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAAA/gsAtQg4AtgzAAQg+AAgsgtQgrgvAAg9g");
	this.shape_809.setTransform(26.5,7.3);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("rgba(255,255,255,0.573)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAAA/gsAtQg4AtgzAAQg+AAgsgtQgrgvAAg9g");
	this.shape_810.setTransform(26.5,7.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("rgba(255,255,255,0.569)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAAA/gsAtQg4AtgzAAQg+AAgsgtQgrgvAAg9g");
	this.shape_811.setTransform(26.5,7.3);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("rgba(255,255,255,0.565)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAAA/gsAtQg4AtgzAAQg+AAgsgtQgrgvAAg9g");
	this.shape_812.setTransform(26.5,7.3);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("rgba(255,255,255,0.561)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAtgtA9AAQA/AAAsAtQAsAtAAA+QAAA/gsAtQg4AtgzAAQg9AAgtgtQgrgvAAg9g");
	this.shape_813.setTransform(26.5,7.3);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("rgba(255,255,255,0.557)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAtgtA9AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg9AAgtgtQgrgvAAg9g");
	this.shape_814.setTransform(26.5,7.3);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("rgba(255,255,255,0.553)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAtgtA9AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg9AAgtgtQgrgvAAg9g");
	this.shape_815.setTransform(26.5,7.3);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("rgba(255,255,255,0.549)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAtgtA9AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg9AAgtgtQgrgvAAg9g");
	this.shape_816.setTransform(26.5,7.3);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("rgba(255,255,255,0.549)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAtgtA9AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg3Atg0AAQg9AAgtgtQgrgvAAg9g");
	this.shape_817.setTransform(26.5,7.3);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("rgba(255,255,255,0.545)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAtgtA9AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg3Atg0AAQg9AAgtgtQgrgvAAg9g");
	this.shape_818.setTransform(26.5,7.3);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("rgba(255,255,255,0.541)").ss(4.6,1,1).p("AiVAAQAAg+ArgtQAtgtA9AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg3Atg0AAQg9AAgtgtQgrgvAAg9g");
	this.shape_819.setTransform(26.5,7.3);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("rgba(255,255,255,0.541)").ss(4.6,1,1).p("AiWAAQAAg+ArgtQAtgtA+AAQA/AAArAtQAtAtAAA+QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_820.setTransform(26.5,7.3);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("rgba(255,255,255,0.541)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_821.setTransform(26.5,7.4);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("rgba(255,255,255,0.537)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_822.setTransform(26.5,7.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("rgba(255,255,255,0.533)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_823.setTransform(26.5,7.4);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("rgba(255,255,255,0.529)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_824.setTransform(26.5,7.4);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("rgba(255,255,255,0.525)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_825.setTransform(26.5,7.4);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("rgba(255,255,255,0.522)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_826.setTransform(26.5,7.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("rgba(255,255,255,0.518)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_827.setTransform(26.5,7.4);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("rgba(255,255,255,0.514)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_828.setTransform(26.5,7.4);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("rgba(255,255,255,0.51)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_829.setTransform(26.5,7.4);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("rgba(255,255,255,0.506)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_830.setTransform(26.5,7.4);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("rgba(255,255,255,0.502)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtgtA+AAQA/AAArAtQAtAsAAA/QAABAgtAsQg3AtgzAAQg+AAgtgtQgrgvAAg9g");
	this.shape_831.setTransform(26.5,7.4);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("rgba(255,255,255,0.498)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_832.setTransform(26.5,7.4);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("rgba(255,255,255,0.494)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_833.setTransform(26.5,7.4);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("rgba(255,255,255,0.49)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_834.setTransform(26.5,7.4);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("rgba(255,255,255,0.486)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_835.setTransform(26.5,7.4);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("rgba(255,255,255,0.482)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_836.setTransform(26.5,7.4);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("rgba(255,255,255,0.478)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_837.setTransform(26.5,7.4);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("rgba(255,255,255,0.475)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_838.setTransform(26.5,7.4);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("rgba(255,255,255,0.471)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_839.setTransform(26.5,7.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("rgba(255,255,255,0.467)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_840.setTransform(26.5,7.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("rgba(255,255,255,0.463)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_841.setTransform(26.5,7.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("rgba(255,255,255,0.459)").ss(4.6,1,1).p("AiWAAQAAg+AsgtQAsgtA+AAQA/AAAsAtQAsAtAAA+QAABAgsAsQg4AtgzAAQg+AAgsgtQgsgvAAg9g");
	this.shape_842.setTransform(26.5,7.4);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("rgba(255,255,255,0.459)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAsguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAsQg4AugzAAQg+AAgsguQgsgvAAg9g");
	this.shape_843.setTransform(26.5,7.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("rgba(255,255,255,0.455)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAsguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAsQg4AugzAAQg+AAgsguQgsgvAAg9g");
	this.shape_844.setTransform(26.6,7.4);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("rgba(255,255,255,0.451)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAsguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgsgtQgsgwAAg9g");
	this.shape_845.setTransform(26.6,7.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("rgba(255,255,255,0.451)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAsguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg+AAgsgtQgsgwAAg9g");
	this.shape_846.setTransform(26.6,7.4);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("rgba(255,255,255,0.447)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAsguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg+AAgsgtQgsgwAAg9g");
	this.shape_847.setTransform(26.6,7.4);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("rgba(255,255,255,0.443)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAsguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg+AAgsgtQgsgwAAg9g");
	this.shape_848.setTransform(26.6,7.4);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("rgba(255,255,255,0.439)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAsguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg+AAgsgtQgsgvAAg+g");
	this.shape_849.setTransform(26.6,7.4);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("rgba(255,255,255,0.435)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAtguA9AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg9AAgtgtQgsgvAAg+g");
	this.shape_850.setTransform(26.6,7.4);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("rgba(255,255,255,0.431)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAtguA9AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg9AAgtgtQgsgvAAg+g");
	this.shape_851.setTransform(26.6,7.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("rgba(255,255,255,0.427)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAtguA9AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg9AAgtgtQgsgvAAg+g");
	this.shape_852.setTransform(26.6,7.4);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("rgba(255,255,255,0.424)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAtguA9AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg9AAgtgtQgsgvAAg+g");
	this.shape_853.setTransform(26.6,7.4);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("rgba(255,255,255,0.42)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAtguA9AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg3Atg0AAQg9AAgtgtQgsgvAAg+g");
	this.shape_854.setTransform(26.6,7.4);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("rgba(255,255,255,0.42)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAtguA9AAQA/AAAsAuQAsAsAAA/QAABAgsAsQg3Aug0AAQg9AAgtguQgsgvAAg9g");
	this.shape_855.setTransform(26.6,7.4);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("rgba(255,255,255,0.416)").ss(4.6,1,1).p("AiWAAQAAg/AsgsQAtguA9AAQA/AAAsAuQAsAsAAA/QAABAgsAsQg3Aug0AAQg9AAgtguQgsgvAAg9g");
	this.shape_856.setTransform(26.6,7.4);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("rgba(255,255,255,0.416)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAArAuQAtAsAAA/QAABAgtAsQg3AugzAAQg+AAgtguQgrgvAAg9g");
	this.shape_857.setTransform(26.6,7.4);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("rgba(255,255,255,0.412)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAArAuQAtAsAAA/QAABAgtAsQg3AugzAAQg+AAgtguQgrgvAAg9g");
	this.shape_858.setTransform(26.6,7.4);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("rgba(255,255,255,0.408)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAsQg4AugzAAQg+AAgtguQgrgvAAg9g");
	this.shape_859.setTransform(26.6,7.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("rgba(255,255,255,0.404)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_860.setTransform(26.6,7.4);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("rgba(255,255,255,0.4)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_861.setTransform(26.6,7.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("rgba(255,255,255,0.396)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_862.setTransform(26.6,7.4);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("rgba(255,255,255,0.392)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_863.setTransform(26.6,7.4);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("rgba(255,255,255,0.388)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_864.setTransform(26.6,7.4);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("rgba(255,255,255,0.384)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_865.setTransform(26.6,7.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("rgba(255,255,255,0.38)").ss(4.6,1,1).p("AiWAAQAAg/ArgsQAtguA+AAQA/AAAsAuQAsAsAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_866.setTransform(26.6,7.4);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("rgba(255,255,255,0.38)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAAsAtQAsAtAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_867.setTransform(26.6,7.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("rgba(255,255,255,0.376)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAAsAtQAsAtAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_868.setTransform(26.6,7.5);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("rgba(255,255,255,0.373)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_869.setTransform(26.6,7.5);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("rgba(255,255,255,0.369)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_870.setTransform(26.6,7.5);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("rgba(255,255,255,0.365)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_871.setTransform(26.6,7.5);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("rgba(255,255,255,0.361)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_872.setTransform(26.6,7.5);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("rgba(255,255,255,0.357)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_873.setTransform(26.6,7.5);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("rgba(255,255,255,0.353)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_874.setTransform(26.6,7.5);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("rgba(255,255,255,0.349)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_875.setTransform(26.6,7.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("rgba(255,255,255,0.345)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_876.setTransform(26.6,7.5);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("rgba(255,255,255,0.341)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_877.setTransform(26.6,7.5);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("rgba(255,255,255,0.337)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_878.setTransform(26.6,7.5);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("rgba(255,255,255,0.333)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_879.setTransform(26.6,7.5);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("rgba(255,255,255,0.329)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_880.setTransform(26.6,7.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("rgba(255,255,255,0.325)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgwAAg9g");
	this.shape_881.setTransform(26.6,7.5);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("rgba(255,255,255,0.322)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_882.setTransform(26.6,7.5);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("rgba(255,255,255,0.318)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAArAtQAtAtAAA/QAABAgtAtQg3AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_883.setTransform(26.6,7.5);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("rgba(255,255,255,0.318)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAAsAtQAsAtAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_884.setTransform(26.6,7.5);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("rgba(255,255,255,0.314)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAAsAtQAsAtAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_885.setTransform(26.6,7.5);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("rgba(255,255,255,0.31)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAAsAtQAsAtAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_886.setTransform(26.6,7.5);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("rgba(255,255,255,0.306)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAAsAtQAsAtAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_887.setTransform(26.6,7.5);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("rgba(255,255,255,0.302)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtgtA+AAQA/AAAsAtQAsAtAAA/QAABAgsAtQg4AtgzAAQg+AAgtgtQgrgvAAg+g");
	this.shape_888.setTransform(26.6,7.5);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f().s("rgba(255,255,255,0.298)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_889.setTransform(26.6,7.5);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("rgba(255,255,255,0.294)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_890.setTransform(26.6,7.5);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f().s("rgba(255,255,255,0.29)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_891.setTransform(26.6,7.5);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("rgba(255,255,255,0.286)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_892.setTransform(26.6,7.5);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().s("rgba(255,255,255,0.282)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_893.setTransform(26.6,7.5);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("rgba(255,255,255,0.278)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_894.setTransform(26.6,7.5);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f().s("rgba(255,255,255,0.275)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_895.setTransform(26.6,7.5);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("rgba(255,255,255,0.271)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_896.setTransform(26.6,7.5);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f().s("rgba(255,255,255,0.267)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_897.setTransform(26.6,7.5);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("rgba(255,255,255,0.263)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABBgsAsQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_898.setTransform(26.6,7.5);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f().s("rgba(255,255,255,0.263)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_899.setTransform(26.6,7.5);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("rgba(255,255,255,0.259)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_900.setTransform(26.6,7.5);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("rgba(255,255,255,0.259)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_901.setTransform(26.6,7.5);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("rgba(255,255,255,0.255)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_902.setTransform(26.6,7.5);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("rgba(255,255,255,0.251)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_903.setTransform(26.6,7.5);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("rgba(255,255,255,0.247)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAArAuQAtAtAAA/QAABAgtAtQg2Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_904.setTransform(26.7,7.5);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("rgba(255,255,255,0.243)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAArAuQAtAtAAA/QAABAgtAtQg2Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_905.setTransform(26.7,7.5);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("rgba(255,255,255,0.239)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAArAuQAtAtAAA/QAABAgtAtQg2Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_906.setTransform(26.7,7.5);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("rgba(255,255,255,0.235)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAArAuQAtAtAAA/QAABAgtAtQg2Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_907.setTransform(26.7,7.5);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("rgba(255,255,255,0.231)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAArAuQAtAtAAA/QAABAgtAtQg2Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_908.setTransform(26.7,7.5);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("rgba(255,255,255,0.227)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAArAuQAtAtAAA/QAABAgtAtQg2Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_909.setTransform(26.7,7.5);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("rgba(255,255,255,0.227)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg3Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_910.setTransform(26.7,7.5);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("rgba(255,255,255,0.224)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg3Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_911.setTransform(26.7,7.5);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("rgba(255,255,255,0.22)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAtQg3Aug0AAQg+AAgtguQgrgvAAg+g");
	this.shape_912.setTransform(26.7,7.5);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("rgba(255,255,255,0.22)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtgtA+AAQA/AAAsAtQAsAtAABAQAABAgsAtQg3Aug0AAQg+AAgtguQgrgwAAg9g");
	this.shape_913.setTransform(26.7,7.6);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("rgba(255,255,255,0.216)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtgtA+AAQA/AAAsAtQAsAtAABAQAABAgsAtQg3Aug0AAQg+AAgtguQgrgwAAg9g");
	this.shape_914.setTransform(26.7,7.6);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("rgba(255,255,255,0.216)").ss(4.6,1,1).p("AiWAAQAAg/AsguQAsgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAuQg3Atg0AAQg+AAgsgtQgsgxAAg9g");
	this.shape_915.setTransform(26.7,7.6);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("rgba(255,255,255,0.212)").ss(4.6,1,1).p("AiWAAQAAg/AsguQAsgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAuQg3Atg0AAQg+AAgsgtQgsgxAAg9g");
	this.shape_916.setTransform(26.7,7.6);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("rgba(255,255,255,0.208)").ss(4.6,1,1).p("AiWAAQAAg/AsguQAsgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAuQg3Atg0AAQg+AAgsgtQgsgxAAg9g");
	this.shape_917.setTransform(26.7,7.6);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("rgba(255,255,255,0.208)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAuQg4AtgzAAQg+AAgtgtQgrgxAAg9g");
	this.shape_918.setTransform(26.7,7.6);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("rgba(255,255,255,0.204)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_919.setTransform(26.7,7.6);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("rgba(255,255,255,0.2)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_920.setTransform(26.7,7.6);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("rgba(255,255,255,0.196)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_921.setTransform(26.7,7.6);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("rgba(255,255,255,0.192)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_922.setTransform(26.7,7.6);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("rgba(255,255,255,0.188)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_923.setTransform(26.7,7.6);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("rgba(255,255,255,0.184)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_924.setTransform(26.7,7.6);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("rgba(255,255,255,0.18)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABBgsAtQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_925.setTransform(26.7,7.6);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("rgba(255,255,255,0.18)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_926.setTransform(26.7,7.6);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("rgba(255,255,255,0.176)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_927.setTransform(26.7,7.6);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("rgba(255,255,255,0.173)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_928.setTransform(26.7,7.6);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("rgba(255,255,255,0.169)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtgtA+AAQA/AAAsAtQAsAuAAA/QAABAgsAtQg4AugzAAQg+AAgtguQgrgvAAg+g");
	this.shape_929.setTransform(26.7,7.6);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("rgba(255,255,255,0.165)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAuQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_930.setTransform(26.7,7.6);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("rgba(255,255,255,0.161)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAuQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_931.setTransform(26.7,7.6);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("rgba(255,255,255,0.157)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAuQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_932.setTransform(26.7,7.6);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("rgba(255,255,255,0.153)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAuQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_933.setTransform(26.7,7.6);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("rgba(255,255,255,0.149)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAuQg4AtgzAAQg+AAgtgtQgrgwAAg+g");
	this.shape_934.setTransform(26.7,7.6);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("rgba(255,255,255,0.149)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABAgsAuQg3Atg0AAQg+AAgtgtQgrgwAAg+g");
	this.shape_935.setTransform(26.7,7.6);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("rgba(255,255,255,0.145)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABBgsAtQg3Atg0AAQg+AAgtgtQgrgwAAg+g");
	this.shape_936.setTransform(26.7,7.6);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("rgba(255,255,255,0.141)").ss(4.6,1,1).p("AiWAAQAAg/ArgtQAtguA+AAQA/AAAsAuQAsAtAAA/QAABBgsAtQg3Atg0AAQg+AAgtgtQgrgwAAg+g");
	this.shape_937.setTransform(26.7,7.6);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("rgba(255,255,255,0.137)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_938.setTransform(26.7,7.6);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("rgba(255,255,255,0.133)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_939.setTransform(26.7,7.6);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("rgba(255,255,255,0.129)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_940.setTransform(26.7,7.6);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("rgba(255,255,255,0.125)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_941.setTransform(26.7,7.6);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("rgba(255,255,255,0.125)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_942.setTransform(26.7,7.6);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("rgba(255,255,255,0.122)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_943.setTransform(26.7,7.6);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("rgba(255,255,255,0.118)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_944.setTransform(26.7,7.6);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f().s("rgba(255,255,255,0.114)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_945.setTransform(26.7,7.6);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("rgba(255,255,255,0.11)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_946.setTransform(26.7,7.6);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f().s("rgba(255,255,255,0.106)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_947.setTransform(26.7,7.6);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("rgba(255,255,255,0.102)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_948.setTransform(26.7,7.6);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().s("rgba(255,255,255,0.098)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABAgtAuQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_949.setTransform(26.7,7.6);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("rgba(255,255,255,0.094)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABAgtAuQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_950.setTransform(26.7,7.6);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f().s("rgba(255,255,255,0.09)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABAgtAuQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_951.setTransform(26.7,7.6);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("rgba(255,255,255,0.086)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_952.setTransform(26.7,7.6);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f().s("rgba(255,255,255,0.082)").ss(4.6,1,1).p("AiXAAQAAhAAsgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgsgwAAg+g");
	this.shape_953.setTransform(26.7,7.6);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("rgba(255,255,255,0.082)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_954.setTransform(26.7,7.6);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f().s("rgba(255,255,255,0.078)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_955.setTransform(26.7,7.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("rgba(255,255,255,0.075)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_956.setTransform(26.7,7.6);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("rgba(255,255,255,0.071)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_957.setTransform(26.7,7.6);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("rgba(255,255,255,0.071)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtguA+AAQA/AAAsAuQAsAuAAA/QAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_958.setTransform(26.7,7.6);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f().s("rgba(255,255,255,0.067)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtguA+AAQA/AAAsAuQAsAuAAA/QAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_959.setTransform(26.7,7.6);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("rgba(255,255,255,0.063)").ss(4.6,1,1).p("AiWAAQAAg/ArguQAtguA+AAQA/AAAsAuQAsAuAAA/QAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_960.setTransform(26.7,7.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f().s("rgba(255,255,255,0.059)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_961.setTransform(26.7,7.7);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("rgba(255,255,255,0.055)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_962.setTransform(26.7,7.7);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f().s("rgba(255,255,255,0.051)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg4AugzAAQg+AAgtguQgrgwAAg+g");
	this.shape_963.setTransform(26.7,7.7);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("rgba(255,255,255,0.047)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_964.setTransform(26.7,7.7);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f().s("rgba(255,255,255,0.043)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAsAtAABAQAABBgsAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_965.setTransform(26.7,7.7);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("rgba(255,255,255,0.039)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_966.setTransform(26.8,7.7);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f().s("rgba(255,255,255,0.035)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_967.setTransform(26.8,7.7);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("rgba(255,255,255,0.031)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_968.setTransform(26.8,7.7);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f().s("rgba(255,255,255,0.027)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgvAAg/g");
	this.shape_969.setTransform(26.8,7.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("rgba(255,255,255,0.024)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgvAAg/g");
	this.shape_970.setTransform(26.8,7.7);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().s("rgba(255,255,255,0.02)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgvAAg/g");
	this.shape_971.setTransform(26.8,7.7);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("rgba(255,255,255,0.02)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_972.setTransform(26.8,7.7);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f().s("rgba(255,255,255,0.016)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_973.setTransform(26.8,7.7);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("rgba(255,255,255,0.012)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_974.setTransform(26.8,7.7);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f().s("rgba(255,255,255,0.008)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_975.setTransform(26.8,7.7);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("rgba(255,255,255,0.004)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_976.setTransform(26.8,7.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().s("rgba(255,255,255,0)").ss(4.6,1,1).p("AiWAAQAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAQAABBgtAtQg3Aug0AAQg+AAgtguQgrgwAAg+g");
	this.shape_977.setTransform(26.8,7.7);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("rgba(255,255,255,0)").ss(4.6,1,1).p("ACYAAQAABBgtAtQgIAJgJAHQgnAegzAAQg+AAgtguQgCgBgBgCQgogtAAg+QAAhAArgtQAtguA+AAQA/AAAsAuQAtAtAABAg");
	this.shape_978.setTransform(26.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_682}]}).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707,p:{x:26.3}}]},1).to({state:[{t:this.shape_707,p:{x:26.3}}]},1).to({state:[{t:this.shape_707,p:{x:26.4}}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_781}]},1).to({state:[{t:this.shape_781}]},1).to({state:[{t:this.shape_782}]},1).to({state:[{t:this.shape_783}]},1).to({state:[{t:this.shape_783}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785}]},1).to({state:[{t:this.shape_785}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_788}]},1).to({state:[{t:this.shape_789}]},1).to({state:[{t:this.shape_790}]},1).to({state:[{t:this.shape_790}]},1).to({state:[{t:this.shape_790}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_792}]},1).to({state:[{t:this.shape_792}]},1).to({state:[{t:this.shape_792}]},1).to({state:[{t:this.shape_793}]},1).to({state:[{t:this.shape_793}]},1).to({state:[{t:this.shape_793}]},1).to({state:[{t:this.shape_794}]},1).to({state:[{t:this.shape_794}]},1).to({state:[{t:this.shape_794}]},1).to({state:[{t:this.shape_795}]},1).to({state:[{t:this.shape_796}]},1).to({state:[{t:this.shape_797}]},1).to({state:[{t:this.shape_797}]},1).to({state:[{t:this.shape_797}]},1).to({state:[{t:this.shape_798}]},1).to({state:[{t:this.shape_798}]},1).to({state:[{t:this.shape_798}]},1).to({state:[{t:this.shape_799}]},1).to({state:[{t:this.shape_799}]},1).to({state:[{t:this.shape_799}]},1).to({state:[{t:this.shape_800}]},1).to({state:[{t:this.shape_800}]},1).to({state:[{t:this.shape_800}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_802}]},1).to({state:[{t:this.shape_802}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_806}]},1).to({state:[{t:this.shape_807}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_841}]},1).to({state:[{t:this.shape_841}]},1).to({state:[{t:this.shape_841}]},1).to({state:[{t:this.shape_842}]},1).to({state:[{t:this.shape_843,p:{x:26.5}}]},1).to({state:[{t:this.shape_843,p:{x:26.6}}]},1).to({state:[{t:this.shape_844}]},1).to({state:[{t:this.shape_844}]},1).to({state:[{t:this.shape_844}]},1).to({state:[{t:this.shape_845}]},1).to({state:[{t:this.shape_845}]},1).to({state:[{t:this.shape_846}]},1).to({state:[{t:this.shape_847}]},1).to({state:[{t:this.shape_847}]},1).to({state:[{t:this.shape_848}]},1).to({state:[{t:this.shape_848}]},1).to({state:[{t:this.shape_848}]},1).to({state:[{t:this.shape_849}]},1).to({state:[{t:this.shape_849}]},1).to({state:[{t:this.shape_849}]},1).to({state:[{t:this.shape_850}]},1).to({state:[{t:this.shape_850}]},1).to({state:[{t:this.shape_850}]},1).to({state:[{t:this.shape_851}]},1).to({state:[{t:this.shape_851}]},1).to({state:[{t:this.shape_851}]},1).to({state:[{t:this.shape_852}]},1).to({state:[{t:this.shape_852}]},1).to({state:[{t:this.shape_852}]},1).to({state:[{t:this.shape_853}]},1).to({state:[{t:this.shape_853}]},1).to({state:[{t:this.shape_854}]},1).to({state:[{t:this.shape_854}]},1).to({state:[{t:this.shape_855}]},1).to({state:[{t:this.shape_856}]},1).to({state:[{t:this.shape_857}]},1).to({state:[{t:this.shape_857}]},1).to({state:[{t:this.shape_858}]},1).to({state:[{t:this.shape_858}]},1).to({state:[{t:this.shape_858}]},1).to({state:[{t:this.shape_859}]},1).to({state:[{t:this.shape_859}]},1).to({state:[{t:this.shape_859}]},1).to({state:[{t:this.shape_860}]},1).to({state:[{t:this.shape_860}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_866}]},1).to({state:[{t:this.shape_867}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_878}]},1).to({state:[{t:this.shape_878}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_882}]},1).to({state:[{t:this.shape_882}]},1).to({state:[{t:this.shape_882}]},1).to({state:[{t:this.shape_883}]},1).to({state:[{t:this.shape_884}]},1).to({state:[{t:this.shape_884}]},1).to({state:[{t:this.shape_885}]},1).to({state:[{t:this.shape_885}]},1).to({state:[{t:this.shape_886}]},1).to({state:[{t:this.shape_886}]},1).to({state:[{t:this.shape_886}]},1).to({state:[{t:this.shape_887}]},1).to({state:[{t:this.shape_887}]},1).to({state:[{t:this.shape_887}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_889}]},1).to({state:[{t:this.shape_889}]},1).to({state:[{t:this.shape_889}]},1).to({state:[{t:this.shape_890}]},1).to({state:[{t:this.shape_890}]},1).to({state:[{t:this.shape_891}]},1).to({state:[{t:this.shape_891}]},1).to({state:[{t:this.shape_891}]},1).to({state:[{t:this.shape_892}]},1).to({state:[{t:this.shape_892}]},1).to({state:[{t:this.shape_892}]},1).to({state:[{t:this.shape_893}]},1).to({state:[{t:this.shape_893}]},1).to({state:[{t:this.shape_893}]},1).to({state:[{t:this.shape_894}]},1).to({state:[{t:this.shape_894}]},1).to({state:[{t:this.shape_894}]},1).to({state:[{t:this.shape_895}]},1).to({state:[{t:this.shape_895}]},1).to({state:[{t:this.shape_895}]},1).to({state:[{t:this.shape_896}]},1).to({state:[{t:this.shape_896}]},1).to({state:[{t:this.shape_897}]},1).to({state:[{t:this.shape_897}]},1).to({state:[{t:this.shape_897}]},1).to({state:[{t:this.shape_898}]},1).to({state:[{t:this.shape_898}]},1).to({state:[{t:this.shape_899}]},1).to({state:[{t:this.shape_900}]},1).to({state:[{t:this.shape_901}]},1).to({state:[{t:this.shape_901}]},1).to({state:[{t:this.shape_902}]},1).to({state:[{t:this.shape_902}]},1).to({state:[{t:this.shape_902}]},1).to({state:[{t:this.shape_903}]},1).to({state:[{t:this.shape_903}]},1).to({state:[{t:this.shape_904}]},1).to({state:[{t:this.shape_904}]},1).to({state:[{t:this.shape_904}]},1).to({state:[{t:this.shape_905}]},1).to({state:[{t:this.shape_905}]},1).to({state:[{t:this.shape_905}]},1).to({state:[{t:this.shape_906}]},1).to({state:[{t:this.shape_906}]},1).to({state:[{t:this.shape_906}]},1).to({state:[{t:this.shape_907}]},1).to({state:[{t:this.shape_907}]},1).to({state:[{t:this.shape_907}]},1).to({state:[{t:this.shape_908}]},1).to({state:[{t:this.shape_908}]},1).to({state:[{t:this.shape_908}]},1).to({state:[{t:this.shape_909}]},1).to({state:[{t:this.shape_910}]},1).to({state:[{t:this.shape_911}]},1).to({state:[{t:this.shape_911}]},1).to({state:[{t:this.shape_911}]},1).to({state:[{t:this.shape_912}]},1).to({state:[{t:this.shape_913}]},1).to({state:[{t:this.shape_913}]},1).to({state:[{t:this.shape_914}]},1).to({state:[{t:this.shape_914}]},1).to({state:[{t:this.shape_915}]},1).to({state:[{t:this.shape_916}]},1).to({state:[{t:this.shape_916}]},1).to({state:[{t:this.shape_916}]},1).to({state:[{t:this.shape_917}]},1).to({state:[{t:this.shape_918}]},1).to({state:[{t:this.shape_919}]},1).to({state:[{t:this.shape_919}]},1).to({state:[{t:this.shape_919}]},1).to({state:[{t:this.shape_920}]},1).to({state:[{t:this.shape_920}]},1).to({state:[{t:this.shape_920}]},1).to({state:[{t:this.shape_921}]},1).to({state:[{t:this.shape_921}]},1).to({state:[{t:this.shape_921}]},1).to({state:[{t:this.shape_922}]},1).to({state:[{t:this.shape_922}]},1).to({state:[{t:this.shape_922}]},1).to({state:[{t:this.shape_923}]},1).to({state:[{t:this.shape_923}]},1).to({state:[{t:this.shape_923}]},1).to({state:[{t:this.shape_924}]},1).to({state:[{t:this.shape_924}]},1).to({state:[{t:this.shape_925}]},1).to({state:[{t:this.shape_925}]},1).to({state:[{t:this.shape_926}]},1).to({state:[{t:this.shape_927}]},1).to({state:[{t:this.shape_927}]},1).to({state:[{t:this.shape_927}]},1).to({state:[{t:this.shape_928}]},1).to({state:[{t:this.shape_928}]},1).to({state:[{t:this.shape_928}]},1).to({state:[{t:this.shape_929}]},1).to({state:[{t:this.shape_929}]},1).to({state:[{t:this.shape_929}]},1).to({state:[{t:this.shape_930}]},1).to({state:[{t:this.shape_930}]},1).to({state:[{t:this.shape_931}]},1).to({state:[{t:this.shape_931}]},1).to({state:[{t:this.shape_931}]},1).to({state:[{t:this.shape_932}]},1).to({state:[{t:this.shape_932}]},1).to({state:[{t:this.shape_932}]},1).to({state:[{t:this.shape_933}]},1).to({state:[{t:this.shape_933}]},1).to({state:[{t:this.shape_933}]},1).to({state:[{t:this.shape_934}]},1).to({state:[{t:this.shape_935}]},1).to({state:[{t:this.shape_935}]},1).to({state:[{t:this.shape_936}]},1).to({state:[{t:this.shape_936}]},1).to({state:[{t:this.shape_936}]},1).to({state:[{t:this.shape_937}]},1).to({state:[{t:this.shape_937}]},1).to({state:[{t:this.shape_938}]},1).to({state:[{t:this.shape_938}]},1).to({state:[{t:this.shape_938}]},1).to({state:[{t:this.shape_939}]},1).to({state:[{t:this.shape_939}]},1).to({state:[{t:this.shape_939}]},1).to({state:[{t:this.shape_940}]},1).to({state:[{t:this.shape_940}]},1).to({state:[{t:this.shape_940}]},1).to({state:[{t:this.shape_941}]},1).to({state:[{t:this.shape_941}]},1).to({state:[{t:this.shape_942}]},1).to({state:[{t:this.shape_943}]},1).to({state:[{t:this.shape_943}]},1).to({state:[{t:this.shape_943}]},1).to({state:[{t:this.shape_944}]},1).to({state:[{t:this.shape_944}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_946}]},1).to({state:[{t:this.shape_946}]},1).to({state:[{t:this.shape_946}]},1).to({state:[{t:this.shape_947}]},1).to({state:[{t:this.shape_947}]},1).to({state:[{t:this.shape_947}]},1).to({state:[{t:this.shape_948}]},1).to({state:[{t:this.shape_948}]},1).to({state:[{t:this.shape_948}]},1).to({state:[{t:this.shape_949}]},1).to({state:[{t:this.shape_949}]},1).to({state:[{t:this.shape_950}]},1).to({state:[{t:this.shape_950}]},1).to({state:[{t:this.shape_950}]},1).to({state:[{t:this.shape_951}]},1).to({state:[{t:this.shape_951}]},1).to({state:[{t:this.shape_951}]},1).to({state:[{t:this.shape_952}]},1).to({state:[{t:this.shape_952}]},1).to({state:[{t:this.shape_952}]},1).to({state:[{t:this.shape_953}]},1).to({state:[{t:this.shape_954}]},1).to({state:[{t:this.shape_954}]},1).to({state:[{t:this.shape_955}]},1).to({state:[{t:this.shape_955}]},1).to({state:[{t:this.shape_955}]},1).to({state:[{t:this.shape_956}]},1).to({state:[{t:this.shape_956}]},1).to({state:[{t:this.shape_957}]},1).to({state:[{t:this.shape_958}]},1).to({state:[{t:this.shape_958}]},1).to({state:[{t:this.shape_959}]},1).to({state:[{t:this.shape_959}]},1).to({state:[{t:this.shape_959}]},1).to({state:[{t:this.shape_960}]},1).to({state:[{t:this.shape_960}]},1).to({state:[{t:this.shape_960}]},1).to({state:[{t:this.shape_961}]},1).to({state:[{t:this.shape_961}]},1).to({state:[{t:this.shape_961}]},1).to({state:[{t:this.shape_962}]},1).to({state:[{t:this.shape_962}]},1).to({state:[{t:this.shape_963}]},1).to({state:[{t:this.shape_963}]},1).to({state:[{t:this.shape_963}]},1).to({state:[{t:this.shape_964}]},1).to({state:[{t:this.shape_964}]},1).to({state:[{t:this.shape_964}]},1).to({state:[{t:this.shape_965}]},1).to({state:[{t:this.shape_965}]},1).to({state:[{t:this.shape_965}]},1).to({state:[{t:this.shape_966}]},1).to({state:[{t:this.shape_966}]},1).to({state:[{t:this.shape_966}]},1).to({state:[{t:this.shape_967}]},1).to({state:[{t:this.shape_967}]},1).to({state:[{t:this.shape_967}]},1).to({state:[{t:this.shape_968}]},1).to({state:[{t:this.shape_968}]},1).to({state:[{t:this.shape_969}]},1).to({state:[{t:this.shape_969}]},1).to({state:[{t:this.shape_969}]},1).to({state:[{t:this.shape_970}]},1).to({state:[{t:this.shape_970}]},1).to({state:[{t:this.shape_970}]},1).to({state:[{t:this.shape_971}]},1).to({state:[{t:this.shape_972}]},1).to({state:[{t:this.shape_972}]},1).to({state:[{t:this.shape_973}]},1).to({state:[{t:this.shape_973}]},1).to({state:[{t:this.shape_973}]},1).to({state:[{t:this.shape_974}]},1).to({state:[{t:this.shape_974}]},1).to({state:[{t:this.shape_975}]},1).to({state:[{t:this.shape_975}]},1).to({state:[{t:this.shape_975}]},1).to({state:[{t:this.shape_976}]},1).to({state:[{t:this.shape_976}]},1).to({state:[{t:this.shape_976}]},1).to({state:[{t:this.shape_977}]},1).to({state:[{t:this.shape_978}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-11.7,38,38);


(lib.story = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.historia();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.482,0.496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.story, new cjs.Rectangle(0,0,180.2,61), null);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.iniciar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.523,0.512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(0,0,149,63), null);


(lib.sitemap_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.sitemap();
	this.instance.parent = this;
	this.instance.setTransform(-24,-24,1.001,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sitemap_1, new cjs.Rectangle(-24,-24,48.1,48), null);


(lib.restart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volver();
	this.instance.parent = this;
	this.instance.setTransform(-61.4,-37.1,0.29,0.384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.restart, new cjs.Rectangle(-61.4,-37.1,122.8,74.2), null);


(lib.instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.instrucciones();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.418,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.instructions, new cjs.Rectangle(0,0,264.1,59), null);


(lib.facebook_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.facebook();
	this.instance.parent = this;
	this.instance.setTransform(-87.4,-73.7,0.341,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AtfikIa/AAIAAFJI6/AAg");
	this.shape.setTransform(-0.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtfClIAAlJIa+AAIAAFJg");
	this.shape_1.setTransform(-0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.facebook_button, new cjs.Rectangle(-88,-73.7,175.4,147.5), null);


(lib.duck_yellow_full = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.duck_outline_yellow();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-30.3,0.554,0.557);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_yellow_full, new cjs.Rectangle(-31.5,-30.3,63.1,60.7), null);


(lib.duck_brown_full = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.duck_outline_brown();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-31,0.553,0.569);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_brown_full, new cjs.Rectangle(-31.5,-31,63,62), null);


(lib.credits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.creditos();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.456,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.credits, new cjs.Rectangle(0,0,186,55.8), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.twitter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.341,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,174.8,147.5), null);


(lib.back_sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Crea un objeto para administrar la reproduccion de un sonido
		var audio_game_over = new Audio("sounds/back_sound.wav");
		// Ajusta el volumen
		audio_game_over.volume = 0.1;
		// Reproduce el sonido de fondo
		audio_game_over.play();
		// Agrega un listener para que cuando acabe el sonido vuelva a comenzar
		audio_game_over.addEventListener('ended', function() {
			// Lleva el apuntador del sonido al inicio
		    this.currentTime = 0;
			// Reproduce nuevamente el sonido
		    this.play();
		}, false);
		// Reproduce el sonido de fondo
		audio_game_over.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiCiIAAlEIFEAAIAAFEg");
	this.shape.setTransform(16.3,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_sound, new cjs.Rectangle(0,0,32.5,32.5), null);


(lib.Interpolación28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("KhinSider\nhttp://downloads.khinsider.com/game\n-soundtracks/album/duck-hunt", "normal 400 20px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 352;
	this.text.parent = this;
	this.text.setTransform(0,-45.3);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-47.3,356,94.8);


(lib.Interpolación27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("KhinSider\nhttp://downloads.khinsider.com/game\n-soundtracks/album/duck-hunt", "normal 400 20px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 352;
	this.text.parent = this;
	this.text.setTransform(0,-45.3);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-47.3,356,94.8);


(lib.Interpolación26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("IMAGENES", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(0,-25.1);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-27.1,148,54.3);


(lib.Interpolación25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("IMAGENES", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(0,-25.1);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-27.1,148,54.3);


(lib.Interpolación24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("SONIDO", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(0,-25.1);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-27.1,148,54.3);


(lib.Interpolación23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("IMAGENES", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(0,-25.1);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-27.1,148,54.3);


(lib.Interpolación22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("FreeSound\nhttp://freesound.org/people/rhode\nsmas/sounds/321388/", "normal 400 20px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 326;
	this.text.parent = this;
	this.text.setTransform(0,-45.3);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-47.3,330,120);


(lib.Interpolación21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("IconArchive\nhttp://icons.iconarchive.com/icons/\nmartin-berube/flat-animal/256", "normal 400 20px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 326;
	this.text.parent = this;
	this.text.setTransform(0,-45.3);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-47.3,330,94.8);


(lib.Interpolación20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Kenney\n http://kenney.nl/assets/shooting\n-gallery", "normal 400 20px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 349;
	this.text.parent = this;
	this.text.setTransform(0,-58);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-60,353,120);


(lib.Interpolación19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Kenney\n http://kenney.nl/assets/shooting\n-gallery", "normal 400 20px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 349;
	this.text.parent = this;
	this.text.setTransform(0,-58);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-60,353,120);


(lib.Interpolación18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ganaste();
	this.instance.parent = this;
	this.instance.setTransform(-156.5,-77.5,0.696,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.5,-77.5,313,155);


(lib.Interpolación17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ganaste();
	this.instance.parent = this;
	this.instance.setTransform(-156.5,-77.5,0.696,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.5,-77.5,313,155);


(lib.Interpolación16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ganaste();
	this.instance.parent = this;
	this.instance.setTransform(-156.5,-77.5,0.696,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.5,-77.5,313,155);


(lib.Interpolación15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.perdiste();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-72.3,0.688,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.5,-72.3,329,144.7);


(lib.Interpolación13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.perdiste();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-72.3,0.688,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.5,-72.3,329,144.7);


(lib.Interpolación10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.water1();
	this.instance.parent = this;
	this.instance.setTransform(198,-112);

	this.instance_1 = new lib.water1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66,-112);

	this.instance_2 = new lib.water1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-66,-112);

	this.instance_3 = new lib.water1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-198,-112);

	this.instance_4 = new lib.water1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-330,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330,-112,660,224);


(lib.Interpolación9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.water1();
	this.instance.parent = this;
	this.instance.setTransform(198,-112);

	this.instance_1 = new lib.water1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66,-112);

	this.instance_2 = new lib.water1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-66,-112);

	this.instance_3 = new lib.water1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-198,-112);

	this.instance_4 = new lib.water1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-330,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330,-112,660,224);


(lib.wall_wood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.bg_wood();
	this.instance.parent = this;
	this.instance.setTransform(510,256);

	this.instance_1 = new lib.bg_wood();
	this.instance_1.parent = this;
	this.instance_1.setTransform(510,0);

	this.instance_2 = new lib.bg_wood();
	this.instance_2.parent = this;
	this.instance_2.setTransform(255,256);

	this.instance_3 = new lib.bg_wood();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,256);

	this.instance_4 = new lib.bg_wood();
	this.instance_4.parent = this;
	this.instance_4.setTransform(255,0);

	this.instance_5 = new lib.bg_wood();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wall_wood, new cjs.Rectangle(0,0,766,512), null);


(lib.trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.tree_oak();
	this.instance.parent = this;
	this.instance.setTransform(0,13);

	this.instance_1 = new lib.tree_pine();
	this.instance_1.parent = this;
	this.instance_1.setTransform(388,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.trees, new cjs.Rectangle(0,0,507,257), null);


(lib.grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.grass2();
	this.instance.parent = this;
	this.instance.setTransform(528,0);

	this.instance_1 = new lib.grass1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(396,16);

	this.instance_2 = new lib.grass2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(264,0);

	this.instance_3 = new lib.grass2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132,0);

	this.instance_4 = new lib.grass1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.grass, new cjs.Rectangle(0,0,660,216), null);


(lib.curtains_top_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curtain_top.png
	this.instance = new lib.curtain_top();
	this.instance.parent = this;
	this.instance.setTransform(151,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// curtain_top.png
	this.instance_1 = new lib.curtain_top();
	this.instance_1.parent = this;
	this.instance_1.setTransform(281,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// curtain_top.png
	this.instance_2 = new lib.curtain_top();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtains_top_2, new cjs.Rectangle(0,0,481,63), null);


(lib.curtains_top_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.curtain_straight();
	this.instance.parent = this;
	this.instance.setTransform(512,0);

	this.instance_1 = new lib.curtain_straight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(256,0);

	this.instance_2 = new lib.curtain_straight();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtains_top_1, new cjs.Rectangle(0,0,768,80), null);


(lib.curtain_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.curtain_rope();
	this.instance.parent = this;
	this.instance.setTransform(69,160);

	this.instance_1 = new lib.curtain();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,0,0.763,0.776,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtain_right, new cjs.Rectangle(0,0,109,330.8), null);


(lib.curtain_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.curtain_rope();
	this.instance.parent = this;
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.curtain();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,0,0.763,0.776);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtain_left, new cjs.Rectangle(0,0,109,330.8), null);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cloud2();
	this.instance.parent = this;
	this.instance.setTransform(231,0);

	this.instance_1 = new lib.cloud1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clouds, new cjs.Rectangle(0,0,372,84), null);


(lib.win_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(156.5,77.5);

	this.instance_1 = new lib.Interpolación17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(156.6,77.6,0.832,1,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolación18("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(156.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0.1,regY:0.1,scaleX:0.83,x:156.6,y:77.6},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,regX:0,regY:0,scaleX:1,x:156.5,y:77.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,313,155);


(lib.twitter_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.button = new lib.button();
	this.button.parent = this;
	this.button.setTransform(0,0.1,1,1,0,0,0,87.4,73.8);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AtfikIa/AAIAAFJI6/AAg");
	this.shape.setTransform(-0.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtfClIAAlJIa+AAIAAFJg");
	this.shape_1.setTransform(-0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twitter_button, new cjs.Rectangle(-88,-73.7,175.4,147.5), null);


(lib.restart_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.movieClip_12 = new lib.restart();
	this.movieClip_12.parent = this;
	this.movieClip_12.setTransform(61.4,37.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_12).to({rotation:5.3},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.8,74.2);


(lib.resources = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title_images
	this.instance = new lib.Interpolación25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-165.9,27.1);

	this.instance_1 = new lib.Interpolación26("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(181,27.1);

	this.instance_2 = new lib.Interpolación23("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(181,27.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolación24("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(532,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},70).to({state:[{t:this.instance_3}]},20).to({state:[]},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:181},19).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({_off:true,x:532},20).wait(100));

	// title_sound
	this.instance_4 = new lib.Interpolación24("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-165,27.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({x:183},19).wait(70).to({startPosition:0},0).to({x:531.9},20).wait(1));

	// kenney copia
	this.instance_5 = new lib.Interpolación19("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(534.5,86.9);

	this.instance_6 = new lib.Interpolación20("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(176.5,86.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:176.5},19).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},19).wait(20).to({startPosition:0},0).to({x:-176.5},20).to({_off:true},1).wait(149));

	// iconarchive
	this.instance_7 = new lib.Interpolación21("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(522.9,70.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({_off:false},0).to({x:178.9},21).wait(20).to({startPosition:0},0).to({x:-260.1},20).to({_off:true},1).wait(99));

	// freesound
	this.instance_8 = new lib.Interpolación22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(625,70.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({_off:false},0).to({x:181},19).wait(21).to({startPosition:0},0).to({x:-259.9},20).wait(50));

	// khinsider
	this.text = new cjs.Text("KhinSider\nhttp://downloads.khinsider.com/game\n-soundtracks/album/duck-hunt", "normal 400 20px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 352;
	this.text.parent = this;
	this.text.setTransform(637,30.4);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}
	this.text._off = true;

	this.instance_9 = new lib.Interpolación27("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(184.1,75.7);
	this.instance_9._off = true;

	this.instance_10 = new lib.Interpolación28("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-272.9,75.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},148).to({state:[{t:this.text}]},19).to({state:[{t:this.instance_9}]},21).to({state:[{t:this.instance_10}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(148).to({_off:false},0).to({x:184.1},19).to({_off:true},21).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(188).to({_off:false},0).to({_off:true,x:-272.9},20).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(232,106,23,0.6)").s().p("A79I0IAAxoMA37AAAIAARog");
	this.shape.setTransform(179,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(209));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.9,0,950.9,146.9);


(lib.game_over_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(164.5,72.4);

	this.instance_1 = new lib.Interpolación15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.5,72.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance_1}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.88},19).to({_off:true,scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329,144.7);


(lib.duck_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Agrega el listener necesario para el evento de tocar un pato cafe
		this.duck.addEventListener("click", duckBrownTouchMouseHandler.bind(this));
		
		// Funcion que administar tocar un pato amarillo
		function duckBrownTouchMouseHandler(){
			// Volver invisible el pato
			this.duck.visible = false;
			// Objeto que administra el sonido de "quack"
			var audio = new Audio("sounds/quack.mp3");
			// Reproducir el sonido "quack"
			audio.play();
		}
		
		// Agrega el listener necesario para la rotacion del pato
		this.addEventListener("tick",fl_RotateContinuously.bind(this));
		// Variable que indica la orientacion en la que el pato gira
		var delta = 1;
		
		// Funcion que administra la rotacion del pato
		function fl_RotateContinuously(){
			// Si el pato ya giro lo suficiente
			if(Math.abs(this.duck.rotation) > 5){
				// Cambiar la orientacion
				delta *= -1;
			}
			// Rotar el pato
			this.duck.rotation+=delta;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.duck = new lib.duck_yellow_full();
	this.duck.parent = this;
	this.duck.setTransform(31.6,30.4);

	this.timeline.addTween(cjs.Tween.get(this.duck).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_yellow, new cjs.Rectangle(0,0,63.1,60.7), null);


(lib.duck_brown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Agrega el listener necesario para el evento de tocar un pato cafe
		this.duck.addEventListener("click", duckBrownTouchMouseHandler.bind(this));
		
		// Funcion que administar tocar un pato cafe
		function duckBrownTouchMouseHandler(){
			// Volver invisible el pato
			this.duck.visible = false;
			// Objeto que administra el sonido de "quack"
			var audio = new Audio("sounds/quack.mp3");
			// Reproducir el sonido "quack"
			audio.play();
		}
		
		// Agrega el listener necesario para la rotacion del pato
		this.addEventListener("tick",fl_RotateContinuously.bind(this));
		// Variable que indica la orientacion en la que el pato gira
		var delta = 1;
		
		// Funcion que administra la rotacion del pato
		function fl_RotateContinuously(){
			// Si el pato ya giro lo suficiente
			if(Math.abs(this.duck.rotation) > 5){
				// Cambiar la orientacion
				delta *= -1;
			}
			// Rotar el pato
			this.duck.rotation+=delta;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.duck = new lib.duck_brown_full();
	this.duck.parent = this;
	this.duck.setTransform(31.5,31);

	this.timeline.addTween(cjs.Tween.get(this.duck).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_brown, new cjs.Rectangle(0,0,63,62), null);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.d13 = new lib.duck_yellow();
	this.d13.parent = this;
	this.d13.setTransform(-1366.5,0.8,1,1,0,0,0,31.6,30.4);

	this.d10 = new lib.duck_yellow();
	this.d10.parent = this;
	this.d10.setTransform(-1078.6,0.8,1,1,0,0,0,31.6,30.4);

	this.d6 = new lib.duck_yellow();
	this.d6.parent = this;
	this.d6.setTransform(-749.2,0.8,1,1,0,0,0,31.6,30.4);

	this.d3 = new lib.duck_yellow();
	this.d3.parent = this;
	this.d3.setTransform(-484.4,0.8,1,1,0,0,0,31.6,30.4);

	this.d11 = new lib.duck_brown();
	this.d11.parent = this;
	this.d11.setTransform(-1161.2,2.1,1,1,0,0,0,31.5,31);

	this.d12 = new lib.duck_brown();
	this.d12.parent = this;
	this.d12.setTransform(-1270.7,2.1,1,1,0,0,0,31.5,31);

	this.d1 = new lib.duck_brown();
	this.d1.parent = this;
	this.d1.setTransform(-295.5,-2.1,1,1,0,0,0,31.5,31);

	this.d2 = new lib.duck_brown();
	this.d2.parent = this;
	this.d2.setTransform(-405,-2.1,1,1,0,0,0,31.5,31);

	this.d4 = new lib.duck_brown();
	this.d4.parent = this;
	this.d4.setTransform(-574.8,-0.5,1,1,0,0,0,31.5,31);

	this.d5 = new lib.duck_brown();
	this.d5.parent = this;
	this.d5.setTransform(-671.4,-0.5,1,1,0,0,0,31.5,31);

	this.d8 = new lib.duck_brown();
	this.d8.parent = this;
	this.d8.setTransform(-906,1.4,1,1,0,0,0,31.5,31);

	this.d7 = new lib.duck_brown();
	this.d7.parent = this;
	this.d7.setTransform(-829.7,2.1,1,1,0,0,0,31.5,31);

	this.d9 = new lib.duck_brown();
	this.d9.parent = this;
	this.d9.setTransform(-994.6,-2.1,1,1,0,0,0,31.5,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d9},{t:this.d7},{t:this.d8},{t:this.d5},{t:this.d4},{t:this.d2},{t:this.d1},{t:this.d12},{t:this.d11},{t:this.d3},{t:this.d6},{t:this.d10},{t:this.d13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1398.1,-33.1,1134.1,66.2);


(lib.water_row = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(330,112);

	this.instance_1 = new lib.Interpolación10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(330,118.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:118.7},19).to({_off:false,y:112},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,y:112},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,660,224);


(lib.curtains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curtains_top_1
	this.instance = new lib.curtains_top_1();
	this.instance.parent = this;
	this.instance.setTransform(393,40,1,1,0,0,0,384,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// curtain_left
	this.instance_1 = new lib.curtain_left();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.5,206.4,1,1,0,0,0,54.5,165.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// curtain_right
	this.instance_2 = new lib.curtain_right();
	this.instance_2.parent = this;
	this.instance_2.setTransform(513.5,206.4,1,1,0,0,0,54.5,165.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// curtains_top_2
	this.instance_3 = new lib.curtains_top_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(280.5,72.5,1,1,0,0,0,240.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtains, new cjs.Rectangle(0,0,777,371.8), null);


(lib.ducks_row_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.duck_row_anim = new lib.Interpolación6();
	this.duck_row_anim.parent = this;
	this.duck_row_anim.setTransform(-408.5,22);

	this.timeline.addTween(cjs.Tween.get(this.duck_row_anim).to({x:1300},249).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1806.6,-11.1,1134.1,66.2);


(lib.ducks_row_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.duck_row_anim = new lib.Interpolación6();
	this.duck_row_anim.parent = this;
	this.duck_row_anim.setTransform(-408.5,22);

	this.timeline.addTween(cjs.Tween.get(this.duck_row_anim).to({x:1300},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1806.6,-11.1,1134.1,66.2);


(lib.duck_row_3_full = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.duck_yellow();
	this.instance.parent = this;
	this.instance.setTransform(1102.5,33.9,1,1,0,0,180,31.6,30.4);

	this.instance_1 = new lib.duck_yellow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(814.6,33.9,1,1,0,0,180,31.6,30.4);

	this.instance_2 = new lib.duck_yellow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485.3,33.9,1,1,0,0,180,31.6,30.4);

	this.instance_3 = new lib.duck_yellow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(220.4,33.9,1,1,0,0,180,31.6,30.4);

	this.instance_4 = new lib.duck_brown();
	this.instance_4.parent = this;
	this.instance_4.setTransform(897.2,35.2,1,1,0,0,180,31.5,31);

	this.instance_5 = new lib.duck_brown();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1006.7,35.2,1,1,0,0,180,31.5,31);

	this.instance_6 = new lib.duck_brown();
	this.instance_6.parent = this;
	this.instance_6.setTransform(31.5,31,1,1,0,0,180,31.5,31);

	this.instance_7 = new lib.duck_brown();
	this.instance_7.parent = this;
	this.instance_7.setTransform(141,31,1,1,0,0,180,31.5,31);

	this.instance_8 = new lib.duck_brown();
	this.instance_8.parent = this;
	this.instance_8.setTransform(310.8,32.6,1,1,0,0,180,31.5,31);

	this.instance_9 = new lib.duck_brown();
	this.instance_9.parent = this;
	this.instance_9.setTransform(407.4,32.6,1,1,0,0,180,31.5,31);

	this.instance_10 = new lib.duck_brown();
	this.instance_10.parent = this;
	this.instance_10.setTransform(642,34.5,1,1,0,0,180,31.5,31);

	this.instance_11 = new lib.duck_brown();
	this.instance_11.parent = this;
	this.instance_11.setTransform(565.7,35.2,1,1,0,0,180,31.5,31);

	this.instance_12 = new lib.duck_brown();
	this.instance_12.parent = this;
	this.instance_12.setTransform(730.6,31,1,1,0,0,180,31.5,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_row_3_full, new cjs.Rectangle(0,0,1134.1,66.2), null);


(lib.duck_row_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.duck_row_3_full();
	this.instance.parent = this;
	this.instance.setTransform(461.2,27.9,1,1,0,0,0,567.1,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1232.9},251).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.9,-5.2,1134.1,66.2);


(lib.water_row_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.water_row();
	this.instance.parent = this;
	this.instance.setTransform(330,129,1,1,0,0,0,330,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:136.9},19).to({y:129},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,17,660,224);


// stage content:
(lib.fdconejop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Detiene la escena en el frame actual
		this.stop();
		
		// Agrega el listener necesario para iniciar el juego
		this.start.addEventListener("click", startMouseHandler.bind(this));
		
		function startMouseHandler(){
			// Ir al nivel 1
			this.gotoAndStop(1);
		}
		
		// Agrega el listener necesario para ir a instrucciones
		this.instructions.addEventListener("click", instructionsMouseHandler.bind(this));
		
		function instructionsMouseHandler(){
			// Ir a instrucciones
			this.gotoAndStop(5);
		}
		
		// Agrega el listener necesario para it a hsitoria
		this.story.addEventListener("click", storyMouseHandler.bind(this));
		
		function storyMouseHandler(){
			// Ir a historia
			this.gotoAndStop(6);
		}
		
		// Agrega el listener necesario para ir a creditos
		this.credits.addEventListener("click", creditsMouseHandler.bind(this));
		
		function creditsMouseHandler(){
			// Ir a creditos
			this.gotoAndStop(7);
		}
		
		// Agregar listener para click en el boton de Twitter
		this.twitter.addEventListener("click", twitterClickToGoToWebPage);
		
		// Funcion que administra la funcion de compartir en Twitter
		function twitterClickToGoToWebPage() {
			window.open("https://twitter.com/intent/tweet?text=%23YJuan", "_blank");
		}
		
		// Agregar listener para click en el boton de Facebook
		this.facebook.addEventListener("click", facebookClickToGoToWebPage);
		
		// Funcion que administra la funcion de compartir en Twitter
		function facebookClickToGoToWebPage() {
			window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FYJuanUN20162%2F&amp;src=sdkpreparse", "_blank");
		}
		
		// Agregar listener para ir al mapa de sitio
		this.sitemap.addEventListener("click", siteMapMouseClickHandler.bind(this));
		
		// Funcion que administra ir al mapa de sitio
		function siteMapMouseClickHandler(){
			// Ir al mapa de sitio
			this.gotoAndStop(8);
		}
	}
	this.frame_1 = function() {
		// Detiene la escena en el frame actual
		this.stop();
		
		// Guardar una referencia de la escena
		var scenario = this;
		
		// Crea un timer para cuando se le acaba el tiempo al usuario
		var myTimer = setTimeout(timerListener, 30000, this);
		
		// Agrega el listener necesario para la fila inferior
		this.duck_row.addEventListener("click", duckRowMouseHandler.bind(this));
		
		// Funcion que adminstra cuando se le acabo el tiempo al jugador
		function timerListener (){
			// Se acabo el tiempo
			// Pierde el jugador
			scenario.gotoAndStop(3);
		}
		
		function duckRowMouseHandler(){
			// Obtener el numero de patos
			var ducks = parseInt(this.score.text);
			// Disminuir el numero de patos en 1
			ducks -= 1;
			// Actualizar el numero de patos
			this.score.text = (ducks + "");
			
			// Si acabo los patos
			if(ducks == 0){
				
				// Detener la operacion del timer
				clearTimeout(myTimer);
				
				// Crea un objeto para administrar la reproduccion de un sonido
				var audio_game_over = new Audio("sounds/win.mp3");
				// Ajusta el volumen
				audio_game_over.volume = 0.2;
				// Reproduce el sonido de pasar el nivel
				audio_game_over.play();		
				
				// Ir al nivel 2
				this.gotoAndStop(2);
			}
		}
	}
	this.frame_2 = function() {
		// Detiene la escena en el frame actual
		this.stop();
		
		// Guardar una referencia de la escena
		var scene = this;
		
		// Crea un timer para cuando se le acaba el tiempo al usuario
		var myTimer = setTimeout(timerListener, 30000, this);
		
		// Agrega los listeners necesarios para la fila superior e inferior
		this.duck_row2.addEventListener("click", mouseHandlerDuckRow2.bind(this));
		this.duck_row3.addEventListener("click", mouseHandlerDuckRow3.bind(this));
		
		// Iniciar componentes
		//scene.timer_clock2.gotoAndPlay(1);
		
		function timerListener (){
			// Se acabo el tiempo
			// Pierde el jugador
			scene.gotoAndStop(3);
		}
		
		// Funcion que administra cuando se toca un pato de la fila superior
		function mouseHandlerDuckRow2(){
			touch_duck();
		}
		
		// Funcion que administra cuando se toca un pato de la fila inferior
		function mouseHandlerDuckRow3(){
			touch_duck();
		}
		
		// Funcion que administra cuando se toca un pato
		function touch_duck(){
			
			// Obtener el numero de patos
			var ducks2 = parseInt(scene.score2.text);
			// Disminuir el numero de patos en 1
			ducks2 -= 1;
			// Actualizar el numero de patos
			scene.score2.text = (ducks2 + "");
			
			// Si acabo los patos
			if(ducks2 == 0){
				
				// Detener la operacion del timer
				clearTimeout(myTimer);
				
				// Ir a ganar
				scene.gotoAndStop(4);
			}
		}
	}
	this.frame_3 = function() {
		// Detiene la escena en el frame actual
		this.stop();
		
		// Agrega un listener al boton de reiniciar
		this.restart.addEventListener("click", restartMouseHandler.bind(this));
		
		// Crea un objeto para administrar la reproduccion de un sonido
		var audio_game_over = new Audio("sounds/game_over.mp3");
		// Ajusta el volumen
		audio_game_over.volume = 0.4;
		// Reproduce el sonido de perder
		audio_game_over.play();
		
		// Funcion que dirige al usuario al inicio
		function restartMouseHandler(){
			location.reload();
		}
	}
	this.frame_4 = function() {
		// Detiene la escena en el frame actual
		this.stop();
		
		// Agrega un listener al boton de reiniciar
		this.restart.addEventListener("click", restartMouseHandler.bind(this));
		
		// Crea un objeto para administrar la reproduccion de un sonido
		var audio_game_over = new Audio("sounds/win.mp3");
		// Ajusta el volumen
		audio_game_over.volume = 0.4;
		// Reproduce el sonido de ganar
		audio_game_over.play();
		
		// Funcion que dirige al usuario al inicio
		function restartMouseHandler(){
			location.reload();
		}
		
		
		// Agrega el listener al boton de compartir en Facebook
		this.facebook.addEventListener("click", facebookClickToGoToWebPage);
		
		// Funcion que administra compartir en Facebook
		function facebookClickToGoToWebPage() {
			// Abrir ventana de ir a Facebook
			window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FYJuanUN20162%2F&amp;src=sdkpreparse", "_blank");
		}
	}
	this.frame_5 = function() {
		// Agrega un listener al boton de reiniciar
		this.restart.addEventListener("click", restartMouseHandler.bind(this));
		
		// Funcion que dirige al usuario al inicio
		function restartMouseHandler(){
			location.reload();
		}
	}
	this.frame_6 = function() {
		// Agrega un listener al boton de reiniciar
		this.restart.addEventListener("click", restartMouseHandler.bind(this));
		
		// Funcion que dirige al usuario al inicio
		function restartMouseHandler(){
			location.reload();
		}
	}
	this.frame_7 = function() {
		// Agrega un listener al boton de reiniciar
		this.restart.addEventListener("click", restartMouseHandler.bind(this));
		
		// Funcion que dirige al usuario al inicio
		function restartMouseHandler(){
			location.reload();
		}
	}
	this.frame_8 = function() {
		// Agrega un listener al boton de reiniciar
		this.restart.addEventListener("click", restartMouseHandler.bind(this));
		
		// Funcion que dirige al usuario al inicio
		function restartMouseHandler(){
			location.reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// title
	this.instance = new lib.nivel1();
	this.instance.parent = this;
	this.instance.setTransform(226,0,0.357,0.312);

	this.instance_1 = new lib.nivel2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226,0,0.357,0.312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(6));

	// start
	this.sitemap = new lib.sitemap_1();
	this.sitemap.parent = this;
	this.sitemap.setTransform(294.7,377.4,0.541,0.583,0,0,0,0.1,0);

	this.twitter = new lib.twitter_button();
	this.twitter.parent = this;
	this.twitter.setTransform(420.4,349.1,0.761,0.797);

	this.facebook = new lib.facebook_button();
	this.facebook.parent = this;
	this.facebook.setTransform(420.6,319.9,0.756,0.779,0,0,0,-0.1,0.1);

	this.credits = new lib.credits();
	this.credits.parent = this;
	this.credits.setTransform(148,357.9,1,1,0,0,0,93,27.9);

	this.story = new lib.story();
	this.story.parent = this;
	this.story.setTransform(145,299.5,1,1,0,0,0,90,30.5);

	this.instructions = new lib.instructions();
	this.instructions.parent = this;
	this.instructions.setTransform(187.1,239.5,1,1,0,0,0,132.1,29.5);

	this.start = new lib.start();
	this.start.parent = this;
	this.start.setTransform(129.5,181.5,1,1,0,0,0,74.5,31.5);

	this.instance_2 = new lib.duck_brown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(455.6,213.9,1,1,0,-30,150,31.4,31.1);

	this.instance_3 = new lib.titulo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125,0,0.771,0.81);

	this.instance_4 = new lib.duck_yellow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(385.4,256,1,1,-30,0,0,31.5,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.start},{t:this.instructions},{t:this.story},{t:this.credits},{t:this.facebook},{t:this.twitter},{t:this.sitemap}]}).to({state:[]},1).wait(8));

	// instructions
	this.text = new cjs.Text("ESPANTA A LOS PATOS TOCANDOLOS", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(263.5,154.6);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text);
	}

	this.instance_5 = new lib.instructions();
	this.instance_5.parent = this;
	this.instance_5.setTransform(294.1,46.1,1,1,0,0,0,132.1,29.5);

	this.instance_6 = new lib.duck_brown();
	this.instance_6.parent = this;
	this.instance_6.setTransform(450.5,190.1,1,1,0,0,0,31.5,31);

	this.instance_7 = new lib.timer_clock();
	this.instance_7.parent = this;
	this.instance_7.setTransform(445.2,270.4,1.667,1.667,0,0,0,26.1,7.4);

	this.text_1 = new cjs.Text("ESPANTALOS ANTES QUE DESAPAREZCA EL RELOJ", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 299;
	this.text_1.parent = this;
	this.text_1.setTransform(259.5,236.6);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(232,106,23,0.6)").s().p("A9MNQIAAs1MA6aAAAIAAM1gA9NgaIAAs1MA6aAAAIAAM1g");
	this.shape.setTransform(295,231.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text_1},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.text}]},5).to({state:[]},1).wait(3));

	// story
	this.text_2 = new cjs.Text("LOS PATOS SE HAN VUELTO MALVADOS Y HAN SECUESTRADO A JUAN, ESPANTALOS EN LOS 2 NIVELES Y AL FINAL DESCUBRIRAS QUE TIPO DE ANIMAL ES.", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 299;
	this.text_2.parent = this;
	this.text_2.setTransform(295.5,138.8,1.231,1);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text_2);
	}

	this.instance_8 = new lib.historia();
	this.instance_8.parent = this;
	this.instance_8.setTransform(189,22,0.594,0.623);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(232,106,23,0.6)").s().p("A9MMdIAA45MA6ZAAAIAAY5g");
	this.shape_1.setTransform(295,226.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.instance_8},{t:this.text_2}]},6).to({state:[]},1).wait(2));

	// credits
	this.instance_9 = new lib.resources();
	this.instance_9.parent = this;
	this.instance_9.setTransform(273,270.1,1,1,0,0,0,179,56.5);

	this.text_3 = new cjs.Text("JUEGO REALIZADO POR FABIAN CONEJO fdconejop@unal.edu.co", "normal 400 25px 'Baloo Bhaina'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 311;
	this.text_3.parent = this;
	this.text_3.setTransform(273.3,123,1.105,1);
	if(!lib.properties.webfonts['Baloo Bhaina']) {
		lib.webFontTxtInst['Baloo Bhaina'] = lib.webFontTxtInst['Baloo Bhaina'] || [];
		lib.webFontTxtInst['Baloo Bhaina'].push(this.text_3);
	}

	this.instance_10 = new lib.creditos();
	this.instance_10.parent = this;
	this.instance_10.setTransform(162,12,0.583,0.593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(232,106,23,0.6)").s().p("A79HYIAAuvMA37AAAIAAOvg");
	this.shape_2.setTransform(273,158.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.instance_10},{t:this.text_3},{t:this.instance_9}]},7).to({state:[]},1).wait(1));

	// sitemap
	this.instance_11 = new lib.mapsite();
	this.instance_11.parent = this;
	this.instance_11.setTransform(199,146,0.47,0.527);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).wait(1));

	// restart
	this.restart = new lib.restart_anim();
	this.restart.parent = this;
	this.restart.setTransform(281,348.2,1,1,0,0,0,61.4,37.1);
	this.restart._off = true;

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(3).to({_off:false},0).wait(6));

	// game_over copia
	this.instance_12 = new lib.game_over_anim();
	this.instance_12.parent = this;
	this.instance_12.setTransform(291,226.7,0.69,0.682,0,0,0,164.5,72.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({_off:true},1).wait(5));

	// win
	this.instance_13 = new lib.juan();
	this.instance_13.parent = this;
	this.instance_13.setTransform(110,194,0.386,0.463);

	this.instance_14 = new lib.chicken();
	this.instance_14.parent = this;
	this.instance_14.setTransform(220,80,0.469,0.523);

	this.instance_15 = new lib.win_anim();
	this.instance_15.parent = this;
	this.instance_15.setTransform(277.1,54.5,0.649,0.535,0,0,0,156.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},4).to({state:[]},1).wait(4));

	// sound
	this.sound_back_object = new lib.back_sound();
	this.sound_back_object.parent = this;
	this.sound_back_object.setTransform(735.5,0);

	this.timeline.addTween(cjs.Tween.get(this.sound_back_object).wait(9));

	// time
	this.timer_clock = new lib.timer_clock();
	this.timer_clock.parent = this;
	this.timer_clock.setTransform(449.2,29.6);
	this.timer_clock._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer_clock).wait(1).to({_off:false},0).to({_off:true},1).wait(7));

	// time2
	this.timer_clock2 = new lib.timer_clock();
	this.timer_clock2.parent = this;
	this.timer_clock2.setTransform(449.2,29.6);
	this.timer_clock2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer_clock2).wait(2).to({_off:false},0).to({_off:true},1).wait(6));

	// score
	this.instance_16 = new lib.duck_target_white();
	this.instance_16.parent = this;
	this.instance_16.setTransform(17,17,0.428,0.395);

	this.score = new cjs.Text("13", "40px 'Bauhaus 93'", "#FFFFFF");
	this.score.name = "score";
	this.score.lineHeight = 47;
	this.score.lineWidth = 49;
	this.score.parent = this;
	this.score.setTransform(65.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.score},{t:this.instance_16}]},1).to({state:[]},1).wait(7));

	// score2
	this.score2 = new cjs.Text("26", "40px 'Bauhaus 93'", "#FFFFFF");
	this.score2.name = "score2";
	this.score2.lineHeight = 47;
	this.score2.lineWidth = 49;
	this.score2.parent = this;
	this.score2.setTransform(65.8,15.8);

	this.instance_17 = new lib.duck_target_white();
	this.instance_17.parent = this;
	this.instance_17.setTransform(17,17,0.428,0.395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.score2}]},2).to({state:[]},1).wait(6));

	// curtains
	this.instance_18 = new lib.curtains();
	this.instance_18.parent = this;
	this.instance_18.setTransform(379.5,185.9,1,1,0,0,0,388.5,185.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9));

	// water_row_2
	this.instance_19 = new lib.water_row();
	this.instance_19.parent = this;
	this.instance_19.setTransform(330,430,1,1,0,0,0,330,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},3).wait(6));

	// duck_row1
	this.duck_row = new lib.ducks_row_1();
	this.duck_row.parent = this;
	this.duck_row.setTransform(-567,338.7,1,1,0,0,0,-1239.6,21.9);

	this.duck_row2 = new lib.ducks_row_2();
	this.duck_row2.parent = this;
	this.duck_row2.setTransform(-435,338.7,1,1,0,0,0,-1107.6,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.duck_row}]},1).to({state:[{t:this.duck_row2}]},1).to({state:[]},1).wait(6));

	// water_row_1
	this.instance_20 = new lib.water_row_2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(269,371,1,1,0,0,0,330,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},3).wait(6));

	// duck_row_2
	this.duck_row3 = new lib.duck_row_3();
	this.duck_row3.parent = this;
	this.duck_row3.setTransform(1227.1,304.1,1,1,0,0,0,567.1,33.1);
	this.duck_row3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.duck_row3).wait(2).to({_off:false},0).to({_off:true},1).wait(6));

	// clouds
	this.instance_21 = new lib.clouds();
	this.instance_21.parent = this;
	this.instance_21.setTransform(280,105,1,1,0,0,0,186,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9));

	// trees
	this.instance_22 = new lib.trees();
	this.instance_22.parent = this;
	this.instance_22.setTransform(268.5,243.3,1,1,0,0,0,253.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(9));

	// grass
	this.instance_23 = new lib.grass();
	this.instance_23.parent = this;
	this.instance_23.setTransform(330,270,1,1,0,0,0,330,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9));

	// wall_wood
	this.instance_24 = new lib.wall_wood();
	this.instance_24.parent = this;
	this.instance_24.setTransform(384,256,1,1,0,0,0,384,256);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214,200,829,542);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png?1479610882625", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;