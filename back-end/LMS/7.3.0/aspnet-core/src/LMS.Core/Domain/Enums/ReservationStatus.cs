using System.ComponentModel;

namespace LMS.Domain.Enums
{
    public enum ReservationStatus : int
    {
        [Description("Pending")]
        Pending = 1,

        [Description("Available")]
        Available = 2,

        [Description("Unavailable")]
        Unavailable = 3,

        [Description("Canceled")]
        Canceled = 4
    }
}
