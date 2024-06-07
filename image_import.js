var currentPath = window.location.pathname;
var folderPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
var imagePath = folderPath + '/images/hero/hand_edited.png';
var img = document.querySelector('#hand-left img');
img.src = imagePath;
img = document.querySelector('#hand-right img');
img.src = imagePath;
img = document.querySelector('#name-card object');
imagePath = folderPath + '/images/hero/name_card.svg';
img.data = imagePath;
img = document.querySelector('#hero-img'); 
// imagePath = folderPath + '/images/hero/roman_arch_4k.jpeg';
imagePath = folderPath + '/images/hero/best_edit.jpeg';
img.style.backgroundImage = `url(${imagePath})`;
img = document.querySelector('#hardware-boon object'); 
imagePath = folderPath + '/images/hero/hardware_boon.svg';
img.data = imagePath;
img = document.querySelector('#software-boon object'); 
imagePath = folderPath + '/images/hero/software_boon.svg';
img.data = imagePath;

// FOR MY GITHUB SECTION
imagePath = folderPath + '/images/github/github_wallpaper_transparent.png';
img = document.querySelector('#github-img img'); 
img.src = imagePath;

// FOR PROJECTS SECTION
imagePath = folderPath + '/images/projects/architecture_shaft_2.png';
img = document.querySelector('#projects-pillar-left'); 
img.style.backgroundImage = `url(${imagePath})`;
img = document.querySelector('#projects-pillar-right'); 
img.style.backgroundImage = `url(${imagePath})`;

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

img = document.querySelector('#projects-img'); 
imagePath = folderPath + '/images/contact/marble_texture.jpg';
img.style.backgroundImage = `url(${imagePath})`;

// FOR MY ABOUT SECTION
imagePath = folderPath + '/images/about/open_field_edited_1_crop.png';
img = document.querySelector('#about-git-bg');
img.style.backgroundImage = `url(${imagePath})`;

imagePath = folderPath + '/images/about/placeholder.png';
img = document.querySelector('#about-img img');
img.src = imagePath;

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

// FOR MY CONTACT SECTION
imagePath = folderPath + '/images/contact/email.svg';
img = document.querySelector('#email object');
img.data = imagePath;

imagePath = folderPath + '/images/contact/github.svg';
img = document.querySelector('#git object');
img.data = imagePath;

imagePath = folderPath + '/images/contact/linkedin.svg';
img = document.querySelector('#linkedin object');
img.data = imagePath;

img = document.querySelector('#contact-img'); 
imagePath = folderPath + '/images/contact/marble_texture.jpg';
img.style.backgroundImage = `url(${imagePath})`;