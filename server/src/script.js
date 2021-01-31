// 1
const { PrismaClient } = require("@prisma/client")

// 2
const prisma = new PrismaClient()


//3
let idCount = 0
async function main() {
    const newUser = await prisma.user.create({
          data: {
          id: idCount+1,
          first_name: 'Testing',
          last_name: 'Prisma',
          email: 'testingprisma@test.com',
          profile_pic: 'randompictureforexample.com',
          username: 'testprisma97',
          password: 'Test12345'
        },
      })
  const allUsers = await prisma.user.findMany()
  console.log(newUser)
}


//4
main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })