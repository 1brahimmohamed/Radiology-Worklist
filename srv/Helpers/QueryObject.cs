namespace srv.Helpers;

public class QueryObject
{
    public string? SortBy { get; set; } = null;
    public bool IsSortingDescending { get; set; } = false;
    public int PageNumber { get; set; } = 1;
    public int PageSize { get; set; } = 50;
}