// ====================================================================================================
//
// Cloud Code for JoinTeamResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TASKS");
require("COMMON_TEAM_TASKS");

Spark.setScriptData("script_version", 4);  // for debug


var data = Spark.getData();

if( !data.hasOwnProperty("error") ) {
    
    var teamId = data.teamId;    // must have one

    updateMemberCount( teamId );

    setScriptExtraData( getTeamExtraData( teamId ) );
    
    // save guild id - don't need to be returned directly
    setPlayerGuild( Spark.getPlayer(), teamId );

    
    // TODO: leaderboard???
    
    
}

