using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using LMS.Authorization.Roles;
using LMS.Authorization.Users;
using LMS.MultiTenancy;
using LMS.Domain;

namespace LMS.EntityFrameworkCore
{
    public class LMSDbContext : AbpZeroDbContext<Tenant, Role, User, LMSDbContext>
    {
        /* Define a DbSet for each entity of the application */

        public DbSet<Book> Books { get; set; }

        public DbSet<Fine> Fines { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<OrderItem> OrderItems { get; set; }

        public DbSet<Person> Persons { get; set; }

        public DbSet<Reservation> Reservations { get; set; }

        public DbSet<Transaction> Transactions { get; set; }

        public LMSDbContext(DbContextOptions<LMSDbContext> options)
            : base(options)
        {
        }
    }
}
