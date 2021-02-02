function allUsers (parent, args, context, info) {
    return context.prisma.user.findMany()
}

function findUser(parent, args, context, info) {
    const id = +args.id;
    // const email = args.email
    const user = context.prisma.user.findUnique({
        where: {
            id
        }
    })
    return user;
}

module.exports = {
    allUsers,
    findUser
}