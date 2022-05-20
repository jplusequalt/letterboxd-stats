const express = require("express")
const app = express()
const cors = require("cors")
const AdmZip = require("adm-zip")
const fileUpload = require("express-fileupload")
const csv = require("csv-string")

app.use(cors())
app.use(express.json())
app.use(fileUpload())

app.post("/api/unzip", (req, res) => {
  if (req.files) {
    let zip = new AdmZip(req.files.file.data)
    let entries = zip.getEntries()
    entries.forEach(entry => {
      if (entry.entryName === "ratings.csv") {
        let s = entry.getData().toString()
        let data = csv.parse(s, { output: "objects" })
        console.log(data)
        res.json(data)
      }
    })

  } else {
    console.error("req.files does not exist")
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})