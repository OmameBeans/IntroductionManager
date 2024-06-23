using CommonLibrary.Results;
using IntroductionManager.MVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace IntroductionManager.MVC.Controllers
{
    public class PostController : Controller
    {
        public IActionResult Index()
        {
            var postViewModel = new PostViewModel();

            postViewModel.Introduction = new IntroductionViewModel
            {
                Title = "post-test",
                Url = "post-url",
            };

            return View(postViewModel);
        }

        public IActionResult Update(PostViewModel model)
        {
            model.showResult = true;
            var result = new Result();
            result.AddMessage("messageTest1");
            result.AddMessage("messageTest2");
            result.AddMessage("messageTest3");
            model.Result = result;

            return View("Index",model);
        }
    }
}
