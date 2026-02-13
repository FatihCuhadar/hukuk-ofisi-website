// ==================== MOBILE MENU TOGGLE ====================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

// Mobil menü açma/kapama
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Body scroll'u engelle
        if (mainNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Menü linklerine tıklandığında menüyü kapat (mobil)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && mainNav) {
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });
});

// Menü dışına tıklandığında kapat
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && mainNav) {
        if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-toggle')) {
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }
});

// ==================== HEADER SCROLL EFFECT ====================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Scroll edilince header'a gölge ekle
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ==================== SMOOTH SCROLL ====================
// Sayfa içi linklere yumuşak kaydırma ekle
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================
// IntersectionObserver ile elementleri canlandır
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Bir kez canlandıktan sonra observer'ı durdur
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate edilecek elementleri seç
const animateElements = document.querySelectorAll(
    '.why-card, .service-card, .section-header'
);

animateElements.forEach((el, index) => {
    // Her elemana sırayla animasyon gecikmesi ekle
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${index * 0.1}s`;
    
    observer.observe(el);
});

// Animasyon sınıfı
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// ==================== SCROLL TO TOP BUTTON ====================
// Scroll to top butonu oluştur
const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

// Scroll to top butonunu göster/gizle
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top butonu tıklama
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== ACTIVE PAGE HIGHLIGHT ====================
// Aktif sayfayı menüde vurgula
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// ==================== FORM VALIDATION (Eğer form varsa) ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form verilerini al
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData);
        
        // Basit validasyon
        let isValid = true;
        const inputs = contactForm.querySelectorAll('.form-input');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#dc2626';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            // Başarılı mesajı göster
            alert('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
            
            // Formu temizle
            contactForm.reset();
            
            // Gerçek projede burada AJAX ile form gönderimi yapılabilir
            console.log('Form verileri:', formValues);
        } else {
            alert('Lütfen tüm alanları doldurunuz.');
        }
    });
    
    // Input focusunda border rengini sıfırla
    const formInputs = contactForm.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '';
        });
    });
}

// ==================== PARALLAX EFFECT (Hero Section) ====================
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        // Sadece hero görünümdeyken parallax uygula
        if (scrolled < heroHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    // Sayfa yüklendiğinde fade-in efekti
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Hero animasyonlarını tetikle
    const heroElements = document.querySelectorAll('.fadeInUp');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
});

// ==================== WINDOW RESIZE HANDLER ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Mobil menü açıkken ekran büyütülürse menüyü kapat
        if (window.innerWidth > 768 && mainNav) {
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }, 250);
});

// ==================== PRELOADER (Optional) ====================
// Sayfa yüklenirken preloader göstermek isterseniz
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 500);
    }
});

// ==================== CONSOLE LOGS ====================
console.log('%c🏛️ Hukuk & Danışmanlık Ofisi', 'color: #c5a059; font-size: 24px; font-weight: bold;');
console.log('%cModern, Profesyonel ve Kurumsal Web Sitesi', 'color: #0f172a; font-size: 16px;');
console.log('%cGeliştirici: Frontend Developer', 'color: #6b7280; font-size: 12px;');

// ==================== UTILITY FUNCTIONS ====================
// Debounce fonksiyonu (performans için)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle fonksiyonu (scroll events için)
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Örnek kullanım: Scroll event'i optimize et
const optimizedScroll = throttle(() => {
    // Scroll işlemleri buraya
}, 100);

window.addEventListener('scroll', optimizedScroll);

// ==================== ACCESSIBILITY ====================
// Klavye navigasyonu için
document.addEventListener('keydown', (e) => {
    // ESC tuşuyla mobil menüyü kapat
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
        document.body.style.overflow = '';
    }
});

// Focus trap for mobile menu (accessibility)
const focusableElements = 'a[href], button, textarea, input, select';

if (mainNav) {
    const firstFocusable = mainNav.querySelectorAll(focusableElements)[0];
    const focusableContent = mainNav.querySelectorAll(focusableElements);
    const lastFocusable = focusableContent[focusableContent.length - 1];
    
    document.addEventListener('keydown', (e) => {
        if (mainNav.classList.contains('active')) {
            const isTabPressed = e.key === 'Tab';
            
            if (!isTabPressed) return;
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}
