using CommonLibrary.Results;
using Microsoft.AspNetCore.Mvc;

namespace SiteManager.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class IntroductionController : ControllerBase
    {
        [HttpGet]
        public IActionResult Load()
        {
            var result = new Result<IList<Introduction>>([]);

            var introdutions = new List<Introduction>
            {
                new Introduction(Guid.NewGuid().ToString(),"Google","https://www.google.com/","0001","Test1"),
                new Introduction(Guid.NewGuid().ToString(),"Yahoo","https://www.yahoo.co.jp/","0002","Test2"),
                new Introduction(Guid.NewGuid().ToString(),"Wiki","https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8","0003","Test3"),
                new Introduction(Guid.NewGuid().ToString(),"Google","https://www.google.com/","0001","Test1"),
                new Introduction(Guid.NewGuid().ToString(),"Yahoo","https://www.yahoo.co.jp/","0002","Test2"),
                new Introduction(Guid.NewGuid().ToString(),"Wiki","https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8","0003","Test3"),
                new Introduction(Guid.NewGuid().ToString(),"Google","https://www.google.com/","0001","Test1"),
                new Introduction(Guid.NewGuid().ToString(),"Yahoo","https://www.yahoo.co.jp/","0002","Test2"),
                new Introduction(Guid.NewGuid().ToString(),"Wiki","https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8","0003","Test3"),
                new Introduction(Guid.NewGuid().ToString(),"Google","https://www.google.com/","0001","Test1"),
                new Introduction(Guid.NewGuid().ToString(),"Yahoo","https://www.yahoo.co.jp/","0002","Test2"),
                new Introduction(Guid.NewGuid().ToString(),"Wiki","https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8","0003","Test3"),
                new Introduction(Guid.NewGuid().ToString(),"Google","https://www.google.com/","0001","Test1"),
                new Introduction(Guid.NewGuid().ToString(),"Yahoo","https://www.yahoo.co.jp/","0002","Test2"),
                new Introduction(Guid.NewGuid().ToString(),"Wiki","https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8","0003","Test3"),
                new Introduction(Guid.NewGuid().ToString(),"Google","https://www.google.com/","0001","Test1"),
                new Introduction(Guid.NewGuid().ToString(),"Yahoo","https://www.yahoo.co.jp/","0002","Test2"),
                new Introduction(Guid.NewGuid().ToString(),"Wiki","https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8","0003","Test3"),

            };

            result.Data = introdutions;

            return new JsonResult(result);
        }

        [HttpPost]
        public Result Update(UpdateParams parameters)
        {
            var result = new Result();
            return result;
        }
    }

    public class UpdateParams
    {
        public string Title { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
    }

    public class Introduction(string id, string title, string url, string userId, string userName)
    {
        public string Id { get; set; } = id;
        public string Title { get; set; } = title;
        public string Url { get; set; } = url;
        public string UserId { get; set; } = userId;
        public string UserName { get; set; } = userName;
    }
}
