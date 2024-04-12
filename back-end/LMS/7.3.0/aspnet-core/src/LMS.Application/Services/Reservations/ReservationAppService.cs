using Abp.Application.Services;
using Abp.Domain.Repositories;
using LMS.Domain;
using LMS.Services.Reservations.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.Reservations
{
    public class ReservationAppService : ApplicationService, IReservationAppService
    {
        private readonly IRepository<Reservation, Guid> _repository;
        private readonly IRepository<Book, Guid> _bookReppository;
        private readonly IRepository<Person, Guid> _personRepository;

        public ReservationAppService(IRepository<Reservation, Guid> repository,
                                     IRepository<Book, Guid> bookReppository,
                                     IRepository<Person, Guid> personRepository)
        {
            _repository = repository;
            _bookReppository = bookReppository;
            _personRepository = personRepository;
        }

        [HttpPost]
        public async Task<ReservationDto> CreateAsync(ReservationDto input)
        {
            var reserve = ObjectMapper.Map<Reservation>(input);
            reserve.Person = await _personRepository.GetAsync((Guid)input.PersonId.Value);
            reserve.Book = await _bookReppository.GetAsync((Guid)input.BookId.Value);
            reserve = await _repository.InsertAsync(reserve);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<ReservationDto>(reserve);

            /*var reserve = ObjectMapper.Map<Reservation>(input);
            reserve.Person = await _personRepository.GetAsync((Guid)input.PersonId);
            reserve.Book = await _bookReppository.GetAsync((Guid)input.BookId);
            var response = await _repository.InsertAsync(reserve);
            CurrentUnitOfWork.SaveChanges();
            return ObjectMapper.Map<ReservationDto>(response);*/
        }

        [HttpGet]
        public async Task<ReservationDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<ReservationDto>(await _repository.GetAllIncluding(x => x.Person, y => y.Book).FirstOrDefaultAsync());
        }

        [HttpGet]
        public async Task<List<ReservationDto>> GetAllAsync()
        {
            return ObjectMapper.Map<List<ReservationDto>>(_repository.GetAllIncluding(x => x.Person, y => y.Book));
        }

        [HttpPut]
        public async Task<ReservationDto> UpdateAsync(ReservationDto input)
        {
            var reserve = await _repository.GetAllIncluding(x => x.Person, y => y.Book).FirstOrDefaultAsync();
            ObjectMapper.Map(input, reserve);
            reserve.Person = input?.PersonId != null ? await _personRepository.GetAsync((Guid)input.PersonId) : reserve.Person;
            reserve.Book = input.BookId != null ? await _bookReppository.GetAsync((Guid)input.BookId) : reserve.Book;
            var response = await _repository.UpdateAsync(reserve);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<ReservationDto>(response);
        }

        [HttpDelete]
        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
