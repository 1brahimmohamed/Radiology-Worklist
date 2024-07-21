using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using srv.Dtos.Exam;
using srv.Helpers;
using srv.Interfaces;
using srv.Mappers;

namespace srv.Controllers;

[Route("api/exam")]
[ApiController]
public class ExamController: ControllerBase
{
    private readonly IExamRepository _examRepo;
    private readonly IPatientRepository _patientRepo;

    public ExamController(IExamRepository examRepo, IPatientRepository patientRepo)
    {
        _examRepo = examRepo;
        _patientRepo = patientRepo;
    }
    
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetAll([FromQuery] ExamQueryObject query)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var exams = await _examRepo.GetAllAsync(query);

        var examDto = exams.Select(s => s.ToExamDto()).ToList();

        return Ok(examDto);
    }
    
    [HttpGet("{id}")]
    [Authorize]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var exam = await _examRepo.GetByIdAsync(id);

        if (exam == null)
        {
            return NotFound();
        }

        return Ok(exam.ToExamDto());
    }
    
    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Create([FromBody] CreateExamRequestDto createExamDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var patient = await _patientRepo.GetByIdAsync(createExamDto.PatientId);

        if (patient == null)
        {
            return NotFound("Patient Not Found");
        }
        
        var examModel = createExamDto.ToExamFromCreateDto();

        await _examRepo.CreateAsync(examModel);

        return CreatedAtAction(nameof(GetById), new { id = examModel.Id }, examModel.ToExamDto());
    }
    
    [HttpPut("{id}")]
    [Authorize]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateExamRequestDto updateExamDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var examModel = await _examRepo.GetByIdAsync(id);

        if (examModel == null)
        {
            return NotFound();
        }
        
        await _examRepo.UpdateAsync(id, updateExamDto);

        return Ok(examModel.ToExamDto());
    }
    
    [HttpDelete("{id}")]
    [Authorize]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var examModel = await _examRepo.GetByIdAsync(id);

        if (examModel == null)
        {
            return NotFound();
        }

        await _examRepo.DeleteAsync(id);

        return NoContent();
    }

}