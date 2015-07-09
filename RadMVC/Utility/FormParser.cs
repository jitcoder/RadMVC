using RadMVC.Web;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace RadMVC.Utility
{
    internal static class FormParser
    {
        public static NameValueCollection Parse(Stream stream)
        {
            Dictionary<string, string[]> form = new Dictionary<string, string[]>();
            UTF8Encoding encoding = new UTF8Encoding(false);

            return HttpUtility.ParseQueryString(encoding.GetString(stream.ReadAllBytes()),encoding);
        } 
    }
}
