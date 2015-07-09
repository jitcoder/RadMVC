using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Specialized;
using System.Runtime.CompilerServices;
using Microsoft.Owin;
using System.IO;

namespace RadMVC
{
    internal static class Extensions
    {
        public static Byte[] ReadAllBytes(this Stream stream)
        {
            return stream.ToMemoryStream().ToArray();
        }

        public static MemoryStream ToMemoryStream(this Stream stream)
        {
            byte[] buffer = new byte[33554432];
            MemoryStream ms = new MemoryStream();

            int read;
            while ((read = stream.Read(buffer, 0, buffer.Length)) > 0)
            {
                ms.Write(buffer, 0, read);
            }
            return ms;

        }
    }
}
