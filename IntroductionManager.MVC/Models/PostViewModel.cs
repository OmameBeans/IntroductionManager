using CommonLibrary.Results;

namespace IntroductionManager.MVC.Models
{
	public class PostViewModel
	{
		public Result Result { get; set; } = new Result();
		public bool showResult { get; set; } = false;
		public IntroductionViewModel Introduction { get; set; } = new IntroductionViewModel();
	}
}
