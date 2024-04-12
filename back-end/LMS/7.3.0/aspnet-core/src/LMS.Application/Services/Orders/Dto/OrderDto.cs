using Abp.Application.Services.Dto;
using AutoMapper;
using LMS.Domain;
using LMS.Domain.Enums;
using System;

namespace LMS.Services.Orders.Dto
{
    [AutoMap(typeof(Order))]
    public class OrderDto : EntityDto<Guid>
    {
        public int ItemsOrdered { get; set; }
        public DateTime? OrderDate { get; set; }
        public OrderStatus? Status { get; set; }
        public string StatusType { get; set; }
    }
}
