import './style.css'

// DOM 元素选取
const timeDisplay = document.getElementById('time-display')
const focusInput = document.getElementById('focus-input')
const focusText = document.getElementById('focus-text')
const clearFocusBtn = document.getElementById('clear-focus')

// 1. 实时时钟功能
function updateTime() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`
}
setInterval(updateTime, 1000)
updateTime() // 立即执行一次，防止刷新时有1秒延迟

// 2. 核心目标功能（LocalStorage）
function checkFocus() {
  const saveFocus = localStorage.getItem('myFocus')
  if (saveFocus) {
    focusInput.classList.add('hidden')
    focusText.textContent = saveFocus
    focusText.classList.remove('hidden')
    clearFocusBtn.classList.remove('hidden')
  } else {
    focusInput.classList.remove('hidden')
    focusInput.value = ''
    focusText.classList.add('hidden')
    clearFocusBtn.classList.add('hidden')
  }
}

// 监听回车键保存目标
focusInput.addEventListener('keypress', e => {
  if (e.key === 'Enter' && focusInput.value.trim() !== '') {
    localStorage.setItem('myFocus', focusInput.value.trim())
    checkFocus()
  }
})

// 清除目标
clearFocusBtn.addEventListener('click', () => {
  localStorage.removeItem('myFocus')
  checkFocus()
})

// 初始化检查
checkFocus()