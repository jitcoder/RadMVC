using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
﻿using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using RadMVC;
using System.IO;
using System.Reflection;

[assembly: OwinStartup(typeof(RadMVC_StandAloneTest.Startup))]

namespace RadMVC_StandAloneTest
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            //app.UseStaticFiles(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location),"Assets"));
            app.UseStaticFiles("/Assets");
            app.Use(typeof(RadMvcMiddleware));
            //app.UseWelcomePage();
        }
    }
}
