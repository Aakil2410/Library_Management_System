using AutoMapper;
using LMS.Domain;
using LMS.Services.OrderItems.Dto;
using System;

namespace LMS.Services.OrderItems
{
    public class OrderItemMappingProfile : Profile
    {
        public OrderItemMappingProfile()
        {
            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(e => e.BookId, m => m.MapFrom(e => e.Book != null ? e.Book.Id : (Guid?)null))
                .ForMember(e => e.ISBN, m => m.MapFrom(e => e.Book != null ? e.Book.ISBN : null))
                .ForMember(e => e.OrderId, m => m.MapFrom(e => e.Order != null ? e.Order.Id : (Guid?)null));


            CreateMap<OrderItemDto, OrderItem>()
                .ForMember(e => e.Id, d => d.Ignore())
                .ForMember(e => e.Book, d => d.Ignore())
                .ForMember(e => e.Order, d => d.Ignore());
        }
    }
}
