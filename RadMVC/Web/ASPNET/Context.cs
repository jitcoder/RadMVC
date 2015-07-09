using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RadMVC.Web;

namespace RadMVC.Web.ASPNET
{
    public class Context : IRadContext
    {
        private IRadRequest request;
        private IRadResponse response;
        private IRadServer server;

        public Context(System.Web.HttpContext context)
        {
            request = new Request(context);
            response = new Response(context);
            server = new Server(context);
        }
        IRadRequest IRadContext.Request
        {
            get
            {
                return this.request;
            }
        }

        IRadResponse IRadContext.Response
        {
            get
            {
                return this.response;
            }
        }

        IRadServer IRadContext.Server
        {
            get
            {
                return this.server;
            }
        }
    }
}
