const detailsRepo = require("../../repository/details")

exports.getDetails = async () => {
  const data = await detailsRepo.getDetails()
  return data
}

exports.createDetails = async (payload) => {
  const data = await detailsRepo.createDetails(payload)
  return data
}

exports.getDetail = async (id) => {
  const data = await detailsRepo.getDetail(id)
  return data
}

exports.updateDetails = async (id, payload) => {
  // update old data
  await detailsRepo.updateDetails(id, payload)

  // find the new data
  const data = await detailsRepo.getDetail(id)

  return data
}

exports.deleteDetails = async (id) => {
  const data = await detailsRepo.deleteDetails(id)
  return data
}
