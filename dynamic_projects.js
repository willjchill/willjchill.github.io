// resizing background accordingly
document.addEventListener('DOMContentLoaded', () => {
    const referenceDiv = document.querySelector('#projects-grid-container')
    const targetDiv = document.querySelector('#projects-background');

    const resizeTargetDiv = () => {
        const referenceRect = referenceDiv.getBoundingClientRect();
        targetDiv.style.width = referenceRect.width + 'px';
        targetDiv.style.height = referenceRect.height + 'px';
    };

    resizeTargetDiv();
    // Create a new ResizeObserver instance
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            // Check if the reference div was resized
            if (entry.target === referenceDiv) {
                resizeTargetDiv();
            }
        }
    });
    resizeObserver.observe(referenceDiv);
});

const content_height_int = 200;
const content_height = `${200}px`;

// dropdown animation
document.addEventListener('DOMContentLoaded', () => {
    const elementList = document.querySelectorAll(".dropdown");
    const referenceList = document.querySelectorAll(".content");

    function updateKeyFrames(element, style, curr_height) {
        var keyframes = `@keyframes expandDropdown {
            from {
                height: ${Math.min(content_height_int, curr_height)}px;
            }
            to {
                height: ${content_height};
            }
        }
    
        @keyframes collapseDropdown {
            from {
                height: ${Math.max(content_height_int, curr_height)}px;
            }
            to {
                height: 0px;
            }
        }
        `;
        style.innerHTML = keyframes;
    }

    var trackDropdown = (element, reference, style) => {
        updateKeyFrames(element, style); // initial keyframes

        var curr_height = 0;
        var intervalID = null;
        var timeoutID = null;
    
        reference.addEventListener('mouseenter', () => {
            if(intervalID != null) {
                clearTimeout(timeoutID);
                clearInterval(intervalID);
            }
            intervalID = setInterval(() => { 
                updateKeyFrames(element, style, curr_height);
                curr_height = element.getBoundingClientRect().height;
                element.style.height = `${Math.min(content_height_int, curr_height)}px`;
             }, 20);
            timeoutID = setTimeout(function() {
                clearInterval(intervalID);
                element.style.height = content_height;
            }, 1000);
            element.style.animationName = 'expandDropdown';
            element.style.animationDuration = '1s';
            element.style.animationTimingFunction = 'ease-in-out';
        });
    
        reference.addEventListener('mouseleave', () => {
            if(intervalID != null) {
                clearTimeout(timeoutID);
                clearInterval(intervalID);
            }
            intervalID = setInterval(() => { 
                updateKeyFrames(element, style, curr_height); 
                curr_height = element.getBoundingClientRect().height;
                element.style.height = `${Math.max(content_height_int, curr_height)}px`;
            }, 20);
            timeoutID = setTimeout(function() {
                clearInterval(intervalID);
                element.style.height = '0px';
            }, 1000);
            element.style.animationName = 'collapseDropdown';
            element.style.animationDuration = '1s';
            element.style.animationTimingFunction = 'ease-in-out';
        });
    };

    elementList.forEach((element, index) => {
        let style = document.createElement('style');
        document.head.appendChild(style);
        trackDropdown(element, referenceList[index], style);
    });
});

