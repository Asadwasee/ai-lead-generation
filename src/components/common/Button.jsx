export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer';
  const variants = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_18px_40px_rgba(16,185,129,0.28)] hover:shadow-[0_22px_50px_rgba(16,185,129,0.34)]',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.18)]',
    outline: 'border border-slate-300 text-slate-900 bg-white/80 backdrop-blur-md hover:bg-white hover:border-slate-400 shadow-[0_10px_30px_rgba(15,23,42,0.06)]'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
