using srv.Models;

namespace srv.Helpers;

public class ExamQueryObject : QueryObject
{
    public string? RadiologistId { get; set; } = null;
    public DateTime? Date { get; set; } = null;
    public ExamStatus? Status { get; set; } = null;
}