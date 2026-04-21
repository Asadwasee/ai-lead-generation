export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer';
  const variants = {
    primary: 'bg-green-500 text-slate-900 hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
    secondary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)]',
    outline: 'border-2 border-slate-700 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-slate-500'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
