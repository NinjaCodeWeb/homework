(function () {

	// Бургер

	document.addEventListener('click', burgerInit)

	function burgerInit(event) {

		const burgerIcon = event.target.closest('.burger-icon')
		const burgerNavLink = event.target.closest('.nav__link')

		if (!burgerIcon && !burgerNavLink) return
		if (document.documentElement.clientWidth > 900) return


		if (!document.body.classList.contains('body--open-menu')) {
			document.body.classList.add('body--open-menu')
		} else {
			document.body.classList.remove('body--open-menu')
		}

	}

	// Модалка

	const modal = document.querySelector('.modal')
	const modalButton = document.querySelector('.about__img-button')

	modalButton.addEventListener('click', openModal)
	modal.addEventListener('click', closeModal)

	function openModal (event) {
		event.preventDefault()
		document.body.classList.toggle('body--open-modal')
	}

	function closeModal (event) {
		event.preventDefault()

		const target = event.target

		if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
			document.body.classList.remove('body--open-modal')
		}

	}

	// Табы

	const tabControls = document.querySelector('.tab-controls')

	tabControls.addEventListener('click', toggleTab)

	function toggleTab(event) {

		const tabControl = event.target.closest('.tab-controls__link')

		if(!tabControl) return
		event.preventDefault()
		if(tabControl.classList.contains('tab-controls__link--active')) return

		const tabContentID = tabControl.getAttribute('href')
		const tabContent = document.querySelector(tabContentID)
		const activeControl = document.querySelector('.tab-controls__link--active')
		const activeContent = document.querySelector('.tab-content--show')

		if (activeControl) {
			activeControl.classList.remove('tab-controls__link--active')
		}

		if (activeContent) {
			activeContent.classList.remove('tab-content--show')
		}

		tabControl.classList.add('tab-controls__link--active')
		tabContent.classList.add('tab-content--show')

	}

	// Аккордион

	const accordionLists = document.querySelectorAll('.accordion-list')

	accordionLists.forEach(element => {
		
		element.addEventListener('click', (event) => {

			const accordionList = event.currentTarget
			const accordionOpenItem = accordionList.querySelector('.accordion-list__item--open')
			const accordionOpenContent = accordionList.querySelector('.accordion-list__item--open .accordion-list__content')

			const accordionControl = event.target.closest('.accordion-list__control')
			if (!accordionControl) return
			event.preventDefault()
			const accordionItem = accordionControl.parentElement
			const accordionContent = accordionControl.nextElementSibling

			if (accordionOpenItem && accordionItem != accordionOpenItem) {
				accordionOpenItem.classList.remove('accordion-list__item--open')
				accordionOpenContent.style.maxHeight = null
			}

			accordionItem.classList.toggle('accordion-list__item--open')

			if (accordionItem.classList.contains('accordion-list__item--open')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = null
			}

		})

	})

	// Слайдер-галерея

	new Swiper('.gallery__slider', {
		slidesPerView: 1.5,
		spaceBetween: 15,
	
		pagination: {
			el: '.gallery__pagination',
			type: 'fraction',
		},
	
		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},

		// Аддаптив слайдера >= вьюпорта
		breakpoints: {

			601: {
				slidesPerView: 3,
			},

			801: {
				spaceBetween: 32,
			},

			1101: {
				slidesPerView: 4,
			}

		}
	
	});

	// Слайдер-отзывы

	new Swiper('.testimonials__slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
	
		navigation: {
			nextEl: '.testimonials__next',
			prevEl: '.testimonials__prev',
		},

		scrollbar: {
			el: '.testimonials__scrollbar',
			draggable: true,
		},

		// Аддаптив слайдера >= вьюпорта
		breakpoints: {

			901: {
				slidesPerView: 1.5,
			},

			1201: {
				slidesPerView: 2.1,
			}

		}

	});

	// Маска для телефона

	const telInputs = document.querySelectorAll('input[type="tel"]')
	const inputMask = new Inputmask ('+7 (999) 999-99-99')
	inputMask.mask(telInputs)


})()





