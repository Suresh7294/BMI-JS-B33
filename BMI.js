function getbmi(){

    var w=parseInt(document.getElementById("weight").value);
    var hei=parseInt(document.getElementById("height").value);
    let   h= hei / 100;

    if (!w || !h || h <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height.";
        return;
      }

    

   const bmi= w / (h * h);

   let message = "";


    if(bmi<16){
      message="you are Severely Underweigt";  
    }
    else if (bmi<=18.4){
        message="you are underweight";
    }
    else if(bmi<=24.9){
        message="you are Normal";
    }
    else if(bmi<=29.9){
        message="you have Overweight";
    }
    else if(bmi<=34.9){
        message="you have obesity";
    }
    else if(bmi<=39.9){
        message="you have Severly Obesity";   
    }
    else{
        message="you have Morbidly Obesity";
    }

    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}. ${message}`;
}