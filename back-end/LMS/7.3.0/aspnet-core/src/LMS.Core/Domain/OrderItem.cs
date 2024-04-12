using Abp.Domain.Entities.Auditing;
using System;

namespace LMS.Domain
{
    public class OrderItem : FullAuditedEntity<Guid>
    {

        public virtual int Quantity { get; set; }

        public virtual Book Book { get; set; }

        public virtual Order Order { get; set; }

    }
}
