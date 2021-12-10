using Microsoft.EntityFrameworkCore;
using PremierAngular.Models;
using ProjectAngularTeste.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAngularTeste.Controllers
{
    public class Context : DbContext
    {
        // falar pro entity que eu vou ter uma tabela de veiculo, quando precisar acessar ela basta referenciar o context
        public DbSet<Veiculo> Veiculos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBilder)
        {
            optionsBilder.UseSqlServer(connectionString: @"Server=BYCLOUD\SQLEXPRESS;Database=Premier;Integrated Security=True");
        }
    }
}
