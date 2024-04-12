using Abp.Application.Services.Dto;
using LMS.Domain.Enums;
using System;

namespace LMS.Services.Reservations.Dto
{
    public class ReservationDto : EntityDto<Guid>
    {
        public DateTime? ReservationDate { get; set; }
        public ReservationStatus? Status { get; set; }
        //
        public string StatusType { get; set; }
        // nav props
        public Guid? PersonId { get; set; }
        public Guid? BookId { get; set; }
    }
}
