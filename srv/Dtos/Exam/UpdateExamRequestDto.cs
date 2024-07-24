using srv.Helpers;
using srv.Models;

namespace srv.Dtos.Exam;

public class UpdateExamRequestDto
{
    public DateTime Date { get; set; } = DateTime.Now;
    public ExamStatus Status { get; set; } = ExamStatus.Scheduled;
    public string? Comments { get; set; } = String.Empty;

    public string Type { get; set; } = String.Empty;

    public string RadiologistId { get; set; }
}