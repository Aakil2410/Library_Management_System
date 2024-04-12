using System.ComponentModel;

namespace LMS.Domain.Enums
{
    public enum AvailabilityStatus : int
    {
        [Description("Available")]
        Available = 1,

        [Description("Unavailable")]
        Unavailable = 2,

        [Description("Reserved")]
        Reserved = 3,

        [Description("Borrowed")]
        Borrowed = 4,

        [Description("Lost")]
        Lost = 5,

        [Description("OnHold")]
        OnHold = 6,

        [Description("Damaged")]
        Damaged = 7
    }
}
