using Abp.Domain.Entities.Auditing;
using LMS.Domain.Enums;
using System;

namespace LMS.Domain
{
    public class Reservation :FullAuditedEntity<Guid>
    {
        public virtual DateTime? ReservationDate { get; set; }

        public virtual ReservationStatus? Status { get; set; }

        public virtual Person Person { get; set; }

        public virtual Book Book { get; set; }
    }
}
