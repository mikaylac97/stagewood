const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

const saltRounds = 10;

async function signup(parent, args, context, info) {

    if(args.password.length <= 5) {
        throw new Error('Password should be at least 6 characters.')
    }

    // const usernameExists = await context.prisma.user.findUnique({
    //     where: {
    //         username: args.username
    //     }
    // })

    // const emailExists = await context.prisma.user.findUnique({
    //     where: {
    //         email: args.email
    //     }
    // })

    // if(usernameExists || emailExists){
    //     throw new Error('That email or username is already taken.')
    // }

    // Hash password with bcrypt
    const password = await bcrypt.hash(args.password, saltRounds);
    
    // Create User
    const user = await context.prisma.user.create({
        data: { ...args, password }
    })
    console.log(user)
    // JWT Creation
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    // console.log(token)
    return {
        token,
        user
    }
}

async function login(parent, args, context, info) {

    const user = await context.prisma.user.findUnique({ where: { email: args.email }});
    if(!user) {
        throw new Error('No user found with that email')
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if(!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user
    }
}

module.exports = {
    signup,
    login
}