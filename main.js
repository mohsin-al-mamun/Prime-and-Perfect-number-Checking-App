let Num = document.getElementById("input");
let PrimeBtn = document.getElementById("prime");
let Oddbtn = document.getElementById("odd");
let Perfectbtn = document.getElementById("perfect");
let Result = document.getElementById("result");

function primefn(event){
        event.preventDefault();

        PrimeBtn.style.color= 'white';
        PrimeBtn.style.background= "rgba(236, 59, 15,0.6)";
        Oddbtn.style.background = "yellow";
        Oddbtn.style.color= 'black';
        Perfectbtn.style.background= "yellow";
        Perfectbtn.style.color= 'black';


        let factors_array = [];
        let num = +Num.value;
        if(num<1){Result.innerText= `The number must be greater than 1.` ;} 
        else{
            for (let i =1; i<=num; i++){
                if (num%i == 0){ factors_array.push(i)}
            }

           if (factors_array.length==1){
            Result.innerText= `It's one!!!!, 1 is neither a prime nor a composite!!` ;
           }else if (factors_array.length == 2){
            Result.innerText= `${num} is Prime!!!` ;
           }else if (factors_array.length>2){
            Result.innerText= `${num} is not prime  but  a composite number.` ;
           }else{
            Result.innerText= `${num} is not prime. It's a fraction number.` ;
           }
        }

       
}

function oddEvenfn(event){
    event.preventDefault();

    Oddbtn.style.color= 'white';
    Oddbtn.style.background= "rgba(236, 59, 15,0.6)";
    Perfectbtn.style.background= "yellow";
    Perfectbtn.style.color= 'black';
    PrimeBtn.style.background= "yellow";
    PrimeBtn.style.color= 'black';

    let num = +Num.value;
    if (num%2==0){
        Result.innerText= `${num} is an Even number.` ;
    }else if( num%2==1 || num%2== -1){
        Result.innerText= `${num} is an Odd number.`;
    } else{  Result.innerText= `${num}  is not inetger. So neither Even nor Odd !!`}
    
}

function perfectfn(event){
    event.preventDefault();

    Perfectbtn.style.color= 'white';
    Perfectbtn.style.background= "rgba(236, 59, 15,0.6)";
    Oddbtn.style.background = "yellow";
    Oddbtn.style.color= 'black';
    PrimeBtn.style.background= "yellow";
    PrimeBtn.style.color= 'black';

    let sum = 0;
    let num = +Num.value;
    if(num<=0){ Result.innerText = "The Number must be greater than zero. ";
}else { for(let i=1; i<num; i++){
    if (num%i ==0){ sum =sum+i}
}

  if (sum == num){ Result.innerText = `The number ${num} is a perfect number!!! `;
} else{
      Result.innerText = `The number ${num} is not  a perfect number!!! `;

  }  }
   
   
}

function inputfn(event){
   event.preventDefault();
    Oddbtn.style.background = "yellow";
    Oddbtn.style.color= 'black';
    PrimeBtn.style.background= "yellow";
    PrimeBtn.style.color= 'black';
    Perfectbtn.style.background= "yellow";
    Perfectbtn.style.color= 'black';
}


PrimeBtn.addEventListener("click",primefn);
Oddbtn.addEventListener("click",oddEvenfn);
Perfectbtn.addEventListener("click",perfectfn);
Num.addEventListener("click", inputfn)



















