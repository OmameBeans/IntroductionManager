namespace IntroductionManager.MVC.Models
{
    public class HomeViewModel
    {
        public IList<IntroductionViewModel> InstructorIntroductions { get; set; } = [];
        public IList<IntroductionViewModel> NewEmployeeIntroductions { get; set; } = [];

        public HomeViewModel()
        {
            InstructorIntroductions.Add(new IntroductionViewModel
            {
                Id = Guid.NewGuid().ToString(),
                Title = "講師テスト1",
                Url = "UrlTest1",
                UserId = "UserTest1",
                UserName = "UserNameTest1",
                UserType = CommonLibrary.Enums.UserType.Instructor,
            });
            InstructorIntroductions.Add(new IntroductionViewModel
            {
                Id = Guid.NewGuid().ToString(),
                Title = "講師テスト2",
                Url = "UrlTest2",
                UserId = "UserTest2",
                UserName = "UserNameTest2",
                UserType = CommonLibrary.Enums.UserType.Instructor,
            });

            NewEmployeeIntroductions.Add(new IntroductionViewModel
            {
                Id = Guid.NewGuid().ToString(),
                Title = "新人テスト1",
                Url = "UrlTest1",
                UserId = "NewEmployeeTest1",
                UserName = "NewEmployeeNameTest1",
                UserType = CommonLibrary.Enums.UserType.NewEmployee,
            });
            NewEmployeeIntroductions.Add(new IntroductionViewModel
            {
                Id = Guid.NewGuid().ToString(),
                Title = "新人テスト2",
                Url = "UrlTest2",
                UserId = "NewEmployeeTest2",
                UserName = "NewEmployeeNameTest2",
                UserType = CommonLibrary.Enums.UserType.NewEmployee,
            });
        }
    }
}
