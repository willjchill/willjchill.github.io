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