using System;
using System.Collections.Generic;

namespace CRUDWithNETCoreAngular5.Models
{
    public partial class TblTodo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsComplete { get; set; }
    }
}
