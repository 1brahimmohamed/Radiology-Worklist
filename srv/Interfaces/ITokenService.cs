using srv.Models;

namespace srv.Interfaces;

public interface ITokenService
{
    string CreateToken(Radiologist radiologist);
}