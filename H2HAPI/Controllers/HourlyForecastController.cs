using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewProjectAPI.Weather;

namespace NewProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HourlyForecastController : ControllerBase
    {

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get(string latitude, string longitude)
        {
            if (String.IsNullOrEmpty(latitude) || String.IsNullOrEmpty(longitude))
            {
                return NotFound("Latitude and Longitude are required: /hourlyforecast?latitude=xxxx&longitude=yyyy");
            }

            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri("http://api.weather.gov");
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Add("User-Agent", "web api client");

                    var streamTask = client.GetStreamAsync($"/points/{latitude},{longitude}/forecast/hourly");

                    var serializer = new DataContractJsonSerializer(typeof(HourlyWeather));

                    var hourlyWeather = serializer.ReadObject(await streamTask) as HourlyWeather;

                    return Ok(hourlyWeather.properties);
                }
                catch (HttpRequestException httpRequestException)
                {
                    return NotFound("Could not retrieve hourly forecast" + httpRequestException);
                }
            }
        }
    }
}