namespace srv.Dtos.Patient;

public class UpdatePatientRequestDto
{
    public string Name { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public DateTime Birthday { get; set; } = DateTime.Now;
}