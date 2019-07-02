using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsolaProfesores
{
    class Program
    {
        static void Main(string[] args)
        {
                Entidades.Profesor objEntidadProfesor = new Entidades.Profesor();
            objEntidadProfesor.Nombre = "jose";
            objEntidadProfesor.Apellido = "Rodrig";
            objEntidadProfesor.Email = "holagmail.com";
                Logica.Profesor objLogicaProfesor = new Logica.Profesor();
                objLogicaProfesor.Agregar(objEntidadProfesor);
                Console.WriteLine("prof agregado");
                Console.ReadKey();
                

            
        }
    }
}
