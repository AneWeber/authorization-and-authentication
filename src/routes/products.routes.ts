import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"

import {ensureAuthenticated} from "@/middlewares/ensureAuthenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

//apply authorization in all routes bellow:
//productsRoutes.use(verifyUserAuthorization(["sale", "admin"]))

//or use the authorization in a specific route:
productsRoutes.get("/", productsController.index)
productsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["sale", "admin"]), productsController.create)

export { productsRoutes }
