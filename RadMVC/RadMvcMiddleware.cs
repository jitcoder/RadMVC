using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin;
using RadMVC.Web.Owin;
using System.Reflection;

namespace RadMVC
{
    public class RadMvcMiddleware : OwinMiddleware
    {
        public RadMvcMiddleware(OwinMiddleware next)
            : base(next)
        {
            RadCore.LoadWebApplications();
        }

        public async override Task Invoke(IOwinContext context)
        {
            RadCore.HandleRequest(new Context(context));
            await Next.Invoke(context);
        }

    }
}
