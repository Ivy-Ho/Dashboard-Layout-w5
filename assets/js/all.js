"use strict";

(function ($) {
  $("#js-drop").on("click", function () {
    // 箭頭icon翻轉
    $("#js-drop").toggleClass("active"); // 顯示下方按鈕列

    $(".js-buttonGroup").toggleClass("active");
  });
})($);
"use strict";

$(document).ready(function () {
  console.log('Hello Bootstrap4');
});
"use strict";

// // 顯示管理者回覆區
document.getElementById('btnShowReply').onclick = function displayManagerReply() {
  document.querySelector('.manager-reply').classList.add('show');
}; // // 隱藏管理者回覆區


document.getElementById('btnHideReply').onclick = function hideManagerReply() {
  document.querySelector('.manager-reply').classList.remove('show');
};
//# sourceMappingURL=all.js.map
