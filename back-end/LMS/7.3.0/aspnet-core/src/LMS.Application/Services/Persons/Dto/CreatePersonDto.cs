using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using LMS.Domain;
using LMS.Domain.Enums;
using System;

namespace LMS.Services.Persons.Dto
{
    [AutoMap(typeof(Person))]
    public class CreatePersonDto : EntityDto<Guid>
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

        public long? UserId { get; set; }

        public string Password { get; set; }

        public string[] RoleNames { get; set; }
    }
}
