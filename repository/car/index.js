const { car, carDetails } = require("../../models")
const crypto = require("crypto")
const path = require("path")
const { uploader } = require("../../helper/cloudinary")

exports.getCars = async () => {
  const data = await car.findAll({
    include: {
      model: carDetails,
    },
  })
  return data
}

exports.getCar = async (id) => {
  // get from db
  data = await car.findAll({
    where: {
      id,
    },
  })

  if (data.length > 0) {
    return data[0]
  }

  throw new Error(`Car is not found!`)
}

exports.createCar = async (payload) => {
  if (payload.image) {
    // upload image to cloudinary
    const { image } = payload

    // make unique filename -> 213123128uasod9as8djas
    image.publicId = crypto.randomBytes(16).toString("hex")

    // rename the file -> 213123128uasod9as8djas.jpg / 213123128uasod9as8djas.png
    image.name = `${image.publicId}${path.parse(image.name).ext}`

    // Process to upload image
    const imageUpload = await uploader(image)
    payload.image = imageUpload.secure_url
  }

  const data = await car.create(payload)

  return data
}

exports.updateCar = async (id, payload) => {
  if (payload.image) {
    // upload image to cloudinary
    const { image } = payload

    // make unique filename -> 213123128uasod9as8djas
    image.publicId = crypto.randomBytes(16).toString("hex")

    // rename the file -> 213123128uasod9as8djas.jpg / 213123128uasod9as8djas.png
    image.name = `${image.publicId}${path.parse(image.name).ext}`

    // Process to upload image
    const imageUpload = await uploader(image)
    payload.image = imageUpload.secure_url
  }

  // update to postgres
  await car.update(payload, {
    where: {
      id,
    },
  })

  // get from postgres
  const data = await car.findAll({
    where: {
      id,
    },
  })

  if (data.length > 0) {
    return data[0]
  }

  return data
}

exports.deleteCar = async (id) => {
  // delete from postgres
  await car.destroy({ where: { id } })

  return null
}
