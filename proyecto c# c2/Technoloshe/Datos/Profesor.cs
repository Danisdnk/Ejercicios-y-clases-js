
using System;
using System.Data;
using System.Data.SqlClient;

namespace Datos
{
    public class Profesor
    {
      
        //metodo agregar 
        public void Agregar(Entidades.Profesor p_profesor)
        {
            string strConexion = @"Server=CPX-VYUQZO5AI4K\TRAINING;database=TecnolosheNueva;Integrated Security=true";
            string strSQL = @"insert profesor(nombre,apellido,email)values
                                (@nombre,@apellido,@email)";
            //pueden tener el nombre que se te cante los value mientras se respeten esos parametros
            SqlConnection objConexion = new SqlConnection();
            objConexion.ConnectionString = strConexion;
            SqlCommand objCommand = new SqlCommand();
            objCommand.CommandText = strSQL;
            objCommand.Connection = objConexion;
            // parametros
            //son conexiones,son propiedades
            objCommand.Parameters.AddWithValue("@nombre", p_profesor.Nombre);
            objCommand.Parameters.AddWithValue("@apellido", p_profesor.Apellido);
            objCommand.Parameters.AddWithValue("@email", p_profesor.Email);
            //abr o la conexion
            objConexion.Open();
            objCommand.ExecuteNonQuery();
            //aca tmb tira cosa rara
            objConexion.Close();
            //en la capa de entidades voy 
        }

    }
}

