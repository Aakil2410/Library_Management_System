using Abp.Application.Services;
using LMS.Services.Fines.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.Fines
{
    public interface IFineAppService : IApplicationService
    {
        Task<FineDto> CreateAsync(FineDto input);

        Task<FineDto> GetAsync(Guid id);

        Task<List<FineDto>> GetAllAsync();

        Task<FineDto> UpdaetAsync(FineDto input); 

        Task DeleteAsync(Guid id);
    }



}
