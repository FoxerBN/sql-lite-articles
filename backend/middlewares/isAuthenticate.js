import jwt from 'jsonwebtoken'

const isAuthenticated = (req,res,next) =>{
    const token = req.cookies?.token
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
      }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        console.log(req.user);
        next();
    } catch (error) {
        res.clearCookie('token');
        return res.status(403).json({ message: 'Invalid token. Access Denied.' });
    }
}

export default isAuthenticated;