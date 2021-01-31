function allUsers (parent, args, context, info) {
    return context.prisma.user.findMany()
}

function findUser(parent, args, context, info) {
    const where = args.id;
    const user = context.prisma.user.findUnique({ where: {id: context.userId} })
    return user;
}

module.exports = {
    allUsers,
    findUser
}