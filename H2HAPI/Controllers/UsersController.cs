using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewProjectAPI.Data;
using NewProjectAPI.Helpers;
using NewProjectAPI.Models;
using NewProjectAPI.Repo;

namespace NewProjectAPI.Controllers
{
  [ServiceFilter(typeof(LogUserActivity))]
  [Authorize]
  [Route("api/[controller]")]
    [ApiController]
    
    public class UsersController : ControllerBase
    {
    private readonly IDatingRepo _repo;
    private readonly IMapper _mapper;
    private readonly NewProjectAPIContext _context;
        public UsersController(IDatingRepo repo, IMapper mapper, NewProjectAPIContext context)
    {
      _repo = repo;
      _mapper = mapper;
      _context = context;
    }
    //This method is not implemented pagination 
    //[HttpGet]
    //public async Task<IActionResult> GetUser()
    //{
    //  var users = await _repo.GetUsers();
    //  var userToReturn = _mapper.Map<IEnumerable<UserListDTO>>(users);
    //  return Ok(userToReturn);
    //}

    [HttpGet]
    public async Task<IActionResult> GetUser([FromQuery]UserParams userParams)
    {
      //Filter
     
      var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
      var userFromRepo = await _repo.GetUser(currentUserId);
      userParams.UserId = currentUserId;
      
     if (string.IsNullOrEmpty(userParams.Gender))
     {
       userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male";
     }
     
           //end filter
      var users = await _repo.GetUsers(userParams);
      var userToReturn = _mapper.Map<IEnumerable<UserListDTO>>(users);
      Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPage);
      return Ok(userToReturn);
    }


    [HttpGet("{id}", Name ="GetUser")]
    public async Task<IActionResult> GetUser(int id)
    {
      var user = await _repo.GetUser(id);
      var userToReturn = _mapper.Map<UserForDetails>(user);
      return Ok(user);
    }
    [HttpPut("{id}")]

    public async Task<IActionResult>UpdateUser(int id, UserForUpdateDTO userForUpdateDTO)
    {

      if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        return Unauthorized();

      var userFromRepo =  await _repo.GetUser(id);
      _mapper.Map(userForUpdateDTO, userFromRepo);
      if (await _repo.SaveAll())
        return NoContent();
      throw new Exception($"Updating user {id} failed on save");

    }


    [HttpPost ("{id}/like/{recipientId}")]
    public async Task<IActionResult>LikeUser(int id , int recipientId)
    {
      //Checking user is authorized or not
      if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        return Unauthorized();

      var like = await _repo.GetLike(id, recipientId);
      if(like != null)
      {
        return BadRequest("You already like this user");
      }

      if(await _repo.GetUser(recipientId) == null)
      {
        return NotFound();
      }
      like = new Models.Like
      {
        LikerId = id,
        LikeeId = recipientId

      };
      _repo.Add<Like>(like);

      if (await _repo.SaveAll())
        return Ok();

      return BadRequest("Failed to like user.");
    }


        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Users>> DeleteUser(int id)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if (currentUserId == id)
            {
                var user = await _repo.GetUser(id);
                if (user == null)
                {
                    return NotFound("No user found for this Id");

                }
               
                var messageFromRepo = await _repo.GetMessage(id);
                if (messageFromRepo != null)
                {



                    if (messageFromRepo.SenderId == id)
                        messageFromRepo.SenderDeleted = true;
                    if (messageFromRepo.RecipientId == id)
                        messageFromRepo.RecipientDeleted = true;

                    if (messageFromRepo.SenderDeleted && messageFromRepo.RecipientDeleted)
                        _repo.Delete(messageFromRepo);
                    await _repo.SaveAll();

                }
              
                var likesFrom = await _repo.GetLike(currentUserId);
                if(likesFrom != null)
                {
                    if (likesFrom.LikeeId == currentUserId || likesFrom.LikerId == currentUserId)
                        _repo.Delete<Like>(likesFrom);
                     await _repo.SaveAll();


                }
                //user.Likees = null;
                //user.Likers = null;

                _repo.Delete<Users>(user);

                await _repo.SaveAll();
                return NoContent();

            }
            return BadRequest("Problem to delete User");
            

            
        }
        }
}
