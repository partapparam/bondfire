const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")

require("dotenv").config()
require("./db")
// removes -x-powered-by response header
app.disable("x-powered-by")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("tiny"))

// Routes
const User = require("./user.model")

/**
 * New form Submission
 * Create new user
 */
app.post("/api/new", async (req, res) => {
  const body = req.body
  console.log(body)
  const user = {
    name: body.name,
    email: body.email,
    phone: body.phone,
    company: body.company,
  }
  try {
    const savedUser = await new User(user).save()
    return res.json({ message: "success" })
  } catch (err) {
    console.log("save error", err)
    return res.json({ message: "error saving the record" })
  }
})

/**
 * Is this route necessary? How to safeguard this information without any auth.
 */
// app.get("/admin/all")

/**
 * Handle all failed routing that do not match
 */
app.use((req, res) => {
  res.status(404).json({ message: "Not found - 404 error" })
})
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    console.log(err.message)
    return res.json({
      message: "error",
      data: "500 - server error - access not allowed",
    })
  }
  console.log(err.message)
  return res.status(500).json({ message: "error", data: "500 - server error" })
})

app.listen(process.env.PORT, () => {
  console.log("server is running", process.env.PORT)
})
