using Abp.Application.Services;
using Abp.Domain.Repositories;
using LMS.Domain;
using LMS.Services.Reservations.Dto;
using LMS.Services.Transactions.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.Transactions
{
    public class TransactionAppService : ApplicationService, ITransactionAppService
    {
        private readonly IRepository<Transaction, Guid> _repository;
        private readonly IRepository<Person, Guid> _personRepository;
        private readonly IRepository<Book, Guid> _bookRepository;
        public TransactionAppService(IRepository<Transaction, Guid> repository,
                                     IRepository<Person, Guid> personRepository,
                                     IRepository<Book, Guid> bookRepository)
        {
            _repository = repository;
            _personRepository = personRepository;
            _bookRepository = bookRepository;
        }

        [HttpPost]
        public async Task<TransactionDto> CreateAsync(TransactionDto input)
        {
            var transact = ObjectMapper.Map<Transaction>(input);
            transact.Person = await _personRepository.GetAsync((Guid)input.PersonId.Value);
            transact.Book = await _bookRepository.GetAsync((Guid)input.BookId.Value);
            var response = await _repository.InsertAsync(transact);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<TransactionDto>(response);
        }

        [HttpGet]
        public async Task<TransactionDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<TransactionDto>(await _repository.GetAllIncluding(x => x.Person, y => y.Book).FirstOrDefaultAsync());
        }

        [HttpGet]
        public async Task<List<TransactionDto>> GetAllAsync()
        {
            return ObjectMapper.Map<List<TransactionDto>>(_repository.GetAllIncluding(x => x.Person, y => y.Book));
        }

        [HttpPut]
        public async Task<TransactionDto> UpdateAsync(TransactionDto input)
        {
            var transact = await _repository.GetAllIncluding(x => x.Person, y => y.Book).FirstOrDefaultAsync();
            transact = ObjectMapper.Map(input, transact);
            transact.Person = input?.PersonId != null ? await _personRepository.GetAsync((Guid)input.PersonId.Value): transact.Person;
            transact.Book = input.BookId != null ? await _bookRepository.GetAsync((Guid)input.BookId.Value): transact.Book;
            var response = await _repository.UpdateAsync(transact);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<TransactionDto>(response);
        }

        [HttpDelete]
        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
