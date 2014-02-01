/* jshint camelcase:false */

(function(){
  'use strict';

  var scrambledCards = [];
  var guessQueue;
  var timer;
  var counter = 10;

  $(document).ready(init);

  function init(){
    $('#wrapCards').hide();
    $('#timer').hide();
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
    $('#wrapCards').slideDown('slow');
    $('#timer').slideDown('slow');

    var startCards = ['A','B','C','D','E','F','G',
      'H','I','J','K','L','M','N',
      'O','P','Q','R','S','T','U',
      'V','W','X','Y','Z'];

    var playingCards = [];

//select 10 letters from alphabet, duplicates them, and adds to playingCards array

    while(playingCards.length < 20){
      var select = _.sample(startCards);
      playingCards.push(select);
      playingCards.push(select);
      startCards = _.without(startCards, select);
    }
//Randomize the game every time
    scrambledCards = _.shuffle(playingCards);

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

//if statement runs if no cards are left
    if(counter< 1){
      clearInterval(timer);
      var score = $('#timer').text();
      $('#prevScore').text('Prev Time: ' + score);
      $('#timer').hide();
      $('#wrapCards').hide();
    }
  }

  function removeCards(clickedCardText){
//function runs when two cards selected back to back match

    var matchedCards =  $('td:contains('+clickedCardText+')');
    matchedCards.removeClass('cards').addClass('matched');
    setTimeout(function(){
      $('.matched').addClass('hidden');
    },1000);
    counter --;
  }

  function clearEverything(){
//function resets the game to the begining
    $('td').text('').removeClass('hidden reveal matched').addClass('cards');
    $('#wrapCards').slideUp();
    scrambledCards.length = 0;
    guessQueue = '';
    clearInterval(timer);
    $('#timer').text('');
  }




})();
