using srv.Dtos.Exam;
using srv.Dtos.Patient;
using srv.Dtos.PatientAndExam;
using srv.Dtos.Radiologist;
using srv.Models;

namespace srv.Mappers;

public static class ExamMapper
{
    
    public static ExamDto ToExamDto(this Exam exam)
    {
        return new ExamDto
        {
            Id = exam.Id,
            Status = exam.Status,
            Type = exam.Type,
            Date = exam.Date,
            Comments = exam.Comments,
            Radiologist = exam.Radiologist.ToRadiologistExamDto(),
            Patient = exam.Patient.ToWithExamPatientDto(),
        };
    }
    
    public static Exam ToExamFromCreateDto(this CreateExamRequestDto createExamRequestDto)
    {
        return new Exam
        {
            Date = createExamRequestDto.Date,
            Status = createExamRequestDto.Status,
            Type = createExamRequestDto.Type,
            Comments = createExamRequestDto.Comments,
            RadiologistId = createExamRequestDto.RadiologistId,
            PatientId = createExamRequestDto.PatientId,
        };
    }
    
    public static Exam ToExamFromUpdateDto(this UpdateExamRequestDto updateExamRequestDto, int patientId)
    {
        return new Exam
        {
            Date = updateExamRequestDto.Date,
            Status = updateExamRequestDto.Status,
            Type = updateExamRequestDto.Type,
            Comments = updateExamRequestDto.Comments,
            RadiologistId = updateExamRequestDto.RadiologistId,
            PatientId = patientId,
        };
    }

    public static WithPatientExamDto ToWithExamPatientDto(this Exam exam)
    {
        return new WithPatientExamDto
        {
            Id = exam.Id,
            Date = exam.Date,
            Status = exam.Status,
            Comments = exam.Comments,
            Type = exam.Type,
            Radiologist = exam.Radiologist.ToRadiologistExamDto(),
        };
    }
    
    public static RadiologistExamDto ToRadiologistExamDto(this Radiologist radiologist)
    {
        return new RadiologistExamDto
        {
            Name = radiologist.Name,
            Id = radiologist.Id,
        };
    }

    public static Exam ToExamFromCreatePatientAndExamRequestDto(
        this CreatePatientAndExamRequestDto createPatientAndExamRequestDto, int patientId)
    {
        return new Exam
        {
            Date = createPatientAndExamRequestDto.Date,
            Status = createPatientAndExamRequestDto.Status,
            Type = createPatientAndExamRequestDto.Type,
            Comments = createPatientAndExamRequestDto.Comments,
            RadiologistId = createPatientAndExamRequestDto.RadiologistId,
            PatientId = patientId,
        };
    }
}