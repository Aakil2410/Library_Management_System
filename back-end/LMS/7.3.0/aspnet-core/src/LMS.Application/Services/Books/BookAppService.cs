using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using LMS.Domain;
using LMS.Services.Books.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS.Services.Books
{
    //[AbpAuthorize]
    public class BookAppService : ApplicationService, IBookAppService
    {
        private readonly IRepository<Book, Guid> _repository;
 
        public BookAppService(IRepository<Book, Guid> repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<BookDto> CreateAsync(BookDto input)
        {
            var book = ObjectMapper.Map<Book>(input);
            book.Parent = await _repository.GetAllIncluding(x=>x.Parent).Where(x=>x.ISBN == input.ISBN && x.Parent == null||(x.Title == input.Title && x.Parent == null)).FirstOrDefaultAsync();
            book = await _repository.InsertAsync(book);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<BookDto>(book);
        }

        [HttpGet]
        public async Task<BookDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<BookDto>(await _repository.GetAsync(id));
        }

        [HttpGet]
        public async Task<List<BookDto>> GetAllAsync()
        {
            return ObjectMapper.Map<List<BookDto>>(await _repository.GetAllListAsync());
        }
     
        [HttpPut]
        public async Task<BookDto> UpdateAsync(BookDto input)
        {
            var book = await _repository.GetAllIncluding(x=>x.Parent).FirstOrDefaultAsync(x=>x.Id==input.Id);
            ObjectMapper.Map(input, book);
            book = await _repository.InsertOrUpdateAsync(book);
            
            await CurrentUnitOfWork.SaveChangesAsync();

            return ObjectMapper.Map<BookDto>(book);
        }

        [HttpDelete]
        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
        }

    }
}
