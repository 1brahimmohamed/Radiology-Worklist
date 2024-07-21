using srv.Dtos.Exam;
using srv.Helpers;
using srv.Models;

namespace srv.Dtos.Patient;

public class PatientDto
{
    public int Id { get; set; }
    public string NationalId { get; set; } = String.Empty;
    public DateTime Birthday { get; set; } = DateTime.Now;
    public string Name { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public Gender Gender { get; set; } = Gender.Male;
    public List<WithPatientExamDto> Exams { get; set; } = new List<WithPatientExamDto>();
}