
    //Variables
    //===================================================================================
    $(document).ready(function() {

    var targetNumber = "";
    var crystalImages = ["./assets/images/image1.jpg", "./assets/images/image2.jpg","./assets/images/image3.jpg","./assets/images/image4.jpg"];
    var winCount = 0;
    var lossCount = 0;
    var numCounter = 0;
    //Funtions
    //=====================================================================================
    
   // function //this creats random target number
     getRandomTragetNumber = () =>  {
         targetNumber = Math.floor(Math.random() * 102) + 19;
     }
      //this sets up the game
    getRandomTragetNumber ();
    resetDom ();
    crystalsReset ();
        // this creats a for loops for crystal images arrays
        function crystalsReset() {
        for ( var i = 0; i < crystalImages.length; i++) {
            var imageCrystals = $("<img>");  // For each iteration, we will create an imageCrystals
            imageCrystals.addClass("crystals-images");//this creats new class called crystal-images and allow the css take effect
            imageCrystals.attr("src",crystalImages[i]); // This data attribute will be set equal to the array value.
            imageCrystals.attr("height", "100", "width", "100"); //this modify the crystal images based on the value passed here.
           
            imageCrystals.attr("value", (Math.floor(Math.random() * 12) + 1 )); //this select the counter randomly evertime the game resets
            // this creats each crystal image (with all it classes and attributes) will get added to the page.
            $(".crystalImgs").append(imageCrystals);
     
        }
    
     }
     //this reset the DOM
      function  resetDom() {
         $(".numTargetting").html(targetNumber);
         $(".win-counter").html("<h3> wins: " + winCount  + "</h3>");
         $(".loss-counter").html("<h3> Losses: " + lossCount  + "</h3>");
         $(".numOfScore").html(numCounter);
         $(".crystalImgs").empty();    
     }
      
    
     //this creats a click event that applies to every single crystal on the page.
     $(document).on("click", ".crystals-images", clickOnImages);

     function clickOnImages () {
           // here  $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal images.
         // this attr value allows us to grab the value out of the value attribute.
         // the  attributes on HTML elements are strings, so we need to  convert it to an integer by using (pareInt)methods before adding to the counter
        numCounter = numCounter + parseInt($(this).attr("value")); 
            $(".numOfScore").html(numCounter);
            if (numCounter === targetNumber) {
                winCount++;
                resetAll();
            }
            
            else if (numCounter >= targetNumber) {
                lossCount++;
                resetAll();
            };
        }; 
        //this resets everything
     function  resetAll () {
        numCounter = 0;
        getRandomTragetNumber ();
        resetDom ();
        crystalsReset ();
    }
   
    
    
    });
