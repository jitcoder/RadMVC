using RadMVC.Utility;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC.Web
{
    public interface IRadRequest
    {
        void Abort();
        Stream Stream {get;}
        Uri Url { get;}
        String HttpMethod {get;}
        String ContentType { get; set; }
        NameValueCollection Form { get; }
        PostedFile[] Files { get; }
        int ContentLength { get; }
        NameValueCollection QueryString { get; }
    }
}
