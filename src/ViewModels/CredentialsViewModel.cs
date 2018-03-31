
using GlobalBlueprint.ViewModels.Validations;
using FluentValidation.Attributes;

namespace GlobalBlueprint.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
