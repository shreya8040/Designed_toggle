    function changedark()
    {
        document.body.style.backgroundColor="black";
    }
    function changelight()
    {
        document.body.style.backgroundColor="white";
    }
    var i=0;
    function checkDark()
    {
        
           if(i==0)
           {
            changedark();
              i=1;
           }
        
           else
           {
            changelight();
            i=0;
           }
         
    }


