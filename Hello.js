function Hello() {
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;

    a = Number(a);
    b = Number(b);

    if(a-b>0) {
        document.getElementById('result').innerText = "A에서 B를 배면 0보다 큼";
    }
    else if(a-b<0){
        document.getElementById('result').innerText = "A에서 B를 빼면 0보다 작음.";
    }
    else{
        document.getElementById('result').innerText = "A에서 B를 빼면 0임;;";

    }
}