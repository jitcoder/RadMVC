using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin;
using System.IO;
using Simple.Owin.Forms;
using System.Text.RegularExpressions;
using System.Collections.Specialized;
using System.Web;
using RadMVC.Utility;

namespace RadMVC.Web.Owin
{
    class Request : IRadRequest
    {
        private IOwinRequest req;
        private NameValueCollection queryString;
        private NameValueCollection form;
        private PostedFile[] files;

        public Request(IOwinContext context)
        {
            this.req = context.Request;
        }

        void IRadRequest.Abort()
        {
            throw new Exception("Request aborted");
        }

        System.IO.Stream IRadRequest.Stream
        {
            get { return req.Body; }
        }

        Uri IRadRequest.Url
        {
            get { return req.Uri; }
        }

        string IRadRequest.HttpMethod
        {
            get { return req.Method; }
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
                        this.form = MultipartFormParser.Parse(req.Body, req.ContentType, out this.files);
                    }
                    else
                    {
                        this.form = FormParser.Parse(req.Body);
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

        int IRadRequest.ContentLength
        {
            get { return (int)req.Body.Length; }
        }

        System.Collections.Specialized.NameValueCollection IRadRequest.QueryString
        {
            get 
            {
                if (this.queryString == null)
                {
                    queryString = HttpUtility.ParseQueryString(req.Uri.Query);
                }
                return queryString;
            }
        }
    }
}
