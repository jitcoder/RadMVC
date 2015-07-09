using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Net.Http;
using System.Net.Http.Headers;

namespace RadMVC.Utility
{
    internal static class MultipartFormParser
    {
        public static NameValueCollection Parse(Stream stream,string contentType, out PostedFile[] files)
        {
            var streamContent = new StreamContent(stream);
            var filesloaded = new List<PostedFile>();
            var form = new NameValueCollection();

            streamContent.Headers.ContentType = MediaTypeHeaderValue.Parse(contentType);

            var provider = awaitReadAsync(streamContent).Result;

            foreach(var content in provider.Contents)
            {
                var fileName = content.Headers.ContentDisposition.FileName;

                if (!string.IsNullOrWhiteSpace(fileName))
                {
                    using (Stream filecontents = awaitReadFileContents(content).Result)
                    {
                        var file = new PostedFile();
                        file.Contents = filecontents.ToMemoryStream();
                        file.Filename = fileName;
                        filesloaded.Add(file);
                    }
                }

                if (content.IsFormData())
                {
                    var formPart = awaitReadFormData(content).Result;
                    form.Add(formPart);
                }
                
            }

            files = filesloaded.ToArray();


            return form;
        }

        public static async Task<MultipartStreamProvider> awaitReadAsync(StreamContent stream)
        {
            return await stream.ReadAsMultipartAsync();
        }

        public static async Task<Stream> awaitReadFileContents(HttpContent content)
        {
            return await content.ReadAsStreamAsync();
        }

        public static async Task<NameValueCollection> awaitReadFormData(HttpContent content)
        {
            return await content.ReadAsFormDataAsync();
        }
    }
}
