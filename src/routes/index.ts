import express from 'express';
import multer from "multer";
import { getAllBooks, addBook } from '../controllers';

const router = express.Router();

router.get("/", getAllBooks);

router.post("/add_book", addBook);


export default router;