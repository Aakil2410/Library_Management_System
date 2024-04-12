using Abp.Application.Services;
using Abp.Domain.Repositories;
using LMS.Domain;
using LMS.Services.OrderItems.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.OrderItems
{
    public class OrderItemAppService : ApplicationService, IOrderItemAppService
    {
        private readonly IRepository<OrderItem, Guid> _repository;
        private readonly IRepository<Order, Guid> _orderRepository;
        private readonly IRepository<Book, Guid> _bookRepository;

        public OrderItemAppService(IRepository<OrderItem, Guid> repository,
                                   IRepository<Order, Guid> orderRepository,
                                   IRepository<Book, Guid> bookRepository)
        {
            _repository = repository;
            _orderRepository = orderRepository;
            _bookRepository = bookRepository;
        }

        [HttpPost]
        public async Task<OrderItemDto> CreateAsync(OrderItemDto input)
        {
            var orderItem = ObjectMapper.Map<OrderItem>(input);
            orderItem.Book = await _bookRepository.GetAsync((Guid)input.BookId.Value);
            orderItem.Order = await _orderRepository.GetAsync((Guid)input.OrderId.Value);
            var response = await _repository.InsertAsync(orderItem);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<OrderItemDto>(response);
        }

        [HttpGet]
        public async Task<OrderItemDto> GetAsync(Guid id)
        {
            var query = await _repository.GetAllIncluding(m => m.Book, m => m.Order).FirstOrDefaultAsync();
            var response = ObjectMapper.Map<OrderItemDto>(query);
            return response;
        }

        [HttpGet]
        public async Task<List<OrderItemDto>> GetAllAsync()
        {
            var item = _repository.GetAllIncluding(m => m.Book, m => m.Order);
            var response = ObjectMapper.Map<List<OrderItemDto>>(item);
            return response;
        }

        [HttpPost]
        public async Task<OrderItemDto> UpdateAsync(OrderItemDto input)
        {
            var orderItem = await _repository.GetAllIncluding(x=>x.Book,y=>y.Order).FirstOrDefaultAsync();
            ObjectMapper.Map(input, orderItem);
            orderItem.Book = input?.BookId != null ? await _bookRepository.GetAsync((Guid)input.BookId):orderItem.Book;
            orderItem.Order = input.OrderId != null ? await _orderRepository.GetAsync((Guid)input.OrderId):orderItem.Order;
            var response = await _repository.UpdateAsync(orderItem);
            CurrentUnitOfWork.SaveChanges();
            return ObjectMapper.Map<OrderItemDto>(response);
        }

        [HttpDelete]
        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}

