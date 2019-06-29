using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica
{
    public class Profesor
    {
            public void Agregar(Entidades.Profesor pProfesor)
            {
                //TODO llamar a metodo agregar de la capa de datos (q todavia no esta creada)
                Datos.Profesor objAlumno = new Datos.Profesor();
                objAlumno.Agregar(pProfesor);
            }
        }

    }


