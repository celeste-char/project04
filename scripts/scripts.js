

//
//
//
/////// which good boi r u?
//
//
// by char and celeste c:



//VARIBLES

const $resultImg = $('.resultsPage img')





//create app namespace to hold all methods
const dogApp = {};

//***NEEDS EDIT, place logic here c: ---create object with methods nested within. the name of each method is based on "answers" with dogs, finally, in an array of last question

//collect user input "answer" in an array.

//on click of button, check if array contains answers required for each dog

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