using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace RadMVC.Web.ASPNET
{
    class Server : IRadServer
    {
        private HttpServerUtility srv;

        public Server(HttpContext context)
        {
            this.srv = context.Server;
        }
        string IRadServer.MapPath(string path)
        {
            return srv.MapPath(path);
        }

        string IRadServer.HtmlEncode(string content)
        {
            return srv.HtmlEncode(content);
        }

        string IRadServer.HtmlDecode(string content)
        {
            return srv.HtmlDecode(content);
        }

        string IRadServer.UrlEncode(string url)
        {
            return srv.UrlEncode(url);
        }

        string IRadServer.UrlDecode(string url)
        {
            return srv.UrlDecode(url);
        }
    }
}
