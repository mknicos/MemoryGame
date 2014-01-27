/* jshint camelcase:false */

(function(){
  'use strict';

  var scrambledCards = [];

  $(document).ready(init);

  function init(){
    $('#play').click(generateRandomCards);
    $('td').click(clickOnCard);

  }

  function generateRandomCards(){
      /*function generates a random array filled with 10 letters, each letter
       * in the array will be in the array twice, back to back, ex. [A,A,E,E,T,T...]*/

    var startCards = ['A','B','C','D','E','F','G',
      'H','I','J','K','L','M','N',
      'O','P','Q','R','S','T','U',
      'V','W','X','Y','Z'];

    var playingCards = [];
    while(playingCards.length < 20){
      var randomIndexTo25 = Math.floor(Math.random()* 26);
      var select = startCards[randomIndexTo25];
      if( playingCards.indexOf(select) === -1){
        playingCards.push(select);
        playingCards.push(select);
      }
    }

    var indexUsed = [];
    while(indexUsed.length < 20) {
      var randomIndexTo19 = Math.floor(Math.random() * 20);
      if(indexUsed.indexOf(randomIndexTo19) === -1){
        indexUsed.push(randomIndexTo19);
        scrambledCards.push(playingCards[randomIndexTo19]);
      }
      console.log(scrambledCards);
    }
  }

  function clickOnCard(){
    $(this).removeClass('cards').addClass('reveal');
    var cardIdNum = this.id;
    cardIdNum = parseInt(cardIdNum.slice(1));
    var cardValue = scrambledCards[cardIdNum];
    $(this).text(cardValue);

  }




})();
