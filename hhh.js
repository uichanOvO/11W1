function Number_hhh() {
    let a = document.getElementById('input A');
    let b = document.getElementById('input B');

    a = Number(a);
    b = Number(b);

    if (a != b) {
        document.getElementById('result').innerText = "True";
    } else {
        document.getElementById('result').innerText = "False";
    }
}