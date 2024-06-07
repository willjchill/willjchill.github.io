var currentPath = window.location.pathname;
var folderPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
var imagePath = null;
var img = null;

// FOR PROJECTS SECTION
imagePath = folderPath + '/images/projects/muscle_memory.jpg';
img = document.querySelector('#Muscle-Memory'); 
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/projects/sunset_showdown.png';
img = document.querySelector('#Sunset-Showdown-img'); 
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/projects/sunset_showdown.gif';
img = document.querySelector('#Sunset-Showdown-gif'); 
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/projects/DeepLabCut_ex.png';
img = document.querySelector('#DLC-img'); 
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/projects/DeepLabCut_ex.gif';
img = document.querySelector('#DLC-gif'); 
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/projects/ALU.PNG';
img = document.querySelector('#ALU'); 
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/projects/GSR.jpg';
img = document.querySelector('#GSR'); 
img.style.backgroundImage = `url(${imagePath})`;

// FOR MY ABOUT SECTION
imagePath = folderPath + '/images/about/norman_award.jpg';
img = document.querySelector('#norman');
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/about/eliahu_award.jpg';
img = document.querySelector('#eliahu');
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/about/video_award.jpg';
img = document.querySelector('#video');
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/about/summa_award.jpg';
img = document.querySelector('#summa');
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/about/emt_award.PNG';
img = document.querySelector('#emt');
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/about/hsf_award.PNG';
img = document.querySelector('#hsf');
img.style.backgroundImage = `url(${imagePath})`;