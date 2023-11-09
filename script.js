body=document.querySelector("body");
// christmas=document.querySelector("christmas");

/**Klokka */
function clock() {
  const timePlace = document.getElementById(`time`);

  let today = new Date();
  let hours = today.getHours();

  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  

  timePlace.innerHTML = hours + ":" + minutes;
}
clock();
setInterval(clock, 1000)


// window.addEventListener('load',function () {
//     let content = document.getElementById('teams');
//     let today = new Date();
//     let currentMonth = today.getMonth();

//     if (currentMonth == 0) {
//         content.innerHTML = 'It is winter';
//     } else if (currentMonth == 1) {
//         content.innerHTML = 'It is winter';
//     } else if (currentMonth == 2) {
//         content.innerHTML = 'It is winter';
//     } else if (currentMonth == 3) {
//         content.innerHTML = 'It is spring';
//     } else if (currentMonth == 4) {
//         content.innerHTML = 'It is spring';
//     } else if (currentMonth == 5) {
//         content.innerHTML = 'It is spring';
//     } else if (currentMonth == 6) {
//         content.innerHTML = 'It is summer';
//     } else if (currentMonth == 7) {
//         content.innerHTML = 'It is summer';
//     } else if (currentMonth == 8) {
//         content.innerHTML = 'It is summer';
//     } else if (currentMonth == 9) {
//         content.innerHTML = 'It is fall';
// }
// });






// if (currentMonth >= 0 && currentMonth <= 2) {
//     content.innerHTML = 'It is winter'; 
//     body.classList.add('winter');
// } else if (currentMonth >= 3 && currentMonth <= 5) {
//     content.innerHTML = 'It is spring';
//     body.classList.add('spring');
// } else if (currentMonth >= 6 && currentMonth <= 8) {
//     content.innerHTML = 'It is summer';
//     body.classList.add('summer');
// } else if (currentMonth >= 9 && currentMonth <= 11) {
//     content.innerHTML = 'It is fall';
//     body.classList.add('fall');
// }
// });

// if (currentMonth >= 0 && currentMonth <= 2) {
//     content.innerHTML = 'It is winter'; 
//     body.classList.remove('spring', 'summer', 'fall');
//     body.classList.add('winter');
// } else if (currentMonth >= 3 && currentMonth <= 5) {
//     content.innerHTML = 'It is spring';
//     body.classList.remove('winter', 'summer', 'fall');
//     body.classList.add('spring');
// } else if (currentMonth >= 6 && currentMonth <= 8) {
//     content.innerHTML = 'It is summer';
//     body.classList.remove('winter', 'spring', 'fall');
//     body.classList.add('summer');
// } else if (currentMonth >= 9 && currentMonth <= 11) {
//     content.innerHTML = 'It is fall';
//     body.classList.remove('winter', 'spring', 'summer');
//     body.classList.add('fall');
// };
// });


