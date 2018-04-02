
using YouPub.ViewModels.Validations;
using FluentValidation.Attributes;

namespace YouPub.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
