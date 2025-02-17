import { Router } from "express";
import { create, findAll, findByQuery, findOne, Pagination, remove, update } from "../controllers/category.controller.js";

const categoryRouter = Router()
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category management
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
categoryRouter.get("/",findAll)
/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []  # Protects the route with JWT token
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Category details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */

categoryRouter.get("/:id",findOne)
/**
 * @swagger
 * /category/{page}/{take}:
 *   get:
 *     summary: Paginated list of categories
 *     tags: [Category]
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
 *         description: Paginated categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
categoryRouter.get("/:page/:take",Pagination)
/**
 * @swagger
 * /category/search:
 *   get:
 *     summary: Search categories by query
 *     tags: [Category]
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
 *         description: List of categories based on query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
categoryRouter.get("/search",findByQuery)
/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
categoryRouter.post("/",create)
/**
 * @swagger
 * /category/{id}:
 *   patch:
 *     summary: Update an existing category
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []  
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
categoryRouter.patch("/:id",update)
/**
 * @swagger
 * /category:
 *   delete:
 *     summary: Delete a category
 *     tags: [Category]
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
 *         description: Category deleted
 */
categoryRouter.delete("/",remove)

export default categoryRouter