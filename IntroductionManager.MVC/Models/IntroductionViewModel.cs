using CommonLibrary.Enums;
using System.ComponentModel.DataAnnotations;

namespace IntroductionManager.MVC.Models
{
    public class IntroductionViewModel
    {
        public string Id { get; set; } = string.Empty;
        [Required]
        public string Title { get; set; } = string.Empty;
        [Required]
        public string Url { get; set; } = string.Empty;
        public string UserId { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public UserType UserType { get; set; }
    }
}
