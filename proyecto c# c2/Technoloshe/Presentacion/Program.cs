using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentacion
{
    class Program
    {
        static void Main(string[] args)
        {
            Entidades.Alumno objEntidadAlumno = new Entidades.Alumno();
            objEntidadAlumno.DNI = 1234434;
            objEntidadAlumno.APELLIDO = "Rodrig";
            objEntidadAlumno.NOMBRE = "FLOR";
            Logica.Alumno objLogicaAlumno = new Logica.Alumno();
            objLogicaAlumno.Agregar(objEntidadAlumno);
            Console.WriteLine("alumno agregado");
            Console.ReadKey();
            //acanose porque no funciona


        }
    }
}
