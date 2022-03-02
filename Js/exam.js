var question = document.querySelector('.question');
var radio = document.querySelector('.radio');
var radio1 = document.querySelector('#radio1');
var input1 = document.querySelector('#radioA');
var radio2 = document.querySelector('#radio2');
var input2 = document.querySelector('#radioB');
var radio3 = document.querySelector('#radio3');
var input3 = document.querySelector('#radioC');
var radio4 = document.querySelector('#radio4');
var input4 = document.querySelector('#radioD');
var mark = document.querySelector('#mark');
var submit = document.querySelector('#submit');
var prev = document.querySelector('#prev');
var curNum = document.querySelector('#curNum');
var next = document.querySelector('#next');
var data = document.getElementsByClassName('form-check-input');
// var close = document.getElementById("f");
var storge = [];

var indexNO = 0;
curNum.textContent = 1;
function Question(q, choices, rightAnswer) {
  this.Q = q;
  this.choices = choices;
  this.Answer = rightAnswer;
}
function Choices(value, id) {
  this.value = value;
  this.id = id;
}
var questions = [
  new Question(
    'What is the intersection of a column and a row on a worksheet called?',
    [
      new Choices('column', 1),
      new Choices('Value', 2),
      new Choices('Address', 3),
      new Choices('Cell', 4),
    ],
    1
  ),
  new Question(
    'What type of chart is useful for comparing values over categories ?',
    [
      new Choices('Pie Chart', 1),
      new Choices('Column Chart', 2),
      new Choices('Line Chart', 3),
      new Choices('Dot Graph', 4),
    ],
    1
  ),
  new Question(
    'Which functionin Excel tells how many numeric entries are there ?',
    [
      new Choices('CHKNUM', 1),
      new Choices('COUNT', 2),
      new Choices('SUM', 3),
      new Choices('CHKNUM', 4),
    ],
    1
  ),
  new Question(
    'A features that displays only the data in column (s) according to specified criteria',
    [
      new Choices('Formula', 1),
      new Choices('Sorting', 2),
      new Choices('Filtering', 3),
      new Choices('Pivot', 4),
    ],
    1
  ),
  new Question(
    'Statistical calculations and preparation of tables and graphs can be done using',
    [
      new Choices('Adobe Photoshop', 1),
      new Choices('Excel', 2),
      new Choices('Notepad', 3),
      new Choices('Power Point', 4),
    ],
    1
  ),
  new Question(
    'What is the intersection of a column and a row on a worksheet called ?',
    [
      new Choices('column', 1),
      new Choices('Value', 2),
      new Choices('Address', 3),
      new Choices('Cell', 4),
    ],
    1
  ),
  new Question(
    'What type of chart is useful for comparing values over categories ?',
    [
      new Choices('Pie Chart', 1),
      new Choices('Column Chart', 2),
      new Choices('Line Chart', 3),
      new Choices('Dot Graph', 4),
    ],
    1
  ),
  new Question(
    'Which functionin Excel tells how many numeric entries are there ?',
    [
      new Choices('CHKNUM', 1),
      new Choices('COUNT', 2),
      new Choices('SUM', 3),
      new Choices('CHKNUM', 4),
    ],
    1
  ),
  new Question(
    'A features that displays only the data in column (s) according to specified criteria',
    [
      new Choices('Formula', 1),
      new Choices('Sorting', 2),
      new Choices('Filtering', 3),
      new Choices('Pivot', 4),
    ],
    1
  ),
  new Question(
    'Statistical calculations and preparation of tables and graphs can be done using',
    [
      new Choices('Adobe Photoshop', 1),
      new Choices('Excel', 2),
      new Choices('Notepad', 3),
      new Choices('Power Point', 4),
    ],
    1
  ),
];
console.log(questions);

var randomQuiz = [];
function randomize() {
  if (randomQuiz.length !== questions.length) {
    quistionIndex = questions[Math.floor(Math.random() * questions.length)];
    if (!randomQuiz.includes(quistionIndex)) {
      randomQuiz.push(quistionIndex);
    }
    randomize();
  }
}
randomize();
console.log(randomQuiz);
function showQuestions(e) {
  question.textContent = randomQuiz[e].Q;
  radio1.textContent = randomQuiz[e]['choices'][0].value;
  input1.value = 0;
  radio2.textContent = randomQuiz[e]['choices'][1].value;
  input2.value = 1;
  radio3.textContent = randomQuiz[e]['choices'][2].value;
  input3.value = 2;
  radio4.textContent = randomQuiz[e]['choices'][3].value;
  input4.value = 3;
  var raidoBtns = document.querySelectorAll('input');
  for (var z = 0; z < raidoBtns.length; z++) {
    if (storge[indexNO] == raidoBtns[z].value) {
      raidoBtns[z].checked = true;
    } else {
      raidoBtns[z].checked = false;
    }
  }
}
showQuestions(indexNO);

// * next question
next.addEventListener('click', function () {
  if (curNum.textContent == 10) {
    this.classList.add('disabled');
  } else {
    indexNO++;

    showQuestions(indexNO);
    curNum.textContent++;
    prev.classList.remove('disabled');
  }
});

// * previous question
prev.addEventListener('click', function () {
  if (curNum.textContent == 1) {
    this.classList.add('disabled');
  } else {
    this.classList.remove('disabled');
    indexNO--;
    showQuestions(indexNO);
    curNum.textContent--;
    next.classList.remove('disabled');
  }
});

// **************progress****************
var i = 0;
(function () {
  if (i == 0) {
    i = 1;
    var progress = document.getElementById('progress');
    var width = 1;
    var id = setInterval(frame, 500);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        location.replace('../pages/result.html');
        storgeData();
      } else {
        width++;
        progress.style.width = width + '%';
        progress.textContent = width + '%';
      }
    }
  }
})();
// * mark Question
var index = [];
mark.addEventListener('click', function () {
  // console.log(index);
  if (!index.includes(indexNO)) {
    index.push(indexNO);
    x = document.createElement('div');
    // x.textContent = curNum.textContent;
    x.innerHTML = `<div id="M">${curNum.textContent}</div><button type="button" id="f" onclick="closeK()" class="btn-close" aria-label="Close"></button>`;
    x.setAttribute('id', `${indexNO}`);
    x.setAttribute('class', 'hob');
    x.setAttribute('name', 'address');
    x.setAttribute('onclick', `show(${indexNO})`);
    document.getElementById('circle').appendChild(x);
  }
});
function show(e) {
  showQuestions(e);
  // var s = document.getElementById(`${e}`);
  // s.remove();
  index.splice(index.indexOf(e), 1);
  indexNO = e;
  curNum.textContent = e + 1;
  // document.getElementById("f").addEventListener("click", function () {
  //   var M = this.parentNode;
  //   M.remove();
  //   console.log("object");
  // });
  // console.log(index);
}
function closeK() {
  var M = document.getElementById('f').parentNode;
  M.remove();
}
// **********************************
console.log(questions[i].Answer);
answer = [];
// * storge Answer
radio.addEventListener('click', function (e) {
  if (e.target.classList.contains('form-check-input')) {
    storge[indexNO] = e.target.value;
    for (var i = 0; i < storge.length; i++) {}
    e.target.checked = 'true';
  }
  console.log(storge);
});
var result = 0;
function storgeData() {
  for (var i = 0; i <= indexNO; i++) {
    if (storge[i] == questions[i].Answer) {
      result++;
    }
  }

  localStorage.setItem('result', result);
  return result;
}

submit.addEventListener('click', function () {
  location.replace('../pages/result.html');
  storgeData();
});
