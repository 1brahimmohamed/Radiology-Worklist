using srv.Helpers;

namespace srv.Dtos.Patient;

public class WithExamPatientDto
{
    public int Id { get; set; }
    public string NationalId { get; set; } = String.Empty;
    public string Name { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public DateTime Birthday { get; set; } = DateTime.Now;
    public Gender Gender { get; set; } = Gender.Male;
}