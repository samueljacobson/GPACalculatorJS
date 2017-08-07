function calculateGPA() {
    var grade1 = document.getElementById("class1").value.toUpperCase();
    var grade2 = document.getElementById("class2").value.toUpperCase();
    var grade3 = document.getElementById("class3").value.toUpperCase();
    var grade4 = document.getElementById("class4").value.toUpperCase();
    var grade5 = document.getElementById("class5").value.toUpperCase();

    var grades = [grade1, grade2, grade3, grade4, grade5];   //create array
    var totalPoints = 0;
    for(var i = 0; i < grades.length; i++) {
        if (grades[i] == "A+") {
            totalPoints += 4.3;
        }
        else if (grades[i] == "A") {
            totalPoints += 4;
        }
        else if (grades[i] == "A-") {
            totalPoints += 3.7;
        }
        else if (grades[i] == "B+") {
            totalPoints += 3.3;
        }
        else if (grades[i] == "B") {
            totalPoints += 3.0;
        }
        else if (grades[i] == "B-") {
            totalPoints += 2.7;
        }
        else if (grades[i] == "C+") {
            totalPoints += 2.3;
        }
        else if (grades[i] == "C") {
            totalPoints += 2;
        }
        else if (grades[i] == "C-") {
            totalPoints += 1.7;
        }
        else if (grades[i] == "D+") {
            totalPoints += 1.3;
        }
        else if (grades[i] == "D") {
            totalPoints += 1;
        }
        else if (grades[i] == "D-") {
            totalPoints += 0.7;
        }
        else if (grades[i] == "F") {
            totalPoints += 0;
        }
        else {
            alert("Invalid grade");
        }
        
        //switch (grades[i]) {
        //    case 'A':
        //        totalPoints += 4;
        //        break;
        //    case 'B':
        //        totalPoints += 3;
        //        break;
        //    case 'C':
        //        totalPoints += 2;
        //        break;
        //    case 'D':
        //        totalPoints += 1;
        //        break;
        //    case 'F':
        //        totalPoints += 0;
        //        break;
        //    default:
        //        alert("Invalid grade");
        //        break;

    }
    var avg = totalPoints / 5;
    document.getElementById("GPA").innerHTML = "GPA: " + avg;
}