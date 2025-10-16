// Initialize Vue and Vuetify
const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1a237e',
          secondary: '#ff8f00',
          accent: '#9c27b0',
        }
      }
    }
  }
});

const app = createApp({
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    // Add scroll event listener for animations
    window.addEventListener('scroll', this.handleScroll);
    
    // Add animation classes to elements
    this.animateOnScroll();
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
      this.animateOnScroll();
    },
    animateOnScroll() {
      // Select elements to animate
      const elements = document.querySelectorAll('.feature-card, .text-h4, .download-btn');
      
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('fade-in');
        }
      });
    }
  }
});

app.use(vuetify).mount('#app');