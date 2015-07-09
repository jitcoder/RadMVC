using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RadMVC.Web;
using System.Reflection;
using RadMVC.Attributes;

namespace RadMVC
{
    public abstract class WebApplication
    {
        public IRadContext context { get; internal set; }
        public List<WebAttribute> ApplicationAttributes { get; set; }
        public String Section { get; internal set; }

        public WebApplication()
        {
            ApplicationAttributes = new List<WebAttribute>();
            Object[] customAttributes = this.GetType().GetCustomAttributes(true);
            Section = "Index";

            foreach(Attribute att in customAttributes)
            {
                if (att.GetType() == typeof(WebAttribute))
                    ApplicationAttributes.Add((WebAttribute)att);
                else if (att.GetType() == typeof(SectionAttribute))
                    Section = ((SectionAttribute)att).Name;
            }
        }
    }
}
