<<<<<<< HEAD
```javascript
// Live Clock Animation
const updateClock = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
  const clockElement = document.getElementById('live-clock');
  
  if (clockElement) {
    clockElement.textContent = timeString;
    clockElement.classList.add('pulse');
    setTimeout(() => clockElement.classList.remove('pulse'), 500);
  }
};

// Initialize and start clock
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
  
  // Mobile Navigation Toggle
  const menuButton = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuButton.setAttribute('aria-expanded', 
        menuButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !menuButton.contains(e.target)) {
        navMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
```

This code:
1. Creates an animated clock that updates every second with a subtle pulse effect
2. Implements a mobile menu toggle with accessibility support
3. Automatically closes the menu when clicking outside
4. Uses clean event handling with proper DOM content loading checks
=======
# Minimal JavaScript for Responsive Mobile Navigation Toggle

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Get the menu button and navigation element
  const menuButton = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  // Add click event listener to the button
  menuButton.addEventListener('click', function() {
    // Toggle the 'active' class on the navigation menu
    navMenu.classList.toggle('active');
    
    // Update aria-expanded attribute for accessibility
    const isExpanded = navMenu.classList.contains('active');
    menuButton.setAttribute('aria-expanded', isExpanded);
  });
});
```

## HTML Structure (for reference)

```html
<button id="menu-toggle" aria-expanded="false" aria-label="Toggle navigation menu">
  <span class="menu-icon"></span>
</button>

<nav id="nav-menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

## CSS (for reference)

```css
/* Basic styling for the menu */
#nav-menu {
  display: none;
}

#nav-menu.active {
  display: block;
}

/* For larger screens */
@media (min-width: 768px) {
  #menu-toggle {
    display: none;
  }
  
  #nav-menu {
    display: block;
  }
}
```

This solution includes accessibility features and is designed to work with a simple HTML/CSS structure. The JavaScript toggles the visibility of the navigation menu when the button is clicked.
>>>>>>> 8c6dd297a5d646b9c57aa382a00708c4da29df97
