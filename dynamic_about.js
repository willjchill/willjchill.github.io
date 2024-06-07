const scrollerInner = document.querySelector("#about-awards");
const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
});
