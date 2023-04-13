gdjs.GameOverCode = {};
gdjs.GameOverCode.GDPlatformObjects1= [];
gdjs.GameOverCode.GDPlatformObjects2= [];
gdjs.GameOverCode.GDPlatformObjects3= [];
gdjs.GameOverCode.GDPlatformObjects4= [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDBackgroundObjects3= [];
gdjs.GameOverCode.GDBackgroundObjects4= [];
gdjs.GameOverCode.GDDustParticlesObjects1= [];
gdjs.GameOverCode.GDDustParticlesObjects2= [];
gdjs.GameOverCode.GDDustParticlesObjects3= [];
gdjs.GameOverCode.GDDustParticlesObjects4= [];
gdjs.GameOverCode.GDScorePannelObjects1= [];
gdjs.GameOverCode.GDScorePannelObjects2= [];
gdjs.GameOverCode.GDScorePannelObjects3= [];
gdjs.GameOverCode.GDScorePannelObjects4= [];
gdjs.GameOverCode.GDScoreTextObjects1= [];
gdjs.GameOverCode.GDScoreTextObjects2= [];
gdjs.GameOverCode.GDScoreTextObjects3= [];
gdjs.GameOverCode.GDScoreTextObjects4= [];
gdjs.GameOverCode.GDPlayerNameInputObjects1= [];
gdjs.GameOverCode.GDPlayerNameInputObjects2= [];
gdjs.GameOverCode.GDPlayerNameInputObjects3= [];
gdjs.GameOverCode.GDPlayerNameInputObjects4= [];
gdjs.GameOverCode.GDRestartButtonObjects1= [];
gdjs.GameOverCode.GDRestartButtonObjects2= [];
gdjs.GameOverCode.GDRestartButtonObjects3= [];
gdjs.GameOverCode.GDRestartButtonObjects4= [];
gdjs.GameOverCode.GDSubmitButtonObjects1= [];
gdjs.GameOverCode.GDSubmitButtonObjects2= [];
gdjs.GameOverCode.GDSubmitButtonObjects3= [];
gdjs.GameOverCode.GDSubmitButtonObjects4= [];
gdjs.GameOverCode.GDScoresButtonObjects1= [];
gdjs.GameOverCode.GDScoresButtonObjects2= [];
gdjs.GameOverCode.GDScoresButtonObjects3= [];
gdjs.GameOverCode.GDScoresButtonObjects4= [];
gdjs.GameOverCode.GDDinoObjects1= [];
gdjs.GameOverCode.GDDinoObjects2= [];
gdjs.GameOverCode.GDDinoObjects3= [];
gdjs.GameOverCode.GDDinoObjects4= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects2[i].setString(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects3);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.GameOverCode.GDPlayerNameInputObjects3.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects3[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.GameOverCode.GDPlayerNameInputObjects3.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects3[0].getString()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("HasSubmitScore"), true);
}}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameOverCode.GDRestartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDRestartButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDRestartButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDRestartButtonObjects2[k] = gdjs.GameOverCode.GDRestartButtonObjects2[i];
        ++k;
    }
}
gdjs.GameOverCode.GDRestartButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDSubmitButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDSubmitButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDSubmitButtonObjects2[k] = gdjs.GameOverCode.GDSubmitButtonObjects2[i];
        ++k;
    }
}
gdjs.GameOverCode.GDSubmitButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScoresButton"), gdjs.GameOverCode.GDScoresButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDScoresButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDScoresButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDScoresButtonObjects1[k] = gdjs.GameOverCode.GDScoresButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDScoresButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d", true);
}}

}


};gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("HasSubmitScore"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("2d7c1dd3-3cbc-4c0e-99bf-da35cc181d9d");
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDDustParticlesObjects2Objects = Hashtable.newFrom({"DustParticles": gdjs.GameOverCode.GDDustParticlesObjects2});
gdjs.GameOverCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10442452);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameOverCode.GDDinoObjects2);
gdjs.GameOverCode.GDDustParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDDustParticlesObjects2Objects, (( gdjs.GameOverCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDDinoObjects2[0].getPointX("DustProjection")), (( gdjs.GameOverCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDDinoObjects2[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects2[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects2[i].setEmitterAngleA(0);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects2[i].setZOrder(0);
}
}}

}


};gdjs.GameOverCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameOverCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameOverCode.GDDinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameOverCode.GDDustParticlesObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDustParticlesObjects1[i].setPosition((( gdjs.GameOverCode.GDDinoObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDDinoObjects1[0].getPointX("DustProjection")),(( gdjs.GameOverCode.GDDinoObjects1.length === 0 ) ? 0 :gdjs.GameOverCode.GDDinoObjects1[0].getPointY("DustProjection")));
}
}}

}


};gdjs.GameOverCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameOverCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreTextObjects1[i].setString("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 70, 1);
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects1[i].setString(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


gdjs.GameOverCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}
{ //Subevents
gdjs.GameOverCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.eventsList5(runtimeScene);
}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDPlatformObjects1.length = 0;
gdjs.GameOverCode.GDPlatformObjects2.length = 0;
gdjs.GameOverCode.GDPlatformObjects3.length = 0;
gdjs.GameOverCode.GDPlatformObjects4.length = 0;
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDBackgroundObjects3.length = 0;
gdjs.GameOverCode.GDBackgroundObjects4.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects1.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects2.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects3.length = 0;
gdjs.GameOverCode.GDDustParticlesObjects4.length = 0;
gdjs.GameOverCode.GDScorePannelObjects1.length = 0;
gdjs.GameOverCode.GDScorePannelObjects2.length = 0;
gdjs.GameOverCode.GDScorePannelObjects3.length = 0;
gdjs.GameOverCode.GDScorePannelObjects4.length = 0;
gdjs.GameOverCode.GDScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDScoreTextObjects3.length = 0;
gdjs.GameOverCode.GDScoreTextObjects4.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects1.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects2.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects3.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects4.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects1.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects2.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects3.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects4.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects1.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects2.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects3.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects4.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects1.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects2.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects3.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects4.length = 0;
gdjs.GameOverCode.GDDinoObjects1.length = 0;
gdjs.GameOverCode.GDDinoObjects2.length = 0;
gdjs.GameOverCode.GDDinoObjects3.length = 0;
gdjs.GameOverCode.GDDinoObjects4.length = 0;

gdjs.GameOverCode.eventsList6(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
