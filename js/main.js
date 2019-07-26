$(window).on('load', function() {

    // Save css classes in JS
    var classActive = "active";
    var classHidden = "hiden";
    var classQuestionStatus = "question-status";
    var classCityAnimation = "city-animation";

    // Save buttons in JS
    var stepOneForward = $("#step-one-forward");
    var stepTwoYes = $("#step-two-yes");
    var stepTwoNo = $("#step-two-no");
    var stepThreeYes = $("#step-three-yes");
    var stepThreeNo = $("#step-three-no");
    var stepFourYes = $("#step-four-yes");
    var stepFourNo = $("#step-four-no");
    var stepFiveYes = $("#step-five-yes");
    var stepFiveNo = $("#step-five-no");
    var stepSixForward = $("#step-six-forward");

    // Save blocks in JS
    var pageOne = $(".page-one");
    var pageTwo = $(".page-two");
    var pageThree = $(".page-three");
    var pageFour = $(".page-four");
    var pageFive = $(".page-five");
    var pageSix = $(".page-six");

    //Save elements
    var stepParent = $("#stepParent");
    var cityBlock = $("#cityBg");

    // functions - helpers
    function runStepOne() {
        pageOne.removeClass(classActive).addClass(classHidden);
        pageTwo.removeClass(classHidden).addClass(classActive);
    }

    function runStepTwo() {
        pageTwo.removeClass(classActive).addClass(classHidden);
        pageThree.removeClass(classHidden).addClass(classActive);
    }

    function runStepThree() {
        pageThree.removeClass(classActive).addClass(classHidden);
        pageFour.removeClass(classHidden).addClass(classActive);
    }

    function runStepFour() {
        pageFour.removeClass(classActive).addClass(classHidden);
        pageFive.removeClass(classHidden).addClass(classActive);
    }

    function runStepFive() {
        pageFive.removeClass(classActive).addClass(classHidden);
        pageSix.removeClass(classHidden).addClass(classActive);
    }

    function runConvertStepParent() {
        stepParent.addClass(classQuestionStatus);
    }

    function runAnimateCityBlock() {
        cityBlock.removeClass(classCityAnimation);
        setTimeout(
            function() {
                cityBlock.addClass(classCityAnimation);
            },
            80
        );
    }

    //add events

    // Step One
    stepOneForward.click(function() {
        runStepOne();
        // This function runs only on step two
        runConvertStepParent();
        runAnimateCityBlock();
    });

    // Step Two
    stepTwoYes.click(function() {
        runStepTwo();
        runAnimateCityBlock();
    });

    stepTwoNo.click(function() {
        runStepTwo();
        runAnimateCityBlock();
    });


    // Step Three
    stepThreeYes.click(function() {
        runStepThree();
        runAnimateCityBlock();
    });

    stepThreeNo.click(function() {
        runStepThree();
        runAnimateCityBlock();
    });

    // Step Four
    stepFourYes.click(function() {
        runStepFour();
        runAnimateCityBlock();
    });

    stepFourNo.click(function() {
        runStepFour();
        runAnimateCityBlock();
    });

    // Step Five
    stepFiveYes.click(function() {
        runStepFive();
        runAnimateCityBlock();
    });

    stepFiveNo.click(function() {
        runStepFive();
        runAnimateCityBlock();
    });


});