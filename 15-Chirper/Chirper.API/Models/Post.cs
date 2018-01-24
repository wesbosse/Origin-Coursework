using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chirper.API.Models
{
    public class Post
    {
        //primary key
        public int PostId { get; set; }
        public string UserId { get; set; }

        //relevant
        public string TaskName { get; set; }
        public string TaskInfo { get; set; }
        public DateTime TaskDue { get; set; }
        public int TaskDuration { get; set; }


        //relationship key
        public virtual ChirperUser User { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }

    }
}