

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

const $resultsPage = $('.resultsPage')

const $questionText = $('.questionContainer p');

const $answerContainer = $('.answerContainer');

const $selectedInput = $('input[type=radio]:checked')

const $input = $('input')

let questionOneAnswer;

let userBreed;

let resultBreed;

let imgToAppend;

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





//create app namespace to hold all methods

const dogApp = {};



//collect user input "answer" in an array.

const userInput = {
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null
}


const showResult = () => {
    $questionText.removeClass();
    $questionText.addClass('result');
    $questionPage.hide();
    $resultsPage.show();

    //store dog breed based on "answer" within variable

    if (userInput.question1 === true && userInput.question2 === true && userInput.question5 === true) {
        userBreed = dogOptions[6];
        console.log(userBreed);
    } else if (userInput.question1 === true && userInput.question2 === true && userInput.question5 === false) {
        userBreed = dogOptions[7];
        console.log(userBreed);
    } else if (userInput.question1 === true && userInput.question2 === false && userInput.question4 === true) {
        userBreed = dogOptions[5];
        console.log(userBreed);
    } else if (userInput.question1 === true && userInput.question2 === false && userInput.question4 === false) {
        userBreed = dogOptions[4];
        console.log(userBreed);

    } else if (userInput.question1 === false && userInput.question3 === true && userInput.question4 === true) {
        userBreed = dogOptions[3];
        console.log(userBreed);
    } else if (userInput.question1 === false && userInput.question3 === true && userInput.question4 === false) {
        userBreed = dogOptions[2];
        console.log(userBreed);
    } else if (userInput.question1 === false && userInput.question3 === false && userInput.question5 === true) {
        userBreed = dogOptions[1];
        console.log(userBreed);
    } else {
        userBreed = dogOptions[0];
        console.log(userBreed);
    }

    resultBreed = userBreed;

    if (userBreed === 'mountain') {
        userSubBreed = dogSubBreed.mountain
        console.log('user subBreed',userSubBreed)
    } else if (userBreed === 'bichon') {
        userSubBreed = dogSubBreed.bichon
        console.log('user subBreed',userSubBreed)
    } else if (userBreed === 'terrier') {
        userSubBreed = dogSubBreed.terrier
        console.log('user subBreed',userSubBreed)
    }
    

    dogApp.getFinalDog()

}


$('button').on('click', (e) => {
    e.preventDefault();
    if ($questionText.hasClass('startPage')) { 
        //start
        $questionText.removeClass('startPage');
        $startPage.hide();
        $questionPage.show();
        $questionText.addClass('question1');
        $questionText.show();
    } else if ($questionText.hasClass('question1 true')) {
        //question2 ---> morning returns true
        userInput.question1 = true;
        $questionText.removeClass('true false')
        $questionText.html(`when you wake up, what's your hair like?`)
        $answerContainer.first().children().html(`wake up and go!`);
        $answerContainer.last().children().html(`you tHINK you've seen bedhead`);
        $questionText.removeClass('question1');
        $questionText.addClass('question2');
    } else if ($questionText.hasClass('question1 false')) {
        //question3 ---> morning returns false
        userInput.question1 = false;
        $questionText.removeClass('true false');
        $questionText.html(`if someone steals your toy, what do you do?`)
        $answerContainer.first().children().html(`shrug and waddle on away`);
        $answerContainer.last().children().html(`get big ANGERY get it BACK`);
        $questionText.removeClass('question1');
        $questionText.addClass('question3');
    } else if ($questionText.hasClass('question2 true')) {
        //question5 ---> hair(02) returns true
        userInput.question2 = true;
        $questionText.removeClass('true false');
        $questionText.html(`can you reach the top shelf? be honest`)
        $answerContainer.first().children().html(`sure!`);
        $answerContainer.last().children().html(`no...`);
        $questionText.removeClass('question2');
        $questionText.addClass('question5');
    } else if ($questionText.hasClass('question2 false')) {
        //question4 ---> hair(02) returns false
        userInput.question2 = false;
        $questionText.removeClass('true false');
        $questionText.html(`what's your ideal friday like?`)
        $answerContainer.first().children().html(`stay in and and cuddle`);
        $answerContainer.last().children().html(`go out and have fun!`);
        $questionText.removeClass('question2');
        $questionText.addClass('question4');
    } else if ($questionText.hasClass('question3 true')) {
        //question4 ---> toy(03) returns true
        userInput.question3 = true;
        $questionText.removeClass('true false');
        $questionText.html(`when you have a problem, what do you do?`)
        $answerContainer.first().children().html(`speed around it`);
        $answerContainer.last().children().html(`face it head on`);
        $questionText.removeClass('question2');
        $questionText.addClass('question4');
    } else if ($questionText.hasClass('question3 false')) {
        //question5 ---> toy(03) returns false
        userInput.question3 = false;
        $questionText.removeClass('true false');
        $questionText.html(`can you reach the top shelf? be honest`)
        $answerContainer.first().children().html(`sure!`);
        $answerContainer.last().children().html(`no...`);
        $questionText.removeClass('question2');
        $questionText.addClass('question5');

    //on click of button, check if array contains answers required for each dog

    } else if ($questionText.hasClass('question4 true')) {
        userInput.question4 = true;
        showResult();
    } else if ($questionText.hasClass('question4 false')) {
        userInput.question4 = false;
        showResult();
    } else if ($questionText.hasClass('question5 true')) {
        userInput.question5 = true;
        showResult();
    } else if ($questionText.hasClass('question5 false')) {
        userInput.question5 = false;
        showResult();
    }
})

$input.on('click', () => {
    $questionText.removeClass('true false')
    questionOneAnswer = $('input[type=radio]:checked').val()
    $questionText.addClass(questionOneAnswer)
});


//make AJAX request with final dog breed.
dogApp.getFinalDog = () => {
    $.ajax({
        url: `https://dog.ceo/api/breed/${resultBreed}/images/random`,
        // url: `https://dog.ceo/api/breed/${resultBreed}/${resultSubBreed}/images/random`,
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
    console.log('app initialized')
}

$(() => {
    dogApp.init();
})