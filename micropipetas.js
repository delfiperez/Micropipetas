function micropipetas(){
    var vol = document.getElementById("vol").value;

    if (vol == 1000){
      console.log("Usar una p1000")
      console.log("Recuerde COLOCAR el tip y utilizar el AZUL")
      console.log()
      document.getElementById("pipeta").innerHTML = 1000;
      document.getElementById("n1").innerHTML = 1;
      document.getElementById("n2").innerHTML = 0;
      document.getElementById("n3").innerHTML = 0;
      document.getElementById("nota").innerHTML = 0;
      document.getElementById("gato").style.display="none";
      document.getElementById("gato2").style.display="none";
      console.log()

    } else if (vol <= 999 && vol >= 201) {

      console.log("Usar una p1000")
      console.log("Recuerde COLOCAR el tip y utilizar el AZUL")
      console.log()

      let digito;
      var array=[];
      var i=0;

      while (vol!=0) {

        digito=vol%10;
        vol=vol/10;
        array[i] = Math.trunc(digito);
        i++;

      }

      var k=2;
              
      while (k!=-1) {
          console.log(array[k]);
          k--;
      }

      document.getElementById("pipeta").innerHTML = 1000;
      document.getElementById("n1").innerHTML = 0;
      document.getElementById("n2").innerHTML = array[2];
      document.getElementById("n3").innerHTML = array[1];
      document.getElementById("nota").innerHTML = array[0];
      document.getElementById("gato").style.display="block";
      document.getElementById("gato2").style.display="block";
      document.getElementById("rayita").innerHTML = 2;
     
      console.log()
      console.log("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

    } else if (vol == 200) {
      console.log("Usar una p200")
      console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      console.log()
      document.getElementById("pipeta").innerHTML = 200;
      document.getElementById("n1").innerHTML = 2;
      document.getElementById("n2").innerHTML = 0;
      document.getElementById("n3").innerHTML = 0;
      document.getElementById("nota").innerHTML = 0;
      document.getElementById("gato").style.display="none";
      document.getElementById("gato2").style.display="none";
      console.log()

    } else if (vol <= 199.9 && vol >= 100.1) {

        console.log("Usar una p200")
        console.log("Recuerde COLOCAR el tip y utilizar el AZUL")
        console.log()
  
        let digito;
        var array=[];
        var i=0;

        vol=vol*10;
  
        while (vol!=0) {
  
          digito=vol%10;
          vol=vol/10;
          array[i] = Math.trunc(digito);
          i++;
  
        }
  
        var k=3;
                
        while (k!=-1) {
            console.log(array[k]);
            k--;
        }
        
        document.getElementById("pipeta").innerHTML = 200;
        document.getElementById("n1").innerHTML = array[3];
        document.getElementById("n2").innerHTML = array[2];
        document.getElementById("n3").innerHTML = array[1];
        document.getElementById("nota").innerHTML = array[0];
        document.getElementById("gato").style.display="block";
        document.getElementById("gato2").style.display="block";
        document.getElementById("rayita").innerHTML = 0.2;
       
        console.log()
        //2microlitrros
        console.log("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")
  
      } else if (vol == 100) {
        console.log("Usar una p100")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
        document.getElementById("pipeta").innerHTML = 100;
        document.getElementById("n1").innerHTML = 1;
        document.getElementById("n2").innerHTML = 0;
        document.getElementById("n3").innerHTML = 0;
        document.getElementById("nota").innerHTML = 0;
        document.getElementById("gato").style.display="none";
        document.getElementById("gato2").style.display="none";
        console.log()

      } else if (vol <= 99.9 && vol >= 20.1) {

        console.log("Usar una p100")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
  
        let digito;
        var array=[];
        var i=0;

        vol=vol*10
  
        while (vol!=0) {
  
          digito=vol%10;
          vol=vol/10;
          array[i] = Math.trunc(digito);
          i++;
  
        }
  
        var k=2;
                
        while (k!=-1) {
            console.log(array[k]);
            k--;
        }
        
        document.getElementById("pipeta").innerHTML = 100;
        document.getElementById("n1").innerHTML = 0;
        document.getElementById("n2").innerHTML = array[2];
        document.getElementById("n3").innerHTML = array[1];
        document.getElementById("nota").innerHTML = array[0];
        document.getElementById("gato").style.display="block";
        document.getElementById("gato2").style.display="block";
        document.getElementById("rayita").innerHTML = 0.2;
       
        console.log()
        //2microlitrros
        console.log("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

    } else if (vol == 20) {
        console.log("Usar una p20")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
        document.getElementById("pipeta").innerHTML = 20;
        document.getElementById("n1").innerHTML = 2;
        document.getElementById("n2").innerHTML = 0;
        document.getElementById("n3").innerHTML = 0;
        document.getElementById("nota").innerHTML = 0;
        document.getElementById("gato").style.display="none";
        document.getElementById("gato2").style.display="none";
        console.log()

    } else if (vol <= 19.9 && vol >= 10.01) {

        console.log("Usar una p20")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
  
        let digito;
        var array=[];
        var i=0;

        vol=vol*100;
  
        while (vol!=0) {
  
          digito=vol%10;
          vol=vol/10;
          array[i] = Math.trunc(digito);
          i++;
  
        }
  
        var k=3;
                
        while (k!=-1) {
            console.log(array[k]);
            k--;
        }
        
        document.getElementById("pipeta").innerHTML = 20;
        document.getElementById("n1").innerHTML = array[3];
        document.getElementById("n2").innerHTML = array[2];
        document.getElementById("n3").innerHTML = array[1];
        document.getElementById("nota").innerHTML = array[0];
        document.getElementById("gato").style.display="block";
        document.getElementById("gato2").style.display="block";
        document.getElementById("rayita").innerHTML = 0.02;
    
        console.log()
        //2microlitrros
        console.log("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

    } else if (vol == 10) {
        console.log("Usar una p10")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
        document.getElementById("pipeta").innerHTML = 10;
        document.getElementById("n1").innerHTML = 1;
        document.getElementById("n2").innerHTML = 0;
        document.getElementById("n3").innerHTML = 0;
        document.getElementById("nota").innerHTML = 0;
        document.getElementById("gato").style.display="none";
        document.getElementById("gato2").style.display="none";
        console.log()

    } else if (vol <= 9.9 && vol >= 2.01) {

        console.log("Usar una p10")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
  
        let digito;
        var array=[];
        var i=0;

        vol=vol*100;
  
        while (vol!=0) {
  
          digito=vol%10;
          vol=vol/10;
          array[i] = Math.trunc(digito);
          i++;
  
        }
  
        var k=3;
                
        while (k!=-1) {
            console.log(array[k]);
            k--;
        }
        
        document.getElementById("pipeta").innerHTML = 10;
        document.getElementById("n1").innerHTML = array[3];
        document.getElementById("n2").innerHTML = array[2];
        document.getElementById("n3").innerHTML = array[1];
        document.getElementById("nota").innerHTML = array[0];
        document.getElementById("gato").style.display="block";
        document.getElementById("gato2").style.display="block";
        document.getElementById("rayita").innerHTML = 0.02;
    
        console.log()
        //2microlitrros
        console.log("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

    } else if (vol == 2) {
        console.log("Usar una p2")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
        document.getElementById("pipeta").innerHTML = 2;
        document.getElementById("n1").innerHTML = 2;
        document.getElementById("n2").innerHTML = 0;
        document.getElementById("n3").innerHTML = 0;
        document.getElementById("nota").innerHTML = 0;
        document.getElementById("gato").style.display="none";
        document.getElementById("gato2").style.display="none";
        console.log()

    } else if (vol <= 1.999 && vol >= 0.02) {

        console.log("Usar una p2")
        console.log("Recuerde COLOCAR el tip y utilizar el AMARILLO")
        console.log()
  
        let digito;
        var array=[];
        var i=0;

        vol=vol*1000;
  
        while (vol!=0) {
  
          digito=vol%10;
          vol=vol/10;
          array[i] = Math.trunc(digito);
          i++;
  
        }
  
        var k=3;
                
        while (k!=-1) {
            console.log(array[k]);
            k--;
        }
        
        document.getElementById("pipeta").innerHTML = 2;
        document.getElementById("n1").innerHTML = array[3];
        document.getElementById("n2").innerHTML = array[2];
        document.getElementById("n3").innerHTML = array[1];
        document.getElementById("nota").innerHTML = array[0];
        document.getElementById("gato").style.display="block";
        document.getElementById("gato2").style.display="block";
        document.getElementById("rayita").innerHTML = 0.002;
    
        console.log()
        //2microlitrros
        console.log("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")
    }}



