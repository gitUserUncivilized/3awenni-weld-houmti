var Name = '';
const random = document.querySelector('.randomize');
const story = document.querySelector('.story');
const placeHolder = document.querySelector('#customname');


const us = document.querySelector('#us');
const uk = document.querySelector('#uk');
const stories = [
    `it was 94 fahrenheit outside, ${Name}`,
    `stop it ${Name}`,
    `GFUS ${Name}`,
    `fahrenheit fahrenheit fahrenheit`
]
random.addEventListener('click', function(){
    naming();
    generate();
});







function naming() {
     Name = placeHolder.value;
    console.log(Name);
}
function generate() {
    
        const randNUmb = Math.floor(Math.random()*stories.length);
        console.log(randNUmb);
        const randStory = stories[randNUmb];
        console.log(randStory);
        story.textContent = randStory;
        story.style.visibility = 'visible';
    
    
    // if (uk.checked) {
    //     const randNUmb = Math.floor(Math.random() * (stories.length()));
    //     const randStory = stories[randNUmb];
    //     const randStoryUk = randStory.replace(/fahrenheit/gi, '°C');
    //     story.textContent = randStoryUk;
    // }
}