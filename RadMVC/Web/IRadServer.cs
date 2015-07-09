using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC.Web
{
    public interface IRadServer
    {
        String MapPath(String path);
        String HtmlEncode(String content);
        String HtmlDecode(String content);
        String UrlEncode(String url);
        String UrlDecode(String url);
    }
}
