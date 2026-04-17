import { Router } from "express";
import * as controller from "../controllers/owner.controller.js"

const router = Router();

// TODO ->
// Create a new Owner

router.post("/", controller.createOwner)

// Get all owners

router.post("/", controller.getAllOwners)

// get owner by their id

router.get("/:id", controller.getOwnerById)

// update owner

router.put("/:id", controller.updateOwner)

// delete owner

router.delete("/:id", controller.deleteOwner)

export default router;
