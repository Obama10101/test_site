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