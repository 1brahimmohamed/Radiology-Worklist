using Microsoft.EntityFrameworkCore;
using srv.Data;
using srv.Dtos.Exam;
using srv.Helpers;
using srv.Interfaces;
using srv.Models;

namespace srv.Repository;

public class ExamRepository: IExamRepository
{
    private readonly ApplicationDbContext _context;

    public ExamRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Exam>> GetAllAsync(ExamQueryObject query)
    {
        var examModels = _context.Exams
            .Include(e => e.Patient)
            .Include(e => e.Radiologist)
            .AsQueryable();

        if (query.Date != null)
        {
            examModels = examModels.Where(e => e.Date == query.Date);
        }

        if (query.Status != null)
        {
            examModels = examModels.Where(e => e.Status == query.Status);
        }

        if (!string.IsNullOrWhiteSpace(query.SortBy))
        {
            if (query.SortBy.Equals("Date", StringComparison.OrdinalIgnoreCase))
            {
                examModels = query.IsSortingDescending
                    ? examModels.OrderByDescending(p => p.Date)
                    : examModels.OrderBy(p => p.Date);
            }

            else if (query.SortBy.Equals("Status", StringComparison.OrdinalIgnoreCase))
            {
                examModels = query.IsSortingDescending
                    ? examModels.OrderByDescending(p => p.Status)
                    : examModels.OrderBy(p => p.Status);
            }
        }
        
        var skipNumber = (query.PageNumber - 1) * query.PageSize;

        return await examModels
            .Skip(skipNumber)
            .Take(query.PageSize)
            .ToListAsync();
        
    }

    public async Task<Exam?> GetByIdAsync(int id)
    {
        return await _context.Exams
            .Include(e => e.Patient)
            .Include(e=> e.Radiologist)
            .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<Exam?> CreateAsync(Exam examModel)
    {
        await _context.Exams.AddAsync(examModel);
        await _context.SaveChangesAsync();
        return examModel;
    }

    public async Task<Exam?> UpdateAsync(int id, UpdateExamRequestDto updateExamDto)
    {
       var existingExam = await _context.Exams.FirstOrDefaultAsync(p => p.Id == id);

        if (existingExam == null)
        {
            return null;
        }

        existingExam.Status = updateExamDto.Status;
        existingExam.Comments = updateExamDto.Comments;
        existingExam.Date = updateExamDto.Date;
        existingExam.RadiologistId = updateExamDto.RadiologistId;

        
        await _context.SaveChangesAsync();

        return existingExam;
    }

    public async Task<Exam?> DeleteAsync(int id)
    {
        var examModel = await _context.Exams.FirstOrDefaultAsync(e => e.Id == id);

        if (examModel == null)
        {
            return null;
        }

        _context.Exams.Remove(examModel);
        await _context.SaveChangesAsync();
        return examModel;
    }
}