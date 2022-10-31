using Microsoft.AspNetCore.Mvc;

namespace TPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : Controller
    {
        [HttpGet("{id}")]

        public string Get(int Id)
        {
            return Id switch
            {
                1 => "Ignacio",
                2 => "Crotolamo",
                _ => throw new NotSupportedException("id Invalido")
            };
        }
        [HttpPost]

        public string Post(ArticleDto Article)
        {
            return Article.Nombre;
        }



    }

    public class ArticleDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public string Price { get; set; }

        public string Category { get; set; }

        public string Image { get; set; }
    }
}
