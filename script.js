function Total(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chm").value);
    var sub5 = parseInt(document.getElementById("cmp").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
        alert("Please Enter Marks in range of 100");
    }
    else{
        var total= sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "English :"+sub1+"<br> Maths: "+sub2+"<br> Physics: "+sub3+"<br> Chemistry: "+sub4+"<br> Computer: "+sub5+"<br> Total Marks: "+total;
    }
}
function Average(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chm").value);
    var sub5 = parseInt(document.getElementById("cmp").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
        alert("Marks cannot be greater than 100");
    }
    else{
        var total= sub1 + sub2 + sub3 + sub4 + sub5;
        var avg=total/5;
        document.getElementById("avg").innerHTML="Average: "+avg;
    }
}
function Grade(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chm").value);
    var sub5 = parseInt(document.getElementById("cmp").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
        alert("Mark cannot be greater than 100");
    }
    else{
        var total= sub1 + sub2 + sub3 + sub4 + sub5;
        var avg=total/5;
        
        if(avg>=80 && avg<=100)
        {
            document.getElementById("grade").innerHTML="A1";
        }
        else if(avg>=70 && avg<=75)
        {
            document.getElementById("grade").innerHTML="B2";
        }
        else if(avg>=65 && avg<=70)
        {
            document.getElementById("grade").innerHTML="B3";
        }
        else if(avg>=50 && avg<=60)
        {
            document.getElementById("grade").innerHTML="C4";
        }
        else if(avg>=40 && avg<=50)
        {
            document.getElementById("grade").innerHTML="D5";
        }
        else {
            document.getElementById("grade").innerHTML="F9";
        }
    
    }
}