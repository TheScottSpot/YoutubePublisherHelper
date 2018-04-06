using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


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
