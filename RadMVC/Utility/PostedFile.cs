using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadMVC.Utility
{
    public class PostedFile
    {
        public string Filename { get; internal set; }
        public MemoryStream Contents { get; internal set; }
        public void SaveAs(string filePath)
        {
            File.WriteAllBytes(filePath, Contents.ToArray());
        }
    }
}
