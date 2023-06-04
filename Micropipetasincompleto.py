def micropipetas():

  while True:
    vol=int(input("Ingrese el volumen a pipetear (en microlitros): "))


    if vol == 1000:
      print("Usar una p1000")
      print("Recuerde COLOCAR el tip y utilizar el AZUL")
      print()
      print(1)
      print(0)
      print(0)
      print()

      break;

    elif vol <= 999 and vol >= 201:
      print("Usar una p1000")
      print("Recuerde COLOCAR el tip y utilizar el AZUL")
      print()
      array = list(str(vol))
      
      print(0)
      for i in range(len(array)-1):
        print (array[i])
        i+=1

      print()
      #2microlitrros
      print("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

      break;

    elif vol <= 200 and vol >= 101:

      print("Usar una p200")
      #0,2 micro
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      array = list(str(vol))
      
      for i in range(len(array)):
        print (array[i])
        i+=1

      break;
    
    elif vol == 100:
      print("Usar una p100")
      print("Recuerde COLOCAR el tip y utilizar el AZUL")
      print()
      print(1)
      print(0)
      print(0)
      print()

      break;

    elif vol <= 99 and vol >= 21:
      print("Usar una p100")
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      #0,2
      array2 = list(str(vol))
      
      print(0)
      for i in range(len(array2)):
        print (array2[i])
        i+=1

      print()
      print("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

      break;

    elif vol == 20:
      
      print("Usar una p20")
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      print(2)
      print(0)
      print(0)
      print()
      #0,2
     
    elif vol <= 19 and vol >= 11:
     
      print("Usar una p20")
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      #0,2
      
      array2 = list(str(vol))
      
      for i in range(len(array2)):
        print (array2[i])
        i+=1

      print(0)

      print()
      print("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

      break;
    

    elif vol == 10:
      print("Usar una p10")
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      print(1)
      print(0)
      print(0)
      print()

    elif vol <= 9 and vol >= 3:
      print("Usar una p10")
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      #0,2
      
      array2 = list(str(vol))
      
      for i in range(len(array2)):
        print (array2[i])
        i+=1
      print(0)
      print(0)

      print()
      print("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")

      break;
      
    elif vol == 2:
      print("Usar una p2")
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      print(2)
      print(0)
      print(0)
      print()
   
    elif vol < 2 and vol!=0:
      print("Usar una p2")
      print("Recuerde COLOCAR el tip y utilizar el AMARILLO")
      print()
      
      array2 = list(str(vol))
      
      for i in range(len(array2)):
        print (array2[i])
        i+=1
      print(0)
      print(0)

      print()
      print("el ultimo dígito debe de ajustarse en la micropipeta, utilizando...")
      
  #0,2
#p10 y p20: 0,02
#p2: 0,002



def main():

  micropipetas()

  for i in range(20,0,-1):
    print(i)


main()

