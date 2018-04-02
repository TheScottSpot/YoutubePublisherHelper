

namespace YouPub.Entities.Models.Entities
{
    public class UserMeta
  {
        public int Id { get; set; }
        public string IdentityId { get; set; }
        public AppUser Identity { get; set; }  // navigation property
        public string Location { get; set; }
        public string Notes { get; set; }
    }
}
