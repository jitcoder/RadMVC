Imports RadMVC
Imports RadMVC.Attributes

Public Class Home
    Inherits WebApplication

    Public Function Index() As HtmlView
        Return New HtmlView("~/index.html")
    End Function

    Public Function GetTimestamp() As Object
        Return New With {.DateTime = Today.ToString("d")}
    End Function


    Public Function StampUsername(user As Object) As Object
        Return New With {.Label = "Hello " + user("Name") + " the time is " + Today.ToString("d")}
    End Function
End Class
