//
//
//
/////// which good boi r u?
//
//
// by char and celeste c:



//create app namespace to hold all methods

const dogApp = {};




//VARIABLES

const $resultImg = $('.resultsPage img');

const $startPage = $('.startPage');

const $button = $('button');

const $next = $('#next');

const $questionPage = $('.questionPage');

const $resultsPage = $('.resultsPage');

const $form = $('#form');

const $questionText = $('p#question');

const $answerContainer = $('.answerContainer');

const $selectedInput = $('input[type=radio]:checked');

const $input = $('input[type=radio]');

const $h2 = $('.resultsPage h2');

const $resultBlurb = $('.resultsPage p');

const $label = $('label')

const $img = $('.answerContainer .imgContainer')

const $img1 = $('img#img1');

const $img2 = $('img#img2')


dogApp.questionOneAnswer;

dogApp.userBreed;

dogApp.userSubBreed;

dogApp.resultBreed;

dogApp.imgToAppend;

dogApp.dogOptions = [
    'chihuahua',
    'mastiff',
    'mountain',
    'shiba',
    'pomeranian',
    'frise',
    'pitbull',
    'terrier'
];

dogApp.dogSubBreed = {
    mountain: 'bernese',
    frise: 'bichon',
    terrier: 'yorkshire'
};

//collect user input "answer" in an array.

dogApp.userInput = {
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null
};




$button.on('click', (e) => {
    e.preventDefault();

    if ($questionText.hasClass('question')) { 
        //start
        $questionText.removeClass('question');
        $startPage.fadeTo('slow', 0, function() {
            $startPage.hide();
            $questionPage.fadeTo('slow', 1, function() {
                // $questionPage.show();
                $questionText.addClass('question1');
                $questionText.show();
            });
        });
    }
    else if ($questionText.hasClass('question1 true')) {
        //question2 ---> morning returns true
        dogApp.userInput.question1 = true;
        $questionText.removeClass('true false');
        $questionPage.fadeTo('slow', 0, function() {
            $questionText.html(`when you wake up, what's your hair like?`);
            $label.first().html(`wake up and go!`);
            $img1.attr('src', './assets/icon-doges/french-bulldog.png').attr('alt', 'a short haired frenchie');
            $label.last().html(`you tHINK you've seen bedhead`);
            $img2.attr('src', './assets/icon-doges/old-english-sheepdog.png').attr('alt', 'a long haired sheep dog');
            $questionText.removeClass('question1');
            $questionText.addClass('question2');
            $questionPage.fadeTo('slow', 1);
        });
    } 
    else if ($questionText.hasClass('question1 false')) {
        //question3 ---> morning returns false
        dogApp.userInput.question1 = false;
        $questionPage.fadeTo('slow', 0, function() {
            $questionText.removeClass('true false');
            $questionText.html(`if someone steals your toy, what do you do?`);
            $label.first().html(`shrug and waddle on away`);
            $img1.attr('src', './assets/icon-doges/corgi.png').attr('alt', 'a nonchalant corgi');
            $label.last().html(`get big ANGERY get it BACK`);
            $img2.attr('src', './assets/icon-doges/shar-pei.png').attr('alt', 'an upset shar pei');
            $questionText.removeClass('question1');
            $questionText.addClass('question3');
            $questionPage.fadeTo('slow', 1);
        });
    } 
    else if ($questionText.hasClass('question2 true')) {
        //question5 ---> hair(02) returns true
        dogApp.userInput.question2 = true;
        $questionPage.fadeTo('slow', 0, function() {      
            $questionText.removeClass('true false');
            $questionText.html(`can you reach the top shelf? be honest`);
            $label.first().html(`sure!`);
            $img1.attr('src', './assets/icon-doges/rottweiler.png').attr('alt', 'an independant rottweiler');
            $label.last().html(`no...`);
            $img2.attr('src', './assets/icon-doges/yorkshire-terrier.png').attr('alt', 'a tiny, upset yorkie');
            $questionText.removeClass('question2');
            $questionText.addClass('question5');
            $questionPage.fadeTo('slow', 1);
        });
    } 
    else if ($questionText.hasClass('question2 false')) {
        //question4 ---> hair(02) returns false
        dogApp.userInput.question2 = false;
        $questionPage.fadeTo('slow', 0, function() {             
            $questionText.removeClass('true false');
            $questionText.html(`what's your ideal friday like?`);
            $label.first().html(`stay in and and cuddle`);
            $img1.attr('src', './assets/icon-doges/beagle.png').attr('alt', 'a cuddly beagle');
            $label.last().html(`go out and have fun!`);
            $img2.attr('src', './assets/icon-doges/pomeranian.png').attr('alt', 'a tiny pomeranian');
            $questionText.removeClass('question2');
            $questionText.addClass('question4');
            $questionPage.fadeTo('slow', 1);
        });
    } 
    else if ($questionText.hasClass('question3 true')) {
        //question4 ---> toy(03) returns true
        dogApp.userInput.question3 = true;
        $questionPage.fadeTo('slow', 0, function() {      
            $questionText.removeClass('true false');
            $questionText.html(`when you have a problem, what do you do?`);
            $label.first().html(`speed around it`);
            $img1.attr('src', './assets/icon-doges/shih-tzu.png').attr('alt', 'a speedy shih-tzu');
            $label.last().html(`face it head on`);
            $img2.attr('src', './assets/icon-doges/pug.png').attr('alt', 'a tiny, determined pug');
            $questionText.removeClass('question2');
            $questionText.addClass('question4');
            $questionPage.fadeTo('slow', 1);
        });
    } 
    else if ($questionText.hasClass('question3 false')) {
        //question5 ---> toy(03) returns false
        dogApp.userInput.question3 = false;
        $questionPage.fadeTo('slow', 0, function() {     
            $questionText.removeClass('true false');
            $questionText.html(`can you reach the top shelf? be honest`)
            $label.first().html(`sure!`);
            $img1.attr('src', './assets/icon-doges/rottweiler.png').attr('alt', 'an independant rottweiler');
            $label.last().html(`no...`);
            $img2.attr('src', './assets/icon-doges/yorkshire-terrier.png').attr('alt', 'a tiny, upset yorkie');
            $questionText.removeClass('question2');
            $questionText.addClass('question5');
            $questionPage.fadeTo('slow', 1)
        })
    } 
    else if ($questionText.hasClass('question4 true')) {
        dogApp.userInput.question4 = true;
        dogApp.showResult();
    } 
    else if ($questionText.hasClass('question4 false')) {
        dogApp.userInput.question4 = false;
        dogApp.showResult();
    } 
    else if ($questionText.hasClass('question5 true')) {
        dogApp.userInput.question5 = true;
        dogApp.showResult();
    } 
    else if ($questionText.hasClass('question5 false')) {
        dogApp.userInput.question5 = false;
        dogApp.showResult();
    } else {
        swal('oops 💩', 'henlo fren, plz choose an option!');
    }
});

$input.on('click', function() {
    $questionText.removeClass('true false');
    dogApp.questionOneAnswer = $(this).val();
    console.log(dogApp.questionOneAnswer);
    $questionText.addClass(dogApp.questionOneAnswer);
});


dogApp.showResult = () => {
    $questionText.removeClass();
    $questionText.addClass('result');
    $questionPage.fadeTo('slow', 0, function() {
        $questionPage.hide();
        $resultsPage.fadeTo('slow', 1, function() {
            $resultsPage.show();
        });
    });
    //store dog breed based on "answer" within variable
    if (dogApp.userInput.question1 === true && dogApp.userInput.question2 === true && dogApp.userInput.question5 === true) {
        $h2.html('pitbull');
        $resultBlurb.html('Pitbulls are often grossly misunderstood. They are loving and gentle with people and often makes a lousy guard dog because of his tail-wagging eagerness to greet the person at the door. They have a zest for life and love to be involved in everything going on around them.');
        dogApp.userBreed = dogApp.dogOptions[6];
    } 
    else if (dogApp.userInput.question1 === true && dogApp.userInput.question2 === true && dogApp.userInput.question5 === false) {
        $h2.html('yorkshire terrier');
        $resultBlurb.html('Small in size but big in personality, the Yorkshire Terrier makes a feisty but loving companion. Oblivious to their small size, the Yorkshire Terrier is a big dog in a small body, always on the lookout for adventure and maybe even a bit of trouble.');
        dogApp.userBreed = dogApp.dogOptions[7];
    } 
    else if (dogApp.userInput.question1 === true && dogApp.userInput.question2 === false && dogApp.userInput.question4 === true) {
        $h2.html('bichon frise');
        $resultBlurb.html('The Bichon Frise is a cheerful, small dog breed with a love of mischief and a lot of love to give. They love to play and are always happy (except when left alone for long periods of time), and their demeanor is affectionate and gentle.And it doesn’t take long to realize that the Bichon can be your happiest and most enthusiastic companion.');
        dogApp.userBreed = dogApp.dogOptions[5];
    } 
    else if (dogApp.userInput.question1 === true && dogApp.userInput.question2 === false && dogApp.userInput.question4 === false) {
        $h2.html('pomeranian');
        $resultBlurb.html(`Cute, feisty and furry, Poms are intelligent and loyal to their families. Don't let their cuteness fool you, however. These independent, bold dogs have minds of their own. They are alert and curious about the world around them. Unfortunately, in their minds, they are much larger than they really are, which can sometimes lead them to harass and even attack much larger dogs.`);
        dogApp.userBreed = dogApp.dogOptions[4];
    } 
    else if (dogApp.userInput.question1 === false && dogApp.userInput.question3 === true && dogApp.userInput.question4 === true) {
        $h2.html('shiba inu');
        $resultBlurb.html(`The Shiba Inu is known for a bold, fiery personality. The Japanese have three words to describe the breed's mental traits: kaani-i (spirited boldness), ryosei (good nature), and soboku (alertness). Combined, these traits make up the interesting, intelligent, and strong-willed temperament.`);
        dogApp.userBreed = dogApp.dogOptions[3];
    } 
    else if (dogApp.userInput.question1 === false && dogApp.userInput.question3 === true && dogApp.userInput.question4 === false) {
        $h2.html('bernese mountain dog');
        $resultBlurb.html(`The Bernese Mountain Dog is a large and sturdy dog breed, with a friendly and calm disposition. They're known for being loyal, affectionate, eager to please, and intelligent. Most of all, they have a happy-go-lucky attitude about life.`);
        dogApp.userBreed = dogApp.dogOptions[2];
    }
    else if (dogApp.userInput.question1 === false && dogApp.userInput.question3 === false && dogApp.userInput.question5 === true) {
        $h2.html('mastiff');
        $resultBlurb.html(`Mastiffs are kind, dignified, and courageous dogs who love being with people. Although the Mastiff's size makes them appear fierce, their temperament is one of good-natured docility. They prefer the comforts of home and the presence of their family and will do their best to be a lap dog- or at least a cushy footstool.`);
        dogApp.userBreed = dogApp.dogOptions[1];
    } 
    else {
        $h2.html('chihuahua');
        $resultBlurb.html(`The Chihuahua is a saucy little hot tamale and not just because of their association with a certain fast-food Mexican restaurant. They are renowned for being the world's smallest dog, but may well have the world's biggest personality stashed inside that tiny body.`);
        dogApp.userBreed = dogApp.dogOptions[0];
    };

    dogApp.resultBreed = dogApp.userBreed;

    if (dogApp.userBreed === 'mountain') {
        dogApp.userSubBreed = dogApp.dogSubBreed.mountain;
    } 
    else if (dogApp.userBreed === 'bichon') {
        dogApp.userSubBreed = dogApp.dogSubBreed.bichon;
    } 
    else if (dogApp.userBreed === 'terrier') {
        dogApp.userSubBreed = dogApp.dogSubBreed.terrier;
    };
    
    dogApp.getFinalDog();

}


//make AJAX request with final dog breed.
dogApp.getFinalDog = () => {
    if (dogApp.userSubBreed === undefined) {
        $.ajax({
            url: `https://dog.ceo/api/breed/${dogApp.resultBreed}/images/random`,
            method: 'GET',
            dataType: 'json'
        }).then((result) => {
            dogApp.imgToAppend = result.message;
            dogApp.displayResult();
        });
    } else {
        $.ajax({
            url: `https://dog.ceo/api/breed/${dogApp.resultBreed}/${dogApp.userSubBreed}/images/random`,
            method: 'GET',
            dataType: 'json'
        }).then((result) => {
            dogApp.imgToAppend = result.message;
            dogApp.displayResult();
        });
    };
};

//display image on the page based on what dog's breed is.

dogApp.displayResult = () => {
    $resultImg.attr('src', dogApp.imgToAppend).attr('alt', dogApp.resultBreed);
};


//start app
dogApp.init = () => {
};

$(() => {
    dogApp.init();
});