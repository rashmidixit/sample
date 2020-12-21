const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main(){
    const allLinks = await prisma.link.findMany()
    console.log(allLinks)
}


const newLink =  prisma.link.create({
    data:{
        description: "New link1",
        url: "http://link1.com",
    },
}).then(()=>{
    main()
    .catch(e=>{ throw e })
    .finally(async () => {
        await prisma.$disconnect()
    })
})

