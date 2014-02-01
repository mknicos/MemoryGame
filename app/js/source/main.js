/* jshint camelcase:false */

(function(){
  'use strict';

  var scrambledCards = [];
  var guessQueue;
  var timer;

  $(document).ready(init);

  function init(){
    $('td').hide();
    $('#play').click(generateRandomCards);
    $('td').click(clickOnCard);
    $('#clear').click(clearEverything);
    $('#play').click(clickStartTimer);
  }

  function clickStartTimer(){
//Timer Starts when play is clicked

    var seconds = 0;
    var min = 0;
    timer = setInterval(function(){
      seconds ++;
      if(seconds === 60){
        min = min + 1;
        seconds = 0;
      }
      $('#timer').text(min + ':' + seconds);
    },1000);

  }

  function generateRandomCards(){
//calculator dislays when 'play' is clicked
    $('td').slideDown('slow');

    var startCards = ['A','B','C','D','E','F','G',
      'H','I','J','K','L','M','N',
      'O','P','Q','R','S','T','U',
      'V','W','X','Y','Z'];

    var playingCards = [];

//select 10 letters from alphabet, duplicates them, and adds to playingCards array

    while(playingCards.length < 20){
      var randomIndexTo25 = Math.floor(Math.random()* 26);
      var select = startCards[randomIndexTo25];
//ensures no duplicate letters
      if( playingCards.indexOf(select) === -1){
        playingCards.push(select);
        playingCards.push(select);
      }
    }

    scrambledCards = _.shuffle(playingCards);

//this is a dumpoff array, aids the loop in not repeating a letter.
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
    }
  }

  function removeCards(clickedCardText){
    var matchedCards =  $('td:contains('+clickedCardText+')');
    matchedCards.removeClass('cards').addClass('matched');
    setTimeout(function(){
      $('.matched').addClass('hidden');
    },1000);
  }

  function clearEverything(){
    $('td').text('').removeClass('hidden reveal matched').addClass('cards');
    $('td').hide();
    scrambledCards.length = 0;
    guessQueue = '';
    clearInterval(timer);
  }




})();
