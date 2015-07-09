using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC
{
    public interface IRender
    {
        String Extension { get;}
        String Render(String contents);
    }
}
