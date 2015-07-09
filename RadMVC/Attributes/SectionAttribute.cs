using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC.Attributes
{
    class SectionAttribute : Attribute
    {
        public SectionAttribute(String Name)
        {
            this.Name = Name;
        }

        public String Name { get; set; }
    }
}
