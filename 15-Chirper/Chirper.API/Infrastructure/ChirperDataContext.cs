using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using Chirper.API.Models;

namespace Chirper.API.Infrastructure
{
    public class ChirperDataContext : IdentityDbContext<ChirperUser>
    {
        public ChirperDataContext() : base("Chirper")
        {
        }

        public IDbSet<Post> Posts { get; set; }
        public IDbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Configures one to many relationship between Post and Comments
            modelBuilder.Entity<Post>()
                .HasMany(l => l.Comments)
                .WithRequired(h => h.Post)
                .HasForeignKey(h => h.PostId);

            //Configure one to many relationship between user and Post
            modelBuilder.Entity<ChirperUser>()
                .HasMany(u => u.Posts)
                .WithRequired(l => l.User)
                .HasForeignKey(l => l.UserId);

            //Configure one to many relationship between user and Comment
            modelBuilder.Entity<ChirperUser>()
                .HasMany(u => u.Comments)
                .WithRequired(h => h.User)
                .HasForeignKey(h => h.UserId)
                .WillCascadeOnDelete(false);

            base.OnModelCreating(modelBuilder);
        }
    }
}