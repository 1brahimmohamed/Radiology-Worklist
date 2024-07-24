using System.ComponentModel.DataAnnotations;
using srv.Helpers;

namespace srv.Dtos.PatientAndExam;

public class CreatePatientAndExamRequestDto
{
    // Patient
    [Required]
    [MaxLength(14, ErrorMessage = "National Id cannot be over 14 over characters")]
    [MinLength(14, ErrorMessage = "National Id cannot be below 14 over characters")]
    public string NationalId { get; set; } = String.Empty;

    [Required] public string Name { get; set; } = String.Empty;
    [Required] [EmailAddress] public string Email { get; set; } = String.Empty;
    [Required] public DateTime Birthday { get; set; } = DateTime.Now;
    [Required] public Gender Gender { get; set; } = Gender.Male;

    // Exam
    public DateTime Date { get; set; } = DateTime.Now;
    public ExamStatus Status { get; set; } = ExamStatus.Scheduled;
    public string? Comments { get; set; } = String.Empty;
    public string Type { get; set; } = String.Empty;
    public string RadiologistId { get; set; } = String.Empty;
}