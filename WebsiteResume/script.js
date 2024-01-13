// Skills Section Display Toggle
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
        // Toggle display of .skill-description element
        const description = skill.querySelector('.skill-description');
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
    });
});

// Menu Opened State Toggle
document.querySelector('.menu').addEventListener('click', function() {
    this.classList.toggle('expanded');
});

// Burger Menu Toggle
document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('change');
    document.querySelector('.menu-items').classList.toggle('active');
});

// Display Sections
document.querySelectorAll('.menu-items a').forEach(item => {
    item.addEventListener('click', function() {
        // Get ID of section to show
        var sectionToShow = this.getAttribute('href').replace('#', '');

        // Hide all other sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show clicked section
        document.getElementById(sectionToShow).classList.add('active');

        // Hide menu and revert burger menu to original state
        document.querySelector('.menu-items').classList.remove('active');
        document.querySelector('.burger-menu').classList.remove('change');
    });
});

