using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC.Web
{
    public interface IRadResponse
    {
        void Redirect(String url);
        void Relocate(String url);
        void SendFile(String fileName);
        void Write(String contents);
        void WriteFile(String fileName);
        void AddHeader(String header, String value);
        Stream Stream { get;}
        void Flush();
    }
}
