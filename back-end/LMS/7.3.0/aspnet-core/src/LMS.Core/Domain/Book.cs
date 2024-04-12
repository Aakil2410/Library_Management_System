using Abp.Domain.Entities.Auditing;
using LMS.Domain.Enums;
using System;

namespace LMS.Domain
{
    public class Book : FullAuditedEntity<Guid>
    {
        public virtual string Title { get; set; }

        public virtual string Author { get; set; }

        public virtual string Publisher { get; set; }

        public virtual string Category { get; set; }

        public virtual string Description { get; set; }

        public virtual string ISBN { get; set; }

        public virtual string Thumbnail { get; set; } 

        //public virtual int NumAvailableCopies { get; set; }

        public virtual Book Parent { get; set; }

        public virtual string Shelve { get; set; }

        public virtual AvailabilityStatus? Status { get; set; }
    }
}
