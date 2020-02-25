using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewProjectAPI.Models
{
    public class Property
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string TypeOfProperty { get; set; }
        public string PropertyDescription { get; set; }
        public DateTime DateOfPosting { get; set; }       
        public string ContactDetails { get; set; }
        public int ZipeCode { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string OtherInformation { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<Like> Likers { get; set; }
        public ICollection<Like> Likees { get; set; }

        public Property()
        {
            this.DateOfPosting = DateTime.Now;
        }

    }
}
