using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RadMVC.Web;

namespace RadMVC.Attributes
{
    public abstract class WebAttribute : Attribute
    {
        public abstract void BeforeRequest(IRadContext context);
        public abstract void AfterRequest(IRadContext context);
    }
}
