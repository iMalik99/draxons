
        // Smooth scrolling function (improved)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = document.querySelector('header').offsetHeight; // Account for fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navLinks = document.getElementById('navLinks');
                    const hamburger = document.getElementById('hamburger');
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                }
            });
        });

        // Function for generic scroll to element by ID
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // FAQ Toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');

            faqQuestions.forEach((question, index) => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling; // The .faq-answer div
                    const icon = question.querySelector('i');

                    // Close all other active FAQs first
                    faqQuestions.forEach((q, i) => {
                        if (q !== question && q.classList.contains('active')) {
                            q.classList.remove('active');
                            q.nextElementSibling.classList.remove('active');
                            q.querySelector('i').classList.remove('active');
                        }
                    });

                    // Toggle current FAQ
                    question.classList.toggle('active');
                    answer.classList.toggle('active');
                    icon.classList.toggle('active');
                });
            });

            // Header scroll effect
            const header = document.querySelector('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile Navigation Toggle
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });

            // Animate elements on scroll using Intersection Observer
            const animateElements = document.querySelectorAll('.service-card, .feature-item, .team-member');

            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% of element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            }, observerOptions);

            animateElements.forEach(element => {
                observer.observe(element);
            });

            // Initial animation for hero content (already uses @keyframes)
            // No need for JS here as it's purely CSS animation on load
        });
