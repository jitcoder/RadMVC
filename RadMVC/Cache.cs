using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Caching;
using System.Collections;
using System.IO;
using System.Diagnostics;

namespace RadMVC
{
    class Cache
    {
        private Hashtable extensionHandlers = null;
        private static Cache instance = null;

        public String GetAsset(String name)
        {
            ObjectCache cache = MemoryCache.Default;
            String contents = cache[name] as String;
            if(contents == null)
            {
                String ext = Path.GetExtension(name);
                contents = File.ReadAllText(name);
                if (extensionHandlers.ContainsKey(ext))
                {
                    contents = ((IRender)extensionHandlers[ext]).Render(contents);
                }
#if DEBUG
                Debug.Print("Cache added - " + name);
#endif
            }

            CacheItemPolicy policy = new CacheItemPolicy();
            policy.ChangeMonitors.Add(new HostFileChangeMonitor((IList<String>)new String[] { name }));
            cache.Set(name,contents,policy);

            return contents;
        }

        private Cache()
        {
            extensionHandlers = new Hashtable();
        }

        public String this[String name]
        {
            get
            {
                return Cache.getInstance().GetAsset(name);
            }
        }

        public static Cache getInstance()
        {
            if(instance == null)
                instance = new Cache();

            return instance;
        }
    }
}
