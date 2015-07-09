using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC
{
    internal static class AppTree
    {
        private static Hashtable root = new Hashtable();
        private static List<String> sectionRoot = new List<String>();

        public  static void AddToTree(String Section, String Application, WebApplication app)
        {
            String key = Section + "." + Application;

            if (!root.ContainsKey(key))
                root.Add(key, app);

            if (!sectionRoot.Contains(Section))
                sectionRoot.Add(Section);
        }

        public static Boolean Contains(String key)
        {
            return root.ContainsKey(key);
        }

        public static WebApplication GetApplication(String key)
        {
            return (WebApplication)root[key];
        }

        public static Boolean HasSection(String section)
        {
            return sectionRoot.Contains(section);
        }

        public static void Clear()
        {
            root.Clear();
            sectionRoot.Clear();
        }
    }
}
