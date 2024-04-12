using System.ComponentModel;

namespace LMS.Domain.Enums
{
    public enum TransactionType : int
    {
        [Description("Borrow Book")]
        Borrow = 1,

        [Description("Return Book")]
        Return = 2,

        [Description("Fine")]
        LostBook = 3,

        [Description("Fine Payment")]
        FinePayment = 4,

        [Description("Refund")]
        Refund = 5
    }
}
