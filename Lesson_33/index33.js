function validateEmail(email) {
    if (typeof email !== 'string' || email.trim().length < 5 || email.indexOf('@') === -1) {
      return false;
    }
    const parts = email.split('@');
    if (parts.length !== 2) {
      return false;
    }
    const domain = parts[1];
    if (domain.indexOf('.') === -1 || domain.indexOf('.') === 0 || domain.indexOf('.') === domain.length - 1 || domain.indexOf('..') !== -1) {
      return false;
    }
    return true;
  }