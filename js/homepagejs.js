function scrollToDiv() {
    const targetDiv = document.querySelector('.interactive-map');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}
document.querySelector('.exp').addEventListener('click', scrollToDiv);