using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;

namespace RadMVC
{
    
    internal class WebApplicationRequestHandler : IHttpHandler,IRequiresSessionState
    {
        public IHttpHandler OriginalHandler;
        public WebApplicationRequestHandler(IHttpHandler OriginalHandler)
        {
            this.OriginalHandler = OriginalHandler;
        }

        public bool IsReusable
        {
            get { return false; }
        }

        public void ProcessRequest(HttpContext context)
        {
            throw new InvalidOperationException("WebApplicationRequestHandler cannot process requests directly.");
        }
    }
}
