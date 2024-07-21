using System.ComponentModel.DataAnnotations.Schema;
using srv.Helpers;

namespace srv.Models;

[Table("Exams")]
public class Exam
{
    public int Id { get; set; }
    public DateTime Date { get; set; } = DateTime.Now;
    
    public string Type { get; set; } = String.Empty;
    
    public ExamStatus Status { get; set; } = ExamStatus.Scheduled;
    public string? Comments { get; set; } = String.Empty;
    
    public string RadiologistId { get; set; } = String.Empty;
    
    public Radiologist Radiologist { get; set; } = null!;
    
    public int PatientId { get; set; }
    public Patient Patient { get; set; } = null!;
}