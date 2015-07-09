using RadMVC.Attributes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using RadMVC.Web;

namespace RadMVC
{
    static internal class RadCore
    {
        static internal Boolean HandleRequest(IRadContext context)
        {
            String[] requestSegments = context.Request.Url.Segments.Skip(1).ToArray();

            String section = null;
            String applicationName = null;
            String methodName = null;
            WebApplication app = null;
            String appKey = null;
            int? parameterStartIndex = null;

            if (requestSegments.Length == 0)
            {
                section = "Index";
                applicationName = "Home";
                methodName = "Index";
                parameterStartIndex = null;
            }
            else if (requestSegments.Length > 2)
            {
                section = requestSegments[0];
                applicationName = requestSegments[1];
                methodName = requestSegments[2];
                parameterStartIndex = 3;

                if (!AppTree.HasSection(section))
                {
                    section = "Index";
                    applicationName = requestSegments[0];
                    methodName = requestSegments[1];
                    parameterStartIndex = 2;
                }

                if (!AppTree.Contains(section + "." + applicationName))
                {
                    applicationName = "Home";
                    methodName = requestSegments[0];
                    parameterStartIndex = 1;
                }
            }
            else if (requestSegments.Length == 2)
            {
                section = "Index";
                applicationName = requestSegments[0];
                methodName = requestSegments[1];
                parameterStartIndex = null;
                if (!AppTree.Contains(section + "." + applicationName))
                {
                    section = "Index";
                    applicationName = "Home";
                    methodName = requestSegments[0];
                    parameterStartIndex = 1;
                }
            }
            else if (requestSegments.Length == 1)
            {
                section = "Index";
                applicationName = "Home";
                methodName = requestSegments[0] == "/" ? "Index":requestSegments[0];
                parameterStartIndex = null;
            }

            appKey = section + "." + applicationName;

            if (AppTree.Contains(appKey))
            {
                app = AppTree.GetApplication(appKey);
                app.context = context;
                List<String> urlParameters = new List<String>();

                for (int i = parameterStartIndex ?? requestSegments.Length; i < requestSegments.Length; i++)
                {
                    urlParameters.Add(requestSegments[i]);
                }


                int numberOfParametersToParse = urlParameters.Count + (context.Request.HttpMethod == "POST" || context.Request.HttpMethod == "PUT" ? 1 : 0);
                MethodInfo[] methods = app.GetType().GetMethods().Where(m => m.GetParameters().Length == numberOfParametersToParse && m.Name == methodName).ToArray();

                if (methods.Length == 0)
                    return false;

                if (methods.Length > 1)
                    throw new System.Web.HttpException((int)HttpStatusCode.InternalServerError, methodName + " method overloaded with the same number of parameters, RadMVC currently does not support this. Please rename one of the methods");

                MethodInfo method = methods[0];
                ParameterInfo[] methodParameters = method.GetParameters();
                Object result = null;
                List<Object> parameters = new List<Object>();

                if (methodParameters.Length > 0)
                {
                    if (context.Request.HttpMethod == "POST" || context.Request.HttpMethod == "PUT")
                    {

                        if (context.Request.ContentType.Split(';')[0].ToLower() == "application/json")
                        {
                            String jsonString = null;
                            context.Request.Stream.Seek(0, SeekOrigin.Begin);
                            jsonString = new StreamReader(context.Request.Stream).ReadToEnd();
                            Type parameterType = methodParameters[0].ParameterType;
                            if (parameterType.Name == "RuntimeType")
                            {
                                parameters.Add(JSON.ToObject(jsonString));
                            }
                            else
                            {
                                parameters.Add(JSON.ToObject(jsonString, parameterType));
                            }
                        }

                    }

                    int methodIndex = -1;
                    for (int i = parameterStartIndex ?? requestSegments.Length; i < requestSegments.Length; i++)
                    {
                        methodIndex = i - (parameterStartIndex ?? 0);
                        if (methodIndex < methodParameters.Length)
                            parameters.Add(Convert.ChangeType(requestSegments[i], methodParameters[methodIndex].ParameterType));

                    }
                }

                WebAttribute[] methodAttributes = method.GetCustomAttributes<WebAttribute>(true).ToArray();
                foreach (WebAttribute att in methodAttributes)
                {
                    att.BeforeRequest(context);
                }

                result = method.Invoke(app, BindingFlags.InvokeMethod, null, parameters.ToArray(), System.Globalization.CultureInfo.CurrentCulture);

                foreach (WebAttribute att in methodAttributes)
                {
                    att.AfterRequest(context);
                }

                if (result is View)
                {
                    View resultView = (View)result;
                    resultView.context = context;

                    context.Response.AddHeader("Content-Type", "text/html");
                    context.Response.Write(((View)result).Render());
                    context.Response.Flush();
                }
                else
                {
                    context.Response.AddHeader("Content-Type", "application/json");
                    MethodInfo toJsonMethod = result.GetType().GetMethod("ToJSON");

                    if (toJsonMethod != null)
                    {
                        context.Response.Write(toJsonMethod.Invoke(result, new Object[] { }) as String);
                    }
                    else
                    {
                        context.Response.Write(JSON.ToJSON(result));
                    }
                    context.Response.Flush();
                }

                return true;
            }

            return false;
        }
    }
}
