import User from "../models/user.model.js";


export const readAll = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users); 
  } catch (error) {
    console.error("Error in reading users:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const createUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, password });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
    });
  } catch (error) {
    console.error("Error in creating user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error in deleting user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
