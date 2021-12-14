using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAngularTeste.DTO
{
    public class LoginUsuarioDTO
    {   
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }
    }
}
