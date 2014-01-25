/* jshint camelcase:false */

(function(){
  'use strict';

 //var cards = [];
//  for(var i = 0; i < 26; i ++){
  //  cards.push(i);
  //
 // }
  var startcards = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  $(document).ready(init);

  function init(){
    $('#play').click(clickStartGame);

  }

  function clickStartGame(){
    generateRandomCards();
  }

  function generateRandomCards(){
    debugger;
    var playingCards = [];
    while(playingCards.length < 20){
      var randomIndex = Math.floor(Math.random()* 26);
      var select = startcards[randomIndex];
      if( playingCards.indexOf(select) === -1){
        playingCards.push(select);
        playingCards.push(select);
      }
      console.log(playingCards);
    }
  }


})();
