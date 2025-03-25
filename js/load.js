window.onload = function() {
    const projects = document.querySelectorAll('.product-item');
    const headerContainer = document.querySelectorAll('.header');


    const observerProjects = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 250); 
                observerProjects.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5
    });

    projects.forEach(card => {
        observerProjects.observe(card);
    });

    const allElements = [...headerContainer
    ];

    const observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    allElements.forEach(element => {
        observer.observe(element);
    });
};