/* jshint camelcase:false */

(function(){
  'use strict';

 //var cards = [];
//  for(var i = 0; i < 26; i ++){
  //  cards.push(i);
  //
 // }
  var startcards = ['A','B','C','D','E','F','G',
                    'H','I','J','K','L','M','N',
                    'O','P','Q','R','S','T','U',
                    'V','W','X','Y','Z'];
  var tiles = ['#a1','#a2','#a3','#a4','#a5','#b1','#b2','#b3','#b4','#b5',
               '#c1','#c2','#c3','#c4','#c5','#d1','#d2','#d3','#d4','#d5',];

  $(document).ready(init);

  function init(){
    $('#play').click(clickStartGame);

  }

  function clickStartGame(){
    generateRandomCards();
    hidecards();
  }

  function generateRandomCards(){     //function generates two random
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
  function hidecards(){
    $('#a3').css('visibility','hidden');
    $('#d3').css('visibility','hidden');
    $('#a4').css('visibility','hidden');
    console.log(tiles);

  }


})();
