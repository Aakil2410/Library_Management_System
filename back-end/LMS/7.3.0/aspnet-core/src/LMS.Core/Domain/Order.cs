using Abp.Domain.Entities.Auditing;
using LMS.Domain.Enums;
using System;

namespace LMS.Domain
{
    public class Order : FullAuditedEntity<Guid>
    {
        public virtual int ItemsOrdered { get; set; }

        public virtual DateTime? OrderDate { get; set; }

        public virtual OrderStatus? Status { get; set; }

    }
}
