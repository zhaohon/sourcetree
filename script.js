// 计数器功能
let count = 0;

// 获取DOM元素
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// 更新显示
function updateDisplay() {
  countDisplay.textContent = count;

  // 添加颜色变化效果
  if (count > 0) {
    countDisplay.style.color = "#28a745";
  } else if (count < 0) {
    countDisplay.style.color = "#dc3545";
  } else {
    countDisplay.style.color = "#667eea";
  }
}

// 增加计数
function increment() {
  count++;
  updateDisplay();
  console.log("计数增加到:", count);
}

// 减少计数
function decrement() {
  count--;
  updateDisplay();
  console.log("计数减少到:", count);
}

// 重置计数
function reset() {
  count = 0;
  updateDisplay();
  console.log("计数已重置");
}

// 添加事件监听器
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

// 页面加载完成提示
document.addEventListener("DOMContentLoaded", function () {
  console.log("页面已加载完成！");
  console.log("欢迎来到 Git 练习项目！");
  updateDisplay();
});

// 键盘快捷键支持
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      increment();
      break;
    case "ArrowDown":
      decrement();
      break;
    case "r":
    case "R":
      reset();
      break;
  }
});

console.log("提示: 您可以使用上下箭头键控制计数，按 R 键重置！");
