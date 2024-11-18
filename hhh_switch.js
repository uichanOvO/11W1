let obj = paeseInt(prompt("상품의 개수를 입력하세요"));
document.write("상품: " + obj + "개<hr>");
obj = Math.floor(obj / 10);
switch (obj) {
    case 2:
        document.write("상품권 + 주차권");
        break;
    case 1:
        document.write("추첨권 + 주차권");
        break
    default:
        document.write("주차권");
}