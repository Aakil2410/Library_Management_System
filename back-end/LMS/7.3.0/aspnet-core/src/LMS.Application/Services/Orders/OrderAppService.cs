using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using LMS.Domain;
using LMS.Services.Orders.Dto;
using System;

namespace LMS.Services.Orders
{
    public class OrderAppService : AsyncCrudAppService<Order, OrderDto, Guid, PagedAndSortedResultRequestDto>, IOrderAppService
    {
        private readonly IRepository<Order, Guid> _repository;

        public OrderAppService(IRepository<Order, Guid> repository) : base(repository)
        {
            _repository = repository;
        }
       

        /*
        private readonly IRepository<Order, Guid> _repository;
        private readonly IRepository<OrderItem, Guid> _orderItemtemRepository;

        public OrderAppService(IRepository<Order, Guid> repository, IRepository<OrderItem, Guid> orderItemtemRepository)
        {
            _repository = repository;
            _orderItemtemRepository = orderItemtemRepository;
        }

        [HttpPost]
        public async Task<OrderDto> CreateAsync(OrderDto input)
        {
          
            var order = ObjectMapper.Map<Order>(input);
            order.OrderItem = await _authorRepository.GetAsync((Guid)input.AuthorId.Value);
            book.Category = await _categoryRepository.GetAsync((Guid)input.CategoryId.Value);
            var response = await _repository.InsertAsync(book);
            CurrentUnitOfWork.SaveChanges();
            return ObjectMapper.Map<BookDto>(response);
        }

        [HttpGet]
        public async Task<OrderDto> GetAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public async Task<List<OrderDto>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public async Task<OrderDto> UpdateAsync(OrderDto input)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public async Task DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }*/
    }
}


