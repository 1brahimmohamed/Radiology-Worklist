using srv.Helpers;

namespace srv.Models;

public interface User
{
    public string Name { get; set; }
    public string? Email { get; set; }
    public Gender Gender { get; set; }

    public List<Exam> Exams { get; set; }
}