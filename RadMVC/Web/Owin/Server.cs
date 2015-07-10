using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin;
using System.IO;
using System.Reflection;
using System.Web;

namespace RadMVC.Web.Owin
{
    class Server : IRadServer
    {
        public Server(IOwinContext context)
        {

        }
        string IRadServer.MapPath(string path)
        {
            path = path.Replace("~\\", "\"").Replace("~/","/").Replace("/","\\");
            path = path.TrimStart(new char[]{'\\'});
            string uriPath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), path);

            return uriPath;
        }

        string IRadServer.HtmlEncode(string content)
        {
            return HttpUtility.HtmlEncode(content);
        }

        string IRadServer.HtmlDecode(string content)
        {
            return HttpUtility.HtmlDecode(content);
        }

        string IRadServer.UrlEncode(string url)
        {
            return HttpUtility.UrlEncode(url);
        }

        string IRadServer.UrlDecode(string url)
        {
            return HttpUtility.UrlDecode(url);
        }
    }
}
