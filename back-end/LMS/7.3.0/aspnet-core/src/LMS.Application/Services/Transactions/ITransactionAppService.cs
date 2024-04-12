using Abp.Application.Services;
using LMS.Services.Transactions.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LMS.Services.Transactions
{
    public interface ITransactionAppService : IApplicationService
    {
        public Task<TransactionDto> CreateAsync(TransactionDto input);

        public Task<TransactionDto> GetAsync(Guid id);

        public Task<List<TransactionDto>> GetAllAsync();

        public Task<TransactionDto> UpdateAsync(TransactionDto input);

        public Task DeleteAsync(Guid id);
    }
}
