using RadMVC.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC.Web
{
    public interface IRadContext
    {
        IRadRequest Request {get;}
        IRadResponse Response { get;}
        IRadServer Server { get;}

    }
}
