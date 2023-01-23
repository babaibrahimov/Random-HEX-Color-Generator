const generateBtn = document.querySelector('.generate')
const boxColor = document.querySelector('.box-color')
const boxTitle = document.querySelector('.box-title')
const box = document.querySelector('.box')
const copyright = document.querySelector('.copyright a')


const generatePalette = () => {
    let randomHex = Math.floor(Math.random() * 0xFFFFFF).toString(16)
    randomHex = `#${randomHex.padStart(6, "0")}`;

    boxColor.style.background = randomHex
    boxTitle.innerHTML = randomHex
    copyright.style.color = randomHex
}

generateBtn.addEventListener('click', generatePalette)

box.addEventListener('click', () => {
    const content = document.querySelector('.box-title').textContent;
    navigator.clipboard.writeText(content);
    boxTitle.innerHTML = "Copied!"
    setTimeout(() => boxTitle.innerHTML = content, 1000)
})