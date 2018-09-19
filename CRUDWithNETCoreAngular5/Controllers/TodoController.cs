using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CRUDWithNETCoreAngular5.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CRUDWithNETCoreAngular5.Controllers
{
    public class TodoController : Controller
    {
        // To access api
        TodoDataAccessLayer objtodo = new TodoDataAccessLayer();

        [HttpGet]
        [Route("api/Todo/Index")]
        public IEnumerable<TblTodo> Index()
        {
            return objtodo.GetTodos();
        }

        [HttpPost]
        [Route("api/Todo/Create")]
        public int Create([FromBody] TblTodo todo)
        {
            return objtodo.AddTodo(todo);
        }

        [HttpGet]
        [Route("api/Todo/Details/{id}")]
        public TblTodo Details(int id)
        {
            return objtodo.GetTodoData(id);
        }

        [HttpPut]
        [Route("api/Todo/Edit")]
        public int Edit([FromBody]TblTodo todo)
        {
            return objtodo.UpdateTodo(todo);
        }

        [HttpDelete]
        [Route("api/Todo/Delete/{id}")]
        public int Delete(int id)
        {
            return objtodo.DeleteTodo(id);
        }
    }
}
