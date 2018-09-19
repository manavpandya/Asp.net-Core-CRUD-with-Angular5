using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDWithNETCoreAngular5.Models
{
    public class TodoDataAccessLayer
    {
        ManavCRUDContext db = new ManavCRUDContext();

        public IEnumerable<TblTodo> GetTodos()
        {
            try
            {
                return db.TblTodo.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddTodo(TblTodo todo)
        {
            try
            {
                db.TblTodo.Add(todo);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateTodo(TblTodo todo)
        {
            try
            {
                db.Entry(todo).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        public TblTodo GetTodoData(int id)
        {
            try
            {
                TblTodo todo = db.TblTodo.Find(id);
                return todo;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteTodo(int id)
        {
            try
            {
                TblTodo todo = db.TblTodo.Find(id);
                db.TblTodo.Remove(todo);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
