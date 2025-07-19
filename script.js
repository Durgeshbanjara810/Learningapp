// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show success message
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Newsletter Subscription
const newsletterButton = document.querySelector('.newsletter-button');
if (newsletterButton) {
    newsletterButton.addEventListener('click', function() {
        showNotification('Thank you for subscribing to our newsletter!', 'success');
    });
}

// Course Enrollment
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const courseName = this.closest('.course-card').querySelector('h3').textContent;
        showNotification(`Successfully enrolled in ${courseName}!`, 'success');
    });
});

// Tutorial Start
document.querySelectorAll('.start-tutorial-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tutorialName = this.closest('.tutorial-card').querySelector('h3').textContent;
        showNotification(`Starting ${tutorialName}...`, 'info');
    });
});

// Language Learning Buttons
document.querySelectorAll('.learn-btn').forEach(button => {
    button.addEventListener('click', function() {
        const languageName = this.closest('.language-card').querySelector('h3').textContent;
        showNotification(`Starting ${languageName} course...`, 'info');
    });
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#e91e63'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.language-card, .course-card, .tutorial-card, .blog-post, .team-member, .feature-item, .category-card, .faq-item, .path-category');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            showNotification(`Searching for: "${searchTerm}"`, 'info');
            // Here you would typically implement actual search functionality
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Course Card Hover Effects
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Tutorial Card Hover Effects
document.querySelectorAll('.tutorial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Blog Post Hover Effects
document.querySelectorAll('.blog-post').forEach(post => {
    post.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
    });
    
    post.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Language Card Hover Effects
document.querySelectorAll('.language-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Category Card Click Effects
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        showNotification(`Browsing ${categoryName} tutorials...`, 'info');
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading styles
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: 'Loading CodeLearn...';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
            color: #e91e63;
            z-index: 10001;
        }
    `;
    document.head.appendChild(style);
});

// Button Click Effects
document.querySelectorAll('button, .cta-button, .submit-button, .enroll-btn, .learn-btn, .start-tutorial-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Stats Counter Animation
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item h3');
    
    statItems.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const suffix = stat.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 20);
    });
}

// Trigger stats animation when stats section is visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    statsObserver.observe(statsSection);
}

// Course Filter Functionality (if needed)
function filterCourses(level) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const courseLevel = card.querySelector('.course-level').textContent.toLowerCase();
        
        if (level === 'all' || courseLevel === level.toLowerCase()) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Tutorial Progress Tracking
function trackTutorialProgress(tutorialId, progress) {
    localStorage.setItem(`tutorial_${tutorialId}`, progress);
    showNotification(`Progress saved: ${progress}%`, 'success');
}

// Course Bookmark Functionality
function toggleBookmark(courseId) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const index = bookmarks.indexOf(courseId);
    
    if (index > -1) {
        bookmarks.splice(index, 1);
        showNotification('Removed from bookmarks', 'info');
    } else {
        bookmarks.push(courseId);
        showNotification('Added to bookmarks', 'success');
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// Dark Mode Toggle (if needed)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    showNotification(`${isDarkMode ? 'Dark' : 'Light'} mode enabled`, 'info');
}

// Initialize dark mode from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Course Rating System
function rateCourse(courseId, rating) {
    const ratings = JSON.parse(localStorage.getItem('courseRatings') || '{}');
    ratings[courseId] = rating;
    localStorage.setItem('courseRatings', JSON.stringify(ratings));
    
    showNotification(`Thank you for rating this course: ${rating} stars!`, 'success');
}

// Learning Path Recommendation
function getRecommendedPath(interests) {
    const recommendations = {
        'web': ['HTML & CSS', 'JavaScript', 'React', 'Node.js'],
        'mobile': ['Java', 'React Native', 'Flutter'],
        'data': ['Python', 'Machine Learning', 'Data Analysis'],
        'backend': ['Python', 'Java', 'Node.js', 'Databases']
    };
    
    return recommendations[interests] || recommendations['web'];
}

// Certificate Generation
function generateCertificate(courseName, studentName) {
    showNotification(`Certificate generated for ${courseName}!`, 'success');
    // Here you would typically generate and download the certificate
}

// Course Completion Tracking
function markCourseComplete(courseId) {
    const completedCourses = JSON.parse(localStorage.getItem('completedCourses') || '[]');
    if (!completedCourses.includes(courseId)) {
        completedCourses.push(courseId);
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        showNotification('Congratulations! Course completed!', 'success');
    }
}

// Study Streak Tracking
function updateStudyStreak() {
    const today = new Date().toDateString();
    const lastStudyDate = localStorage.getItem('lastStudyDate');
    let streak = parseInt(localStorage.getItem('studyStreak') || '0');
    
    if (lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastStudyDate === yesterday.toDateString()) {
            streak++;
        } else {
            streak = 1;
        }
        
        localStorage.setItem('studyStreak', streak);
        localStorage.setItem('lastStudyDate', today);
        
        if (streak > 1) {
            showNotification(`Study streak: ${streak} days! Keep it up!`, 'success');
        }
    }
}

// Initialize study streak on page load
document.addEventListener('DOMContentLoaded', updateStudyStreak);