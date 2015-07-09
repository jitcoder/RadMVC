using RadMVC.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC
{
    public abstract class View
    {
        public IRadContext context {get;internal set;}
        public string Path { get; set; }
        public Object Model { get; set; }
        public abstract String Render();
    }
}
