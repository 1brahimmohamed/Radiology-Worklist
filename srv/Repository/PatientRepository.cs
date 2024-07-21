using Microsoft.EntityFrameworkCore;
using srv.Data;
using srv.Dtos.Patient;
using srv.Helpers;
using srv.Interfaces;
using srv.Models;

namespace srv.Repository;

public class PatientRepository : IPatientRepository
{
    private readonly ApplicationDbContext _context;

    public PatientRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Patient>> GetAllAsync(PatientQueryObject query)
    {
        var patientModels = _context.Patients
            .Include(p => p.Exams)
            .ThenInclude(e => e.Radiologist)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(query.Name))
        {
            patientModels = patientModels.Where(p => p.Name.Contains(query.Name));
        }

        if (!string.IsNullOrWhiteSpace(query.NationalId))
        {
            patientModels = patientModels.Where(p => p.NationalId.Contains(query.NationalId));
        }

        if (!string.IsNullOrWhiteSpace(query.SortBy))
        {
            if (query.SortBy.Equals("NationalId", StringComparison.OrdinalIgnoreCase))
            {
                patientModels = query.IsSortingDescending
                    ? patientModels.OrderByDescending(p => p.NationalId)
                    : patientModels.OrderBy(p => p.NationalId);
            }
        }
        
        var skipNumber = (query.PageNumber - 1) * query.PageSize;

        return await patientModels
            .Skip(skipNumber)
            .Take(query.PageSize)
            .ToListAsync();
    }

    public async Task<Patient?> GetByIdAsync(int id)
    {
        return await _context.Patients
            .Include(p => p.Exams)
            .ThenInclude(e => e.Radiologist)
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<Patient?> GetByNationalIdAsync(string nationalId)
    {
        return await _context.Patients
            .Include(p => p.Exams)
            .FirstOrDefaultAsync(p => p.NationalId == nationalId);
    }

    public async Task<Patient?> CreateAsync(Patient patientModel)
    {
        await _context.Patients.AddAsync(patientModel);
        await _context.SaveChangesAsync();
        return patientModel;
    }

    public async Task<Patient?> UpdateAsync(int id, UpdatePatientRequestDto updatePatientDto)
    {
        var existingPatient = await _context.Patients.FirstOrDefaultAsync(p => p.Id == id);

        if (existingPatient == null)
        {
            return null;
        }

        existingPatient.Name = updatePatientDto.Name;
        existingPatient.Email = updatePatientDto.Name;
        existingPatient.Birthday = updatePatientDto.Birthday;
        
        await _context.SaveChangesAsync();

        return existingPatient;
    }

    public async Task<Patient?> DeleteAsync(int id)
    {
        var patientModel = await _context.Patients.FirstOrDefaultAsync(p => p.Id == id);

        if (patientModel == null)
        {
            return null;
        }

        _context.Patients.Remove(patientModel);
        await _context.SaveChangesAsync();
        return patientModel;
    }

    public Task<bool> PatientExists(int id)
    {
        return _context.Patients.AnyAsync(p => p.Id == id);
    }

    public async Task<string> DatabaseIdToNationalId(int id)
    {
        var patient = await _context.Patients.FindAsync(id);

        return patient?.NationalId;
    }
}