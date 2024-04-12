using Abp.Application.Services;
using Abp.Application.Services.Dto;
using LMS.Services.Orders.Dto;
using System;

namespace LMS.Services.Orders
{
    public interface IOrderAppService : IAsyncCrudAppService<OrderDto, Guid, PagedAndSortedResultRequestDto>
    {
        /*-
        Task<OrderDto> CreateAsync(OrderDto input);

        Task<OrderDto> GetAsync(Guid id);

        Task<List<OrderDto>> GetAllAsync();

        Task<OrderDto> UpdateAsync(OrderDto input);

        Task DeleteAsync(Guid id);*/
    }
}
