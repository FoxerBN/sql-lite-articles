export const logoutUser = (req, res) => {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
  
      res.status(200).json({ message: "Logout successful" });
    } catch (err) {
      res.status(500).json({ error: "Failed to logout" });
    }
  };