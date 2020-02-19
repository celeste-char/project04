

//
//
//
/////// which good boi r u?
//
//
// by char and celeste c:



//VARIBLES

const $resultImg = $('.resultsPage img');

const $startPage = $('.startPage');

const $questionPage = $('.questionPage');

const $questionText = $('.questionContainer p');

const $answerContainer = $('.answerContainer');

const $selectedInput = $('input[type=radio]:checked')

const $input = $('input')

// const $firstAnswer = $('.answerContainer p:first-child');

//create app namespace to hold all methods
const dogApp = {};

//***NEEDS EDIT, place logic here c: ---create object with methods nested within. the name of each method is based on "answers" with dogs, finally, in an array of last question

//collect user input "answer" in an array.

//on click of button, check if array contains answers required for each dog
let questionOneAnswer;
    
$('button').on('click', (e) => {
    e.preventDefault();
    console.log('test')

    if ($questionText.hasClass('startPage')) { 
        //start
        $questionText.removeClass('startPage');
        $startPage.hide();
        $questionPage.show();
        $questionText.addClass('question1');
        $questionText.show();
        console.log(questionOneAnswer)
    } else if ($questionText.hasClass('question1 true')) {
        //question1
        $answerContainer.first().children().html(`test1`);
        $answerContainer.last().children().html(`test2`);
        $questionText.removeClass('question1');
        $questionText.addClass('question2');
    } else if ($questionText.hasClass('question1 false')) {
        $answerContainer.first().children().html(`test3`);
        $answerContainer.last().children().html(`test4`);
        $questionText.removeClass('question1');
        $questionText.addClass('question3');
    } else if ($questionText.hasClass('question2 true')) {
        $answerContainer.first().children().html(`test5`);
        $answerContainer.last().children().html(`test6`);
        $questionText.removeClass('question2');
        $questionText.addClass('question4');
    } else if ($questionText.hasClass('question2 false')) {
        $answerContainer.first().children().html(`test7`);
        $answerContainer.last().children().html(`test8`);
        $questionText.removeClass('question2');
        $questionText.addClass('question5');
    } else if ($questionText.hasClass('question3 true')) {
        $answerContainer.first().children().html(`test7`);
        $answerContainer.last().children().html(`test8`);
        $questionText.removeClass('question2');
        $questionText.addClass('question5');
    } else if ($questionText.hasClass('question3 false')) {
        $answerContainer.first().children().html(`test7`);
        $answerContainer.last().children().html(`test8`);
        $questionText.removeClass('question2');
        $questionText.addClass('question5');
    }
    
    // else if ($questionText.hasClass('question1') ) {
    //     $answerContainer.first().children().html(`test1`);
    //     $answerContainer.last().children().html(`test2`);
    //     $questionText.removeClass('question1');
    //     $questionText.addClass('question2');
    // } 


})

$input.on('click', () => {
    $questionText.removeClass('true false')
    questionOneAnswer = $('input[type=radio]:checked').val()
    console.log(questionOneAnswer)
    $questionText.addClass(questionOneAnswer)

});


// dogApp.submitClick();
//store dog breed based on "answer" within variable

const dogOptions = [
    'chihuahua',
    'mastiff',
    'mountain',
    'shiba',
    'pomeranian',
    'frise',
    'pitbull',
    'terrier'
]

const dogSubBreed = {
    mountain: 'bernese',
    frise: 'bichon',
    terrier: 'yorkshire'
}

const resultBreed = dogOptions[7] ;
const resultSubBreed = dogSubBreed.terrier;
let imgToAppend;

//make AJAX request with final dog breed.
dogApp.getFinalDog = () => {
    $.ajax({
        // url: `https://dog.ceo/api/breed/${resultBreed}/images/random`,
        url: `https://dog.ceo/api/breed/${resultBreed}/${resultSubBreed}/images/random`,
        method: 'GET',
        dataType: 'json'
    }).then((result) => {
        imgToAppend = result.message
        dogApp.displayResult()
    })
}

//display image on the page based on what dog's breed is.

dogApp.displayResult = () => {
    $resultImg.attr('src', imgToAppend).attr('alt', resultBreed)
}


//start app
dogApp.init = () => {
    dogApp.getFinalDog()
    console.log('app initialized')
}

$(() => {
    dogApp.init();
})