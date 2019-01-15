function convertToNumber(x){

    var array = x.split(",");

    for(var i = 0; i <array.length; i++){
        array[i] = parseInt(array[i])
    }
    return array;
}

function averageArray(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i]
    }
    return sum / array.length;
}

function calculate(){
    var totalWeight = 0.01 * (parseInt(document.getElementById("homeworkWeight").value) + parseInt(document.getElementById("classworkWeight").value) + parseInt(document.getElementById("assessmentWeight").value) + parseInt(document.getElementById("participationWeight").value));

    var hp = convertToNumber(document.getElementById("homeworkPoints").value);
    var cp = convertToNumber(document.getElementById("classworkPoints").value);
    var ap = convertToNumber(document.getElementById("assessmentPoints").value);
    var pp = convertToNumber(document.getElementById("participationPoints").value);

    var ha = averageArray(hp) * (parseInt(document.getElementById("homeworkWeight").value) * .01);
    var ca = averageArray(cp) * (parseInt(document.getElementById("classworkWeight").value) * .01);
    var aa = averageArray(ap) * (parseInt(document.getElementById("assessmentWeight").value) * .01);
    var pa = averageArray(pp) * (parseInt(document.getElementById("participationWeight").value) * .01);

    var currentGrade = (ha + ca + aa + pa) / totalWeight;

    document.getElementById("currentGrade").innerHTML = currentGrade + "%";
    document.getElementById("totalWeight").innerHTML = totalWeight * 100 + "%";

    averageColor( averageArray(hp), "homework");
    averageColor(averageArray(cp), "classwork");
    averageColor(averageArray(ap),"assessment");
    averageColor(averageArray(pp),"participation");

    return currentGrade;
}

function calculateFinal(){
    var currentGrade = calculate();
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var gradeDesired = parseInt(document.getElementById("gradeDesired").value);
    var totalWeight = 1 - (finalWeight/100);
    var weightedCurrent = currentGrade * totalWeight;
    var gradeNeeded = (gradeDesired - weightedCurrent) / (finalWeight / 100);
    document.getElementById("gradeNeeded").innerHTML = gradeNeeded.toString().slice(0,5) + "% required to get" + gradeDesired + "%";

}

function averageColor (average, element){
    if(average >= 90){
        document.getElementById(element).style.background = "green";
    }
    if(average >= 80 && average < 90){
        document.getElementById(element).style.background = "blue";
    }
    if(average >= 70 && average < 80){
        document.getElementById(element).style.background = "yellow";
    }
    if(average >= 60 && average < 70){
        document.getElementById(element).style.background = "orange";
    }
//     if(average < 60){
//         document.getElementById(element).style.background = "red";
     //}
}