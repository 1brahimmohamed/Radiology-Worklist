using srv.Dtos.Exam;
using srv.Helpers;
using srv.Models;

namespace srv.Interfaces;

public interface IExamRepository
{
    Task<List<Exam>> GetAllAsync(ExamQueryObject query);
    Task<Exam?> GetByIdAsync(int id);
    Task<Exam?> CreateAsync(Exam examModel);
    Task<Exam?> UpdateAsync(int id, UpdateExamRequestDto updateExamDto);
    Task<Exam?> DeleteAsync(int id);
}