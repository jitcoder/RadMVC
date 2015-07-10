using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin.Hosting;

namespace RadMVC_StandAloneTest
{
    class Program
    {
        static void Main(string[] args)
        {
            string url = "http://localhost:8888";
            using (WebApp.Start<Startup>(url))
            {
                Console.WriteLine("Server running on: " + url);
                Console.WriteLine();
                Console.WriteLine("Press enter to quit...");
                Console.ReadKey();
            }
        }
    }
}
