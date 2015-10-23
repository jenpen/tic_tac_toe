$(document).ready(function() {

//User hovers over square
  function hoverSquare () {
    $(".square").hover(hoverHighlightSquare, leaveHoverSquare);
  }

  function hoverHighlightSquare(evt) {
    var target = $(evt.target);
    if (target.is(".square")) {
      target.toggleClass("hover");
    }
  }

  function leaveHoverSquare(evt) {
    var target = $(evt.target);
    if (target.is(".square")) {
      target.toggleClass(".square");
    }
  }

// User selects their square
  function changeSquare () {
    $(".square").on("click", markSquare)
    console.log("console changeSquare")
  }

  function markSquare(evt) {
    var target = $(evt.target);
    if (target.is(".square")) {
      target.html("?");
    }
  }


  hoverSquare();
  changeSquare();
  // boardReset();
})

// junk code
// // Clear the board
//   function boardReset() {
//     $("button").on("click", function () {
//       $(".square").eq(i).class("clear");
//       })
//     }
//   }
//
//   //use an array to determine winner??
// var winner = [[0,1,2],[3,4,5],[6,7,8],
// [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
