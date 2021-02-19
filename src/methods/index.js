
const invoice = (items) => items.reduce((sum, current) => sum + (current.price * current.qty), 0)    
export {invoice};


