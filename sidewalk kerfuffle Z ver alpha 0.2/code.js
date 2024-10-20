

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["87233530-09f6-4640-9278-42e3bc506f3a","31c82447-04fe-4bed-87e3-3a9c6eedf73f","4bd21173-8590-493a-9b1c-06ca40b92f43","0f3d327e-c075-4ce0-ba10-36171d99981d","c490defa-e423-4218-8885-794d42e00c53","a61928e7-a4f6-408f-9acf-8c7ba4527f68","4044e72e-502a-4f2e-986e-f36ce053900f","a8f58e1d-7b3a-4fe3-9fd3-2bd253244572","bc74ed37-03ac-40f2-87f6-e2935772e164","cb819631-3a4f-4a0e-93cc-0b5892276a7d","bc1f6357-82b1-4d4d-a265-93064c7ee667","fd0ad586-b4d3-481d-9d7e-7f5070e7d68c","1796a3f4-ba91-4918-a815-ba6aa482f550","fd11410b-d5af-49a2-9532-fdb097ba29b4","850c591f-ef13-4dd8-a768-6ef79138974d","af6e032e-677c-4f92-b5be-b7ebd772a401","564249be-8d2c-446d-bfee-f0996c325df6","01d7456e-04c5-4edc-b9e6-8549f0425533","d57e5814-98f6-44cb-b134-854aafab81c3","c834349c-cb50-4938-9881-f74ace03b935","96198410-2201-40bb-97df-bc95cf0bf04d","5d5baf02-3fcb-49ba-be47-0901878c0fb3","508652a5-ba3d-42dd-b852-634a94c7dc45","969457cb-7333-4ade-b8cb-66fdeb9099d2","1ba06f72-c494-45a7-ae48-39bb8139ddea","1cb1a93f-f08b-4fbc-a09a-83677926d988","0aeadb8b-9c77-42c5-a6fd-d7c9c1fafb35","4421f3cd-f9b6-491e-9414-4c255a85b252","b7818d5a-f78e-475d-854f-443b61cf9e33","d14f03bb-fc95-4dfd-8143-75c708371f21","fedba601-37d1-4340-9da4-605fc8174972","5fac7869-ce15-4bf0-9fe7-d6cc71fe925d"],"propsByKey":{"87233530-09f6-4640-9278-42e3bc506f3a":{"name":"Player_idle_right","sourceUrl":null,"frameSize":{"x":20,"y":46},"frameCount":1,"looping":true,"frameDelay":12,"version":"w2ONxO0XC5btaNmxS87.4Oo8cavotUIy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":46},"rootRelativePath":"assets/87233530-09f6-4640-9278-42e3bc506f3a.png"},"31c82447-04fe-4bed-87e3-3a9c6eedf73f":{"name":"Player_idle_left","sourceUrl":null,"frameSize":{"x":20,"y":46},"frameCount":1,"looping":true,"frameDelay":12,"version":"SVNz.VY11XFkQyaRBtlOF67sMMcQUvVN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":46},"rootRelativePath":"assets/31c82447-04fe-4bed-87e3-3a9c6eedf73f.png"},"4bd21173-8590-493a-9b1c-06ca40b92f43":{"name":"player_attack_right","sourceUrl":null,"frameSize":{"x":25,"y":46},"frameCount":3,"looping":true,"frameDelay":3,"version":"aPyN5bnPms2tOmHpSiaX.4IEFV0pbmNx","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":92},"rootRelativePath":"assets/4bd21173-8590-493a-9b1c-06ca40b92f43.png"},"0f3d327e-c075-4ce0-ba10-36171d99981d":{"name":"player_attack_left","sourceUrl":null,"frameSize":{"x":25,"y":46},"frameCount":3,"looping":true,"frameDelay":12,"version":"cXa.8s37Djaonlkwb4xQJBU2e4tKAvII","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":92},"rootRelativePath":"assets/0f3d327e-c075-4ce0-ba10-36171d99981d.png"},"c490defa-e423-4218-8885-794d42e00c53":{"name":"FrontWalk","sourceUrl":null,"frameSize":{"x":20,"y":46},"frameCount":3,"looping":true,"frameDelay":3,"version":"blfUz4oaKQosL5geHrH6X8PpnvJnAsXW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":46},"rootRelativePath":"assets/c490defa-e423-4218-8885-794d42e00c53.png"},"a61928e7-a4f6-408f-9acf-8c7ba4527f68":{"name":"BackWalk","sourceUrl":null,"frameSize":{"x":20,"y":46},"frameCount":3,"looping":true,"frameDelay":3,"version":"2nvTEignSYqQJQAlo18mFVz.jLjbt9lu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":46},"rootRelativePath":"assets/a61928e7-a4f6-408f-9acf-8c7ba4527f68.png"},"4044e72e-502a-4f2e-986e-f36ce053900f":{"name":"Player_kick_right","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":false,"frameDelay":5,"version":"08BP6w8UX6.ibnJOzRj24C4jTiKDOsiU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/4044e72e-502a-4f2e-986e-f36ce053900f.png"},"a8f58e1d-7b3a-4fe3-9fd3-2bd253244572":{"name":"Player_kick_left","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":2,"looping":false,"frameDelay":5,"version":"_tHqaGXzF81tfAWJjaYg2wGqMyO5nTAw","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":96},"rootRelativePath":"assets/a8f58e1d-7b3a-4fe3-9fd3-2bd253244572.png"},"bc74ed37-03ac-40f2-87f6-e2935772e164":{"name":"player_jump_right","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"KH0dupl1igvT2ZpaE6FUhOr67NYsZnvj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/bc74ed37-03ac-40f2-87f6-e2935772e164.png"},"cb819631-3a4f-4a0e-93cc-0b5892276a7d":{"name":"player_jump_left","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"xIYbkKYzLlMj63IsAWMZ7zAFaUkWCsY7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/cb819631-3a4f-4a0e-93cc-0b5892276a7d.png"},"bc1f6357-82b1-4d4d-a265-93064c7ee667":{"name":"boss1_idle_right","sourceUrl":null,"frameSize":{"x":19,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"rwzZ_KmEyBgodrI5hpdchS2jnwgoCun9","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":43},"rootRelativePath":"assets/bc1f6357-82b1-4d4d-a265-93064c7ee667.png"},"fd0ad586-b4d3-481d-9d7e-7f5070e7d68c":{"name":"boss1_idle_left","sourceUrl":null,"frameSize":{"x":19,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"FkCw83Ze4.bIcruwE2nMDB2coX4VrBCL","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":19,"y":43},"rootRelativePath":"assets/fd0ad586-b4d3-481d-9d7e-7f5070e7d68c.png"},"1796a3f4-ba91-4918-a815-ba6aa482f550":{"name":"BG1","sourceUrl":"assets/v3/animations/xXfl9PvMc8uB7rOTOhthbUbdJpxzjmmK3noLnWW90Pg/1796a3f4-ba91-4918-a815-ba6aa482f550.png","frameSize":{"x":1024,"y":1024},"frameCount":1,"looping":true,"frameDelay":4,"version":"LLCrqDS8YVe_5Sva4Ojq_8MvaBANLt4Q","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1024},"rootRelativePath":"assets/v3/animations/xXfl9PvMc8uB7rOTOhthbUbdJpxzjmmK3noLnWW90Pg/1796a3f4-ba91-4918-a815-ba6aa482f550.png"},"fd11410b-d5af-49a2-9532-fdb097ba29b4":{"name":"Boss1_punch_left","sourceUrl":null,"frameSize":{"x":24,"y":43},"frameCount":3,"looping":false,"frameDelay":3,"version":"mQIPHtOjRsi..syrUlURKACpcdCO2BNU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":86},"rootRelativePath":"assets/fd11410b-d5af-49a2-9532-fdb097ba29b4.png"},"850c591f-ef13-4dd8-a768-6ef79138974d":{"name":"Boss1_punch_right","sourceUrl":null,"frameSize":{"x":24,"y":43},"frameCount":3,"looping":false,"frameDelay":3,"version":"DG07KPMHfWktju5qi390eT4ZvfpJGoK6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":86},"rootRelativePath":"assets/850c591f-ef13-4dd8-a768-6ef79138974d.png"},"af6e032e-677c-4f92-b5be-b7ebd772a401":{"name":"Boss1_jump_right","sourceUrl":null,"frameSize":{"x":29,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"qrqp8XrRR1U9XuGA1Wkc54vAykkmJyQD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":38},"rootRelativePath":"assets/af6e032e-677c-4f92-b5be-b7ebd772a401.png"},"564249be-8d2c-446d-bfee-f0996c325df6":{"name":"Boss1_jump_left","sourceUrl":null,"frameSize":{"x":29,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ww31aGpy7R2B9jh1ywFOb5ODuM.QRqNK","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":38},"rootRelativePath":"assets/564249be-8d2c-446d-bfee-f0996c325df6.png"},"01d7456e-04c5-4edc-b9e6-8549f0425533":{"name":"Boss1_FrontWalk","sourceUrl":null,"frameSize":{"x":20,"y":46},"frameCount":3,"looping":true,"frameDelay":3,"version":"H1FiewNvOziV.WmyLrGvRvBPl6rhz2_v","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":46},"rootRelativePath":"assets/01d7456e-04c5-4edc-b9e6-8549f0425533.png"},"d57e5814-98f6-44cb-b134-854aafab81c3":{"name":"Boss1_BackWalk","sourceUrl":null,"frameSize":{"x":20,"y":46},"frameCount":3,"looping":true,"frameDelay":4,"version":"CtL1skR76yjnglhTBHj6GhKmLyepOkDz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":46},"rootRelativePath":"assets/d57e5814-98f6-44cb-b134-854aafab81c3.png"},"c834349c-cb50-4938-9881-f74ace03b935":{"name":"Boss1_Kick_Right","sourceUrl":null,"frameSize":{"x":28,"y":43},"frameCount":2,"looping":false,"frameDelay":12,"version":".IfvpymcRgyVDuxr5sPvRQLbODKjhSGb","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":43},"rootRelativePath":"assets/c834349c-cb50-4938-9881-f74ace03b935.png"},"96198410-2201-40bb-97df-bc95cf0bf04d":{"name":"Boss1_Kick_Left","sourceUrl":null,"frameSize":{"x":28,"y":43},"frameCount":2,"looping":false,"frameDelay":10,"version":"8R.e1CLDBLMqSXiSDK7YYVs0n7ISyXYJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":43},"rootRelativePath":"assets/96198410-2201-40bb-97df-bc95cf0bf04d.png"},"5d5baf02-3fcb-49ba-be47-0901878c0fb3":{"name":"fireball_right","sourceUrl":null,"frameSize":{"x":15,"y":10},"frameCount":7,"looping":true,"frameDelay":2,"version":"FoJ88RTqy0kdT1NzVooNDfIkYioomDbt","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":40},"rootRelativePath":"assets/5d5baf02-3fcb-49ba-be47-0901878c0fb3.png"},"508652a5-ba3d-42dd-b852-634a94c7dc45":{"name":"blank_proj","sourceUrl":null,"frameSize":{"x":15,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"F.qABBJ2fdimaSMJN3UGFBK5FuODooFi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":10},"rootRelativePath":"assets/508652a5-ba3d-42dd-b852-634a94c7dc45.png"},"969457cb-7333-4ade-b8cb-66fdeb9099d2":{"name":"fireball_left","sourceUrl":null,"frameSize":{"x":15,"y":10},"frameCount":7,"looping":true,"frameDelay":2,"version":"LlkUDFeGsTcbB.0fP89l.7eKv7yy_3lQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":40},"rootRelativePath":"assets/969457cb-7333-4ade-b8cb-66fdeb9099d2.png"},"1ba06f72-c494-45a7-ae48-39bb8139ddea":{"name":"boss1_ability_right","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"bg6.OZcEcmizlpMnv_PG5qDh6SwtFseT","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/1ba06f72-c494-45a7-ae48-39bb8139ddea.png"},"1cb1a93f-f08b-4fbc-a09a-83677926d988":{"name":"boss1_ability_copy_1","sourceUrl":"assets/v3/animations/xXfl9PvMc8uB7rOTOhthbUbdJpxzjmmK3noLnWW90Pg/1ba06f72-c494-45a7-ae48-39bb8139ddea.png","frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":4,"version":null,"categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/v3/animations/xXfl9PvMc8uB7rOTOhthbUbdJpxzjmmK3noLnWW90Pg/1ba06f72-c494-45a7-ae48-39bb8139ddea.png"},"0aeadb8b-9c77-42c5-a6fd-d7c9c1fafb35":{"name":"boss1_ability_left","sourceUrl":"assets/v3/animations/xXfl9PvMc8uB7rOTOhthbUbdJpxzjmmK3noLnWW90Pg/1ba06f72-c494-45a7-ae48-39bb8139ddea.png","frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":4,"version":null,"categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/v3/animations/xXfl9PvMc8uB7rOTOhthbUbdJpxzjmmK3noLnWW90Pg/1ba06f72-c494-45a7-ae48-39bb8139ddea.png"},"4421f3cd-f9b6-491e-9414-4c255a85b252":{"name":"lightning1.png_1","sourceUrl":null,"frameSize":{"x":38,"y":25},"frameCount":4,"looping":true,"frameDelay":3,"version":"wFoWdWO9qG9mGKLkLPJ92ZmQsCAOZ6K.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":76,"y":50},"rootRelativePath":"assets/4421f3cd-f9b6-491e-9414-4c255a85b252.png"},"b7818d5a-f78e-475d-854f-443b61cf9e33":{"name":"Hammer1.png_1","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":10,"looping":true,"frameDelay":1,"version":"hlI6XILzQkGseKWLvUYGgAnoTb39aZJn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":192},"rootRelativePath":"assets/b7818d5a-f78e-475d-854f-443b61cf9e33.png"},"d14f03bb-fc95-4dfd-8143-75c708371f21":{"name":"Hammer","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"ULnubeHsydu8PsahYrG0pC646N_Z4ae_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/d14f03bb-fc95-4dfd-8143-75c708371f21.png"},"fedba601-37d1-4340-9da4-605fc8174972":{"name":"Deadlyhit1.png_1","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":8,"looping":false,"frameDelay":5,"version":"flGttiFJtPftTeQJzdFrQTHyzeXbZyZB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":144},"rootRelativePath":"assets/fedba601-37d1-4340-9da4-605fc8174972.png"},"5fac7869-ce15-4bf0-9fe7-d6cc71fe925d":{"name":"Crit1.png_1","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":5,"looping":false,"frameDelay":4,"version":"G..RaL9xN9R3fo8OILe0iP3qysaxgtjW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":144},"rootRelativePath":"assets/5fac7869-ce15-4bf0-9fe7-d6cc71fe925d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var start = false;
var bg = createSprite(200, 200);
bg.setAnimation("BG1");
bg.scale = 0.4;
bg.depth = 0;
var Rng = 0;
var BonusDammage = 0;
var opponentanimation = false;
var opponentanimationtimer = 2;
var Hammerdrop = false;
var HammerDropTimer = 0;
var playerprojtimer = 10;
var PRng = 0;
var PBonousDammage = 0;
var playerprojattacking = false;
var playerprojdirection = "right";
var opponentprojtimer = 10;
var opponentprojattacking = false;
var opponentprojdirection = "left";
var opponentDirection = "left";
var opponentisJumping = false;
var attackCooldown = 0;
var opponentattackCooldown = 0;
var playerAttacking = false;
var player = createSprite(100, 300);
var playerproj = createSprite(player.x, player.y);
playerproj.setAnimation("fireball_right");
var playerprojon = false;
var opponentprojon = false;
var opponent = createSprite(300, 300);
var opponentproj = createSprite(opponent.x, opponent.y);
playerproj.scale = 2.5;
opponentproj.setAnimation("lightning1.png_1");
opponentproj.scale = 1.2;
var walking = false;
var facingdirection = "right";
var Punchperformed = false;
var opponentPunchPerformed = false;
var gravity = 0.8;
var isJumping = false;
var jumpstrength = -15;
var groundlevel = 300;
var HammervelocityY = 0;
var playervelocityY = 0;
var opponentvelocityY = 0;
var opponentWalking = false;
var opponentAttacking = false;
player.setAnimation("Player_idle_right");
player.scale = 2;
opponent.setAnimation("boss1_idle_left");
opponent.scale = 2;
playSound("assets/cb062f44-40f5-4d52-901e-c3e42e569e88.wav", false);
playSound("1359455_Fantasy-Original-Mix-(1).mp3", true);
var opponentHealth = 50;
var playerHealth = 50;
player.immovable = true;
opponent.immovable= true;
function draw() {
  if (playerprojon) {
    if (playerprojattacking) {
      if (playerprojdirection == "right") {
        playerproj.setAnimation("fireball_right");
      }
      else if(playerprojdirection == "left") {
       playerproj.setAnimation("fireball_left") ;
      }
    }
    else
    {
      if(facingdirection == "right")
      {
        playerproj.setAnimation("fireball_right");
      }
      else if (facingdirection == "left") {
        playerproj.setAnimation("fireball_left") ;
      }
    }
  }
  else if (!playerprojon) {
    playerproj.setAnimation("blank_proj");
  }
  if(playerproj.isTouching(opponent) && playerprojattacking) {
    playerprojattacking = false;
    playerprojon = false;
    opponentHealth -= 2;
    
  }
  if(opponentproj.isTouching(playerproj)) 
  {
    playerprojon = false;
    playerprojattacking = false;
    opponentprojon = false;
    opponentprojattacking = false;
  }
  if(!opponentprojon) {
    opponentproj.setAnimation("blank_proj");
    opponentproj.x = opponent.x;
    opponentproj.y = player.y;
  }
  else if(opponentprojon && !opponentprojattacking) {
    if(opponentDirection == "right"){
      opponentproj.x = opponent.x + 35;
    }
    else if(opponentDirection == "left"){
      opponentproj.x = opponent.x - 35;
    }
    opponentproj.y = opponent.y;
  }
  else if(opponentprojattacking) {
    if(opponentDirection == "right" && opponentanimation){
        opponent.setAnimation("boss1_ability_left");
    }
    else if(opponentDirection == "left" && opponentanimation){
          opponent.setAnimation("boss1_ability_right");
    }
    opponentproj.setAnimation("lightning1.png_1");
  }
  if (!playerprojattacking) {
  playerproj.x = player.x + 1;
  playerproj.y = player.y - 8;
  }
  if (!opponentprojattacking) {
    opponentproj.x = opponent.x;
    opponentproj.y = opponent.y;
    opponentproj.setAnimation("blank_proj");
  }
  background(255);
  Player();
  if (opponentanimationtimer > 0) 
  {
    opponentanimationtimer -= 0.1;
  }
  else if (opponentanimation) {
    opponentanimation = false;
  }
  if (player.isTouching(opponent) ) {
  if (facingdirection == "left") {
    if (opponent.x < player.x) {
      if (opponentDirection == "left") {
        player.x +=5;
      }
      else {
        
      }
    }
  } 
  else if (facingdirection == "right") {
    if (opponent.x > player.x) {
        if(opponentDirection == "right") {
          player.x -= 5;
        }
        else {
          
        }
    }
  }
  if (opponentDirection == "left") {
    if (player.x < opponent.x) {
      if (!walking && opponentWalking) {
        opponent.x +=5;
      }
      else if (walking && !opponentWalking) {
        player.x -=5;
      }
      else if (walking && opponentWalking) {
        player.x -=5;
        opponent.x += 5;
      }
      else {
        
      }
    }
  } 
  else if (opponentDirection == "right") {
    if (player.x > opponent.x) {
      if (!walking && opponentWalking) {
        opponent.x -=5;
      }
      else if (walking && !opponentWalking) {
        player.x +=5;
      }
      else if (walking && opponentWalking) {
       player.x +=5;
       opponent.x -=5;
      }
      else {
        
      }
    }
  }
}
  drawSprites();
  fill("red");
  rect(10, 10, playerHealth * 2, 10); 
  fill("green");
  rect(285, 10, opponentHealth * 2, 10);
  enemy();
  fill ("red");
  if (opponentHealth <= 0) {
    textSize(50);
    textFont("Times New Roman");
    text("Player 1 wins!", 100, 100); 
    noLoop();
  }
  else if (playerHealth <=0) {
    textSize(50);
    textFont("Times New Roman");
    text("Player 2 wins!", 100, 100);
    noLoop();
  }
  if(keyWentDown("h")){
  HitPlayer();
  }
  
}
function enemy() {
if (opponent.y < groundlevel) {
    opponentvelocityY += gravity;
    opponentisJumping = true;
  } else if (opponent.y > groundlevel) {
    opponentvelocityY = 0; 
    opponent.y = groundlevel;
    opponentisJumping = false;
  }
opponent.y += opponentvelocityY;
if(keyWentDown("up") && !opponentisJumping){
    if (opponentDirection == "right") 
    {
      opponent.setAnimation("Boss1_jump_right");
    }
    else if (opponentDirection == "left") {
      opponent.setAnimation("Boss1_jump_left");
    }
    opponentvelocityY = jumpstrength;
    opponentisJumping = true;
  }
if (keyDown("left")) {
    opponentDirection = "left";
    if(!opponentisJumping && !opponentAttacking)
    {
     opponent.setAnimation("Boss1_BackWalk");
    }
    else if(opponentisJumping && !opponentAttacking) {
      opponent.setAnimation("Boss1_jump_left");
    }
    else if(opponentAttacking) 
    {
      opponent.setAnimation("Boss1_punch_left");
    }
    opponent.x -= 5;
    opponentWalking = true;
  }
if (keyDown("RIGHT")) {
    opponentDirection = "right";
    if (!opponentisJumping && !opponentAttacking)
    {
     opponent.setAnimation("Boss1_FrontWalk");
    }
    else if (opponentisJumping && !opponentAttacking){
      opponent.setAnimation("Boss1_jump_right");
    }
    else if(opponentAttacking) 
    {
      opponent.setAnimation("Boss1_punch_right");
    }
    opponent.x += 5;
    opponentWalking = true;
  }
if (!keyDown("left") && !keyDown("right") && !opponentAttacking && !opponentisJumping) {
    if (opponentDirection == "right") 
    {
      opponent.setAnimation("boss1_idle_right");
      opponentWalking = false;
    }
    else if (opponentDirection == "left") 
    {
      opponent.setAnimation("boss1_idle_left");
      opponentWalking = false;
    }
  }
if (keyWentDown("J")) {
    opponentAttacking = true;
    PRng = randomNumber(1, 20);
    if(opponentDirection == "left") 
    {
      opponent.setAnimation("Boss1_punch_left");
    }
    else if (facingdirection == "right")
    {
      opponent.setAnimation("Boss1_punch_right");
    }
    if (opponent.isTouching(player)) {
      if(PRng < 15)
    {
      PBonousDammage = 0;
    }
    else if(PRng >= 15 && PRng < 20) 
    {
      PBonousDammage = 2;
      HitPlayer(1);
      
    }
    else if(PRng == 20) 
    {
      PBonousDammage = 4;
      HitPlayer(2);
    }
      playerHealth -= (1 + PBonousDammage);
    }
  } else if (keyWentUp("J") ) {
    opponentAttacking = false;
  }
if (keyWentDown("K") && !opponentPunchPerformed && !opponentAttacking) 
  {
    opponentPunchPerformed = true;
    if (opponentDirection == "right") 
    {
      opponent.setAnimation("Boss1_Kick_Right");
      
    }
    else if (opponentDirection == "left")
    {
      opponent.setAnimation("Boss1_Kick_Left");
    }
    if (opponent.isTouching(player)) {
      playerHealth -= 2;
    }
    opponentattackCooldown = 20;
  }
if (opponentattackCooldown > 0) 
  {
    opponentattackCooldown--;
  }
  else if (opponentPunchPerformed) {
    opponentPunchPerformed = false;
  }
if(keyWentDown("M")) {
    if (!opponentprojon)
    {
      opponentprojon = true;
    }
    else if (opponentprojon) 
    {
      opponentprojattacking = true;
      opponentprojdirection = opponentDirection;
      opponentanimation = true;
      opponentanimationtimer = 2;
      opponentprojtimer = 10;
    }
  }
}
function HitPlayer(RngA) 
{
var DeadlyHitTag = createSprite(player.x, player.y);
if (facingdirection == "left") {
  DeadlyHitTag.x += 50;
} else {
  DeadlyHitTag.x -= 50;
}
DeadlyHitTag.scale = 2;
DeadlyHitTag.y -= 50;
if(RngA == 2){
DeadlyHitTag.setAnimation("Deadlyhit1.png_1");
}
else if (RngA == 1) 
{
  DeadlyHitTag.setAnimation("Crit1.png_1");
}
}
function HitOP(PRng) 
{
var DeadlyHitTag = createSprite(opponent.x, opponent.y);
if (opponentDirection == "left") {
  DeadlyHitTag.x += 50;
} else {
  DeadlyHitTag.x -= 50;
}
DeadlyHitTag.scale = 2;
DeadlyHitTag.y -= 50;
if(PRng == 2){
DeadlyHitTag.setAnimation("Deadlyhit1.png_1");
}
else if (PRng == 1) 
{
  DeadlyHitTag.setAnimation("Crit1.png_1");
}
}
function Player() {
   // Player movement
 // Gravity and Jumping Logic
  if (player.y < groundlevel) {
    playervelocityY += gravity;
    isJumping = true;
  } else if (player.y > groundlevel) {
    playervelocityY = 0; 
    player.y = groundlevel;
    isJumping = false;
  }
  player.y += playervelocityY;
  if(keyWentDown("W") && !isJumping){
    if (facingdirection == "right") 
    {
      player.setAnimation("player_jump_right");
    }
    else if (facingdirection == "left") {
      player.setAnimation("player_jump_left");
    }
    playervelocityY = jumpstrength;
    isJumping = true;
  }
  if (keyDown("A")) {
    if(!isJumping && !playerAttacking)
    {
     player.setAnimation("BackWalk");
    }
    else if(isJumping) {
      player.setAnimation("player_jump_left");
    }
    else if(playerAttacking) {
      player.setAnimation("player_attack_left");
    }
    player.x -= 5;
    walking = true;
    facingdirection = "left";
  }
  if (keyDown("D")) {
    if (!isJumping && !playerAttacking)
    {
     player.setAnimation("FrontWalk");
    }
    else if (isJumping){
      player.setAnimation("player_jump_right");
    }
    else if(playerAttacking) {
      player.setAnimation("player_attack_right");
    }
    player.x += 5;
    walking = true;
    facingdirection = "right";
  }
  if (!keyDown("A") && !keyDown("D") && !playerAttacking && !isJumping) {
    if (facingdirection == "right") 
    {
      player.setAnimation("Player_idle_right");
      walking = false;
    }
    else if (facingdirection == "left") 
    {
      player.setAnimation("Player_idle_left");
      walking = false;
    }
  }
  if (keyWentDown("F")) {
    playerAttacking = true;
    Rng = randomNumber(0, 20);
    if(facingdirection == "left") 
    {
      player.setAnimation("player_attack_left");
    }
    else if (facingdirection == "right")
    {
      player.setAnimation("player_attack_right");
    }
    if (player.isTouching(opponent)) {
      if(Rng < 15)
    {
      BonusDammage = 0;
    }
    else if(Rng >= 15 && Rng < 20) 
    {
      BonusDammage = 2;
      HitOP(1);
      
    }
    else if(Rng == 20) 
    {
      BonusDammage = 4;
      HitOP(2);
    }
      opponentHealth = opponentHealth - (1 + BonusDammage);
    }
  } 
  else if (keyWentUp("F")) {
    playerAttacking = false;
  }
  if (keyWentDown("G") && !playerAttacking && !Punchperformed) 
  {
    Punchperformed = true;
    if (facingdirection == "right") 
    {
      player.setAnimation("Player_kick_right");
    }
    else if (facingdirection == "left")
    {
      player.setAnimation("Player_kick_left");
    }
    if (player.isTouching(opponent)) {
      opponentHealth = opponentHealth - 2;
    }
    attackCooldown = 20;
  }
  if (attackCooldown > 0) 
  {
    attackCooldown--;
  }
  else if (Punchperformed) {
    Punchperformed = false;
  }
  if (keyWentDown("c"))
  {
    if (!playerprojon) {
      playerprojon = true;
    }
    else if (playerprojon) {
      if(facingdirection == "left") 
      {
      player.setAnimation("player_attack_left");
      }
      else if (facingdirection == "right")
      {
      player.setAnimation("player_attack_right");
      }
      playerAttacking = true;
      playerprojattacking = true;
      playerprojtimer = 10;
      playerprojdirection = facingdirection;
      
    }
  }
  if (playerprojtimer > 0) 
  {
    playerprojtimer -= 0.1;
    if (playerprojdirection == "right") {
      playerproj.x += 4;
    }
    else if (playerprojdirection == "left")
    {
      playerproj.x -= 4;
    }
    
  }
  else if (playerprojattacking) {
    playerprojattacking = false;
  }
  if (keyWentUp("c") && playerprojattacking) {
    playerAttacking = false;
  }
  if (opponentprojtimer > 0) 
  {
    opponentprojtimer -= 0.1;
    if (opponentprojdirection == "right") {
      opponentproj.x += 4;
    }
    else if (opponentprojdirection == "left")
    {
      opponentproj.x -= 4;
    }
    if(opponentproj.isTouching(player)) 
    {
      opponentprojattacking = false;
      opponentprojon = false;
      playerHealth -= 2;
    }
  }
  else if (opponentprojattacking) {
    opponentprojattacking = false;
    opponentprojon = false;
  }
  //End
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
