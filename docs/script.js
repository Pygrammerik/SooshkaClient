// This script is intended to fetch the latest release from GitHub.
// You will need to replace 'USER/REPO' with your actual GitHub username and repository name.

document.addEventListener('DOMContentLoaded', () => {
    // Download button logic
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        // Use the provided GitHub release link
        downloadBtn.href = 'https://github.com/Pygrammerik/SooshkaClient/releases/tag/Release';
    }

    // Theme switcher logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    };

    // Check for saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}); 