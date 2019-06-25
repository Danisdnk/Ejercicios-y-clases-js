namespace Entidades
{
     public class Alumno
    {
        //Atributos
        private int dni;
        private string apellido;
        private string nombre;

        //Propiedades explicitas
        public int DNI
        {
            get { return dni; }
            set { dni = value; }
        }

        public string APELLIDO
        {
            get { return apellido; }
            set { apellido = value; }
        }
        //Propiedad auto implementada 
        //no se declara atributo,el atributo esta dentro de la propiedad
        //se puede hacer todos asi pero no esta explicito y pero si quisiera cambiar algo  a todo mayuscula deberia escribirlo de forma explicita
        public string NOMBRE { get; set; }
    }
}
