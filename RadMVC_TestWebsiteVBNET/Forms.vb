Imports RadMVC
Imports RadMVC.Attributes

Public Class Forms
    Inherits WebApplication

    Public Function Index() As HtmlView
        Return New HtmlView("~/forms.html")
    End Function


    Public Function NormalPost() As HtmlView
        Return New HtmlView("~/normalpost.html")
    End Function

    Public Function PostPicture() As HtmlView
        Return New HtmlView("~/postpicture.html")
    End Function
End Class
