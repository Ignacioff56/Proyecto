using Microsoft.EntityFrameworkCore;
using TPI_Fernandez_Ignacio.Entities;

namespace TPI_Fernandez_Ignacio.Data
{
    public class ArticleDbContext : DbContext
    {
        public ArticleDbContext(DbContextOptions<ArticleDbContext> options)
            :base (options)
        {

        }
        public DbSet<Article> Articles { get; set; }
    }
}
