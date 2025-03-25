const blob = document.querySelector(".blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    const isMobile = window.innerWidth < 768;

    if (isMobile) return;


    blob.animate([
        { 
            left: `${clientX - blob.offsetWidth / 2}px`, 
            top: `${clientY - blob.offsetHeight / 2}px` 
        }
    ], {
        duration: 3000,
        fill: "forwards",
        easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
    });
};