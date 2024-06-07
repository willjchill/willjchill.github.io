const getGitHubProjects = async (username) => {
    const url = `https://api.github.com/users/${username}/repos`;
    const projects = {};
  
    try {
      const response = await fetch(url);
      const repos = await response.json();

      console.log(repos);
  
      for (const repo of repos) {
        const languagesResponse = await fetch(repo.languages_url);
        const languagesData = await languagesResponse.json();
        const languages = Object.keys(languagesData).join(',') || 'No languages specified';
  
        projects[String(repo.name)] = {
          description: repo.description || 'No description available',
          url: repo.html_url,
          languages: languages
        };
      }

    } catch (error) {
      console.error('Error fetching data from GitHub:', error.message);
      // latest version of github repos (upd on 5/30/2024)
      const placeholder = {
        "2D-Unity-Physics": {
            "description": "I set out to program a lot of collision detectors, force vectors, and other such methods in order to improve the general feel of platforming in video games. All of it is coded in C#.",
            "url": "https://github.com/willjchill/2D-Unity-Physics",
            "languages": "C#"
        },
        "3D-Rendering": {
            "description": "I'm doing some orthogonal perspective and 3d rendering using linear algebra and transformations. I made all the matrix multiplication functions from the ground-up, too.",
            "url": "https://github.com/willjchill/3D-Rendering",
            "languages": "JavaScript,HTML,CSS"
        },
        "DLC_cats": {
            "description": "Using a machine learning library (DeepLabCut) to analyze the biomechanics behind cat movement. It's for a small research project I helped out with at UM.",
            "url": "https://github.com/willjchill/DLC_cats",
            "languages": "Python"
        },
        "DrawingCircle": {
            "description": "Trying to create circle objects on a website with JavaScript and implement certain behaviors with the circle later on. It's a little broken, but ideally it's good practice to pursue more complex physics behavior on websites.",
            "url": "https://github.com/willjchill/DrawingCircle",
            "languages": "JavaScript,HTML,CSS"
        },
        "FarenheitToCelsius": {
            "description": "A simple farenheit to celsius converter on ARM assembly. I thought it was cool because no division operation was needed and thus it did the calculation in fewer clock cycles than if a formal division algorithm was used.",
            "url": "https://github.com/willjchill/FarenheitToCelsius",
            "languages": "Assembly"
        },
        "Lambda-Calculus": {
            "description": "Just playing around with lambda calculus and its application in functional programming. For instance, I will redefine Boolean operators in terms of lambda expressions in JS. ",
            "url": "https://github.com/willjchill/Lambda-Calculus",
            "languages": "JavaScript,HTML"
        },
        "Maze-Lab": {
            "description": "This was from my old C++ programming lectures I took in sophomore year of college. I'm pretty proud of the AI and features on this little maze level, so I thought I'd share. Be warned though: there's a few bugs here and there!",
            "url": "https://github.com/willjchill/Maze-Lab",
            "languages": "C++"
        },
        "MeanAndStD": {
            "description": "A simple C++ program to calculate mean and standard deviation given certain inputs. ",
            "url": "https://github.com/willjchill/MeanAndStD",
            "languages": "C++"
        },
        "MusicBot": {
            "description": "A very basic rendition of a music bot you'd typically see on Discord! ",
            "url": "https://github.com/willjchill/MusicBot",
            "languages": "Java"
        },
        "PhysicsFunctions": {
            "description": "Just writing down a few very basic physics functions as practice for Python. ",
            "url": "https://github.com/willjchill/PhysicsFunctions",
            "languages": "Python"
        },
        "PrimitiveBlockChain": {
            "description": "I'm trying to get a feel for the theory behind blockchains and cryptocurrency. This code was inspired by IvanOnTech's content.",
            "url": "https://github.com/willjchill/PrimitiveBlockChain",
            "languages": "Java"
        },
        "React-ToDo": {
            "description": "I made a simple todo list using classes. After that, I tried to re-write a lot of the code to take advantage of the new hooks feature in React.",
            "url": "https://github.com/willjchill/React-ToDo",
            "languages": "JavaScript,CSS,HTML"
        },
        "senior-project": {
            "description": "EMG: Muscle Memory",
            "url": "https://github.com/willjchill/senior-project",
            "languages": "C++,Python,C"
        },
        "senior-project-final": {
            "description": "completed version",
            "url": "https://github.com/willjchill/senior-project-final",
            "languages": "Jupyter Notebook,Python,C++,C,MATLAB"
        },
        "StPicklesWebsite": {
            "description": "Just a humorous attempt at learning basic front-end development. Largely inspired by the introductory tutorial offered at PluralSight for front-end development.",
            "url": "https://github.com/willjchill/StPicklesWebsite",
            "languages": "HTML,CSS"
        },
        "sunset-showdown": {
            "description": "Top-down online battle royale game made with UnityGL.",
            "url": "https://github.com/willjchill/sunset-showdown",
            "languages": "JavaScript,HTML, CSS"
        },
        "The-Lab": {
            "description": "Testing out github repo's and maybe Node.js + Express. ",
            "url": "https://github.com/willjchill/The-Lab",
            "languages": "JavaScript,CSS,HTML"
        },
        "USPopulationModel": {
            "description": "A brief attempt at applying differential equations and exponential growth in order to predict the population of the US over the course of 1790-1950. All written in Java. Results print in terminal. ",
            "url": "https://github.com/willjchill/USPopulationModel",
            "languages": "Java"
        },
        "willjchill.github.io": {
            "description": "Everything here is written in HTML, CSS, and vanilla JS. To challenge myself, I used no frameworks and went all-out with the front-end!",
            "url": "https://github.com/willjchill/willjchill.github.io",
            "languages": "JavaScript,CSS,HTML"
        }
    }
      return placeholder;
    }
  
    return projects;
  };

// icon dictionary for flexbox in each github card
var currentPath = window.location.pathname;
var folderPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// var imagePath = folderPath + '/images/hero/hand_edited.png';
const filepath_lang_icon = {
    'C++': folderPath + '/images/github/icons/Cpp.png',
    'C': folderPath + '/images/github/icons/C.png',
    'C#': folderPath + '/images/github/icons/C_sharp.png',
    'Assembly': folderPath + '/images/github/icons/Assembly.png',
    'CSS': folderPath + '/images/github/icons/css.jpg',
    'JavaScript': folderPath + '/images/github/icons/Javascript.png',
    'Java': folderPath + '/images/github/icons/Java.jpg',
    'MATLAB': folderPath + '/images/github/icons/MATLAB.png',
    'Jupyter Notebook': folderPath + '/images/github/icons/Jupyter.png',
    'HTML': folderPath + '/images/github/icons/HTML.jpg',
    'Python': folderPath + '/images/github/icons/Python.png',
}

async function init_run() {
    // fetch projects when page loads
    const projects = await getGitHubProjects('willjchill');
    console.log(projects);
    const github_container = document.querySelector("#github-projects");
    var github_item;
    var github_header;
    for (var key in projects) {
      github_item = document.createElement('div');
      github_header = document.createElement('h1');
      github_header.textContent = key;
      github_description = document.createElement('p');
      github_link = document.createElement('a');
      github_link.target = '_blank';
      github_link.href = projects[key]['url'];
      github_link.textContent = "Go To Repo";
      github_description.textContent = projects[key]['description'];
      // go through all of the languages used and create a flexbox row that contains icons of each lang 
      let languagesArray = projects[key]['languages'].split(',');
      github_languages = document.createElement('div');
      github_languages.className = 'languages';
      for(let language of languagesArray) {
        console.log(language);
        console.log(filepath_lang_icon[language]);
        github_icon = document.createElement('div');
        github_icon.className = 'icon';
        github_icon.style.backgroundImage = `url(${filepath_lang_icon[language]})`;
        github_languages.appendChild(github_icon);
      }

      github_item.classList.add('projects-item');
      github_container.appendChild(github_item);
      github_item.appendChild(github_header);
      github_item.appendChild(github_description);
      github_item.appendChild(github_link);
      github_item.appendChild(github_languages);
    }
    scrollAnimation();  // run scroll animation after fetching data
}
init_run();

function scrollAnimation() {
  const scrollerInner = document.querySelector("#github-projects");
  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
}