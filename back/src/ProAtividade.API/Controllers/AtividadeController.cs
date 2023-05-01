using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>()
            {
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
            };

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return Atividades; 
        
        }
        [HttpGet("{id}")]
        public Atividade GetById(int id)
        {
            return Atividades.FirstOrDefault(ativ => ativ.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            return Atividades.Append<Atividade>(atividade);
        }

        
        [HttpPut("{id}")]
        public Atividade PutById(int id, Atividade atividade)
        {
            atividade.Id = atividade.Id + 1;
            return atividade;
        }

        [HttpDelete("{id}")]
        public string DeleteById(int id)
        {
            return $"meu primeiro metodo Delete com parametro{id}";
        }

    }
}