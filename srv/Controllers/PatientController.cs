using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using srv.Data;
using srv.Dtos.Patient;
using srv.Helpers;
using srv.Interfaces;
using srv.Mappers;

namespace srv.Controllers;

[Route("api/patient")]
[ApiController]
public class PatientController : ControllerBase
{
    private readonly IPatientRepository _patientRepo;

    public PatientController(ApplicationDbContext context, IPatientRepository patientRepo)
    {
        _patientRepo = patientRepo;
    }


    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetAll([FromQuery] PatientQueryObject query)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var patients = await _patientRepo.GetAllAsync(query);


        var patientDto = patients.Select(s => s.ToPatientDto()).ToList();

        return Ok(patientDto);
    }

    [HttpGet("{id:int}")]
    [Authorize]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var patient = await _patientRepo.GetByIdAsync(id);

        if (patient == null)
        {
            return NotFound("No Patient with this ID was found.");
        }

        return Ok(patient.ToPatientDto());
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Create([FromBody] CreatePatientRequestDto createPatientDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var patientModel = createPatientDto.ToPatientFromCreateDto();

        await _patientRepo.CreateAsync(patientModel);

        return CreatedAtAction(nameof(GetById), new { id = patientModel.Id }, patientModel.ToPatientDto());
    }

    [HttpPut("{id:int}")]
    [Authorize]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePatientRequestDto updatePatientDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var patientModel = await _patientRepo.UpdateAsync(id, updatePatientDto);

        if (patientModel == null)
        {
            return NotFound("No Patient with this ID was found.");
        }

        return Ok(patientModel.ToPatientDto());
    }

    [HttpDelete("{id:int}")]
    [Authorize]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var patientModel = await _patientRepo.DeleteAsync(id);

        if (patientModel == null)
        {
            return NotFound("No Patient with this ID was found.");
        }

        return NoContent();
    }
}
