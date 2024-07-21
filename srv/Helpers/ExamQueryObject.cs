namespace srv.Helpers;

public class ExamQueryObject: QueryObject
{
    public DateTime? Date { get; set; } = null;
    public ExamStatus? Status { get; set; } = null;
}