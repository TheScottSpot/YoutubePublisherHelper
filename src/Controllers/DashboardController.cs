
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using YouPub.Entities.Data;
using YouPub.Entities.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace YouPub.Controllers
{
  [Route("api/")]
  public class DashboardController : Controller
  {
    public DashboardController()
    {
    }

    [HttpGet]
    [Route("message")]
    [Authorize]
    public IActionResult Private()
    {
      return Json(new
      {
        Message = "Hello from a private endpoint! You need to be authenticated to see this."
      });
    }
  }
}
