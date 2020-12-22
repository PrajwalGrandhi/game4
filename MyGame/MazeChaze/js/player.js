class Player
{
    constructor()
    {
        this.index=0;
        this.name=null;
       this.distance=530;
       this.distance2=520;
    }
    
    getCount()
    {
      var playerCountRef =database.ref('PlayerCount');
      playerCountRef.on("value",(data)=>
      {
          playerCount=data.val();
      })
    }
    updateCount(count)
    {
      database.ref('/').update(
          {
              PlayerCount:count
          })

    }
    update()
    {
       var playerIndex="players/player"+this.index;
       database.ref(playerIndex).set({
           name:this.name,
           distance:this.distance, 
           distance2:this.distance2
       })

    }

    static getPlayerInfo()
    {
      var playerInfoRef=database.ref('players');
      playerInfoRef.on("value",(data)=>
      {
          allPlayers=data.val();
      })
    }
}