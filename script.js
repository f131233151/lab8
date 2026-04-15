// 设定一个计数器，用来给生成的按钮编号
var count = 1;

function addfunction() {
  // 1. 创建 BUTTON 元素
  var btn = document.createElement("BUTTON");
  
  // 2. 设定按钮文字，使用 Template Literal (反引号) 加入计数
  // 例如: CLICK ME (1)
  btn.innerHTML = `CLICK ME (${count})`;
  
  // 3. 设定 ID，例如: btn_1, btn_2... 然后 count 加 1
  btn.setAttribute("id", "btn_" + count++);
  
  // 4. 设定样式 Class，使用 Bootstrap 的红色边框按钮样式
  btn.setAttribute("class", "btn btn-outline-danger");
  
  // 5. 将按钮加入 body 中
  document.body.appendChild(btn);
}

function delfunction() {
  // 1. 先将 count 减 1 (例如从 3 变 2)，然后找到对应的 ID (btn_2)
  // 注意：这里使用 --count (先减后取值)
  var targetId = "btn_" + --count;
  var btn = document.getElementById(targetId);
  
  // 2. 如果找得到这个按钮，就把它删除
  if (btn) {
    document.body.removeChild(btn);
  }
}