export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1';
  const variants = {
    primary: 'border-transparent text-white bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-500/50',
    secondary: 'border-transparent text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-600/50',
    outline: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
