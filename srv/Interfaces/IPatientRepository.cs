using srv.Dtos.Patient;
using srv.Helpers;
using srv.Models;

namespace srv.Interfaces;

public interface IPatientRepository
{
    Task<List<Patient>> GetAllAsync(PatientQueryObject query);
    Task<Patient?> GetByIdAsync(int id);
    Task<Patient?> GetByNationalIdAsync(string nationalId);
    Task<Patient?> CreateAsync(Patient patientModel);
    Task<Patient?> UpdateAsync(int id, UpdatePatientRequestDto updatePatientDto);
    Task<Patient?> DeleteAsync(int id);
    Task<bool> PatientExists(int id);
    Task<string?> DatabaseIdToNationalId(int id);
}