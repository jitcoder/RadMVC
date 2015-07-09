using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RadMVC.Web;
using System.IO;


namespace RadMVC
{
    public class HtmlView : View
    {
        public HtmlView(String viewPath, Object Model)
        {
            this.Path = viewPath;
            this.Model = Model;
        }

        public HtmlView(String viewPath)
            : this(viewPath, null)
        {
        }

        public override String Render()
        {
            if (Model != null)
            {
                StringBuilder sb = new StringBuilder();
                JSON.Parameters.EnableAnonymousTypes = true;
                sb.Append("<script type=\"text/javascript\">");
                sb.Append("var Model = ");
                sb.Append(JSON.ToJSON(Model));
                sb.Append(";</script></head>");
                return Cache.getInstance()[this.context.Server.MapPath(this.Path.Replace("~", "~/Views"))].Replace("</head>", sb.ToString());
            }
            return this.context.Server.MapPath(this.Path.Replace("~", "~/Views"));
        }

    }
}
