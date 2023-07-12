document.addEventListener("DOMContentLoaded", ()=>{
    (function schemeTabs() {
        const tabs = [
            ...document.querySelectorAll('[data-scheme-tab]')
        ];
        const contents = [
            ...document.querySelectorAll('[data-scheme-content]')
        ];
        tabs.forEach((tab, ndx)=>{
            tab.addEventListener('click', (event)=>{
                event.preventDefault();
                openTab(ndx);
                openContent(ndx);
            });
        });
        function openTab(ndx) {
            tabs.forEach((tab)=>tab.classList.remove('--active')
            );
            tabs[ndx].classList.add('--active');
        }
        function openContent(ndx) {
            if (!contents[ndx]) return console.error('Нет блока с контентом!');
            let current = contents[ndx];
            let inner = current.querySelector('.scheme-block__content');
            let height = inner.getBoundingClientRect().height + 'px';
            contents.forEach((content)=>{
                content.style.maxHeight = '0';
            });
            current.style.maxHeight = height;
            let arrow = document.querySelector('.scheme-block__arrow');
            arrow.classList.remove('--active');
            setTimeout(()=>{
                arrow.classList.add('--active');
            }, 32);
        }
        (function mobileSliderScheme(tabs) {
            if (checkScreenSize() < 980) {
                const el = document.querySelector('.swiper.scheme-block__slider');
                const slider = new Swiper(el, {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                });
            }
        })();
    })();
    // Параллаксы
    if (checkScreenSize() > 1279) {
        parallaxMinerals();
        parallaxPlanet();
    //parallaxHero();
    }
    function parallaxMinerals() {
        const el = document.querySelector('[data-parallax-minerals]');
        const block = document.querySelector('[data-parallax-minerals-frame]');
        const bg = {
            el: null,
            max: null
        };
        const first = {
            el: null,
            max: 8
        };
        const second = {
            el: null,
            max: 14
        };
        const third = {
            el: null,
            max: 18
        };
        const fourth = {
            el: null,
            max: 22
        };
        const calc = {
            top: null,
            bottom: null,
            height: null
        };
        if (block.complete) {
            calc.height = block.getBoundingClientRect().height;
            calc.top = el.offsetTop;
            calc.bottom = el.offsetTop + calc.height * 1.5;
            first.max = calc.height / 9;
            second.max = calc.height / 8;
            third.max = calc.height / 7;
            fourth.max = calc.height / 6;
        } else block.addEventListener('load', ()=>{
            calc.height = block.getBoundingClientRect().height;
            calc.top = el.offsetTop;
            calc.bottom = el.offsetTop + calc.height * 1.5;
            first.max = calc.height / 9;
            second.max = calc.height / 8;
            third.max = calc.height / 7;
            fourth.max = calc.height / 6;
        });
        bg.el = document.querySelector('[data-parallax-minerals-bg]');
        if (bg.el.complete && block.complete) {
            if (checkScreenSize() < 1280) {
                bg.max = bg.el.getBoundingClientRect().height - calc.height / 2;
                bg.el.style.transform = `translate3d(-50%, calc(-50% + ${bg.max}px), 1px)`;
            } else {
                bg.max = bg.el.getBoundingClientRect().height - calc.height;
                bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
            }
        } else bg.el.addEventListener('load', ()=>{
            if (checkScreenSize() < 1280) {
                bg.max = bg.el.getBoundingClientRect().height - calc.height / 2;
                bg.el.style.transform = `translate3d(-50%, calc(-50% + ${bg.max}px), 1px)`;
            } else {
                bg.max = bg.el.getBoundingClientRect().height - calc.height;
                bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
            }
        });
        first.el = document.querySelector('[data-parallax-minerals-1]');
        second.el = document.querySelector('[data-parallax-minerals-2]');
        third.el = document.querySelector('[data-parallax-minerals-3]');
        fourth.el = document.querySelector('[data-parallax-minerals-4]');
        document.addEventListener('scroll', (event)=>{
            if (checkScreenSize() > 1279) {
                let mod = null;
                mod = (calc.bottom - pageYOffset) / calc.height;
                if (pageYOffset >= calc.top && pageYOffset <= calc.bottom) requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        if (checkScreenSize() < 1280) bg.el.style.transform = `translate3d(-50%, calc(-50% + ${bg.max * mod}px), 1px)`;
                    });
                });
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        first.el.style.transform = `translate3d(0, ${first.max * mod}px, 1px)`;
                        second.el.style.transform = `translate3d(0, ${second.max * mod}px, 1px)`;
                        third.el.style.transform = `translate3d(0, ${third.max * mod}px, 1px)`;
                        fourth.el.style.transform = `translate3d(0, ${fourth.max * mod}px, 1px)`;
                    });
                });
            }
        });
    }
    function parallaxPlanet() {
        const el = document.querySelector('[data-scroll-parallax-planet]');
        const calc = {
            top: null,
            bottom: null,
            height: null
        };
        const obj = {
            el: null,
            max: 100
        };
        obj.el = el.querySelector('[data-scroll-parallax-planet-obj]');
        if (obj.el.complete) {
            calc.height = el.getBoundingClientRect().height;
            calc.top = el.offsetTop - window.innerHeight / 2;
            calc.bottom = el.offsetTop + window.innerHeight / 3;
            obj.el.style.transform = `translate3d(0, ${obj.max}px, 1px) rotate(-45deg)`;
        } else obj.el.addEventListener('load', ()=>{
            calc.height = el.getBoundingClientRect().height;
            calc.top = el.offsetTop - window.innerHeight / 2;
            calc.bottom = el.offsetTop + window.innerHeight / 3;
            obj.el.style.transform = `translate3d(0, ${obj.max}px, 1px) rotate(-45deg)`;
        });
        document.addEventListener('scroll', (event)=>{
            if (checkScreenSize() > 1279) {
                let mod = null;
                mod = (calc.bottom - pageYOffset) / calc.height;
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        obj.el.style.transform = `translate3d(0, ${obj.max * mod}px, 1px) rotate(-45deg)`;
                    });
                });
            }
        });
    }
    (function parallaxHero() {
        const layer1 = document.querySelector('[data-scroll-parallax-hero-1]');
        const layer2 = document.querySelector('[data-scroll-parallax-hero-2]');
        //const layer3 = document.querySelector('[data-scroll-parallax-hero-3]');
        document.addEventListener('scroll', (event)=>{
            if (checkScreenSize() >= 768) {
                let step = pageYOffset / 100;
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        layer1.style.transform = `translate3d(-50%, -${32 * step}px, 1px)`;
                        layer2.style.transform = `translate3d(0%, -${62 * step}px, 1px)`;
                    //layer3.style.transform = `translate3d(0, -${68 * step}px, 1px)`;
                    });
                });
            }
        });
    })();
    (function modals() {
        const wrapper = document.querySelector('.wrapper');
        const links = [
            ...document.querySelectorAll('[data-modal]')
        ];
        const modals = [
            ...document.querySelectorAll('.modal')
        ];
        links.forEach((link)=>{
            link.addEventListener('click', (event)=>{
                event.preventDefault();
                const type = link.href.split('#')[1];
                const modal = document.getElementById(type);
                openModal(modal);
            });
        });
        modals.forEach((modal)=>{
            const close = modal.querySelector('.modal__close');
            const container = modal.querySelector('.modal__container');
            close.addEventListener('click', (event)=>{
                event.preventDefault();
                closeModal(modal);
            });
            modal.addEventListener('click', (event)=>{
                const target = event.target;
                (target === modal || target === container) && closeModal(modal);
            });
        });
        document.body.addEventListener('keydown', (event)=>{
            if (event.code === 'Escape') modals.forEach((modal)=>{
                closeModal(modal);
            });
        });
        function openModal(el) {
            el.classList.add('--active');
            wrapper.classList.add('--modal');
        }
        function closeModal(el) {
            el.classList.remove('--active');
            wrapper.classList.remove('--modal');
        }
    })();
    (function forms() {
        const forms = [
            ...document.querySelectorAll('.form')
        ];
        forms.forEach((form)=>{
            const formEl = form.querySelector('form');
            const policy = form.querySelector('[name*="policy"]');
            const submit = form.querySelector('[type="submit"]');
            const nameLabel = form.querySelector('.--name');
            const nameInput = nameLabel.querySelector('input');
            const name = {
                label: nameLabel,
                input: nameInput,
                test: function() {
                    if (this.input.value.length > 1) {
                        let regexp = new RegExp('^([a-zа-яё ]+|\d+)$', 'gi');
                        return regexp.test(this.input.value);
                    } else return false;
                }
            };
            const phoneLabel = form.querySelector('.--phone');
            const phoneInput = phoneLabel.querySelector('input');
            const phone = {
                label: phoneLabel,
                input: phoneInput,
                mask: IMask(phoneInput, {
                    mask: '+{7} (000) 000-00-00'
                }),
                test: function() {
                    if (this.input.value.length === 18) return true;
                    else return false;
                }
            };
            phone.mask.updateValue();
            const emailLabel = form.querySelector('.--email');
            const emailInput = emailLabel.querySelector('input');
            const email = {
                label: emailLabel,
                input: emailInput,
                test: function() {
                    // проверка на наличие символа до собачки, собачку, текст между собачкой и точкой, точку и текст после точки
                    let regexp = new RegExp('.@.+?\\.\\D{2}', 'gi');
                    return regexp.test(this.input.value);
                }
            };
            form.addEventListener('submit', (event)=>{
                event.preventDefault();
                if (validation(name, phone, email, policy)) sendForm(formEl);
                else console.error('Форма не прошла валидацию и не отправилась!');
            });
            name.input.addEventListener('input', ()=>{
                if (name.input.value.length > 0) {
                    name.input.classList.add('--value');
                    if (name.test()) {
                        name.label.classList.add('--success');
                        name.label.classList.remove('--error');
                    } else {
                        name.label.classList.add('--error');
                        name.label.classList.remove('--success');
                    }
                } else name.input.classList.remove('--value');
            });
            name.input.addEventListener('change', ()=>{
                if (name.test()) {
                    name.label.classList.add('--success');
                    name.label.classList.remove('--error');
                } else {
                    name.label.classList.add('--error');
                    name.label.classList.remove('--success');
                }
                if (name.input.value.length === 0) {
                    name.label.classList.remove('--error');
                    name.label.classList.remove('--success');
                }
            });
            phone.input.addEventListener('input', ()=>{
                if (phone.input.value.length > 0) {
                    phone.input.classList.add('--value');
                    if (phone.test()) {
                        phone.label.classList.add('--success');
                        phone.label.classList.remove('--error');
                    } else {
                        phone.label.classList.add('--error');
                        phone.label.classList.remove('--success');
                    }
                } else phone.input.classList.remove('--value');
            });
            phone.input.addEventListener('change', ()=>{
                if (phone.test()) {
                    phone.label.classList.add('--success');
                    phone.label.classList.remove('--error');
                } else {
                    phone.label.classList.add('--error');
                    phone.label.classList.remove('--success');
                }
                if (phone.input.value.length === 0) {
                    phone.label.classList.remove('--error');
                    phone.label.classList.remove('--success');
                    phone.label.classList.remove('--warn');
                }
            });
            email.input.addEventListener('input', ()=>{
                if (email.input.value.length > 0) {
                    email.input.classList.add('--value');
                    if (email.test()) {
                        email.label.classList.add('--success');
                        email.label.classList.remove('--error');
                    } else {
                        email.label.classList.add('--error');
                        email.label.classList.remove('--success');
                    }
                } else email.input.classList.remove('--value');
            });
            email.input.addEventListener('change', ()=>{
                if (email.test()) {
                    email.label.classList.add('--success');
                    email.label.classList.remove('--error');
                } else {
                    email.label.classList.add('--error');
                    email.label.classList.remove('--success');
                }
                if (email.input.value.length === 0) {
                    email.label.classList.remove('--error');
                    email.label.classList.remove('--success');
                }
            });
            policy.addEventListener('change', ()=>{
                if (!policy.checked) submit.classList.add('--disabled');
                else submit.classList.remove('--disabled');
            });
            phone.mask.on("accept", function() {
                let value = phone.mask._unmaskedValue;
                if (value.length === 2) {
                    let string = String(value).split('');
                    if (+string[1] === 8 && !checked) {
                        checked = true;
                        mask.value = '+7 (';
                        phone.label.classList.add('--warn');
                    }
                }
            });
            phone.mask.on("complete", function() {
                let value = phone.mask._unmaskedValue;
                let string = String(value).split('');
                if (string[1] == 7 || string[1] == 8) phone.label.classList.add('--warn');
                else phone.label.classList.remove('--warn');
            });
        });
        function validation(name, phone, email, policy) {
            let check = false;
            if (!name.test()) {
                name.label.classList.add('--error');
                name.label.classList.remove('--success');
            }
            if (!phone.test()) {
                phone.label.classList.add('--error');
                phone.label.classList.remove('--success');
            }
            if (!email.test()) {
                email.label.classList.add('--error');
                email.label.classList.remove('--success');
            }
            if (name.test() && phone.test() && email.test() && policy.checked) check = true;
            return check;
        }
        function sendForm(form) {
            const action = form.getAttribute('action');
            fetch(action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                } // Чтобы yii понял, что это ajax, а не просто POST-запрос
            }).then((res)=>{
                if (res.status == 200) {
                    console.log('Форма отправилась');
                    res.json().then((data)=>{
                        console.log(data);
                        form.classList.add('--' + data.result);
                    });
                } else {
                    form.classList.add('--error');
                    console.error('Ошибка HTTP: ' + res.status);
                }
            }).catch((err)=>{
                console.error(err);
            });
        }
    })();
    (function scrollTop() {
        const link = document.querySelector('[data-scroll-top]');
        const startEl = document.querySelector('section.hero');
        let startPosition = startEl.getBoundingClientRect().height;
        window.addEventListener('resize', ()=>{
            startPosition = startEl.getBoundingClientRect().height;
        });
        document.addEventListener('scroll', (event)=>{
            const scroll = pageYOffset;
            if (scroll > startPosition) link.classList.add('--show');
            else link.classList.remove('--show');
        });
        link.addEventListener('click', (event)=>{
            event.preventDefault();
            const top = document.body.getBoundingClientRect().top;
            let pageTo = window.scrollY + top;
            const time = Date.now();
            requestAnimationFrame(scroll);
            function scroll() {
                var timeFracion = (Date.now() - time) / 800;
                if (timeFracion > 1) {
                    window.scrollTo(0, pageTo);
                    return;
                }
                var multiple = 1 - Math.sin(Math.acos(timeFracion - 1));
                window.scrollTo(0, pageTo - top * multiple);
                requestAnimationFrame(scroll);
            }
        });
    })();
    (function footerHeight() {
        const wrapper = document.querySelector('.section:last-of-type');
        const footer = document.querySelector('.footer');
        let height = footer.getBoundingClientRect().height;
        window.addEventListener('resize', ()=>{
            height = footer.getBoundingClientRect().height;
            wrapper.style.marginBottom = `${height}px`;
        });
        wrapper.style.marginBottom = `${height}px`;
    })();
    // Проверка разрешения экрана
    function checkScreenSize() {
        const size = window.innerWidth;
        return size;
    }
    (function sliderGallery() {
        const slider = new Swiper('.gallery__slider .swiper', {
            speed: 700,
            loop: true,
            spaceBetween: 20,
            slidesPerGroup: 1,
            autoplay: true,
            navigation: {
                nextEl: ".gallery__button.swiper-button-next",
                prevEl: ".gallery__button.swiper-button-prev"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }
        });
    })();
    // Мобильный слайдер ecology
    setMobileSliderEcology();
    window.addEventListener('resize', setMobileSliderEcology);
    function setMobileSliderEcology() {
        if (checkScreenSize() < 1280) {
            const slider = new Swiper('.ecology__mobile .swiper', {
                spaceBetween: 30,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
        }
    }
    // Мобильный слайдер more
    setMobileSliderMore();
    window.addEventListener('resize', setMobileSliderMore);
    function setMobileSliderMore() {
        if (checkScreenSize() < 768) {
            const slider = new Swiper('.more__content.swiper', {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
        }
    }
    // Мобильные анимации по скролу
    mobileAnimationsScroll();
    window.addEventListener('resize', mobileAnimationsScroll);
    function mobileAnimationsScroll() {
        let targets = [
            ...document.querySelectorAll('[data-mobile-scroll-show]')
        ];
        if (checkScreenSize() < 1280) {
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };
            let callback = (entries, observer)=>{
                entries.forEach((entry)=>{
                    if (checkScreenSize() < 1280) {
                        if (entry.isIntersecting) entry.target.classList.add('--active');
                    }
                // Each entry describes an intersection change for one observed
                // target element:
                //   entry.boundingClientRect
                //   entry.intersectionRatio
                //   entry.intersectionRect
                //   entry.isIntersecting
                //   entry.rootBounds
                //   entry.target
                //   entry.time
                });
            };
            let observer = new IntersectionObserver(callback, options);
            targets.forEach((el)=>{
                const threshold = +el.dataset.mobileScrollShow;
                options.threshold = threshold;
                observer.observe(el);
            });
        }
    }
    (function header1() {
        const header1 = document.querySelector('.header');
        const hero1 = document.querySelector('.hero');
        const scroll1 = window.pageYOffset;
        let startPosition1 = setStartPosition();
        setContentOffset(hero1);
        setClasses(scroll1, header1, startPosition1);
        window.addEventListener('resize', (event)=>{
            startPosition1 = setStartPosition();
            setContentOffset(hero1);
        });
        document.addEventListener('scroll', (event)=>{
            setClasses(window.pageYOffset, header1, startPosition1);
        });
        function setClasses(scroll, header, startPosition) {
            if (scroll < startPosition) {
                header.classList.add('--hide');
                header.classList.remove('--show');
            } else {
                header.classList.add('--show');
                header.classList.remove('--hide');
            }
            if (scroll !== 0) header.classList.add('--scroll');
            else {
                header.classList.remove('--show');
                header.classList.remove('--hide');
                header.classList.remove('--scroll');
            }
        }
        function setContentOffset(hero) {
            const header = document.querySelector('.header');
            const height = header.getBoundingClientRect().height;
            hero.style.paddingTop = `${height}px`;
        }
        function setStartPosition() {
            const hero = document.querySelector('.hero');
            const height = hero.getBoundingClientRect().height;
            return height;
        }
    })();
});

//# sourceMappingURL=index.a3ecf081.js.map
