module.exports = {
  Query: {
    events: (parent, args, context) => {
      return context.prisma.events();
    },
    event: (parent, { slug }, context) => {
      return context.prisma.event({
        slug
      });
    }
  },
  Event: {
    dates: (parent, { id }, context) => {
      return context.prisma
        .event({
          id: parent.id
        })
        .dates();
    },
    places: (parent, { id }, context) => {
      return context.prisma
        .event({
          id: parent.id
        })
        .places();
    },
    menus: (parent, { id }, context) => {
      return context.prisma
        .event({
          id: parent.id
        })
        .menus();
    },
    participants: (parent, { id }, context) => {
      return context.prisma
        .event({
          id: parent.id
        })
        .participants();
    }
  },
  Mutation: {
    createEvent(parent, { title, slug }, context) {
      return context.prisma.createEvent({
        title,
        slug
      });
    },
    updateEvent(
      parent,
      {
        id,
        title,
        slug,
        description,
        photo,
        dateDeadline,
        placeDeadline,
        menuDeadline
      },
      context
    ) {
      return context.prisma.updateEvent({
        where: {
          id
        },
        data: {
          title,
          slug,
          description,
          photo,
          dateDeadline,
          placeDeadline,
          menuDeadline
        }
      });
    },
    deleteEvent(parent, { id }, context) {
      return context.prisma.deleteEvent({
        id
      });
    },
    createDate(parent, { timestamp, event }, context) {
      return context.prisma.createDate({
        timestamp,
        event: {
          connect: {
            id: event
          }
        }
      });
    },
    deleteDate(parent, { id }, context) {
      return context.prisma.deleteDate({
        id
      });
    },
    createPlace(parent, { name, url, event }, context) {
      return context.prisma.createPlace({
        name,
        url,
        event: {
          connect: {
            id: event
          }
        }
      });
    },
    deletePlace(parent, { id }, context) {
      return context.prisma.deletePlace({
        id
      });
    },
    createMenu(parent, { name, url, event }, context) {
      return context.prisma.createMenu({
        name,
        url,
        event: {
          connect: {
            id: event
          }
        }
      });
    },
    deleteMenu(parent, { id }, context) {
      return context.prisma.deleteMenu({
        id
      });
    },
    createParticipant(parent, { name, event }, context) {
      return context.prisma.createParticipant({
        name,
        event: {
          connect: {
            id: event
          }
        }
      });
    },
    deleteParticipant(parent, { id }, context) {
      return context.prisma.deleteParticipant({
        id
      });
    },
    updateParticipant(parent, { id, dates, places, menus }, context) {
      return context.prisma.updateParticipant({
        where: {
          id
        },
        data: {
          dates: {
            set: dates
          },
          places: {
            set: places
          },
          menus: {
            set: menus
          }
        }
      });
    }
  }
};
