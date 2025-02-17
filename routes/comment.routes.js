import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/comment.controller.js";

const commentController = Router()
/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Comment management with JWT authentication
 */

/**
 * @swagger
 * /comment:
 *   get:
 *     summary: Get all comments
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
 *     responses:
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */
commentController.get("/",findAll)/**
* @swagger
* /comment/{id}:
*   get:
*     summary: Get a comment by ID
*     tags: [Comment]
*     security:
*       - bearerAuth: []  # Protects the route with JWT token
*     parameters:
*       - name: id
*         in: path
*         description: Comment ID
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Comment details
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Comment'
*/

commentController.get("/:id",findOne)
/**
 * @swagger
 * /comment/{page}/{take}:
 *   get:
 *     summary: Paginated list of comments
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
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
 *         description: Paginated comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */

commentController.get("/:page/:take",Pagination)
/**
 * @swagger
 * /comment/search:
 *   get:
 *     summary: Search comments by query
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
 *     parameters:
 *       - name: query
 *         in: query
 *         description: Search query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of comments based on query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */

commentController.get("/search",findByQuery)
/**
 * @swagger
 * /comment:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *               userId:
 *                 type: integer
 *               star:
 *                 type: integer
 *               courseId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Comment created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */
commentController.post("/",create)
/**
 * @swagger
 * /comment/{id}:
 *   patch:
 *     summary: Update an existing comment
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Comment ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *               star:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Comment updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */

commentController.patch("/:id",update)
/**
 * @swagger
 * /comment:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comment]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
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
 *         description: Comment deleted
 */
commentController.delete("/",remove)
/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         comment:
 *           type: string
 *         userId:
 *           type: integer
 *         star:
 *           type: integer
 *         courseId:
 *           type: integer
 *       required:
 *         - comment
 *         - userId
 *         - star
 *         - courseId
 */
export default commentController