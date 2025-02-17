import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/lesson.controller.js";

const lessonController = Router()
/**
 * @swagger
 * tags:
 *   name: Lesson
 *   description: Lesson management with JWT authentication
 */

/**
 * @swagger
 * /lesson:
 *   get:
 *     summary: Get all lessons
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: List of lessons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lesson'
 */
lessonController.get("/",findAll)
/**
 * @swagger
 * /lesson/{id}:
 *   get:
 *     summary: Get a lesson by ID
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Lesson ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'
 */
lessonController.get("/:id",findOne)
/**
 * @swagger
 * /lesson/{page}/{take}:
 *   get:
 *     summary: Paginated list of lessons
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - name: page
 *         in: path
 *         description: Page number
 *         required: true
 *         schema:
 *           type: integer
 *       - name: take
 *         in: path
 *         description: Number of items per page
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated lessons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lesson'
 */

lessonController.get("/:page/:take",Pagination)
/**
 * @swagger
 * /lesson/search:
 *   get:
 *     summary: Search lessons by query
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - name: query
 *         in: query
 *         description: Search query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of lessons based on query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lesson'
 */

lessonController.get("/search",findByQuery)
/**
 * @swagger
 * /lesson:
 *   post:
 *     summary: Create a new lesson
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []  
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: integer
 *               description:
 *                 type: string
 *               link:
 *                 type: string
 *     responses:
 *       201:
 *         description: Lesson created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'
 */

lessonController.post("/",create)
/**
 * @swagger
 * /lesson/{id}:
 *   patch:
 *     summary: Update an existing lesson
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Lesson ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: integer
 *               description:
 *                 type: string
 *               link:
 *                 type: string
 *     responses:
 *       200:
 *         description: Lesson updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lesson'
 */

lessonController.patch("/:id",update)
/**
 * @swagger
 * /lesson:
 *   delete:
 *     summary: Delete a lesson
 *     tags: [Lesson]
 *     security:
 *       - bearerAuth: []  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Lesson deleted
 */

lessonController.delete("/",remove)

export default lessonController