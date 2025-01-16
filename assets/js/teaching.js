function trackDownload(label) {
    if (typeof gtag === 'function') {
        gtag('event', 'download', {
            'event_category': 'Slides',
            'event_label': label,
        });
    } else {
        console.log(`Download tracked: ${label}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Teaching page loaded, tracking enabled.');
});