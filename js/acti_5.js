/*
ACTIVITY 5 – Password validation 
− We want to make a web application that asks the user for a name and password. We will ask 
for both data using text input boxes (although it is not the best method) 
− We assume that the user is entering the information to register in some service. The password 
will be visible so we will not ask to repeat it. 
− The  username  may  only  be  made  up  of  lowercase  letters  and  numbers,  otherwise  we  will 
indicate the error and ask for the name again. 
− What we will validate about the password is that it has at least one element of the following: 
✓ A capital letter 
✓ A lowercase letter 
✓ A number 
✓ A character that is neither letter nor number 
− Although it would be easier to solve this practice with regular expressions (we will see them 
later) we will do it without them as an opportunity to practice with strings. 
− If the password does not comply with what is indicated in the previous point, we will ask the 
user to indicate it again. When the password is right, we will indicate with a message that the 
information has been stored properly. 
− In the event of any cancellation in the boxes, the application terminates. We will indicate this 
with a message

ACTIVIDAD 5 – Validación de contraseña
− Queremos hacer una aplicación web que le pida al usuario un nombre y una contraseña. Preguntaremos
para ambos datos usando cuadros de entrada de texto (aunque no es el mejor método)
− Suponemos que el usuario está ingresando la información para registrarse en algún servicio. La contraseña
será visible por lo que no le pediremos que lo repita.
− El nombre de usuario sólo podrá estar formado por letras minúsculas y números, en caso contrario
indique el error y pida de nuevo el nombre.
− Lo que validaremos de la contraseña es que tenga al menos un elemento de los siguientes:
✓ Una letra mayúscula
✓ Una letra minúscula
✓ Un número
✓ Un carácter que no es ni letra ni número
− Aunque sería más fácil resolver esta práctica con expresiones regulares (las veremos
más adelante) lo haremos sin ellos como una oportunidad para practicar con cuerdas.
− Si la contraseña no se ajusta a lo indicado en el punto anterior, le pediremos al
usuario que lo indique de nuevo. Cuando la contraseña sea correcta, le indicaremos con un mensaje que la
la información ha sido almacenada correctamente.
− En caso de producirse alguna cancelación en las casillas, se da por terminada la aplicación. esto lo indicaremos
con un mensaje
*/

window.addEventListener("load", inicio, true);

function inicio() {
   // let user = window.prompt("Introduce tú usuario: ");
    let password = window.prompt("Introduce tú contraseña: ");
    let letras = "abcdefghijklmnñopqrstuvwxyzáéíóú1234567890";
   // username(user);
    passwordValidate(password);

    function username(user) {
        if (user) {
            for (let i = 0; i < user.length; i++) {
                //Si la letra está en el array de letras (es un símbolo, un espacio...)
                if (letras.indexOf(user[i]) == -1) {
                    user = window.prompt("Has introducido caracter no valido, introduce tú usuario");
                    username(user);
                    i = user.length;
                }

            }

        }
    }


    function passwordValidate(password) {
        let letras_1 = "abcdefghijklmnñopqrstuvwxyz";
        let letras_2 = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let numeros = "1234567890";
        let numValido = false;
        let letralower = false;
        let letraletter = false;
        let caracter = false;

        if (password) {

            for (let i = 0; i < password.length; i++) {

                if (letras_1.indexOf(password[i]) != -1) {

                    letraletter = true;
                    i = password.length;
                }

            }
            for (let i = 0; i < password.length; i++) {

                if (letras_2.indexOf(password[i]) != -1) {

                    letralower = true;
                    i = password.length;
                }

            }
            for (let i = 0; i < password.length; i++) {

                if (numeros.indexOf(password[i]) != -1) {

                    numValido = true;
                    i = password.length;
                }

            }
            for (let i = 0; i < password.length; i++) {

                if (letras_1.indexOf(password[i]) == -1 && letras_2.indexOf(password[i]) == -1 && numeros.indexOf(password[i]) == -1) {
                    console.log("Caracter")
                    caracter = true;
                    i = password.length;
                }else{

                }

            }


            if (letraletter==true && letralower==true && numValido == true && caracter == true) {
            document.write("La contraseña se ha guardado correctament.")
            }else{
                document.write("La contraseña no se ajusta.")
            }

        }

    }
}
