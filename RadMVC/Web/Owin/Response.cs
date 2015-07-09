using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin;
using System.IO;

namespace RadMVC.Web.Owin
{
    class Response : IRadResponse
    {
        private IOwinResponse resp;

        public Response(IOwinContext context)
        {
            this.resp = context.Response;
        }
        void IRadResponse.Redirect(string url)
        {
            resp.Redirect(url);
        }

        void IRadResponse.Relocate(string url)
        {

            resp.Headers.Add("Location", new string[] { url });
            resp.StatusCode = 301;
        }

        void IRadResponse.SendFile(string filePath)
        {
            resp.Headers.Add("content-disposition", new string[]{"attachment; filename=" + System.IO.Path.GetFileName(filePath)});
            ((IRadResponse)this).WriteFile(filePath);
        }

        void IRadResponse.Write(string contents)
        {
            resp.Write(contents);
        }

        void IRadResponse.WriteFile(string fileName)
        {
            Byte[] data = File.ReadAllBytes(fileName);
            resp.ContentLength = data.Length;
            resp.Write(data, 0, data.Length);
            resp.Body.Flush();
        }

        void IRadResponse.AddHeader(string header, string value)
        {
            resp.Headers.Add(header, new string[] { value });
        }

        System.IO.Stream IRadResponse.Stream
        {
            get { return resp.Body; }
        }

        void IRadResponse.Flush()
        {
            resp.Body.Flush();
        }
    }
}
