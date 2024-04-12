using Abp.Application.Services;
using LMS.Services.Reservations.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.Reservations
{
    public interface IReservationAppService : IApplicationService
    {
        Task<ReservationDto> CreateAsync(ReservationDto input);

        Task<ReservationDto> GetAsync(Guid id);

        Task<List<ReservationDto>> GetAllAsync();

        Task<ReservationDto> UpdateAsync(ReservationDto input);

        Task DeleteAsync(Guid id);
         
        
    }
}
