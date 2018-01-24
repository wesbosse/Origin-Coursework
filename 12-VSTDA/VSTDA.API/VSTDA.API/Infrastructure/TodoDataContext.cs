using System.Data.Entity;
using VSTDA.API.Models;

namespace VSTDA.API.Infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("ToDoDB")
        {
                
        }
        public IDbSet<ToDoModel> ToDoModels { get; set; }
    }
}