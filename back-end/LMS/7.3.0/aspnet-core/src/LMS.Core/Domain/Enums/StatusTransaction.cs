using System.ComponentModel;

namespace LMS.Domain.Enums
{
    public enum StatusTransaction : int
    {
        [Description("Borrowed")]
        Borrowed = 1,

        [Description("Returned")]
        Returned = 2,

        [Description("Lost")]
        Lost = 3,

        [Description("Paid")]
        Paid = 4,

        [Description("Waived")]
        Waived = 5,

        [Description("Pending")]
        Pending = 6
    }
}
