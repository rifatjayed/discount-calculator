

   

    const myButton= document.querySelector(".btn");

    myButton.addEventListener('click',  () => {
    const bill = Number(document.querySelector("#totalbill").value) ;
    const tip=  Number(document.querySelector("#tipInput").value);
    const tipAmmount=document.querySelector("#tipammount");
    const totalBillWithTip= document.querySelector("#totalBillWithTip");
    const results=document.querySelector("#results");
    
   


         // 	Calculation
    const tipValue= bill* (tip/100);
    const finalBill= bill - tipValue;  
     tipAmmount.value= tipValue.toFixed(2);
    totalBillWithTip.value= finalBill.toFixed(2);
  
    // 	Showing Results
  
    results.style.display= 'block';
    });

   



