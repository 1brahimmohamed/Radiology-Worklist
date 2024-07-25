using srv.Helpers;
using srv.Models;

namespace srv.Dtos.Exam;

public class CreateExamRequestDto
{
    public DateTime Date { get; set; } = DateTime.Now;
    public ExamStatus Status { get; set; } = ExamStatus.Scheduled;
    public string? Comments { get; set; } = String.Empty;

    public string Type { get; set; } = String.Empty;

    public int PatientId { get; set; }
    public string RadiologistId { get; set; } = String.Empty;
}