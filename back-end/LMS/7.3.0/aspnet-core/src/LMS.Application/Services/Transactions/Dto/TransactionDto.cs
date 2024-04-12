using Abp.Application.Services.Dto;
using AutoMapper;
using LMS.Domain;
using LMS.Domain.Enums;
using System;

namespace LMS.Services.Transactions.Dto
{
    public class TransactionDto : EntityDto<Guid>
    {
        public TransactionType? Type { get; set; }

        public string TransactionType { get; set; }
        public StatusTransaction? Status { get; set; }
        public string StatusType { get; set; }
        public DateTime? TransactionDate { get; set; }
        public DateTime? DueDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public string Condition { get; set; }
        public decimal? FineDue { get; set; }
        public Guid? PersonId { get; set; }

        public Guid? BookId { get; set; }

    }
}
