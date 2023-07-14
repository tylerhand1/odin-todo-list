export default function setFooter() {
    const footerText = document.querySelector('#footer-text');

    footerText.textContent = `Copyright © ${(new Date()).getFullYear()} tylerhand1`;
}