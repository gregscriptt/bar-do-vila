document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    const maxScroll = 1200;

    const isMobile = window.innerWidth < 768;

    if (isMobile) return;

    let limitedScroll = Math.min(scrollPosition, maxScroll);

    const leftSideItems = document.querySelectorAll('.left-side');
    const rightSideItems = document.querySelectorAll('.right-side');

    anime({
        targets: leftSideItems,
        translateY: limitedScroll * 0.05,
        easing: 'easeOutBack',
        duration: 100,
    });

    anime({
        targets: rightSideItems,
        translateY: -limitedScroll * 0.05, 
        easing: 'easeOutBack', 
        duration: 100, 
    });
});
