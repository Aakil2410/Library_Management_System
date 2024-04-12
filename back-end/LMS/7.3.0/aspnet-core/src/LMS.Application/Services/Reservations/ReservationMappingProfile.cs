using AutoMapper;
using LMS.Domain;
using LMS.Services.Reservations.Dto;
using LMS.Services.Utils;
using System;

namespace LMS.Services.Reservations
{
    public class ReservationMappingProfile : Profile
    {
        public ReservationMappingProfile()
        {
            CreateMap<Reservation, ReservationDto>()
                .ForMember(e => e.PersonId, m => m.MapFrom(e => e.Person != null ? e.Person.Id : (Guid?)null))
                .ForMember(e => e.BookId, m => m.MapFrom(e => e.Book != null ? e.Book.Id : (Guid?)null))
                .ForMember(x => x.StatusType, m => m.MapFrom(x => x.Status != null ? x.Status.GetEnumDescription() : null));

            CreateMap<ReservationDto, Reservation>()
                .ForMember(e => e.Id, d => d.Ignore())
                .ForMember(e => e.Person, d => d.Ignore())
                .ForMember(e => e.Book, d => d.Ignore());
            // is all 3 needed?
        }
    }
}
