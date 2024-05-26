using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CommonLibrary.Results
{
    public class Result<T>(T data)
    {
        public bool HasError { get; set; } = false;
        public IList<string> ErrorMessages { get; set; } = [];
        public T Data { get; set; } = data;

        public void AddMessage(string message)
        {
            ErrorMessages.Add(message);
            HasError = true;
        }
    }

    public class Result
    {
        public bool HasError { get; set; } = false;
        public IList<string> ErrorMessages { get; set; } = [];

        public void AddMessage(string message)
        {
            ErrorMessages.Add(message);
            HasError = true;
        }
    }
}
