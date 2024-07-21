using srv.Dtos.Patient;
using srv.Models;

namespace srv.Mappers;

public static class PatientMapper
{
    public static PatientDto ToPatientDto(this Patient patientModel)
    {
        return new PatientDto
        {
            Id = patientModel.Id,
            NationalId = patientModel.NationalId,
            Name = patientModel.Name,
            Email = patientModel.Email,
            Gender = patientModel.Gender,
            Birthday = patientModel.Birthday,
            Exams = patientModel.Exams.Select(e => e.ToWithExamPatientDto()).ToList(),
        };
    }
    public static Patient ToPatientFromCreateDto(this CreatePatientRequestDto createPatientRequestDto)
    {
        return new Patient
        {
            NationalId = createPatientRequestDto.NationalId,
            Name = createPatientRequestDto.Name,
            Email = createPatientRequestDto.Email,
            Gender = createPatientRequestDto.Gender,
            Birthday = createPatientRequestDto.Birthday,
        };

    }
    
    public static Patient ToPatientFromUpdateDto(this UpdatePatientRequestDto updatePatientRequestDto )
    {
        return new Patient
        {
            Name = updatePatientRequestDto.Name,
            Email = updatePatientRequestDto.Email,
            Birthday = updatePatientRequestDto.Birthday,
        };
    }

    public static WithExamPatientDto ToWithExamPatientDto(this Patient patient)
    {
        return new WithExamPatientDto
        {
            Id = patient.Id,
            NationalId = patient.NationalId,
            Name = patient.Name,
            Email = patient.Email,
            Birthday = patient.Birthday,
            Gender = patient.Gender,
        };
    }

}