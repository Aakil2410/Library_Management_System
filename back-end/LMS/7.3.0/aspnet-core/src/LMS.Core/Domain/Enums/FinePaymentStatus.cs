using System.ComponentModel;

namespace LMS.Domain.Enums
{
    public enum FinePaymentStatus : int
    {
        [Description("Pending")]
        Pending = 1,

        [Description("Paid")]
        Paid = 2,

        [Description("Waived")]
        Waived = 3,

        [Description("Outstanding")]
        Outstanding = 4
    }
}
