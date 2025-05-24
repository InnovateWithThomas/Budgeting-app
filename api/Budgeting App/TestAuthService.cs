using Microsoft.OpenApi.Models;
using RestSharp;

namespace Budgeting_App
{
    public static class TestAuthService
    {
        public static void GetAuth0Token()
        {
            Console.WriteLine("jon doejon doejon doejon doejon doe");
            var client = new RestClient("https://localhost:7244/WeatherForecast");
            var request = new RestRequest(RestSharp.Method.Get.ToString());
            request.AddHeader("content-type", "application/json");
            request.AddParameter("application/json", "{\"client_id\":\"CLMgzUANnetf47g9JeXRCe6kGxPuY8cr\",\"client_secret\":\"F17TnuRdmwtorI36Sg7xLxiYc5kk-gHTUZbgLycLrWuXwgNx-BdLPtLm8OBCEVYQ\",\"audience\":\"https://quickstarts/api\",\"grant_type\":\"client_credentials\"}", ParameterType.RequestBody);
            RestResponse response = client.Execute(request);

            Console.WriteLine("Result : "+response);
        }
    }
}
