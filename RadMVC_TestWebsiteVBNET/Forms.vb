Imports RadMVC
Imports RadMVC.Attributes

Public Class Forms
    Inherits WebApplication

    Public Function Index() As HtmlView
        Return New HtmlView("~/forms.html")
    End Function
End Class
