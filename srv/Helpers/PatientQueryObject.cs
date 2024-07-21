namespace srv.Helpers;

public class PatientQueryObject: QueryObject
{
    public string? Name { get; set; } = null;
    public string? NationalId { get; set; } = null;

}