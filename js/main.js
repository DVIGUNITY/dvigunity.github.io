(function() {

    AOS.init();
    
    if (window.innerHeight > 700 && window.innerWidth > 600) {
        new fullpage('#fullpage', {
            licenseKey: 'DL8F7-L2WPH-IWPN6-K7YP9-VAECK',
            bigSectionsDestination: 'top',
            onLeave: function(){
                document.querySelectorAll('.fp-table [data-aos]').forEach((el) => {
                    el.classList.remove('aos-animate')
                })
            },
            onSlideLeave: function(){
                document.querySelectorAll('.fp-table [data-aos]').forEach((el) => {
                el.classList.remove('aos-animate')
            })
            },
            afterSlideLoad: function(){
                document.querySelectorAll('.fp-table.active .aos-init').forEach((el) => {
                    el.classList.add('aos-animate')
                })
            },
            afterLoad: function() {
                document.querySelectorAll('.fp-table.active .aos-init').forEach((el) => {
                    el.classList.add('aos-animate')
                })
            },
            responsiveHeight: 700,
            responsiveWidth: 600
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    menuToggle.onclick = (event) => {
        menuToggle.classList.toggle('active');
        document.getElementById('primary-menu').classList.toggle('active');
        document.getElementById('header').classList.toggle('active');
        if(event.target.getAttribute('aria-expanded') == 'false') {
            event.target.setAttribute('aria-expanded', 'true');
        } else {
            event.target.setAttribute('aria-expanded', 'false');
        }
    }

    

    document.addEventListener("mousemove", parallax);
    
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        document.querySelectorAll('.parallaxBlock__item').forEach(function(parallaxBlock__item) {
            let speedX = parallaxBlock__item.getAttribute('data-speed-x') ? 0 - (_mouseX - _w) * parallaxBlock__item.getAttribute('data-speed-x') : 0 - (_mouseX - _w) * 0.005;
            let speedY = 0 - (_mouseY - _h) * 0.005;
            if (parallaxBlock__item.getAttribute('data-speed-y')) {
                if (parallaxBlock__item.getAttribute('data-speed-y') == 0) {
                    speedY = 0;
                } else {
                    speedY = 0 - (_mouseY - _h) * parallaxBlock__item.getAttribute('data-speed-x');
                }

            }
            parallaxBlock__item.style.transform = `translate(${speedX}px, ${speedY}px)`;
        });
    }
    
    document.querySelectorAll('.ticker').forEach((el) => {
        let list = el.querySelector('.ticker__list'), 
        clone = list.cloneNode(true);
        el.append(clone);
    });

    document.querySelectorAll('.blogItem').forEach((el) => {
        el.onclick = function() {
            let link = el.getElementsByTagName('a');
            let url = link[0].getAttribute('href');
            let target = link[0].getAttribute('target') ? link[0].getAttribute('target') : '_self';
            window.open(url, target);
        }
    });

    // container--1 animation
    const container1Timeline1 = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
    container1Timeline1.to( ".container--1 .gsap--1", {
        motionPath: {
            path: ".container--1 .path--1 path",
            align: ".container--1 .path--1 path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },
        duration: 150,
        ease: Linear.easeNone
    }, 0 );

    MotionPathPlugin.convertToPath(".container--1 .path--2 ellipse");
    const container1Timeline2 = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
    container1Timeline2.to( ".container--1 .gsap--2", {
        motionPath: {
            path: ".container--1 .path--2 path",
            align: ".container--1 .path--2 path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },
        duration: 100,
        ease: Linear.easeNone
    }, 0 );

    // container--2 animation
    const container2Timeline1 = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
    container2Timeline1.to( ".container--2 .gsap--1", {
        motionPath: {
            path: ".container--2 .path--1 path",
            align: ".container--2 .path--1 path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },
        duration: 100,
        ease: Linear.easeNone
    }, 0 );

    MotionPathPlugin.convertToPath(".container--2 .path--2 ellipse");
    const container2Timeline2 = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
    container2Timeline2.to( ".container--2 .gsap--2", {
        motionPath: {
            path: ".container--2 .path--2 path",
            align: ".container--2 .path--2 path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },
        duration: 80,
        ease: Linear.easeNone
    }, 0 );

    
    // Solutions animation
    if (document.querySelectorAll('.solutions__gsap--1').length > 0) {
        const solutionsTimeline1 = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
        solutionsTimeline1.to( ".solutions__gsap--1", {
            motionPath: {
                path: ".solutionsPath--1 path",
                align: ".solutionsPath--1 path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            },
            duration: 100,
            yoyo: true,
            repeat: -1,
            ease: Linear.easeNone
        }, 0 );
    }

    if (document.querySelectorAll('.solutions__gsap--2').length > 0) {
        const solutionsTimeline2 = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
        solutionsTimeline2.to( ".solutions__gsap--2", {
            motionPath: {
                path: ".solutionsPath--2 path",
                align: ".solutionsPath--2 path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            },
            duration: 30,
            yoyo: true,
            repeat: -1,
            ease: Linear.easeNone
        }, 0 );
    }

    
    // Container--3 animation
    if (document.querySelectorAll('.container--3 .gsap--main').length > 0) {
        TweenMax.to('.container--3 .gsap--main', 4, {
            y: "+=10px",
            yoyo: true,
            repeat: -1,
            ease: Linear.easeNone
        });
    }
    if (document.querySelectorAll('.container--3 .gsap--2').length > 0) {
        TweenMax.to('.container--3 .gsap--2', 4, {
            y: "+=30px",
            yoyo: true,
            repeat: -1,
            ease: Linear.easeNone
        });
    }
    if (document.querySelectorAll('.container--3 .gsap--3').length > 0) {
        TweenMax.to('.container--3 .gsap--3', 4, {
            y: "+=25px",
            yoyo: true,
            repeat: -1,
            ease: Linear.easeNone
        });
    }
    if (document.querySelectorAll('.container--3 .gsap--4').length > 0) {
        TweenMax.to('.container--3 .gsap--4', 4, {
            y: "+=20px",
            yoyo: true,
            repeat: -1,
            ease: Linear.easeNone
        });
    }
    if (document.querySelectorAll('.container--3 .gsap--5').length > 0) {
        TweenMax.to('.container--3 .gsap--6', 4, {
            y: "+=15px",
            yoyo: true,
            repeat: -1,
            ease: Linear.easeNone
        });
    }

    // Container--4 animation
    if (document.querySelectorAll('.services .container--4 .gsap--1').length > 0) {
        MotionPathPlugin.convertToPath(".services .container--4 .path--1 ellipse");
        const container4Timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
        container4Timeline.to( ".services .container--4 .gsap--1", {
            motionPath: {
                path: ".services .container--4 .path--1 path",
                align: ".services .container--4 .path--1 path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            },
            duration: 80,
            ease: Linear.easeNone
        }, 0 );
    }

    // globalPath animation    
    if (window.innerHeight > 700 && window.innerWidth > 600) {
        document.querySelectorAll('.globalPathDeco').forEach((el) => {
            let index = el.getAttribute('data-index');
            gsap.timeline({ repeat: -1, repeatDelay: 0.1 }).to( `.globalPathDeco-${index}`, {
                motionPath: {
                    path: `.globalPath-${index} path`,
                    align: `.globalPath-${index} path`,
                    autoRotate: true,
                    alignOrigin: [0.5, 0.5]
                },
                duration: 60 + Math.floor(Math.random()*5)*10,
                yoyo: true,
                repeat: -1,
                ease: Linear.easeNone
            }, 0 );
        });
    };
    
    const partners = new Swiper('.section__partners--1, .section__partners--2', {
        breakpoints: {
            320: {
                slidesPerView: 2.5,
                spaceBetween: 15
            },
            481: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            641: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });

    const teamwork = new Swiper('.teamwork__principles', {
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            481: {
                slidesPerView: 2.5,
                spaceBetween: 15
            },
            601: {
                slidesPerView: 3.25,
                spaceBetween: 15
            },
            801: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });

    const comments = new Swiper('.comments .swiper', {
        grabCursor: true,
        speed: 1000,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-150%", 0, -1000],
            },
            next: {
                translate: ["150%", 0, -1000],
            },
        },
        pagination: {
            el: ".comments .swiper-pagination",
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    });

    // window.addEventListener('resize', function(event) {
    //     fp();
    // }, true);
    
    document.onkeydown = (event) => {
        event = event || window.event;
        let isEscape = false;
        if ("key" in event) {
            isEscape = (event.key === "Escape" || event.key === "Esc");
        } else {
            isEscape = (event.keyCode === 27);
        }
        if (isEscape) {
            // close menu
            menuToggle.classList.remove('active');
            document.getElementById('primary-menu').classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'true');

            // close languages
            languageMenu.classList.remove('active');
            languageMenu.setAttribute('hidden');
            document.getElementById('languageMenuToggle').setAttribute('aria-expanded', 'true');
        }
    };

    // const contactUsonChange = (event) => {
    //     document.querySelectorAll('.container__deco__inputValue span[data-index="' + event.target.name + '"]')[0].innerHTML = event.target.value;
    // };

    // document.querySelectorAll('.contactUs .contact__form input').forEach((el) => {
    //     el.addEventListener('input', contactUsonChange, false);
    // });
    


})();