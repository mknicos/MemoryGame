/* jshint camelcase:false */

(function(){
  'use strict';

  var scrambledCards = [];
  var guessQueue;
  var counter = 0;

  $(document).ready(init);

  function init(){
    $('td').hide();
    $('#play').click(generateRandomCards);
    $('td').click(clickOnCard);
    $('#clear').click(clearEverything);
  }

  function generateRandomCards(){
    $('td').slideDown('slow');

    var startCards = ['A','B','C','D','E','F','G',
      'H','I','J','K','L','M','N',
      'O','P','Q','R','S','T','U',
      'V','W','X','Y','Z'];

    var playingCards = [];            //select 10 random letters, putting each with a 
    while(playingCards.length < 20){  //twin (same letter) into an array
      var randomIndexTo25 = Math.floor(Math.random()* 26);
      var select = startCards[randomIndexTo25];
      if( playingCards.indexOf(select) === -1){ //ensures no duplicate letters
        playingCards.push(select);
        playingCards.push(select);
      }
    }

    var indexUsed = [];  //this is a dumpoff array, aids the loop in not repeating a letter.
    while(indexUsed.length < 20) {
      var randomIndexTo19 = Math.floor(Math.random() * 20);
      if(indexUsed.indexOf(randomIndexTo19) === -1){
        indexUsed.push(randomIndexTo19);
        scrambledCards.push(playingCards[randomIndexTo19]);
      } //scrambledCards is the final array of letters to be used
    }   //each game
  }

  function clickOnCard(){
    $(this).removeClass('cards').addClass('reveal');
    var cardIdNum = this.id;
    cardIdNum = parseInt(cardIdNum.slice(1));
    var cardText = scrambledCards[cardIdNum];
    $(this).text(cardText);
    if(cardText !== guessQueue){
      $('td').not(this).removeClass('reveal').addClass('cards').text('');
      guessQueue = cardText;
    }else{
      removeCards(cardText);
      debugger;
      counter ++;
      if(counter > 9){
        alert('You have won!');
        clearEverything();
      }
    }
  }

  function removeCards(clickedCardText){
    var matchedCards =  $('td:contains('+clickedCardText+')');
    matchedCards.removeClass('cards').addClass('matched');
    matchedCards.delay(1000).queue( function(next){
      $(this).addClass('hidden');
      next();
    });
  }

  function clearEverything(){
    $('td').text('').removeClass('hidden').addClass('cards');
    $('td').hide();
    scrambledCards = [];
    guessQueue = '';
    counter = 0;

  }




})();
