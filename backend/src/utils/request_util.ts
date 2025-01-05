import { NextFunction, Request, Response } from 'express'

const parseResponse = (data: any) => {
  if (Array.isArray(data) || typeof (data) === 'object') {
    return data
  }

  if (![undefined, null].includes(data)) return { message: data }

  return undefined
}

const getErrorMessage = (error: any) => {
  const errorMessage = error.response?.data || error.messages || error.message || error.error

  return JSON.stringify(errorMessage)
}

type ControllerPromise = (req: Request, res: Response, next: NextFunction) => Promise<any>
type Controller = (req: Request, res: Response, next: NextFunction) => any

export const controllerHandler = (controller: ControllerPromise | Controller) => async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const data = await controller(request, response, next)

    response.status(200).json(parseResponse(data))
  } catch (error) {
    const errorMessage = getErrorMessage(error)

    response.status(500).json(parseResponse(errorMessage))
  }
}
