using Microsoft.AspNetCore.Mvc;
using PremierAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAngularTeste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsuariosController : ControllerBase
    {
        private readonly Context _context;
        public UsuariosController(Context context)
        {
            _context = context;
        }

        /// <summary>
        /// Cadastro de Usuário
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost] //Endpoints Rest
        public IActionResult CreateUSer([FromBody] Usuario user)
        {
            if (!ModelState.IsValid) // verificar se as datas anotation criadas na models Usuarios são validas
            {     
                return BadRequest(ModelState.Values);
            }

            var userResult = _context.Usuarios.FirstOrDefault(u => u.Email == user.Email);

            if (userResult != null)
            {
                return BadRequest("Usuário já cadastrado");
            }
            _context.Usuarios.Add(user); //adicionei a memoria
            _context.SaveChanges(); // salvei dentro do banco efetivamente
            return Ok();
        }

    }
}
