using System.ComponentModel;

namespace LMS.Domain.Enums
{
    public enum OrderStatus : int
    {
        [Description("Pending")]
        Pending = 1,

        [Description("Delayed")]
        Delayed = 2,

        [Description("Processed")]
        Processed = 3,

        [Description("Shipped")]
        Shipped = 4,

        [Description("Delivered")]
        Delivered = 5,

        [Description("Cancelled")]
        Cancelled = 6
    }
}
