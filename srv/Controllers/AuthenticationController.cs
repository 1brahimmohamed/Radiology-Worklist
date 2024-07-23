using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using srv.Dtos.Auth;
using srv.Interfaces;
using srv.Models;

namespace srv.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<Radiologist> _userManager;
        private readonly ITokenService _tokenService;
        private readonly SignInManager<Radiologist> _signinManager;
        public AuthenticationController(UserManager<Radiologist> userManager, ITokenService tokenService, SignInManager<Radiologist> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signinManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == loginDto.Email.ToLower());

            if (user == null)
                return Unauthorized("Invalid Credentials! Try again");

            var result = await _signinManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
                return Unauthorized("Username not found and/or password incorrect");

            return Ok(
                new RadiologistDto()
                {
                    Name = user.Name,
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user)
                }
            );
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var appUser = new Radiologist
                {
                    Email = registerDto.Email,
                    Gender = registerDto.Gender,
                    Name = registerDto.Name,
                    UserName = registerDto.Email
                };

                var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
                    if (roleResult.Succeeded)
                    {
                        return Ok(
                            new RadiologistDto()
                            {
                                Name = appUser.Name,
                                Email = appUser.Email,
                                Token = _tokenService.CreateToken(appUser)
                            }
                        );
                    }
                    else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }
    }
}
