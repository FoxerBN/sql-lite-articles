import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, payload, secret, options = {}) => {
  try {
    const token = jwt.sign(payload, secret, { expiresIn: "1h", ...options });

    res.cookie("token", token, {
      httpOnly: true, 
      secure: true, 
      sameSite: "none", 
      maxAge: 3600000,
    });

    return token;
  } catch (err) {
    console.error("Error generating token:", err.message);
    throw new Error("Failed to generate token");
  }
};