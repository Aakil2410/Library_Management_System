using Abp.Application.Services;
using Abp.Domain.Repositories;
using LMS.Domain;
using LMS.Services.Fines.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.Fines
{
    public class FineAppService : ApplicationService, IFineAppService
    {
        private readonly IRepository<Fine, Guid> _repository;
        private readonly IRepository<Transaction, Guid> _transactionReppository;
        private readonly IRepository<Person, Guid> _personReppository;

        public FineAppService(IRepository<Fine, Guid> repository,
                              IRepository<Transaction, Guid> transactionRepository,
                              IRepository<Person, Guid> personRepository)
        {
            _repository = repository;
            _transactionReppository = transactionRepository;
            _personReppository = personRepository;
        }

        [HttpPost]
        public async Task<FineDto> CreateAsync(FineDto input)
        {
            var fine = ObjectMapper.Map<Fine>(input);
            fine.Person = await _personReppository.GetAsync((Guid)input.PersonId.Value);
            fine.Transaction = await _transactionReppository.GetAsync((Guid)input.TransactionId.Value);
            fine = await _repository.InsertAsync(fine);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<FineDto>(fine);


            /*var fine = ObjectMapper.Map<Fine>(input);
            fine.Person = await _personReppository.GetAsync((Guid)input.PersonId.Value);
            fine.Transaction = await _transactionReppository.GetAsync((Guid)input.TransactionId.Value);
            var response = await _repository.InsertAsync(fine);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<FineDto>(response);*/
        }

        [HttpGet]
        public async Task<FineDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<FineDto>(await _repository.GetAllIncluding(x => x.Person, y => y.Transaction).FirstOrDefaultAsync());
        }

        [HttpGet]
        public async Task<List<FineDto>> GetAllAsync()
        {
            return ObjectMapper.Map<List<FineDto>>(_repository.GetAllIncluding(x => x.Person, y => y.Transaction));

        }

        [HttpPut]
        public async Task<FineDto> UpdaetAsync(FineDto input)
        {
            var fine = await _repository.GetAllIncluding(x => x.Person, y => y.Transaction).FirstOrDefaultAsync();
            ObjectMapper.Map(input, fine);
            fine.Person = input?.PersonId != null ? await _personReppository.GetAsync((Guid)input.PersonId):fine.Person;
            fine.Transaction = input.TransactionId != null ? await _transactionReppository.GetAsync((Guid)input.TransactionId):fine.Transaction;
            fine = await _repository.UpdateAsync(fine);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<FineDto>(fine);

            /*var fine = await _repository.GetAllIncluding(x => x.Person, y => y.Transaction).FirstOrDefaultAsync();
            ObjectMapper.Map(input, fine);
            fine.Person = input?.PersonId != null ? await _personReppository.GetAsync((Guid)input.PersonId):fine.Person;
            fine.Transaction = input.TransactionId != null ? await _transactionReppository.GetAsync((Guid)input.TransactionId):fine.Transaction;
            var response = await _repository.UpdateAsync(fine);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<FineDto>(response);*/
        }

        [HttpDelete]
        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
        }
    }


}
