using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<IEnumerable<UserDto>> GetUsersAsync();
        Task<UserDto> GetUserByIdAsync(int id);
        //  Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetAppUserByIdAsync(int id);
    }
}