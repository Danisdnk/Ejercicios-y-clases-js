using System;
using System.Data;
using System.Data.SqlClient;

namespace Datos
{
    public class Alumno
    {
        //metodo agregar 
        public void Agregar(Entidades.Alumno p_alumno)
        {
            string strConexion = @"Server=CPX-VYUQZO5AI4K\TRAINING;database=TecnolosheNueva;Integrated Security=true";
            string strSQL = @"insert alumnos(DNI,Apellido,Nombre)values
                                (@DNI,@Apellido,@Nombre)";
            //pueden tener el nombre que se te cante los value mientras se respeten esos parametros
            SqlConnection objConexion = new SqlConnection();
            objConexion.ConnectionString = strConexion;
            SqlCommand objCommand = new SqlCommand();
            objCommand.CommandText = strSQL;
            objCommand.Connection = objConexion;
            // parametros
            //son conexiones,son propiedades
            objCommand.Parameters.AddWithValue("@DNI", p_alumno.DNI);
            objCommand.Parameters.AddWithValue("@apellido",p_alumno.APELLIDO);
            objCommand.Parameters.AddWithValue("@nombre", p_alumno.NOMBRE);
            //abr o la conexion
            objConexion.Open();
            objCommand.ExecuteNonQuery();
            //aca tmb tira cosa rara
            objConexion.Close();
            //en la capa de entidades voy 
        }

    }
}
