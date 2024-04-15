using Abp.Application.Services.Dto;
using LMS.Domain.Enums;
using System;

namespace LMS.Services.Persons.Dto
{
    public class PersonDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string FullName { get; protected set; }
        public Gender? Gender { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Address { get; set; }
        public DateTime? RegistrationDate { get; set; }
        public int? BooksBorrowed { get; set; }
        public double? FinesDue { get; set; }
        //credit
        public long? UserId { get; set; }

    }
}
