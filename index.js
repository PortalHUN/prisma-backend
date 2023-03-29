const express = require('express');
const prisma = require('./db')

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ err: "Something went wrong." })
  }
})

app.post("/users", async (req, res) => {
  try {
    const { name, marks } = req.body

    const exists = await prisma.user.findUnique({
      where: {
        name
      }
    })

    if (exists) throw { message: "User already exists" };

    const newUser = await prisma.user.create({
      data: {
        name,
        marks: {
          create: marks.map(mark => ({
            mark
          }))
        }
      },
    })

    res.json(newUser)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

app.listen(PORT, () => {
  console.log(`[APP] Application is running on port ${PORT}...`);
});
