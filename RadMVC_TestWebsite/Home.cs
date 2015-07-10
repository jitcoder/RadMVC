using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RadMVC;
using RadMVC.Attributes;

namespace RadMVC_TestWebsite
{
    public class Home : WebApplication
    {
        public HtmlView Index()
        {
            return new HtmlView("~/forms.html");
        }
        public HtmlView NormalPost()
        {
            return new HtmlView("~/normalpost.html");
        }

        public HtmlView PostPicture()
        {
            return new HtmlView("~/postpicture.html");
        }

    }
}