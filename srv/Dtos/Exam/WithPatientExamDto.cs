using srv.Dtos.Patient;
using srv.Dtos.Radiologist;
using srv.Helpers;
using srv.Models;

namespace srv.Dtos.Exam;

public class WithPatientExamDto
{
    public int Id { get; set; }
    public DateTime Date { get; set; } = DateTime.Now;
    public ExamStatus Status { get; set; } = ExamStatus.Scheduled;
    public string? Comments { get; set; } = String.Empty;
    public string Type { get; set; } = String.Empty;
    public RadiologistExamDto Radiologist { get; set; } = null!;
}