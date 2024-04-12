using LMS.Debugging;

namespace LMS
{
    public class LMSConsts
    {
        public const string LocalizationSourceName = "LMS";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "31182b973f6c45da8d5944e870533a92";
    }
}
