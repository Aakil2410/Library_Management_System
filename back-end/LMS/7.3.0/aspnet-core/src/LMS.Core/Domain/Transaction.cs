using Abp.Domain.Entities.Auditing;
using LMS.Domain.Enums;
using System;

namespace LMS.Domain
{
    public class Transaction : FullAuditedEntity<Guid>
    {
        public virtual TransactionType? Type { get; set; }

        public virtual StatusTransaction? Status { get; set; }

        public virtual DateTime? TransactionDate { get; set; }

        public virtual DateTime? DueDate { get; set; }

        public virtual DateTime? ReturnDate { get; set; }

        public virtual string BookCondition { get; set; }

        public virtual decimal? FineDue { get; set; }

        public virtual DateTime? LastLoanedDate { get; set; }

        public virtual DateTime? LastReturnedDate { get; set; }

        public virtual Person Person { get; set; }

        public virtual Book Book { get; set; }
    }
}
