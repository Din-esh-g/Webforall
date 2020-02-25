using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewProjectAPI.Models
{
    public class MyJob
    {
        public int Id { get; set; }
        [Required]
        public string  JobTitle { get; set; }
        public string TypeOfJob { get; set; }
        [Required]
        public string JobDescription { get; set; }
        [Required]
        public string ContacDetails { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime PostedDate { get; set; }

        public MyJob()
        {
            this.PostedDate = DateTime.Now;
              
        }


    }
}
