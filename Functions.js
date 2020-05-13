function error(cur_type) {
    let str;
    if (cur_type === 1)
        str = "Введите верное количество знаков";
    if (cur_type === 2)
        str = "Введите значение";
    if (cur_type === 3)
        str = "Введите число";

    document.getElementById("output1").style.color = "red";
    document.getElementById("output1").innerHTML = str;
    document.getElementById("output2").innerHTML = '';
}
//Ограничение на точность
function signs_count() {
    let str = document.getElementById("accuracy").value;
    if (str !== "") {
        let num = Number(str);
        if ((!num || num < 0 || !Number.isInteger(num)) && num !== 0) {
            error(1);
            return -1;
        } else {
            if (num > 25) {
                num = 25;
                document.getElementById("accuracy").value = "25";
            }
            return num;
        }
    }
}
//Получение аналитического решения
function get_analytical_root(x) {
    if (x === 0 || x === 1)
        return x;
    if (Number.isInteger(x) && x >= 0) {
        let outside_root = 1;
        let inside_root = x;
        let d = 2
        while (d * d <= inside_root) {
            if (inside_root % (d * d) === 0) {
                inside_root = inside_root / (d * d)
                outside_root = outside_root * d
            } else
                d = d + 1
        }
        if (outside_root === 1)
            return "√" + String(inside_root);
        else if (inside_root === 1)
            return String(outside_root);
        else
            return String(outside_root) + "√" + String(inside_root);
    } else
        return "";
}
//Получение квадратного корня из числа
function sqrt() {
    let signs = signs_count();
    if (signs === -1)
        return;

    let str = document.getElementById("input").value;
    if (str === "")
        error(2);
    else {
        //let num = Number(str);
        require(['math.js'], function (math) {
            //let Complex = complex_module;
            let num;
            try {
                num = math.complex(str);
            } catch (err) {
                error(3);
                return;
            }

            document.getElementById("output1").style.color = "black";

            /*let sq;
            if (num < 0)
                sq = "± " + String(Math.sqrt(Math.abs(num)).toFixed(signs)) + "i";
            else
                sq = Math.sqrt(num).toFixed(signs);*/

            let ans;
            if (math.isZero(num.im)) {
                if (num.re < 0) {
                    ans = "± " + String(Math.sqrt(Math.abs(num.re)).toFixed(signs)) + "i";
                } else {
                    ans = String(Math.sqrt(num.re).toFixed(signs));
                }
            } else {
                let cur_real = num.sqrt().re;
                let cur_im = num.sqrt().im;
                ans = "± " + String(cur_real.toFixed(signs))
                    + " ± " + String(cur_im.toFixed(signs)) + "i";
            }

            document.getElementById("output1").innerHTML = ans;
            if (math.isZero(num.im)) {
                document.getElementById("output2").innerHTML = get_analytical_root(num.re);
            } else {
                document.getElementById("output2").innerHTML = "";
            }
        });

    }
}