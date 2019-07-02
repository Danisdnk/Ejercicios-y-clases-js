
using System.Data;

namespace Logica
{
    public class Alumno
    {
        //metodos
        /// <summary>
        /// llama a metodo agregar de datos
        /// Creado por Dani 
        /// fecha de creación: 21/06/2019
        /// </summary>
        /// <param name="pAlumno"></param>
        //void es cuando no devuelve nada
        //p de parametro pAlumno es el nombre de la variable  

        public void Agregar(Entidades.Alumno pAlumno)
        {
            //TODO llamar a metodo agregar de la capa de datos (q todavia no esta creada)
            Datos.Alumno objAlumno = new Datos.Alumno();
            objAlumno.Agregar(pAlumno);
        }
        public DataTable TraerTodos()
        {
            Datos.Alumno objDatos = new Datos.Alumno();
            return objDatos.TraerTodo();
        }
    }
    
}
