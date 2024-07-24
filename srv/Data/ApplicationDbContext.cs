using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using srv.Models;

namespace srv.Data;

public class ApplicationDbContext : IdentityDbContext<Radiologist>
{
    public DbSet<Patient> Patients { get; set; }
    public DbSet<Exam> Exams { get; set; }

    public ApplicationDbContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Patient>()
            .HasIndex(p => p.NationalId)
            .IsUnique();

        modelBuilder.Entity<Patient>()
            .HasIndex(p => p.Email)
            .IsUnique();

        modelBuilder.Entity<Patient>()
            .HasMany(p => p.Exams)
            .WithOne(e => e.Patient)
            .HasForeignKey(e => e.PatientId);

        modelBuilder.Entity<Radiologist>()
            .HasMany(r => r.Exams)
            .WithOne(e => e.Radiologist)
            .HasForeignKey(e => e.RadiologistId);


        List<IdentityRole> roles = new List<IdentityRole>
        {
            new IdentityRole
            {
                Name = "Admin",
                NormalizedName = "ADMIN"
            },
            new IdentityRole
            {
                Name = "User",
                NormalizedName = "USER"
            },
        };
        modelBuilder.Entity<IdentityRole>().HasData(roles);
    }
}