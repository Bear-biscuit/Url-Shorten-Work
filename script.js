// js文件
// 获取元素
var linkInput = document.getElementById("longURL");
var generateButton = document.getElementById("generate-button");
var qrcode = document.getElementById("qrcode");
function isValidURL(url) {
    // 匹配常见的 URL 格式（可能不涵盖所有情况，但适用于大多数常见情况）
    var pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(url);
}
// 创建一个QRCode对象
var qr = new QRCode(qrcode, {
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// 为按钮添加点击事件
generateButton.addEventListener("click", function () {
    // 获取输入的链接
    var link = linkInput.value;
    // 检查链接是否有效
    var input = document.getElementById("longURL").value; // 假设文本框的id为myInput
    if (isValidURL(input)) {
        if (link) {
            // 生成二维码
            qr.makeCode(link);
        } else {
            // 清空二维码
            qr.clear();
            // 提示用户输入链接
            alert("请输入链接");
        }
    } else {
        alert("输入的链接不合法");
    }
});
