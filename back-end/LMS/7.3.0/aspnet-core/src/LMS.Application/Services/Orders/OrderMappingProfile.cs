using AutoMapper;
using LMS.Domain;
using LMS.Services.Orders.Dto;
using LMS.Services.Utils;

namespace LMS.Services.Orders
{
    public class OrderMappingProfile : Profile
    {
        public OrderMappingProfile()
        {
            CreateMap<Order, OrderDto>()
                .ForMember(x => x.StatusType, m => m.MapFrom(x => x.Status != null ? x.Status.GetEnumDescription() : null));

            CreateMap<OrderDto, Order>()
                .ForMember(e => e.Id, d => d.Ignore());
        }
    }
}
