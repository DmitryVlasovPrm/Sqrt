function signs_count()
{
    let count = 0;
    let str = document.getElementById("accuracy").value;
    if (str != "")
    {
        let num = Number(str);
        if ((!num || num < 0 || !Number.isInteger(num)) && str != "0")
        {
            document.getElementById("output").style.color = "red";
            document.getElementById("output").innerHTML = "Введите верное количество знаков";
            return -1;
        }
        else
        {
            count = num;
            return count;
        }
    }
}

function sqrt()
{
    let signs = signs_count();
    if (signs == -1)
        return;

    let str = document.getElementById("input").value;
    if (str == "")
    {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Введите значение";
    }
    else
    {
        let num = Number(str);
        if (num || str == "0")
        {
            document.getElementById("output").style.color = "black";

            let sq;
            if (num < 0)
            {
                sq = "± " + String(Math.sqrt(Math.abs(num)).toFixed(signs)) + "i";
            }
            else
                sq = Math.sqrt(num).toFixed(signs);

            document.getElementById("output").innerHTML = String(sq);
        }
        else
        {
            document.getElementById("output").style.color = "red";
            document.getElementById("output").innerHTML = "Введите число";
        }
    }
}