const User=require("../models/User");

  exports.login = async (req, res) => {
    
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      res.status(200).json({ message: "Login successful!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
