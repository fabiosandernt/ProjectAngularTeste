using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PremierAngular.Models
{
    public class Usuario { 
    
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nome Obrigatório")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email Obrigatório"), EmailAddress(ErrorMessage ="Email inválido")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Senha Obrigatório")]
        public string Senha { get; set; }

    }
}
