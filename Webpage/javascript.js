        // Page navigation
        document.addEventListener('DOMContentLoaded', function() {
            const pageLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
            const pages = document.querySelectorAll('.page');
            const hamburger = document.querySelector('.hamburger');
            const mobileNav = document.querySelector('.mobile-nav');
            
            // Hamburger menu functionality
            hamburger.addEventListener('click', function(e) {
                e.stopPropagation();
                mobileNav.classList.toggle('active');
                hamburger.innerHTML = mobileNav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Page navigation
            pageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetPage = this.getAttribute('data-page');
                    
                    // Hide all pages
                    pages.forEach(page => {
                        page.style.display = 'none';
                    });
                    
                    // Show target page
                    document.getElementById(targetPage).style.display = 'block';
                    
                    // Update active link
                    pageLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Close mobile nav if open
                    if (mobileNav.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            
            // Animate feature cards on scroll
            const featureCards = document.querySelectorAll('.feature-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            featureCards.forEach(card => {
                card.style.animationPlayState = 'paused';
                observer.observe(card);
            });
            
            // Close mobile nav when clicking outside
            document.addEventListener('click', function(e) {
                if (mobileNav.classList.contains('active') && 
                    !e.target.closest('.mobile-nav') && 
                    !e.target.closest('.hamburger')) {
                    mobileNav.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });