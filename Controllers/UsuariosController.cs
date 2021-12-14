using Microsoft.AspNetCore.Mvc;
using PremierAngular.Models;
using ProjectAngularTeste.DTO;
using ProjectAngularTeste.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAngularTeste.Controllers
{
    [Route("api/[controller]")] // data anotation tera este comportamentos
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
        [HttpPost("createuser")] //Endpoints Rest
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

        [HttpPost("login")] //Endpoints Rest
        public IActionResult GenerateLogin([FromBody] LoginUsuarioDTO user)
        {
            if (!ModelState.IsValid) // verificar se usuario existe no banco
            {
                return BadRequest(ModelState.Values);
            }

            var userResult = _context.Usuarios.FirstOrDefault(u => u.Email == user.Email && u.Senha == user.Senha);

            if (userResult == null)
            {
                return BadRequest("Usuário não encontrado");
            }

            //Gerar token e retornar ao FrontEnd

            var token = TokenService.GenerateToken(userResult);
             
            return Ok(token);
        }


    }
}
