namespace API.Models
{
    public interface IBlogDatabaseSettings {
        
        string BlogCollectionName {get; set;}
        string ConnectionString {get; set;}
        string DatabaseName {get; set;}
    }   
    
}