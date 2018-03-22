function scene2() {
  console.log('Executing scene 2!');

  // Setup Stage
  var stage = document.querySelector('#stage');
  var castle = document.querySelector('#castle');
  var stageImg = stage.querySelector('#stage-img');
  var castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1
  var nedContainer = document.createElement('div');
  stage.append(nedContainer)

  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '44%';
  nedContainer.style.top = '55%';
  nedContainer.style.left = '10%';
  nedContainer.style.border = '2px solid blue';
  nedContainer.style.background = 'yellow';

  var ned = document.querySelector('#ned');
  nedContainer.append(ned);
  var leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);

  ned.style.width = '70%;'
  ned.style.position = 'absolute'
  ned.style.top = 0;
  leather.style.position = 'absolute';
  leather.style.border = '2px solid green';
  leather.style.bottom = 0;

  ned.style.border = 'none'
  leather.style.border = 'none'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'


  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
