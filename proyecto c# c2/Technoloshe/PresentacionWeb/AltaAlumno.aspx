<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AltaAlumno.aspx.cs" Inherits="PresentacionWeb.AltaAlumno" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            height: 23px;
        }
        .auto-style2 {
            width: 185px;
        }
        .auto-style3 {
            height: 23px;
            width: 185px;
        }
    </style>
<link href="Content/bootstrap.css" rel="stylesheet" />
    
</head>
    
<body>
    <form id="form1" runat="server">
        <div>
            <h2>agregar alumno</h2>
            <table style="width: 100%;" CssClass="table">
                <tr>
                    <td class="auto-style2">DNI</td>
                    <td>
                        <asp:TextBox ID="txt_Dni" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style2">APELLIDO</td>
                    <td>
                        <asp:TextBox ID="txt_Apellido" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style3">NOMBRE</td>
                    <td class="auto-style1">
                        <asp:TextBox ID="txt_Nombre" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                    <asp:Button ID="btn_enviar" CssClass="btn-primary" runat="server" Text="Enviar" OnClick="btn_enviar_Click" />
        
                </td>
        <td>
            <asp:Label ID="lblMensaje"  runat="server" Text="Label"></asp:Label>
            
        </td>
                
                </tr>
                </table>
            </div>
      </form>
</body>
</html>
