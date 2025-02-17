import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/course.controller.js";

const courseController = Router()
/**
 * @swagger
 * tags:
 *   name: Course
 *   description: Course management with JWT authentication and image upload support
 */

/**
 * @swagger
 * /course:
 *   get:
 *     summary: Get all courses
 *     tags: [Course]
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
courseController.get("/",findAll)
/**
 * @swagger
 * /course/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Course]
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Course ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */

courseController.get("/:id",findOne)
/**
 * @swagger
 * /course/{page}/{take}:
 *   get:
 *     summary: Paginated list of courses
 *     tags: [Course]
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
 *         description: Paginated courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */

courseController.get("/:page/:take",Pagination)
/**
 * @swagger
 * /course/search:
 *   get:
 *     summary: Search courses by query
 *     tags: [Course]
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
 *         description: List of courses based on query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
courseController.get("/search",findByQuery)
/**
 * @swagger
 * /course:
 *   post:
 *     summary: Create a new course
 *     tags: [Course]
 *     security:
 *       - bearerAuth: []  
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               categoryId:
 *                 type: integer
 *               lessonCount:
 *                 type: integer
 *               continue:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary 
 *     responses:
 *       201:
 *         description: Course created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */
courseController.post("/",create)
/**
 * @swagger
 * /course/{id}:
 *   patch:
 *     summary: Update an existing course
 *     tags: [Course]
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Course ID
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               categoryId:
 *                 type: integer
 *               lessonCount:
 *                 type: integer
 *               continue:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary  
 *     responses:
 *       200:
 *         description: Course updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */

courseController.patch("/:id",update)
/**
 * @swagger
 * /course:
 *   delete:
 *     summary: Delete a course
 *     tags: [Course]
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
 *         description: Course deleted
 */

courseController.delete("/",remove)

export default courseController