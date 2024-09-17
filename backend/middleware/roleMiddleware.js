const adminOnly = (req, res, next) => {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
  };
  
  const managerOnly = (req, res, next) => {
    if (req.user.role !== 'Manager') {
      return res.status(403).json({ message: 'Access denied. Managers only.' });
    }
    next();
  };
  
  const employeeOnly = (req, res, next) => {
    if (req.user.role !== 'Employee') {
      return res.status(403).json({ message: 'Access denied. Employees only.' });
    }
    next();
  };
  
  module.exports = {
    adminOnly,
    managerOnly,
    employeeOnly,
  };
  
  