function error(cur_type)
{
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

function signs_count()
{
    let str = document.getElementById("accuracy").value;
    if (str !== "")
    {
        let num = Number(str);
        if ((!num || num < 0 || !Number.isInteger(num)) && num !== 0 )
        {
            error(1);
            return -1;
        }
        else
            return num;
    }
}

function sqrt()
{
    let signs = signs_count();
    if (signs === -1)
        return;

    let str = document.getElementById("input").value;
    if (str === "")
        error(2);
    else
    {
        let num = Number(str);
        if (num || str === "0")
        {
            document.getElementById("output1").style.color = "black";

            let sq;
            if (num < 0)
                sq = "± " + String(Math.sqrt(Math.abs(num)).toFixed(signs)) + "i";
            else
                sq = Math.sqrt(num).toFixed(signs);

            document.getElementById("output1").innerHTML = String(sq);
            document.getElementById("output2").innerHTML = String(sq);
        }
        else
            error(3);
    }
}