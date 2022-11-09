

  function van(){
    let Calc= {
        sum(){
           return this.a + this.b 
        },
  
        sub(){
          return this.a - this.b 
        },
  
        division(){
          return this.a / this.b
        },
      read(){
          this.a= +prompt('Put a Number?',0);
         this.b =+prompt('Put another number?',0);
           }
  
      }
     
  
    Calc.read();
    alert(Calc.sum() );
    alert(Calc.sub()) ;
    alert(Calc.division());
  

  }

