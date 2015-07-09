using Simple.Owin.Forms;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using RadMVC.Utility;

namespace RadMVC.Web.ASPNET
{
    class Request : RadMVC.Web.IRadRequest
    {
        private System.Web.HttpRequest req;
        private NameValueCollection form;
        private PostedFile[] files;

        public Request(System.Web.HttpContext context)
        {
            this.req = context.Request;
        }

        void IRadRequest.Abort()
        {
            req.Abort();
        }

        System.IO.Stream IRadRequest.Stream
        {
            get
            {
                return req.InputStream;
            }
        }

        Uri IRadRequest.Url
        {
            get
            {
                return req.Url;
            }

        }

        string IRadRequest.HttpMethod
        {
            get
            {
                return req.HttpMethod;
            }
        }

        int IRadRequest.ContentLength
        {
            get
            {
                return req.ContentLength;
            }
        }

        string IRadRequest.ContentType
        {
            get
            {
                return req.ContentType;
            }
            set
            {
                req.ContentType = value;
            }
        }

        NameValueCollection IRadRequest.Form
        {
            get
            {
                if (this.form == null)
                {
                    if (req.ContentType.ToLower().IndexOf("multipart") > -1)
                    {
                        this.form = MultipartFormParser.Parse(req.InputStream,req.ContentType,out this.files);
                    }
                    else
                    {
                        this.form = FormParser.Parse(req.InputStream);
                    }
                }

                return this.form;
            }

        }

        PostedFile[] IRadRequest.Files
        {
            get
            {
                return this.files;
            }

        }

        System.Collections.Specialized.NameValueCollection IRadRequest.QueryString
        {
            get 
            {
                return req.QueryString;
            }

        }

    }
}
