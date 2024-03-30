const { car, carDetails } = require("../../models")

exports.getDetails = async () => {
  //   console.log(carDetails)
  const data = await carDetails.findAll()
  return data
}

exports.getDetail = async (id) => {
  // get from db
  data = await carDetails.findAll({
    where: {
      id,
    },
  })

  if (data.length > 0) {
    return data[0]
  }

  throw new Error(`Car details is not found!`)
}

exports.createDetails = async (payload) => {
  const data = await carDetails.create(payload)

  return data
}

exports.updateDetails = async (id, payload) => {
  // update to postgres
  await carDetails.update(payload, {
    where: {
      id,
    },
  })

  const data = await carDetails.findAll({
    where: {
      id,
    },
  })

  if (data.length > 0) {
    return data[0]
  }

  return data
}

exports.deleteDetails = async (id) => {
  // delete from postgres
  await carDetails.destroy({ where: { id } })

  return null
}
