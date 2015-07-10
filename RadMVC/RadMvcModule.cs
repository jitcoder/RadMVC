using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;
using System.Reflection;
using System.Net;
using RadMVC.Attributes;
using RadMVC.Web.ASPNET;

using System.IO;
using RadMVC.Web;

namespace RadMVC
{
    class RadMvcModule : IHttpModule
    {
        public void Dispose()
        {
        }

        public void Init(HttpApplication context)
        {
            context.AuthorizeRequest += context_AuthorizeRequest;
            context.PostMapRequestHandler += context_PostMapRequestHandler;
            context.PreRequestHandlerExecute += context_PreRequestHandlerExecute;
        }

        void context_PreRequestHandlerExecute(object sender, EventArgs e)
        {
            HttpApplication app = (HttpApplication)sender;
            if (!RadCore.HandleRequest(new Context(app.Context)))
            {
                if (HttpContext.Current.Handler != null)
                {
                    HttpContext.Current.Handler = ((WebApplicationRequestHandler)HttpContext.Current.Handler).OriginalHandler;
                }
            }
            else
            {
                app.CompleteRequest();
            }
        }

        void context_PostMapRequestHandler(object sender, EventArgs e)
        {
            HttpApplication app = (HttpApplication)sender;

            if (app.Context.Handler is IReadOnlySessionState || app.Context.Handler is IRequiresSessionState)
            {
                return;
            }

            app.Context.Handler = new WebApplicationRequestHandler(app.Context.Handler);
        }

        void context_AuthorizeRequest(object sender, EventArgs e)
        {
            if (HttpContext.Current.Request.Path.ToLower().StartsWith("/views"))
            {
                throw new HttpException((int)HttpStatusCode.NotFound, "File not found");
            }
        }

        public RadMvcModule()
        {
            RadCore.LoadWebApplications();
        }

        public String ModuleName
        {
            get
            {
                return "RadMVC Module";
            }
        }
    }
}
