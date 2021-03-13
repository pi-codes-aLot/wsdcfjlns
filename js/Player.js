class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    this.player1D = 0;
    this.player2D = 0;
    this.player3D = 0;
    this.player4D = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  static getPlayerRank(){
 
       var player_distances = [];
     
          for (var i = 0; i < 4; i++){
          var player_tracker = "player" + i;
          var playerRankRef = database.ref('players/' + player_tracker + '/distance');
          playerRankRef.on("value", (data)=>{
             player_distances = data.val();
             console.log(player_distances);
             
         })
       }
       
      
  }
  
  
}
