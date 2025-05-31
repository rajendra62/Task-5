function checkCompatibility() {
    const tests = {
        flexbox: 'flex' in document.documentElement.style,
        grid: 'grid' in document.documentElement.style,
        fetch: 'fetch' in window
    };

    if (!tests.flexbox) {
        document.body.classList.add('no-flexbox');
    }
}

document.addEventListener('DOMContentLoaded', checkCompatibility);