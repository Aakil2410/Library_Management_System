using Abp.Application.Services.Dto;
using LMS.Domain.Enums;
using System;

namespace LMS.Services.Books.Dto
{
    public class BookDto : EntityDto<Guid>
    {
        /// <summary>
        /// 
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// 
        /// </summary>
        /// 
        public string Author { get; set; }

        public string Publisher { get; set; }
        /// <summary>
        /// 
        /// </summary>
        /// 

        public string Category { get; set; }

        public string Description { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ISBN { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Thumbnail { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? NumAvailableCopies { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public Guid? ParentId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Shelve { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public AvailabilityStatus? Status { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string StatusType { get; set; }
    }
}
