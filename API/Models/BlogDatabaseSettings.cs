namespace API.Models
{
    public class BlogDatabaseSettings : IBlogDatabaseSettings
    {
        public string BlogCollectionName { get; set; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
    }
}