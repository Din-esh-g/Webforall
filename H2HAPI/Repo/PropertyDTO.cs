using NewProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewProjectAPI.Repo
{
    public class PropertyDTO
    {
            [Required]
            public string Title { get; set; }
            public string TypeOfProperty { get; set; }
            public string PropertyDescription { get; set; }
            public DateTime DateOfPosting { get; set; }
            public int ZipeCode { get; set; }
            public string City { get; set; }
            public string County { get; set; }
            public string State { get; set; }
            public string Country { get; set; }
            public string OtherInformation { get; set; }
        public PropertyDTO()
        {
            this.DateOfPosting = DateTime.Now;
        }
       
                                

        }
    }



