using System.ComponentModel.DataAnnotations;
using srv.Helpers;
using srv.Models;

namespace srv.Dtos.Patient;

public class CreatePatientRequestDto
{
    [Required]
    [MaxLength(14, ErrorMessage = "National Id cannot be over 14 over characters")]
    [MinLength(14, ErrorMessage = "National Id cannot be below 14 over characters")]
    public string NationalId { get; set; } = String.Empty;

    [Required] public string Name { get; set; } = String.Empty;
    [Required] [EmailAddress] public string Email { get; set; } = String.Empty;
    [Required] public DateTime Birthday { get; set; } = DateTime.Now;
    [Required] public Gender Gender { get; set; } = Gender.Male;
}