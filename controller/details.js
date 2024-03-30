const detailsUsecase = require("../usecase/details")

exports.getDetails = async (req, res, next) => {
  try {
    const data = await detailsUsecase.getDetails()

    res.status(200).json({
      message: "Successs",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.getDetail = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await detailsUsecase.getDetail(id)
    if (!data) {
      return next({
        message: `Details with id ${id} is not found!`,
        statusCode: 404,
      })
    }

    res.status(200).json({
      message: "Successs",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.createDetails = async (req, res, next) => {
  try {
    const { plate, options, specs } = req.body

    if (!plate || plate == "") {
      return next({
        message: "Plate must be provided!",
        statusCode: 400,
      })
    }

    if (!options || options == "") {
      return next({
        message: "Options must be provided!",
        statusCode: 400,
      })
    }

    if (!specs || specs == "") {
      return next({
        message: "Specs must be provided!",
        statusCode: 400,
      })
    }

    const data = await detailsUsecase.createDetails(req.body)

    res.status(201).json({
      message: "Success",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.updateDetails = async (req, res, next) => {
  try {
    const { id } = req.params
    const { plate, options, specs } = req.body

    if (!plate || plate == "") {
      return next({
        message: "Plate must be provided!",
        statusCode: 400,
      })
    }

    if (!options || options == "") {
      return next({
        message: "Options must be provided!",
        statusCode: 400,
      })
    }

    if (!specs || specs == "") {
      return next({
        message: "Specs must be provided!",
        statusCode: 400,
      })
    }

    const data = await detailsUsecase.updateDetails(id, req.body)

    res.status(200).json({
      message: "Success",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.deleteDetails = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await detailsUsecase.deleteDetails(id)

    res.status(200).json({
      message: "Successs",
      data,
    })
  } catch (error) {
    next(error)
  }
}
