function $(value){
    return document.getElementById(value);
}

var canvas = document.getElementById("myChart");
var ctx = document.getElementById("myChart").getContext("2d");
var myChart;
var db = false;
function helloworld(){
    if(db){
        $("L_pg").removeChild($("myChart"));
        $("L_pg").innerHTML = '<canvas id="myChart" width="1230" height="700">';
        canvas = $("myChart");
    }
    db = true;
    var chartType;
    if($("chooseoption").value=="선 그래프"){
        chooseoption = "line";
    }
    else if($("chooseoption").value=="라인 그래프"){
        chooseoption = "bar";
    }
    else if($("chooseoption").value=="원 그래프"){
        chooseoption = "pie";
    }
    myChart = new Chart(canvas, {
        type: chooseoption,
        data: {
            labels: $("labelsdata").value.split(","),
            datasets: [{
                label: $("label").value,
                data: $("chartdata").value.split(","),
                backgroundColor: $("color2").value.split(","),
                borderColor: $("color").value.split(","),
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    });
}