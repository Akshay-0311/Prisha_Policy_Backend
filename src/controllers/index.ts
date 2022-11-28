import { Request, Response } from "express";
import pool from "../config/db";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const all_books = await pool.query("SELECT * FROM books");
    res.status(200).json({ all_books: all_books.rows });
  } catch (err) {
    console.log(err);
  }
};

export const addBook = (req: Request, res: Response) => {
  res.status(201).json({ msg: "Hi!! This is my world Book" });
};
