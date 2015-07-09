using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace RadMVC.Web.ASPNET
{
    public class Response : IRadResponse
    {
        private System.Web.HttpResponse resp;

        public Response(System.Web.HttpContext context)
        {
            this.resp = context.Response;
        }
        void IRadResponse.Redirect(string url)
        {
            resp.Redirect(url);
        }

        void IRadResponse.Relocate(string url)
        {
            resp.RedirectPermanent(url);
        }

        void IRadResponse.SendFile(string filePath)
        {
            resp.AppendHeader("content-disposition", "attachment; filename=" + System.IO.Path.GetFileName(filePath));
            resp.ContentType = "application/octet-stream";
            resp.WriteFile(filePath);
            resp.Flush();
        }

        void IRadResponse.WriteFile(string fileName)
        {
            resp.WriteFile(fileName);
        }

        void IRadResponse.Write(string contents)
        {
            resp.Write(contents);
        }

        void IRadResponse.AddHeader(string header, string value)
        {
            resp.AddHeader(header, value);
        }

        System.IO.Stream IRadResponse.Stream
        {
            get
            {
                return resp.OutputStream;
            }

        }

        void IRadResponse.Flush()
        {
            resp.Flush();
        }
    }
}
