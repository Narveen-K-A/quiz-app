import { Router } from "express";
const router = Router();

/* Import controllers */
import * as controller from "../controllers/controller.js";

/* router.get("/questions", controller.getQuestions);
router.post("/questions", controller.insertQuestions);
 */
router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions)
  .put(controller.updateQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult)
  .put(controller.updateResult);

export default router;
