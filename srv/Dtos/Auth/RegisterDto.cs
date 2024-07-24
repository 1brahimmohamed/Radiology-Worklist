using System.ComponentModel.DataAnnotations;
using srv.Helpers;

namespace srv.Dtos.Auth;

public class RegisterDto
{
    [Required] public string? Name { get; set; } = null;
    [Required] [EmailAddress] public string? Email { get; set; } = null;
    [Required] public string? Password { get; set; } = null;

    [Required] public Gender Gender { get; set; } = Helpers.Gender.Male;
}