
//*****module*****
function rawData() {
  this.unit = new Array();        //所有存储对应unit的详细信息
  this.tempUnit = new Array();    //只存储对应的slot位置选择的单位是什么
  this.tempTar = new Array();     //存储选择的目标数组
};
//设置/刷新数据表
rawData.prototype.setUnitdata = function() {
  var pristflag = false, xms = 0;
  var smflag = false, xsm = 0;
  var ydflag = false, xyd = 0;
  var moSlot = -1;
  for(i=0;i<10;i++) {
    data.unit[i].dps = 0;
    data.unit[i].atkCount = 0;

    if(data.tempUnit[0][i]!=0) {
      data.unit[i].cat = data.tempUnit[0][i];
      data.unit[i].mtcat = data.tempUnit[1][i];
      switch(parseInt(data.tempUnit[0][i])) {
        case 1:
          data.unit[i].name = "zs";
          data.unit[i].maxhp = 32;
          data.unit[i].maxsp = 2;
          break;
        case 2:
          data.unit[i].name = "lr";
          data.unit[i].maxhp = 32;
          data.unit[i].maxsp = 2;
          break;
        case 3:
          data.unit[i].name = "sm";
          data.unit[i].maxhp = 32;
          data.unit[i].maxsp = 2;
          smflag = true;
          i>4?xsm=5:xsm=0;
          break;
        case 4:
          data.unit[i].name = "ws";
          data.unit[i].maxhp = 33;
          data.unit[i].maxsp = 2;
          break;
        case 5:
          data.unit[i].name = "dz";
          data.unit[i].maxhp = 31;
          data.unit[i].maxsp = 3;
          break;
        case 6:
          data.unit[i].name = "fs";
          data.unit[i].maxhp = 30;
          data.unit[i].maxsp = 2;
          break;
        case 7:
          data.unit[i].name = "xd";
          data.unit[i].maxhp = 33;
          data.unit[i].maxsp = 2;
          break;
        case 8:
          data.unit[i].name = "dk";
          data.unit[i].maxhp = 35;
          data.unit[i].maxsp = 2;
          break;
        case 9:
          data.unit[i].name = "qs";
          data.unit[i].maxhp = 31;
          data.unit[i].maxsp = 2;
          break;
        case 10:
          data.unit[i].name = "ms";
          data.unit[i].maxhp = 27;
          data.unit[i].maxsp = 2;
          pristflag = true;
          i>4?xms=5:xms=0;
          break;
        case 11:
          data.unit[i].name = "sr";
          data.unit[i].maxhp = 30;
          data.unit[i].maxsp = 2;
          break;
        case 12:
          data.unit[i].name = "pc";
          data.unit[i].maxhp = 32;
          data.unit[i].maxsp = 0;
          break;
        case 13:
          data.unit[i].name = "jb";
          data.unit[i].maxhp = 30;
          data.unit[i].maxsp = 2;
          break;
        case 14:
          data.unit[i].name = "yd";
          data.unit[i].maxhp = 33;
          data.unit[i].maxsp = 0;
          ydflag = true;
          i>4?xyd=0:xyd=5;
          break;
        case 15:
          data.unit[i].name = "yx";
          data.unit[i].maxhp = 32;
          data.unit[i].maxsp = 2;
          break;
        case 16:
          data.unit[i].name = "tf";
          data.unit[i].maxhp = 34;
          data.unit[i].maxsp = 2;
          break;
        case 17:
          data.unit[i].name = "mo";
          data.unit[i].maxhp = 10;
          data.unit[i].maxsp = 0;
          moSlot = i;
          break;
        case 100:
          data.unit[i].name = "ranger";
          data.unit[i].maxhp = 25;
          data.unit[i].maxsp = 0;
          break;
        case 200:
          data.unit[i].name = "sol";
          data.unit[i].maxhp = 12;
          data.unit[i].maxsp = 0;
          break;
      };
      
      data.unit[i].hp = data.unit[i].maxhp;
      if(data.tempUnit[1][i]==1) {
        data.unit[i].speed = 3;
      }
      else if(data.tempUnit[1][i]==2) {
        data.unit[i].speed = 2;
      }
      else {
        data.unit[i].speed = 1;
      };
      data.tempUnit[0][i]==15?data.unit[i].speed+=2:data.unit[i].speed;

      data.unit[i].sp = data.unit[i].maxsp;
      data.unit[i].angerflag = false;
      data.unit[i].iceblockflag = false;
      data.unit[i].enhanceflag = false;
      data.unit[i].tigerflag = false;
      data.unit[i].bearflag = false;
      data.unit[i].treeflag = false;
      data.unit[i].yy = 0;
      data.unit[i].tauntflag = false;
      data.unit[i].earthflag = false;
      data.unit[i].faintflag = false;
      data.unit[i].slowflag = false;
      data.unit[i].poison = 0;
      data.unit[i].confuse = 0;
      data.unit[i].bindflag = false;
      data.unit[i].drunkflag = false;
      data.unit[i].actionflag = false;
    };
  };

  if(pristflag==true) {
    for(j=0;j<5;j++) {
      if(data.unit[j+xms].cat!=0) {
        data.unit[j+xms].maxhp+=3;
        data.unit[j+xms].hp+=3;
        data.unit[j+xms].enhanceflag = true;
      };
    };
  };

  if(smflag==true) {
    for(j=0;j<5;j++) {
      if(data.unit[j+xsm].cat!=0) {
        data.unit[j+xsm].earthflag = true;
      };
    };
  };

  if(ydflag==true) {
    for(j=0;j<5;j++) {
      if(data.unit[j+xyd].cat!=0) {
        data.unit[j+xyd].bindflag = true;
      };
    };
  };

  if(moSlot>4) {
    //doll is downside
    for(i=0;i<5;i++) { 
      data.unit[i].cat>0?data.unit[moSlot].maxhp+=15:data.unit[moSlot].maxhp;
      data.unit[i+5].cat>0 && moSlot!=(i+5)?data.unit[moSlot].maxhp-=5:data.unit[moSlot].maxhp;
      data.unit[moSlot].maxhp<10?data.unit[moSlot].maxhp=10:data.unit[moSlot].maxhp;
      data.unit[moSlot].hp=data.unit[moSlot].maxhp;
    };
  }
  else if(moSlot!=-1) {
    //doll is upside
    for(i=0;i<5;i++) { 
      data.unit[i+5].cat>0?data.unit[moSlot].maxhp+=15:data.unit[moSlot].maxhp;
      data.unit[i].cat>0 && moSlot!=i?data.unit[moSlot].maxhp-=5:data.unit[moSlot].maxhp;
      data.unit[moSlot].maxhp<10?data.unit[moSlot].maxhp=10:data.unit[moSlot].maxhp;
      data.unit[moSlot].hp=data.unit[moSlot].maxhp;
    };
  };

};
//重置action flag
rawData.prototype.refActionflag = function() {
  for(i=0;i<10;i++) {
    data.unit[i].actionflag = false;
  };
  $("div.history-content").prepend("<p class='history-item'>所有单位已重置</p>");
};
//处理BUFF/DEBUFF 
rawData.prototype.runBuffs = function() {
  for(i=0;i<10;i++) {
    data.unit[i].faintflag = false;   //清除眩晕
    //清除减速
    if(data.unit[i].slowflag==true) {
      data.unit[i].speed+=2;
      data.unit[i].slowflag = false;
    };
    //中毒效果
    if(data.unit[i].poison>0) {
      data.unit[i].poison--;
      if(data.unit[i].hp>0) {
        data.unit[i].hp-=3;
        data.unit[i].hp<0?data.unit[i].hp=0:data.unit[i].hp;
        var t = setTimeout('painter.makeAttack('+i+', 3, "static/audio/poison.wav", "static/img/effdampoison.png");' , 100);
        $("div.history-content").prepend("<p class='history-item'>"+(i+1)+"号单位受到了3点毒药伤害</p>");
      };
    };
    //清除ms强化效果
    if(data.unit[i].cat==10 && data.unit[i].hp==0) {
      for(j=0;j<10;j++) {
        if(data.unit[j].enhanceflag==true && data.unit[j].hp>0) {
          data.unit[j].enhanceflag = false;
          data.unit[j].hp-=3;
          data.unit[j].hp<1?data.unit[j].hp=1:data.unit[j].hp;
        };
      };
      $("div.history-content").prepend("<p class='history-item'>强化效果消失</p>");
    };
    //清除YY效果
    if(data.unit[i].yy>0 && data.unit[i].hp>0) {
      data.unit[i].yy--;
      if(data.unit[i].yy==0) {
        data.unit[i].maxhp-=2;
        data.unit[i].hp-=2;
        data.unit[i].hp<1?data.unit[i].hp=1:data.unit[i].hp;
        data.unit[i].speed-=2;
      };
    };
    //树形态回血
    if(data.unit[i].treeflag==true && data.unit[i].hp>0) {
      var x;
      i>4?x=5:x=0;
      for(j=0;j<5;j++) {
        if(data.unit[j+x].hp>0) {
          data.unit[j+x].hp++;
          data.unit[j+x].hp>data.unit[j+x].maxhp?data.unit[j+x].hp=data.unit[j+x].maxhp:data.unit[j+x].hp;
          // painter.makeHeal(j+x, 1, "static/audio/heal.wav");
        };
      };
      $("div.history-content").prepend("<p class='history-item'>德鲁伊树形态为所有队友回复了生命值</p>");
    };
    //清除蛊惑效果
    data.unit[i].confuse>0?data.unit[i].confuse--:data.unit[i].confuse;
    //清除醉酒效果
    data.unit[i].drunkflag==true && controller.rollDice(5)==5?data.unit[i].drunkflag=false:data.unit[i].drunkflag;
    //清除园丁 致命藤蔓
    if(data.unit[i].cat==14 && data.unit[i].hp==0) {
      for(j=0;j<10;j++) {
        data.unit[j].bindflag = false;
      };
      $("div.history-content").prepend("<p class='history-item'>致命藤蔓效果消失了</p>");
    };

  };

  //执行 致命藤蔓
  for(i=0;i<10;i++) {
    if(data.unit[i].bindflag==true && data.unit[i].hp>0) {
      if(controller.rollDice(2)==2) {
        data.unit[i].hp-=2;
        data.unit[i].hp<0?data.unit[i].hp=0:data.unit[i].hp;
        var t = setTimeout('painter.makeAttack('+i+', 2, "static/audio/bind.wav", "static/img/effdamtree.png");' , 100);
        $("div.history-content").prepend("<p class='history-item'>致命藤蔓对"+(i+1)+"号单位造成2点自然伤害</p>");
      };
    };
  };

  //清除寒冰屏障
  if(controller.ibNum>0) {
    controller.ibNum++;
    if(controller.ibNum>3) {
      controller.ibNum = 0;
      for(i=0;i<10;i++) {
        data.unit[i].iceblockflag = false;
      };
      $("div.history-content").prepend("<p class='history-item'>寒冰屏障效果消失了</p>");
    };
  };


};

var data = new rawData();
//初始化单位
//cat -- 0-/1-ZS/2-LR/3-SM/4-WS/5-DZ/6-FS/7-XD/8-DK/9-QS/10-MS/11-SR吟游诗人/12-PC破城者/13-JB酒保/14-YD园丁/100-ranger/200-sol
//mtcat -- 0-/1-ghost/2-horse
//name -- zs/lr/.... 对应拿取图片
//buff/debuff -- 其中yy,posion,confuse计算层数，其他全为boolean类型
//data.unit[0-4]为上方5个单位，data.unit[5-8]为下方5个单位。使用Index+5来对应引用下方单位
data.unit.push({"cat":0, "mtcat": 0, "name":"", "dps": 0, "atkCount": 0, "maxhp": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false},
			    {"cat":0, "mtcat": 0, "name":"", "maxhp": 0, "dps": 0, "atkCount": 0, "hp": 0, "speed": 0, "maxsp": 0, "sp": 0, 
				"angerflag": false, "iceblockflag":false, "enhanceflag":false, "tigerflag":false, "bearflag":false,
			    "treeflag":false, "yy": 0, "tauntflag": false, "earthflag": false, 
			    "faintflag":false, "slowflag": false, "poison": 0, "confuse": 0, "bindflag": false, "drunkflag": false, "actionflag":false});

// 0-/1-ZS/2-LR/3-SM/4-WS/5-DZ/6-FS/7-XD/8-DK/9-QS/10-MS/11-SR吟游诗人/12-PC破城者/13-JB酒保/14-YD园丁/15-YX夜行者/16-TF屠夫/100-ranger/200-sol
// mtcat -- 0-/1-ghost/2-horse
data.tempUnit.push([0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0]);

//*****view*****
function viewer() {

};
//显示消息
viewer.prototype.showMsg = function(msg, timeShow, title, picName) {
  if(msg!="") {
    timeShow?timeShow:timeShow = 1500;
    title?title:title = "消 息";
    picName?picName = "static/img/"+picName+".png":picName="";

    $("p.msg-title").text(title);
    if(picName) {
      $("img.msg-pic").attr("src",picName);
      $("img.msg-pic").show();
    }
    else {
      $("img.msg-pic").hide();
    };
    $("p.msg-body").text(msg);

    var sizeWidth = document.body.clientWidth,
        sizeHeight = 620;
    $("div.msg-panel").css("left", (sizeWidth-parseInt($("div.msg-panel").css("width")))/2);
    $("div.msg-panel").css("top", (sizeHeight-parseInt($("div.msg-panel").css("Height")))/2);
    $("div.msg-panel").show();
    var t=setTimeout('$("div.msg-panel").hide();',timeShow);
  };
};
//显示技能提示
viewer.prototype.showSkilltip = function(event, rawID) {
  var newID = rawID.split("-")[1];
  switch(parseInt(data.unit[controller.slotUnit].cat)) {
    case 1:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("手持宽阔的剑刃斩击敌人，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("冲 锋");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("对一个敌方单位发起冲锋，被冲锋的单位及其相邻的另外一个单位(由你指定)将会被眩晕，并造成少量(2)直接伤害。被眩晕的目标将无法行动！");
          break;
        case 5:
          $("p#skill-name").text("鲁 莽");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 可以驱散");
          $("p#skill-def").text("你的正常攻击造成暴击的话，会获得激怒效果。激怒状态下你的攻击必定暴击，激怒攻击会消耗激怒，激怒攻击自己不会触发鲁莽");
          break;
      };
      break;
    case 2:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("挽起弓箭射击敌人，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("箭 雨");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("射出多重箭矢，对所有敌方单位造成直接伤害(不进行攻击程度判定，6-5伤害/4~5-3伤害/1~3-2伤害)");
          break;
        case 4:
          $("p#skill-name").text("奥术射击");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("发动一次普通射击，并使之附带奥术效果。使敌方目标速度降低(速度-2，不叠加)，并能驱散敌方目标身上的激怒或英勇效果");
          break;
      };
      break;
    case 3:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("挥舞附带元素力量的武器，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("英 勇");
          $("p#skill-quote").text("需要 1 SP / 有益效果 / 可以驱散");
          $("p#skill-def").text("借助元素的力量，鼓舞所有队友。全体友方单位生命值上限提高(2点)，速度上升(2点)，持续2回合，英勇增益效果不会叠加");
          break;
        case 5:
          $("p#skill-name").text("大地之力");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("召唤大地母亲护佑全体友方单位，持续整场战斗。若敌方对友方单位造成暴击的时候，1/3伤害将反馈给攻击方自行承受");
          break;
      };
      break;
    case 4:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("舞动手中的五步棍，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("死亡一指");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("发动武术绝学，对一名敌方单位发动一次强力的终结技能，造成直接伤害。若目标生命值为10及以下则立即击杀该目标，否则对其造成5点伤害值");
          break;
        case 5:
          $("p#skill-name").text("醉 拳");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("任何对你的直接伤害更难击中你(1~3-偏斜，4~5-正常，6-暴击)");
          break;
      };
      break;
    case 5:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("使用锋利的匕首攻击敌人，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("毒 刃");
          $("p#skill-quote").text("需要 1 SP / 有害效果 / 可以驱散");
          $("p#skill-def").text("对一名敌方单位发动一次普通攻击，并附带中毒效果(持续2回合，最多2层)。中毒的目标每回合结束会受到3点毒药伤害，毒药伤害不会被减伤效果削弱。此外你对中毒目标进行攻击时将更容易对其暴击(5~6-暴击)");
          break;
        case 5:
          $("p#skill-name").text("能量控制");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("最大技能点数SP值及其上限提高1点，你每次攻击结束之后有一定几率(1/6)回复1点SP值。");
          break;
      };
      break;
    case 6:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("吟唱寒冷刺骨的魔法，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("寒冰屏障");
          $("p#skill-quote").text("需要 1 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("释放一道寒冰屏障保护自己，持续3回合，寒冰屏障存在的时候你免疫任何*直接*伤害。此外在寒冰屏障持续的时候，使用*守 备*技能可以多回复少量(1点)生命值");
          break;
        case 5:
          $("p#skill-name").text("冰枪术");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("每次普通攻击有一定几率(50%)触发冰枪术，对当前敌方单位及其左右相邻单位造成一次额外的偏斜伤害");
          break;
      };
      break;
    case 7:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("借助你的特殊能力，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("变形术");
          $("p#skill-quote").text("需要 1 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("使你可以随意变化成以下任意一种形态，获得对应的特殊能力，同时回复少量(3)生命值");
          break;
        case 4:
          $("p#skill-name").text("共生术");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("精通自然之道，使你与一名友方单位交换彼此的当前生命值");
          break;
        case 7:
          $("p#skill-name").text("变形术:虎形态");
          $("p#skill-quote").text("需要 1 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("回复少量(3)生命值并变形成尖牙利齿的虎形态，在该形态下你所有普通攻击将额外造成2点伤害");
          break;
        case 8:
          $("p#skill-name").text("变形术:熊形态");
          $("p#skill-quote").text("需要 1 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("回复少量(3)生命值并变形成厚实坚强的熊形态，在该形态下你拥有嘲讽技能，强迫敌方单位必须先攻击你。并且你受到的所有的伤害都会略微减少(1点)");
          break;
        case 9:
          $("p#skill-name").text("变形术:树形态");
          $("p#skill-quote").text("需要 1 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("回复少量(3)生命值并变形成自然和谐的树形态，在该形态下每回合结束所有友方单位都会回复少量(1)生命值");
          break;
      };
      break;
    case 8:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("手持你的符文剑，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，但你不会因此恢复生命值");
          break;
        case 3:
          $("p#skill-name").text("牺牲爪牙");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("使用你操控死亡的能力，复活一名敌方已死亡的单位为食尸鬼，并牺牲它使其爆炸。食尸鬼爆炸会对其相邻的单位造成3点伤害");
          break;
        case 5:
          $("p#skill-name").text("邪恶斩击");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("你的正常攻击若造成有效伤害，会使你回复2点生命值，但你的*守 备*动作不会回复生命值");
          break;
      };
      break;
    case 9:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("使用正义力量惩戒敌人，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("生而平等");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("友方生命值最低的单位与敌方生命值最高的单位均分生命值，但不会超过其生命值上限");
          break;
        case 4:
          $("p#skill-name").text("圣疗术");
          $("p#skill-quote").text("需要 2 SP");
          $("p#skill-def").text("祈求圣光照耀，使你的生命值得到完全回复。");
          break;
      };
      break;
    case 10:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("使用神圣法术惩戒敌人，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("治疗术");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("对一名友方单位进行治疗，并清除目标身上的所有不良效果");
          break;
        case 5:
          $("p#skill-name").text("强 化");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("存活的情况下，所有友方单位最大生命值增加3点。死亡时，回合结束该增益效果自动消失");
          break;
      };
      break;
    case 11:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("演奏摄人心魄的乐曲，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("鼓 舞");
          $("p#skill-quote").text("需要 1 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("吹奏鼓舞士气的乐曲，使一名友方单位在该场战斗中生命值及其上限永久增加2点，并获得*嘲 讽*技能，强迫敌方单位必须优先攻击他。可以对一名友方单位多次释放该技能，但不能对自己释放");
          break;
        case 4:
          $("p#skill-name").text("蛊惑曲");
          $("p#skill-quote").text("需要 1 SP / 有害效果 / 可以驱散");
          $("p#skill-def").text("吹奏蛊惑心智的乐曲，持续2回合，被蛊惑的所有敌方单位有一定(1/3)几率遭受其造成的正常攻击伤害的同等伤害");
          break;
      };
      break;
    case 12:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("挥舞手中沉重的武器，发动一次毁灭性的攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 5:
          $("p#skill-name").text("横 扫");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("借助强有力的武器，你的攻击将对所有敌方单位造成同样的伤害，无需指定目标");
          break;
        case 6:
          $("p#skill-name").text("力量的代价");
          $("p#skill-quote").text("需要 0 SP / 有害效果 / 无法驱散");
          $("p#skill-def").text("你的攻击不会产生暴击，只会造成偏斜攻击(1~3)或普通攻击(4~6)");
          break;
      };
      break;
    case 13:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("使用手中的戒备棒，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("醉 酒");
          $("p#skill-quote").text("需要 2 SP");
          $("p#skill-def").text("灌醉一名敌方非英雄单位，使其喝醉。醉酒状态的单位始终跳过其行动回合，醉酒状态在每回合结束有较低概率(1/5)解除");
          break;
        case 5:
          $("p#skill-name").text("酒壮人胆");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("饮下烈酒的你的攻击伤害值会随着你的生命值的降低而增加(生命值每降低10点，伤害值额外增加1点)");
          break;
      };
      break;
    case 14:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("挥舞手中的花园锄头，不得已地发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(3)生命值");
          break;
        case 5:
          $("p#skill-name").text("致命藤蔓");
          $("p#skill-quote").text("需要 0 SP / 有害效果 / 无法驱散");
          $("p#skill-def").text("你存活的回合结束阶段，会召唤出致命的藤蔓攻击所有敌方单位，致命藤蔓每次有一定几率(1/2)对目标造成2点自然伤害。该伤害不会被减伤效果削弱");
          break;
        case 6:
          $("p#skill-name").text("平和主义");
          $("p#skill-quote").text("需要 0 SP /  无法驱散");
          $("p#skill-def").text("你的*守 备*行动回复的生命值额外增加2点，但你的正常攻击始终造成偏斜伤害");
          break;
      };
      break;
    case 15:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("手持利刃从阴影中打击敌人，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("幻影打击");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("如幻影般的步伐，发动一次正常攻击，幻影打击不会消耗你的行动回合");
          break;
        case 5:
          $("p#skill-name").text("要害痛击");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("丰富的实战经验使你洞察敌人的弱点，战斗中速度略微增加(2)，你的直接伤害造成暴击的时候，可以额外奖励一个行动回合。幻影打击不会触发额外奖励行动回合");
          break;
      };
      break;
    case 16:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("高举手中的屠刀，发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 3:
          $("p#skill-name").text("行 刑");
          $("p#skill-quote").text("需要 1 SP");
          $("p#skill-def").text("举起巨大的屠刀对一名敌方单位行刑，发动一次正常攻击。若行刑之后该目标死亡，则其他所有敌方单位都将受到该次伤害的一半顺带伤害。顺带伤害不受免/减伤效果影响");
          break;
        case 5:
          $("p#skill-name").text("恃强凌弱");
          $("p#skill-quote").text("需要 0 SP / 无法驱散");
          $("p#skill-def").text("你对生命值低于10的敌方单位进行攻击时，会额外造成少量(2)伤害。但对生命值为10点及以上的敌方单位进行攻击时，造成的伤害会降低(1)");
          break;
      };
      break;
    case 17:
      switch(parseInt(newID)) {
        case 1:
          $("p#skill-name").text("攻 击");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("发动一次正常攻击，造成一次直接伤害");
          break;
        case 2:
          $("p#skill-name").text("守 备");
          $("p#skill-quote").text("需要 0 SP");
          $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
          break;
        case 5:
          $("p#skill-name").text("小不点也有大作为");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("初始伤害固定为1，不进行攻击判定。你的伤害值会随着你的每次攻击而微量增加(1)");
          break;
        case 6:
          $("p#skill-name").text("玩偶之心");
          $("p#skill-quote").text("需要 0 SP / 有益效果 / 无法驱散");
          $("p#skill-def").text("初始生命值为10，战斗刚开始时，场上每有一名敌方单位，你的最大生命值增加15；场上每有一名友方单位，你的最大生命值减少5 。你的最大生命值不会低于10点");
          break;
      };
      break;
    case 100:
    case 200:
      if(parseInt(newID)==1) {
        $("p#skill-name").text("攻 击");
        $("p#skill-quote").text("需要 0 SP");
        $("p#skill-def").text("发动一次正常攻击");
      }
      else {
        $("p#skill-name").text("守 备");
        $("p#skill-quote").text("需要 0 SP");
        $("p#skill-def").text("采用防守戒备的行动，可以恢复少量(1)生命值");
      };
      break;
  };

  $("div.skill-panel").css("left",event.clientX + 5);
  $("div.skill-panel").css("top",event.clientY);
  $("div.skill-panel").show();
};
//关闭技能提示
viewer.prototype.hideSkilltip = function(rawID) {
  $("div.skill-panel").hide();
};
//缩小对象尺寸
viewer.prototype.toSmall = function(rawID) {
  var newID = "#"+rawID;
  $(newID).width("65px");
  $(newID).height("80px");
};
//放大（回复缩小的）对象尺寸
viewer.prototype.toBig = function(rawID) {
  var newID = "#"+rawID;
  $(newID).width("70px");
  $(newID).height("85px");
};
//弹出选择单位窗口
viewer.prototype.popSetunit = function(rawID) {
  if(controller.battleflag == false) {
    controller.slotUnit = rawID.split("-")[1];
    if(controller.slotUnit<5) {
      $("img#setunit-100").attr("src","static/img/unitrangera.png");
      $("img#setunit-200").attr("src","static/img/unitsola.png");
    }
    else {
      $("img#setunit-100").attr("src","static/img/unitrangerb.png");
      $("img#setunit-200").attr("src","static/img/unitsolb.png");
    };

    var sizeWidth = document.body.clientWidth,
        sizeHeight = 680;
    $("div.setunit-panel").css("left", (sizeWidth-parseInt($("div.setunit-panel").css("width")))/2);
    $("div.setunit-panel").css("top", (sizeHeight-parseInt($("div.setunit-panel").css("Height")))/2);
    $("div.setunit-panel").show();
  };
  
};
//弹出选择坐骑窗口
viewer.prototype.popSetmount = function(rawID) {
  if(controller.battleflag == false) {
    controller.slotUnit = rawID.split("-")[1];

    var sizeWidth = document.body.clientWidth,
        sizeHeight = 680;
    $("div.setmount-panel").css("left", (sizeWidth-parseInt($("div.setmount-panel").css("width")))/2);
    $("div.setmount-panel").css("top", (sizeHeight-parseInt($("div.setmount-panel").css("Height")))/2);
    $("div.setmount-panel").show();
  };
  
};
//选择单位
viewer.prototype.chooseUnit = function(rawID) {
  var unitVal = rawID.split("-")[1];
  data.tempUnit[0][controller.slotUnit] = unitVal;
  
  var newID = "img#" + rawID;
  var url = $(newID).attr("src");

  var newID = "img#unit-" + controller.slotUnit + "-pic";
  $(newID).attr("src",url);
  var newID = "img#unit-" + controller.slotUnit + "-mt";
  if(unitVal==200 || unitVal==0) {
    //选择步兵,清空坐骑
    data.tempUnit[1][controller.slotUnit] = 0;
    $(newID).hide();
  }
  else {
    $(newID).show();
  };

  $("div.setunit-panel").hide();
};
//选择坐骑
viewer.prototype.chooseMount = function(rawID) {
  var mtVal = rawID.split("-")[1];
  data.tempUnit[1][controller.slotUnit] = mtVal;
  
  var newID = "img#" + rawID;
  var url = $(newID).attr("src");

  var newID = "img#unit-" + controller.slotUnit + "-mt";
  $(newID).attr("src",url);

  $("div.setmount-panel").hide();
};
//刷新主界面
viewer.prototype.refUnit = function() {
  for(i=0;i<10;i++) {
    if(data.unit[i].cat!=0) {
      if(data.unit[i].hp==0) {
        $("p#unit-"+i+"-bgdeath").text("-死 亡-");
        $("p#unit-"+i+"-bgdeath").css("background-color","rgba(0,0,0,0.8)");
        $("p#unit-"+i+"-bgdeath").show();
      }
      else if(data.unit[i].actionflag==true) {
        $("p#unit-"+i+"-bgdeath").text("-已行动-");
        $("p#unit-"+i+"-bgdeath").css("background-color","rgba(160,160,160,0.5)");
        $("p#unit-"+i+"-bgdeath").show();
      }
      else {
        $("p#unit-"+i+"-bgdeath").hide();
      };
      $("span#unit-"+i+"-hp").text(data.unit[i].hp + "/");
      data.unit[i].hp>6?$("span#unit-"+i+"-hp").css("color","rgba(0,0,0,1)"):$("span#unit-"+i+"-hp").css("color","rgba(255,0,0,1)");
      $("span#unit-"+i+"-maxhp").text(data.unit[i].maxhp);
      $("p#unit-"+i+"-boxhp").show();
      $("span#unit-"+i+"-sp").text(data.unit[i].sp + "/");
      $("span#unit-"+i+"-maxsp").text(data.unit[i].maxsp);
      $("p#unit-"+i+"-boxsp").show();
      if(data.unit[i].angerflag==true) {
        $("img#unit-"+i+"-anger").show();
        $("img#unit-"+i+"-bganger").show();
      }
      else {
        $("img#unit-"+i+"-anger").hide();
        $("img#unit-"+i+"-bganger").hide();
      };
      if(data.unit[i].iceblockflag==true) {
        $("img#unit-"+i+"-iceblock").show();
        $("img#unit-"+i+"-bgiceblock").show();
      }
      else {
        $("img#unit-"+i+"-iceblock").hide();
        $("img#unit-"+i+"-bgiceblock").hide();
      };
      if(data.unit[i].enhanceflag==true) {
        $("img#unit-"+i+"-enhance").show();
        $("img#unit-"+i+"-bgenhance").show();
      }
      else {
        $("img#unit-"+i+"-enhance").hide();
        $("img#unit-"+i+"-bgenhance").hide();
      };
      if(data.unit[i].tigerflag==true) {
        $("img#unit-"+i+"-tiger").show();
        $("img#unit-"+i+"-pic").attr("src","static/img/unittiger.png");
      }
      else {
        $("img#unit-"+i+"-tiger").hide();
      };
      if(data.unit[i].bearflag==true) {
        $("img#unit-"+i+"-bear").show();
        $("img#unit-"+i+"-pic").attr("src","static/img/unitbear.png");
      }
      else {
        $("img#unit-"+i+"-bear").hide();
      };
      if(data.unit[i].treeflag==true) {
        $("img#unit-"+i+"-tree").show();
        $("img#unit-"+i+"-bgtree").show();
        $("img#unit-"+i+"-pic").attr("src","static/img/unittree.png");
      }
      else {
        $("img#unit-"+i+"-tree").hide();
        $("img#unit-"+i+"-bgtree").hide();
      };
      if(data.unit[i].yy > 0) {
        $("img#unit-"+i+"-yy").show();
        $("p#unit-"+i+"-yynum").text(data.unit[i].yy);
        $("p#unit-"+i+"-yynum").show();
        $("img#unit-"+i+"-bgyy").show();
      }
      else {
        $("img#unit-"+i+"-yy").hide();
        $("p#unit-"+i+"-yynum").hide();
        $("img#unit-"+i+"-bgyy").hide();
      };
      if(data.unit[i].tauntflag==true) {
        $("img#unit-"+i+"-taunt").show();
        $("img#unit-"+i+"-bgtaunt").show();
      }
      else {
        $("img#unit-"+i+"-taunt").hide();
        $("img#unit-"+i+"-bgtaunt").hide();
      };
      if(data.unit[i].earthflag==true) {
        $("img#unit-"+i+"-earth").show();
      }
      else {
        $("img#unit-"+i+"-earth").hide();
      };
      if(data.unit[i].faintflag==true) {
        $("img#unit-"+i+"-faint").show();
      }
      else {
        $("img#unit-"+i+"-faint").hide();
      };
      if(data.unit[i].slowflag==true) {
        $("img#unit-"+i+"-slow").show();
      }
      else {
        $("img#unit-"+i+"-slow").hide();
      };
      if(data.unit[i].poison > 0) {
        $("img#unit-"+i+"-poison").show();
        $("p#unit-"+i+"-poisonnum").text(data.unit[i].poison);
        $("p#unit-"+i+"-poisonnum").show();
      }
      else {
        $("img#unit-"+i+"-poison").hide();
        $("p#unit-"+i+"-poisonnum").hide();
      };
      if(data.unit[i].confuse > 0) {
        $("img#unit-"+i+"-confuse").show();
        $("p#unit-"+i+"-confusenum").text(data.unit[i].confuse);
        $("p#unit-"+i+"-confusenum").show();
      }
      else {
        $("img#unit-"+i+"-confuse").hide();
        $("p#unit-"+i+"-confusenum").hide();
      };
      if(data.unit[i].bindflag==true) {
        $("img#unit-"+i+"-bind").show();
      }
      else {
        $("img#unit-"+i+"-bind").hide();
      };
      if(data.unit[i].drunkflag==true) {
        $("img#unit-"+i+"-drunk").show();
      }
      else {
        $("img#unit-"+i+"-drunk").hide();
      };
      
    };
  };

  controller.checkWin();
};
//弹出技能释放界面
viewer.prototype.makeSkill = function() {
  if(data.unit[controller.slotUnit].faintflag==true) {
    data.unit[controller.slotUnit].actionflag = true;
    controller.playSound("static/audio/faint.wav");
    var t = setTimeout('painter.refUnit();$("div#action-button").removeClass("disabled");' , 1500);
  }
  else if(data.unit[controller.slotUnit].drunkflag==true) {
    data.unit[controller.slotUnit].actionflag = true;
    controller.playSound("static/audio/drunk.wav");
    var t = setTimeout('painter.refUnit();$("div#action-button").removeClass("disabled");' , 1500);
  }
  else {
    var strName = data.unit[controller.slotUnit].name;
    var hpVal = parseInt(data.unit[controller.slotUnit].hp);
    var maxhpVal = parseInt(data.unit[controller.slotUnit].maxhp);
    var spVal = parseInt(data.unit[controller.slotUnit].sp);
    var maxspVal = parseInt(data.unit[controller.slotUnit].maxsp);
    controller.slotUnit>4?$("p#action-no").text("下方-"+(controller.slotUnit+1)):$("p#action-no").text("上方-"+(controller.slotUnit+1));
    $("span#action-hp").text(hpVal + "/");
    $("span#action-maxhp").text(maxhpVal+" | ");
    hpVal<=6?$("span#action-hp").css("color","rgba(255,0,0,1)"):$("span#action-hp").css("color","rgba(0,0,0,1)");
    $("span#action-sp").text(spVal + "/");
    $("span#action-maxsp").text(maxspVal);
    spVal==0?$("span#action-sp").css("color","rgba(255,0,0,1)"):$("span#action-sp").css("color","rgba(0,0,0,1)");
    // alert(strName);
    if(strName=="sol" || strName=="ranger") {
      var url;
      controller.slotUnit>4?url="static/img/unit"+strName+"b.png":url="static/img/unit"+strName+"a.png";
    }
    else{
      var url = "static/img/unit" + strName +".png";
    };
    $("img#img-unit").attr("src", url);
    var imgCont = '<img class="skill-icon" id="skl-1" src="static/img/skill_1_' + strName +'.png" onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
    $("div#skill-1").html(imgCont);
    var imgCont = '<img class="skill-icon" id="skl-2" src="static/img/skill_2_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
    $("div#skill-2").html(imgCont);
    switch(parseInt(data.unit[controller.slotUnit].cat)) {
      case 1:
      case 3:
      case 4:
      case 5:
      case 6:
      case 8:
      case 10:
      case 13:
      case 15:
      case 16:
        //1主1被，skill3,skill5
        var imgCont = '<img class="skill-icon" id="skl-3" src="static/img/skill_3_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-3").html(imgCont);
        $("div#skill-4").html("");
        var imgCont = '<img class="skill-icon" id="skl-5" src="static/img/skill_5_' + strName +'.png"  onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-5").html(imgCont);
        $("div#skill-6").html("");
        $("div#skill-7").html("");
        $("div#skill-8").html("");
        $("div#skill-9").html("");
        break;
      case 2:
      case 9:
      case 11:
        //2主无被，skill3,skill4
        var imgCont = '<img class="skill-icon" id="skl-3" src="static/img/skill_3_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-3").html(imgCont);
        var imgCont = '<img class="skill-icon" id="skl-4" src="static/img/skill_4_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-4").html(imgCont);
        $("div#skill-5").html("");
        $("div#skill-6").html("");
        $("div#skill-7").html("");
        $("div#skill-8").html("");
        $("div#skill-9").html("");
        break;
      case 12:
      case 14:
      case 17:
        //无主2被， skill5, skill6
        $("div#skill-3").html("");
        $("div#skill-4").html("");
        var imgCont = '<img class="skill-icon" id="skl-5" src="static/img/skill_5_' + strName +'.png" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-5").html(imgCont);
        var imgCont = '<img class="skill-icon" id="skl-6" src="static/img/skill_6_' + strName +'.png" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-6").html(imgCont);
        $("div#skill-7").html("");
        $("div#skill-8").html("");
        $("div#skill-9").html("");
        break;
      case 7:
        //2主，3辅，特殊 xd
        var imgCont = '<img class="skill-icon" id="skl-3" src="static/img/skill_3_' + strName +'.png" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-3").html(imgCont);
        var imgCont = '<img class="skill-icon" id="skl-4" src="static/img/skill_4_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-4").html(imgCont);
        $("div#skill-5").html("");
        $("div#skill-6").html("");
        var imgCont = '<img class="skill-icon-sm" id="skl-7" src="static/img/skill_7_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-7").html(imgCont);
        var imgCont = '<img class="skill-icon-sm" id="skl-8" src="static/img/skill_8_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-8").html(imgCont);
        var imgCont = '<img class="skill-icon-sm" id="skl-9" src="static/img/skill_9_' + strName +'.png"  onclick="controller.castSkill(this.id)" onmouseover="painter.showSkilltip(event,this.id)" onmouseout="painter.hideSkilltip(this.id)" />';
        $("div#skill-9").html(imgCont);
        break;
      case 100:
      case 200:
        //无主无被，骑兵，步兵
        $("div#skill-3").html("");
        $("div#skill-4").html("");
        $("div#skill-5").html("");
        $("div#skill-6").html("");
        $("div#skill-7").html("");
        $("div#skill-8").html("");
        $("div#skill-9").html("");
    };

    var sizeWidth = document.body.clientWidth,
        sizeHeight = 680;
    $("div.action-panel").css("left", (sizeWidth-parseInt($("div.action-panel").css("width")))/2);
    $("div.action-panel").css("top", (sizeHeight-parseInt($("div.action-panel").css("Height")))/2);
    $("div.action-panel").show();
  };
  
};
//攻击效果
viewer.prototype.makeAttack = function(idx, atkVal, sUrl, pUrl) {
  if(idx>=0) {
    atkVal?atkVal:atkVal=0;
    sUrl?sUrl:sUrl="static/audio/atk.wav";
    pUrl?pUrl:pUrl="static/img/effdam.png";

    controller.playSound(sUrl);
    $("img#effect-"+idx+"-dam").attr("src", pUrl);
    var t = setTimeout('$("img#effect-'+idx+'-dam").show();', 100);
    $("p#effect-"+idx+"-hpminus").text("- "+atkVal);
    $("p#effect-"+idx+"-hpminus").css("color", "rgba(255,0,0,1)");
    $("p#effect-"+idx+"-hpminus").show();
    var oldHeight = $("p#effect-"+idx+"-hpminus").css("top");
    var newHeight = parseInt(oldHeight)-40;
    newHeight+="px";
    $("p#effect-"+idx+"-hpminus").css("top", newHeight);

    var str = '$("p#effect-'+idx+'-hpminus").hide();$("p#effect-'+idx+'-hpminus").css("top", "'+oldHeight+'");';
    var t1 = setTimeout(str, 1200);
    str = '$("img#effect-'+idx+'-dam").hide();';
    var t2 = setTimeout(str, 1000);

  };
};
//回复效果
viewer.prototype.makeHeal = function(idx, healVal, sUrl) {
  if(idx>=0) {
    healVal?healVal:healVal=0;
    sUrl?sUrl:sUrl="static/audio/heal.wav";

    controller.playSound(sUrl);
    // $("img#effect-"+idx+"-dam").show();
    $("p#effect-"+idx+"-hpminus").text("+ "+healVal);
    $("p#effect-"+idx+"-hpminus").css("color", "rgba(0,176,80,1)");
    $("p#effect-"+idx+"-hpminus").show();
    var oldHeight = $("p#effect-"+idx+"-hpminus").css("top");
    var newHeight = parseInt(oldHeight)-40;
    newHeight+="px";
    $("p#effect-"+idx+"-hpminus").css("top", newHeight);

    var str = '$("p#effect-'+idx+'-hpminus").hide();$("p#effect-'+idx+'-hpminus").css("top", "'+oldHeight+'");';
    var t1 = setTimeout(str, 1200);
    // str = '$("img#effect-'+idx+'-dam").hide();';
    // var t2 = setTimeout(str, 1000);

  };
};
//回复SP
viewer.prototype.makeSP = function(idx, spVal, sUrl) {
  if(idx>=0) {
    spVal?spVal:spVal=0;
    sUrl?sUrl:sUrl="static/audio/sprecover.wav";

    controller.playSound(sUrl);
    // $("img#effect-"+idx+"-dam").show();
    $("p#effect-"+idx+"-hpminus").text("+ "+spVal);
    $("p#effect-"+idx+"-hpminus").css("color", "rgba(255,227,99,1)");
    $("p#effect-"+idx+"-hpminus").show();
    var oldHeight = $("p#effect-"+idx+"-hpminus").css("top");
    var newHeight = parseInt(oldHeight)-40;
    newHeight+="px";
    $("p#effect-"+idx+"-hpminus").css("top", newHeight);

    var str = '$("p#effect-'+idx+'-hpminus").hide();$("p#effect-'+idx+'-hpminus").css("top", "'+oldHeight+'");';
    var t1 = setTimeout(str, 1200);
    // str = '$("img#effect-'+idx+'-dam").hide();';
    // var t2 = setTimeout(str, 1000);

  };
};

var painter = new viewer();


//*****control*****
function ctrl() {
  this.battleflag = false;      //T-battle started/F- not started yet
  this.slotUnit = -1;					//存储自己选择单位的index，-1-null/0~4-上方/5~9-下方单位
  this.slotTarget = -1;       //存储目标单位的index，-1-null/0~4-上方/5~9-下方单位
  this.firstHandflag = true;		//T-上方先手/F-下方先手
  this.whoflag = true;				//控制速度比较轮番
  this.tarLimit = 0;          // 定义选择目标的个数上限
  this.ibNum = 0;
};

//比较速度，寻找下一个动作单位
ctrl.prototype.findNext = function() {
  $("div#action-button").addClass("disabled");
  //speed 设为-5 来检测是否有合适匹配的项(正常speed：幽灵马3(-2)/马2(-2)/步1(-2)/空0，即3到-1之间)
  var slotUp = 0,
      slotDown = 0,
      speedUp = -5,
      speedDown = -5;
  //选出上，下方速度最高的有效单位
  for(i=0;i<5;i++) {
    if(data.unit[i].cat!=0 && data.unit[i].actionflag==false && data.unit[i].hp>0) {
      if(data.unit[i].speed>speedUp) {
      	slotUp = i;
      	speedUp = data.unit[i].speed;
      };
    };
    if(data.unit[i+5].cat!=0 && data.unit[i+5].actionflag==false && data.unit[i+5].hp>0) {
      if(data.unit[i+5].speed>speedDown) {
      	slotDown = i;
      	speedDown = data.unit[i+5].speed;
      };
    };
  };

  if(speedUp==-5 && speedDown==-5) {
  	//回合结束，重新开始新回合
  	data.refActionflag();
  	//清除debuff
    data.runBuffs();
  	controller.whoflag = controller.firstHandflag;
    //刷新主界面
    painter.refUnit();
    $("div#action-button").removeClass("disabled");

  	controller.playSound("static/audio/reset.wav");
  	painter.showMsg("所有单位已重置！");
  }
  else if(speedUp!=-5 && speedDown!=-5) {
  	//都存在未动作单位，比较速度大小及先后手
  	if(speedUp > speedDown) {
  	  //上方
  	  controller.slotUnit = slotUp;
      painter.makeSkill();
  	}
  	else if(speedUp==speedDown) {
  	  //速度相同，开始看轮番whoflag
  	  if(controller.whoflag==true) {
  	  	//上方
        controller.whoflag = false;
  	  	controller.slotUnit = slotUp;
        painter.makeSkill();
  	  }
  	  else {
  	  	//下方
        controller.whoflag = true;
  	  	controller.slotUnit = slotDown + 5;
        painter.makeSkill();
  	  };
  	}
  	else {
  	  //下方
  	  controller.slotUnit = slotDown + 5;
      painter.makeSkill();
  	};
  }
  else {
  	//只有一方存在未动作单位
  	if(speedUp==-5) {
  	  //下方
  	  controller.slotUnit = slotDown + 5;
      painter.makeSkill();
  	}
  	else {
  	  //上方
  	  controller.slotUnit = slotUp;
      painter.makeSkill();
  	};
  };

  // //刷新主界面
  // painter.refUnit();
  // //检查胜负结果
  // controller.checkWin();
};

//检测胜利
ctrl.prototype.checkWin = function() {
  if(data.unit[0].hp==0 && data.unit[1].hp==0 && data.unit[2].hp==0 && data.unit[3].hp==0 && data.unit[4].hp==0) {
    //下方胜利
    var horseCount = 0, 
        ghostCount = 0,
        horseChanged = 0,
        ghostDead = 0;
    for(i=0;i<10;i++) {
      if(data.unit[i].mtcat==1) {
        if(data.unit[i].hp==0 && controller.rollDice(6)==6) {
          ghostDead++;
        }
        else {
          ghostCount++;
        };
      }
      else if(data.unit[i].mtcat==2) {
        if(data.unit[i].hp==0 && controller.rollDice(6)==6) {
          ghostCount++;
          horseChanged++;
        }
        else {
          horseCount++;
        };
      };
    };
    painter.showMsg("下方赢得了最终的胜利！最终战利品为：幽灵马-"+ghostCount+"，普通马-"+horseCount+"。其中"+ghostDead+"只幽灵马灵魂被驱散，"+horseChanged+"只普通马转化为幽灵马。", 10000);
    $("div.history-content").prepend("<p class='history-item'>下方赢得了最终的胜利！最终战利品为：幽灵马-"+ghostCount+"，普通马-"+horseCount+"。其中"+ghostDead+"只幽灵马灵魂被驱散，"+horseChanged+"只普通马转化为幽灵马。</p>");
  }
  else if(data.unit[5].hp==0 && data.unit[6].hp==0 && data.unit[7].hp==0 && data.unit[8].hp==0 && data.unit[9].hp==0) {
    //上方胜利
    var horseCount = 0, 
        ghostCount = 0,
        horseChanged = 0,
        ghostDead = 0;
    for(i=0;i<10;i++) {
      if(data.unit[i].mtcat==1) {
        if(data.unit[i].hp==0 && controller.rollDice(6)==6) {
          ghostDead++;
        }
        else {
          ghostCount++;
        };
      }
      else if(data.unit[i].mtcat==2) {
        if(data.unit[i].hp==0 && controller.rollDice(6)==6) {
          ghostCount++;
          horseChanged++;
        }
        else {
          horseCount++;
        };
      };
    };
    painter.showMsg("上方赢得了最终的胜利！最终战利品为：幽灵马-"+ghostCount+"，普通马-"+horseCount+"。其中"+ghostDead+"只幽灵马灵魂被驱散，"+horseChanged+"只普通马转化为幽灵马。", 10000);
    $("div.history-content").prepend("<p class='history-item'>上方赢得了最终的胜利！最终战利品为：幽灵马-"+ghostCount+"，普通马-"+horseCount+"。其中"+ghostDead+"只幽灵马灵魂被驱散，"+horseChanged+"只普通马转化为幽灵马。</p>");
  };
};

//释放技能入口，判断出口
ctrl.prototype.castSkill = function(rawID) {
  var skillID = rawID.split("-")[1];
  var spVal = parseInt(data.unit[controller.slotUnit].sp);
  switch(parseInt(data.unit[controller.slotUnit].cat)) {
    case 1:
      switch(parseInt(skillID)) {
        case 1:     //zs//普通攻击
          $("div.action-panel").hide();
          controller.skillZSatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //冲锋
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillZScharge();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 2:
      switch(parseInt(skillID)) {
        case 1:     //lr//普通攻击
          $("div.action-panel").hide();
          controller.skillLRatk();
          break;
        case 2:       //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //箭雨
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillLRrain();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
        case 4:     //奥术射击
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillLRas();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 3:
      switch(parseInt(skillID)) {
        case 1:     //sm//普通攻击
          $("div.action-panel").hide();
          controller.skillSMatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //英勇
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.doSMyy();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 4:
      switch(parseInt(skillID)) {
        case 1:     //ws//普通攻击
          $("div.action-panel").hide();
          controller.skillWSatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //死亡一指
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillWSfinger();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 5:
      switch(parseInt(skillID)) {
        case 1:     //dz//普通攻击
          $("div.action-panel").hide();
          controller.skillDZatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //毒刃
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillDZpoison();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 6:
      switch(parseInt(skillID)) {
        case 1:     //fs//普通攻击
          $("div.action-panel").hide();
          controller.skillFSatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //寒冰屏障
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.doFSiceblock();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 7:
      switch(parseInt(skillID)) {
        case 1:     //xd//普通攻击
          $("div.action-panel").hide();
          controller.skillXDatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 4:     //共生术
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillXDgs();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
        case 7:     //虎形态
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.doXDtiger();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
        case 8:     //熊形态
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.doXDbear();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
        case 9:     //树形态
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.doXDtree();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 8:
      switch(parseInt(skillID)) {
        case 1:     //dk//普通攻击
          $("div.action-panel").hide();
          controller.skillDKatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //牺牲爪牙
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillDKboom();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 9:
      switch(parseInt(skillID)) {
        case 1:     //qs//普通攻击
          $("div.action-panel").hide();
          controller.skillQSatk();
          break;
        case 2:       //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //生而平等
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.doQSequal();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
        case 4:     //圣疗术
          if(spVal>=2) {
            $("div.action-panel").hide();
            controller.doQSreborn();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 10:
      switch(parseInt(skillID)) {
        case 1:     //ms//普通攻击
          $("div.action-panel").hide();
          controller.skillMSatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //治疗术
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillMSheal();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 11:
      switch(parseInt(skillID)) {
        case 1:     //sr//普通攻击
          $("div.action-panel").hide();
          controller.skillSRatk();
          break;
        case 2:       //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //鼓舞
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillSRcheer();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
        case 4:     //蛊惑曲
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.doSRconfuse();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 12:
      switch(parseInt(skillID)) {
        case 1:     //pc//普通攻击
          $("div.action-panel").hide();
          controller.doPCatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
      };
      break;
    case 13:
      switch(parseInt(skillID)) {
        case 1:     //jb//普通攻击
          $("div.action-panel").hide();
          controller.skillJBatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //醉酒
          if(spVal>=2) {
            $("div.action-panel").hide();
            controller.skillJBdrunk();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 14:
      switch(parseInt(skillID)) {
        case 1:     //yd//普通攻击
          $("div.action-panel").hide();
          controller.skillYDatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
      };
      break;
    case 15:
      switch(parseInt(skillID)) {
        case 1:     //yx//普通攻击
          $("div.action-panel").hide();
          controller.skillYXatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //幻影打击
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillYXshadow();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 16:
      switch(parseInt(skillID)) {
        case 1:     //tf//普通攻击
          $("div.action-panel").hide();
          controller.skillTFatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
        case 3:     //行刑
          if(spVal>=1) {
            $("div.action-panel").hide();
            controller.skillTFexcute();
          }
          else {
            painter.showMsg("SP值不足!");
          };
          break;
      };
      break;
    case 17:
      switch(parseInt(skillID)) {
        case 1:     //mo//普通攻击
          $("div.action-panel").hide();
          controller.skillMOatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
      };
      break;
    case 100:
      switch(parseInt(skillID)) {
        case 1:     //ranger//普通攻击
          $("div.action-panel").hide();
          controller.skillRangeratk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
      };
      break;
    case 200:
      switch(parseInt(skillID)) {
        case 1:     //sol//普通攻击
          $("div.action-panel").hide();
          controller.skillSolatk();
          break;
        case 2:     //守备
          $("div.action-panel").hide();
          controller.doAllguard();
          break;
      };
      break;
  };

};
// ranger - atk展示
ctrl.prototype.skillRangeratk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_ranger.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "ranger_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// Sol - atk展示
ctrl.prototype.skillSolatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_sol.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "sol_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// zs- atk 展示
ctrl.prototype.skillZSatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_zs.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "zs_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// zs- 冲锋技能展示
ctrl.prototype.skillZScharge = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_zs.png" style="width:16px;height:16px;" /><strong>冲 锋</strong>');
  $("p.tip-usedtar").text("最多 2 目标");
  $("p.tip-skill").attr("id", "zs_charge");   //最终执行技能效果索引
  controller.tarLimit = 2;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// lr- atk 展示
ctrl.prototype.skillLRatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_lr.png" style="width:16px;height:16px;" /><strong>射 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "lr_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
//lr- 箭雨技能展示
ctrl.prototype.skillLRrain = function() {
  $("p.tip-skill").attr("id", "lr_rain");   //最终执行技能效果索引
  controller.doSkill();
};
//lr- 奥术射击技能展示
ctrl.prototype.skillLRas = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_4_lr.png" style="width:16px;height:16px;" /><strong>奥术射击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "lr_as");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// sm- atk 展示
ctrl.prototype.skillSMatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_sm.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "sm_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// ws - atk展示
ctrl.prototype.skillWSatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_ws.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "ws_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// ws - 死亡一指 展示
ctrl.prototype.skillWSfinger = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_ws.png" style="width:16px;height:16px;" /><strong>死亡一指</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "ws_finger");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// dz- atk 展示
ctrl.prototype.skillDZatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_dz.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "dz_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// dz- 毒刃 展示
ctrl.prototype.skillDZpoison = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_dz.png" style="width:16px;height:16px;" /><strong>毒 刃</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "dz_poison");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// fs- atk 展示
ctrl.prototype.skillFSatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_fs.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "fs_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// xd - atk展示
ctrl.prototype.skillXDatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_'+data.unit[controller.slotUnit].name+'.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "xd_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// xd- 共生术 展示
ctrl.prototype.skillXDgs = function() {
  var x;
  controller.slotUnit>4?x=5:x=0;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_4_xd.png" style="width:16px;height:16px;" /><strong>共生术</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "xd_gs");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// dk - atk展示
ctrl.prototype.skillDKatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_dk.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "dk_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// dk - 牺牲爪牙展示
ctrl.prototype.skillDKboom = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else if(data.unit[i+x].cat!=0 && data.unit[i+x].hp==0) {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "可使用！");
      $("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_dk.png" style="width:16px;height:16px;" /><strong>牺牲爪牙</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "dk_boom");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// qs - atk展示
ctrl.prototype.skillQSatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_qs.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "qs_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// ms- atk 展示
ctrl.prototype.skillMSatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_ms.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "ms_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// ms- 治疗术 展示
ctrl.prototype.skillMSheal = function() {
  var x;
  controller.slotUnit>4?x=5:x=0;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_ms.png" style="width:16px;height:16px;" /><strong>治疗术</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "ms_heal");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// sr - atk展示
ctrl.prototype.skillSRatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_sr.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "sr_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// sr - 鼓舞 展示
ctrl.prototype.skillSRcheer = function() {
  var x;
  controller.slotUnit>4?x=5:x=0;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0 && data.unit[i+x].cat!=11) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_sr.png" style="width:16px;height:16px;" /><strong>鼓 舞</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "sr_cheer");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// jb - atk展示
ctrl.prototype.skillJBatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_jb.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "jb_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// jb - 醉酒展示
ctrl.prototype.skillJBdrunk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0 && data.unit[i+x].cat>=100) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_jb.png" style="width:16px;height:16px;" /><strong>醉 酒</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "jb_drunk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// yd - atk展示
ctrl.prototype.skillYDatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_yd.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "yd_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// YX - atk展示
ctrl.prototype.skillYXatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_yx.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "yx_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// YX - 幻影打击 展示
ctrl.prototype.skillYXshadow = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_yx.png" style="width:16px;height:16px;" /><strong>幻影打击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "yx_shadow");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// TF - atk展示
ctrl.prototype.skillTFatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_tf.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "tf_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// TF - 行刑 展示
ctrl.prototype.skillTFexcute = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_3_tf.png" style="width:16px;height:16px;" /><strong>行 刑</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "tf_excute");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};
// MO - atk展示
ctrl.prototype.skillMOatk = function() {
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      $("img#tar-"+i).attr("src", $("img#unit-"+(i+x)+"-pic").attr("src"));
      data.unit[i+x].tauntflag==true?$("p#check-"+i).html('<i class="fa fa-shield fa-2x"></i> '):$("p#check-"+i).html("");
    }
    else {
      $("img#tar-"+i).attr("src", "");
      $("img#tar-"+i).attr("alt", "不可用！");
      $("p#check-"+i).html("");
    };

  };

  $("p.tip-skill").html('<i class="fa fa-flash"></i> 正在使用: <img src="static/img/skill_1_mo.png" style="width:16px;height:16px;" /><strong>攻 击</strong>');
  $("p.tip-usedtar").text("最多 1 目标");
  $("p.tip-skill").attr("id", "mo_atk");   //最终执行技能效果索引
  controller.tarLimit = 1;
  data.tempTar = [];
  var sizeWidth = document.body.clientWidth,
      sizeHeight = 680;
  $("div.target-panel").css("left", (sizeWidth-parseInt($("div.target-panel").css("width")))/2);
  $("div.target-panel").css("top", (sizeHeight-parseInt($("div.target-panel").css("Height")))/2);
  $("div.target-panel").show();
};

//选择目标操作
ctrl.prototype.locateTarget = function(rawID) {
  var ID = parseInt(rawID.split("-")[1]);
  var newID;
  controller.slotUnit>4?newID=ID:newID=ID+5;
  if(controller.in_Array(newID, data.tempTar)==-1) {
    //没找到，增加目标
    if((data.tempTar.length + 1)>controller.tarLimit) {
      painter.showMsg("目标已达上限！");
    }
    else {
      data.tempTar.push(newID);
      $("p#check-"+ID).html('<i class="fa fa-check-circle fa-lg"></i> ');
    };
  }
  else {
    //找到已存在目标，移除目标
    controller.remove_Array(newID, data.tempTar);
    $("p#check-"+ID).html('');
  };
  
  
};

//确定技能及释放目标，正式释放技能入口
ctrl.prototype.doSkill = function() {
  $("div.target-panel").hide();

  switch($("p.tip-skill").attr("id")) {
    case "ranger_atk":
      controller.doRangeratk();
      break;
    case "sol_atk":
      controller.doSolatk();
      break;
    case "zs_atk":
      controller.doZSatk();
      break;
    case "zs_charge":
      controller.playSound("static/audio/charge.wav");
      var t = setTimeout("controller.doZScharge()", 1000);
      break;
    case "lr_atk":
      controller.playSound("static/audio/castmultishot.wav");
      var t = setTimeout("controller.doLRatk()", 1000);
      break;
    case "lr_rain":
      controller.playSound("static/audio/castmultishot.wav");
      var t = setTimeout("controller.doLRrain()", 1000);
      break;
    case "lr_as":
      controller.playSound("static/audio/castmultishot.wav");
      var t = setTimeout("controller.doLRas()", 1000);
      break;
    case "sm_atk":
      controller.doSMatk();
      break;
    case "ws_atk":
      controller.doWSatk();
      break;
    case "ws_finger":
      controller.doWSfinger();
      break;
    case "dz_atk":
      controller.doDZatk();
      break;
    case "dz_poison":
      controller.doDZpoison();
      break;
    case "fs_atk":
      controller.doFSatk();
      break;
    case "xd_atk":
      controller.doXDatk();
      break;
    case "xd_gs":
      controller.doXDgs();
      break;
    case "dk_atk":
      controller.doDKatk();
      break;
    case "dk_boom":
      controller.doDKboom();
      break;
    case "qs_atk":
      controller.doQSatk();
      break;
    case "ms_atk":
      controller.doMSatk();
      break;
    case "ms_heal":
      controller.doMSheal();
      break;
    case "sr_atk":
      controller.doSRatk();
      break;
    case "sr_cheer":
      controller.doSRcheer();
      break;
    case "jb_atk":
      controller.doJBatk();
      break;
    case "jb_drunk":
      controller.playSound("static/audio/jbdrunk.wav");
      var t = setTimeout("controller.doJBdrunk()", 1000);
      break;
    case "yd_atk":
      controller.doYDatk();
      break;
    case "yx_atk":
      controller.doYXatk();
      break;
    case "yx_shadow":
      controller.doYXshadow();
      break;
    case "tf_atk":
      controller.doTFatk();
      break;
    case "tf_excute":
      controller.doTFexcute();
      break;
    case "mo_atk":
      controller.doMOatk();
      break;
  };
};

//all-guard 执行
ctrl.prototype.doAllguard = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  if(data.unit[controller.slotUnit].cat!=8) {
    //死亡骑士守备无回复
    if(data.unit[controller.slotUnit].cat==14) {
      //园丁回复加成
      data.unit[controller.slotUnit].hp+=3;
      painter.makeHeal(controller.slotUnit, 3);
      $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位*守备*,回复3点生命值</p>");
    }
    else if(data.unit[controller.slotUnit].iceblockflag==true) {
      //魔法师回复加成
      data.unit[controller.slotUnit].hp+=2;
      painter.makeHeal(controller.slotUnit, 2);
      $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位*守备*,回复2点生命值</p>");
    }
    else {
      data.unit[controller.slotUnit].hp++;
      painter.makeHeal(controller.slotUnit, 1);
      $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位*守备*,回复1点生命值</p>");
    };
    
    data.unit[controller.slotUnit].hp>data.unit[controller.slotUnit].maxhp?data.unit[controller.slotUnit].hp=data.unit[controller.slotUnit].maxhp:data.unit[controller.slotUnit].hp;
    
  };
  
  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//ranger-atk 执行
ctrl.prototype.doRangeratk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkranger.wav");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//sol-atk 执行
ctrl.prototype.doSolatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atksol.wav", "static/img/effdampunch.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//zs- atk 执行
ctrl.prototype.doZSatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    if(data.unit[controller.slotUnit].angerflag==true) {
      data.unit[controller.slotUnit].angerflag = false;
      x = 2;
    }
    else {
      dice1 = controller.rollDice(6);
      switch(dice1) {
        case 1:
        case 2:
          x = 0.5;
          break;
        case 3:
        case 4:
        case 5:
          x = 1;
          break;
        case 6:
          x = 2;
          data.unit[controller.slotUnit].angerflag = true;
          var t = setTimeout('controller.playSound("static/audio/anger.wav");', 1500);
          $("div.history-content").prepend("<p class='history-item'>战士获得*激怒*效果</p>");
          break;
      };
      data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    };
    
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkzs.wav");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//zs-冲锋 执行
ctrl.prototype.doZScharge = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  data.unit[controller.slotUnit].atkCount++;

  for(i=0;i<data.tempTar.length;i++) {
    var dam = 2;
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    };
    data.unit[controller.slotUnit].dps+=dam;
    // data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].faintflag = true;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkzs.wav");
    $("div.history-content").prepend("<p class='history-item'>*冲锋*使"+(data.tempTar[i]+1)+"号单位眩晕，并对其造成了"+dam+"点伤害</p>");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//lr- atk 执行
ctrl.prototype.doLRatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  data.unit[controller.slotUnit].atkCount++;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[controller.slotUnit].dps+=dam;
    // data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atklr.wav", "static/img/effdamarrow.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//lr-箭雨 执行
ctrl.prototype.doLRrain = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  data.unit[controller.slotUnit].atkCount++;

  var dam = 0, dice1;
  dice1 = controller.rollDice(6);
  switch(dice1) {
    case 1:
    case 2:
    case 3:
      dam = 2;
      break;
    case 4:
    case 5:
      dam = 3;
      break;
    case 6:
      dam = 5;
      break;
  };

  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    var newDam = dam;
    if(data.unit[i+x].hp>0) {
      if(data.unit[i+x].iceblockflag==true) {
        newDam = 0;
      }
      else if(data.unit[i+x].bearflag==true && newDam>1) {
        newDam--;
      };
      data.unit[controller.slotUnit].dps+=dam;
      // data.unit[controller.slotUnit].atkCount++;
      data.unit[i+x].hp-=newDam;
      data.unit[i+x].hp<0?data.unit[i+x].hp=0:data.unit[i+x].hp;
      painter.makeAttack(i+x, newDam, "static/audio/atklr.wav", "static/img/effdamarrow.png");
      $("div.history-content").prepend("<p class='history-item'>*箭雨*对"+(i+x+1)+"号单位造成"+newDam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//lr-奥术射击 执行
ctrl.prototype.doLRas = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    if(data.unit[data.tempTar[i]].yy>0) {
      data.unit[data.tempTar[i]].yy = 0;
      data.unit[data.tempTar[i]].maxhp-=2;
      data.unit[data.tempTar[i]].hp-=2;
      data.unit[data.tempTar[i]].hp<1?data.unit[data.tempTar[i]].hp=1:data.unit[data.tempTar[i]].hp;
      data.unit[data.tempTar[i]].speed-=2;
    };
    data.unit[data.tempTar[i]].angerflag = false;
    data.unit[data.tempTar[i]].slowflag==true?data.unit[data.tempTar[i]].speed:data.unit[data.tempTar[i]].speed-=2;
    data.unit[data.tempTar[i]].slowflag = true;
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atklr.wav", "static/img/effdamarrow.png");
    $("div.history-content").prepend("<p class='history-item'>*奥术射击*使"+(data.tempTar[i]+1)+"号单位减速，并对其造成"+dam+"点伤害</p>");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//sm- atk 执行
ctrl.prototype.doSMatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atksm.wav", "static/img/effdamham.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//sm- 英勇 执行
ctrl.prototype.doSMyy = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var x;
  controller.slotUnit>4?x=5:x=0;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      if(data.unit[i+x].yy>0) {
        data.unit[i+x].yy = 2;
      }
      else {
        data.unit[i+x].yy = 2;
        data.unit[i+x].maxhp+=2;
        data.unit[i+x].hp+=2;
        data.unit[i+x].speed+=2;
      };
    };
    
  };

  $("div.history-content").prepend("<p class='history-item'>萨满释放了*英勇*，所有友方单位最大生命值，速度增加</p>");
  controller.playSound("static/audio/yy.wav");

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//ws- atk 执行
ctrl.prototype.doWSatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkws.wav", "static/img/effdamstick.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//ws- 死亡一指 执行
ctrl.prototype.doWSfinger = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    data.unit[data.tempTar[i]].hp>10?dam=5:dam=10;

    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkfinger.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>*死亡一指*对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//dz- atk 执行
ctrl.prototype.doDZatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    data.unit[data.tempTar[i]].poison>0 && dice1==5?x=2:x;

    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkdz.wav", "static/img/effdamdagger.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };

    if(controller.rollDice(6)==6) {
      data.unit[controller.slotUnit].sp++;
      data.unit[controller.slotUnit].sp>data.unit[controller.slotUnit].maxsp?data.unit[controller.slotUnit].sp=data.unit[controller.slotUnit].maxsp:data.unit[controller.slotUnit].sp;
      var t2, sec = 1;
      t?sec++:sec;
      t1?sec++:sec;
      var t2 = setTimeout('painter.makeSP('+controller.slotUnit+', 1);' , 1500*sec);
      $("div.history-content").prepend("<p class='history-item'>*能量控制*使刺客回复了1点SP</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//dz- 毒刃 执行
ctrl.prototype.doDZpoison = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    data.unit[data.tempTar[i]].poison>0 && dice1==5?x=2:x;

    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[data.tempTar[i]].poison = 2;
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/dzpoison.wav", "static/img/effdamdagger.png");
    $("div.history-content").prepend("<p class='history-item'>*毒刃*使"+(data.tempTar[i]+1)+"号单位中毒，并对其造成了"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");

    };

    if(controller.rollDice(6)==6) {
      data.unit[controller.slotUnit].sp++;
      data.unit[controller.slotUnit].sp>data.unit[controller.slotUnit].maxsp?data.unit[controller.slotUnit].sp=data.unit[controller.slotUnit].maxsp:data.unit[controller.slotUnit].sp;
      var t2, sec = 1;
      t?sec++:sec;
      t1?sec++:sec;
      var t2 = setTimeout('painter.makeSP('+controller.slotUnit+', 1);' , 1500*sec);
      $("div.history-content").prepend("<p class='history-item'>*能量控制*使刺客回复了1点SP</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//fs- atk 执行
ctrl.prototype.doFSatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  data.unit[controller.slotUnit].atkCount++;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");

    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkfs.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var tx;
      t?tx=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):tx=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };

    if(controller.rollDice(2)==1) {
      dam = Math.ceil(dice1 * 0.5);
      if(data.tempTar[i]==0 || data.tempTar[i]==5) {
        //最左边
        if(data.unit[data.tempTar[i]].hp>0) {
          data.unit[data.tempTar[i]].bearflag==true && dam>1?dam--:dam;
          data.unit[controller.slotUnit].dps+=dam;
          data.unit[data.tempTar[i]].hp-=dam;
          data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
          var t1 = setTimeout('painter.makeAttack('+data.tempTar[i]+','+ dam+', "static/audio/iceshot.wav" , "static/img/effdammagic.png" );' , 1500);
          $("div.history-content").prepend("<p class='history-item'>*冰枪术*对"+(data.tempTar[i]+1)+"号单位额外造成"+dam+"点偏斜伤害</p>");
        };
        if(data.unit[data.tempTar[i]+1].hp>0) {
          data.unit[data.tempTar[i]+1].bearflag==true && dam>1?dam--:dam;
          data.unit[controller.slotUnit].dps+=dam;
          data.unit[data.tempTar[i]+1].hp-=dam;
          data.unit[data.tempTar[i]+1].hp<0?data.unit[data.tempTar[i]+1].hp=0:data.unit[data.tempTar[i]+1].hp;
          var t2 = setTimeout('painter.makeAttack('+(data.tempTar[i]+1)+','+ dam+', "static/audio/iceshot.wav" , "static/img/effdammagic.png");' , 1500);
          $("div.history-content").prepend("<p class='history-item'>*冰枪术*对"+(data.tempTar[i]+2)+"号单位额外造成"+dam+"点偏斜伤害</p>");
        };
      }
      else if(data.tempTar[i]==4 || data.tempTar[i]==9) {
        //最右边
        if(data.unit[data.tempTar[i]-1].hp>0) {
          data.unit[data.tempTar[i]-1].bearflag==true && dam>1?dam--:dam;
          data.unit[controller.slotUnit].dps+=dam;
          data.unit[data.tempTar[i]-1].hp-=dam;
          data.unit[data.tempTar[i]-1].hp<0?data.unit[data.tempTar[i]-1].hp=0:data.unit[data.tempTar[i]-1].hp;
          var t1 = setTimeout('painter.makeAttack('+(data.tempTar[i]-1)+','+ dam+', "static/audio/iceshot.wav" , "static/img/effdammagic.png");' , 1500);
          $("div.history-content").prepend("<p class='history-item'>*冰枪术*对"+(data.tempTar[i])+"号单位额外造成"+dam+"点偏斜伤害</p>");
        };
        if(data.unit[data.tempTar[i]].hp>0) {
          data.unit[data.tempTar[i]].bearflag==true && dam>1?dam--:dam;
          data.unit[controller.slotUnit].dps+=dam;
          data.unit[data.tempTar[i]].hp-=dam;
          data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
          var t2 = setTimeout('painter.makeAttack('+data.tempTar[i]+','+ dam+', "static/audio/iceshot.wav", "static/img/effdammagic.png");' , 1500);
          $("div.history-content").prepend("<p class='history-item'>*冰枪术*对"+(data.tempTar[i]+1)+"号单位额外造成"+dam+"点偏斜伤害</p>");
        };
      }
      else {
        //中间位置
        if(data.unit[data.tempTar[i]-1].hp>0) {
          data.unit[data.tempTar[i]-1].bearflag==true && dam>1?dam--:dam;
          data.unit[controller.slotUnit].dps+=dam;
          data.unit[data.tempTar[i]-1].hp-=dam;
          data.unit[data.tempTar[i]-1].hp<0?data.unit[data.tempTar[i]-1].hp=0:data.unit[data.tempTar[i]-1].hp;
          var t1 = setTimeout('painter.makeAttack('+(data.tempTar[i]-1)+','+ dam+', "static/audio/iceshot.wav", "static/img/effdammagic.png");' , 1500);
          $("div.history-content").prepend("<p class='history-item'>*冰枪术*对"+(data.tempTar[i])+"号单位额外造成"+dam+"点偏斜伤害</p>");
        };
        if(data.unit[data.tempTar[i]].hp>0) {
          data.unit[data.tempTar[i]].bearflag==true && dam>1?dam--:dam;
          data.unit[controller.slotUnit].dps+=dam;
          data.unit[data.tempTar[i]].hp-=dam;
          data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
          var t2 = setTimeout('painter.makeAttack('+data.tempTar[i]+','+ dam+', "static/audio/iceshot.wav", "static/img/effdammagic.png");' , 1500);
          $("div.history-content").prepend("<p class='history-item'>*冰枪术*对"+(data.tempTar[i]+1)+"号单位额外造成"+dam+"点偏斜伤害</p>");
        };
        if(data.unit[data.tempTar[i]+1].hp>0) {
          data.unit[data.tempTar[i]+1].bearflag==true && dam>1?dam--:dam;
          data.unit[controller.slotUnit].dps+=dam;
          data.unit[data.tempTar[i]+1].hp-=dam;
          data.unit[data.tempTar[i]+1].hp<0?data.unit[data.tempTar[i]+1].hp=0:data.unit[data.tempTar[i]+1].hp;
          var t3 = setTimeout('painter.makeAttack('+(data.tempTar[i]+1)+','+ dam+', "static/audio/iceshot.wav", "static/img/effdammagic.png");' , 1500);
          $("div.history-content").prepend("<p class='history-item'>*冰枪术*对"+(data.tempTar[i]+2)+"号单位额外造成"+dam+"点偏斜伤害</p>");
        };
      };
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//fs- 寒冰屏障 执行
ctrl.prototype.doFSiceblock = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  data.unit[controller.slotUnit].iceblockflag = true;
  controller.ibNum = 1;
  $("div.history-content").prepend("<p class='history-item'>魔法师释放了*寒冰屏障*保护自己，免疫任何直接伤害</p>");
  controller.playSound("static/audio/casticeblock.wav");

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//xd-atk 执行
ctrl.prototype.doXDatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    data.unit[controller.slotUnit].name=="tiger"?dam+=2:dam;

    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atk"+data.unit[controller.slotUnit].name+".wav", "static/img/effdam"+data.unit[controller.slotUnit].name+".png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//xd-变形 虎 执行
ctrl.prototype.doXDtiger = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  data.unit[controller.slotUnit].name = "tiger";
  data.unit[controller.slotUnit].tigerflag = true;
  data.unit[controller.slotUnit].bearflag = false;
  data.unit[controller.slotUnit].treeflag = false;
  data.unit[controller.slotUnit].tauntflag = false;
  data.unit[controller.slotUnit].hp+=3;
  painter.makeHeal(controller.slotUnit, 3);
  data.unit[controller.slotUnit].hp>data.unit[controller.slotUnit].maxhp?data.unit[controller.slotUnit].hp=data.unit[controller.slotUnit].maxhp:data.unit[controller.slotUnit].hp;

  $("div.history-content").prepend("<p class='history-item'>德鲁伊回复3生命值并变形为虎形态，可以造成更高的伤害</p>");
  controller.playSound("static/audio/tiger.wav");

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//xd-变形 熊 执行
ctrl.prototype.doXDbear = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  data.unit[controller.slotUnit].name = "bear";
  data.unit[controller.slotUnit].tigerflag = false;
  data.unit[controller.slotUnit].bearflag = true;
  data.unit[controller.slotUnit].treeflag = false;
  data.unit[controller.slotUnit].tauntflag = true;
  data.unit[controller.slotUnit].hp+=3;
  painter.makeHeal(controller.slotUnit, 3);
  data.unit[controller.slotUnit].hp>data.unit[controller.slotUnit].maxhp?data.unit[controller.slotUnit].hp=data.unit[controller.slotUnit].maxhp:data.unit[controller.slotUnit].hp;

  $("div.history-content").prepend("<p class='history-item'>德鲁伊回复3生命值并变形为熊形态，可以保护队友，并稍微降低受到的伤害</p>");
  controller.playSound("static/audio/bear.wav");

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//xd-变形 树 执行
ctrl.prototype.doXDtree = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  data.unit[controller.slotUnit].name = "tree";
  data.unit[controller.slotUnit].tigerflag = false;
  data.unit[controller.slotUnit].bearflag = false;
  data.unit[controller.slotUnit].treeflag = true;
  data.unit[controller.slotUnit].tauntflag = false;
  data.unit[controller.slotUnit].hp+=3;
  painter.makeHeal(controller.slotUnit, 3);
  data.unit[controller.slotUnit].hp>data.unit[controller.slotUnit].maxhp?data.unit[controller.slotUnit].hp=data.unit[controller.slotUnit].maxhp:data.unit[controller.slotUnit].hp;

  $("div.history-content").prepend("<p class='history-item'>德鲁伊回复3生命值并变形为树形态，周期性地治疗全体友方单位</p>");
  controller.playSound("static/audio/tree.wav");

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//xd-共生术 执行
ctrl.prototype.doXDgs = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  for(i=0;i<data.tempTar.length;i++) {
    var x;
    data.tempTar[i]>4?x=-5:x=5;
    var tempHP = data.unit[data.tempTar[i]+x].hp;
    data.unit[data.tempTar[i]+x].hp = data.unit[controller.slotUnit].hp;
    data.unit[data.tempTar[i]+x].hp>data.unit[data.tempTar[i]+x].maxhp?data.unit[data.tempTar[i]+x].hp=data.unit[data.tempTar[i]+x].maxhp:data.unit[data.tempTar[i]+x].hp;

    data.unit[controller.slotUnit].hp = tempHP;
    data.unit[controller.slotUnit].hp>data.unit[controller.slotUnit].maxhp?data.unit[controller.slotUnit].hp=data.unit[controller.slotUnit].maxhp:data.unit[controller.slotUnit].hp;

    $("div.history-content").prepend("<p class='history-item'>德鲁伊释放*共生术*，交换了生命值</p>");
    controller.playSound("static/audio/xdgs.wav");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//dk-atk 执行
ctrl.prototype.doDKatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkdk.wav");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(dam>0) {
      data.unit[controller.slotUnit].hp+=2;
      data.unit[controller.slotUnit].hp>data.unit[controller.slotUnit].maxhp?data.unit[controller.slotUnit].hp=data.unit[controller.slotUnit].maxhp:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeHeal('+controller.slotUnit+', 2);', 3000):t=setTimeout('painter.makeHeal('+controller.slotUnit+', 2);', 1500);
      $("div.history-content").prepend("<p class='history-item'>死亡骑士的*邪恶斩击*使其回复了2点生命值</p>");
    };

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t2, sec = 1;
      t?sec++:sec;
      t1?sec++:sec;
      t2=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500*sec);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//dk-牺牲爪牙 执行
ctrl.prototype.doDKboom = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  data.unit[controller.slotUnit].atkCount++;

  var dam;

  if(data.tempTar[i]==0 || data.tempTar[i]==5) {
    //最左边
    dam = 3;
    if(data.unit[data.tempTar[i]+1].bearflag==true && dam>1) {
      dam--;
    }
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[data.tempTar[i]+1].hp-=dam;
    data.unit[data.tempTar[i]+1].hp<0?data.unit[data.tempTar[i]+1].hp=0:data.unit[data.tempTar[i]+1].hp;
    painter.makeAttack(data.tempTar[i]+1, dam, "static/audio/dkboom.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>死亡骑士的*牺牲爪牙*对"+(data.tempTar[i]+2)+"号单位造成了"+dam+"点伤害</p>");
  }
  else if(data.tempTar[i]==4 || data.tempTar[i]==9) {
    //最右边
    dam = 3;
    if(data.unit[data.tempTar[i]-1].bearflag==true && dam>1) {
      dam--;
    }
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[data.tempTar[i]-1].hp-=dam;
    data.unit[data.tempTar[i]-1].hp<0?data.unit[data.tempTar[i]-1].hp=0:data.unit[data.tempTar[i]-1].hp;
    painter.makeAttack(data.tempTar[i]-1, dam, "static/audio/dkboom.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>死亡骑士的*牺牲爪牙*对"+(data.tempTar[i])+"号单位造成了"+dam+"点伤害</p>");
  }
  else {
    //中间位置
    dam = 3;
    if(data.unit[data.tempTar[i]+1].bearflag==true && dam>1) {
      dam--;
    }
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[data.tempTar[i]+1].hp-=dam;
    data.unit[data.tempTar[i]+1].hp<0?data.unit[data.tempTar[i]+1].hp=0:data.unit[data.tempTar[i]+1].hp;
    painter.makeAttack(data.tempTar[i]+1, dam, "static/audio/dkboom.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>死亡骑士的*牺牲爪牙*对"+(data.tempTar[i]+2)+"号单位造成了"+dam+"点伤害</p>");

    dam = 3;
    if(data.unit[data.tempTar[i]-1].bearflag==true && dam>1) {
      dam--;
    }
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[data.tempTar[i]-1].hp-=dam;
    data.unit[data.tempTar[i]-1].hp<0?data.unit[data.tempTar[i]-1].hp=0:data.unit[data.tempTar[i]-1].hp;
    painter.makeAttack(data.tempTar[i]-1, dam, "static/audio/dkboom.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>死亡骑士的*牺牲爪牙*对"+(data.tempTar[i])+"号单位造成了"+dam+"点伤害</p>");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//qs-atk 执行
ctrl.prototype.doQSatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkqs.wav", "static/img/effdamham.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//qs-生而平等 执行
ctrl.prototype.doQSequal = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  
  var x, me, you, i = 0;
  controller.slotUnit>4?x=5:x=0;
  while(data.unit[i+x].hp==0) {
    i++;
  };
  me = i + x;
  i++;
  for(;i<5;i++) {
    if(data.unit[i+x].hp>0 && data.unit[me].hp>data.unit[i+x].hp) {
      me = i + x;
    };
  };

  controller.slotUnit>4?x=0:x=5;
  i = 0;
  while(data.unit[i+x].hp==0) {
    i++;
  };
  you = i + x;
  i++;
  for(;i<5;i++) {
    if(data.unit[you].hp<data.unit[i+x].hp) {
      you = i + x;
    };
  };

  var temp = Math.ceil((data.unit[me].hp+data.unit[you].hp)/2);
  data.unit[me].hp = temp;
  data.unit[me].hp>data.unit[me].maxhp?data.unit[me].hp=data.unit[me].maxhp:data.unit[me].hp;
  data.unit[you].hp = temp;
  data.unit[you].hp>data.unit[you].maxhp?data.unit[you].hp=data.unit[you].maxhp:data.unit[you].hp;

  $("div.history-content").prepend("<p class='history-item'>圣骑士释放了*生而平等*，友方生命值最少的单位和敌方生命值最多的单位均分生命值</p>");
  controller.playSound("static/audio/qsequal.wav");
  
  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//qs-圣疗术 执行
ctrl.prototype.doQSreborn = function() {
  data.unit[controller.slotUnit].sp-=2;
  data.unit[controller.slotUnit].actionflag = true;

  data.unit[controller.slotUnit].hp = data.unit[controller.slotUnit].maxhp;

  painter.makeHeal(controller.slotUnit, data.unit[controller.slotUnit].maxhp, "static/audio/qsreborn.wav");
  $("div.history-content").prepend("<p class='history-item'>圣骑士释放了*圣疗术*，使其生命值完全回复</p>");

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//ms- atk 执行
ctrl.prototype.doMSatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };

    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkms.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//ms- 治疗术 执行
ctrl.prototype.doMSheal = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var heal, dice1;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        heal = 10;
        break;
      case 3:
      case 4:
      case 5:
        heal = 13;
        break;
      case 6:
        heal = 25;
        break;
    };

    var x;
    data.tempTar[i]>4?x=-5:x=5;

    data.unit[data.tempTar[i]+x].hp+=heal;
    data.unit[data.tempTar[i]+x].hp>data.unit[data.tempTar[i]+x].maxhp?data.unit[data.tempTar[i]+x].hp=data.unit[data.tempTar[i]+x].maxhp:data.unit[data.tempTar[i]+x].hp;
    data.unit[data.tempTar[i]+x].faintflag = false;
    data.unit[data.tempTar[i]+x].slowflag==true?data.unit[data.tempTar[i]+x].speed+=2:data.unit[data.tempTar[i]+x].speed;
    data.unit[data.tempTar[i]+x].slowflag = false;
    data.unit[data.tempTar[i]+x].poison = 0;
    data.unit[data.tempTar[i]+x].confuse = 0;
    painter.makeHeal((data.tempTar[i]+x), heal);
    $("div.history-content").prepend("<p class='history-item'>牧师对"+(data.tempTar[i]+x+1)+"号单位释放*治疗术*，清除其所有不良效果，并使其回复"+heal+"点生命值</p>");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//sr-atk 执行
ctrl.prototype.doSRatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atksr.wav", "static/img/effdammagic.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//sr-鼓舞 执行
ctrl.prototype.doSRcheer = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  
  var x;
  for(i=0;i<data.tempTar.length;i++) {
    data.tempTar[i]>4?x=-5:x=5;
    data.unit[data.tempTar[i]+x].hp+=2;
    data.unit[data.tempTar[i]+x].maxhp+=2;
    data.unit[data.tempTar[i]+x].tauntflag = true;
    
    painter.makeHeal(data.tempTar[i]+x, 2, "static/audio/srcheer.wav");
    $("div.history-content").prepend("<p class='history-item'>吟游诗人对"+(data.tempTar[i]+x+1)+"号单位释放了*鼓舞*，使其最大生命值增加2，并获得*嘲讽技能保护队友</p>");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//sr-蛊惑曲 执行
ctrl.prototype.doSRconfuse = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  
  var x;
  controller.slotUnit>4?x=0:x=5;
  for(i=0;i<5;i++) {
    if(data.unit[i+x].hp>0) {
      data.unit[i+x].confuse = 2;
    };
  };
  $("div.history-content").prepend("<p class='history-item'>吟游诗人释放了*蛊惑曲*，敌方所有单位被蛊惑</p>");
  controller.playSound("static/audio/srconfuse.wav");

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//pc-atk 执行
ctrl.prototype.doPCatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;
  data.unit[controller.slotUnit].atkCount++;

  var dam, x, y, dice1, dice2;
  controller.slotUnit>4?y=0:y=5;
  switch(controller.rollDice(6)) {
    case 1:
    case 2:
    case 3:
      x = 0.5;
      break;
    case 4:
    case 5:
    case 6:
      x = 1;
      break;
  };
  dice1 = controller.rollDice(6);
  dice2 = controller.rollDice(6);
  dice1>dice2?dice1=dice1:dice1=dice2;

  dam = Math.ceil(dice1 * x);

  for(i=0;i<5;i++) {
    if(data.unit[i+y].hp>0){
      var newDam = dam;

      if(data.unit[i+y].iceblockflag==true) {
        newDam = 0;
      }
      else if(data.unit[i+y].bearflag==true && newDam>1) {
        newDam--;
      };
      data.unit[controller.slotUnit].dps+=newDam;
      data.unit[i+y].hp-=newDam;
      data.unit[i+y].hp<0?data.unit[i+y].hp=0:data.unit[i+y].hp;
      painter.makeAttack(i+y, newDam, "static/audio/atkpc.wav", "static/img/effdamheavy.png");
      $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(i+y+1)+"号单位造成"+newDam+"点伤害</p>");
      
    };
    
  };

  if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
    data.unit[controller.slotUnit].hp-=dam;
    data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
    var t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
    $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
  };
  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//jb-atk 执行
ctrl.prototype.doJBatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    dam+= Math.floor((data.unit[controller.slotUnit].maxhp-data.unit[controller.slotUnit].hp)/10);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkjb.wav", "static/img/effdamstick.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//jb-醉酒 执行
ctrl.prototype.doJBdrunk = function() {
  data.unit[controller.slotUnit].sp-=2;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    data.unit[data.tempTar[i]].drunkflag = true;
    $("div.history-content").prepend("<p class='history-item'>酒保释放了*醉酒*，使"+(data.tempTar[i]+1)+"号单位醉酒</p>");
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//yd-atk 执行
ctrl.prototype.doYDatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * 0.5);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkyd.wav", "static/img/effdamct.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//YX-atk 执行
ctrl.prototype.doYXatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkyx.wav", "static/img/effdamyx.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };
  x==2?data.unit[controller.slotUnit].actionflag=false:data.unit[controller.slotUnit].actionflag=true;

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//YX-shadow 执行
ctrl.prototype.doYXshadow = function() {
  data.unit[controller.slotUnit].sp--;
  // data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/yxshadow.wav", "static/img/effdamyx.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//TF-atk 执行
ctrl.prototype.doTFatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    data.unit[data.tempTar[i]].hp>9?dam--:dam+=2;
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atktf.wav", "static/img/effdamtf.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//TF- 行刑 执行
ctrl.prototype.doTFexcute = function() {
  data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam, x, dice1, dice2;
  for(i=0;i<data.tempTar.length;i++) {
    dice1 = controller.rollDice(6);
    switch(dice1) {
      case 1:
      case 2:
        x = 0.5;
        break;
      case 3:
      case 4:
      case 5:
        x = 1;
        break;
      case 6:
        x = 2;
        break;
    };
    data.unit[data.tempTar[i]].cat==4 && dice1==3?x=0.5:x;
    dice1 = controller.rollDice(6);
    dice2 = controller.rollDice(6);
    dice1>dice2?dice1=dice1:dice1=dice2;

    dam = Math.ceil(dice1 * x);
    data.unit[data.tempTar[i]].hp>9?dam--:dam+=2;
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    }
    else if(data.unit[data.tempTar[i]].earthflag==true && x==2) {
      var revDam = Math.round(dam/3);
      dam = dam - revDam;
      data.unit[controller.slotUnit].hp-=revDam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t = setTimeout('painter.makeAttack('+controller.slotUnit+', '+revDam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*大地之力*效果使"+(controller.slotUnit+1)+"号单位受到"+revDam+"点反馈伤害</p>");
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/tfexcute.wav", "static/img/effdamtf.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(data.unit[data.tempTar[i]].hp==0) {
      var updown = 0;
      var ta = new Array();
      data.tempTar[i]>4?updown=5:updown=0;
      for(j=0;j<5;j++) {
        if(data.unit[j+updown].hp>0) {
          data.unit[controller.slotUnit].dps+=Math.round(dam/2);
          data.unit[j+updown].hp-=Math.round(dam/2);
          data.unit[j+updown].hp<0?data.unit[j+updown].hp=0:data.unit[j+updown].hp;
          ta[j] = setTimeout('painter.makeAttack('+(j+updown)+', '+Math.round(dam/2)+', "static/audio/tfexcute.wav", "static/img/effdamtf.png" );' , 1500);
          $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(j+updown+1)+"号单位造成"+Math.round(dam/2)+"点顺带伤害</p>");
        };
      };
    };

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };

  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};
//MO-atk 执行
ctrl.prototype.doMOatk = function() {
  // data.unit[controller.slotUnit].sp--;
  data.unit[controller.slotUnit].actionflag = true;

  var dam;
  for(i=0;i<data.tempTar.length;i++) {

    dam = 1+data.unit[controller.slotUnit].atkCount;
    if(data.unit[data.tempTar[i]].iceblockflag==true) {
      dam = 0;
    }
    else if(data.unit[data.tempTar[i]].bearflag==true && dam>1) {
      dam--;
    };
    data.unit[controller.slotUnit].dps+=dam;
    data.unit[controller.slotUnit].atkCount++;
    data.unit[data.tempTar[i]].hp-=dam;
    data.unit[data.tempTar[i]].hp<0?data.unit[data.tempTar[i]].hp=0:data.unit[data.tempTar[i]].hp;
    painter.makeAttack(data.tempTar[i], dam, "static/audio/atkmo.wav", "static/img/effdammo.png");
    $("div.history-content").prepend("<p class='history-item'>"+(controller.slotUnit+1)+"号单位对"+(data.tempTar[i]+1)+"号单位造成"+dam+"点伤害</p>");

    if(controller.rollDice(3)==3 && data.unit[controller.slotUnit].confuse>0) {
      data.unit[controller.slotUnit].hp-=dam;
      data.unit[controller.slotUnit].hp<0?data.unit[controller.slotUnit].hp=0:data.unit[controller.slotUnit].hp;
      var t1;
      t?t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 3000):t1=setTimeout('painter.makeAttack('+controller.slotUnit+', '+dam+');' , 1500);
      $("div.history-content").prepend("<p class='history-item'>*蛊惑*使"+(controller.slotUnit+1)+"号单位受到了"+dam+"点伤害</p>");
    };
  };

  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};

//播放音效函数，如需循环音效isLoop参数传入true
ctrl.prototype.playSound = function(url, isLoop) {
  isLoop?isLoop=true:isLoop=false;
  $("audio#my-sound").attr("src","");
  $("audio#my-sound").attr("src",url);

  $("audio#my-sound").attr("loop",isLoop);

};
// roll dice函数
ctrl.prototype.rollDice = function(diceLimit) {
  //默认为6点
  diceLimit?diceLimit:diceLimit = 6;
  var myRoll = Math.floor(Math.random()*diceLimit) + 1;
  return myRoll;
};
//数组操作
ctrl.prototype.in_Array = function(tar, arr) {
  for(i=0;i<arr.length;i++) {
    if(arr[i]==tar) {
      return i;
    };
  };
  return -1;
};
ctrl.prototype.remove_Array = function(tar, arr) {
  var tarIndex = controller.in_Array(tar, arr);
  if(tarIndex!=-1) {
    //hit the target element to be removed
    if(tarIndex==0) {
      //hit the 1st one
      arr.shift();
    }
    else if(tarIndex==(arr.length-1)) {
      //hit the final one
      arr.pop();
    }
    else {
      //hit in body
      for(i=tarIndex;i<arr.length-1;i++) {
        arr[i] = arr[i+1];
      };
      arr.pop();
    };
    
  };
};

var controller = new ctrl();

//*****system function*****
function startDraw() {
  //比较先后手
  $("div#draw-button").addClass("disabled");
  controller.playSound("static/audio/dice.wav");

  var upRoll = controller.rollDice();
  var downRoll = controller.rollDice();
  if(upRoll>downRoll) {
    //上方先手
    controller.firstHandflag = true;
    controller.whoflag = controller.firstHandflag;
    $("div#draw-button").text("上方先手");
    $("div#battle-button").removeClass("disabled");

    $("div.history-content").prepend("<p class='history-item'>上方先手</p>");
    painter.showMsg("上方先手！");
  }
  else if(upRoll<downRoll) {
    //下方先手
    controller.firstHandflag = false;
    controller.whoflag = controller.firstHandflag;
    $("div#draw-button").text("下方先手");
    $("div#battle-button").removeClass("disabled");

    $("div.history-content").prepend("<p class='history-item'>下方先手</p>");
    painter.showMsg("下方先手！");
  }
  else {
    painter.showMsg("平 手！");
    $("div#draw-button").removeClass("disabled");
  };
};
function startBattle() {
  controller.playSound("static/audio/start.wav");
  controller.battleflag = true;
  $("div#battle-button").text("战斗已开始");
  $("div#battle-button").addClass("disabled");
  $("div.history-content").prepend("<p class='history-item'>战斗开始</p>");
  data.setUnitdata();
  painter.refUnit();
  $("div#action-button").removeClass("disabled");
};

function reportDPS() {
  var msgStr = "总计直接伤害/平均每攻击回合直接伤害\n 上方：\n";
  for(i=0;i<10;i++) {
    i==5?msgStr+="\n下方：\n":msgStr;
    if(data.unit[i].dps==0 && data.unit[i].atkCount==0) {
      msgStr+="..\n";
    }
    else {
      msgStr+=data.unit[i].dps+"   /   "+(data.unit[i].dps/data.unit[i].atkCount).toFixed(2)+"\n";
    };
  };
  alert(msgStr);
};

function test() {
  alert("testing start...");
  // alert(data.unit[1].herono);
  // alert(data.unit[0].treeflag);
  // $("div.action-panel").show();
  // painter.showMsg("测试一下message功能~");
  // var testStr = 6.12345;
  // testStr = parseStr(testStr);
  // alert(testStr[0]+" "+testStr[1]+" "+testStr[2]);
};

function test2() {
  $("div.action-panel").hide();
};