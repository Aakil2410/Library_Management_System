using Abp.Application.Services;
using LMS.Services.OrderItems.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.OrderItems
{
    public interface IOrderItemAppService : IApplicationService
    {
        Task<OrderItemDto> CreateAsync(OrderItemDto input);

        Task<OrderItemDto> GetAsync(Guid id);

        Task<List<OrderItemDto>> GetAllAsync();

        Task<OrderItemDto> UpdateAsync(OrderItemDto input);

        Task DeleteAsync(Guid id); 
         
         
    }
}

