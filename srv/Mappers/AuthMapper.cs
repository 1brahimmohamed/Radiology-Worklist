using srv.Dtos.Auth;
using srv.Models;

namespace srv.Mappers;

public static class AuthMapper
{
    public static RadiologistDto ToRadiologyDto(this Radiologist radiologist, string token)
    {
        return new RadiologistDto
        {
            Id = radiologist.Id,
            Name = radiologist.Name,
            Email = radiologist.Email,
            Token = token
        };
    }

    public static RegisterDto ToRegisterDto(this Radiologist radiologist)
    {
        return new RegisterDto
        {
            Name = radiologist.UserName,
            Email = radiologist.Email,
            Gender = radiologist.Gender,
        };
    }

    public static LoginDto ToLoginDto(this Radiologist radiologist)
    {
        return new LoginDto
        {
            Email = radiologist.Email,
            Password = radiologist.PasswordHash
        };
    }
}