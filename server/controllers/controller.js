import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers });
    res.json("Data inserted successfully");
  } catch (error) {
    res.json({ error });
  }
}

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json("Data deleted successfully");
  } catch (error) {
    res.json({ error });
  }
}

export async function updateQuestions(req, res) {
  res.json("Update Questions");
}

export async function getResult(req, res) {
  try {
    const r = await Result.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not Provided!");

    Result.create({ username, result, attempts, points, achieved });
    res.json("Data inserted successfully");
  } catch (error) {
    res.json({ error });
  }
}

export async function dropResult(req, res) {
  try {
    await Result.deleteMany();
    res.json("Data deleted successfully");
  } catch (error) {
    res.json({ error });
  }
}

export async function updateResult(req, res) {
  res.json("Update result");
}
