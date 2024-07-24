using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using srv.Helpers;

namespace srv.Models;

[Table("Radiologists")]
public class Radiologist : IdentityUser, User
{
    public string Name { get; set; } = string.Empty;
    public Gender Gender { get; set; } = Gender.Male;
    public List<Exam> Exams { get; set; } = new List<Exam>();
}