using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using srv.Helpers;

namespace srv.Models;

[Table("Patients")]
public class Patient: User
{
    public int Id { get; set; }
    public string NationalId { get; set; } = String.Empty;
    public string Name { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public Gender Gender { get; set; } = Gender.Male;
    public DateTime Birthday { get; set; } = DateTime.Now;
    public List<Exam> Exams { get; set; } = new List<Exam>();
}