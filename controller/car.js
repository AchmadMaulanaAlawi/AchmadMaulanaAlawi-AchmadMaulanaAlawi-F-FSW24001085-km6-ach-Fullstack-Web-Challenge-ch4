const carUsecase = require("../usecase/car")

exports.getCars = async (req, res, next) => {
  try {
    const data = await carUsecase.getCars()

    res.status(200).json({
      message: "Successs",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.getCar = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await carUsecase.getCar(id)
    if (!data) {
      return next({
        message: `Car with id ${id} is not found!`,
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

exports.createCar = async (req, res, next) => {
  try {
    const {
      plate,
      manufacture,
      model,
      rentPerDay,
      capacity,
      transmission,
      available,
      type,
      year,
    } = req.body

    console.log(req.body)

    const { image } = req?.files?.image // get photo file

    if (!plate || plate == "") {
      return next({
        message: "Plate must be provided!",
        statusCode: 400,
      })
    }

    if (!manufacture || manufacture == "") {
      return next({
        message: "manufacture must be provided!",
        statusCode: 400,
      })
    }

    if (!model || model == "") {
      return next({
        message: "Model must be provided!",
        statusCode: 400,
      })
    }

    if (!rentPerDay || rentPerDay == "") {
      return next({
        message: "Rent per day must be provided!",
        statusCode: 400,
      })
    }

    if (!capacity || capacity == "") {
      return next({
        message: "Capacity must be provided!",
        statusCode: 400,
      })
    }

    if (!transmission || transmission == "") {
      return next({
        message: "Transmission must be provided!",
        statusCode: 400,
      })
    }

    if (!available || available == "") {
      return next({
        message: "Available must be provided!",
        statusCode: 400,
      })
    }

    if (!type || type == "") {
      return next({
        message: "Type must be provided!",
        statusCode: 400,
      })
    }

    if (!year || year == "") {
      return next({
        message: "Year must be provided!",
        statusCode: 400,
      })
    }

    const data = await carUsecase.createCar({
      ...req.body,
      image,
    })

    res.status(201).json({
      message: "Success",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.updateCar = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      plate,
      manufacture,
      model,
      rentPerDay,
      capacity,
      transmission,
      available,
      type,
      year,
    } = req.body
    const { image } = req?.files?.image

    if (!plate || plate == "") {
      return next({
        message: "Plate must be provided!",
        statusCode: 400,
      })
    }

    if (!manufacture || manufacture == "") {
      return next({
        message: "manufacture must be provided!",
        statusCode: 400,
      })
    }

    if (!model || model == "") {
      return next({
        message: "Model must be provided!",
        statusCode: 400,
      })
    }

    if (!rentPerDay || rentPerDay == "") {
      return next({
        message: "Rent per day must be provided!",
        statusCode: 400,
      })
    }

    if (!capacity || capacity == "") {
      return next({
        message: "Capacity must be provided!",
        statusCode: 400,
      })
    }

    if (!transmission || transmission == "") {
      return next({
        message: "Transmission must be provided!",
        statusCode: 400,
      })
    }

    if (!available || available == "") {
      return next({
        message: "Available must be provided!",
        statusCode: 400,
      })
    }

    if (!type || type == "") {
      return next({
        message: "Type must be provided!",
        statusCode: 400,
      })
    }

    if (!year || year == "") {
      return next({
        message: "Year must be provided!",
        statusCode: 400,
      })
    }

    const data = await carUsecase.updateCar(id, { ...req.body, image })

    res.status(200).json({
      message: "Successs",
      data,
    })
  } catch (error) {
    next(error)
  }
}

exports.deleteCar = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await carUsecase.deleteCar(id)

    res.status(200).json({
      message: "Successs",
      data,
    })
  } catch (error) {
    next(error)
  }
}
