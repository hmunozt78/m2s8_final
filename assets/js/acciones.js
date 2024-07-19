/*
Todas las funciones estaran guardadas aqui
*/

function verSaldo(saldo){
    let saldoTemp = saldo;
    alert("Su saldo es : "+ saldoTemp);
    return(null);
}

function realizaGiro(saldo){
    let montoGiro
    do{
        montoGiro = prompt("Ingrese el monto a retirar");
        montoGiro = parseInt(montoGiro);
        if (montoGiro>saldo){
            alert("El monto excede su saldo, intente nuevamente")
        }
        if (montoGiro<0){
            alert("Monto no puede ser numero negativo, intente nuevamente")
        }
    } while (saldo < montoGiro);
    saldo = saldo - montoGiro;
    return(saldo);
}


function realizaAbono(saldo){
    let montoAbono
    do{
        montoAbono = prompt("Ingrese el monto a depositar");
        montoAbono = parseInt(montoAbono);
        
        if (montoAbono<0){
            alert("Monto no puede ser numero negativo, intente nuevamente")
        }
    } while (montoAbono<0);
    saldo = saldo + montoAbono;
    return(saldo);
}


/*
Inicia la Programacion Principal del sistema bancario
*/
let clientes=["PEDRO","JUAN","DIEGO"],
    claves=["contraseña","incorrecta","nuevamente"],
    saldos=[1000,1500,2000],
    validaUsuario, validaClave, posicion, ingresaUsuario, ingresaClave;

    alert("Bienvenido al Banco T-Staff0");
    do{

        ingresaUsuario = prompt("Ingrese su usuario");
        ingresaUsuario=ingresaUsuario.toUpperCase();
        ingresaClave = prompt("Ingrese contraseña");
        posicion = parseInt(999);
        let ubicacion = parseInt(0);
        for (ubicacion;ubicacion < clientes.length ; ubicacion++){
            if (ingresaUsuario == clientes[ubicacion]) {
                posicion = ubicacion;
            };
        };
        
        if (ingresaClave == claves[posicion]){
            alert("Bienvenido " +ingresaUsuario);
        } else {
            alert("La clave es incorrecta, intente nuevamente");
        };

    } while (ingresaUsuario != clientes[posicion] || ingresaClave != claves[posicion]);
    
    let opcionMenu
    do{
        opcionMenu = prompt("Seleccione que desea hacer \n1. Ver Saldo \n2. Realizar Giro \n3. Realizar Deposito \n4. Salir");
        let usuarioInd, saldoInd;
        usuarioInd = clientes[posicion];
        saldoInd = saldos[posicion];

        switch (opcionMenu){
            case "1":
                verSaldo(saldoInd);
                break; 
            case "2":
                saldoInd=realizaGiro(saldoInd);
                saldos[posicion] = saldoInd;
                alert("Saldo Actual es :" +saldos[posicion])
                break;
            case "3":
                saldoInd=realizaAbono(saldoInd);
                saldos[posicion] = saldoInd;
                alert("Saldo Actual es :" +saldoInd)
                break;
            case "4":
                alert("Gracias por su visita. \nEsperamos que vuelva pronto");
                break
            default: 
                alert("Opcion Invalida, intente nuevamente \n:D");
        };
    }while (opcionMenu!=4);
    