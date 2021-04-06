using System;

namespace API.Entities
{
    public class Ticket
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public DateTime Date { get; set; }
    }
}