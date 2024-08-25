import express from "express";
const router = express.Router();

const userInfo = {
  userId: "john_doe_17091999",
  email: "john@xyz.com",
  rollNumber: "ABCD123",
};

router.post("/bfhl", (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input, expected an array.",
    });
  }

  const numbers = [];
  const alphabets = [];
  let highestLowercase = "";

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === "string") {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (item > highestLowercase) highestLowercase = item;
      }
    }
  });

  res.json({
    is_success: true,
    user_id: userInfo.userId,
    email: userInfo.email,
    roll_number: userInfo.rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
  });
});

router.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

export default router;
